const activityMobileDrag = (moveClass) => {
  let list = document.querySelector(moveClass),
    then, now, index = 0,
    length = $(moveClass).children().length;
  list.addEventListener('touchmove', dragDown);
  list.addEventListener('touchend', dragUp);

  function dragDown(touchItem) {
    then = touchItem.changedTouches[0].pageX;
  }

  function dragUp(touchItem) {
    now = touchItem.changedTouches[0].pageX;
    if (now - then <= 0) {
      index = (index + 1) % length
    } else if (now - then >= 0) {
      index = (index - 1) % length
    }
    $(moveClass).css('transform', `translateX(${index * (-25)}%)`)
  }

  var activityInterval = setInterval(() => {
    index = (index + 1) % length;
    $(moveClass).css('transform', `translateX(${index * (-25)}%)`)
  }, 3000)
}

const presidiumMobileDrag = (moveClass) => {
  let list = document.querySelector(moveClass),
    then, now, index = 0,
    length = $(moveClass).children().length;
  list.addEventListener('touchmove', dragDown);
  list.addEventListener('touchend', dragUp);

  function dragDown(touchItem) {
    then = touchItem.changedTouches[0].pageX;
  }

  function dragUp(touchItem) {
    now = touchItem.changedTouches[0].pageX;
    if (now - then <= 5) {
      index = (index + 1) % length
    } else if (now - then >= 0) {
      index = (index - 1) % length
    }
    $(moveClass).css('transform', `translateX(${index * (-20)}%)`)
  }

}

const presidiumMobileShow = () => {
  let list = document.querySelector('.presidiumMobile_2019 ul');
  list.addEventListener('click', show);

  function show(e) {
    e.target.className == 'presidiumMobileName' ? Show() : ''
    function Show() {
      $($(e.target).parent().parent()).css('animation', 'mobileImgScale .5s forwards')
      $($(e.target).parent().parent().next()).css('display', 'block').css('opacity', '1').css('animation','mobileTextScale .5s forwards')
    }
  }
}

activityMobileDrag('.activityImgBox')
presidiumMobileDrag('.presidiumMobile_2019 ul')
presidiumMobileShow()