function ProductoCard({ producto }) {
  const {
    nombre,
    precio,
    categoria,
    stock
  } = producto;

  const estado =
    stock > 0
      ? "Disponible"
      : "Agotado";

  const mostrarProducto = () => {
    alert(`Seleccionaste ${nombre}`);
  };

  const formatearPrecio = precio => {
    return precio.toLocaleString("es-CO");
  };

  // Opción C: Categorizar tipo de producto por precio
  const tipoProducto = precio >= 500000 ? "Producto premium" : "Producto económico";

  return (
    <article className="producto-card">
      <h2>{nombre}</h2>
      <p>Categoría: {categoria}</p>
      <p>Precio: ${formatearPrecio(precio)}</p>
      <p>Stock: {stock}</p>
      <p><strong>{tipoProducto}</strong></p>
      <strong>{estado}</strong>
      <br />
      <button
        onClick={mostrarProducto}
        disabled={stock === 0}
      >
        {
          stock > 0
            ? "Ver producto"
            : "Agotado"
        }
      </button>
    </article>
  );
}

export default ProductoCard;