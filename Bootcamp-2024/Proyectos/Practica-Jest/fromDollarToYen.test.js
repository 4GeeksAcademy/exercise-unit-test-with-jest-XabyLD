const fromDollarToYen = require("./fromDollarToYen");


test('1 dolar es igual a 156,24 yens', () => {
    expect(fromDollarToYen(1)).toBe(156.24);
  });


