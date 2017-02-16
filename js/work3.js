
window.addEventListener('scroll',navScroll);
//导航栏整体动画
function navScroll(e){
	var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
	if(scrollTop>50){
		$(".mainNav").stop().animate({top:"-40px"},300);
		$(".head").stop().animate({bottom:"-35%"},300);
		$(".head img").stop().animate({width:"100px",height:"100px"},300);
	}else if(scrollTop>=0&&scrollTop<50){
		$(".mainNav").stop().animate({top:"0px"},300);
		$(".head").stop().animate({bottom:"5%"},300);
		$(".head img").stop().animate({width:"170px",height:"170px"},300);
	}
}


//视差动画
	//视差移动
	//需导入jquery.parallax.js插件
	//初始化
	$('#scene').parallax();
	//传参
	$('#scene .liOne').parallax({
		  calibrateX:true,
		  calibrateY:true,
		  invertX:true,
		  invertY:true,
		  limitX:true,
		  limitY:10,
		  scalarX:2,
		  scalarY:8,
		  frictionX:0.2,
		  frictionY:0.8,
	});
	$('#scene .liTwo').parallax({
		  calibrateX:true,
		  calibrateY:true,
		  invertX:false,
		  invertY:true,
		  limitX:false,
		  limitY:6,
		  scalarX:7,
		  scalarY:8,
		  frictionX:0.9,
		  frictionY:0.8,
	});
	$('#scene .liThree').parallax({
		  calibrateX:true,
		  calibrateY:true,
		  invertX:false,
		  invertY:false,
		  limitX:false,
		  limitY:8,
		  scalarX:6,
		  scalarY:3,
		  frictionX:0.2,
		  frictionY:0.8,
	});
	$('#scene .liFour').parallax({
		  calibrateX:true,
		  calibrateY:true,
		  invertX:true,
		  invertY:true,
		  limitX:true,
		  limitY:3,
		  scalarX:15,
		  scalarY:8,
		  frictionX:0.3,
		  frictionY:0.7,
	});
	//视差滚动
		//视差过渡1
		var sceneCeneter1=document.getElementById("scene_center1");
			sceneKnife1=document.getElementById("scene_knife1");
			sceneFront1=document.getElementById("scene_front1");
			sceneCeneter2=document.getElementById("scene_center2");
			sceneKnife2=document.getElementById("scene_knife2");
			sceneFront2=document.getElementById("scene_front2");

		addEvent(document,'scroll',onScroll);
		onScroll();

		function　onScroll(e){
			var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
			if(scrollTop>=2000&&scrollTop<3700){
				sceneCeneter1.style.backgroundPositionY=(scrollTop-2000)*0.25+"px";
				sceneKnife1.style.backgroundPositionY=(scrollTop-2000)*1.30+"px";
				sceneFront1.style.backgroundPositionY=-(scrollTop-2000)*0.20+"px";
			}else if(scrollTop>=4600&&scrollTop<6300){
				sceneCeneter2.style.backgroundPositionY=(scrollTop-4600)*0.25+"px";
				sceneKnife2.style.backgroundPositionY=(scrollTop-4600)*1.30+"px";
				sceneFront2.style.backgroundPositionY=-(scrollTop-4600)*0.20+"px";
			}

		}
		//事件监听兼容
		function addEvent(eventTarget,eventType,eventHandler){
			if(eventTarget.addEventListener){
				eventTarget.addEventListener(eventType,eventHandler,false);
			}else{
				if(eventTarget.attachEvent){
					eventTarget.attachEvent(eventType,eventHandler);
				}else{
					eventTarget["on"+eventType]=eventHandler;
				}
			}
		}








