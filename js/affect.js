	var $body=$("body");
	//获取导航栏容器
	var $ul1=$("#nav_wrap .nav");
	//获取导航栏
	var $lis1=$("#nav_wrap .nav li");
	//获取隐藏导航栏
	var $ul2=$("#meno .meno_nav");
	//获取隐藏按钮
	var $btn=$("#meno");
	//获取筛选列表
	var $lis4=$("#tab ul li");
	//联系我们
	//获取图标
	var $lis3=$("#fiext li");
	//获取box
	var $box=$("#fiext .box");
	//获取关闭按钮
	var $guanbi=$("#fiext #guanbi");
	//创建瀑布流
	//获取容器div
	var $fade=$("#fade");
	var $fade_div=$("#fade .fox");
	//返回顶部按钮事件
	//获取位置
	var $footer=$("#footer");
	//获取按钮
	var $footer_btn=$("#footer_btn");

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
	var $tab=$("#tab")
	// 筛选按钮改变
	//获取a标签
	var $tab_a=$("#tab ul li a");
	// 鼠标移动事件
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

	// 创建瀑布流
	flow();
    function flow(){
        var $domW = $(document).width();
        var $cols;
        if($domW>1366){
            $cols = 3;
            $fade_div.css({"width":"33%"});
        }else if($domW<= 1366&& $domW > 640){
            $cols = 3;
            $fade_div.css({"width":"33%"});
        }else{
            $cols = 2;
            $fade_div.css({"width":"49.5%"});
        }
        var $boxw = $fade_div.eq(0).outerWidth();
        var hArr = [];
        for(var i = 0 ; i< $fade_div.length;i++){
        
            var mgr = 10;
        	
            if(i < $cols){
                $fade_div.eq(i).css({
                	position:"absolute",
                	top:0,
                	left:$boxw*i+mgr*i
                });
                hArr.push($fade_div.eq(i).outerHeight());
            }else{
                var minH =Math.min.apply(null,hArr);
                var index = getMinhIndex(hArr,minH);
               	 console.log(index)
                $fade_div.eq(i).css({
                	position:"absolute",
                	top:minH+mgr,
                	left:$boxw*index+mgr*index
                });
                hArr[index] += $fade_div.eq(i).outerHeight()+mgr;
            }
        }
        function getMinhIndex(arr,val){
            for(var i= 0 ;i < arr.length;i++){
                if(arr[i] == val){
                    return i;

                }
            }

        }
        var $flowH = Math.max.apply(null,hArr);
        $("#fade").css("height",$flowH);
    }
    //窗口大小改变重置瀑布流
    $(window).resize(function(){
    	flow();
    })

    //鼠标移入显示放大按钮
    //获取放大镜图标
    var $mark=$("#fade .fox .mark img");
    //获取遮罩层
    var $list_mark=$("#fade .fox .list_mark");

   	$fade_div.hover(function(){

   		$(this).find($mark).css({
   			"opacity" : 1
   		})
   		$(this).find($list_mark).css({
   			"opacity" : 0.5
   		})
   	},function(){
   		$(this).find($mark).css({
   			"opacity" : 0
   		})
   		$(this).find($list_mark).css({
   			"opacity" : 0
   		})
   	})

   	//尾部事件
	var timerBol=false;
	//鼠标滚轮事件
	$(window).scroll(function(){
		//获取尾部的top值
		var $footerTop=$footer.offset().top;
		//
		if($body.scrollTop()<$footerTop&&$body.scrollTop()>500){

			$footer_btn.eq(0).css({
				"display" : "block",
				"position" : "fixed"
			});
		}else{
			$footer_btn.eq(0).css({
				"position":"absolute"
			});
		}
	})
   	// 点击返回顶部事件
	$footer_btn.click(function(){
		$("body,html").animate({
			scrollTop:0,
		},1000);
	})

	//点击改变显示图片
	//获取筛选按钮
	var $click_a=$("#tab ul li a");
	$click_a.click(function(){
		$fade_div = $("[date="+$(this).attr("date-tab")+"]");
        $("#fade .fox").hide();
        $fade_div.show();
        if($(this).attr("date-tab") == "date0"){
            $fade_div=$("#fade .fox")
            $fade_div.show();
         }
          flow();
	})

	$lis4.click(function(){
		$(this).addClass("black");

		$(this).siblings().removeClass("black");
		

	})

	// 大图
	// 显示
	//获取遮罩
	var $vai=$("#vainde");
	//获取大图
	var $ani=$("#vainde .anibig");
	var $ani_img=$("#vainde .anibig .par #img");
	var i=0;
	//获取点击的图片
	var $pic_img=$("#fade .fox img");
	$fade_div.click(function(){
		i=$(this).index();
		$ani.css({
			"width":0,
			"height":0
		})
		$vai.css({
			"display":"block"
		})
		var $W=$(this).width();
		var $H=$(this).height();
		var $img=$("<img>");
		$img.attr("src",$(this).find($pic_img).attr("src"));
		$ani_img.append($img);
		$ani.animate({
			"width":$W*1.2+"px",
			"height":$H*1.2+"px"
		},500)
	})
	//点击隐藏大图
	//获取关闭按钮
	var $par_img=$("#vainde .anibig .par .imgs1");
	$par_img.click(function(){
		$ani_img.text("");
		$vai.css({
			"display":"none"
		})
	})

	//获取左右按钮
	var $left=$("#vainde .anibig .left");
	var $right=$("#vainde .anibig .right");
	//获取隐藏图片
	var $left_img=$("#vainde .anibig .left img");
	var $right_img=$("#vainde .anibig .right img");

	//移动显示左边按钮
	$left.hover(function(){
		$left_img.fadeIn();
	},function(){
		$left_img.fadeOut();
	})
	//移动显示左边按钮
	$right.hover(function(){
		$right_img.fadeIn();
	},function(){
		$right_img.fadeOut();
	})
	
	//左右按钮点击切换
	$right.click(function(){
		console.log(i);
		if(i>$fade_div.length-2){
			i=0;
		}else{
			i++;
		}
		$ani_img.text("");
		var $img=$("<img>");
		var $W=$fade_div.eq(i).width();
		var $H=$fade_div.eq(i).height();
		$img.attr("src",$fade_div.eq(i).find($pic_img).attr("src"));
		$ani_img.append($img);
		$ani.css({
			"width":$W*1.2+"px",
			"height":$H*1.2+"px"
		})
	})

	$left.click(function(){
		console.log($fade_div.length);
		$ani_img.text("");
		var $img=$("<img>");
		var $W=$fade_div.eq(i).width();
		var $H=$fade_div.eq(i).height();
		$img.attr("src",$fade_div.eq(i).find($pic_img).attr("src"));
		$ani_img.append($img);
		$ani.css({
			"width":$W*1.2+"px",
			"height":$H*1.2+"px"
		})
		if(i<=0){
			i=$fade_div.length-1;
		}else{
			i--;
		}
	})