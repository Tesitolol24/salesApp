class planUsuario{
    constructor(precio, portafolio, tecnologia, estratoVivienda, ciudad){
        this.precio = precio;
        this.portafolio = portafolio;
        this.tecnologia = tecnologia;
        this.estratoVivienda = estratoVivienda;
        this.ciudad = ciudad;
    }

    getPrecio(){
        return this._precio;
    }

    setPrecio(precio){
        return this._precio = precio;
    }

    getPortafolio(){
        return this._portafolio;
    }

    setPortafolio(portafolio){
        return this._portafolio = portafolio;
    }

    getTecnologia(){
        return this._tecnologia;
    }

    setTecnologia(tecnologia){
        return this._tecnologia = tecnologia;
    }

    getEstratoVivienda(){
        return this._estratoVivienda;
    }

    setEstratoVivienda(estratoVivienda){
        return this._estratoVivienda = estratoVivienda;
    }

    getCiudad(){
        return this._ciudad;
    }

    setCiudad(ciudad){
        return this._ciudad = ciudad;
    }
}