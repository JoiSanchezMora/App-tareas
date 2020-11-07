<?php

class Conexion{
    public static function conectar(){
        try{
            $conex = new PDO("mysql: host=localhost; dbname=bdtareas; charset=utf8","root","");
            $conex->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            return $conex;
        }
        catch(PDOException $e){
            die('Error de conexion :'.$e->getMessage());
        }
    }
}
?>