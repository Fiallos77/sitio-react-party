import Header from './Header'
import Product from './Product'
import './App.css'
import ContactForm from './ContactForm'
import fiesta1 from './assets/hall1.png'
import fiesta2 from './assets/Hall2.png'


function App() {
  return (
    <div className='container'>
      <Header />
      <main style={{ padding: '20px' }}>
        <h1>Hola Carlos 👋</h1>
        <p>¡Bienvenido a tu primer sitio con React y Vite!</p>

        <h2>Mis Productos</h2>

        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
          <Product
            nombre="Kit Fiesta Infantil"
            imagen={fiesta1}
            descripcion="Incluye platos, vasos y decoración temática."
            precio="$25.00"
          />
          <Product
            nombre="Decoración Globos"
            imagen={fiesta2}
            descripcion="Globos personalizados con helio y colores a elección."
            precio="$5.00"
          />
        </div>
        <ContactForm></ContactForm>
      </main>
    </div>
  );
}
export default App
