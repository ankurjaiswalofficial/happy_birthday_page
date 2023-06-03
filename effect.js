$(window).load(function () {
	$('.loading').fadeOut('fast');
	$('.container').fadeIn('fast');
});
$('document').ready(function () {
	var vw;
	$(window).resize(function () {
		vw = $(window).width() / 2;
		$('#b1,#b2,#b3,#b4,#b5,#b6,#b7,#b8').stop();
		$('#b11').animate({ top: 240, left: vw - 180 }, 500);
		$('#b22').animate({ top: 240, left: vw - 130 }, 500);
		$('#b33').animate({ top: 240, left: vw - 80 }, 500);
		$('#b44').animate({ top: 240, left: vw - 20 }, 500);
		$('#b55').animate({ top: 240, left: vw + 20 }, 500);
		$('#b66').animate({ top: 240, left: vw + 60 }, 500);
		$('#b77').animate({ top: 240, left: vw + 100 }, 500);
		$('#b88').animate({ top: 240, left: vw + 130 }, 500);
	});

	$('#turn_on').click(function () {
		$('#bulb_yellow').addClass('bulb-glow-yellow');
		$('#bulb_red').addClass('bulb-glow-red');
		$('#bulb_blue').addClass('bulb-glow-blue');
		$('#bulb_green').addClass('bulb-glow-green');
		$('#bulb_pink').addClass('bulb-glow-pink');
		$('#bulb_orange').addClass('bulb-glow-orange');
		$('body').addClass('peach');

	});
	$('#play').click(function () {
		audio = new Audio("hbd.mp3");
		audio.play()
		audio1 = new Audio("hbd_continue.mp3")
  		audio1.play();
		// audio.play();
		$('#bulb_yellow').addClass('bulb-glow-yellow-after');
		$('#bulb_red').addClass('bulb-glow-red-after');
		$('#bulb_blue').addClass('bulb-glow-blue-after');
		$('#bulb_green').addClass('bulb-glow-green-after');
		$('#bulb_pink').addClass('bulb-glow-pink-after');
		$('#bulb_orange').addClass('bulb-glow-orange-after');
		$('body').css('backgroud-color', '#FFF');
		$('body').addClass('peach-after');

	});

	$('#bannar_coming').click(function () {
		$('.bannar').addClass('bannar-come');

	});

	function loopOne() {
		var randleft = 1000 * Math.random();
		var randtop = 500 * Math.random();
		$('#b1').animate({ left: randleft, bottom: randtop }, 10000, function () {
			loopOne();
		});
	}
	function loopTwo() {
		var randleft = 1000 * Math.random();
		var randtop = 500 * Math.random();
		$('#b2').animate({ left: randleft, bottom: randtop }, 10000, function () {
			loopTwo();
		});
	}
	function loopThree() {
		var randleft = 1000 * Math.random();
		var randtop = 500 * Math.random();
		$('#b3').animate({ left: randleft, bottom: randtop }, 10000, function () {
			loopThree();
		});
	}
	function loopFour() {
		var randleft = 1000 * Math.random();
		var randtop = 500 * Math.random();
		$('#b4').animate({ left: randleft, bottom: randtop }, 10000, function () {
			loopFour();
		});
	}
	function loopFive() {
		var randleft = 1000 * Math.random();
		var randtop = 500 * Math.random();
		$('#b5').animate({ left: randleft, bottom: randtop }, 10000, function () {
			loopFive();
		});
	}

	function loopSix() {
		var randleft = 1000 * Math.random();
		var randtop = 500 * Math.random();
		$('#b6').animate({ left: randleft, bottom: randtop }, 10000, function () {
			loopSix();
		});
	}
	function loopSeven() {
		var randleft = 1000 * Math.random();
		var randtop = 500 * Math.random();
		$('#b7').animate({ left: randleft, bottom: randtop }, 10000, function () {
			loopSeven();
		});
	}

	$('#balloons_flying').click(function () {
		$('.balloon-border').animate({ top: -500 }, 8000);
		$('#b1,#b4,#b5,#b7').addClass('balloons-rotate-behaviour-one');
		$('#b2,#b3,#b6,#b8').addClass('balloons-rotate-behaviour-two');
		loopOne();
		loopTwo();
		loopThree();
		loopFour();
		loopFive();
		loopSix();
		loopSeven();


	});

	$('#cake_fadein').click(function () {
		$('.cake').fadeIn('slow');

	});

	$('#light_candle').click(function () {
		$('.fuego').fadeIn('slow');

	});


	$('#wish_message').click(function () {
		vw = $(window).width() / 2;

		$('#b1,#b2,#b3,#b4,#b5,#b6,#b7').stop();
		$('#b1').attr('id', 'b11');
		$('#b2').attr('id', 'b22')
		$('#b3').attr('id', 'b33')
		$('#b4').attr('id', 'b44')
		$('#b5').attr('id', 'b55')
		$('#b6').attr('id', 'b66')
		$('#b7').attr('id', 'b77')
		$('#b8').attr('id', 'b88')
		$('#b11').animate({ top: 240, left: vw - 180 }, 500);
		$('#b22').animate({ top: 240, left: vw - 130 }, 500);
		$('#b33').animate({ top: 240, left: vw - 80 }, 500);
		$('#b44').animate({ top: 240, left: vw - 20 }, 500);
		$('#b55').animate({ top: 240, left: vw + 20 }, 500);
		$('#b66').animate({ top: 240, left: vw + 60 }, 500);
		$('#b77').animate({ top: 240, left: vw + 100 }, 500);
		$('#b88').animate({ top: 240, left: vw + 130 }, 500);
		$('.balloons').css('opacity', '1');
		$('.balloons h2').fadeIn(3000);

	});

	$('#story').click(function () {
		$(this).fadeOut('slow');
		$('.message').fadeIn('slow');

		function msgLoop(i) {
			$("p:nth-child(" + i + ")").fadeOut('slow').delay(800).promise().done(function () {
				i++;
				$("p:nth-child(" + i + ")").fadeIn('slow').delay(800);
				if (i == 46) {
					$("p:nth-child(45)").fadeIn('slow');
				}
				else {
					msgLoop(i);
				}

			});
		}

		msgLoop(0);

	});

});

