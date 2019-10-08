const teamImgToText = () => {
  let list = document.querySelector('.teamRight');
  list.addEventListener('mouseover', slideIn);
  list.addEventListener('mouseout', slideOut);

  function slideIn(e) {
    e.target.classList.contains('groupImgBox') ? slide() : '';

    function slide() {
      $($(e.target).children().get(0)).css('transform', 'translateX(-200%)')
      $($(e.target).children().get(1)).css('transform', 'translateX(-200%)')
      $(e.target).next().css('opacity', '1')
      $('.teamLeft').empty().append(`
      <img src=${$($(e.target).children().get(0)).attr('src')} alt=""  class="teamLeftLogo">
      `)
    }
  }

  function slideOut(e) {
    e.target.classList.contains('groupText') ? slide() : '';

    function slide() {
      setTimeout(() => {
        $($(e.target).prev().children().get(0)).css('transform', 'translateX(0)')
        $($(e.target).prev().children().get(1)).css('transform', 'translateX(0)')
        $(e.target).css('opacity', '0')
      }, 100)
    }
  }
}

const presidiumDrag = () => {
  $('.presidiumBottom').bind("selectstart", function () {
    return false;
  });

  let list = document.querySelector('.presidiumBottom'),
    then, now;
  list.addEventListener('mousedown', dragDown);
  list.addEventListener('mouseup', dragUp);

  function dragDown(e) {
    then = e.offsetX;
  }

  function dragUp(e) {
    now = e.offsetX;
    (now - then < 50) && (now - then < 0) ?
    $('.presidiumBottom').css('transform', 'translateX(-50%)'):
      $('.presidiumBottom').css('transform', 'translateX(0)')
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
      if ($(e.target).attr('class') == 'pale') {
        $(e.target).css('opacity', '1')
        $(e.target).css('animation', 'wordShake .8s 1')
        $(e.target).parent().css('transform', 'skew(0deg)')
        $(e.target).parent().next().css('animation', 'competionInOdd .8s 1 forwards')
      } else {
        $(e.target).children().first().css('opacity', '1')
        $(e.target).children().first().css('animation', 'wordShake .8s 1')
        $(e.target).next().css('animation', 'competionInOdd .8s 1 forwards')
        $(e.target).css('transform', 'skew(0deg)')
      }
    }

    function slideEven() {
      if ($(e.target).attr('class') == 'pale') {
        $(e.target).css('opacity', '1')
        $(e.target).css('animation', 'wordShake .8s 1')
        $(e.target).parent().css('transform', 'skew(0deg)')
        $(e.target).parent().next().css('animation', 'competionInEven .8s 1 forwards')
      } else {
        $(e.target).children().first().css('opacity', '1')
        $(e.target).children().first().css('animation', 'wordShake .8s 1')
        $(e.target).next().css('animation', 'competionInEven .8s 1 forwards')
        $(e.target).css('transform', 'skew(0deg)')
      }
    }
  }

  function slideOut(e) {
    $(e.target).attr('class') == 'competionName Odd' ||
      $(e.target).attr('class') == 'pale' ? slideOdd() : '';

    $(e.target).attr('class') == 'competionName Even' ||
      $(e.target).attr('class') == 'pale' ? slideEven() : '';

    function slideOdd() {
      if ($(e.target).attr('class') == 'pale') {
        $(e.target).css('opacity', '0.5')
        $(e.target).css('animation', 'wordShake .8s infinite')
        $(e.target).parent().css('transform', 'skew(-20deg)')
        $(e.target).parent().next().css('animation', 'competionOutOdd .8s 1 forwards')
      } else {
        $(e.target).children().first().css('opacity', '0.5')
        $(e.target).children().first().css('animation', 'wordShake .8s infinite')
        $(e.target).next().css('animation', 'competionOutOdd .8s 1 forwards')
        $(e.target).css('transform', 'skew(-20deg)')
      }
    }

    function slideEven() {
      if ($(e.target).attr('class') == 'pale') {
        $(e.target).css('opacity', '0.5')
        $(e.target).css('animation', 'wordShake .8s infinite')
        $(e.target).parent().css('transform', 'skew(-20deg)')
        $(e.target).parent().next().css('animation', 'competionOutEven .8s 1 forwards')
      } else {
        $(e.target).children().first().css('opacity', '0.5')
        $(e.target).children().first().css('animation', 'wordShake .8s infinite')
        $(e.target).next().css('animation', 'competionOutEven .8s 1 forwards')
        $(e.target).css('transform', 'skew(-20deg)')
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
      $(e.target).css('opacity','0')
      $(e.target).prev().prev().css('background','green')
      setTimeout(() =>{
        let img = $(e.target).prev().children().children();
        $(img).css('transform',`translateY(${$(img).parent().parent().height() - $(img).height()}px)`)
      },500)
    }

  }

  function slideDown(e) {
    $(e.target).attr('class') == 'blackScreen' ? down() : '';

    function down() {
      $(e.target).prev().children().children().css('transform','translateY(0)')
      $(e.target).css('opacity','1')
      $(e.target).prev().prev().css('background','red')
    }
  }
}

teamImgToText()
presidiumDrag()
activityShow()
projectSlideShow()