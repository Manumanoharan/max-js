var a=2;
var b=4;
var c=3;

function max(a,b){
   if(a>b&&a>c){
      a=2;
      return a;
   }
   else if(b>a&&b>c){
      b=4;
      return b;
   }
   else {
      c=3;
      return c;
   }
}

var maxx=max(a,b);
console.log(maxx);