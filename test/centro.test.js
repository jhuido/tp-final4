const Centro=require("../src/Centro")

test("Crear Centro",()=>{
    const centro=new Centro(3);
    expect(centro.procesamiento).toBe(3);
})