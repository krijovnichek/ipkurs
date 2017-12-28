	//windows
$(function(){
	var $btn = $('#clickbtn');
	var hide = $('.hide');
	var info = $('.info');
	var temp = $('#temp');
	$('#exampleInputAmount').mask('00.00.0000');

	//	$( "p" ).removeClass( "myClass noClass" ).addClass( "yourClass" );

	
	console.log('hello');

		$btn.click(function(){
			var sub = $('#exampleInputAmount').val();
			console.log('TOP');
		    $.ajax({url: "/get", data: {
		    	'date' : sub
		    }, success: function(res){
				console.log(res.t);
				console.log('hello');
				temp.html('<center><h2>'+res.t +'</h2></center>');
				hide.removeClass('hide').addClass('info');
		    }});
		});

})