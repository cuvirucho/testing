const request = require('supertest');
const app = require('../app.js');
const Actores = require('../modelos/Actores.js');
const Directors = require('../modelos/Directors.js');

/*ge all*/
test("GET /director traestodos", async() => {
    const res = await request(app).get("/director");
		expect(res.status).toBe(200);
    
})

/*post*/
test("POST /director ", async () => {
    const newProduct = {
        Nombre: "marco"
    }
    const res = await request(app).post("/director").send(newProduct);
		expect(res.status).toBe(201);
    expect(res.body.name).toBe(newProduct.name);
})
/*get uno */
test("GET /director/:id traerun actr", async() => {
    const directo = await Directors.findOne({ where: { Nombre: "marco" } });
    const res = await request(app).get(`/director/${directo.id}`);
    expect(res.status).toBe(200);
    //expect(res.body.name).toBe("brat pit");
})




/*actualisar put */
test("PUT /director", async () => {
    const directo = await Directors.findOne({ where: {Nombre: "marco" } });
const updatedProduct = {
    Nombre: "pedro"
}
const res = await request(app)
            .put(`/director/${directo.id}`)
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