


const Campo = props => {

    return (
        <input type="text" value={props.nombre} onChange={props.handleChange} />
    )
}

export default Campo;