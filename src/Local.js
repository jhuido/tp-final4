function Local(nombre,fila){
    this.nombre=nombre;
    this.fila=fila;

    this.generePaquete=function(mapa,destino){
        const paquete=new Paquete(destino);
        mapa[fila][0].push(paquete);
        return paquete;
    }
}

module.exports=Local;