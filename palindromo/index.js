// Esta funcao vai checar se um
// argumento é palindromo ou nao.
function isPalindrome(str) {
	// A primeira coisa que vou fazer é
	// pegar a string que foi passada como
	// argumento e criar uma copia dela ao
	// contrario.
	const reverse = str.split("").reverse().join("")

	// Depois vou checar se a copia e igual
	// ao argumento que foi passado.
	if (reverse == str) {
		// Se for igual, a funcao retorna positivo.
		return true
	}

	// Se nao for igual, a funcao retorna negativo.
	return false
}

module.exports = exports = isPalindrome