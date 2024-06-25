const request = require('supertest');
const app = require('../app.js');
const Genero = require('../modelos/Genero.js');


/*ge all*/
test("GET /genero traestodos", async() => {
    const res = await request(app).get("/genero");
		expect(res.status).toBe(200);
    
})

/*post*/
test("POST /genero ", async () => {
    const newProduct = {
        genero: "terror"
    }
    const res = await request(app).post("/genero").send(newProduct);
		expect(res.status).toBe(201);
    expect(res.body.genero).toBe(newProduct.genero);
})
/*get uno */
test("GET /genero/:id traerun actr", async() => {
    const generop = await Genero.findOne({ where: { genero: "terror" } });
    const res = await request(app).get(`/genero/${generop.id}`);
    expect(res.status).toBe(200);
    //expect(res.body.name).toBe("brat pit");
})




/*actualisar put */
test("PUT /genero", async () => {
    const generop = await Genero.findOne({ where: {genero: "terror" } });
const updatedProduct = {
    genero: "paquita la del barrio"
}
const res = await request(app)
            .put(`/genero/${generop.id}`)
            .send(updatedProduct);
    expect(res.status).toBe(200);
expect(res.body.genero).toBe(updatedProduct.genero);
})


/*borarr
test("DELETE /actores  ", async () => {
    const actors = await Actores.findOne({ where: {Nombre: "brat pit" } });
const res = await request(app).delete(`/actors/${actors.id}`);
expect(res.status).toBe(204);
});*/
