(function ($, window, document, undefined)
{
	'use strict';
	
	$(function ()
	{
	    $("#mobileMenu").hide();
	    $(".toggleMobile").click(function()
	    {
	    	$(this).toggleClass("active");
	        $("#mobileMenu").slideToggle(500);
	    });
	});
	$(window).on("resize", function()
	{
		if($(this).width() > 500)
		{
			$("#mobileMenu").hide();
			$(".toggleMobile").removeClass("active");
		}
	});
})(jQuery, window, document);