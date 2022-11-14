const Paquete=require("../src/Paquete")

function Local(nombre,fila,centros){
    this.nombre=nombre;
    this.fila=fila;
    this.centros=centros //[facturacion,colaEspera]

    this.generePaquete=function(destino,mapa){
        const paquete=new Paquete(destino);
        mapa.nuevoPaquete(local,paquete);
        return paquete;
    }
}

module.exports=Local;