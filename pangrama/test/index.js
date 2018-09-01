const assert = require("assert")
const isPangram = require("../index.js")

describe("a função deve funcionar para todos os seguintes casos", () => {
	it("", () => assert.equal(isPangram(""), false));
	it("Um pequeno jabuti xereta viu dez cegonhas felizes.", () => assert.equal(isPangram("Um pequeno jabuti xereta viu dez cegonhas felizes."), true));
	it("Gazeta publica hoje breve nota de faxina na quermesse.", () => assert.equal(isPangram("Gazeta publica hoje breve nota de faxina na quermesse."), true));
	it("Não é pangrama.", () => assert.equal(isPangram("Não é pangrama."), false))
	it("52652", () => assert.equal(isPangram("52652"), false));
	it("não", () => assert.equal(isPangram("não"), false));
});