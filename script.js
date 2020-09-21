function go_dark() {
    document.getElementById('phone-logo').src = "images/TM_logo_light.png";
    var dark = document.getElementById('dark-bulb');
    dark.style.display = 'none';
    var light = document.getElementById('light-bulb');
    light.style.display = 'inline-block';
    var darkd = document.getElementById('dark-bulb-desk');
    darkd.style.display = 'none';
    var lightd = document.getElementById('light-bulb-desk');
    lightd.style.display = 'inline-block';
    var back_sec = document.querySelectorAll(".sec:nth-child(2n)");
    var back_sec2 = document.querySelectorAll(".sec:nth-child(2n + 1)");
    var navlist = document.querySelectorAll(".nav-list li a");
    var headers = document.querySelectorAll(".section-heading-sp");
    var headers_icon = document.querySelectorAll(".heading-icon");
    var logo = document.querySelectorAll(".site-logo path");
    var exp_head = document.querySelectorAll(".timeline-designation");
    var car_plane = document.querySelectorAll(".timeline-divider i");
    var skill_back = document.querySelectorAll(".skill-progress");
    var skill_fill = document.querySelectorAll(".skill-filler");
    var logo_name = document.querySelectorAll(".logo-name h1 ");
    var link_box = document.querySelectorAll(".link-box-button ");
    var project = document.querySelectorAll(".project_box");
    var cert = document.querySelectorAll(".cert-detail");
    var cert_date = document.querySelectorAll(".cert-date ");
    for (let i = 0; i < cert.length; i++) {
        cert[i].style.boxShadow = "0px 15px 15px 0 #000000";
        cert[i].style.backgroundColor = "#515151";
        cert[i].style.color = "white";
        cert_date[i].style.color = "grey";
        cert_date[i].style.color = "grey";
    }
    for (let i = 0; i < project.length; i++) {
        project[i].style.color = "white";
    }
    for (let i = 0; i < link_box.length; i++) {
        link_box[i].style.boxShadow = "0px 15px 15px 0 #000000";
    }
    for (let i = 0; i < logo_name.length; i++) {
        logo_name[i].style.color = "#ffffff";
    }
    for (let i = 0; i < skill_back.length; i++) {
        skill_back[i].style.backgroundColor = "#4e4e4e";
        skill_back[i].style.boxShadow = "none"
        skill_fill[i].style.boxShadow = "6px 0 11px -2px #212121"
    }
    for (let i = 0; i < car_plane.length; i++) {
        car_plane[i].style.color = "#f3cd34";
    }
    for (let i = 0; i < exp_head.length; i++) {
        exp_head[i].style.color = "#e0e0e0";
    }
    var exp_info = document.querySelectorAll(".timeline-description");
    for (let i = 0; i < exp_info.length; i++) {
        exp_info[i].style.color = "#a2a2a2";
    }
    for (let i = 0; i < logo.length; i++) {
        logo[i].style.fill = "#e0e0e0";
    }
    for (let i = 0; i < headers.length; i++) {
        headers[i].style.backgroundImage = "linear-gradient(50deg, #fbb040 0%, #f9ed32 74%)";
        headers_icon[i].style.backgroundImage = "linear-gradient(50deg, #fbb040 0%, #f9ed32 74%)";
    }
    for (let i = 0; i < back_sec.length; i++) {
        back_sec[i].style.backgroundColor = "#292929";
        back_sec2[i].style.backgroundColor = "#242424";
    }
    for (let i = 0; i < navlist.length; i++) {
        navlist[i].style.color = "white";
    }
    document.getElementById("body-header").style.backgroundColor = "#1a1a1a"
    document.getElementById("me-desk").style.boxShadow = "0px 15px 15px 0 #000000"
    document.getElementById("me-mob").style.boxShadow = "0px 15px 15px 0 #000000"
    document.getElementById("about-description-p").style.color = "white"
    document.getElementById("my-stuff").style.color = "white"

}

