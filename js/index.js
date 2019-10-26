const teamImgToText = () => {
  let list = document.querySelector('.teamRight');
  list.addEventListener('mouseover', slideIn);
  list.addEventListener('mouseout', slideOut);

  function slideIn(e) {
    $(e.target).attr('class') == 'groupImgBox' ||
      $(e.target).attr('class') == "groupLogo" ||
      $(e.target).attr('class') == "groupComic" ? slide() : '';

    function slide() {
      $(e.target).attr('class') == 'groupImgBox' ?
        Slide($(e.target).children().get(0), $(e.target).children().get(1), $(e.target)) :
        $(e.target).attr('class') == "groupLogo" ?
        Slide($(e.target), $(e.target).next(), $(e.target).parent()) :
        $(e.target).attr('class') == "groupComic" ?
        Slide($(e.target).prev(), $(e.target), $(e.target).parent()) : '';

      function Slide(ev1, ev2, ev3) {
        $(ev1).css('transform', 'translateX(-200%)')
        $(ev2).css('transform', 'translateX(-200%)')
        $(ev3).next().css('opacity', '1')
        $('.backgroundImg').css('transform', 'translateX(50%)')
      }

      $(e.target).attr('class') == "groupLogo" ?
        bounce($(e.target)) :
        $(e.target).attr('class') == "groupComic" ?
        bounce($(e.target).prev()) : '';

      function bounce(ev1) {
        $('.teamLeftBox').empty().append(`
          <img src=${$(ev1).attr('src')}  class="teamLeftLogo" >
          <img src=${$(ev1).attr('src')}  class="teamLeftLogo" >
          <img src=${$(ev1).attr('src')}  class="teamLeftLogo" >
          <img src=${$(ev1).attr('src')}  class="teamLeftLogo" >
          <img src=${$(ev1).attr('src')}  class="teamLeftLogo" >
          <img src=${$(ev1).attr('src')}  class="teamLeftLogo" >
        `)
        setTimeout(() => {
          $($('.teamLeftBox').children()[1]).css('transform', 'translate(-14vw,-14vh)').css('width', '105px')
          $($('.teamLeftBox').children()[2]).css('transform', 'translate(3vw,15vh)').css('width', '140px')
          $($('.teamLeftBox').children()[3]).css('transform', 'translate(9vw,-6vh)').css('width', '120px')
          $($('.teamLeftBox').children()[4]).css('transform', 'translate(-12vw,8vh)').css('width', '130px')
          $($('.teamLeftBox').children()[5]).css('transform', 'translate(1vw,-25vh)').css('width', '100px')
        }, 200)
      }

    }
  }

  function slideOut(e) {
    $(e.target).attr('class') == 'groupText' ? slide() : '';

    function slide() {
      setTimeout(() => {
        $($(e.target).prev().children().get(0)).css('transform', 'translateX(0)')
        $($(e.target).prev().children().get(1)).css('transform', 'translateX(0)')
        $(e.target).css('opacity', '0')
      }, 50)
    }
  }
}

const projectSlideShow = () => {
  let list = document.querySelector('.project');
  list.addEventListener('mouseover', slideUp);
  list.addEventListener('mouseout', slideDown);

  function slideUp(e) {
    $(e.target).attr('class') == 'blackScreen' ? up() : '';

    function up() {
      $(e.target).css('opacity', '0')
      $(e.target).prev().prev().css('background', 'green')
      setTimeout(() => {
        let img = $(e.target).prev().children().children();
        $(img).css('transform', `translateY(${$(img).parent().parent().height() - $(img).height()}px)`)
      }, 500)
    }

  }

  function slideDown(e) {
    $(e.target).attr('class') == 'blackScreen' ? down() : '';

    function down() {
      $(e.target).prev().children().children().css('transform', 'translateY(0)')
      $(e.target).css('opacity', '1')
      $(e.target).prev().prev().css('background', 'red')
    }
  }
}

