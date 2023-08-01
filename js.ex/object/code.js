//オブジェクトの作成
let obj = {name: "Alice", id:222, isStudent: true};
console.log(obj);

//Aliceを表示させる
console.log(obj.name);
console.log(obj["name"]);

//上書きの仕方
obj.id = 30;
console.log(obj.id);
obj["isStudent"] = false;
console.log(obj["isStudent"]);

for(let key in obj){
    console.log(key + ":" +obj[key]);
}