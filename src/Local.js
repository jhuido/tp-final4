function Local(nombre,fila){
    this.nombre=nombre;
    this.fila=fila;

    this.generePaquete=function(destino){
        const paquete=new Paquete(destino);
        return paquete;
    }
}

module.exports=Local;