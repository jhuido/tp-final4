const Paquete=require("../src/Paquete")

function Local(nombre,fila,centros){
    this.nombre=nombre;
    this.fila=fila;
    this.centros=centros //[facturacion,colaEspera]

    this.generePaquete=function(destino){
        const paquete=new Paquete(destino);
        return paquete;
    }
}

module.exports=Local;