
          
          
         
	var scroll = new SmoothScroll('a[href*="#"]');

  <script type="text/javascript">// All animations will take exactly 500ms
var scroll = new SmoothScroll('a[href*="#"]', {
	speed: 500,
	speedAsDuration: true
});
 <script type="text/javascript" >
    
     
     $(document).ready(function(){ //Hacia arriba
  irArriba();
});

function irArriba(){
  $('.flecha-regresar').click(function(){ $('body,html').animate({ scrollTop:'0px' },1000); });
  $(window).scroll(function(){
    if($(this).scrollTop() > 0){ $('.flecha-regresar').slideDown(600); }else{ $('.flecha-regresar').slideUp(600); }
  });
  $('.ir-abajo').click(function(){ $('body,html').animate({ scrollTop:'1000px' },1000); });
}
 
 
       $(function(){
         $(window).scroll(function(){
             
             var scrolltop= $(this).scrollTop();
             if (scrolltop >= 50){
                 $('.flecha-regresar').fadeIn();
             } alse {
                 $ ('.flecha-regresar').fadeOut();
                 }
             });
         });
     