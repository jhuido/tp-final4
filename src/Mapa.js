function Mapa(filas,columnas){
    this.columnas=columnas;//centros mas cola de salida
    this.filas=filas;
    this.mapa=new Array(filas);
}

module.exports=Mapa;