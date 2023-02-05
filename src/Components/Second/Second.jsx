import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Directions } from '../../Data/data'
import './Second.scss'

export default function Second({ render, setRender }) {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const formHandler = (e) => {
        const val = e.target.id

        setRender(!render)
        dispatch({
            type: 'DIRECTIONS',
            payload: {
                directions: val
            }
        })
        navigate('/third')
    }


    return (
        <section className='second'>
            <div className="container">
                <h2 className='container__title'>Йуналишни танланг</h2>
                <ul className='container__list'>
                    {
                        Directions?.map((e) => (
                            <li onClick={formHandler} id={e.id} className='container__list__item' key={e.id}>
                                <img src={e.img} id={e.id} alt={`Img-${e.name}`} />
                                <p id={e.id}>{e.name}</p>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </section>
    )
}
