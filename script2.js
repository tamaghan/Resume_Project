"use strict";
$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    // console.log(scroll);
    //>=, not <=
    if (scroll >= 1340) {
        //clearHeader, not clearheader - caps H
        $("#Education-section-heading").addClass("type-it");
    }
});

$(function () {
    $('#ub_box').hover(function () {
        $('#ub_box_logo').css('transform', 'scale(1.05)');
        $('#ub_wrapper').css('transform', 'rotate(-14deg) skew(-14deg) scale(0.96)');
        $('#ub_wrapper').css('box-shadow', '-20px 0px 20px 6px rgba(191, 194, 194, 0.71)');
    }, function () {
        // on mouseout, reset the background colour
        $('#ub_box_logo').css('transform', 'scale(1.0)');
        $('#ub_wrapper').css('transform', 'rotate(-10deg) skew(-10deg) scale(1)');
        $('#ub_wrapper').css('box-shadow', '-14px 13px 20px 6px rgba(191, 194, 194, 0.43)');
    });
    $('#bri_box').hover(function () {
        $('#bri_box_logo').css('transform', 'scale(1.05)');
        $('#bri_wrapper').css('transform', 'rotate(-14deg) skew(-14deg) scale(0.96)');
        $('#bri_wrapper').css('box-shadow', '-20px 0px 20px 6px rgba(191, 194, 194, 0.71)');
    }, function () {
        // on mouseout, reset the background colour
        $('#bri_box_logo').css('transform', 'scale(1.0)');
        $('#bri_wrapper').css('transform', 'rotate(-10deg) skew(-10deg) scale(1)');
        $('#bri_wrapper').css('box-shadow', '-14px 13px 20px 6px rgba(191, 194, 194, 0.43)');
    });
});

// !<>-_\\/[]{}—=+*^?#________
const Messenger = function (el) {
    'use strict';
    let m = this;

    m.init = function () {
        // m.codeletters = "&#*+%?£@§$";
        m.codeletters = "!<>-[]{}—=+*^?#";
        // m.codeletters = "#&$%@";
        m.message = 0;
        m.current_length = 0;
        m.fadeBuffer = false;
        m.messages = [
            'Tamaghan Maurya'
        ];

        setTimeout(m.animateIn, 100);
    };

    m.generateRandomString = function (length) {
        let random_text = '';
        while (random_text.length < length) {
            random_text += m.codeletters.charAt(Math.floor(Math.random() * m.codeletters.length));
        }

        return random_text;
    };

    m.animateIn = function () {
        if (m.current_length < m.messages[m.message].length) {
            m.current_length = m.current_length + 2;
            if (m.current_length > m.messages[m.message].length) {
                m.current_length = m.messages[m.message].length;
            }

            let message = m.generateRandomString(m.current_length);
            $(el).html(message);

            setTimeout(m.animateIn, 20);
        } else {
            setTimeout(m.animateFadeBuffer, 20);
        }
    };

    m.animateFadeBuffer = function () {
        if (m.fadeBuffer === false) {
            m.fadeBuffer = [];
            for (let i = 0; i < m.messages[m.message].length; i++) {
                m.fadeBuffer.push({c: (Math.floor(Math.random() * 12)) + 1, l: m.messages[m.message].charAt(i)});
            }
        }

        let do_cycles = false;
        let message = '';

        for (let i = 0; i < m.fadeBuffer.length; i++) {
            let fader = m.fadeBuffer[i];
            if (fader.c > 0) {
                do_cycles = true;
                fader.c--;
                message += m.codeletters.charAt(Math.floor(Math.random() * m.codeletters.length));
            } else {
                message += fader.l;
            }
        }

        $(el).html(message);

        if (do_cycles === true) {
            setTimeout(m.animateFadeBuffer, 50);
        } else {
            setTimeout(m.cycleText, 2000);
        }
    };

    m.cycleText = function () {
        m.message = m.message + 1;
        if (m.message >= m.messages.length) {
            m.message = 0;
        }

        m.current_length = 0;
        m.fadeBuffer = false;
        // $(el).html('');

        setTimeout(m.animateIn, 200);
    };

    m.init();
}
console.clear();
let messenger = new Messenger($('.about_name'));

function black(){
    document.documentElement.style
        .setProperty('--bg', '#212529');
    document.documentElement.style
        .setProperty('--white', '#212529');
    document.documentElement.style
        .setProperty('--black', '#F4F9F9');
}
