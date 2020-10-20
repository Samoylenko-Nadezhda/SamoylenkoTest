$(document).ready(function () {
    $('.menu__link,.profile__link').click(function () {
        $('.header-menu').find('.menu__link,.profile__link').each(function () {
            $(this).removeClass('active');
            if (!$(this).is('#services')) {
                $('.open-menu').fadeOut("fast");
                $('.step2, .step3, .step4, .step5').hide();
            }
        })

        $(this).addClass('active');
        return false;
    });

    $('#services').click(function () {
        $('.open-menu').fadeIn( "slow" );
    });

    $('#chemicals').click(function () {
        $('.step2').show();
    });
    $('#chemicals__wear').click(function () {
        $('.step3').show();
    });
    $('#chemicals_wear_outwear').click(function () {
        $('.step4').show();
    });
    $('#chemicals_wear_tshirt').click(function () {
        $('.step5').show();
    });

});