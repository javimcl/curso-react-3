const Contenedor = props => {
    return (
        <div className="contenedor">
            {props.titulo}
            {props.children}

        </div>)
}

export default Contenedor;