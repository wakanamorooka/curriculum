class taiyaki {
    constructor(name){
         this.name = name;



    }
      in(){
          console.log('中身は' + this.name +'です');
      }
}
 let beenjam = new taiyaki('あんこ');
 beenjam.in()

 let cheese = new taiyaki('チーズ');
 cheese.in()

 let cream = new taiyaki('クリーム');
 cream.in()
