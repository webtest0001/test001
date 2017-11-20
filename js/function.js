/**
 * Created by duodi on 2017/9/5.
 */

/*-----------------------------IE8类名兼容----------------------------*/
function $1(select){
    if(select.indexOf(".")==-1&&select.indexOf("#")==-1){
        return document.getElementsByTagName(select);
    }
    if(select.indexOf("#")!=-1){
        return document.getElementById(select.slice(1));
    }
    if(select.indexOf(".")!=-1){
        var all=document.getElementsByTagName("*");
        var arr=[];
        var num=0;
        for(var i=0;i<all.length;i++){
            if(all[i].className==select.slice(1)){
                arr[num]=all[i];
                num++;
            }
        }
        return arr;
    }
}

/*---------------------------中国移动的无缝轮播--------------------------*/
function lunbo(banner,imgWadd){                                     //参数（最外面的banner盒子，图片的宽度加上右边距）排版顺序：banner>(innerbox>imgbox_ul>li)~prev~next~(mask>mask_bg~video) 
    var ul=banner.children[0].children[0];
    var prev=banner.children[1];
    var next=banner.children[2];
    // var mask=banner.children[3];
    // var mask_bg=getFirst(getChild(banner)[3]);
    var flag = true;
    var flag1= true;
    //    自动轮播
    var t=setInterval(move,2000);
    function move(){
        animate(ul,{marginLeft:-1*imgWadd},500,function(){
            var first=ul.children[0];
            ul.appendChild(first);
            ul.style.marginLeft=0;
            flag=true;
            flag1=true;
        })
    }
//    鼠标移上离开效果
    banner.onmouseover=function(){
        clearInterval(t);
    }
    banner.onmouseout=function(){
        t=setInterval(move,2000);
    }

    //右箭头
    next.onclick=function(){
        if(flag){
            flag=false;
            move();
        }
    }
    //左箭头
    prev.onclick=function(){
        if(flag1){
            flag1=false;
            animate(ul,{marginLeft:0},500,function(){
//            var first=ul.firstElementChild;
//            var last=ul.lastElementChild;
                var first=ul.children[0];
                var last=ul.lastChild;
                ul.insertBefore(last,first);
                ul.style.marginLeft=-1*imgWadd+"px";
                flag1=true;
            })
        }
    }

}

























