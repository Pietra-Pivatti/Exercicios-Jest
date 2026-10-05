const sistema = require("./sistema");

describe("verificarMaioridade", () => {

  it("deve retornar true para 15 anos", () => {
    expect(sistema.verificarMaioridade(15)).toBe(false);
  });

  it("deve retornar true para 18 anos", () => {
    expect(sistema.verificarMaioridade(18)).toBe(true);
  });

  it("deve retornar true para 21 anos", () => {
    expect(sistema.verificarMaioridade(21)).toBe(true);
  });

});


describe("calcularIMC", () => {

  it("deve retornar 22.86 para peso 70 e altura 1.75", () => {
    expect(sistema.calcularIMC(70, 1.75)).toBeCloseTo(22.86);
  });

});


describe("formatarNome", () => {

  it("deve retornar Silva, Lucas", () => {
    expect(sistema.formatarNome("Lucas", "Silva")).toBe("Silva, Lucas");
  });

});


describe("ehPar", () => {

  it("deve retornar true para um número par", () => {
    expect(sistema.ehPar(4)).toBe(true);
  });

  it("deve retornar false para um número ímpar", () => {
    expect(sistema.ehPar(5)).toBe(false);
  });

  it("deve retornar true para o número 0", () => {
    expect(sistema.ehPar(0)).toBe(true);
  });

});


describe("celsiusParaFahrenheit", () => {

  it("deve retornar 32 para 0°C", () => {
    expect(sistema.celsiusParaFahrenheit(0)).toBe(32);
  });

  it("deve retornar 212 para 100°C", () => {
    expect(sistema.celsiusParaFahrenheit(100)).toBe(212);
  });

  it("deve retornar -40 para -40°C", () => {
    expect(sistema.celsiusParaFahrenheit(-40)).toBe(-40);
  });

});


describe("adicionarHobby", () => {

  it("deve aumentar o tamanho do array", () => {
    const lista = ["Ler", "Jogar"];

    const resultado = sistema.adicionarHobby(lista, "Desenhar");

    expect(resultado.length).toBe(3);
  });

  it("deve conter o novo hobby", () => {
    const lista = ["Ler", "Jogar"];

    const resultado = sistema.adicionarHobby(lista, "Desenhar");

    expect(resultado).toContain("Desenhar");
  });

});


describe("dividir", () => {

  it("deve realizar uma divisão normalmente", () => {
    expect(sistema.dividir(10, 2)).toBe(5);
  });

  it("deve lançar erro ao dividir por zero", () => {
    expect(() => sistema.dividir(10, 0)).toThrow(
      "Divisão por zero não permitida"
    );
  });

});


describe("criarAluno", () => {

  it("deve retornar o aluno com os dados corretos", () => {
    expect(sistema.criarAluno("Lucas", "Desenvolvimento de Sistemas")).toEqual({
      nome: "Lucas",
      curso: "Desenvolvimento de Sistemas",
      ativo: true
    });
  });

});


describe("aplicarDesconto", () => {

  it("deve aplicar 10% de desconto", () => {
    expect(sistema.aplicarDesconto(100, 10)).toBe(90);
  });

  it("deve retornar o preço original com 0% de desconto", () => {
    expect(sistema.aplicarDesconto(100, 0)).toBe(100);
  });

});


describe("validarTamanhoSenha", () => {

  it("deve retornar false para uma senha com 5 caracteres", () => {
    expect(sistema.validarTamanhoSenha("12345")).toBe(false);
  });

  it("deve retornar true para uma senha com 8 caracteres", () => {
    expect(sistema.validarTamanhoSenha("12345678")).toBe(true);
  });

});