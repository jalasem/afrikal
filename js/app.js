$(document).ready(function() {
    $('#openSearch').click(function() {
        $('#searchField').toggleClass('hide slideInDown fadeOutUp');
    });
    $('#searchClose').click(function() {
        $('#searchField').addClass('hide slideInDown fadeOutUp');
    });

    $('#findServices').click(function() {
        $('#searchField').toggleClass('hide slideInDown fadeOutUp');
    });
    // $('#searchClose').click(function() {
    //     $('#searchField').addClass('hide');
    // });
});