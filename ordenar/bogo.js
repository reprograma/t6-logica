const { isSorted } = require('./_helpers')

// Esta funcao recebe uma lista
// e organiza essa lista usando
// o "Bogo Sort".
function bogoSort(arr) {
	// Inicie um contador para
	// o número de iterações.
	let count = 0

	// Continue tentando até encontrar
	// o array organizado.
	while(!isSorted(arr)) {
		// A cada nova tentativa,
		// adicione uma unidade ao contador.
		count++
		if (count > 10000) {
			throw "Iteração demais! Antes que seu computador trave, tente novamente."
		}
		
		// Embaralhe a lista randomicamente.
		for (let i = 0; i < arr.length; i++) {
			// Primeiro crie um index randomico, entre zero
			// e o ultimo index da lista.
	        const random_index = Math.floor(Math.random() * arr.length)
	      	// E entao troque o valor no index atual
	      	// pelo valor no index gerado.
	        const aux = arr[i]
	        arr[i] = arr[random_index]
	        arr[random_index] = aux
	    }
	}

	return arr
}

exports = module.exports = bogoSort