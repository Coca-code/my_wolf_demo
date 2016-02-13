/*-
========================================
@CONTENT:MY_WORKS.JS
@AUTHOR:YMF_WX1981@HOTMAIL.COM
@DESC:MAKE THE PAGE INTERACTIVE 
@DATE:2016-2-12
========================================
*/


window.onload = function() {

    var oWolf = document.getElementById('wolf');
    var oAudio = document.getElementsByTagName('audio')[0];

    oWolf.onclick = function() {

        if (oAudio.paused) {
            oAudio.play();
            this.setAttribute('class', 'wolf');
        } else {
            oAudio.pause();
            this.setAttribute('class', '');
        };
    };


};
