const elCounter =document.
getElementById("counter")

let counter =0;
 
function updateValue (){
    elCounter.innnerHTML =counter;

}
updateValue()

function add() {
    counter ++;
    updateValue()
}

