const Centro = require("../src/Centro");
const Destino = require("../src/Destino");
const Local = require("../src/Local");
const Mapa = require("../src/Mapa");

test("Crear Paquete",()=>{
    const facturacion=new Centro("Facturacion",3);
    const calidad=new Centro("Calidad",4);
    const distribucion=new Centro("Distribucion",5);
    const centros=[[facturacion,2],[calidad,5],[distribucion,8]];
    const local=new Local("A",0,centros);
    const destino=new Destino(1,0);
    const locales=[local];
    const mapa=new Mapa(locales.length,centros.length);
    const paquete=local.generePaquete(destino,mapa);
    expect(paquete.tiempo).toBe(0);
    expect(paquete.destino.nombre).toBe(1);
})
