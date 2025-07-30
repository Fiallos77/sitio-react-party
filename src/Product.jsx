function Product(props) {
    return (<div style={{
        border: '1px solid #ccc', padding: '10px', borderRadius: '10px', maxWidth: '300px', marginBottom: '20px'
    }}>
        <h3>{props.nombre}</h3>
        <img src={props.imagen} alt={props.nombre} style={{ width: '100%', borderRadius: '10px' }} />
        <p>{props.descripcion}</p>
        <p><strong>Precio:</strong> {props.precio}</p> </div>);
}
export default Product;