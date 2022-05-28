//問1：10、15、20、25を含む:/
//配列の変数scoresを用意して、画像のように偶数だけを出力してください。

let scores = [10,15,20,25];
console.log(scores);
scores = 10;
if (scores % 2 === 0) {
    console.log(scores + "は偶数です");
 }
scores= 20;
 if (scores % 2 === 0) {
    console.log(scores + "は偶数です");
 }

 //問2：ガソリンとナンバーのプロパティを持った「carオブジェクト」を作成して、ガソリンとナンバーを出力してください。

 let cars = {
     gass: 20.5,
     num: 1234 
 };
 console.log(cars.gass);
 console.log(cars.num)
 console.log("ガソリンは" + cars.gass + "です");
 console.log("ナンバーは" + cars.num + "です");


