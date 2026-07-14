const senha = "1234";

let saldos = JSON.parse(localStorage.getItem("smartmoney")) || {

entrada:0,
gastos:0,
reserva:0,
investimentos:0,
visivel:false

};

const entrada=document.getElementById("entrada");
const gastos=document.getElementById("gastos");
const reserva=document.getElementById("reserva");
const investimentos=document.getElementById("investimentos");
const botao=document.getElementById("btnSaldo");

function salvar(){

localStorage.setItem(
"smartmoney",
JSON.stringify(saldos)
);

}

function atualizarTela(){

entrada.innerHTML="R$ "+saldos.entrada.toFixed(2);

if(saldos.visivel){

gastos.innerHTML="R$ "+saldos.gastos.toFixed(2);

reserva.innerHTML="R$ "+saldos.reserva.toFixed(2);

investimentos.innerHTML="R$ "+saldos.investimentos.toFixed(2);

botao.innerHTML='<i class="fa-solid fa-eye-slash"></i> Ocultar saldos';

}else{

gastos.innerHTML="R$ •••••";

reserva.innerHTML="R$ •••••";

investimentos.innerHTML="R$ •••••";

botao.innerHTML='<i class="fa-solid fa-eye"></i> Mostrar saldos';

}

salvar();

}

botao.onclick=function(){

if(!saldos.visivel){

let s=prompt("Digite sua senha");

if(s===senha){

saldos.visivel=true;

}else{

alert("Senha incorreta");

}

}else{

saldos.visivel=false;

}

atualizarTela();

}

document.getElementById("novaEntrada").onclick=function(){

let valor=prompt("Informe a entrada");

if(valor==null)return;

valor=parseFloat(valor.replace(",","."));

if(isNaN(valor))return;

saldos.entrada+=valor;

saldos.gastos+=valor*0.50;

saldos.reserva+=valor*0.20;

saldos.investimentos+=valor*0.30;

atualizarTela();

}

atualizarTela();
