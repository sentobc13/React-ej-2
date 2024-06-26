import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import './Reserve.css';


export const ReserveForm = () => {
    const navigate = useNavigate();
    const initialValues = {
        nombre: "",
        personas: "",
        email: "",
        fecha: ""

    }

    const clearValues = () => {
        setData(initialValues)
    }

    const [data, setData] = useState(initialValues);


    const handleInputChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        localStorage.setItem('reserva', JSON.stringify(data))
        clearValues();
        setTimeout(() => {
            navigate("/");
          }, 1000)
    }

    return <form onSubmit={handleSubmit}>
        <input
            type="text"
            name="nombre"
            id="nombre"
            placeholder="nombre y apellidos"
            onChange={handleInputChange}
            value={data.name}
        />
        <input
            type="number"
            name="personas"
            id="personas"
            placeholder="Introduce el número de personas"
            onChange={handleInputChange}
            value={data.name} />

        <input
            type="email"
            name="email"
            id="email"
            placeholder="Introduce tu email"
            onChange={handleInputChange}
            value={data.name} />

        <input
            type="date"
            name="fecha"
            id="fecha"
            placeholder="Fecha"
            onChange={handleInputChange}
            value={data.name}
        />

        <button type="submit">Enviar</button>
    </form>
}


export default ReserveForm


