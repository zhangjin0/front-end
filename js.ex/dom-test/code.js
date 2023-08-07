//要素を取得
let result = document.getElementById("text-result");
let buttonRest = document.getElementById("change-text1");
let buttonAdd = document.getElementById("change-text2");
let buttonSub = document.getElementById("change-text3");

//値を文字列で定数にしておく
const BASE_TEXT = "値 :";

//計算結果を格納する変数
let resultValue = 0;

//値を表示するメソッド
function changeResultText(){
    result,innerHTML = BASE_TEXT + resultValue;
};

//値を計算するメソッド
function calculateResultValue(setValue){
    resultValue = resultValue + setValue;
};

//リセットボタンを押した時
buttonRest.addEventListener('click',()=>{
//値を初期化
resultValue = 0;
changeResultText() ;
});

//1を加算ボタンを押した時
buttonAdd.addEventListener('click',()=>{
    calculateResultValue(1);
    changeResultText();
});

//1を減算ボタンを押した時
buttonSub.addEventListener('click',()=>{
    calculateResultValue(-1);
    changeResultText();
});

