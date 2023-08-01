//メソッドその１
function printHello(){
    console.log("hello");
}
//メソッドの呼び方
printHello();

//メソッド２returnあり
function sum(a,b){
    return a + b ;
}
console.log(sum(1,2));

//デフォルトパラメータ
function print(srt1,str2="世界",str3="!!!!"){
    console.log(srt1 + " " + str2 + " "+ str3);
}
//呼び出し
print("ヨホホホ");
print("ヨホホホ","お昼寝したい");
print("ヨホホホ","お昼寝したい","おやつも食べたい");

//ラムダ式
let add = (x,y)=>x+y;
console.log(add(2,3));