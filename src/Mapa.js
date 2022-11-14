const { array } = require("yargs");

function Mapa(filas,columnas){
    this.columnas=columnas;//centros mas cola de salida
    this.filas=filas;
    this.mapa=new Array(filas);

    this.nuevoPaquete=function(local,paquete){
        this.mapa[local]=new array(local.centros.length);
        this.mapa[local][0]=paquete;
    }
}

module.exports=Mapa;