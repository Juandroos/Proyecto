<?php
    header("Content-Type: application/json");
    include_once("../class/class-amigos.php");
    switch($_SERVER['REQUEST_METHOD']){
        case 'POST':
            #"Guardar";
            $_POST = json_decode(file_get_contents('php://input'),true);
            $usuario = new Amigo(
                $_POST["id"],
                $_POST["amigo"],
            );
            $usuario->guardarAmigo();
            $resultado["mensaje"]="Guardar usuario, informacion: ".json_encode($_POST);
            echo json_encode($resultado);
        break;

        case 'GET':
            #"Obtener usuarios";
            if(isset($_GET['id'])) {
                Amigo::obtenerAmigos($_GET['id']);
            }else{
                
            }
        break;

        case 'PUT':
            #"Actualizar
            $_PUT = json_decode(file_get_contents('php://input'),true);//obtenemos la informacion del cliente
            $usuario = new Amigo(
                $_PUT["id"],
                $_PUT["amigo"]
            );
            $usuario->actualizarUsuario($_GET['id']);
           
            $resultado["mensaje"]="Actualizar un usuarios id: ".$_GET['id'].
                                  ", Informacion a Actualizar".json_encode($_PUT);
            echo json_encode($resultado);

        break;
        case 'DELETE':
            
        break;
        
    }
        
?>