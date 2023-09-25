var elUserName = document.getElementById('username');
var elmsg = document.getElementById('feedback');

function checkUsername(parameter){
    if (parameter === "verify"){
        elmsg.innerHTML = "NICE";
    }
    else{
        elmsg.innerHTML = "Try Again";
    }
};

elUserName.addEventListener('blur',function(){checkUsername(elUserName.value);}, false);