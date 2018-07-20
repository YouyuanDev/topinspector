"use strict";

//Rage Template
//Designerd by: #
jQuery(document).ready(function($) {

	//for Preloader

	$(window).load(function() {
		$("#loading").fadeOut(500);
	});

	/*---------------------------------------------*
	 * Mobile menu
	 ---------------------------------------------*/
	$('#navbar-menu').find('a[href*="#"]:not([href="#"])').click(function() {
		if(location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if(target.length) {
				$('html,body').animate({
					scrollTop: (target.offset().top - 80)
				}, 1000);
				if($('.navbar-toggle').css('display') != 'none') {
					$(this).parents('.container').find(".navbar-toggle").trigger("click");
				}
				return false;
			}
		}
	});

	/*---------------------------------------------*
	 * WOW
	 ---------------------------------------------*/

	var wow = new WOW({
		mobile: false // trigger animations on mobile devices (default is true)
	});
	wow.init();

	// magnificPopup

	$('.popup-img').magnificPopup({
		type: 'image',
		gallery: {
			enabled: true
		}
	});

	$('.video-link').magnificPopup({
		type: 'iframe',
		mainClass: 'mfp-fade',
		iframe: {
			markup: '<div class="mfp-iframe-scaler">' +
				'<div class="mfp-close"></div>' +
				'<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
				'</div>', // HTML markup of popup, `mfp-close` will be replaced by the close button

			patterns: {
				youtube: {
					index: 'youtube.com/', // String that detects type of video (in this case YouTube). Simply via url.indexOf(index).

					id: 'v=', // String that splits URL in a two parts, second part should be %id%
					// Or null - full URL will be returned
					// Or a function that should return %id%, for example:
					// id: function(url) { return 'parsed id'; }

					src: '//www.youtube.com/embed/%id%?autoplay=1' // URL that will be set as a source for iframe.
				}
				// you may add here more sources

			},

			srcAction: 'iframe_src', // Templating object key. First part defines CSS selector, second attribute. "iframe_src" means: find "iframe" and set attribute "src".
		}

	});

	// slick slider active Home Page Tow
	$(".testimonial_slid").slick({
		dots: false,
		infinite: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		prevArrow: "<i class='fa fa-angle-left nextprevleft'></i>",
		nextArrow: "<i class='fa fa-angle-right nextprevright'></i>",
		autoplay: true,
		autoplaySpeed: 2000
	});

	//    featured slider
	$('.featured_slider').slick({
		centerMode: true,
		dote: true,
		centerPadding: '60px',
		slidesToShow: 3,
		speed: 1500,
		index: 2,
		responsive: [{
				breakpoint: 768,
				settings: {
					arrows: false,
					centerMode: true,
					centerPadding: '40px',
					slidesToShow: 1
				}
			},
			{
				breakpoint: 480,
				settings: {
					arrows: false,
					centerMode: true,
					centerPadding: '40px',
					slidesToShow: 1
				}
			}
		]
	});

	//---------------------------------------------
	// Counter 
	//---------------------------------------------

	$('.statistic-counter').counterUp({
		delay: 10,
		time: 2000
	});

	//---------------------------------------------
	// Scroll Up 
	//---------------------------------------------

	$(window).scroll(function() {
		if($(this).scrollTop() > 600) {
			$('.scrollup').fadeIn('slow');
		} else {
			$('.scrollup').fadeOut('slow');
		}
	});
	$('.scrollup').click(function() {
		$("html, body").animate({
			scrollTop: 0
		}, 1000);
		return false;
	});

	//About us accordion 

	$("#faq_main_content").collapse({
		accordion: true,
		open: function() {
			this.addClass("open");
			this.css({
				height: this.children().outerHeight()
			});
		},
		close: function() {
			this.css({
				height: "0px"
			});
			this.removeClass("open");
		}
	});

	//Team Skillbar active js

	jQuery('.teamskillbar').each(function() {
		jQuery(this).find('.teamskillbar-bar').animate({
			width: jQuery(this).attr('data-percent')
		}, 6000);
	});
	//点击显示微信公众号图片 
	//openWeixinQRCode();
	$(".overlay").jParticle({
		background: "transparent",
		particlesNumber:120,
		color: "#218868",
		particle: {
			color: "white",
			minSize: 2,
			maxSize: 4,
			speed: 120
		}
	});
	//加载地图
	//loadCompanyLocation();

	//加载地图结束

	//End
     $('.service_item').hover(function(){
        $(this).find('i').css({"font-size":"3.5rem","color":"#ff6863"});
     },function(){
     	 $(this).find('i').css({"font-size":"3rem","color":"#797979"});
     });
});
/*新增函数*/
function openWeixinQRCode() {
	$('#chatting_our').hover(function() {
		$('.weixin_qrcode').show();
	}, function() {
		$('.weixin_qrcode').hide();
	});
	$('#chatting_eamil').hover(function() {
		$('.chat_email').show();
	}, function() {
		$('.chat_email').hide();
	});

	//	$('#chatting_our').click(function() {
	//		$('.weixin_qrcode img').show();
	//	});
}

