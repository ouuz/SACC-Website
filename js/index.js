const findFather = (dom, fatherName) => {
  if ($(dom).attr('class') === fatherName)
    return dom
  else
    return findFather($(dom).parent(), fatherName)
}

const groupAnimation = () => {
  let list = document.querySelector('.teamRight'),
    transformPoint = ['-14vw,-14vh', '3vw,15vh', '9vw,-6vh', '-12vw,8vh', '1vw,-25vh']
  list.addEventListener('mouseover', slideIn);

  function slideIn(e) {
    time = new Date()
    if ($(e.target).attr('class'))
      $(e.target).attr('class').match('Group') ? slide() : '';

    function slide() {
      let fatherDom = findFather(e.target, 'GroupImgBox'),
        arr = []

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
}

const projectSlideShow = () => {
  let list = document.querySelector('.project');
  list.addEventListener('mouseover', slideUp);
  list.addEventListener('mouseout', slideDown);

  function slideUp(e) {
    $(e.target).attr('class') == 'blackScreen' ? up() : '';

    function up() {
      setTimeout(() => {
        let img = $(e.target).prev().prev().prev().children().children();
        $(img).css('transform', `translateY(${$(img).parent().parent().height() - $(img).height()}px)`)
      }, 500)
    }

  }

  function slideDown(e) {
    $(e.target).attr('class') == 'blackScreen' ? down() : '';

    function down() {
      $(e.target).prev().prev().prev().children().children().css('transform', 'translateY(0)')
    }
  }
}

const generateStars = (n, pages) => {
  for (let i = 0; i < n; i++) {
    let className = i % 20 == 0 ? 'star starBig' : i % 9 == 0 ? 'star starMedium' : 'star';
    let top = Math.round(Math.random() * window.innerHeight * pages,
        left = Math.round(Math.random() * window.innerWidth),
        animationDuration = Math.round(Math.random() * 3000) + 3000),
      animationDelay = Math.round(Math.random() * 3000)

    $('.starBox').append($(`<div class="${className}"style ="top:${top}px;left:${left}px;animation-duration:${animationDuration}ms;animation-delay:${animationDelay}ms"></div>`));
  }
};

const nav = (selection) => {
  let listClass = selection == 1 ? 'nav' : 'navMobile'
  let list = document.querySelector(`.${listClass} ul`)
  let colorIndex = 0,
    color = ['rgba(50, 44, 69, 0.35)', 'rgba(250, 229, 217,0.35)', 'rgba(60, 50, 55, 0.35)', 'rgba(70, 56, 90,0.35)', 'rgba(255, 248, 240,0.35)', 'rgba(229, 186, 181,0.35)']

  list.addEventListener('click', scrollTo)

  function navHidden() {
    let timeOut = selection == 1 ? 700 : 200;

    $(`.${listClass}`).addClass('navigationHidden').removeClass('navigationShow')
    $('#nav').removeClass('navShow').addClass('navHidden')

    setTimeout(() => {
      $(`.${listClass}`).css('display', 'none')
    }, timeOut)

    stopBodyScroll(false)
  }

  function navShow() {
    let timeOut = selection == 1 ? 100 : 0;
    $(`.${listClass}`).css('display', 'block')

    setTimeout(() => {
      $(`.${listClass}`).addClass('navigationShow').removeClass('navigationHidden')
      $('#nav').removeClass('navHidden').addClass('navShow')
    }, timeOut)

    if (selection == 1) {
      $('.navBgLeft').css('background', `${color[colorIndex]}`)
      $('.navBgRight').css('background', `${color[colorIndex]}`)
    }

    stopBodyScroll(true)
  }

  $('#nav').click(() => {
    $(`.${listClass}`).css('display') == 'none' ? navShow() : navHidden()
  })

  function scrollTo(e) {
    let scrollToClassFather = findFather(e.target, 'navigation'),
      scrollToClassSpan = $(scrollToClassFather).find('span'),
      scrollToClassStick = $(scrollToClassFather).find('.stick'),
      scrollToClass = $(scrollToClassSpan).text().trim(),
      domClass = ''

    switch (scrollToClass) {
      case '首页':
        domClass = '.logo';
        colorIndex = 0;
        break;
      case '技术分组':
        domClass = '.teamBox';
        colorIndex = 1;
        break;
      case '主席团':
        domClass = '.presidium';
        colorIndex = 2;
        break;
      case '部门介绍':
        domClass = '.department';
        colorIndex = 3;
        break;
      case '活动展示':
        domClass = '.activity';
        colorIndex = 4;
        break;
      case '项目展示':
        domClass = '.project';
        colorIndex = 5;
        break;
      case '联系我们':
        domClass = '.contactUs';
        $('#illustrationsTree').css('transform', 'scale(1)').css('display', 'block');
        break;
      case '历任主席':
        domClass = '.presidiumMobile';
        break;
    }

    navHidden()
    $('.stick').css('opacity', '0')
    $(scrollToClassStick).css('opacity', '1')

    setTimeout(() => {
      $('html, body').animate({
        scrollTop: document.querySelector(`${domClass}`).offsetTop
      }, 1000)
    }, 50)

  }

  $('#contactBtn').click(() => {
    $('html, body').animate({
      scrollTop: document.querySelector('.contactUs').offsetTop
    }, 1000)
    $('#illustrationsTree').css('transform', 'scale(1)').css('display', 'block')
    $('.home').css('opacity', '0')
  })

  $('#arraw').click(() => {
    $('html, body').animate({
      scrollTop: window.innerHeight
    }, 1000)
  })

  $('#back').click(() => {
    $('html, body').animate({
      scrollTop: document.querySelector('.logo').offsetTop
    }, 1000)
    $('.stick').css('opacity','0')
    $('.home').css('opacity','1')
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
      case 2:
        domClass = '.secondScreen';
        break;
      case 3:
        domClass = '.DepartmentContent';
        break;
      case 4:
      case 5:
      case 6:
      case 7:
      case 8:
        domClass = '.moonBox';
        break;
      case 9:
        domClass = '.group';
        drawTeamEye()
        break;
      case 10:
        $('.backgroundImg').css('transform', 'translateX(0%)')
      case 11:
      case 12:
      case 13:
        domClass = '.competion';
        break;
      case 14:
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
    let showTop = document.querySelector('.project').offsetTop
    if (document.documentElement.scrollTop - clientH * 0.7 * pageIndex >= 0) {
      pageIndex++;
      if (pageIndex >= 2 && pageIndex <= 14)
        loadAnimation()
    }

    if (document.documentElement.scrollTop - showTop >= 0 && document.documentElement.scrollTop - showTop - $('.project').height() >= 0) {
      $('#illustrationsTree').css('display', 'block')
    } else {
      $('#illustrationsTree').css('display', 'none')
    }
  };
}

const allScroll = () => {
  const presidium = {
    'height': $(".presidium").height(),
    'offsetTop': document.querySelector('.presidium').offsetTop,
    'percent': 0,
    'Y': 0,
    'index': 0,
    wholeHeight: function () {
      return this.offsetTop + this.height - window.innerHeight * 2
    }
  }

  const illustrations = {
    'height': $(".illustrations").height(),
    'offsetTop': document.querySelector('.illustrations').offsetTop,
    'percent': 5,
    'maxPercent': 5,
    'minPercent': 1,
    wholeHeight: function () {
      return this.offsetTop + this.height - window.innerHeight
    }
  }

  const activity = {
    'offsetTop': document.querySelector('.activity').offsetTop,
    'el': $('.activityImgBox').children(),
    'top': 0,
    'left': 0,
    'x0': 0,
    'y0': 0,
    'rotate': 0,
    'scale': 0,
    'ImgTop': [

      document.querySelector('.comeq1').offsetTop,
      document.querySelector('.comeq2').offsetTop,
      document.querySelector('.comeq3').offsetTop,
      document.querySelector('.comeq4').offsetTop
    ]
  }

  function page_navigation_correspondence(elementScrollTop) {
    const page = [
      document.querySelector('.logo').offsetTop,
      document.querySelector('.department').offsetTop,
      document.querySelector('.presidium').offsetTop,
      document.querySelector('.teamBox').offsetTop,
      document.querySelector('.activity').offsetTop,
      document.querySelector('.project').offsetTop,
      document.querySelector('.illustrations').offsetTop
    ]

    for (let i = 0; i < page.length; i++) {
      if (elementScrollTop - page[i] * 0.9 >= 0 && elementScrollTop - page[i + 1] * 1.1 <= 0) {
        $('.stick').css('opacity', '0')
        $($($('.navigationBox ul').children().get(i)).children()[0]).css('opacity', '1')
      }
    }
    if (elementScrollTop - page[6] >= 0)
      $('#illustrationsTree').css('transform', 'scale(1)')
    if (elementScrollTop - page[4] * 0.9 >= 0)
      $('.backgroundImg').css('transform', 'translateX(0%)')
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
    if ($(childYear).css('opacity') == 0)
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
    if (e.wheelDelta < 0 && presidium.percent <= 180) {
      presidium.percent += 12;
      presidium.index++;
      if (presidium.index <= 14) {
        let child = $('.presidiumContent ul').children().get(presidium.index),
          childYear = $(child).children().last().children().get(2)

        translateY(presidium.index, child, childYear)
        NumAutoPlusAnimation(childYear, {
          time: 1800,
          num: `${$(childYear).html()}`,
          regulator: 20
        })
      }
    } else if (e.wheelDelta > 0 && presidium.percent >= 0)
      presidium.percent -= 12;
  }

  function activityImgScroll(e) {
    e.wheelDelta < 0 ?
      activityImgShow(activityImgShowDown) :
      activityImgShow(activityImgShowUp)

    function activityImgShowDown(ev) {
      $(ev).addClass('show').removeClass('hidden')
      $($(ev).prev()).addClass('hidden').removeClass('show')
    }

    function activityImgShowUp(ev) {
      $(ev).addClass('show').removeClass('hidden')
      $($(ev).next()).addClass('hidden').removeClass('show')
    }

    function activityImgShow(func) {
      document.documentElement.scrollTop - activity.offsetTop - activity.ImgTop[0] <= 0 ?
        activityImgShowDown($(activity.el.get(0))) : ''

      for (let i of [1, 2, 3])
        (document.documentElement.scrollTop - activity.offsetTop - activity.ImgTop[i - 1] > 0 && document.documentElement.scrollTop - activity.offsetTop - activity.ImgTop[i] <= 0) ?
        func($(activity.el.get(i))) : ''

      $($('.competion')[3]).attr('class') == 'competion comeq4 show' ?
        $('.slowpoke').css('left', '50%') :
        $('.slowpoke').css('left', '0%')

    }

  }

  function activityFlyGirlScroll(elementScrollTop) {
    activity.r = window.innerWidth * 0.8;
    if (elementScrollTop - activity.offsetTop + window.innerHeight * 0.2 >= 0 && elementScrollTop - (activity.offsetTop + window.innerHeight * 1.5) <= 0) {
      activity.y0 = elementScrollTop - activity.offsetTop;
      activity.left = Math.abs(Math.sqrt(Math.pow(activity.r, 2) - Math.pow(activity.y0, 2)) + activity.x0)
      activity.rotate = Math.cos(activity.y0) + elementScrollTop * 0.002
    } else {
      activity.y0 = elementScrollTop - (activity.offsetTop + window.innerHeight * 1.5)
      activity.left = Math.abs(Math.sqrt(Math.pow(activity.r, 2) + Math.pow(activity.y0, 2)) + activity.x0)
      activity.rotate = Math.cos(activity.y0) - elementScrollTop * 0.002
    }
    activity.scale = Math.sin((elementScrollTop - activity.offsetTop) * 0.001) + window.innerWidth * 0.0008
    activity.top = elementScrollTop - activity.offsetTop + window.innerHeight * 0.60
    $('.activitySlideBox').css('top', `${activity.top}px`).css('left', `${activity.left}px`).css('transform', `rotate(${activity.rotate}deg) scale(${activity.scale})`)
  }

  function illustrationsScroll(e) {
    if (e.wheelDelta < 0) {
      if (illustrations.percent <= illustrations.maxPercent && illustrations.percent > illustrations.minPercent)
        illustrations.percent--
    } else {
      if (illustrations.percent < illustrations.maxPercent && illustrations.percent >= illustrations.minPercent)
        illustrations.percent++
    }
    if ($('#illustrationsTree').css('display') == 'none')
      $('#illustrationsTree').css('display', 'block')
    $('#illustrationsTree').css('transform', `scale(${illustrations.percent})`)

  }

  function scroll(e, beforeElementScrollTop, elementScrollTop) {

    page_navigation_correspondence(elementScrollTop)

    if (elementScrollTop > presidium.offsetTop && elementScrollTop < presidium.wholeHeight()) {
      if (Math.abs(elementScrollTop - beforeElementScrollTop) > 5)
        presidiumScroll(e)
    } else if (elementScrollTop > (presidium.offsetTop + presidium.height - window.innerHeight))
      presidium.percent = 192
    else if (elementScrollTop < presidium.offsetTop)
      presidium.percent = 0
    if (elementScrollTop > illustrations.offsetTop && elementScrollTop < illustrations.wholeHeight())
      illustrationsScroll(e)
    if (elementScrollTop - activity.offsetTop + window.innerHeight * 0.2 >= 0 && elementScrollTop - (activity.offsetTop + window.innerHeight * 2.3) <= 0) {
      if (Math.abs(elementScrollTop - beforeElementScrollTop) > 10) {
        activityImgScroll(e, elementScrollTop)
        activityFlyGirlScroll(elementScrollTop)
      }
    } else if (elementScrollTop - activity.offsetTop + window.innerHeight * 0.2 <= 0)
      $('.activitySlideBox').css('top', '-5%').css('left', '80%')
    $('.presidiumContent ul').css('transform', `translate3d(-${presidium.percent}vw,0,0)`)
  }

  $(window).scroll(() => {
    window.onwheel = function (e) {
      e = e || window.event;
      var elementScrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      if (e.wheelDelta) {
        scroll(e, elementScrollTop, document.documentElement.scrollTop)
        setTimeout(() => {
          scroll(e, elementScrollTop, document.documentElement.scrollTop)
        }, 30)
      }
    };
  })

}

const stopImg = () => {
  $(document).bind("contextmenu copy selectstart", function () {
    return false;
  });

  var img = $("img");

  img.on("contextmenu", function () {
    return false;
  });

  img.on("dragstart", function () {
    return false;
  });

}

const adaptive = () => {
  $(window).resize(function () {
    window.location.reload()
  });

  if (window.innerWidth >= 992) {
    groupAnimation()
    projectSlideShow()
    Load()
    allScroll()
    dataImport()
    nav(1)
    generateStars(300, 2)
    stopImg()
  } else if (window.innerWidth >= 768 && window.innerWidth <= 991) {
    generateStars(150, 2);
    mobileDataImport()
    nav(0)
  } else if (window.innerWidth <= 767) {
    mobileDataImport()
    nav(0)
    generateStars(150, 1);
  }

}

adaptive()