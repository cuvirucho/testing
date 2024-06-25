const request = require('supertest');
const app = require('../app.js');
const Actores = require('../modelos/Actores.js');

/*ge all*/
test("GET /actores traestodos", async() => {
    const res = await request(app).get("/actors");
		expect(res.status).toBe(200);
    
})

/*post*/
test("POST /actores ", async () => {
    const newProduct = {
        Nombre: "brat pit"
    }
    const res = await request(app).post("/actors").send(newProduct);
		expect(res.status).toBe(201);
    expect(res.body.name).toBe(newProduct.name);
})
/*get uno */
test("GET /actores/:id traerun actr", async() => {
    const actors = await Actores.findOne({ where: { Nombre: "brat pit" } });
    const res = await request(app).get(`/actors/${actors.id}`);
    expect(res.status).toBe(200);
    //expect(res.body.name).toBe("brat pit");
})




/*actualisar put */
test("PUT /actores", async () => {
    const actors = await Actores.findOne({ where: {Nombre: "brat pit" } });
const updatedProduct = {
    Nombre: "paquita la del barrio"
}
const res = await request(app)
            .put(`/actors/${actors.id}`)
            .send(updatedProduct);
    expect(res.status).toBe(200);
expect(res.body.Nombre).toBe(updatedProduct.Nombre);
})


/*borarr
test("DELETE /actores  ", async () => {
    const actors = await Actores.findOne({ where: {Nombre: "brat pit" } });
const res = await request(app).delete(`/actors/${actors.id}`);
expect(res.status).toBe(204);
});*/