$(function(){

	//导航栏图标动画
	//需导入jquery.rotate.js插件
	$("#headerImage,#github,#email,#qq,.homeIcon img,.workIcon img,.aboutIcon img,.contactIcon img").rotate({
	    bind : {
	        mouseover : function(){
	            $(this).rotate({animateTo: 360});
	        }, mouseout : function(){
	            $(this).rotate({animateTo: 0});
	        }
	    }
	});
	$(".homeIcon img").hover(
		function(){
			$(this).attr("src","icons/home1-2.png");
		},
		function(){
			$(this).attr("src","icons/home1-1.png");
		}
	);
	$(".workIcon img").hover(
		function(){
			$(this).attr("src","icons/work1-2.png");
		},
		function(){
			$(this).attr("src","icons/work1-1.png");
		}
	);
	$(".aboutIcon img").hover(
		function(){
			$(this).attr("src","icons/about1-2.png");
		},
		function(){
			$(this).attr("src","icons/about1-1.png");
		}
	);
	$(".contactIcon img").hover(
		function(){
			$(this).attr("src","icons/contact1-2.png");
		},
		function(){
			$(this).attr("src","icons/contact1-1.png");
		}
	);
	//侧边栏图标动画
	$("#selectbar img").hover(
		function(){
			$(this).attr("src","icons/sidebar1-2.png");
		},
		function(){
			$(this).attr("src","icons/sidebar1-0.png");
		});



	//侧边栏动画
	var clickNum=0;
	$("#selectbar img").click(function(){
		if(clickNum%2==0){
			$(".sidebar").stop().animate({left:"0px"},300)
			$(".mainBody").stop().animate({left:"300px"},300)
		}else{
			$(".sidebar").stop().animate({left:"-300px"},500)
			$(".mainBody").stop().animate({left:"0px"},300)
		}
		clickNum++;
	});
	//选项变化
	$("#sidebarMenu li").hover(
		function(){
		$(this).stop().animate({backgroundColor:"#1d9f85"},300);
	},
		function(){
		$(this).stop().animate({backgroundColor:"#1abc9c"},300);
	});
	//个人简介淡入动画
		$(window).scroll(function(){
			if($(window).scrollTop()>=600&&$(window).scrollTop()<=800){
				$("#contactIcons").css("animation","fadeIn 2s forwards").stop().animate({opacity:"1"},1000);
			}else if($(window).scrollTop()>800&&$(window).scrollTop()<=1200){
				$(".introduction .introductionCenter .introductionTitle span,h1").css("animation","fadeIn 2s forwards").stop().animate({opacity:"1"},1000);
			}else if($(window).scrollTop()>1200&&$(window).scrollTop()<=1500){
				$("#introductionUl").css("animation","fadeIn 2s forwards").stop().animate({opacity:"1"},1000);
			}
		});

		/*addEvent(document,'scroll',onScroll);
		onScroll();

		function　onScroll(e){
		var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
			if(scrollTop>=800&&scrollTop<=1200){
				$(".introduction .introductionCenter .introductionTitle span,h1").css("animation","fadeIn 2s forwards").animate({opacity:"1"},2000);
			}else if(scrollTop>=1200){
				$("#introductionUl").css("animation","fadeIn 2s forwards").animate({opacity:"1"},2000);
			}
		}
		//事件监听兼容
		function addEvent(eventTarget,eventType,eventHandler){
			if(eventTarget.addEventListener){
				eventTarget.addEventListener(eventType,eventHandler,false);
			}else{
				if(eventTarget.attachEvent){
					eventTarget.attachEvent(eventType,eventHandler);
				}else{
					eventTarget["on"+eventType]=eventHandler;
				}
			}
		}*/
	//作品展示动画
		$("#exhibitionContent li:nth-child(1)").hover(
			function(){
			$("#exhibitionContent li:nth-child(1) .exTextContent").stop().slideToggle(500);
		});
		$("#exhibitionContent li:nth-child(2)").hover(
			function(){
			$("#exhibitionContent li:nth-child(2) .exTextContent").stop().slideToggle(500);
		});
		$("#exhibitionContent li:nth-child(3)").hover(
			function(){
			$("#exhibitionContent li:nth-child(3) .exTextContent").stop().slideToggle(500);
		});
		$("#exhibitionContent li:nth-child(4)").hover(
			function(){
			$("#exhibitionContent li:nth-child(4) .exTextContent").stop().slideToggle(500);
		});
		$("#exhibitionContent li:nth-child(5)").hover(
			function(){
			$("#exhibitionContent li:nth-child(5) .exTextContent").stop().slideToggle(500);
		});
		$("#exhibitionContent li:nth-child(6)").hover(
			function(){
			$("#exhibitionContent li:nth-child(6) .exTextContent").stop().slideToggle(500);
		});

	//与我联系动画
	$("#contactPanelContent .hoverEffect").hover(
		function(){
			$(this).stop().animate({opacity:"0.8"},300);
	},
		function(){
			$(this).stop().animate({opacity:"0.7"},300);
	});
	//选项点击滚动到相对位置
	$('#goHome,#navbar .homeIcon').click(function(){
		$("html,body").stop().animate({scrollTop:$(".mainContent .dynamics").offset().top},1000);
	});
	$('#gointroduction,#navbar .aboutIcon').click(function(){
		$("html,body").stop().animate({scrollTop:$(".mainContent .introduction").offset().top},1000);
	});
	$('#goWork,#navbar .workIcon').click(function(){
		$("html,body").stop().animate({scrollTop:$(".mainContent .exhibition").offset().top},1000);
	});
	$('#goSkills').click(function(){
		$("html,body").stop().animate({scrollTop:$(".mainContent .mySkills").offset().top},1000);
	});
	$('#goContact,#navbar .contactIcon').click(function(){
		$("html,body").stop().animate({scrollTop:$(".mainContent .contact").offset().top},1000);
	});

	//个人技能进度条动画
	//调用插件并传递参数
	//HTML&CSS3_skill
	$('#html_cssSkill').radialIndicator({
		radius:100,
		barBgColor:"#eeeeee",
		barColor:'#1abc9c',
        barWidth: 20,
        initValue: 0,
        roundCorner : true,
        percentage: true,
        fontFamily:"Microsoft YaHei",
	});
	//Javascript_skill
	$('#javascriptSkill').radialIndicator({
		radius:100,
		barBgColor:"#eeeeee",
		barColor:'#1abc9c',
        barWidth: 20,
        initValue: 0,
        roundCorner : true,
        percentage: true,
        fontFamily:"Microsoft YaHei",
	});
	//Jquery_skill
	$('#jquerySkill').radialIndicator({
		radius:100,
		barBgColor:"#eeeeee",
		barColor:'#1abc9c',
        barWidth: 20,
        initValue: 0,
        roundCorner : true,
        percentage: true,
        fontFamily:"Microsoft YaHei",
	});
	//Bootstrap_skill
	$('#bootstrapSkill').radialIndicator({
		radius:100,
		barBgColor:"#eeeeee",
		barColor:'#1abc9c',
        barWidth: 20,
        initValue: 0,
        roundCorner : true,
        percentage: true,
        fontFamily:"Microsoft YaHei",
	});
	//Node.js_skill
	$('#node_jsSkill').radialIndicator({
		radius:100,
		barBgColor:"#eeeeee",
		barColor:'#1abc9c',
        barWidth: 20,
        initValue: 0,
        roundCorner : true,
        percentage: true,
        fontFamily:"Microsoft YaHei",
	});
	//Photoshop_skill
	$('#photoshopSkill').radialIndicator({
		radius:100,
		barBgColor:"#eeeeee",
		barColor:'#1abc9c',
        barWidth: 20,
        initValue: 0,
        roundCorner : true,
        percentage: true,
        fontFamily:"Microsoft YaHei",
	});
	var html_cssSkill = $('#html_cssSkill').data('radialIndicator');
		javascriptSkill = $('#javascriptSkill').data('radialIndicator');
		jquerySkill = $('#jquerySkill').data('radialIndicator');
		bootstrapSkill = $('#bootstrapSkill').data('radialIndicator');
		node_jsSkill = $('#node_jsSkill').data('radialIndicator');
		photoshopSkill = $('#photoshopSkill').data('radialIndicator');

		addEvent(document,'scroll',onScroll);
		onScroll();

		function　onScroll(e){
			var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
			if(scrollTop>=6400&&scrollTop<7600){//滚轮到达时触发进度条动画
				html_cssSkill.animate(85);
				javascriptSkill.animate(70);
				jquerySkill.animate(65);
				bootstrapSkill.animate(60);
				node_jsSkill.animate(30);
				photoshopSkill.animate(50);
			}

		}
		//事件监听兼容
		function addEvent(eventTarget,eventType,eventHandler){
			if(eventTarget.addEventListener){
				eventTarget.addEventListener(eventType,eventHandler,false);
			}else{
				if(eventTarget.attachEvent){
					eventTarget.attachEvent(eventType,eventHandler);
				}else{
					eventTarget["on"+eventType]=eventHandler;
				}
			}
		}

});





