import { useState } from 'react'
function ContactForm() {
    const [nombre, setNombre] = useState('')
    const [email, setEmail] = useState('')
    const [mensaje, setMensaje] = useState('')
    const [enviado, setEnviado] = useState(false)
    const manejarEnvio = (e) => {
        e.preventDefault()
        setEnviado(true)// En el futuro aquí podríamos enviar los datos a un backend o por email 
        setNombre('') 
        setEmail('') 
        setMensaje('') }
        return (
            <div style={{ marginTop: '30px' }}>
                <h2>Contacto</h2>
                <form onSubmit={manejarEnvio}>
                    <input
                        type="text" placeholder="Tu nombre" value={nombre} onChange={(e) => setNombre(e.target.value)}
                        required style={{ display: 'block', marginBottom: '10px', padding: '8px', width: '100%' }} />
                    <input type="email" placeholder="Tu correo" value={email} onChange={(e) => setEmail(e.target.value)} required style={{ display: 'block', marginBottom: '10px', padding: '8px', width: '100%' }} />
                    <textarea placeholder="Tu mensaje" value={mensaje} onChange={(e) => setMensaje(e.target.value)} required style={{ display: 'block', marginBottom: '10px', padding: '8px', width: '100%' }}>
                    </textarea> 
                    <button type="submit" style={{ padding: '10px 20px' }}>Enviar</button>
                </form>

                {enviado && <p style={{ color: 'green', marginTop: '10px' }}>¡Mensaje enviado correctamente!</p>} </div>)
    }



export default ContactForm