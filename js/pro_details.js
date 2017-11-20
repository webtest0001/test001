/**
 * Created by Administrator on 2017/9/29.
 */
$(function () {
    $(".pro_btn li").click(function () {
        console.log(this);
        var index=$(this).index();
        console.log(index)
        $(this).addClass("current").siblings().removeClass("current");
        $(".pro_img li").eq(index).fadeIn().siblings().fadeOut()
    })
})