<?php

    include_once 'database.php';
    $conect = Conexion::conectar();

    $search = $_POST['search'];

   
    try{
        if(isset($search)){
            $query="SELECT * FROM tareas WHERE nombre LIKE '".$search."%'";
            $smt = $conect->prepare($query);
            $smt->execute();
            $json = array();
            
            while($row = $smt->fetchAll(PDO::FETCH_ASSOC)){
                $json[]=$row;
    
            }
            
            echo json_encode($json, true);
        }
        
    }
    catch(Exception $e){
        die($e->getMessage());
    }

?>