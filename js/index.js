	var $body=$("body");
	//获取导航栏容器
	var $ul1=$("#nav_wrap .nav");
	//获取导航栏
	var $lis1=$("#nav_wrap .nav li");
	//获取隐藏导航栏
	var $ul2=$("#meno .meno_nav");
	//获取隐藏按钮
	var $btn=$("#meno");
	//获取右边小按钮
	var $lis2=$("#btn li");
	//获取全部大图
	var $a=$("#banner a");

	//联系我们
	//获取图标
	var $lis3=$("#fiext li");
	//获取box
	var $box=$("#fiext .box");
	//获取关闭按钮
	var $guanbi=$("#fiext #guanbi");

	// 点击箭头移动事件
	//获取箭头
	var  $foot=$("#foot");

	//获取服务内容
	var $con_wrap=$(".con_wrap");
		//服务内容
	//获取li
	var $lis4=$("#content #fw li");
	//获取隐藏图片
	var $imgs=$("#fw .imgs");
	// 获取动画ul
	var $ul3=$("#con_wrap #content #fw");
	// 获取关于我们动画
	var $li5=$("#con_wrap #content #gy li");

	//返回顶部按钮事件
	//获取位置
	var $footer=$("#footer");
	//获取按钮
	var $footer_btn=$("#footer_btn");

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
	//右边小按钮点击事件
	$lis2.click(function(){
		$(this).addClass("btn_select");
		$(this).siblings().removeClass("btn_select");
		$a.eq($(this).index()).fadeIn(2000);
		$a.eq($(this).index()).siblings().fadeOut(2000);
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

	//点击自动移动动画
	$foot.click(function(){
		//获取服务内容的top值
		var $conTop=$con_wrap.eq(0).offset().top;

		$("body,html").animate({
				scrollTop: $conTop+"px",
			},2000);
	})

	// 
	$lis4.hover(function(){
		$(this).find($imgs).fadeIn(1500);
	},function(){
		$(this).find($imgs).fadeOut(1500);
	})
	
	// 定时器
	var $span=$("#con_wrap #contents ul span");
	var index1=0,index2=0,
		index3=0,index4=0,
		index5=0,index6=0,
		index7=0;
	var timer1=null,timer2=null,
		timer3=null,timer4=null,
		timer5=null,timer6=null,
		timer7=null;
		//布尔值   控制只执行一次
	var timerBol=false;
	//鼠标滚轮事件
	$(window).scroll(function(){
		//获取服务内容的top值
		var $conTop=$con_wrap.eq(0).offset().top;
		//获取关于我们的top值
		var $conTop2=$con_wrap.eq(1).offset().top;
		//或去企业荣誉的top值
		var $conTop3=$con_wrap.eq(2).offset().top;
		//获取尾部的top值
		var $footerTop=$footer.offset().top;
		//
		console.log($footerTop)
		if($body.scrollTop()>$conTop/2){
			$ul3.animate({
				"margin-top": "4%",
			},1000);
		}
		if($body.scrollTop()>$conTop2-500){
			$li5.eq(0).animate({
				"left":0,
			},1000);
			$li5.eq(2).animate({
				"left":0,
			},1000);
		}
		if($body.scrollTop()<4000&&$body.scrollTop()>$conTop/2){
			
			$footer_btn.eq(0).css({
				"display" : "block",
				"position" : "fixed"
			});
		}else{
			$footer_btn.eq(0).css({
				"position":"absolute"
			});
		}
		
		if($body.scrollTop()>$conTop3-200){
			if(timerBol){
				return;
			}
			timerFn();
		}

	})

	function timerFn(){
		// 第一个
		timer1=setInterval(function(){
			if(index1>=1000){
				clearInterval(timer1)
			}
			$span.eq(0).text(">"+index1+"家");
			index1+=10;
		},40);
		// 第二个
		timer2=setInterval(function(){
			if(index2>=6){
				clearInterval(timer2)
			}
			$span.eq(1).text(index2+"家");
			index2+=1;
		},555);
		// 第三个
		timer3=setInterval(function(){
			if(index3>=76){
				clearInterval(timer3)
			}
			$span.eq(2).text(index3+"家");
			index3+=1;
		},50);
		// 第四个
		timer4=setInterval(function(){
			if(index4>=48){
				clearInterval(timer4)
			}
			$span.eq(3).text(index4+"家");
			index4+=1;
		},80);
		// 第五个
		timer5=setInterval(function(){
			if(index5>=16000){
				clearInterval(timer5)
			}
			$span.eq(4).text(">"+index5+"个");
			index5+=100;
		},25);
		// 第六个
		timer6=setInterval(function(){
			if(index6>=24){
				clearInterval(timer6)
			}
			$span.eq(5).text(index6+"家");
			index6+=1;
		},150);
		// 第七个
		timer7=setInterval(function(){
			if(index7>=180){
				clearInterval(timer7)
			}
			$span.eq(6).text(index7+"个");
			index7+=2;
		},40);
		timerBol=true;
	}
	// 点击返回顶部事件
	$footer_btn.click(function(){
		$("body,html").animate({
			scrollTop:0,
		},1000);
	})
	
