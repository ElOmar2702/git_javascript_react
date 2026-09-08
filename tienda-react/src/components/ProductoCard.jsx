function ProductoCard({ producto }) {
  const {
    nombre,
    precio,
    categoria,
    stock
  } = producto;

  const estado = producto.stock > 0 ? 'Disponible' : 'Agotado';

  return (
    <article className="producto-card">
      <h2>{nombre}</h2>
      <p>Categoría: {categoria}</p>
      <p>Precio: ${precio}</p>
      <p>Stock: {stock}</p>
      <strong>{estado}</strong>
    </article>
  );
}

export default ProductoCard;