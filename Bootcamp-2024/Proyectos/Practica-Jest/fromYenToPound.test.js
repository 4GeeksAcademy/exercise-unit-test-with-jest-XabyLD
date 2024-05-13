const fromYenToPound = require("./fromYenToPound");

test("1 yen es igual a 0,0051 pounds", () => {
    expect(fromYenToPound(1)).toBe(0.0051);
});