const presidiumScroll = () => {
  const selfHeight = $(".presidium").height();
  let beforeOffsetTop = $(".presidium").offset().top;
  let percent = 0;
  let left = $('.presidiumContent ul').offset().left - 100;
  let children = $('.presidiumContent ul').children()
  let Y = 0
  let index = 1

  function translateY() {
    index == 1 || index == 6 || index == 11 ?
      Y = -15 :
      index == 2 || index == 7 || index == 12 ?
      Y = -8 :
      index == 3 || index == 8 || index == 13 ?
      Y = -5 :
      index == 4 || index == 9 || index == 14 ?
      Y = -12 :
      index == 5 || index == 10 ?
      Y = -10 : ''
  }

  function NumAutoPlusAnimation(targetEle, options) {
    let time = options.time,
      finalNum = options.num,
      regulator = options.regulator
    step = finalNum / (time / regulator),
      count = 0,
      initial = 0;

    let timer = setInterval(function () {
      count = count + step;
      if (count >= finalNum) {
        clearInterval(timer);
        count = finalNum;
      }
      let t = Math.floor(count);
      initial = t;
      $(targetEle).html(`${initial}`)
      if (isNaN(t)) $(targetEle).html(`${finalNum}`)
      if (t == initial) return;
    }, 30);
  }

  $(window).scroll(() => {
    const elementScrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    window.onwheel = function (e) {
      e = e || window.event;
      if (e.wheelDelta) {
        if (elementScrollTop > beforeOffsetTop && elementScrollTop < (beforeOffsetTop + selfHeight - window.innerHeight)) {
          if (e.wheelDelta < 0) {
            percent += 8;
            this.console.log(percent)
            if ($('.presidiumContent ul').offset().left - left <= 270 && index <= 14) {
              left = $('.presidiumContent ul').offset().left;
              translateY()
              $($(children).get(index)).css('transform', `translate3d(0,${Y}vh,0)`)
              let a = $($(children).get(index)).children().last().children().get(2)
              setTimeout(() => {
                NumAutoPlusAnimation(a, {
                  time: 1800,
                  num: `${$(a).html()}`,
                  regulator: 50
                })
              }, 50);
              $($($(children).get(index)).children().last().children().get(2)).css('opacity', '1')
              index++;
            }
          } else
            percent -= 8;
        } else if (elementScrollTop > (beforeOffsetTop + selfHeight - window.innerHeight))
          percent = 136
        else if (elementScrollTop < beforeOffsetTop)
          percent = 0
        $('.presidiumContent ul').css('transform', `translate3d(-${percent}vw,0,0)`)
      }
    };
  })

}

const presidiumShow = () => {
  let list = document.querySelector('.presidiumContent ul');
  list.addEventListener('mouseover', slideIn);
  list.addEventListener('mouseout', slideOut);

  function slideIn(e) {
    e.target.className == 'PresidiumName' ? slide() : ''

    function slide() {
      e.target.className == 'PresidiumName' ?
        Slide($(e.target).next().next()) : ''

      function Slide(ev) {
        $(ev).css('opacity', '1').css('border', '3px solid #838ecccf').css('transition', 'border-top-color 0.1s linear 0.3s, border-right-color 0.1s linear 0.1s, border-bottom-color 0.1s linear 0s, border-left-color 0.1s linear 0.11s')
        setTimeout(() => {
          $(ev).find('p').css('opacity', '1')
        }, 200)
      }

    }
  }

  function slideOut(e) {
    e.target.className == 'PresidiumName' ? slide() : ''

    function slide() {
      e.target.className == 'PresidiumName' ?
        Slide($(e.target).next().next()) : ''

      function Slide(ev) {
        $(ev).css('border', '3px solid transparent').css('transition', 'border-top-color 0.2s linear 0s, border-right-color 0.2s linear 0.21s, border-bottom-color 0.2s linear 0.3s, border-left-color 0.2s linear 0.21s')
        $(ev).find('p').css('opacity', '0')
        setTimeout(() => {
          $(ev).css('opacity', '0')
        }, 400)
      }
    }
  }
}

