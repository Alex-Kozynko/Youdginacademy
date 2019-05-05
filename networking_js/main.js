$(document).ready(function() {
	var end = new Date('05/08/2018 10:00 PM');
	var _second = 1000;
	var _minute = _second * 60;
	var _hour = _minute * 60;
	var _day = _hour * 24;
	var timer;

	function showRemaining() {
	  var now = new Date();
	  var distance = end - now;
	  if (distance < 0) {

	      clearInterval(timer);
	      document.getElementById('countdowndays').innerHTML = '00';
	      document.getElementById('countdownhours').innerHTML = '00';
	      document.getElementById('countdownmins').innerHTML = '00';
	      document.getElementById('countdownsecs').innerHTML = '00';

	      return;
	  }
	  var days = Math.floor(distance / _day);
	  var hours = Math.floor((distance % _day) / _hour);
	  var minutes = Math.floor((distance % _hour) / _minute);
	  var seconds = Math.floor((distance % _minute) / _second);

	  document.getElementById('countdowndays').innerHTML =  ('0' + days).slice(-2) + '';
	  document.getElementById('countdownhours').innerHTML = ('0' + hours).slice(-2) + '';
	  document.getElementById('countdownmins').innerHTML = ('0' + minutes).slice(-2) + '';
	  document.getElementById('countdownsecs').innerHTML = ('0' + seconds).slice(-2) + '';
	}

	timer = setInterval(showRemaining, 1000);
});

$(document).ready(function() {
	$('.popup').magnificPopup({
		removalDelay: 300, //delay removal by X to allow out-animation 
      callbacks: {
          beforeOpen: function() {
              this.st.mainClass = 'mfp-zoom-in';
          }
      },
      midClick: true
	});
});

$(document).ready(function() {
	$('a[href="#product"]').on('click', function(e){
		e.preventDefault();
		var t = 1000;
		var d = $(this).attr('href');

		if ($(window).width() < '576'){
			$('html,body').stop().animate({ scrollTop: $(d).offset().top  - 59 }, t);
		} else {
			$('html,body').stop().animate({ scrollTop: $(d).offset().top }, t);
		}
	});
});