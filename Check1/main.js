let numbers = [2, 5, 12, 13, 15, 18, 22];
//ここに答えを実装してください。↓↓↓
 function isEven(){
for(let i = 0; i < numbers.length; i++)
   if (numbers[i]% 2 === 0){
    console.log( numbers[i] + "は偶数です");
}
 }
 isEven();

 //・インスタンス化した時にガソリンとナンバーがセットされるようなCarクラスを作成する
 //・「ガソリンは〇〇です。ナンバーは△△です」と出力される「getNumGas」という関数を作成する

 class cars{
     constructor(gus,num){
         this.gus = gus;
         this.num = num;
 }
     getNumGas(){
         console.log("ガソリンは" + this.gus + "です。" + "ナンバーは" + this.num + "です。");
     }
}

let gus = new cars('〇〇','△△');
gus.getNumGas()


