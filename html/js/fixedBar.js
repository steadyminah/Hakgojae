$(function(){
    $('#hdrWrap .icon').on('click', showNav);
    function showNav(){
        $('.sideBar').stop().animate({right: 0});
    }
    $('#mnWrap, .content').on('click', hideNav);
    function hideNav(){
        $('.sideBar').stop().animate({right: '-45%'});
    }
});