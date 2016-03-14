$(function()
	{ 
		$(".nav .dropdown").hover(function(arg)
		{
			$(".dropdown-menu").fadeIn("slow"); 
		}, function(arg)
		{
			$(".dropdown-menu").fadeOut("fast"); 
		}); 
		$("[data-toggle='tooltip']").tooltip({animation:true}); 
	});

