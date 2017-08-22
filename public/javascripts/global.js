$(document).ready(function(){
	$.ajax({
		url: '/show',
		method: 'GET'
	}).then(function (response) {
		$('#number').text(response);
	});

	$('#add').click(function() {
		var num = parseInt($('#num').val());
		$.ajax({
			url: '/add',
			data: {num: num},
			method: 'POST'
		}).then(function (response) {
			$('#number').text(response);
			$('#num').val('');
		});
	});
	$('#sub').click(function() {
		var num = parseInt($('#num').val());
		$.ajax({
			url: '/sub',
			data: {num: num},
			method: 'POST'
		}).then(function (response) {
			$('#number').text(response);
			$('#num').val('');
		});
	});
	$('#reset').click(function() {
		$.ajax({
			url: '/reset',
			method: 'POST'
		}).then(function (response) {
			$('#number').text(response);
			$('#num').val('');
		});
	});
	$('#show').click(function() {
		$.ajax({
			url: '/show',
			method: 'POST'
		}).then(function (response) {
			$('#number').text(response);
			$('#num').val('');
		});
	})

	$('.control').mousedown(function() {
		$(this).addClass('clicked');
	});
	$('.control').mouseup(function() {
		$(this).removeClass('clicked');
	});
	$('.control').mouseout(function() {
		$(this).removeClass('clicked');
	});
});