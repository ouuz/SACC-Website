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
        }, 3000)
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

const activityShow = () => {
  let list = document.querySelector('.activity');
  list.addEventListener('mouseover', slideIn);
  list.addEventListener('mouseout', slideOut);

  function slideIn(e) {
    $(e.target).attr('class') == 'competionName Odd' ||
      $(e.target).attr('class') == 'pale' ? slideOdd() : '';

    $(e.target).attr('class') == 'competionName Even' ||
      $(e.target).attr('class') == 'pale' ? slideEven() : '';

    function slideOdd() {
      $(e.target).attr('class') == 'pale' ?
        slideodd($(e.target), $(e.target).parent()) :
        slideodd($(e.target).children().first(), $(e.target))

      function slideodd(ev1, ev2) {
        $(ev1).css('opacity', '1')
        $(ev1).css('animation', 'wordShake .8s 1')
        $(ev2).css('transform', 'skew(0deg)')
        $(ev2).next().css('animation', 'competionInOdd .8s 1 forwards')
      }
    }

    function slideEven() {
      $(e.target).attr('class') == 'pale' ?
        slideeven($(e.target), $(e.target).parent()) :
        slideeven($(e.target).children().first(), $(e.target))

      function slideeven(ev1, ev2) {
        $(ev1).css('opacity', '1')
        $(ev1).css('animation', 'wordShake .8s 1')
        $(ev2).css('transform', 'skew(0deg)')
        $(ev2).next().css('animation', 'competionInEven .8s 1 forwards')
      }
    }
  }

  function slideOut(e) {
    $(e.target).attr('class') == 'competionName Odd' ||
      $(e.target).attr('class') == 'pale' ? slideOdd() : '';

    $(e.target).attr('class') == 'competionName Even' ||
      $(e.target).attr('class') == 'pale' ? slideEven() : '';

    function slideOdd() {
      $(e.target).attr('class') == 'pale' ?
        slideodd($(e.target), $(e.target).parent()) :
        slideodd($(e.target).children().first(), $(e.target))

      function slideodd(ev1, ev2) {
        $(ev1).css('opacity', '0.5')
        $(ev1).css('animation', 'wordShake .8s infinite')
        $(ev2).css('transform', 'skew(-20deg)')
        $(ev2).next().css('animation', 'competionOutOdd .8s 1 forwards')
      }
    }

    function slideEven() {
      $(e.target).attr('class') == 'pale' ?
        slideeven($(e.target), $(e.target).parent()) :
        slideeven($(e.target).children().first(), $(e.target))

      function slideeven(ev1, ev2) {
        $(ev1).css('opacity', '0.5')
        $(ev1).css('animation', 'wordShake .8s infinite')
        $(ev2).css('transform', 'skew(-20deg)')
        $(ev2).next().css('animation', 'competionOutEven .8s 1 forwards')
      }
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
  $(window).scroll(function () {
    const elementScrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    window.onmousewheel = function (e) {
      e = e || window.event;
      if (e.wheelDelta) {
        if (elementScrollTop > beforeOffsetTop && elementScrollTop < (beforeOffsetTop + selfHeight - window.innerHeight)) {
          if (e.wheelDelta < 0) {
            percent += 8;
            console.log(percent)
            $('.presidiumContent ul').css('transform', `translate3d(-${percent}vw,0,0)`)
          } else {
            percent -= 8;
            console.log(percent)
            $('.presidiumContent ul').css('transform', `translate3d(-${percent}vw,0,0)`)
          }
        } else if (elementScrollTop > (beforeOffsetTop + selfHeight - window.innerHeight)) {
          percent = 150
          $('.presidiumContent ul').css('transform', `translate3d(-${percent}vw,0,0)`)
        } else if (elementScrollTop < beforeOffsetTop) {
          percent = 0
          $('.presidiumContent ul').css('transform', `translate3d(-${percent}vw,0,0)`)
        }
      }
    };
  })

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
  const selfHeight = $(".activity").height();
  let beforeOffsetTop = $(".activity").offset().top;
  let percentX = 65,
    percentY = 0;
  let percent = [
    [65,0],
    [20,20],
    [40,45],
    [60,85]
  ]
  $(window).scroll(function () {
    const elementScrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    window.onmousewheel = function (e) {
      e = e || window.event;
      if (e.wheelDelta) {
        if (elementScrollTop > beforeOffsetTop && elementScrollTop < (beforeOffsetTop + selfHeight - window.innerHeight)) {
          if (e.wheelDelta < 0) {   //向下
            console.log(percentX, percentY)
            percentY += 5;
console.log((elementScrollTop,window.innerHeight  * 3 + beforeOffsetTop ) * 0.8)
            if(elementScrollTop - ((window.innerHeight * 3 + beforeOffsetTop) * 0.2) >= 0 ){
              console.log(111111111)
              percentX -= 5;
            }else{
              console.log(222222222)
                percentX += 6;
              }
            $('.activitySlideBox').css('top',`${percentY}%`).css('left',`${percentX}%`)
          }else{
            console.log(percentX, percentY)
            percentY -= 5;
            if(percentX <= 65 && percentX >= 30){
              percentX += 5;
            }else{
                percentX += 6;
              }
            $('.activitySlideBox').css('top',`${percentY}%`).css('left',`${percentX}%`)
          }
        }
      }
    };
  })

}

generateStars(150);
teamImgToText()
// activityShow()
// projectSlideShow()
presidiumScroll()
activityScroll()