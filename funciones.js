let nPisosBase = parseInt(prompt("Ingrese el número de pisos base que quiere")) 
let nPisos = parseInt(prompt("Ingrese el número de pisos que quiere"))
function piso() {
    console.log("|  _     _  |")
    console.log("| |_|   |_| |")
    console.log("|___________|")
}
function pisoBase() {
    console.log("|  _     _  |")
    console.log("| |_| _ |_| |")
    console.log("|____|_|____|")
}
function techo() {
    console.log("_____________")
}
function base (nPisosBase){
    for(let i=0;i<3;i++){
        pisoBase();
    }
}
function casa (nPisos){
    for(let i=0;i<3;i++){
        piso()
    }
}