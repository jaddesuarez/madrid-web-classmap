import { useState, useEffect } from 'react'
import { Form, Button, Row, Col } from "react-bootstrap"
import './MyDate.css'

const MyDate = () => {

    const [currentMonth, setCurrentMonth] = useState('')

    useEffect(() => {
        loadData()
    }, [])

    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ]

    const today = new Date()

    const loadData = () => {
        setCurrentMonth(monthNames[today.getMonth()])
    }


    return (
        <p className='NoPrint' style={{ margin: '0', marginLeft: '20px', color: 'white', fontWeight: 'bold' }}>{currentMonth} {today.getFullYear()}</p>
    )

}

export default MyDate