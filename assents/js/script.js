$(document).ready(function () {
    $('.course-title').click(function () {
        var sublist = $(this).siblings('.sub-list');
        sublist.slideToggle(400);
        $(this).toggleClass('opened'); // Toggle the 'opened' class directly
    });
});
