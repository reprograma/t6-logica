// Quando a página carregar, a 
// primeira coisa que vamos fazer é
// definir um número inteiro randomico
// que vai ser o objetivo do jogo.
const GOAL = getRandomInt(999)

// Depois disso, vamos acessar o elemento
// <form> para podermos esperar eventos
// de submissão neste elemento.
const form = document.querySelector(".game")

// Já podemos deixar dentro de uma variavel,
// o elemento de input dentro desse form.
// Ele será útil mais tarde no programa.
const input = document.querySelector(".game input")

// Aqui inicio um contador de tentativas.
// A cada submissao do <form> ele aumenta, 
// no final do jogo aparece quantas tentativas
// foram necessarias ate acertar.
let tries = 0

// Vamos escutar por eventos
// de submissão nesse <form>. Toda vez
// que o usuário clicar "Enter" dentro do
// input, esse evento é disparado.
form.addEventListener("submit", (event) => {
	// O navegador tem alguns comportamentos
	// padrão para cada evento, no evento de 
	// submit esse comportamento inclui a
	// página ser recarregada, portanto, vamos
	// pedir para browser não aplicar esse 
	// o padrão para o nosso elemento.
	event.preventDefault()

	// A primeira coisa que vou fazer é incrementar
	// o contador de tentativas.
	tries++

	// Vamos acessar o valor que foi colocado
	// dentro do input, para podermos checar se
	// está correto ou nao.
	const guess = input.value

	// Agora vamos checar as três possíveis situações:

	// 01. O usuário acertou o número
	//
	// Se o usuário tiver acertado, nó queremos
	// esconder o formulário e mostrar a <div>
	// com a classe .result e no parágrafo dentro
	// dessa <div> nós queremos que apareça o 
	// número correto e o número de tentativas.
	if (guess == GOAL) {
		// Primeiro, vamos esconder o <form>.
		form.style.display = "none"

		// Depois, vamos acessar a <div> que deve
		// conter o resultado e o parágrafo dentro
		// dela onde vamos colocar o número certo.
		const result = document.querySelector(".result")
		const result_holder = document.querySelector(".result p")

		// Então vamos mostrar a <div>.
		result.style.display = "flex"
		// E vamos colocar o número certo dentro do <p>.
		result_holder.innerHTML = `
			<span>${GOAL}</span>
			<br>
			<span>${tries} tentativas</span>
		`
	}

	// 02. O usuário chutou um número menor do
	// que o objetivo.
	//
	// Se esse for o caso, nós vamos avisá-lo
	// de que o número é menor que o certo.
	 else if (guess < GOAL) {
	 	// Primeiro vamos acessar o parágrafo onde
	 	// vamos colocar a dica.
	 	const hint = document.querySelector(".game p")

	 	// Agora vamos colocar texto dentro desse parágrafo.
	 	hint.innerHTML = "Oops, o número correto é maior do que isso..."

	 	// O paragrafo esta com opacidade 0,
	 	// vamos subir essa opacidade para 1.
	 	// Fazemos isso para dar um efeito interessante.
	 	hint.style.opacity = 1

	 	// Depois de um segundo voltamos a opacidade pra zero,
	 	// Assim a interface fica mais dinamica e responsiva.
	 	setTimeout(() => hint.style.opacity = 0, 1000)
	}

	// 03. O usuário chutou um número maior do
	// que o objetivo.
	//
	// Se esse for o caso, nós vamos avisá-lo
	// de que o número é maior que o certo.
	 else if (guess > GOAL) {
	 	// Primeiro vamos acessar o parágrafo onde
	 	// vamos colocar a dica.
	 	const hint = document.querySelector(".game p")

	 	// Agora vamos colocar texto dentro desse parágrafo.
	 	hint.innerHTML = "Oops, o número correto é menor do que isso..."

	 	// O paragrafo esta com opacidade 0,
	 	// vamos subir essa opacidade para 1.
	 	// Fazemos isso para dar um efeito interessate.
	 	hint.style.opacity = 1

	 	// Depois de um segundo voltamos a opacidade pra zero,
	 	// Assim a interface fica mais dinamica e responsiva.
	 	setTimeout(() => hint.style.opacity = 0, 1000)
	}
})