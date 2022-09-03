describe("Probar varios test en un grupo", () => {
  test("Mayor que 100", () => {
    expect(110).toBeGreaterThan(100);
  });
  test("Mayor que 1000", () => {
    expect(1100).toBeGreaterThan(1000);
  });
});

// npm test /index.test.js
// jest --coverage
