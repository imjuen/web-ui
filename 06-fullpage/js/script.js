$(function () {
  // 대상을 변수에 저장
  const $window = $(window);
  const $sideDot = $('.indicator > button');
  const $section = $('#container > section');
  const $btnTop = $('.btn-top');

  // console.log($window, $sideDot, $section, $btnTop);

  // TOP버튼을 클릭했을 때 상단으로 이동
  $btnTop.on('click', function () {
    moveSection(0);
  });

  // 섹션의 위치값 구하기
  console.log($section.eq(1).offset().top);

  // 섹션을 이동하는 동작을 함수로 정의
  function moveSection(pos) {
    $('html, body').stop().animate(
      {
        scrollTop: pos,
      },
      300
    );
  }

  // 인디케이터를 클릭했을 때
  $sideDot.on('click', function () {
    const dotIdx = $(this).index();
    const secPos = $section.eq(dotIdx).offset().top;
    moveSection(secPos);
  });
});
