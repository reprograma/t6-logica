// Esta funcao checa se um
// array esta organizado ou nao.
function isSorted(arr) {
    for (var i = 1; i < arr.length; i++) {
        if (arr[i - 1] > arr[i]) return false
    }

    return true
}

exports = module.exports = {
	isSorted
}