import React from 'react'
import {FiLogIn} from 'react-icons/fi'

import './style.css'

import logoImg from '../../assets/logo.svg'
import heoresImg from '../../assets/heores.png'


export default function Logon(){
    return (
       <div className = "logon-container">
        <session className="form">
        <img src={logoImg} alt="Be The Heros"/>
        <form action="">
            <h1>Faça seu logon</h1>
            <input placeholder="Seu Id"/>
            <button className="button" type="submit">Entrar</button>
            <FiLogIn size={16} color="#E02041"/>
            <a href="/register">
                Não tenho cadastro
            </a>
        </form>
        </session>
        <img src={heoresImg} alt="Heroes"/>
       </div>
    )
}