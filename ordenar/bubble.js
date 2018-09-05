const { isSorted } = require('./_helpers')

// Esta funcao recebe uma lista
// e organiza essa lista usando
// o "Bubble Sort".
function bubbleSort(arr) {
	// Continue tentando até terminar
	// de organizar a lista.
	while(!isSorted(arr)) {
		// Itere pelo lista e va trocando
		// par a par caso o elemento a esquerda
		// de um elemento seja maior do que ele.
		for (let i = 1; i < arr.length; i++) {
			// Cheque se o elemento a esquerda
			// é maior do que o elemento a direita.
			if (arr[i - 1] > arr[i]) {
				// Se for verdadeiro, troque um de
				// lugar com o outro.
				const aux = arr[i]
				arr[i] = arr[i - 1]
				arr[i - 1] = aux
			}
	    }
	}

	return arr
}

exports = module.exports = bubbleSort