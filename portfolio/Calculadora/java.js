function quest1(){
  let nu1 = Number(n1.value);
  let nu2 = Number(n2.value);
  let nu3 = Number(n3.value);

  let media = (nu1 + nu2 + nu3)/3;
  window.alert("Média:" +media);
}

function quest2(){
  let lad = Number(lado.value);

  let area = lad * lad;
  let peri = lad * 4;
  window.alert("Área: " +area + " Perímetro: " +peri);
}

function quest3(){
  let nume = Number(num.value);

  let dobr = nume * 2; trip = nume * 3; quad = nume * nume;cubo = quad * nume;
  let raiz = Math.sqrt(nume);
  window.alert("Dobro: "+dobr + " Triplo: "+trip + " Cubo: "+cubo + " Quadrado: "+quad + " Raiz: "+raiz);
}

function quest4(){
  let medi = Number(raio.value);

  let comp = 2 * Math.PI * medi;
  let area = Math.PI * medi * medi;
  window.alert("Comprimento: "+comp + " Área: "+area);
}

function quest5(){
  let bas = Number(base.value);
  let altu = Number(alt.value);

  let area = (bas * altu)/2;
  window.alert("Área: "+area);
}

function quest6(){
  let celsius = Number(cel.value);

  let fah = (9 * celsius / 5) + 32 ;
  let kel = celsius + 273.15;
  window.alert("Fahrenheit: "+fah + " Kelvin: "+kel);
}

function quest7(){
  let c1 = Number(cat1.value);
  let c2 = Number(cat2.value);

  let hip = (c1*c1) + (c2*c2);
  let hip2 = Math.sqrt(hip);
  window.alert("Hipotenusa: "+hip2);
}

function quest8(){
  let conv = Number(pol.value);

	let cm = conv * 2.54;
	window.alert("Centímetros: "+cm);
}

function quest9(){
  let palavra = String(pal.value);

	let tam = palavra.length;
	window.alert("Tamanho: "+tam);
}

function quest10(){
  let m = Number(dis.value);

	let km = m / 1000; hec = m / 100; deca = m / 10; cm = m * 100; deci = m * 10; mm = m * 1000;

  window.alert("Quilômetros: "+km + " Hectômetros: "+hec + " Decâmetros: "+deca + " Centímetros: "+cm + " Decímetros: "+deci+ " Milímetros: "+mm);
}

function quest11(){
  let num = Number(pori.value);

  if (num % 2 == 0) {
  	window.alert("O número informado é par");
  } else {
  	window.alert("O número informado é ímpar");
  }
}

function quest12(){
  let mulM = Number(num1.value);
  let mulN = Number(num2.value);

  if (mulN % mulM == 0) {
    window.alert("Os números informados são múltiplos");
  } else if (mulM % mulN == 0) {
    window.alert("Os números informados são múltiplos");
  } else {
    window.alert("Os números informados não são múltiplos");
  }
}

function quest13(){
  let veri = Number(pnn.value);

  if (veri < 0) {
    window.alert("Número Negativo");
  } else if (veri > 0) {
    window.alert("Número Positivo");
  } else {
    window.alert("Número Neutro");
  }
}

function quest14(){
  let idd = Number(ida.value);

  if (idd >= 0 && idd <= 12) {
    window.alert("Criança");
  } else if (idd > 12 && idd <= 17) {
    window.alert("Adolescente");
  } else if (idd > 17 && idd <= 59) {
    window.alert("Adulto");
  } else if (idd > 60) {
    window.alert("Idoso");
  }
}

function quest15(){
  let l1 = Number(lad1.value);
  let l2 = Number(lad2.value);
  let l3 = Number(lad3.value);

  if (l1 == l2 && l2 == l3) {
    window.alert("Triângulo equilátero");
  } else if (l1 != l2 && l2 != l3) {
    window.alert("Triângulo escaleno");
  } else {
    window.alert("Triângulo isósceles");
  }
}

function quest16(){
  let m1 = Number(n01.value);
  let m2 = Number(n02.value);
  let m3 = Number(n03.value);

  if (m1 > m2 && m1 > m3) {
    window.alert("Maior: "+m1);
  } else if (m2 > m1 && m2 > m3) {
      window.alert("Maior: "+m2);
  } else if (m3 > m1 && m3 > m2) {
      window.alert("Maior: "+m3);
  }
}

function quest17(){
  let m4 = Number(n04.value);
  let m5 = Number(n05.value);
  let m6 = Number(n06.value);

  let maior;
  let menor;

  if (m4 > m5 && m4 > m6) {
    maior = m4;
  } else if (m5 > m4 && m5 > m6) {
      maior = m5;
  } else if (m6 > m4 && m6 > m5) {
      maior = m6;
  } if (m4 < m5 && m4 < m6) {
    menor = m4;
  } else if (m5 < m4 && m5 < m6) {
      menor = m5;
  } else if (m6 < m4 && m6 < m5) {
      menor = m6;
  }
  window.alert("Maior: "+maior + " Menor: "+menor);
}

function quest18(){
  let m7 = Number(n07.value);
  let m8 = Number(n08.value);
  let m9 = Number(n09.value);

  let medio;

  if (m7 > m8 && m7 < m9) {
    medio = m7;
  } else if (m8 > m7 && m8 < m9) {
      medio = m8;
  } else if (m9 > m7 && m9 < m8) {
      medio = m9;
  } if (m7 < m8 && m7 > m9) {
    medio = m7;
  } else if (m8 < m7 && m8 > m9) {
      medio = m8;
  } else if (m9 < m7 && m9 > m8) {
      medio = m9;
  }
  window.alert("Médio: "+medio);
}

function quest19(){
  let n1m = Number(op1.value);
  let n2m = Number(op2.value);
  let opr = String(op.value);

  let conta;

  if (opr == "+") {
     conta = n1m + n2m;
  } else if (opr == "-") {
     conta = n1m - n2m;
  } else if (opr == "*") {
     conta = n1m * n2m;
  } else if (opr == "x") {
     conta = n1m * n2m;
  } else if (opr == "/") {
     conta = n1m / n2m  ;
  }
  window.alert("Resultado: "+conta);
}

function quest20(){
  let mes = Number(tri.value);

  if (mes == 1) {
    window.alert("Janeiro, 1º Trimestre");
  } else if (mes == 2) {
    window.alert("Fevereiro, 1º Trimestre");
  } else if (mes == 3) {
    window.alert("Março, 1º Trimestre");
  } else if (mes == 4) {
    window.alert("Abril, 2º Trimestre");
  } else if (mes == 5) {
    window.alert("Maio, 2º Trimestre");
  } else if (mes == 6) {
    window.alert("Junho, 2º Trimestre");
  } else if (mes == 7) {
    window.alert("Julho, 3º Trimestre");
  } else if (mes == 8) {
    window.alert("Agosto, 3º Trimestre");
  } else if (mes == 9) {
    window.alert("Setembro, 3º Trimestre");
  } else if (mes == 10) {
    window.alert("Outubro, 4º Trimestre");
  } else if (mes == 11) {
    window.alert("Novembro, 4º Trimestre");
  } else if (mes == 12) {
    window.alert("Dezembro, 4º Trimestre");
  } else {
    window.alert("Erro, informe valores válidos");
  }
}
