const request = require("supertest");
const app = require("../app");
const { expectCt } = require("helmet");

test("GET /cities must get all cities", async () => {
  const res = await request(app).get("/cities");
  expect(res.status).toBe(200);
  console.log(res.body);
});

//El test de POST crea ese nuevo objeto en la base de datos
let id;

test("POST /citites must post a city", async () => {
  const city = {
    name: "Bogota",
    country: "Colombia",
    isCapital: true,
  };
  const res = await request(app).post("/cities").send(city);
  id = res.body.id;
  expect(res.status).toBe(201);
  expect(res.body.name).toBe(city.name);
  expect(res.body.id).toBeDefined();
});

test("DELETE /products/:id mus detele a city", async () => {
  const res = await request(app).delete(`/cities/${id}`);
  expect(res.status).toBe(204);
});
