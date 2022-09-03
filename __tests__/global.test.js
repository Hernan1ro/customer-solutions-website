const text = "Hola Mundo";
const fruits = ["Manzana", "Melon", "Banana"];

test("Debe contener Mundo", () => {
  expect(text).toMatch(/Mundo/);
});

test("Tenemos una banana?", () => {
  expect(fruits).toContain("Manzana");
});

test("Mayor que", () => {
  expect(10).toBeGreaterThan(9);
});
test("Verdadero", () => {
  expect(true).toBeTruthy();
});

const reverseString = (str, callback) => {
  callback(str.split("").reverse().join(""));
};

test("Probar un callback", () => {
  reverseString("Hola", (str) => {
    expect(str).toBe("aloH");
  });
});
