$(document).ready(function() {
    $('#urltxt').val(document.location.href);
    $(".chan").click(function() {
        $(this).siblings().addClass('cur');
    });
    $(".select1").mouseleave(function() {
        $(this).children(".select1 ul").removeClass('cur');
    });
    $(".select1 ul li").click(function() {
        $(this).parent().siblings().html($(this).html());
        $(this).parent().removeClass('cur');
    });
    $(".divblock1 span.spanblock").click(function() {
        $(this).toggleClass('cur');
    });
    $(".syb>a").click(function() {
        $(this).addClass('cur').siblings().removeClass('cur');
        $(".cheakblock>div").eq($(this).index()).addClass('cur').siblings().removeClass('cur');
    });
});