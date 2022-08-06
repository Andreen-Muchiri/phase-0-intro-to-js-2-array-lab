

// Write your solution here!
const cats=["Milo", "Otis", "Garfield"];


beforeEach(function (){

    Cats.length =0;

    cats.push["Milo","Otis", "Garfield"];
});

function destructivelyAppendCat(){
    cats.push("Ralph");  
}
function destructivelyPrependCat(){
    cats.unshift("Bob");
}
function destructivelyRemoveFirstCat(){
    cats.shift(["Garfield"]);

}
function destructivelyRemoveLastCat(){
    cats.pop(["Garfield"]);
}


function appendCat(){
var cats_1=[...cats,"Broom"]
   return cats_1;
}
function prependCat(){
    var cats_2=["Arnold",...cats]
    return cats_2;
}
function removeLastCat(){
     var catss =cats.slice(0,cats.length-1)
     return catss;
}
function removeFirstCat(){
    var catz=cats.slice(1)
    return catz;
}
