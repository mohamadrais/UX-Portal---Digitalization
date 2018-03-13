//smooth scroll that matches any href to an associated section id
 $(function() {
     $('.nav-stacked a[href*=#]:not([href=#])').click(function() {
       var target = $(this.hash);
     if (location.hostname == this.hostname) {
       if (target.length !=0) {
             $('html,body').animate({
                  scrollTop: target.offset().top
             }, 1000);
               return false;
           }
     }
   });
 });
 /*get information like widths, coordinates, and heights
   on page load. then call addActive() on window scroll */
 $(document).ready(function() {

//Modal Pop Up functionality

var menuClick = "";
var contact = "";  
var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++)
    {
        var sParameterName = sURLVariables[i].split('=');
        
         if (sParameterName[0] == "mn")
        {
            menuClick = sParameterName[1];
            console.log(menuClick);
        }
        if (sParameterName[0] == "ct")
        {
            contact = "#"+ sParameterName[1];
        }
    }
    if(menuClick=="submitComp"){                
         $( "#submitComp" ).trigger( "click" );
         };


   if($('.navbar-inverse').hasClass('navbarSecondary'))	{
   var stickyNavTop = $('#nav').offset().top,
       window_height = $(window).height(),
       nav = $('#nav'),
       nav_height = nav.outerHeight(),
       doc_height = $(document).height();

   $(window).scroll(function() {
       //stickyNav();
       addActive();

   });
  
   // add active class to identify what section is currently being selected 
   function addActive() {
     var scrollPos = $(window).scrollTop();
     $('.section').each(function(){
       var top = $(this).offset().top - nav_height,
           bottom = top + $(this).outerHeight();
       if (scrollPos >= top && scrollPos <= bottom) {
         nav.find('a').removeClass('active');
         nav.find('a[href="#'+ $(this).attr('id') + '"]').addClass('active');
		 //nav.find('a').parent().removeClass('active2');
			if( $(this).next('.submenu').is(':hidden')){
			nav.find('a[href="#'+ $(this).attr('id') + '"]').parent().addClass('active2');
			//alert();
			}
       }
       else if (scrollPos + window_height == doc_height) {
         if (!$('#nav a:last').hasClass('active')) {
           nav.find('a').removeClass('active');
           nav.find('a:last').addClass('active');		   
         }
       }
     });
   }
   }
 });
 
 //equal height
 function setHeight(column) {
    var maxHeight = 0;
    //Get all the element with class = col
    column = $(column);
    column.css('height', 'auto');
    //Loop all the column
    column.each(function() {       
        //Store the highest value
        if($(this).height() > maxHeight) {
            maxHeight = $(this).height();
        }
    });
    //Set the height
    column.height(maxHeight);
}


$(window).resize(function() {
    setHeight('.imgcol');
});
$(document).ready(function() {
    setHeight('.imgcol');
});


jQuery(document).ready(function() {
	//Search Popup Box
	$('.searchIcon').click(function(){
		$('.searchBox').fadeIn();
		$('body').addClass('scrollHide');
	})
	$('.popupCross').click(function(){
		$(this).parents('.searchBox').fadeOut();
		$('body').removeClass('scrollHide');
	});
	
	//div visible when scroll down
	jQuery('.visibleContent').addClass("hiddenDiv").viewportChecker({
		classToAdd: 'visibleDiv animated fadeIn',
		offset: 250
	   });
	   
$('.submitCom').click(function(){	
    window.location.replace('dashboard.html')	
   
  });
	
  
});

$(window).scroll(function() {
	var scroll = $(window).scrollTop();
	 if (scroll >= 10) {
	if(!$('.submenu').is(':hidden')){
		$(this).parent().addClass('active2');
		//alert();
	}
	}
})