$(function() {
  // ハンバーガーメニュー
  $('.burger_btn').click(function() {
    $('body').toggleClass('is-drawerActive')
 
    if ($(this).attr('aria-expanded') == 'false') {
      $(this).attr('aria-expanded', 'true');
      $('.burger_btn').attr('area-hidden','false');
    } else {
      $(this).attr('aria-expanded', 'false');
      $('.burger_btn').attr('area-hidden','true');
    }
  });
  // 背景のボックスクリックでもドロワーが消えるようにする
  $('.header_nav, .nav_item a').click(function () {
    $('body').removeClass('is-drawerActive');
    $('.burger_btn').attr('aria-expanded', 'false');
    $('.burger_btn').attr('area-hidden','true');
  })

  // アコーディオン
  $('.accordion_content').hide();
  $('.active').show();
  $('.accordion_title').on('click', function () {
    //クリックした要素自体にもclass付与
    $(this).toggleClass('is_active');
    //nextは次の要素を取得する、今回はクリック要素の次の要素にis-showクラスをつけている
    $(this).next().slideToggle('.accordion_content');
  });
    // スムーススクロール
  // var headerHeight = 150;
  var headerHeight = $('header').outerHeight();
  $("a[href^='#']").click(function(){
    var speed = 500;
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? "html" :href);
    var position = target.offset().top - headerHeight * 2;
    
    $("html,body").animate({scrollTop:position}, speed, "linear");
    return false;
  });


  // Slick
  $('.slider').slick({
		autoplay: true,//自動的に動き出すか。初期値はfalse。
    autoplaySpeed:5000, // スライド切り替えの時間を設定
		infinite: true,//スライドをループさせるかどうか。初期値はtrue。
		slidesToShow: 3,//スライドを画面に3枚見せる
		slidesToScroll: 3,//1回のスクロールで3枚の写真を移動して見せる
    prevArrow: '<div class="slick-prev"></div>',//矢印部分PreviewのHTMLを変更
		nextArrow: '<div class="slick-next"></div>',//矢印部分NextのHTMLを変更
		dots: false,//下部ドットナビゲーションの表示
    centerMode: true,
    centerPadding: '60px',
    touchMove: true,
		responsive: [{
			breakpoint: 900,//モニターの横幅が769px以下の見せ方
			settings: {
				slidesToShow: 2,//スライドを画面に2枚見せる
				slidesToScroll: 2,//1回のスクロールで2枚の写真を移動して見せる
			}
      },{
			breakpoint: 600,//モニターの横幅が426px以下の見せ方
			settings: {
				slidesToShow: 1,//スライドを画面に1枚見せる
				slidesToScroll: 1,//1回のスクロールで1枚の写真を移動して見せる
			}
		}]
	});
  // submit制御
  const $submitBtn = $('#js-submit');
  $('#mG61Hd input,#mG61Hd textarea').on('change', function () {
    if (
      $('#mG61Hd input[type="text"]').val() !== "" &&
      $('#mG61Hd input[type="email"]').val() !== "" &&
      // $('#mG61Hd input[type="checkbox"]').val() !== "" &&
      $('#mG61Hd textarea').val() !== "" &&
      $('#mG61Hd #privacyCheck').prop('checked') === true
    ) {
      $submitBtn.prop('disabled', false);
    } else {
      $submitBtn.prop('disabled', true);
    }
  });
  // Googleform
  // $('#mG61Hd').submit(function (event) {
  //   var formData = $('#mG61Hd').serialize();
  //   $.ajax({
  //     // url: "https://docs.google.com/forms/hogehoge",
  //     url: "https://docs.google.com/forms/u/0/d/e/1FAIpQLScUwcHlvZBlJTs04kIs0EZUuiwtq98o-_BLOQ3ox5oh_gEYEw/formResponse",
  //     data: formData,
  //     type: "POST",
  //     dataType: "xml",
  //     statusCode: {
  //       0: function () {
  //         $(".end-message").slideDown();
  //         $("#js-submit").fadeOut();
  //         //window.location.href = "thanks.html";
  //       },
  //       200: function () {
  //         $(".false-message").slideDown();
  //       }
  //     }
  //   });
  //   event.preventDefault();
  // });
  // AOS.js
  AOS.init();
});