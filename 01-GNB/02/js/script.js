$(function () {
  // 대상을 변수에 저장
  const $header = $('header');
  const $menu = $('.gnb > li'); // gnb 클래스의 하위 li 요소 선택
  const $submenu = $('.submenu');
  const duration = 300;

  // 메뉴에 마우스가 들어오면
  $menu.on('mouseenter', function () {
    $submenu.stop().slideDown(duration);

    // 활성화된 메뉴 표시 : on 클래스 부여
    $(this).addClass('on');

    // header에 active 클래스 부여
    $header.addClass('active');
  });

  // 메뉴에 마우스가 나가면
  $menu.on('mouseleave', function () {
    $submenu.stop().slideUp(duration);
    $menu.removeClass('on');
    $header.removeClass('active');
  });
});
