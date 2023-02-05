import React from 'react'
import './Ferst.scss'
import logo from '../../Assets/Img/logo.png'
import { useNavigate } from 'react-router-dom'

export default function Ferst() {
  const navigate = useNavigate()
  const Next = () => {
    navigate('/second')
  }

  return (
    <section className='ferst'>
        <div className="container">
            <div className='container__start'>
                <img src={logo} alt="" />
                <p>Digital Girls 2</p>
                <button onClick={Next}>Boshlash</button>
            </div>
        </div>
    </section>
  )
}