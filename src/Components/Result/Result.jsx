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
                    <button onClick={Start} className='container__send__btn'><i className="bi bi-x-lg"></i></button>
                </div>
                <ul className='container__list'>
                    <li className='container__list__item'>
                        <p className='container__list__item-p'>Kimyo</p>
                        <b className='container__list__item-b'>38<samp>%</samp></b>
                        <p className='container__list__item-p'>11/30</p>
                    </li>
                    <li className='container__list__item'>
                        <p className='container__list__item-p'>Kimyo</p>
                        <b className='container__list__item-b'>38<samp>%</samp></b>
                        <p className='container__list__item-p'>11/30</p>
                    </li>
                    <li className='container__list__item'>
                        <p className='container__list__item-p'>Kimyo</p>
                        <b className='container__list__item-b'>38<samp>%</samp></b>
                        <p className='container__list__item-p'>11/30</p>
                    </li>
                </ul>
                <b className='container__allBall'>110,8</b>
                <p className='container__ballText'>Umumiy Ball</p>
            </div>
        </section>
    )
}
