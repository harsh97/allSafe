// FOR RESIZE PAGE AND HAMBURGER MENU
setInterval(pageWidth,300);
setInterval(onResize1,300);
function pageWidth()
{
	var pageWidth1 = document.documentElement.clientWidth;
	console.log(pageWidth1);
	//document.writeln(pageWidth1);
	return pageWidth1;
}

function onResize1()
{
	var pW = pageWidth();
	if(pW < 851)
	{
		document.getElementById('nav').style.display="none";
		document.getElementById('nav').style.float="left";
		document.getElementById('hamburger').style.display="block";
		//document.getElementById('logo_AS').style.transitionDuration="1s";
	}
	else
	{	
		document.getElementById('nav').style.display='block';
		document.getElementById('nav').style.float="right";
		document.getElementById('hamburger').style.display="none";
		
		//document.getElementById('logo_AS').style.

	}		
}

function openLogin()
{
	window.open("loginPage.html");
}


// JQUERY FOR SMOOTH SCROLL
$(document).ready(function()
{
	$("a").on('click', function(event)  // Add smooth scrolling to all links
	{
		if (this.hash !== "")   // Make sure this.hash has a value before overriding default behavior
		{
  			event.preventDefault();  // Prevent default anchor click behavior
     	   	var hash = this.hash;     // Store hash

     	    $('html, body').animate({scrollTop: $(hash).offset().top}, 650, function() 
    	   	{
     	   		// Using jQuery's animate() method to add smooth page scroll
			    // The optional number (800) specifies the number of milliseconds it takes to scroll to   the specified area
	
		    	window.location.hash = hash;
	
				// Add hash (#) to URL when done scrolling (default click behavior)  	   
			}); 				
		}
    });  		
});

$(document).ready(function(){
    $("#hamburger").click(function(){
        $("#dropdown").slideDown("slow");
    });
});
