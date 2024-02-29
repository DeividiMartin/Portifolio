$(document).ready(function () {
    $('.course-title').click(function () {
        var sublist = $(this).siblings('.sub-list');
        sublist.toggle();
        $(this).toggleClass('opened', sublist.is(':visible'));
    });
});