function generateStars(n) {
  for (let i = 0; i < n; i++) {
    let className = i % 20 == 0 ? 'star starBig' : i % 9 == 0 ? 'star starMedium' : 'star';
    let top = Math.round(Math.random() * window.innerHeight,
        left = Math.round(Math.random() * window.innerWidth),
        animationDuration = Math.round(Math.random() * 3000) + 3000),
      animationDelay = Math.round(Math.random() * 3000)

    $('.starBox').append($(`<div class="${className}"style ="top:${top}px;left:${left}px;animation-duration:${animationDuration}ms;animation-delay:${animationDelay}ms"></div>`));
  }
};

const activityScroll = () => {
  let beforeOffsetTop = $(".activity").offset().top,
    elementScrollTop = document.documentElement.scrollTop,
    el = $('.activityImgBox').children(),
    top = elementScrollTop - beforeOffsetTop,
    left = 0,
    x0 = 0,
    r = 0,
    y0 = 0,
    rorate = 0,
    ImgTop = [
      $($('.competion')[0]).offset().top,
      $($('.competion')[1]).offset().top,
      $($('.competion')[2]).offset().top,
      $($('.competion')[3]).offset().top
    ];

  $(window).scroll(() => {
    elementScrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    if (elementScrollTop - beforeOffsetTop + window.innerHeight * 0.2 >= 0 && elementScrollTop - (beforeOffsetTop + window.innerHeight * 2.3) <= 0) {
      if (elementScrollTop - document.documentElement.scrollTop < 180) {
        window.onwheel = function (e) {
          e.wheelDelta < 0 ?
            activityImgShow(activityImgShowDown) :
            activityImgShow(activityImgShowUp)
        }

        if (elementScrollTop - beforeOffsetTop + window.innerHeight * 0.2 >= 0 && elementScrollTop - (beforeOffsetTop + window.innerHeight * 1.5) <= 0) {
          r = window.innerHeight * 1.5;
          y0 = elementScrollTop - beforeOffsetTop;
          left = Math.abs(Math.sqrt(Math.pow(r, 2) - Math.pow(y0, 2)) + x0)
        } else {
          r = window.innerHeight * 1.5;
          y0 = elementScrollTop - (beforeOffsetTop + window.innerHeight * 1.5)
          left = Math.abs(Math.sqrt(Math.pow(r, 2) + Math.pow(y0, 2)) + x0)
        }

        top = elementScrollTop - beforeOffsetTop + window.innerHeight * 0.35
        $('.activitySlideBox').css('top', `${top}px`).css('left', `${left}px`).css('transform', `rorate(${rorate}deg)`)
      }
    }
  })

  function activityImgShow(func) {
    elementScrollTop - ImgTop[0] <= 0 ?
      $(el.get(0)).find('img').css('opacity', '1').css('animation', 'competionIn .8s 1 forwards') :
      (elementScrollTop - ImgTop[0] > 0 && elementScrollTop - ImgTop[1] <= 0) ?
      func($(el.get(0))) :
      (elementScrollTop - ImgTop[1] > 0 && elementScrollTop - ImgTop[2] <= 0) ?
      func($(el.get(1))) :
      (elementScrollTop - ImgTop[2] > 0 && elementScrollTop - ImgTop[3] <= 0) ?
      func($(el.get(2))) :
      $(el.get(3)).find('img').css('opacity', '0').css('animation', 'competionOut .8s 1 forwards')
  }

  function activityImgShowDown(ev) {
    $(ev).find('h1').css('transform', 'skew(-20deg)')
    $(ev).find('h1').find('span').css('animation', 'wordShake .8s infinite').css('opacity', '0.5')
    $(ev).next().find('h1').css('transform', 'skew(0deg)')
    $(ev).next().find('h1').find('span').css('animation', 'wordShake .8s 1').css('opacity', '1')
    $(ev).find('img').css('opacity', '0').css('animation', 'competionOut .8s 1 forwards')
    $(ev).next().find('img').css('opacity', '1').css('animation', 'competionIn .8s 1 forwards')
  }

  function activityImgShowUp(ev) {
    $(ev).find('img').css('opacity', '1').css('animation', 'competionIn .8s 1 forwards')
    $(ev).next().find('img').css('opacity', '0').css('animation', 'competionOut .8s 1 forwards')
    $(ev).next().find('h1').css('transform', 'skew(-20deg)')
    $(ev).next().find('h1').find('span').css('animation', 'wordShake .8s infinite').css('opacity', '0.5')
    $(ev).find('h1').css('transform', 'skew(0deg)')
    $(ev).find('h1').find('span').css('animation', 'wordShake .8s 1').css('opacity', '1')
  }
}

