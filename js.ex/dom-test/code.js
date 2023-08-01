let label = document.getElementById("text-result");
let button1 = document.getElementById("change-text1");
let button2 = document.getElementById("change-text2");
let button3 = document.getElementById("change-text3");
button1.addEventListener('click',()=>{
    label.innerHTML ="リセット";
});
let a = 0;
button2.addEventListener('click',()=>{
    a++;
    var str="値:"+a;
    label.innerHTML = str;
});
button3.addEventListener('click',()=>{
    a--;
    label.innerHTML = "値:"+a;
})