function insere(){
	let codi = document.forms["cadastrar"]["codigo"].value;
	let data = document.forms["cadastrar"]["data"].value;
	let titu = document.forms["cadastrar"]["titulo"].value;
	let dire = document.forms["cadastrar"]["diretor"].value;
	let ator = document.forms["cadastrar"]["ator"].value;
	let nota = document.forms["cadastrar"]["nota"].value;
	let radi = document.forms["cadastrar"]["radio"].value;

	let inserir = window.document.getElementById("inserirTabela");
	inserir.innerHTML = `<th scope="row">${codi}</th>`;
	inserir.innerHTML +=	`<td>${titu}</td>`;
	inserir.innerHTML +=	`<td>${dire}</td>`;
	inserir.innerHTML +=	`<td>${data}</td>`;
	inserir.innerHTML +=	`<td>${radi}</td>`;
	inserir.innerHTML +=	`<td>${ator}</td>`;
	inserir.innerHTML +=	`<td>${nota}/10</td>`;

}
