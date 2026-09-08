import { useState } from "react";
import ProductoCard from './components/ProductoCard';
import { productos } from './data/productos';
import './App.css';

function App() {
  const [busqueda, setBusqueda] = useState("");
  // 1. Segundo estado para la categoría
  const [categoria, setCategoria] = useState("Todas");

  const disponibles = productos.filter(producto => producto.stock > 0);
  const hayAgotados = productos.some(producto => producto.stock === 0);
  const valorInventario = productos.reduce(
    (total, producto) => total + producto.precio * producto.stock,
    0
  );

  // 2. Modificación del filtro combinando nombre y categoría
  const productosFiltrados = productos.filter(producto => {
    const coincideNombre = producto.nombre
      .toLowerCase()
      .includes(busqueda.toLowerCase());

    const coincideCategoria =
      categoria === "Todas" || producto.categoria === categoria;

    return coincideNombre && coincideCategoria;
  });

  return (
    <main className="contenedor">
      <h1>Tienda tecnológica</h1>
      <p>Valor del inventario: ${valorInventario}</p>
      
      {hayAgotados && <p>¡Atención! Hay productos agotados en el inventario.</p>}

      <input
        type="text"
        placeholder="Buscar producto..."
        value={busqueda}
        onChange={(evento) => {
          setBusqueda(evento.target.value);
        }}
      />

      {/* 3. Selector de categoría */}[cite: 1]
      <select
        value={categoria}
        onChange={(evento) => setCategoria(evento.target.value)}
      >
        <option value="Todas">Todas</option>
        <option value="Perifericos">Periféricos</option>
        <option value="Pantallas">Pantallas</option>
      </select>

      <h2>Todos los productos</h2>

      {
        productosFiltrados.length === 0
          ? <p>No se encontraron productos.</p>
          : null
      }

      <section className="productos">
        {productosFiltrados.map(producto => (
          <ProductoCard
            key={producto.id}
            producto={producto}
          />
        ))}
      </section>

      <h2>Productos Disponibles</h2>
      <section className="productos">
        {disponibles.map(producto => (
          <ProductoCard
            key={producto.id}
            producto={producto}
          />
        ))}
      </section>
    </main>
  );
}

export default App;