function loadCompanyLocation() {
	var sContent = " <br>地址:";
	var map = new BMap.Map("map_canvas");
	var point = new BMap.Point(121.497982, 31.384589); //可以通过百度地图坐标拾取系统 http://api.map.baidu.com/lbsapi/getpoint/index.html
	var marker = new BMap.Marker(point);
	var infoWindow = new BMap.InfoWindow(sContent);
	map.centerAndZoom(point, 15);
	map.addOverlay(marker);
	marker.openInfoWindow(infoWindow);
	infoWindow.redraw();
}
function rubberBandService($obj){
	$obj.addClass('animated zoomIn');
	setTimeout(function() {
		$obj.removeClass('zoomIn');	 
	}, 500);
}

function openFunctionAndService() {
	//alert(1);
	$('.sec-animate0').addClass('animated zoomInLeft');
	$('.sec-animate1').addClass('animated zoomInUp');
	$('.sec-animate2').addClass('animated zoomInRight');
	setTimeout(function() {
		$('.sec-animate0').removeClass('zoomInLeft');
		$('.sec-animate1').removeClass('zoomInUp');
		$('.sec-animate2').removeClass('zoomInRight');
	}, 1000);
}

function openCompanyBlog() {
	$('.sec-animate3').addClass('animated slideInLeft');
	$('.sec-animate4').addClass('animated slideInDown');
	$('.sec-animate5').addClass('animated slideInRight');
	setTimeout(function() {
		$('.sec-animate3').removeClass('slideInLeft');
		$('.sec-animate4').removeClass('slideInDown');
		$('.sec-animate5').removeClass('slideInRight');
	}, 1000);
}

function submitMessage() {
	var client_name = $('#first_name').val();
	var message = $('#message').val();
	var message_time = getDate1();
	var phone_no = $('#phone').val();
	//	$('#messageForm').form('submit', {
	//		url: "http://192.168.0.10:8080/MessageOP/saveMessage.action",
	//		success: function(data) {
	//			if(data) {
	//				if(data.success) {
	//					alert(data.message);
	//				}
	//			}
	//		},
	//		error: function() {
	//			alert('发送失败,请尝试电话联系!');
	//		}
	//	});
	var data = {
		id: 0,
		client_name: client_name,
		message: message,
		message_time: message_time,
		is_read: "0",
		phone_no: phone_no,
		email: "",
		company: ""
	};
	//  var ajax = new XMLHttpRequest();
	//          // 第二步： 设置状态监听函数
	//          ajax.onreadystatechange = function(){
	//             
	//              // 第五步：在监听函数中，判断readyState=4 && status=200表示请求成功
	//              if(ajax.readyState==4 && ajax.status==200){
	//                  // 第六步： 使用responseText、responseXML接受响应数据，并使用原生JS操作DOM进行显示
	//                  console.log(ajax.responseText);
	//                  console.log(ajax.responseXML);// 返回不是XML，显示null
	//                  console.log(JSON.parse(ajax.responseText));
	//                  console.log(eval("("+ajax.responseText+")"));
	//                  alert(ajax.responseText);
	//              }else{
	//              	  alert('发送失败,请尝试电话联系!'+ajax.responseText);
	//              }
	//          }
	//          // 第三步： open一个链接
	//          ajax.open("GET","http://192.168.0.10:8080/MessageOP/saveMessage.action",false);//true异步请求，false同步
	//          
	//          // 第四步： send一个请求。 可以发送对象和字符串，不需要传递数据发送null
	//          ajax.send(JSON.stringify(data));
	//var str="id="+0+"&client_name="+client_name+"&message="+message+"&message_time="+message_time+"&is_read=0&phone_no="+phone_no+"&email=''&company=''";
	//var url= "http://192.168.0.10:8080/MessageOP/saveMessageByClient.action?callback=getUser&id=0&client_name="+client_name+"&message="+message+"&is_read=0";
	var url = "http://192.168.0.10:8080/MessageOP/saveMessageByClient.action?client_name=" + client_name + "&message=" + message + "&phone_no=" + phone_no;
	alert(url);
	//return;
	$.ajax({
		type: "get",
		url: url,
		async: false,
		dataType: "jsonp",
		jsonp: "callback", //一般默认为:callback
		jsonpCallback: "jsonpCallback",
		crossDomain: true,
		success: function(data) {
			alert(data);
			//			if(data) {
			//				if(data.success) {
			//					alert(data.message);
			//				}
			//			}
		},
		error: function() {
			alert('发送失败,请尝试电话联系!');
		}
	});
}

function jsonpCallback(result) {
	alert(result);
}

function getDate1() {
	var oDate = new Date();
	var y = oDate.getFullYear();
	var m = oDate.getMonth() + 1;
	var d = oDate.getDate();
	var h = oDate.getHours();
	var mins = oDate.getMinutes();
	var s = oDate.getSeconds();
	return y + '-' + (m < 10 ? ('0' + m) : m) + '-' + (d < 10 ? ('0' + d) : d) + ' ' + (h < 10 ? ('0' + h) : h) + ':' + (mins < 10 ? ('0' + mins) : mins) + ':' + (s < 10 ? ('0' + s) : s);
}