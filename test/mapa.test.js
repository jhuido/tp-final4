const Centro = require("../src/Centro");
const Destino = require("../src/Destino");
const Local = require("../src/Local");

test("Crear Mapa",()=>{
    const facturacion=new Centro("Facturacion",3);
    const calidad=new Centro("Calidad",4);
    const distribucion=new Centro("Distribucion",5);
    const centros=[facturacion,calidad,distribucion];
    const local=new Local("A",0);
    const destino=new Destino(1,0);
    const mapa=new Mapa(local,centros);

    expect(destino.nombre).toBe(1);
})
