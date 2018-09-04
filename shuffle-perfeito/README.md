# Shuffle Perfeito

Um shuffle perfeito (ou faro / weave shuffle) significa dividir um baralho de cartas em metades iguais e intercalá-las perfeitamente - para que você termine com a primeira carta da metade esquerda, seguida pela primeira carta da metade direita, e em breve quando você executa repetidamente shuffles perfeitos em um baralho de cartas exclusivas de tamanho uniforme ele retornará à sua ordem original. Quantos shuffles isso leva, depende apenas do número de cards no baralho.

##### Exemplo

**Input** `[1, 2, 3, 4, 5, 6, 7, 8]`
**Output**
```
[ 0, [ 1, 2, 3, 4, 5, 6, 7, 8 ],
  1, [ 1, 5, 2, 6, 3, 7, 4, 8 ],
  2, [ 1, 3, 5, 7, 2, 4, 6, 8 ],
  3, [ 1, 2, 3, 4, 5, 6, 7, 8 ] ]
```

### Como rodar o exercício localmente

Para isso é preciso instalar o Node.js na sua máquina.

```bash
npm install
npm test
```

### Ou então...

Copia e cola o código dentro de `index.js` no console do seu navegador.