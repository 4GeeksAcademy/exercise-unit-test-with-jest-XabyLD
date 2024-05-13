const {fromDollarToYen,fromEuroToDollar,fromYenToPound} = require("./fromDollarToYen");

const testComprobations = {
    number: true,
    letter: false,
  }
  
describe('fromDollarToYen', () => {
  test("given a invalid number or write a letter for confusion ", () => {
    expect(() => fromDollarToYen(" ").toThrow(testComprobations.letter));
  })
})

describe('number', () => {

  test('1 dolar es igual a 156,24 yens', () => {
    expect(fromDollarToYen(1)).toBe(156.24);
  });

  test("1 euro es igual a 1,08 dólares", () => {
    expect(fromEuroToDollar(1)).toBe(1.08);
});


test("1 yen es igual a 0,0051 pounds", () => {
  expect(fromYenToPound(1)).toBe(0.0051);
});

})


