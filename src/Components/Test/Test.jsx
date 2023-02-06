import * as React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Directions } from '../../Data/data'
import './Test.scss'

export default function Test() {
    const navigate = useNavigate()
    const selector = useSelector((state) => { return state })
    const localData = []
    const direction = []

    Directions?.map((e) => {
        localData.push(e)
    })

    direction.push(localData[(selector.users[0].Directions) - 1]);

    const Results = () => {
        navigate('/result')
    }

    const localResult = {}

    return (
        <section className='test'>
            {
                direction?.map((event) => (
                    <div key={event.id} className='container'>
                        <h1 className='container__title'>{event.name}</h1>
                        <p className='container__time'>2 : 40 : 50</p>
                        <ul className='container__list'>
                            <li className='container__list__name'>{event.name}</li>
                            <li className='container__list__ball'>({event.ball})</li>
                            <li className='container__list__item'>
                                {
                                    event.test?.map((e, i) => (
                                        <p key={e.id} className='bc'>{i + 1}</p>
                                    ))
                                }
                            </li>
                        </ul>
                        <ul className='container__list1'>
                            {
                                event.test?.map((e, i) => (
                                    <li key={e.id} className='container__list1__item'>
                                        <ul>
                                            <b>{i + 1}) {e.question}</b>
                                            {
                                                e.variants?.map((j, q) => (
                                                    <li key={j.id}>{q + 1}) {j.answer}</li>
                                                ))
                                            }
                                        </ul>
                                    </li>
                                ))
                            }
                        </ul>
                        <div className='container__send'>
                            <button onClick={Results} className='container__send__btn' >тестни тугатиш</button>
                        </div>
                    </div >
                ))
            }
        </section >
    )
}
// disabled