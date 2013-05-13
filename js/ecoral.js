function  EcoralEstimator(base){
   this.b = base;

   //get Current Energy as kw.
   this.calcCurEnergy= function(){
       return (this.b.numblight * (this.b.origwat + this.b.stabwat)
               * this.b.onhour * this.b.ondate
              ) /1000;
   }
   //get Ecoral used Energy as kw
   this.calcEcoralEnergy= function(){
       return (this.b.numblight * (this.b.ecoralwat)
               * this.b.onhour * this.b.ondate
              ) /1000;
   }
   //get currentCost as kw.
   this.curCost= function(){
       return Math.floor(this.calcCurEnergy() * this.b.costpkw);
   }

   //get current CO2 as ton
   this.curCo2 = function(){
       return Math.round((this.calcCurEnergy() * this.b.co2pkw/1000) * 10 )/10;
   }

   //get ecoral Cost as kw
   this.ecoCost = function(){
       return Math.floor(this.calcEcoralEnergy()*this.b.costpkw);
   }
   //get ecoral CO2 as ton.
   this.ecoCo2 = function(){
       return Math.round((this.calcEcoralEnergy()*this.b.co2pkw/1000)*10)/10;
   }
   //get saved cost as yen.
   this.savCost = function(){
       return Math.floor(this.curCost() - this.ecoCost());
   }
   // get Saved cost as ton
   this.savCo2  = function(){
       return (this.curCo2()-this.ecoCo2());
   }
   // get Saved cost as percent.
   this.savPct  = function(){
       return Math.floor((this.savCost()/this.curCost())*100);
   }

   // get costpkw
   this.getCostpkw  = function(){
       return this.b.costpkw;
   }

   // get co2pkw
   this.getCo2pkw  = function(){
       return this.b.co2pkw;
   }

   // get stabwat
   this.getStabwat  = function(){
       return this.b.stabwat;
   }

   // get ecoralwat
   this.getEcoralwat  = function(){
       return this.b.ecoralwat;
   }
}

/* PARAM SAMPLE
var mybase = {
 numblight:100,
 origwat:40,
 stabwat:8,
 onhour:24,
 ondate:365,
 costpkw:21.72,
 co2pkw:0.369,
 ecoralwat:20
};
*/

/* HOW TO USE SAMPLE
var myest  = new EcoralEstimator(mybase);
console.log('cost=' + myest.curCost());
console.log('eco='+myest.curCo2());
console.log('saved=' + myest.savCo2() + 'ton');
console.log('saved='+myest.savCost() + 'yen');
console.log('saved='+myest.savPct() +'%');
console.log("end");
*/






