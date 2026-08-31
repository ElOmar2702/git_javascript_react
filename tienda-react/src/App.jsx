import ProductoCard from './components/ProductoCard';
import { productos } from './data/productos';
import './App.css';

function App() {
 const disponibles = productos.filter(producto => producto.stock > 0);
 const hayAgotados = productos.some(producto => producto.stock === 0);
 const valorInventario = productos.reduce(
 (total, producto) => total + producto.precio * producto.stock,
 0
 );

 return (
 <main className="contenedor">
 <h1>Tienda tecnológica</h1>
 <p>Valor del inventario: ${valorInventario}</p>
 
 {hayAgotados && <p>¡Atención! Hay productos agotados en el inventario.</p>}

 <h2>Todos los productos</h2>
 <section className="productos">
 {productos.map(producto => (
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