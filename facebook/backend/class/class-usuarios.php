<?php
class Usuario
{
    private $id;
    private $rol;
    private $nombre;
    private $apellido;
    private $password;
    private $sexo;
    private $correo;
    private $nacimiento;
    private $info;
    private $urlPerfiil;
    private $urlMuro;


    public function __construct(
        $id,
        $rol,
        $nombre,
        $apellido,
        $password,
        $sexo,
        $correo,
        $nacimiento,
        $info,
        $urlPerfiil,
        $urlMuro
    ) {
        $this->id = $id;
        $this->rol = $rol;
        $this->nombre = $nombre;
        $this->apellido = $apellido;
        $this->password =$password;
        $this->sexo = $sexo;
        $this->correo = $correo;
        $this->nacimiento = $nacimiento;
        $this->info = $info;
        $this->urlPerfiil = $urlPerfiil;
        $this->urlMuro = $urlMuro;
    }

    #CRUD
    public function guardarUsuario()
    { #Guardar
        $contenidoArchivo = file_get_contents("../data/usuarios.json");
        $usuario = json_decode($contenidoArchivo, true); //formato json a arreglo asociativo
        $usuario[] = array(
            'id' => $this->id,
            'rol' => $this->rol,
            'nombre' => $this->nombre,
            'apellido' => $this->apellido,
            'password' => $this->password,
            'sexo' => $this->sexo,
            'correo' => $this->correo,
            'nacimiento' => $this->nacimiento,
            'info' => $this->info,
            'urlPerfiil' => $this->urlPerfiil,
            'urlMuro' => $this->urlMuro,
        );
        $archivo = fopen("../data/usuarios.json", "w");
        fwrite($archivo, json_encode($usuario));
        fclose($archivo);
    }
    /* public static function numeroUsuarios()
    { #ADMIN
        $contenidoArchivo = file_get_contents("../data/usuarios.json");
        $usuario = json_decode($contenidoArchivo, true);
        $numero ='';
        foreach($usuario as $elemento1=>$elemento2)
	    {
            $numero+=1;
        }

        echo count($numero);
    } */
    public static function obtenerUsuarios()
    { #ADMIN
        $contenidoArchivo = file_get_contents("../data/usuarios.json");
        echo $contenidoArchivo;
    }

    public static function obtenerUsuario($id)
    { #NORMAL
        $contenidoArchivo = file_get_contents("../data/usuarios.json");
        $usuarios = json_decode($contenidoArchivo, true);
        echo json_encode($usuarios[$id]);
    }
    public function actualizarUsuario($idn)
    { #Actualizar
        $contenidoArchivo = file_get_contents("../data/usuarios.json");
        $usuarios = json_decode($contenidoArchivo, true);
        $usuario = $usuarios[$idn];
        $usuario = array(
            'id' => $this->id,
            'rol' => $this->rol,
            'nombre' => $this->nombre,
            'apellido' => $this->apellido,
            'password' => $this->password,
            'sexo' => $this->sexo,
            'correo' => $this->correo,
            'nacimiento' => $this->nacimiento,
            'info' => $this->info,
            'urlPerfiil' => $this->urlPerfiil,
            'urlMuro' => $this->urlMuro,
        );
        $usuarios[$idn] = $usuario;
        $archivo = fopen('../data/usuarios.json', 'w');
        fwrite($archivo, json_encode($usuarios));
        fclose($archivo);
    }
    public static function borrarUsuario($id)
    { #Eliminar elementos
        $contenidoArchivo = file_get_contents("../data/usuarios.json");
        $usuarios = json_decode($contenidoArchivo, true);
        array_splice($usuarios, $id, 1);
        $archivo = fopen('../data/usuarios.json', 'w');
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
     * Get the value of rol
     */
    public function getRol()
    {
        return $this->rol;
    }

    /**
     * Set the value of rol
     *
     * @return  self
     */
    public function setRol($rol)
    {
        $this->rol = $rol;

        return $this;
    }

    /**
     * Get the value of nombre
     */
    public function getNombre()
    {
        return $this->nombre;
    }

    /**
     * Set the value of nombre
     *
     * @return  self
     */
    public function setNombre($nombre)
    {
        $this->nombre = $nombre;

        return $this;
    }

    /**
     * Get the value of apellido
     */
    public function getApellido()
    {
        return $this->apellido;
    }

    /**
     * Set the value of apellido
     *
     * @return  self
     */
    public function setApellido($apellido)
    {
        $this->apellido = $apellido;

        return $this;
    }

    /**
     * Get the value of sexo
     */
    public function getSexo()
    {
        return $this->sexo;
    }

    /**
     * Set the value of sexo
     *
     * @return  self
     */
    public function setSexo($sexo)
    {
        $this->sexo = $sexo;

        return $this;
    }

    /**
     * Get the value of correo
     */
    public function getCorreo()
    {
        return $this->correo;
    }

    /**
     * Set the value of correo
     *
     * @return  self
     */
    public function setCorreo($correo)
    {
        $this->correo = $correo;

        return $this;
    }

    /**
     * Get the value of nacimiento
     */
    public function getnacimiento()
    {
        return $this->nacimiento;
    }

    /**
     * Set the value of nacimiento
     *
     * @return  self
     */
    public function setnacimiento($nacimiento)
    {
        $this->nacimiento = $nacimiento;

        return $this;
    }

    /**
     * Get the value of info
     */
    public function getInfo()
    {
        return $this->info;
    }

    /**
     * Set the value of info
     *
     * @return  self
     */
    public function setInfo($info)
    {
        $this->info = $info;

        return $this;
    }

    /**
     * Get the value of urlPerfiil
     */
    public function getUrlPerfiil()
    {
        return $this->urlPerfiil;
    }

    /**
     * Set the value of urlPerfiil
     *
     * @return  self
     */
    public function setUrlPerfiil($urlPerfiil)
    {
        $this->urlPerfiil = $urlPerfiil;

        return $this;
    }

    /**
     * Get the value of urlMuro
     */
    public function getUrlMuro()
    {
        return $this->urlMuro;
    }

    /**
     * Set the value of urlMuro
     *
     * @return  self
     */
    public function setUrlMuro($urlMuro)
    {
        $this->urlMuro = $urlMuro;

        return $this;
    }

        /**
         * Get the value of password
         */ 
        public function getPassword()
        {
                return $this->password;
        }

        /**
         * Set the value of password
         *
         * @return  self
         */ 
        public function setPassword($password)
        {
                $this->password = $password;

                return $this;
        }
}
