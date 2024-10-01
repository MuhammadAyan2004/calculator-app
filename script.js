let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');
let str = "";
let arr = Array.from(buttons);
arr.forEach(button =>{
    button.addEventListener("click",(e)=>{
        if (e.target.innerHTML == '=') {   
            str= eval(str);
            input.value = str;
        }
        else if (e.target.innerHTML == 'Ac'){
            str = "";
            input.value = "";
        }
        else if (e.target.innerHTML == 'Del'){
            str = str.substring(0,str.length - 1);
            input.value= str;
        }
        else{
            str += e.target.innerHTML;
            input.value = str;
        }
    });
});
