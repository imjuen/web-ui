$(function () {
  // 대상을 변수에 저장하기
  const $dim = $('.dim');
  const $videoWrap = $('.video-wrap');
  const $video = $videoWrap.find('.video iframe');
  const $btnClose = $('.btn-close');
  const $selectVideo = $('.video-list > li');

  // 비디오 리스트를 클릭(선택) 했을 때
  $selectVideo.on('click', function () {
    // 선택한 비디오 링크를 받아서 변수에 저장
    let videoLinke = $(this).data('link'); /* data-link */
    console.log(videoLinke);

    // videoLinke = videoLinke + '?autoplay=1'
    videoLinke += '?autoplay=1';

    // $video의 src 값으로 비디오 링클를 세팅
    $video.attr('src', videoLinke);

    // 선택한 비디오의 텍스트를 변수에 저장
    const vidieoText = $(this).text();
    // $('.caption').text($(this).text());
    // .caption에 세팅
    $('.caption').text(vidieoText);

    // $dim을 보이게
    $dim.fadeIn();

    // $videoWrap을 보이게
    $videoWrap.addClass('active');
  });

  // $닫기버튼을 클릭했을 때
  $btnClose.on('click', function () {
    // $dim을 안 보이게
    $dim.fadeOut();
    // $videoWrap을 안 보이게
    $videoWrap.removeClass('active');

    // $video의 src 값을 없애자 --> 동영상 삭제
    $video.attr('src', '');
  });
});
