// Variavel global com todas as letras do alfabeto.
ALPHABET = 'abcdefghijlmnopqrstuvxz'

// Esta funcao vai checar se um
// argumento é um pangrama ou nao.
function isPangram(str) {
	// Transforma a frase passada em letras minusculas.
	// O computador diferencia entre maiuscula e
	// minuscula, mas essa funcao nao deveria.
	str = str.toLowerCase()

	// A primeira coisa que vou fazer é iterar
	// por todas as letras do alfabeto.
	for (const letter of ALPHABET) {
		// Para cada letra, checa se tem pelo
		// menos uma ocorrencia na frase passada.
		if (str.indexOf(letter) < 0)  {
			// Se tiver pelo menos uma letra
			// faltando, retorna negativo
			return false
		}
	}

	// Se nenhuma letra ficou faltando,
	// retorna positivo.
	return true
}

module.exports = exports = isPangram