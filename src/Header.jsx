function Header() {
    return (
        <header style={{ backgroundColor: '#0077cc', color: 'white', padding: '20px', textAlign: 'center' }}>

            <h2>Mi Sitio Web con React</h2><nav>
                <a href="#" style={{ color: 'white', marginRight: '15px' }}>Inicio</a>
                <a href="#" style={{ color: 'white', marginRight: '15px' }}>Productos</a>
                <a href="#" style={{ color: 'white' }}>Contacto</a></nav>
        </header>);
}
export default Header;