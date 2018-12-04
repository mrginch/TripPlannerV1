
$(document).ready(function(){

	$('.submission').submit(function(event){
		var values = $(this).serializeArray();

		if(values[4].value.toLowerCase().localeCompare('comments')===0){
			values[4].value = '';
		}

		$('#myTable > tbody:last-child').append('<tr><td>' + values[0].value 
												+ '</td><td>' + values[1].value 
												+ '</td><td>' + values[2].value 
												+ '</td><td>' + values[3].value 
												+ '</td><td>' + values[4].value 
																	+ '</td></tr>');
		return false;
	});



});


