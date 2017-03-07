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
	//业务介绍
	var $int_ul_li=$(".introduce #con ul li");
	//业务优势
	var $adv_ul_li=$(".advantage #con ul li");

	//窗口改变事件
	$(window).resize(function(){
		if($body.width()<1120){
			$ul1.hide();
			$btn.show();
		}else{
			$ul1.show();
			$btn.hide();
		}
		if($body.width()<650){
			$int_ul_li.css("width","100%");
			$adv_ul_li.css("width","41%");
		}else{
			$int_ul_li.css("width","25.8%");
			$adv_ul_li.css("width","17%");
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

	//点击切换事件
	//获取点击按钮
	var $left_btn=$("#inner #big_img .left");
	var $right_btn=$("#inner #big_img .right");
	//获取按钮图标
	var $left_img=$("#inner #big_img .left img");
	var $right_img=$("#inner #big_img .right img");
	//获取图片容器
	var $pics=$("#inner .big #li_img .pics");
	//获取切换图片
	var $pics_imgs=$("#inner .big #li_img .pics img");
	//获取文字
	var $p_texts=$("#inner #big_img p");

	//右边小图点击事件
	//获取点击图片
	var $min_img_lis=$("#inner #min_right_img ul li");
	//获取图片容器
	var $big_pics=$(".ine1 .big");
	//获取整个容器
	var $inner=$(".inner");
	var i=0;
	//小图片点击事件
	$min_img_lis.click(function(){
		index=0;
		i=$(this).index();
		$inner.find($big_pics).hide();
		$big_pics.eq(i).show();
	})

	// 鼠标移入容器显示切换按钮
	$left_btn.hover(function(){
		$left_img.fadeIn();
	},function(){
		$left_img.fadeOut();
	})
	$right_btn.hover(function(){
		$right_img.fadeIn();
	},function(){
		$right_img.fadeOut();
	})
	var index=0;
	//点击切换图片
	$right_btn.click(function(){
		index++;
		var $pics_img=$pics.eq(i).find($pics_imgs);
		var $p_text=$big_pics.eq(i).find($p_texts);
		if(index>$pics_img.length-1){
			index=0;
		}
		$pics_img.hide();
		$p_text.hide();
		$pics_img.eq(index).show();
		$p_text.eq(index).show();
	})
	$left_btn.click(function(){
		index--;
		var $pics_img=$pics.eq(i).find($pics_imgs);
		var $p_text=$big_pics.eq(i).find($p_texts);
		if(index<0){
			index=$pics_img.length-1;
		}
		$pics_img.hide();
		$pics_img.eq(index).show();
		$p_text.hide();
		$p_text.eq(index).show();
	})

	// 筛选
	//获取筛选列表
	var $tab_lis=$("#tab ul li");
	//获取图片展示
	//筛选按钮事件
	var $tab_a=$("#tab ul li a");
	$tab_lis.hover(function(){
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
	$tab_lis.click(function(){
		i=0;
		$(this).addClass("black");
		$(this).siblings().removeClass("black");
		$inner.hide();
		$inner.eq($(this).index()).show();
		$big_pics.hide();
		$big_pics.eq(0).show();
		$big_pics2.hide();
		$big_pics2.eq(0).show();
		$big_pics3.hide();
		$big_pics3.eq(0).show();
		//调用函数
		resizeFn();

	})

	var $min_img_lis2=$(".ine2 #min_right_img ul li");
	var $big_pics2=$(".ine2 .big img");
	var $inner=$(".inner");
	$min_img_lis2.click(function(){
		index=0;
		i=$(this).index();
		$inner.find($big_pics2).hide();
		$big_pics2.eq(i).show();
	})

	var $min_img_lis3=$(".ine3 #min_right_img ul li");
	var $big_pics3=$(".ine3 .big img");
	var $inner=$(".inner");
	$min_img_lis3.click(function(){
		index=0;
		i=$(this).index();
		$inner.find($big_pics3).hide();
		$big_pics3.eq(i).show();
	})

	// 使右边小图片高度和大图高度一致
	//获取小图
	var $min_img1=$(".ine1 #min_right_img");
	var $min_img2=$(".ine2 #min_right_img");
	var $min_img3=$(".ine3 #min_right_img");
	$(window).resize(resizeFn);
	resizeFn();
	function resizeFn(){
		// 获取大图的高度
		var $picsHeight1=$(".ine1 #big_img #li_img").height();
		var $picsHeight2=$(".ine2 #big_img #li_img").height();
		var $picsHeight3=$(".ine3 #big_img #li_img").height();
		$min_img1.css({
			"height":$picsHeight1,
		})
		$min_img2.css({
			"height":$picsHeight2,
		})
		$min_img3.css({
			"height":$picsHeight3,
		})
	}

	//获取业务介绍ul
	var $int_ul=$(".introduce #con ul");
	//获取业务优势的ul
	var $adv_ul=$(".advantage #con ul");
	//获取返回顶部按钮按钮
	var $footer_btn=$("#footer_btn");
	//获取底部
	var $copy=$("#copyright");
	//鼠标滚轮事件
	$(window).scroll(function(){
		if($("body").scrollTop()>300){
			$int_ul.animate({
				"top":30,
			},2000)
			$footer_btn.css({
				"display":"block",
			})
		}else{
			$footer_btn.css({
				"display":"none",
			})
		}
		if($("body").scrollTop()>600){
			$adv_ul.animate({
				"top":30,
			},2000)
		}
		//获取底部距离浏览器的高度
		var $copyTop=$copy.offset().top;
		if($("body").scrollTop()>$copyTop/2){
			$footer_btn.css({
				"position":"absolute",
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