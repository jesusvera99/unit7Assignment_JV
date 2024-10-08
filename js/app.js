$(document).ready(function () {
  // Your script code goes here
  let menu = $('#menu');
  let mobileNav = $('#mobile-nav');

  mobileNav.addClass('hide');
  let isShow = false;
  menu.click(() => {
    showNav();
  });
  function showNav() {
    if (isShow == false) {
      mobileNav.addClass('show').removeClass('hide');
      isShow = true;
    } else if (isShow == true) {
      mobileNav.addClass('hide').removeClass('show');
      isShow = false;
    }
  }

  //   console.log('jQuery is ready!');
});
