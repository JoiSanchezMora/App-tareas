<?php

    include_once 'database.php';
    $conect = Conexion::conectar();

    
   
    try{
        if(isset($_POST['id'])){
            $id = $_POST['id'];
            $query="SELECT * FROM tareas WHERE id_tareas='$id'";
            $smt = $conect->prepare($query);
            $smt->execute();
            $json = $smt->fetch(PDO::FETCH_ASSOC);
            echo json_encode($json, true);
        }    
        
    }
    catch(Exception $e){
        die($e->getMessage());
    }

?>