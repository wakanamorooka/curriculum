//問1：10、15、20、25を含む:/
//配列の変数scoresを用意して、画像のように偶数だけを出力してください。

let scores =[10,15,20,25];
for(let i = 0; i < scores.length; i++)
   if (i % 2 === 0){
    console.log( scores[i] + "は偶数です");
}


 //問2：ガソリンとナンバーのプロパティを持った「carオブジェクト」を作成して、ガソリンとナンバーを出力してください。

 let cars = {
     gass: 20.5,
     num: 1234 
 };
 
 console.log("ガソリンは" + cars.gass + "です");
 console.log("ナンバーは" + cars.num + "です");


