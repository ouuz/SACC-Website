const activityMobileDrag = () => {
  let list = document.querySelector('.activityImgBox'),
    then, now, index = 0,
    length = $('.activityImgBox').children().length;
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
    $('.activityImgBox').css('transform', `translateX(${index * (-25)}%)`)
  }
console.log(111111111)
  var activityInterval = setInterval(() => {
    index = (index + 1) % length;
    $('.activityImgBox').css('transform', `translateX(${index * (-25)}%)`)
  }, 3000)
}

const presidiumMobileDrag = (moveClass) => {
  let list = document.querySelector(moveClass),
    then, now, index = 0,
    time = 0,
    curTime = 0,
    length = $(moveClass).children().length;
  list.addEventListener('touchmove', dragDown);
  list.addEventListener('touchend', dragUp);

  function dragDown(touchItem) {
    then = touchItem.changedTouches[0].pageX;
    time = new Date()
  }

  function dragUp(touchItem) {
    now = touchItem.changedTouches[0].pageX;
    curTime = new Date()
    if (curTime - time <= 300) {
      if (now - then <= 0) {
        index = (index + 1) % length
      } else {
        index = (index - 1) % length
      }
      if (index != -1) {
        $(moveClass).css('transform', `translateX(-${index * (100 / length)}%)`)
        let prev = $($(moveClass).children().get(index - 1))

        setTimeout(() => {
          $(prev).find('.presidiumMobileDes').css('animation', 'mobileBottomScale .5s forwards')
          $(prev).find('.presidiumMobileSaying').css('animation', 'mobileTopHiddenScale .5s forwards')
        }, 200)

      } else
        return
    }
  }
}

const presidiumMobileShow = (targetClass) => {
  let list = document.querySelector(targetClass);
  list.addEventListener('click', show);

  function show(e) {
    e.target.className == 'presidiumMobileName' ?
      commonAnimation('presidiumMobileDes') :
      e.target.className == 'presidiumMobileSaying' ?
      commonAnimation('presidiumMobileSaying') :
      ''

    function commonAnimation(fatherClass) {
      let father = findFather(e.target, fatherClass)
      $(father).css('animation', 'mobileTopScale .5s forwards')
      fatherClass == 'presidiumMobileDes' ?
        $(father).next().css('display', 'block').css('animation', 'mobileBottomScale .5s forwards') :
        $(father).prev().css('animation', 'mobileBottomScale .5s forwards')
    }
  }
}

const presidiumMobileArr = [
  '.presidiumMobile_2019 ul',
  '.presidiumMobile_2018 ul',
  '.presidiumMobile_2017 ul'
]
presidiumMobileArr.map(item => {
  presidiumMobileDrag(item)
  presidiumMobileShow(item)
})