<?php
    header("Content-Type: application/json");
    include_once("../class/class-usuarios.php");
    switch($_SERVER['REQUEST_METHOD']){
        case 'POST':
            #"Guardar";
            $_POST = json_decode(file_get_contents('php://input'),true);
            $usuario = new Usuario(
                $_POST["id"],
                $_POST["rol"],
                $_POST["nombre"],
                $_POST["apellido"],
                $_POST["password"],
                $_POST["sexo"],
                $_POST["correo"],
                $_POST["nacimiento"],
                $_POST["info"],
                $_POST["urlPerfiil"],
                $_POST["urlMuro"]
            );
            $usuario->guardarUsuario();
            $resultado["mensaje"]="Guardar usuario, informacion: ".json_encode($_POST);
            echo json_encode($resultado);
        break;

        case 'GET':
            #"Obtener usuarios";
            if(isset($_GET['id'])) {
                Usuario::obtenerUsuario($_GET['id']);
            }else{
                Usuario::obtenerUsuarios();
            }
        break;

        case 'PUT':
            #"Actualizar
            $_PUT = json_decode(file_get_contents('php://input'),true);//obtenemos la informacion del cliente
            $usuario = new Usuario(
                $_PUT["id"],
                $_PUT["rol"],
                $_PUT["nombre"],
                $_PUT["apellido"],
                $_PUT["password"],
                $_PUT["sexo"],
                $_PUT["correo"],
                $_PUT["nacimiento"],
                $_PUT["info"],
                $_PUT["urlPerfiil"],
                $_PUT["urlMuro"]
            );
            $usuario->actualizarUsuario($_GET['id']);
           
            $resultado["mensaje"]="Actualizar un usuarios id: ".$_GET['id'].
                                  ", Informacion a Actualizar".json_encode($_PUT);
            echo json_encode($resultado);

        break;
        case 'DELETE':
            Usuario::borrarUsuario($_GET['id']);
            $resultado["mensaje"]="Eliminar al usuarios el usuario con el id: ".$_GET['id'];
            echo json_encode($resultado);
        break;
        
    }
        
?>