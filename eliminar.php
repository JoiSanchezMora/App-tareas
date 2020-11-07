<?php

    include_once 'database.php';
    $conect = Conexion::conectar();

    
   
    try{
        if(isset($_POST['id'])){
            $id = $_POST['id'];
            $query="DELETE FROM tareas WHERE id_tareas = '$id'";
            $smt = $conect->prepare($query);
            $smt->execute();
        }    
        
    }
    catch(Exception $e){
        die($e->getMessage());
    }

?>