test("Crear Centro",()=>{
    const centro=new Centro(3);
    expect(centro.colaEspera).toBe(3);
})