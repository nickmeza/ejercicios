var numeros=[]
var num_posi=[]
var num_nega=[]
var num_pares=[]
var num_impares=[]
function designar_numero() {
    var num=(prompt("Ingrese un numero: "));
    while (num != "no") {
        numeros.push(parseInt(num));
        num=(prompt("Ingrese un numero: "));
        console.log(numeros);
    }
    //for each-colback
    numeros.forEach(numero => {
        if (numero%2==0) {
            num_pares.push(numero);
        }else if(numero%2==1) {
            num_impares.push(numero);
        }
        if (numero>=0) {
            num_posi.push(numero);
        }else {
            num_nega.push(numero);
        }
    });
    alert("suma de los numeros pares son: "+suma_ele_arry(num_pares));
    alert("suma de los numeros inpares son: "+suma_ele_arry(num_impares));
    alert("cantidad de los numeros positivos son: "+num_posi.length);
    alert("cantidad de los numeros negativos son: "+num_nega.length);
    alert("suma de todos los numeros"+suma_ele_arry(numeros)/numeros.length);
    /*
    function name(params) {
        
    }
    hola("nick",(params)=>{ })
    */
}
function suma_ele_arry(arry) {
    var suma=0
    arry.forEach (numer =>{
        suma =suma + numer;
    });
    return suma
}

alert("fin",designar_numero());

function factoria(num) {
    for (i = 1, i < num + 1; i++;){
        s*=i;
    }
    return s;
}
alert("Factorial: ",factoria(prompt("ingrese el numero")));