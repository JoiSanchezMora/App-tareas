<?php
    include_once 'database.php';
    $conect = Conexion::conectar();
    try{
        
        if(isset($_POST['id_tareas'])) {

            $nombre = $_POST['nombre'];
            $descripcion = $_POST['descripcion'];
            $id_tareas = $_POST['id_tareas'];
            $query = "UPDATE tareas SET nombre = '$nombre', descripcion = '$descripcion' WHERE id_tareas = '$id_tareas'";
            $smt = $conect->prepare($query);
            $smt->execute();
        }
    }
    catch(Exception $e){
        die($e->getMessage());
    }
    

?>