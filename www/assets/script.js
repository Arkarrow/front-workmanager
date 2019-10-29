$(document).ready(function () {
    $('.ui.checkbox').checkbox();
    
    $('.ui.bottom.attached.button').click(function () {
        var el = $(this);
        if (el.hasClass('loading')) {
            return;
        }
        el.addClass('loading');
        var time = Math.floor(Math.random() * 5000);
        setTimeout(function () {
            el.removeClass('loading');
        }, time);
    });
    
    setTimeout(function () {
        $('.ui.segment')
        .transition({
            animation: 'drop in',
            duration: '0.8s',
            onComplete: function () {
                $('.ui.bottom.attached.button')
                .removeClass('hidden');
                setTimeout(function () {
                    $('#flip-label')
                    .transition({
                        animation: 'fade in',
                        duration: '0.8s'
                    });
                }, 1000);
            }
        });
    }, 500);
    
    $('.shape').shape();
    $('#flip-label')
    .state()
    .click(function () {
        $('#flip-label').transition({
            animation: 'fade out',
            duration: '300ms',
            onComplete: function () {
                if ($('#flip-label').hasClass('active')) {
                    $('#flip-label').html('Wait, I have an account!');
                } else {
                    $('#flip-label').html('Not a member yet?');
                };
                $('.shape').shape('flip over');
                setTimeout(function () {
                    $('#flip-label').transition({
                        animation: 'fade in',
                        duration: '300ms'
                    });
                }, 700);
            }
        });
    });
});