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

	// 创建瀑布流
	flow();
    function flow(){
        var $domW = $(document).width();
        var $cols=3;
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

    //窗口改变瀑布流重置
    window.onresize = function(){
        flow()
    }

    //鼠标移入 显示播放按钮

    //获取播放按钮
    var  $mark=$("#fade .fox .mark");

    $fade_div.hover(function(){
    	$(this).find($mark).fadeIn();
    },function(){
    	$(this).find($mark).fadeOut();
    })

    //返回顶部
    //获取顶部按钮
    var $footer_btn=$("#footer #footer_btn");
    //获取大图top值
    var $inner=$("#inner");
    $(window).scroll(function(){
    	var $innerT=$inner.offset().top;
    	if($body.scrollTop()>$innerT){
    		$footer_btn.css({
				"display" : "block",
				"position" : "fixed"
			});	
    	}
    	console.log($body.scrollTop())
    })
    // 点击返回顶部事件
	$footer_btn.click(function(){
		$("body,html").animate({
			scrollTop:0,
		},1000);
	})

	//视频播放
	//获取播放按键
	var $bofang=$("#inner #big_img img");
	//获取视频
	var $video=$("#inner #big_img video");
	$bofang.click(function(){
		$bofang.hide();
		$video.show();
	})