const nav = () => {
  let list = document.querySelector('.nav ul')
  list.addEventListener('mouseover', slideIn);
  list.addEventListener('mouseout', slideOut);

  function slideIn(e) {
    e.target.className == 'navigation' || e.target.className == 'stick' ? slide() : ''

    function slide() {
      $(e.target).find('.stick').css('opacity', '1')
      e.target.className == 'navigation' ?
        Slide($(e.target).find('.stick')) :
        e.target.className == 'stick' ? Slide($(e.target)) : ''

      function Slide(ev) {
        $(ev).find('.stick').css('opacity', '1')
      }
    }
    console.log(e.target.className)
  }

  function slideOut(e) {
    e.target.className == 'navigation' || e.target.className == 'stick' ? slide() : ''

    function slide() {
      $(e.target).find('.stick').css('opacity', '0')
      e.target.className == 'navigation' ?
        Slide($(e.target).find('.stick')) :
        e.target.className == 'stick' ? Slide($(e.target)) : ''

      function Slide(ev) {
        $(ev).find('.stick').css('opacity', '0')
      }
    }
    console.log(e.target.className)
  }
  $('#nav').click(() => {
    $('.nav').css('opacity') == '0' ? navShow() : navHidden()

    function navShow() {
      $('.nav').css('display', 'block')
      setTimeout(() => {
        $('.nav li').css('opacity', '1')
        $('.nav').css('opacity', '1').css('animation', 'navShow .5s 1 forwards')
      }, 100)
    }

    function navHidden() {
      $('.nav').css('animation', 'navHidden .5s 1 forwards')
      $('.nav li').css('opacity', '0')
      setTimeout(() => {
        $('.nav').css('opacity', '0').css('displey', 'none')
      }, 400)
    }
  })
}

const addPresidiumContent = (arr) => {
  arr.map(item => {
    $('.presidiumContent ul').append(`
    <li class="Presidium">
      <div class="PresidiumPortrait">
        <img src=${item.portraitSrc} alt="">
      </div>
      <h3>
        <div class="PresidiumTag">${item.position}</div>
        <p class="PresidiumName">${item.name}</p>
        <div class="PresidiumYear">${item.year}</div>
        <div class="PresidiumSaying">
          <span class="u-tri"></span>
          <p>${item.signature}</p>
        </div>
      </h3>
    </li>
    `)
  })

  $('.presidiumContent ul').append(`          
  <li class="musicpaper eq0"><div class="end"></div></li>
  <li class="musicpaper eq1"></li>
  <li class="musicpaper eq2"></li>
  <li class="musicpaper eq3"></li>
  <li class="musicpaper eq4"><div class="end"></div></li>`)
}

