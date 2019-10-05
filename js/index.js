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

const competionShow = () => {
  let list = document.querySelector('.activity');
  list.addEventListener('mouseover', slideIn);
  list.addEventListener('mouseout', slideOut);

  function slideIn(e) {
    e.target.classList.contains('competionName') ? slide() : '';
    function slide() {
      $(e.target).next().css('animation', 'competionIn 1s 1 forwards')
    }
  }

  function slideOut(e) {
    e.target.classList.contains('competionName') ? slide() : '';
    function slide() {
      $(e.target).next().css('animation','competionOut 1s 1 forwards')
    }
  }
}


teamImgToText()
presidiumDrag()
competionShow()