function rolldownDelay() {
    $('.rolldown-list li.roll').each(function () {
        var delay = ($(this).index() / 4) + 's';
        $(this).css({
            webkitAnimationDelay: delay,
            mozAnimationDelay: delay,
            animationDelay: delay
        });
    });
}
function rollupDelay() {
    var x = $('.rollup-list li.roll');
    x.each(function () {
        var delay = ((x.length / 4) - $(this).index() / 4) + 's';
        $(this).css({
            webkitAnimationDelay: delay,
            mozAnimationDelay: delay,
            animationDelay: delay
        });
    });
}


$(document).ready(function () {
    rolldownDelay();
    $('.og').click(function () {
        console.log('og clicked');
        if (document.getElementById('rollList').className === 'rolldown-list') {
            $('#rollList').removeClass('rolldown-list');
            setTimeout(function () {
                $('#rollList').addClass('rollup-list');
                rollupDelay();
            }, 1);
        } else {
            $('#rollList').removeClass('rollup-list');
            setTimeout(function () {
                $('#rollList').addClass('rolldown-list');
                rolldownDelay();
            }, 1);
        }
    });
});