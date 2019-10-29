const findFather = (dom, fatherName) => {
  if ($(dom).attr('class') === fatherName)
    return dom
  else
    return findFather($(dom).parent(), fatherName)
}

const groupAnimation = () => {
  let list = document.querySelector('.teamRight'),
    time = null,
    curTime = null,
    transformPoint = ['-14vw,-14vh', '3vw,15vh', '9vw,-6vh', '-12vw,8vh', '1vw,-25vh']
  list.addEventListener('mouseover', slideIn);
  list.addEventListener('mouseout', slideOut);

  function slideIn(e) {
    time = new Date()
    if ($(e.target).attr('class'))
      $(e.target).attr('class').match('Group') ? slide() : '';

    function slide() {
      let fatherDom = findFather(e.target, 'GroupImgBox'),
        arr = []

      $($(fatherDom).children().get(0)).css('transform', 'translateX(-200%)')
      $($(fatherDom).children().get(1)).css('transform', 'translateX(-200%)')
      $($(fatherDom)).next().css('opacity', '1')
      $('.backgroundImg').css('transform', 'translateX(50%)')
      technologyStackListShow()

      function technologyStackListShow() {

        switch ($($(fatherDom).next().children().get(0)).text()) {
          case '前端组:':
            arr = technologyStackList.fontEnd;
            break;
          case '后端组:':
            arr = technologyStackList.backEnd;
            break;
          case '游戏组:':
            arr = technologyStackList.game;
            break;
          case '安全组:':
            arr = technologyStackList.security;
            break;
          case '算法组:':
            arr = technologyStackList.algorithm;
            break;
          case 'python组:':
            arr = technologyStackList.python;
            break;
        }

        $('.teamLeftBox').empty()
        arr.map(item => {
          $('.teamLeftBox').append(`<img src=${item} class="teamLeftLogo">`)
        })

        setTimeout(() => {
          Array.from($('.teamLeftBox').children()).map((item, index) => {
            if (item)
              $(item).css('transform', `translate(${transformPoint[index - 1]})`)
          })
        }, 200)
      }

    }

  }

  function slideOut() {
    curTime = new Date()
    if (curTime - time >= 300) {
      $('.GroupLogo').css('transform', 'translateX(0)')
      $('.GroupComic').css('transform', 'translateX(0)')
      $('.groupText').css('opacity', '0')
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

const departmentHoverShow = () => {
  let list = document.querySelector('.department');
  list.addEventListener('mouseover', slideIn);
  list.addEventListener('mouseout', slideOut);
  let time = null,
    curTime = null

  function slideIn(e) {
    time = new Date()
    if ($(e.target).attr('class'))
      $(e.target).attr('class').match('Department') ? slide() : '';

    function slide() {
      let fatherDom = findFather(e.target, 'DepartmentContent')
      $($(fatherDom).children().last()).css('display', 'block').css('animation', 'hiddenImgJump .3s 1 forwards')
    }
  }

  function slideOut() {
    curTime = new Date()
    if (curTime - time >= 200) {
      $('.hiddenImg').css('display', 'none')
    }
  }
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

const generateStars = (n) => {
  for (let i = 0; i < n; i++) {
    let className = i % 20 == 0 ? 'star starBig' : i % 9 == 0 ? 'star starMedium' : 'star';
    let top = Math.round(Math.random() * window.innerHeight,
        left = Math.round(Math.random() * window.innerWidth),
        animationDuration = Math.round(Math.random() * 3000) + 3000),
      animationDelay = Math.round(Math.random() * 3000)

    $('.starBox').append($(`<div class="${className}"style ="top:${top}px;left:${left}px;animation-duration:${animationDuration}ms;animation-delay:${animationDelay}ms"></div>`));
  }
};

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

const dataImport = () => {
  addPresidiumContent(presidium)
  addGroupContent(group)
  addDepartmentContent(department)
  addProjectContent(project)
  addClouds()
}

const Load = () => {
  let pageIndex = 0;

  function loadAnimation() {
    let domClass = '';
    switch (pageIndex) {
      case 3:
        index = 0;
        domClass = '.DepartmentContent';
        break;
      case 4:
      case 5:
      case 6:
      case 7:
      case 8:
        index = 1;
        domClass = '.moonBox';
        break;
      case 9:
        index = 2;
        domClass = '.group';
        drawTeamEye()
        break;
      case 10:
      case 11:
      case 12:
      case 13:
        index = 3;
        domClass = '.competion';
        break;
      case 14:
        index = 4;
        domClass = '.projectContent';
        break;
    }
    fakeLoad(domClass)
  }

  function fakeLoad(domClass) {
    Array.from(document.querySelectorAll(domClass)).map((item, index) => {
      item.style.animation = `load .5s ${.1*index}s 1 forwards`
    })
  }

  window.onscroll = function () {
    let clientH = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    if (document.documentElement.scrollTop - clientH * 0.7 * pageIndex >= 0) {
      pageIndex++;
      if (pageIndex >= 3 && pageIndex <= 14)
        loadAnimation()
    }
  };
}

const allScroll = () => {
  const presidium = {
    'height': $(".presidium").height(),
    'offsetTop': $(".presidium").offset().top,
    'percent': 0,
    'left': $('.presidiumContent ul').offset().left - 100,
    'Y': 0,
    'index': 1,
    wholeHeight: function () {
      return this.offsetTop + this.height - window.innerHeight
    }
  }

  const illustrations = {
    'height': $(".illustrations").height(),
    'offsetTop': $(".illustrations").offset().top,
    'percent': 5,
    wholeHeight: function () {
      return this.offsetTop + this.height - window.innerHeight
    }
  }

  const activity = {
    'offsetTop': $(".activity").offset().top,
    'el': $('.activityImgBox').children(),
    'top': 0,
    'left': 0,
    'x0': 0,
    'y0': 0,
    'rorate': 0,
    'ImgTop': [
      $($('.competion')[0]).offset().top,
      $($('.competion')[1]).offset().top,
      $($('.competion')[2]).offset().top,
      $($('.competion')[3]).offset().top
    ]
  }

  const showObj = {
    'hiddenDom': [
      ['transform', 'skew(-20deg)'],
      ['animation', 'wordShake .8s infinite'],
      ['opacity', '0.5'],
      ['animation', 'competionOut .8s 1 forwards'],
      ['opacity', '0']

    ],
    'showDom': [
      ['transform', 'skew(0deg)'],
      ['animation', 'wordShake .8s 1'],
      ['opacity', '1'],
      ['animation', 'competionIn .8s 1 forwards'],
      ['opacity', '1']
    ]
  }

  function translateY(index, child, childYear) {
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

    $(child).css('transform', `translate3d(0,${Y}vh,0)`)
    $(childYear).css('opacity', '1')
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

  function presidiumScroll(e) {
    if (e.wheelDelta < 0) {
      presidium.percent += 8;

      if ($('.presidiumContent ul').offset().left - presidium.left <= 270 && presidium.index <= 14) {
        presidium.left = $('.presidiumContent ul').offset().left;

        let child = $('.presidiumContent ul').children().get(presidium.index),
          childYear = $(child).children().last().children().get(2)

        translateY(presidium.index, child, childYear)
        NumAutoPlusAnimation(childYear, {
          time: 1800,
          num: `${$(childYear).html()}`,
          regulator: 50
        })

        presidium.index++;
      }
    } else
      presidium.percent -= 8;

  }

  function activityImgScroll(e) {
    e.wheelDelta < 0 ?
      activityImgShow(activityImgShowDown) :
      activityImgShow(activityImgShowUp)

    function activityImgShowDown(ev) {
      let curDom = showDom(ev),
        nextDom = showDom($(ev).next())
      addAnimation(showObj.showDom, nextDom)
      addAnimation(showObj.hiddenDom, curDom)
    }

    function activityImgShowUp(ev) {
      let curDom = showDom(ev),
        nextDom = showDom($(ev).next())

      addAnimation(showObj.showDom, curDom)
      addAnimation(showObj.hiddenDom, nextDom)
    }

    function activityImgShow(func) {
      document.documentElement.scrollTop - activity.ImgTop[0] <= 0 ?
        $(activity.el.get(0)).find('img').css('opacity', '1').css('animation', 'competionIn .8s 1 forwards') :
        document.documentElement.scrollTop - activity.ImgTop[3] <= 0 ?
        $(activity.el.get(3)).find('img').css('opacity', '0').css('animation', 'competionOut .8s 1 forwards') : ''

      for (let i of [0, 1, 2])
        (document.documentElement.scrollTop - activity.ImgTop[i] > 0 && document.documentElement.scrollTop - activity.ImgTop[i + 1] <= 0) ?
        func($(activity.el.get(i))) : ''
    }

    function showDom(ev) {
      let arr = [
        $(ev).find('h1'),
        $(ev).find('h1').find('span'),
        $(ev).find('h1').find('span'),
        $(ev).find('img'),
        $(ev).find('img')
      ]
      return arr
    }

    function addAnimation(arr, dom) {
      arr.map((item, index) => {
        $(dom[index]).css(`${item[0]}`, `${item[1]}`)
      })
    }

  }

  function activityFlyGirlScroll(elementScrollTop) {
    activity.r = window.innerHeight * 1.5;
    if (elementScrollTop - activity.offsetTop + window.innerHeight * 0.2 >= 0 && elementScrollTop - (activity.offsetTop + window.innerHeight * 1.5) <= 0) {
      activity.y0 = elementScrollTop - activity.offsetTop;
      activity.left = Math.abs(Math.sqrt(Math.pow(activity.r, 2) - Math.pow(activity.y0, 2)) + activity.x0)
    } else {
      activity.y0 = elementScrollTop - (activity.offsetTop + window.innerHeight * 1.5)
      activity.left = Math.abs(Math.sqrt(Math.pow(activity.r, 2) + Math.pow(activity.y0, 2)) + activity.x0)
    }
    activity.top = elementScrollTop - activity.offsetTop + window.innerHeight * 0.40
    $('.activitySlideBox').css('top', `${activity.top}px`).css('left', `${activity.left}px`).css('transform', `rorate(${activity.rorate}deg)`)
  }

  function illustrationsScroll(e) {
    if (e.wheelDelta < 0) {
      if (illustrations.percent <= 5 && illustrations.percent > 1)
        illustrations.percent--
    } else {
      if (illustrations.percent < 5 && illustrations.percent >= 1)
        illustrations.percent++
    }
    if ($('#illustrationsTree').css('display') == 'none')
      $('#illustrationsTree').css('display', 'block')
    $('#illustrationsTree').css('transform', `scale(${illustrations.percent})`)

  }

  $(window).scroll(() => {
    window.onwheel = function (e) {
      e = e || window.event;
      if (e.wheelDelta) {
        const elementScrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        if (elementScrollTop > presidium.offsetTop && elementScrollTop < presidium.wholeHeight())
          presidiumScroll(e)
        else if (elementScrollTop > (presidium.offsetTop + presidium.height - window.innerHeight))
          percent = 136
        else if (elementScrollTop < presidium.offsetTop)
          percent = 0
        if (elementScrollTop > illustrations.offsetTop && elementScrollTop < illustrations.wholeHeight())
          illustrationsScroll(e)
        if (elementScrollTop - activity.offsetTop + window.innerHeight * 0.2 >= 0 && elementScrollTop - (activity.offsetTop + window.innerHeight * 2.3) <= 0) {
          if (elementScrollTop - document.documentElement.scrollTop < 180) {
            activityImgScroll(e, elementScrollTop)
            activityFlyGirlScroll(elementScrollTop)
          }
        }
        $('.presidiumContent ul').css('transform', `translate3d(-${presidium.percent}vw,0,0)`)
      }
    };
  })

}

if (window.innerWidth >= 768) {
  groupAnimation()
  projectSlideShow()
  Load()
  allScroll()
  dataImport()
  presidiumShow()
  departmentHoverShow()
} else {
  addPresidiumMobileContent(presidium)
}


generateStars(150);
nav()