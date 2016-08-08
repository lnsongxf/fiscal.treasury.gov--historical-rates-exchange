//Menu names will need to be in this format: id="menu_(name of directory)"
var pathArray = window.location.pathname.split("/");
//This will need to be tweeked based on directory structure
var parentDirectory = pathArray[1];
var menuNames = [];
$('#mainNav ul').children().each(function () {
	if($(this).prop('id') !== ""){
		var menuNamesSplit = $(this).prop('id').split("_");
		menuNames.push(menuNamesSplit[1]);				
	}
});
$.each(menuNames, function(key, val){
	if(val === parentDirectory){
		$("li#menu_" + val + " > a").css({
			//CSS can be changed here
			"background": "#0e3253",
			"text-decoration": "none",
			"color": "#fff"
		});
	}
});