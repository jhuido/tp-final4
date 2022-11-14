const Destino = require("../src/Destino");

test("Crear Paquete",()=>{
    const local=new Local("A");
    const destino=new Destino(1);
    const paquete=local.generePaquete();
    expect(paquete.tiempo).toBe(0);
    expect(paquete.destino.nombre).toBe(1);
})
