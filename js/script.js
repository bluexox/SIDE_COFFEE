$(document).ready(function () {

    // Header Scroll Event
    $(function () {
        var prevScrollTop = 0;
        document.addEventListener("scroll", function () {
            // Check screen width
            if (window.innerWidth > 427) {
                var nowScrollTop = $(window).scrollTop();

                if (nowScrollTop > prevScrollTop) {
                    $('#header').addClass('active');
                } else {
                    $('#header').removeClass('active');
                }
                prevScrollTop = nowScrollTop;
            } else {
                $('#header').removeClass('active'); // Ensure the header is not active for narrow screens
            }
        });
    });

});