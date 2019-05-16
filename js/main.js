// pc用jquery部分


// メニュー＆閉じるの切り替え


$(document).ready(function(){


  //デフォルトで表示する要素を指定


  $('.menu').show();
  $('.close').hide();

  //buttonがクリックされたら


  $('nav').click(function () {



    //toggleClassで指定した要素にswitchのclassを追加または削除


    $('nav').toggleClass('switch');


    //wrapがswitchを持っていれば


    //要素の表示を切り替える


    $('.menu').hide();
    if($('nav').hasClass('switch')){
      $('.close').show();

    //wrapがswitchを持っていなければ


    }else{


      //要素の表示を切り替える


      $('.menu').show();
      $('.close').hide();

    }
  });
});



// クリックでのメニューの出し方
$(document).ready(function(){
  $( '.cp_menu-list' ).hide();
  $('#humberger').on( 'click' ,function(){
    if( !$('.cp_menu-list').hasClass('open') ) {
     jQuery('.cp_menu-list').stop(true).animate( { width: 'toggle' }, 'slow' );
    } else {
    }
  });
});


//ヘッダーの自己紹介の移動先
$(function(){
$('.cp_menu-list > li:first-child').on('click', function(){
  var targetTop = $('#p-profile__right').offset().top;
  $('html,body').animate({
      scrollTop: targetTop-50
  }, 500);
  return false;
});
});


//ヘッダーのスキルの移動先
$(function(){
$('.cp_menu-list > li:nth-child(2)').on('click', function(){
  var skill = $('#p-skill').offset().top;
  $('html,body').animate({
      scrollTop: skill
  }, 500);
  return false;
});
});


//ヘッダーの制作実績の移動先
$(function(){
$('.cp_menu-list > li:nth-child(3)').on('click', function(){
  var performar = $('#p-performance').offset().top;
  $('html,body').animate({
      scrollTop: performar
  }, 500);
  return false;
});
});


//ヘッダーのお問い合わせの移動先
$(function(){
$('.cp_menu-list > li:last-child').on('click', function(){
  var claim = $('#c-claim').offset().top;
  $('html,body').animate({
      scrollTop: claim
  }, 500);
  return false;
});
});


// トップに移動し、フェイドアウト


$(document).ready(function() {
  var pagetop = $('.p-return__btn');
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      pagetop.fadeIn();
    } else {
        pagetop.fadeOut();
      }
    });
    pagetop.click(function () {
      $('body, html').animate({ scrollTop: 0 }, 500);
        return false;
  });
});
