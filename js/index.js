var blink = document.getElementById("blink");
var title = document.getElementById("title")
var titinfo = document.getElementById("title-info")
        function change(){
        var w = document.body.clientWidth || document.body.clientWidth;
        var widths = w/3.5;
        var heights = w/5;
        var font1 = w/30;
        var font2 = w/50;
        blink.style.width=widths+'px';  
        blink.style.height=heights+'px';  
        title.style.fontSize=font1+'px';      
        titinfo.style.fontSize=font2+'px';      
        }
        setInterval("change()",200);