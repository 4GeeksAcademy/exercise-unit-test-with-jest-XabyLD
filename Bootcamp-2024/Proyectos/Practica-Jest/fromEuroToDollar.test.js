const fromEuroToDollar = require("./fromEuroToDollar");


test("1 euro es igual a 1,08 dólares", () => {
    expect(fromEuroToDollar(1)).toBe(1.08);
});
