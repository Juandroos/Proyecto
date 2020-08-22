<?php

class Amigo
{
    private $id;
    private $amigo;

    public function __construct($id, $amigo)
    {
        $this->id = $id;
        $this->amigo = $amigo;
    }
    public function guardarAmigo()
    {#Guardar
        $contenidoArchivo = file_get_contents("../data/amigos.json");
        $usuario = json_decode($contenidoArchivo, true); //formato json a arreglo asociativo
        $usuario[] = array(
            'id' => $this->id,
            'amigo' => $this->amigo
        );
        $archivo = fopen("../data/amigos.json", "w");
        fwrite($archivo, json_encode($usuario));
        fclose($archivo);
    }
    public static function obtenerAmigos($id)
    { #NORMAL
        $contenidoArchivo = file_get_contents("../data/amigos.json");
        $usuarios = json_decode($contenidoArchivo, true);
        echo json_encode($usuarios[$id]);
    }
    public function actualizarUsuario($idn)
    { #Actualizar
        $contenidoArchivo = file_get_contents("../data/amigos.json");
        $usuarios = json_decode($contenidoArchivo, true);
        $usuario = $usuarios[$idn];
        $usuario = array(
            'id' => $this->id,
            'amigo' => $this->amigo
        );
        $usuarios[$idn] = $usuario;
        $archivo = fopen('../data/amigos.json', 'w');
        fwrite($archivo, json_encode($usuarios));
        fclose($archivo);
    }


    /**
     * Get the value of id
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Set the value of id
     *
     * @return  self
     */
    public function setId($id)
    {
        $this->id = $id;

        return $this;
    }

    /**
     * Get the value of amigo
     */
    public function getamigo()
    {
        return $this->amigo;
    }

    /**
     * Set the value of amigo
     *
     * @return  self
     */
    public function setamigo($amigo)
    {
        $this->amigo = $amigo;

        return $this;
    }
}
