const Centro = require("../src/Centro");
const Local=require("../src/Local");

test("Crear Local",()=>{
    const facturacion=new Centro(3);
    const calidad=new Centro(2);
    const local=new Local("A",0,[[facturacion,2],[calidad,4]]);
    expect(local.nombre).toBe("A");
})


