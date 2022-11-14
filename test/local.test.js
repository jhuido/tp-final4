const Local=require("../src/Local");

test("Crear Local",()=>{
    const local=new Local();
    expect(local.nombre).toBe("A");
})