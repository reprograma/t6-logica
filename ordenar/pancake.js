const { isSorted } = require('./_helpers')

// Esta funcao recebe uma lista
// e organiza essa lista usando
// o "Pancake Sort".
function pancakeSort(arr) {
	// Itere por todos os elementos da lista.
	for (let i = 0; i < arr.length; i++) {
		// Defina o maior valor como
		// o menor valor possivel no JavaScript.
		let largest = -Infinity
		// Defina uma variavel para guardar
		// o index do maior valor encontrado.
		let largest_index
		// Itere por todos os valores que ainda
		// nao foram jogados para o inicio da lista.
		for (let j = i; j < arr.length; j++) {
			// Encontre o maior valor entre eles.
			if (arr[j] > largest) {
				// Salve esses valores nas
				// variaveis criadas para isso.
				largest = arr[j]
				largest_index = j
			}
		}

		// Primeiro crie uma sub-lista com
		// todos os elementos que vem depois
		// do maior valor encontrado e reverta 
		// essa lista.
		let flipped = arr
			.slice(largest_index)
			.reverse()

		// Agora crie uma lista com todos os
		// valores entre os que ainda nao foram
		// para o inicio da lista e o maior 
		// valor encontrado. 
		let newly_sorted = arr
			.slice(i, largest_index)
			.concat(flipped)
			.reverse()

		// Por fim, una os os valores que ja
		// foram para o inicio da lista com os
		// valores que acabaram de ser organizados.
		arr = arr
			.slice(0, i)
			.concat(newly_sorted)

		// Retorne antes se o array ja esta organizado.
		// Como a funcao checa se um array esta organizado
		// de forma crescente e esse algoritmo organiza
		// oo array de forma decrescente, temos que reverte-lo
		// antes de fazer o teste.
		if (isSorted(arr.slice().reverse())) break
	}

	return arr
}

exports = module.exports = pancakeSort