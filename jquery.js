$.fn.scrollStopped = function(callback) {           
        $(this).scroll(function(){
            var self = this, $this = $(self);
            if ($this.data('scrollTimeout')) {
              clearTimeout($this.data('scrollTimeout'));
            }
            $this.data('scrollTimeout', setTimeout(callback,250,self));
        });
    };


function main() {
    $(".content").scrollStopped(function () {
        
        if($(".content").scrollTop() > 100 ){
            console.log($(".content").scrollTop()+ " stick on top");
            stickOnTop();
        }else{
            console.log($(".content").scrollTop()+ " spaceIt");
            spaceIt();           
        }
    });
}    
function stickOnTop(){
    $(".container").transition({"padding-top" : "0px"},200, 'snap');
    $(".banner").transition({position:"fixed", left:"-5px", right:"-5px"},200, 'snap');
    $(".mantra").transition({y : '-25px' },200, 'snap');
    $(".menu").transition({y : '45px', width : '60px'},200, 'snap');
}

function spaceIt(){
    
    $(".container").attr( 'style', '' );
    $(".banner").attr( 'style', '' );
    //$(".menu").attr( 'style', '' );
    $(".mantra").attr( 'style', '' );
    //$(".banner").css({"position": "", "top": ""});
    //$(".banner").transition({y : '-25px' , left:"-5px", right:"-5px"});
    //$(".mantra").transition({y : '25px' });
    $(".menu").transition({y : '0px', width : '60px'},200, 'snap');
    $('.mantra').css({ opacity: 0 }).transition({y : '0px' , x: '400%', opacity: 100 },200, 'snap');
}

$(document).ready(function (){
    main();
    initMantra();
    initMenu();
    var tab = [];
    var posters = [];
    tab.push({a:"http://embed.koreus.com/00071/201401/monter-escalier-velo.mp4", 
              b: "Monter des escaliers &agrave; v&eacute;lo sans p&eacute;daler",  
              c : "Description : Pendant une course du championnat de cyclo-cross 2014 &agrave Boulder ..."});
    tab.push({a : "https://embed.koreus.com/00071/201401/chat-skateboard.mp4",
              b: "Monter des escaliers &agrave; v&eacute;lo sans p&eacute;daler",  
              c : "Description : Pendant une course du championnat de cyclo-cross 2014 &agrave; Boulder ..."});
    tab.push({a: "https://embed.koreus.com/00071/201312/saut-chat-toit-voiture-neige.mp4",
              b: "Monter des escaliers &agrave; v&eacute;lo sans p&eacute;daler",  
              c : "Description : Pendant une course du championnat de cyclo-cross 2014 &agrave; Boulder ..."});
    for(var i=0;i < tab.length; i++){
        addVideo(tab[i].a, ""+i, tab[i].b,tab[i].c);
    }
});



function initMantra(){
    $('.mantra').css({ opacity: 0 }).transition({ x: '400%', opacity: 100 });
}


function initMenu(){
    $('.items').hide();
    $('.items').css({ opacity: 0 });
    $('.menu').css({ width : '60px'});
    $('.menu').hover(function (){
        $('.menu').transition({ width: '100px' });
        $('.items').show();
        $('.items').transition({ opacity: 100 });
    }, function (){
        $('.menu').transition({ width: '60px' });
        $('.items').transition({ opacity: 0 });
        $('.items').hide();
    });
}

function addVideo(url, id, title, desc, poster){
    var html = "";
    html = "<div class=\"item\">"+ 
                "<div class=\"title font\">"+
                    title+
                "</div>"+
                "<div class=\"video\">"+
                    "<video id=\""+id+"\" class=\"video-js vjs-default-skin\" controls>"+ 
                    "<source src=\""+url+"\" type='video/mp4' />"+
                    "</video>"+
                "</div>"+
                "<div class=\"description font\">"+
                    desc+
                "</div>"+
                "<div class=\"share\">"+
                        "<a href=\"javascript:void(0);\" class=\"facebook\">Facebook</a>"+
                        "<a href class=\"space\"></a>"+
                        "<a href=\"javascript:void(0);\" class=\"twitter\">Twitter</a>"+
                        "<a href class=\"space\"></a>"+
                        "<a href=\"javascript:void(0);\" class=\"comment\">Commentaires</a>"+
                "</div>"+
            "</div>";
    $(".content").append(html);
    console.log($(".content").width());
    videojs(id, 
            {"preload":"auto", 
             "width":"70%" ,
             "height":"500", 
             "poster":poster});
}




