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

        // fetch('https://63c2c490b0c286fbe5f347e9.mockapi.io/', {
        //     method: 'POST',
        //     headers: {
        //         'Content-type': 'application/json', // qysi formatta yuborish
        //         'Accept': 'application/json', // qysi formatta uni qabul qilib olishi
        //         'Access-Control-Allow-Origin': '*' // ruxsat berish hammaga
        //     },
        //     body: JSON.stringify({
        //         name: el.name.value, //нужно-изменить
        //         tel: parseInt(el.tel.value) //нужно-изменить
        //     })
        // })
        //     .then((res) => res.json())
        //     .then((data) => console.table(data))

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
                                        <ul className='container__list1__item__list'>
                                            <b className='container__list1__item__list__vopr'>{i + 1}) {e.question}</b>
                                            {
                                                e.variants?.map((j, q) => (
                                                    <li className='container__list1__item__list__otv' key={j.id}>{q + 1}) {j.answer}</li>
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