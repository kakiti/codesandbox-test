// //テンプレート文字列

// const name = "kaki";
// const age = 25;

// //従来の方法
// const message1 = "私の名前は" + name + "です。年齢は" + age + "です。"
// console.log(message1)

// //テンプレート文字列を用いた方法
// const message2 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message2);
// //なおバッククオート（''）を使わないと、${}がそのまま表示されてしまう。

// //アロー関数

// //従来の方法
// function func1(str){
//   return str;
// }
// console.log(func1("func1です"));

// //アロー関数を用いた方法
// const func2 = (str) => {
//   return str;
// }
// console.log(func2("func2です"));
// //なお、{}で囲った場合は、returnしないと値が返されないので注意

// //短縮形(returnは使えない)
// const func3 = (str) => str;
// console.log(func3("func3です"));

// //数値を入れた関数（一行しかないので短縮形も可能）
// const func4 = (num1, num2) => {
//   return num1 + num2;
// };
// console.log(func4(10, 20));

// //オブジェクトの分割代入
// const myprofile = {
//   name: "kaki",
//   age: 25,
// };
// const message3 = `名前は${myprofile.name}です。年齢は${myprofile.age}です`;
// console.log(message3);

// const {name, age} = myprofile;
// const message4 = `名前は${name}です。年齢は${age}です`;
// console.log(message3);

// //配列の分割代入
// const myprofile2 = ["kaki", 25];

// const message5 = `名前は${myprofile2[0]}です。年齢は${myprofile2[1]}です。`;
// console.log(message5);

// const [name, age] = myprofile2;
// const message6 = `名前は${name}です。年齢は${age}です。`;
// console.log(message6);

//デフォルト値、引数など

// const sayhello =(name　= "ゲスト") => console.log(`こんにちは${name}さん`);
// sayhello("kaki");
// //なにも引数が指定されていない時はundefinedが代わりに表示される。デフォルト値を引数のなかに設定すると防げる。

// //スプレッド構文
// //配列の展開
// const arr1 =[1,2];
// console.log(arr1);
// console.log(...arr1);
// ///...を記述することで、配列の中身を順番に表示してくれる。配列を解除して表示するイメージ。

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);
// ///...を使うと配列と同じ数の引数を持つ関数の引数に使うことができる。

// //まとめる
// const arr2 =[1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2; //
// console.log(num1);
// console.log(num2);
// console.log(arr3);

// //配列のコピー、結合
// const arr4 = [10,20];
// const arr5 = [30,40];

// const arr6 = [...arr4];
// console.log(arr6);

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

// const arr8 = arr4;
// console.log(arr8);
// arr8[0] = 100;
// console.log(arr4);
// //イコールで配列をコピーすると、コピー先の配列を変更した時に、コピー元の配列も変更されてしまう。

// //mapやfilterを使った配列の処理。配列の繰り返し処理の記述。
// const nameArr = ["田中", "山田", "柿村"];
// //従来の方法
// for (let index = 0; index < nameArr.length; index++) {
//   console.log(`${index + 1}番目は${nameArr[index]}です`);
// }
// //for分の第一引数にindexを定義し、第二引数にindexがいくつの時に処理を終了させるかを記述し、第三引数に一回処理が終わるごとにindexをいくつ加算させるかを記述する。

// const nameArr2 = nameArr.map((name) => {
//   return name;
// });
// //map関数は配列に使える関数で、同じ内容が入った新たな配列を生み出す関数。配列の一つの要素を引数とし、中でアロー関数を定義する。
// //forEach関数との違いは、返り値を返り値で返すかどうか。forEachはただreturnするだけでは返り値をかえしてくれない。
// console.log(nameArr2);

// //map関数を使用して、配列を繰り返し処理させる。配列の要素一つをnameとし、それを要素一つ一つのパターンに落とし込んで実行している。
// nameArr.map((name) => console.log(name));

// //filterの使用
// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 1;
// });
// console.log(newNumArr);
// //filterは配列に対して使えるオブジェクト。条件式を満たした要素のみ、配列にして返してくれる。

// const newNameArr = nameArr.map((name) => {
//   if (name === "柿村") {
//     return name;
//   } else {
//     return `${name}さん`;
//   }
// });
// console.log(newNameArr);

// //三項演算子
// //ある条件 ? 条件がtrueの時 : 条件がfalseの時
// //条件の結果に合わせて実行する処理を変えることができる
// const val1 = 1 < 0 ? 'trueです' : 'falseです';
// console.log(val1);

// const num = "1300";
// const formatedNum = typeof num === 'number' ? num.toLocaleString() : '数値を入力してください';
// console.log(formatedNum);
// //typeof →対象の型を判定してくれる関数。型に合わせた内容を返り値として返す
// //toLocaleString→数値を三桁区切りにして表示してくれる関数。数値にしか使用できない。

// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? '100を超えています!!' : '許容範囲内です';
// }
// console.log(checkSum(50,60));

// //論理演算氏の本当の意味を知ろう　&& ||

// const flag1 = true;
// const flag2 = true;

// if (flag1 || flag2) {
//   console.log("1か2はtrueになります");
// }
// if (flag1 && flag2) {
//   console.log("1も2もtrueになります");
// }

//||は左側がfalseなら右側を返す仕組みになっている。nullはfalseの扱いになるので、下記の例だと右側の処理が返される
//逆に左側がtrueなら、右側を無視して左側を返す。左から順に判定してtrueが出たところで処理が止まるイメージ
const num = null;
const fee = "金額未設定" || "金額未設定です";
console.log(fee);

//&&は左側がtrueなら右側を返す仕組みになっている。左は右の防波堤みたいなイメージ
const num2 = 100;
const fee2 = num2 && "何か設定されました";
console.log(fee2);