function go_light() {
    document.getElementById('phone-logo').src = "images/TM_logo.png";
    var dark = document.getElementById('dark-bulb');
    dark.style.display = 'inline-block';
    var light = document.getElementById('light-bulb');
    light.style.display = 'none';
    var darkd = document.getElementById('dark-bulb-desk');
    darkd.style.display = 'inline-block';
    var lightd = document.getElementById('light-bulb-desk');
    lightd.style.display = 'none';
    var back_sec = document.querySelectorAll(".sec:nth-child(2n)");
    var back_sec2 = document.querySelectorAll(".sec:nth-child(2n + 1)");
    var skill_fill = document.querySelectorAll(".skill-filler");
    var skill_back = document.querySelectorAll(".skill-progress");
    var logo_name = document.querySelectorAll(".logo-name h1 ");
    var cert = document.querySelectorAll(".cert-detail");
    var cert_date = document.querySelectorAll(".cert-date ");
    for (let i = 0; i < cert.length; i++) {
        cert[i].style.boxShadow = "-30px 0 30px 0 lightgrey";
        cert[i].style.backgroundColor = "#dedede";
        cert[i].style.color = "black";
        cert_date[i].style.color = "grey";
    }
    var link_box = document.querySelectorAll(".link-box-button ");
    for (let i = 0; i < link_box.length; i++) {
        link_box[i].style.boxShadow = "-5px 10px 10px 0 #bababa";
    }
    for (let i = 0; i < logo_name.length; i++) {
        logo_name[i].style.color = "#000000";
    }
    for (let i = 0; i < skill_back.length; i++) {
        skill_back[i].style.backgroundColor = "lightgrey";
        skill_back[i].style.boxShadow = " -5px 10px 10px 0 #bababa"
        skill_fill[i].style.boxShadow = "5px 0 11px -2px #929292"
    }
    for (let i = 0; i < back_sec.length; i++) {
        back_sec[i].style.backgroundColor = "white";
        back_sec2[i].style.backgroundColor = "#e7e7e7";
    }
    var logo = document.querySelectorAll(".site-logo path");
    for (let i = 0; i < logo.length; i++) {
        logo[i].style.fill = "black";
    }
    var navlist = document.querySelectorAll(".nav-list li a");
    for (let i = 0; i < navlist.length; i++) {
        navlist[i].style.color = "black";
    }
    var exp_head = document.querySelectorAll(".timeline-designation");
    for (let i = 0; i < exp_head.length; i++) {
        exp_head[i].style.color = "#000000";
    }
    var exp_info = document.querySelectorAll(".timeline-description");
    for (let i = 0; i < exp_info.length; i++) {
        exp_info[i].style.color = "#727272";
    }
    var headers = document.querySelectorAll(".section-heading-sp");
    var headers_icon = document.querySelectorAll(".heading-icon");

    for (let i = 0; i < headers.length; i++) {
        headers[i].style.backgroundImage = "linear-gradient(50deg, #3663d6 0%, #27c6b9 74%)";
        headers_icon[i].style.backgroundImage = "linear-gradient(50deg, #3663d6 0%, #27c6b9 74%)";
    }
    var car_plane = document.querySelectorAll(".timeline-divider i");
    for (let i = 0; i < car_plane.length; i++) {
        car_plane[i].style.color = "#2857a4";
    }
    var project = document.querySelectorAll(".project_box");
    for (let i = 0; i < project.length; i++) {
        project[i].style.color = "#212529";
    }
    document.getElementById("body-header").style.backgroundColor = "#dbdbdb"
    document.getElementById("me-desk").style.boxShadow = "0px 15px 15px 0 #bababa"
    document.getElementById("me-mob").style.boxShadow = "0px 15px 15px 0 #bababa"
    document.getElementById("about-description-p").style.color = "black"
    document.getElementById("my-stuff").style.color = "black"
}