// Esta funcao vai receber uma linha
// do triangulo de Pascal e retornar
// a proxima.
function calculateNewLine(line) {
	// Inicie a array que vai conter
	// a linha resultante.
	let next_line = []

	// Itere por cada item da linha, 
	// menos o ultimo.
	for (let i = 0; i < line.length - 1; i++) {
		// Adicione o item atual ao 
		// item adjacente.
		next_line.push(line[i] + line[i + 1])
	}

	// Adicione o numero 1 no
	// final da linha.
	next_line.push(1)
	// Adicione o numero 1 no
	// inicio da linha.
	next_line.unshift(1)

	return next_line
}

// Esta funcao vai gerar um triangulo
// de pascal com a quantidade de linhas
// que o usuario quiser.
function pascalTriangle(lines) {
	// Checa se o numero de linhas e maior do que 1.
	if (lines < 1) {
		throw "O triangulo deve ter pelo menos uma linha!"
	}

	// Inicia o triangulo com a primeira linha.
	let triangle = [[1]]
	// Checa se o triangulo deve ter mais
	// do que uma linha.
	if (lines > 1) {
		// Roda a funcao que calcula a proxima
		// linhas quantas vezes necessario.
		for (let i = 0; i < lines - 1; i++) {
			// Calcula a proxima linha baseado,
			// na linha anterior.
			triangle.push(calculateNewLine(triangle[triangle.length - 1]))
		}
	}

	return triangle
}

module.exports = exports = pascalTriangle