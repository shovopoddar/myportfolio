$(document).ready(function() {

		//Change my little head
	var face = document.querySelector(".my-face");
	function updateHead(e){
		var mouseX = Math.floor((window.innerWidth-e.clientX)/(window.innerWidth)*9);
		face.style.backgroundPosition = mouseX*150+"px center";
	};
	window.addEventListener("mousemove", updateHead);
});
$(window).load(function(){
	
			var $grid = $('#grid');
		 
	$grid.shuffle({
		itemSelector: '.item_t' // the selector for the items in the grid
	});
	$('#filter a').click(function (e) {
		e.preventDefault();
			 
		// set active class
		$('#filter a').removeClass('active');
		$(this).addClass('active');
			 
		// get group name from clicked item
		var groupName = $(this).attr('data-group');
			 
		// reshuffle grid
		$grid.shuffle('shuffle', groupName );
		});
		
		$('#toggle').click(function() {
   $(this).toggleClass('active');
   $('#overlay').toggleClass('open');
  });
});
particlesJS("particles-js", {"particles":{"number":{"value":135,"density":{"enable":true,"value_area":962.0443442314919}},"color":{"value":"#ffffff"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.5,"random":false,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":4,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":true,"distance":150,"color":"#ffffff","opacity":0.4,"width":1},"move":{"enable":true,"speed":1.4,"direction":"none","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":400.851810096455,"rotateY":100}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"repulse"},"onclick":{"enable":true,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":89.32876538510341,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});var count_particles, stats, update; stats = new Stats; stats.setMode(0); stats.domElement.style.position = 'absolute'; stats.domElement.style.left = '0px'; stats.domElement.style.top = '0px'; document.body.appendChild(stats.domElement); count_particles = document.querySelector('.js-count-particles'); update = function() { stats.begin(); stats.end(); if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) { count_particles.innerText = window.pJSDom[0].pJS.particles.array.length; } requestAnimationFrame(update); }; requestAnimationFrame(update);;








