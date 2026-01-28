const { health } = require("../src/index");
test("health endpoint works", () => {
	expect(health().status).toBe("ok");
});
