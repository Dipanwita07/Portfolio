$(document).ready(function(){
    $(window).on('scroll',function(){
        var scroll = $(window).scrollTop();
        if(scroll>=50){
            $(".sticky").addClass("stickyadd");
        }
        else{
            $(".sticky").removeClass("stickyadd");
        }
    })
    var typed = new Typed('.element', {
        strings: ["Dipanwita Das.","a Web Developer.","a statistician.","a Web Designer."],
        typeSpeed: 100,
        backSpeed: 100,
        loop: true,
        loopCount: Infinity,
        startDelay: 1000
      });

      //set waypoints
      var waypoint = new Waypoint({
        element: document.getElementById('exp-Id'),
        handler: function() {
         //Expeirence Section

       var p = document.querySelectorAll(".progress-bar");
       p[0].setAttribute("style","width:70%;transition:1s all");
       p[1].setAttribute("style","width:60%;transition:1.2s all");
       p[2].setAttribute("style","width:40%;transition:1.4s all");
       p[3].setAttribute("style","width:30%;transition:1.7s all");
       p[4].setAttribute("style","width:50%;transition:1.9s all");
        },
      offset: '90%'     
        
      });
      
  
});

  