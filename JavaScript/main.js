function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar!</b>";
    //console.log(document.getElementById("agradecimento"));
    //alert("Obrigado por clicar!");
}

function redirecionar(){
    window.open("https://digitalinnovation.one/");
    //window.location.href = "https://digitalinnovation.one/";
}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    elemento.innerHTML = "Obrigado por passar o mouse";
    //alert("trocar texto");
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passa o mouse aqui";
    elemento.innerHTML = "Passa o mouse aqui";
}

function load(){
    alert("Página carregada com sucesso!");
}

function funcaoChange(elemento){
    console.log(elemento.value)
}

/*
function soma(n1, n2){
    return n1 + n2;
}
*/

/*
function validaIdade(idade){
    var validar;
    if (idade >= 18){
        validar = true
    }else{
        validar = false
    }
    return validar;
}

var idade = prompt("Qual sua idade?");
console.log(validaIdade(idade));
*/

/*
function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome)
}
*/

//alert(soma(5, 10));
//alert(setReplace("Vai Japão", "Japão", "Brasil"));

//var data = new Date();
//alert(data.getMonth());
//alert(data.getMinutes());
//alert(data.getHours());

/*
//estrutura de repetição (for)
var count;
for(count = 0; count <= 5; count++){
    alert(count);
}
*/

/*
//estrutura de repetição (while)
var count = 0;
while (count <= 5){
    console.log(count);
    alert(count);
    count = count + 1;
    //ou usar count++;
}
*/

/* 
//laços condicionais (if, else)
var idade = prompt("Qual é a sua idade?");
if (idade >= 18){
    alert("Maior de idade");
} else {
    alert("Menor de idade");
}
*/

//var nome = "Sabrina Ravasa";
//var idade = 29;
//var idade2 = 10;
//var frase = "Japão é o melhor time do mundo";
//alert(nome + " tem " + idade + " anos");
//alert(idade + idade2);
//console.log(nome);
//console.log(idade + idade2);
//console.log(frase.toUpperCase());
//alert(frase.replace("Japão", "Brasil"));

/*
var frutas = [{nome:"maçã", cor:"vermelha"}, {nome:"uva", cor:"roxa"}]
console.log(frutas);
alert(frutas[1].nome);
*/

/*
var fruta = {nome:"maçã", cor:"vermelha"}
console.log(fruta.nome);
alert(fruta.cor);
*/

//var lista = ["maçã", "pera", "laranja"];
//lista.push("uva");
//lista.pop();
//console.log(lista.length);
//console.log(lista.reverse());
//console.log(lista[0]);
//console.log(lista.toString()[0]);
//console.log(lista.join(" - "));

