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
          <p>${item.signature}</p>
          <span class="u-tri"></span>
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
  <li class="musicpaper eq4"><div class="end"></div></li>
  <li class="presidiumCloud">
    <div class="presidiumContentCloud">
      <img src="./img/material/clouds.png" alt="">
      <img src="./img/material/clouds.png" alt="">
      <img src="./img/material/clouds.png" alt="">
    </div> 
  </li>
  `)
}

const addPresidiumMobileContent = (arr) => {

  function templateFunc(item) {
    return `
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
  `
  }

  arr.map((item, index) => {
    if (index <= 4)
      $('.presidiumMobile_2019 ul').append(templateFunc(item))
    else if (index > 4 && index <= 9)
      $('.presidiumMobile_2018 ul').append(templateFunc(item))
    else
      $('.presidiumMobile_2017 ul').append(templateFunc(item))
  })
}

const addGroupContent = (arr) => {
  arr.map(item => {
    $('.teamRight').append(`
    <div class="group">
    <div class="GroupImgBox">
      <img src=${item.groupImgSrc} alt="" class="GroupLogo">
      <img src=${item.GroupComicImgSrc} alt="" class="GroupComic">
    </div>
    <div class="groupText">
      <p>${item.tag}:</p>
      <p>${item.des}</p>
      <div class="borderTopLeft"></div>
      <div class="borderBottomRight"></div>
    </div>
  </div>
    `)
  })
}

const addClouds = () => {
  let A = [1, 2, 3, 1, 2, 3, 1, 1],
    B = [1, 1, 2, 2, 3],
    C = [1, 1, 2, 3]

  createClouds(A, '.cloudBoxA')
  createClouds(B, '.cloudBoxB')
  createClouds(C, '.cloudBoxC')

  function createClouds(arr, addDom) {
    arr.map(item => {
      $(addDom).append(Clouds.create(item))
    })
  }
}

const addDepartmentContent = (arr) => {
  arr.map(item => {
    $('.department').append(`
    <div class="DepartmentContent">
      <div class="DepartmentContentImg">
        <img src=${item.departmentImgSrc} alt="" class="DepartmentContentimg">
      </div>
      <p class="DepartmentContentText">${item.departmentText}</p>
      <div class="hiddenImg">
          <img src=${item.hiddenImgSrc} alt="">
        </div>
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
      <div class="base"></div>
      <div class="tray">
      <img src="./img/material/tray.png" alt="">
      </div>
      <div class="blackScreen"></div>
      <div class="projectDes">${item.projectDes}</div>
    </div>
  `)
  })
}

var presidium = [{
    'name': '王润庆',
    'position': '主席',
    'year': 2019,
    'signature': '这个人很懒，什么都没有留下。',
    'portraitSrc': './img/portrait/wrq.jpg'
  }, {
    'name': '王文钦',
    'position': '副主席',
    'year': 2019,
    'signature': '这个人不懒，但他什么都没有留下。',
    'portraitSrc': './img/portrait/wwq.jpg'
  }, {
    'name': '余锦标',
    'position': '副主席',
    'year': 2019,
    'signature': '立flag小能手，虽然被迫用各种语言，但Java是我的本命',
    'portraitSrc': './img/portrait/yjb.jpg'
  }, {
    'name': '黄远宁',
    'position': '副主席',
    'year': 2019,
    'signature': '拖延症晚期患者，精通各种摸鱼事宜。语言成绩准备中，杜绝躺尸从我做起qaq',
    'portraitSrc': './img/portrait/hyn.jpg'
  }, {
    'name': '徐舒敏',
    'position': '副主席',
    'year': 2019,
    'signature': '发现程序员经常熬夜有三个弊端：第一，记忆力越来越差；第二，数数经常会数错；第四，记忆力越来越差。',
    'portraitSrc': './img/portrait/xhm.jpg'
  }, {
    'name': '张嘉',
    'position': '主席',
    'year': 2018,
    'signature': '懂一点Python，Java，学不会前端只能学后端的渣渣，技术没有长进，头皮越来越冷，只有霸王才能拯救我。PS:我边上的几位才是真大佬，最后广告位出租(ಡωಡ)有意私聊',
    'portraitSrc': './img/portrait/zj.jpg'
  }, {
    'name': '陈坤',
    'position': '副主席',
    'year': 2018,
    'signature': '我常常因为不够沙雕而感到和大家格格不入',
    'portraitSrc': './img/portrait/ck.jpg'
  }, {
    'name': '郭亚旻',
    'position': '副主席',
    'year': 2018,
    'signature': '这个人不懒，但她什么都没有留下',
    'portraitSrc': './img/portrait/gym.jpg'
  }, {
    'name': '高宇',
    'position': '副主席',
    'year': 2018,
    'signature': '用过flask搭建后台，后转为用java。目前在做图形学（ComputerGraphics,ComputerVision,ImageProcessing）',
    'portraitSrc': './img/portrait/gy.jpg'
  }, {
    'name': '雷镇豪',
    'position': '副主席',
    'year': 2018,
    'signature': '本人擅长单片机、物联网、无人机等项目的鼓掌和叫好，精通 C、C++、Python、Golang、Docker、Kubernetes、HTML、CSS、JavaScript等单词的拼写，熟悉 Windows、Linux、OS X、Android、iOS 等系统的开关机。',
    'portraitSrc': './img/portrait/lzh.jpg'
  }, {
    'name': '王玉函',
    'position': '主席',
    'year': 2017,
    'signature': 'http://intro.ponder.ink/#/welcome1',
    'portraitSrc': './img/portrait/wyh.jpg'
  }, {
    'name': '王化益',
    'position': '副主席',
    'year': 2017,
    'signature': '本人男，很帅，敲了3年代码，很累，现寻找漂亮小姐姐一起浪迹天涯，有意者加我微信:fytc1011',
    'portraitSrc': './img/portrait/why.jpg'
  }, {
    'name': '刁太',
    'position': '副主席',
    'year': 2017,
    'signature': '这个人很懒，什么都没有写。',
    'portraitSrc': './img/portrait/dt.jpg'
  },
  {
    'name': '陈维清',
    'position': '副主席',
    'year': 2017,
    'signature': '精通各种bug编写，嘤嘤嘤能力满级。機械學習海外在逃，21世纪的学科入坑中。长期高价收购防脱发秘籍+vx:budazhu97',
    'portraitSrc': './img/portrait/cwq.jpg'
  }
]

var technologyStackList = {
  'fontEnd': [
    './img/technologyStack/HTML.png',
    './img/technologyStack/css.png',
    './img/technologyStack/javascript-original.png',
    './img/technologyStack/Vue.png',
    './img/technologyStack/React.png'
  ],
  'backEnd': [
    './img/technologyStack/Java.png',
    './img/technologyStack/php.png',
    './img/technologyStack/go.png',
    './img/technologyStack/Csharp.png',
    './img/technologyStack/python.png'
  ],
  'game': [
    './img/group/yx.png',
    './img/technologyStack/C.png',
    './img/technologyStack/C++.png',
    './img/technologyStack/Java.png',
    './img/technologyStack/python.png'
  ],
  'python': [
    './img/technologyStack/python.png'
  ],
  'security': [
    'http://sacc.oss-cn-beijing.aliyuncs.com/sacc-static/%E5%AE%89%E5%85%A8.png'
  ],
  'algorithm': [
    './img/group/sf.png',
    './img/technologyStack/C.png',
    './img/technologyStack/C++.png',
    './img/technologyStack/Java.png'
  ]
}

var group = [{
    'tag': '前端组',
    'GroupComicImgSrc': './img/group/qdComic.png',
    'groupImgSrc': './img/technologyStack/HTML.png',
    'des': '我们是网站的艺术总监，只写有情怀的代码。我们是科协的颜值担当，只做有情调的码农欢迎加入前端开发组~'
  },
  {
    'tag': '后端组',
    'GroupComicImgSrc': './img/group/hdComic.png',
    'groupImgSrc': './img/technologyStack/Java.png',
    'des': '后端组使用Java语言进行后端开发，处理前端发送的各种请求。'
  }, {
    'tag': 'python组',
    'GroupComicImgSrc': './img/group/pyComic.png',
    'groupImgSrc': './img/technologyStack/python.png',
    'des': 'Life is short，you need Python。python组旨在带领大家领略python的简洁优雅，找到适合自己的方向'
  }, {
    'tag': '算法组',
    'GroupComicImgSrc': './img/group/sfComic.png',
    'groupImgSrc': './img/group/sf.png',
    'des': '算法是一个计算的具体步骤，常用于计算、数据处理和自动推理。其在计算机这个行业中无处不在。'
  }, {
    'tag': '安全组',
    'GroupComicImgSrc': './img/group/aqComic.png',
    'groupImgSrc': 'http://sacc.oss-cn-beijing.aliyuncs.com/sacc-static/%E5%AE%89%E5%85%A8.png',
    'des': '安全组是由一群对黑客技术感兴趣的年轻人组成的兴趣团体。',
  }, {
    'tag': '游戏组',
    'GroupComicImgSrc': './img/group/yxComic.png',
    'groupImgSrc': './img/group/yx.png',
    'des': '两个人，一个组。简单却暗藏玄机，广泛涉猎各种语言，加入我们、一起在编程的路上斩妖除bug！'
  }
]

var department = [{
  'departmentImgSrc': './img/department/xmtS.png',
  'departmentText': '作为科协的推广部门，新媒体的小伙伴们主要负责的是关于科协的信息的发布与分享，以及院科协公众号的运营，同时还会教授剪辑学院视频的内容，一起见证科协的各项活动，为院科协的蓬勃发展添上有力的一笔。',
  'hiddenImgSrc': './img/department/xmt.png'
}, {
  'departmentImgSrc': './img/department/jsbS.png',
  'departmentText': '技术部现有算法、程序设计、前端设计和网络安全等技术方向，这些技术相辅相成。技术部的骨干成员实力雄厚，经历丰富。多人在程序设计大赛、网络攻防大赛、网页设计大赛等中获得奖项。',
  'hiddenImgSrc': './img/department/jsb.png'
}, {
  'departmentImgSrc': './img/department/bgsS.png',
  'departmentText': '办公室是科协的重要组成部分！它负责科协的整个统筹规划，承担活动策划宣传，组织运行，等工作。其下设有内务部，策划部宣传部。在办公室成员的合作下，科协才能顺利地举办各种比赛。另外，它也是科协交流放松地方和科协女生的集中营！',
  'hiddenImgSrc': './img/department/bgs.png'
}]

var project = [{
  'projectLink': 'https://github.com/NJUPT-SACC/One-Plus-One-Question',
  'projectImgSrc': './img/project/onePlusOne.png',
  'projectDes': '每日 1 + 1'
}, {
  'projectLink': 'https://github.com/NJUPT-SACC/One-Plus-One-Question',
  'projectImgSrc': './img/project/Sacc-Comprehensive-System.png',
  'projectDes': ' SACC比赛系统'
}, {
  'projectLink': 'https://github.com/NJUPT-SACC/One-Plus-One-Question',
  'projectImgSrc': './img/project/SACC-Website.png',
  'projectDes': 'SACC-Website'
}]

var Clouds = {
  'pathA': `M35,50,c20,-10,30,0,45,-5,c4,-5,25,-25,54,-11,s33,3,65,0,c22,-3,33,11,54,23,s33,3,42,15c8,11,2,24,-7,28,s2,7,-60,17,c-16,10,-46,11,-70,1,c-24,-10,-4,-20,-57,-9,c-19,1,-25,5,-40,-10,C-5,70,25,60,35,50`,
  'pathB': 'M35,50,c20,-10,30,0,20,-5,c4,-5,10,-30,45,-2,s20,40,30,30,s33,-10,40,10,c-5,-5,5,0,-5,10,s2,7,-60,10,C-5,90,25,60,35,50',
  'pathC': 'M35,50,c20,-10,30,0,20,-5,c4,-5,30,-30,55,-20,s10,50,30,20,s50,-20,60,10,c20,-5,30,-60,100,0,c-5,-5,5,15,-10,20,s2,7,-60,10,C-5,90,25,60,35,50',
  'stokeColor': 'transpant',
  create: function (pathIndex) {
    let path = pathIndex == 1 ? this.pathA : pathIndex == 2 ? this.pathB : this.pathC
    return `        
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <path stroke=${this.stokeColor} d=${path}></path>
  </svg>`
  }
}