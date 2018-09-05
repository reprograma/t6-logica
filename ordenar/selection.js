// Esta funcao recebe uma lista
// e organiza essa lista usando
// o "Selection Sort".
function selectionSort(arr) {
	// Crie uma lista vazia para
	// receber a nova lista organizada.
	let sorted = []

	// Cada elemento que adicionarmos
	// a lista `sorted`, vamos retirar
	// da lista `arr`. Portanto, quando
	// `arr` estiver vazia quer dizer que
	// terminamos de organizar.
	while (arr.length > 0) {
		// Comecamos o valor do menor
		// numero na lista como o maior
		// numero possivel no JavaScript.
		let lowest = Infinity
		// Precisamos salvar o index do menor
		// numero encontrado na lista para
		// podermos tirar ele dela depois.
		let lowest_index
		// Vamos iterar pela array `arr` e
		// encontrar o menor valor dentro dela.
		for (const [index, item] of arr.entries()) {
			if (item < lowest) {
				// Se o item encontrado for
				// menor do que o menor item encontrado
				// ate agora substitua o valor de
				// `lowest` e `lowest_item`.
				lowest = item
				lowest_index = index
			}
		}
		// Depois de varrer a lista inteira
		// podemos adicionar o menor valor
		// encontrado a lista organizada,
		sorted.push(lowest)
		// E tirar o menor valor da lista
		// que foi passada.
		arr.splice(lowest_index, 1)
	}

	return sorted

}

exports = module.exports = selectionSort