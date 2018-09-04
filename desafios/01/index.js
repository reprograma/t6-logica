// Esta funcao vai comparar
// duas listas e ver se elas 
// são iguais. Isto é necessário
// porque usar == e === não funciona
// nesse caso.
function arraysAreEqual (arr, other_arr) {
	// Se as duas listas forem
	// o mesmo objeto...
	if (arr === other_arr) return true
	// Se as duas listas não tem
	// o mesmo comprimento...
	if (arr.length !== other_arr.length) return false
	// Se uma das listas é nula...
	if (arr == null || other_arr == null) return false

	// Cheque se as duas listas tem
	// todos os elementos exatamente
	// iguais e na mesma ordem.
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] !== other_arr[i]) return false
	}
	
	// Se todas as condições passaram,
	// as duas arrays são iguais.
	return true
}

// Esta funcao vai embaralhar uma lista
// e mostrar todas as iterações necessárias
// até voltar ao mesmo formato da lista inicial.
function perfectShuffle(arr) {
	// Essa funcão não funciona se
	// a lista tiver um número ímpar
	// de elementos. Cheque isso 
	// antes de começar o programa.
	if (arr.length % 2 !== 0) {
		throw "A lista deve ter um número par de elementos!"
	}

	// Calcule qual a metade do
	// comprimento da lista.
	const half_length = Math.floor(arr.length / 2)

	// Cria uma nova lista com a
	// primeira metade da lista.
	let left = arr.slice(0, half_length)

	// Crie uma nova lista com a
	// segunda metade da lista
	let right = arr.slice(half_length, arr.length)

	// Conte o número de iteraçōes
	// necessário para voltar ao
	// formato da lista inicial.
	let count = 0;

	// Inicie a lista que será retornada.
	let result = [count, arr]

	// Inicie a lista que receberá
	// a lista embaralhada.
	let shuffled = []

	// Enquanto a lista embaralhada
	// não for igual a lista recebida,
	// continue embaralhando.
	while (!arraysAreEqual(arr, shuffled)) {
		// A cada nova iteração
		// adicione uma unidade ao contador.
		count++

		// Limpe a lista embaralhada
		// a cada nova iteração.
		shuffled = []

		// Popule a lista embaralhada.
		for (let i = 0; i < half_length; i++) {
			shuffled.push(left[i], right[i])
		}

		// Salve cada iteração na lista que
		// será retornada.
		result.push(count)
		result.push(shuffled)

		// Recalcule as duas metades a
		// embaralhar baseada na lista
		// recém misturada.
		left = shuffled.slice(0, half_length)
		right = shuffled.slice(half_length, shuffled.length)
	}

	return result
}

module.exports = exports = perfectShuffle