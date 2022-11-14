const Centro = require("../src/Centro");
const Destino = require("../src/Destino");
const Local = require("../src/Local");
const Mapa = require("../src/Mapa");

test("Crear Mapa",()=>{
    const facturacion=new Centro("Facturacion",3);
    const calidad=new Centro("Calidad",4);
    const distribucion=new Centro("Distribucion",5);
    const centros=[[facturacion,2],[calidad,5],[distribucion,8]];
    const local=new Local("A",0,centros);
    const destino=new Destino(1,0);
    const locales=[local];
    const mapa=new Mapa(locales.length,centros.length);

    expect(destino.nombre).toBe(1);
})

test("Mover paquete",()=>{
    const facturacion=new Centro("Facturacion",3);
    const calidad=new Centro("Calidad",4);
    const distribucion=new Centro("Distribucion",5);
    const centros=[[facturacion,2],[calidad,5],[distribucion,8]];
    const local=new Local("A",0,centros);
    const destino=new Destino(1,0);
    const locales=[local];
    const mapa=new Mapa(locales.length,centros.length);
    mapa.moverPaquete();

    expect(destino.nombre).toBe(1);
    expect(mapa[0][1].tiempo).toBe(1);
})