const addPresidiumMobileContent = (arr) => {
  arr.map((item, index) => {
    if (index <= 4)
      $('.presidiumMobile_2019 ul').append(`
        <li>
          <div class="presidiumMobileDes">
            <div class="presidiumMobilePortrait">
              <img src=${item.portraitSrc} alt="">
            </div>
            <h3>
              <div class="presidiumMobileTag">${item.position}</div>
              <p class="presidiumMobileName">${item.name}</p>
              <div class="presidiumMobileYear">${item.year}</div>
            </h3>
          </div>
          <div class="presidiumMobileSaying">
            <p>${item.signature}</p>
          </div>
        </li>
      `)
    else if (index > 4 && index <= 9)
      $('.presidiumMobile_2018 ul').append(`
        <li>
          <div class="presidiumMobileDes">
            <div class="presidiumMobilePortrait">
              <img src=${item.portraitSrc} alt="">
            </div>
            <h3>
              <div class="presidiumMobileTag">${item.position}</div>
              <p class="presidiumMobileName">${item.name}</p>
              <div class="presidiumMobileYear">${item.year}</div>
            </h3>
          </div>
          <div class="presidiumMobileSaying">
            <p>${item.signature}</p>
          </div>
        </li>
      `)
    else
      $('.presidiumMobile_2017 ul').append(`
        <li>
          <div class="presidiumMobileDes">
            <div class="presidiumMobilePortrait">
              <img src=${item.portraitSrc} alt="">
            </div>
            <h3>
              <div class="presidiumMobileTag">${item.position}</div>
              <p class="presidiumMobileName">${item.name}</p>
              <div class="presidiumMobileYear">${item.year}</div>
            </h3>
          </div>
          <div class="presidiumMobileSaying">
            <p>${item.signature}</p>
          </div>
        </li>
      `)
  })
}

const addGroupContent = (arr) => {
  arr.map(item => {
    $('.teamRight').append(`
    <div class="group">
    <div class="groupImgBox">
      <img src=${item.groupImgSrc} alt="" class="groupLogo">
      <img src=${item.groupComicImgSrc} alt="" class="groupComic">
    </div>
    <div class="groupText">
      <p>${item.des}</p>
      <div class="borderTopLeft"></div>
      <div class="borderBottomRight"></div>
    </div>
  </div>
    `)
  })
}

const addClouds = () => {
  $('.cloudBoxA').append(
    FirstCloud.create(),
    SecondCloud.create(),
    ThirdCloud.create(),
    FirstCloud.create(),
    SecondCloud.create(),
    ThirdCloud.create(),
    FirstCloud.create(),
    FirstCloud.create()
  )
  $('.cloudBoxB').append(
    FirstCloud.create(),
    FirstCloud.create(),
    SecondCloud.create(),
    SecondCloud.create(),
    ThirdCloud.create()
  )
  $('.cloudBoxC').append(
    FirstCloud.create(),
    FirstCloud.create(),
    SecondCloud.create(),
    ThirdCloud.create()
  )
}

const addDepartmentContent = (arr) => {
  arr.map(item => {
    $('.department').append(`
    <div class="departmentContent">
      <div class="departmentContentImg">
        <img src=${item.departmentImgSrc} alt="">
      </div>
      <p>${item.departmentText}</p>
    </div>
  `)
  })
}

const addProjectContent = (arr) => {
  arr.map(item => {
    $('.project').append(`
    <div class="projectContent">
      <div class="light"></div>
      <div class="projectImgBox">
        <a href=${item.projectLink}target="_blank"><img src=${item.projectImgSrc}
            alt="" class="projectImg"></a>
      </div>
      <div class="blackScreen"></div>
    </div>
  `)
  })
}

if (window.innerWidth >= 768) {
  teamImgToText()
  projectSlideShow()
  addPresidiumContent(presidium)
  addGroupContent(group)
  addDepartmentContent(department)
  addProjectContent(project)
  addClouds()
  presidiumScroll()
  activityScroll()
  presidiumShow()
} else {
  addPresidiumMobileContent(presidium)
}


generateStars(150);
nav()