var inText = document.getElementById("display");



inText.addEventListener('keyup' , function(e){
    if (e.key === 'Enter'){
        inText.value = eval(inText.value);

    }

});

var btn0 = document.getElementById("0");

btn0.addEventListener('click' , function(){
        inText.value += "0";
        if (inText.value === "00"){
            inText.value = "0";
        }

});

var btn = document.getElementById("1");

btn.addEventListener('click' , function(){
        inText.value += "1";
        if (inText.value === "01"){
            inText.value = "1";
        }
});
var btn = document.getElementById("2");

btn.addEventListener('click' , function(){
        inText.value += "2";
        if (inText.value === "02"){
            inText.value = "2";
        }
});
var btn = document.getElementById("3");

btn.addEventListener('click' , function(){
        inText.value += "3";
        if (inText.value === "03"){
            inText.value = "3";
        }
});
var btn = document.getElementById("4");

btn.addEventListener('click' , function(){
        inText.value += "4";
        if (inText.value === "04"){
            inText.value = "4";
        }
});
var btn = document.getElementById("5");

btn.addEventListener('click' , function(){
        inText.value += "5";
        if (inText.value === "05"){
            inText.value = "5";
        }
});
var btn = document.getElementById("6");

btn.addEventListener('click' , function(){
        inText.value += "6";
        if (inText.value === "06"){
            inText.value = "6";
        }
});
var btn = document.getElementById("7");

btn.addEventListener('click' , function(){
        inText.value += "7";
        if (inText.value === "07"){
            inText.value = "7";
        }
});
var btn = document.getElementById("8");

btn.addEventListener('click' , function(){
        inText.value += "8";
        if (inText.value === "08"){
            inText.value = "8";
        }
});
var btn = document.getElementById("9");

btn.addEventListener('click' , function(){
        inText.value += "9";
        if (inText.value === "09"){
            inText.value = "9";
        }else if(inText.value.length>20){
            inText.value = "max exided"
        }
});




var btnAdd = document.getElementById("add");

btnAdd.addEventListener('click' , function(){
        inText.value += "+";
        if (inText.value === "0+"){
            inText.value = "0";
        }
});

var btnSub = document.getElementById("min");

btnSub.addEventListener('click' , function(){
        inText.value += "-";
        if (inText.value === "0-"){
            inText.value = "0";
        }
});

var btnDiv = document.getElementById("div");

btnDiv.addEventListener('click' , function(){
        inText.value += "/";
        if (inText.value === "0/"){
            inText.value = "0";
        }
});

var btnmul = document.getElementById("mul");

btnmul.addEventListener('click' , function(){
        inText.value += "*";
        if (inText.value === "0*"){
            inText.value = "0";
        }
        
});



var ans = document.getElementById('eq');
ans.addEventListener('click', function(){
    inText.value = eval(inText.value)
    alert(`answer is ${inText.value}`)
});

var ce = document.getElementById('ce');
ce.addEventListener('click', function(){
    inText.value = '0'
    
});





