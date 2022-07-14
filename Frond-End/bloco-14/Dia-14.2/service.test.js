const service = require('./service');

describe('Exercicio 1', () => {
    it('Teste se a função foi chamada, qual seu retorno e quantas vezes foi chamada.', () => {
        service.retornaNumeroAleatorio = jest.fn().mockReturnValue(5)

        expect(service.retornaNumeroAleatorio()).toBe(5);
        expect(service.retornaNumeroAleatorio).toHaveBeenCalled();
        expect(service.retornaNumeroAleatorio).toHaveBeenCalledTimes(1);
    });
});

describe('Exercicio 2', () => {
    it('Teste se a função foi chamada e a nova implementação de divisão foi aplicada.', () => {
        service.retornaNumeroAleatorio = jest.fn().mockImplementationOnce((a, b) => a / b);

        expect(service.retornaNumeroAleatorio(10, 2)).toBe(5);
        expect(service.retornaNumeroAleatorio).toHaveBeenCalled();
        expect(service.retornaNumeroAleatorio).toHaveBeenCalledTimes(1);
        expect(service.retornaNumeroAleatorio).toHaveBeenCalledWith(10, 2);
    });
});

describe('Exercicio 3', () => {
    it('Teste se a função foi chamada e a nova implementação de multiplicando 3 parametros foi aplicada.', () => {
        service.retornaNumeroAleatorio = jest.fn().mockImplementationOnce((a, b, c) => a * b * c);

        expect(service.retornaNumeroAleatorio(10, 20, 2)).toBe(400);
        expect(service.retornaNumeroAleatorio).toHaveBeenCalled();
        expect(service.retornaNumeroAleatorio).toHaveBeenCalledTimes(1);
        expect(service.retornaNumeroAleatorio).toHaveBeenCalledWith(10, 20, 2);
    });

    it('Teste se mock é resetada e retorne outro result.', () => {
        service.retornaNumeroAleatorio.mockReset();
        service.retornaNumeroAleatorio.mockImplementation(a => a * 2);

        expect(service.retornaNumeroAleatorio(15)).toBe(30);
        expect(service.retornaNumeroAleatorio).toHaveBeenCalled();
        expect(service.retornaNumeroAleatorio).toHaveBeenCalledTimes(1);
        expect(service.retornaNumeroAleatorio).toHaveBeenCalledWith(15);
    });
});

describe("Exercicio 4", () => {
  test("mockando função para receber um parâmetro e retornar em caixa baixa", () => {
    const mockFirstFunction = jest.spyOn(service, "stringUp" ).mockImplementation(a => a.toLowerCase());

    expect(mockFirstFunction("VICTOR")).toBe("victor");
    expect(service.stringUp).toHaveBeenCalledTimes(1);
    expect(service.stringUp).toHaveBeenCalledWith("VICTOR");
  });

  test("mockando função que recebe um parâmetro e retorna a última letra", () => {
    const mockSecondFunction = jest.spyOn(service, "firstString").mockImplementation(a => a.charAt(a.length - 1));

    expect(mockSecondFunction("victor")).toBe("r");
    expect(service.firstString).toHaveBeenCalledTimes(1);
    expect(service.firstString).toHaveBeenCalledWith("victor");
  });

  test("mockando função que recebe 4 parâmetros e os concatena", () => {
    const mockThirdFunction = jest.spyOn(service, "stringConcatena").mockImplementation((a, b, c, d) => a + b + c + d);

    expect(mockThirdFunction("He", "llo", ", Vi", "ctor")).toBe("Hello, Victor");
    expect(service.stringConcatena).toHaveBeenCalledTimes(1);
    expect(service.stringConcatena).toHaveBeenCalledWith("He", "llo", ", Vi", "ctor");
  });

  test("restaurando a primeira função e verifica se ela retorna em caixa alta", () => {
    service.stringUp.mockRestore();

    expect(service.stringUp("pequena")).toBe("PEQUENA");
  })
});

describe("Exeercicio 5", () => {

  service.fetchDog = jest.fn();
  afterEach(service.fetchDog.mockReset);

  test("testando requisição caso a promise resolva", async () => {
    service.fetchDog.mockResolvedValue("request success");

    service.fetchDog();
    expect(service.fetchDog).toHaveBeenCalled();
    expect(service.fetchDog).toHaveBeenCalledTimes(1);
    await expect(service.fetchDog()).resolves.toBe("request success");
    expect(service.fetchDog).toHaveBeenCalledTimes(2);
  });

  test("testando requisição caso a promise seja rejeitada", async () => {
    service.fetchDog.mockRejectedValue("request failed");

    expect(service.fetchDog).toHaveBeenCalledTimes(0);
    await expect(service.fetchDog()).rejects.toMatch("request failed");
    expect(service.fetchDog).toHaveBeenCalledTimes(1);
  });
});