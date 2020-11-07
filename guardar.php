<?php
    include_once 'database.php';
    $conect = Conexion::conectar();

    try{
        
        if(isset($_POST['nombre'])) {

            $nombre = $_POST['nombre'];
            $descripcion = $_POST['descripcion'];
            $query = "INSERT INTO tareas (nombre, descripcion) VALUES ('$nombre','$descripcion')";
            $smt = $conect->prepare($query);
            $smt->execute();
        }
    }
    catch(Exception $e){
        die($e->getMessage());
    }
    

?>