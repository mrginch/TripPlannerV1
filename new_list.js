$(document).ready(function(){

	function newItem(i, v, tableStr, num){
	       v[0] = {'name': $(i[0]).children('input')[0].value};
	       v[1] = {'weight': $(i[1]).children('input')[0].value};
	       //values[2] = {'purchased': $(inclusiveSibs[2]).children('input')[0].value};

	      if(document.getElementsByClassName('yes')[num].checked){
	      		v[2] = {'purchased': $(i[2]).children('input')[0].value};
	       }else{
	       		v[2] = {'purchased': $(i[2]).children('input')[1].value};
	       }
	       v[3] = {'price': $(i[3]).children('input')[0].value};
	       v[4] = {'comments': $(i[4]).children('input')[0].value};


	       
	       $('<tr><td>' + v[0].name 
				+ '</td><td>' + v[1].weight 
				+ '</td><td>' + v[2].purchased 
				+ '</td><td>' + v[3].price 
				+ '</td><td>' + v[4].comments 
				+ '</td></tr>').insertBefore(tableStr +'InputRow');
	
	 }

	
	$('#baseweightTable > tbody > tr:last-child > td > input').on('keyup', function (e) {
	    if (e.keyCode == 13) {
	       var BWSibs = $(this).parent().parent().children();
	       var BWvalues = [];
	       newItem(BWSibs, BWvalues, '#baseweightTable', 0);
    
	    }
	});

	$('#wornTable > tbody > tr:last-child > td > input').on('keyup', function (e) {
	    if (e.keyCode == 13) {
	       var WSibs = $(this).parent().parent().children();
	       var Wvalues = [];
	       newItem(WSibs, Wvalues, '#wornTable', 1);
    
	    }
	});

	$('#consumablesTable > tbody > tr:last-child > td > input').on('keyup', function (e) {
	    if (e.keyCode == 13) {
	       var CSibs = $(this).parent().parent().children();
	       var Cvalues = [];
	       newItem(CSibs, Cvalues, '#consumablesTable', 2);
    
	    }
	});
	 

});