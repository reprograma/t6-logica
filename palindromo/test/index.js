const assert = require("assert")
const isPalindrome = require("../index.js")

describe("a função deve funcionar para todos os seguintes casos", () => {
	it("", () => assert.equal(isPalindrome(""), true));
	it("52625", () => assert.equal(isPalindrome("52625"), true));
	it("omissíssimo", () => assert.equal(isPalindrome("omissíssimo"), true));
	it("janiarli", () => assert.equal(isPalindrome("janiarli"), false))
	it("52652", () => assert.equal(isPalindrome("52652"), false));
	it("não", () => assert.equal(isPalindrome("não"), false));
});