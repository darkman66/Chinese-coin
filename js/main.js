var ch_id = 0;
var this_opt = 0;
var ans_ok = 0;
var ans_fail = 0;
var ans_max = 15;

function loadConfig() {
    ch_id = 0;
    this_opt = 0;
    ans_ok = 0;
    ans_fail = 0;
    ans_max = 15;
    $('#ans_ok').html(ans_ok);
    $('#ans_err').html(ans_fail);
    $('#ans_remain').html(ans_max - (ans_ok+ans_fail));
}


function getChars() {
    $('#ans_remain').html(ans_max - (ans_ok+ans_fail));
    ch_id = Math.floor ( Math.random() * data.length );
    $('#ch').html('<img src="pics/' + ch_id + '.jpg" border="0">');
    $('#pin').html('<img src="pics/pin_' + ch_id + '.jpg" border="0">');
    
    var html ='<div class="p20t"><input type="radio" name="opt" onclick="setOpt(\'' + ch_id + '\');" > ' + data[ch_id] + "</div>";
    var t = Math.floor ( Math.random() * data.length );
    html += '<div class="p20t"><input type="radio" name="opt" onclick="setOpt(\'' + t + '\')"> ' + data[t] + '</div>';
    
    t = Math.floor ( Math.random() * data.length );
    html += '<div class="p20t"><input type="radio" name="opt" onclick="setOpt(\'' + t + '\')" checked> ' + data[t] + '</div>';

    $('#card_html').html(html);
}

function setOpt(opt) {
    this_opt = opt;
}

function goGadget() {
    
    if (this_opt == ch_id) {
        ans_ok += 1;
        $('#ans_ok').html(ans_ok);
    }
    else {
        ans_fail += 1;
        $('#ans_err').html(ans_fail);
        alert('Sorry. Wrong. Correct translation is \n\n' + data[ch_id] + '');
    }

    $('#ans_remain').html(ans_max - (ans_ok+ans_fail));

    if ( (ans_ok + ans_fail) < ans_max ) getChars();
    else $('#q').fadeIn();

}


function openTwitter() {
    var args = new blackberry.invoke.BrowserArguments('http://twitter.com/hackberry_pl');
    blackberry.invoke.invoke(blackberry.invoke.APP_BROWSER, args);
}
