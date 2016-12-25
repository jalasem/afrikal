$(document).ready(function(){
    $('#openSearch').click(function(){
        $('#searchNav').toggleClass('hide');
    });
    $('#searchClose').click(function(){
        $('#searchNav').addClass('hide');
    });
});