import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Users from '../../Register/userData'
import './Third.scss'

export default function Third({ render, setRender }) {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const formHandler = (e) => {
        e.preventDefault()
        const val = e.target.elements
        setRender(!render)
        dispatch({
            type: 'NAME',
            payload: {
                name: val.name.value,
                tel: val.tel.value
            }
        })
        navigate('/test')
    }
    
    // const user = Users
    // console.log(user);

    // document.onkeydown = (e) => {
        
    //     console.log(e.keyCode);
    // }

    return (
        <section className='third'>
            <div className="container">
                <form onSubmit={formHandler} className='container__form' action="#">
                    <p className='container__form__title'>Руйхатдан утиш</p>
                    <div className='container__form__div'>
                        <input className='container__form__div__inp' type="text" name='name' placeholder='Ф.И.О' />
                        <input className='container__form__div__inp' type="text" name='tel' defaultValue={998} placeholder='+998__ ___ __ __' />
                        <button className='container__form__div__btn' type='submit'>Yuborish</button>
                    </div>
                </form>
            </div>
        </section>
    )
}