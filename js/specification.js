var $body=$("body");
//获取导航栏容器
var $ul1=$("#nav_wrap .nav");
//获取导航栏
var $lis1=$("#nav_wrap .nav li");
//获取隐藏导航栏
var $ul2=$("#meno .meno_nav");
//获取隐藏按钮
var $btn=$("#meno");

//联系我们
//获取图标
var $lis3=$("#fiext li");
//获取box
var $box=$("#fiext .box");
//获取关闭按钮
var $guanbi=$("#fiext #guanbi");

//判断窗口大小
	if($body.width()<1120){
			$ul1.hide();
			$btn.show();
		}else{
			$ul1.show();
			$btn.hide();
	}
		//鼠标移动事件
	$lis1.hover(function(){
		
		$(this).css({
			"border-bottom":"2px solid #C5D414",
		})
	},function(){
		$(this).css({
			"border-bottom":"",
		})
	})
	//窗口改变事件
	$(window).resize(function(){
		if($body.width()<1120){
			$ul1.hide();
			$btn.show();
		}else{
			$ul1.show();
			$btn.hide();
		}
	})
	//点击隐藏按钮事件
	$btn.click(function(){
		$ul2.slideToggle();
	})
		// 点击图标事件
	$lis3.click(function(){
		$(this).css({
			"background-image":"url(images1/contact_bg1.png)"
		});
		$(this).siblings().css({
			"background-image":"url(images1/contact_bg.png)"
		});
		$(this).find($box).css({
			"display":"block"
		});
		$(this).siblings().find($box).css({
			"display":"none"
		});
	})
	//点击关闭事件
	$guanbi.click(function(){
		$box.fadeOut();
	})


	// 筛选
	//获取筛选列表
	var $lis4=$("#tab ul li");
	//获取容器div
	var $fade=$("#fade");
	var $fade_div=$("#fade .fox");
	var $tab_a=$("#tab ul li a");
	//筛选按钮事件
	$lis4.hover(function(){
		$(this).css({
			"border-bottom" : "2px solid black",
		})
		$(this).find($tab_a).css("color","black");
	},function(){
		$(this).css({
			"border-bottom":"",
		})
		$(this).find($tab_a).css("color","#B59489");
	})
	//点击改变
	$lis4.click(function(){
		$(this).addClass("black");
		$(this).siblings().removeClass("black");
	})

	//获取返回顶部按钮按钮
	var $footer_btn=$("#footer_btn");
	//获取底部
	var $copy=$("#copyright");
	//鼠标滚轮事件
	$(window).scroll(function(){
		if($("body").scrollTop()>300){
			$footer_btn.css({
				"display":"block",
			})
		}else{
			$footer_btn.css({
				"display":"none",
			})
		}
		//获取底部距离浏览器的高度
		var $copyTop=$copy.offset().top;
		if($("body").scrollTop()>$copyTop/2){
			$footer_btn.css({
				"position":"fixed",
			})
		}else{
			$footer_btn.css({
				"position":"fixed"
			})
		}
	})

	 	// 点击返回顶部事件
	$footer_btn.click(function(){
		$("body,html").animate({
			scrollTop:0,
		},1000);
	})