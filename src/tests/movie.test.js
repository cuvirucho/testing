const request = require('supertest');
const app = require('../app.js');
const Actores = require('../modelos/Actores.js');
const Movies = require('../modelos/Movies.js');

/*ge all*/
test("GET /movie traestodos", async() => {
    const res = await request(app).get("/movie");
		expect(res.status).toBe(200);
    
})

/*post*/
test("POST /movie ", async () => {
    const newProduct = {
        Nombre: "narnia"
    }
    const res = await request(app).post("/movie").send(newProduct);
		expect(res.status).toBe(201);
    expect(res.body.name).toBe(newProduct.name);
})
/*get uno */
test("GET /movie/:id traerun actr", async() => {
    const movies = await Movies.findOne({ where: { Nombre: "narnia" } });
    const res = await request(app).get(`/actors/${movies.id}`);
    expect(res.status).toBe(200);
    //expect(res.body.name).toBe("brat pit");
})




/*actualisar put */
test("PUT /movie", async () => {
    const movies = await Movies.findOne({ where: {Nombre: "narnia" } });
const updatedProduct = {
    Nombre: "paquita la del barrio"
}
const res = await request(app)
            .put(`/movie/${movies.id}`)
            .send(updatedProduct);
    expect(res.status).toBe(200);
expect(res.body.Nombre).toBe(updatedProduct.Nombre);
})


borarr
test("DELETE /actores  ", async () => {
    const actors = await Actores.findOne({ where: {Nombre: "brat pit" } });
const res = await request(app).delete(`/actors/${actors.id}`);
expect(res.status).toBe(204);
});