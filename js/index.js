// LogoPage
// GroupPage
// TeamPage
// ContactPage
let LogoPageAngel = 0,
    GroupPageAngel = 0,
    TeamPageAngel = 0,
    ContactPageAngel = 0;
$(document).keydown(function (e) {


  switch (e.which) {
    case 39: //右
      LogoPageAngel += 90;
      GroupPageAngel += 90;
      TeamPageAngel += 90;
      ContactPageAngel += 90;
      $('.LogoPage').css('transform', `rotate(${LogoPageAngel}deg)`)
      $('.GroupPage').css('transform', `rotate(${GroupPageAngel}deg)`)
      $('.GroupPage').css('height', `50vh`)
      $('.TeamPage').css('transform', `rotate(${TeamPageAngel}deg)`)
      $('.ContactPage').css('transform', `rotate(${ContactPageAngel}deg)`)
      break;
    case 37: //左
      LogoPageAngel -= 90;
      GroupPageAngel -= 90;
      TeamPageAngel -= 90;
      ContactPageAngel -= 90;
      $('.LogoPage').css('transform', `rotate(${LogoPageAngel}deg)`)
      $('.GroupPage').css('transform', `rotate(${GroupPageAngel}deg) scale(2.1)`)
      $('.GroupPage').css('height', `100vh`)
      $('.TeamPage').css('transform', `rotate(${TeamPageAngel}deg)`)
      $('.ContactPage').css('transform', `rotate(${ContactPageAngel}deg)`)
      break;

  }

})