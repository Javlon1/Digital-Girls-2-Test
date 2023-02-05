import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Result.scss'

export default function Result() {
  const navigate = useNavigate()
  const Start = () => {
      navigate('/')
  }
  return (
    <section className='result'>
        <div className="container">
                <div className='container__send'>
                    <button onClick={Start} className='container__send__btn'>x</button>
                </div>
            <ul>
                <li>
                    <p></p>
                    <b></b>
                </li>
            </ul>
            <b>110,8</b>
            <p>Umumiy Ball</p>
        </div>
    </section>
  )
}
