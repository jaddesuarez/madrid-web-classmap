import { useState, useEffect } from 'react'
import { Form, Button, Row, Col } from "react-bootstrap"
import './Name.css'

const Name = () => {

    const [formClass, setFormClass] = useState('NotActive')
    const [spanClass, setSpanClass] = useState('Active')
    const [printClass, setPrintClass] = useState('NoPrint')
    const [inputValue, setInputValue] = useState('')
    const [personName, setPersonName] = useState('Name Surname')

    useEffect(() => {
        personName === 'Name Surname' ? setPrintClass('NoPrint') : setPrintClass('Print')
    }, [personName])

    const handleImputValue = e => {
        setInputValue(e.target.value)
    }

    const handleEnter = e => {
        if (e.key === 'Enter') {
            setPersonName(inputValue)
            setInputValue('')
            spanClass === 'Active' ? setSpanClass('NotActive') : setSpanClass('Active')
            formClass === 'Active' ? setFormClass('NotActive') : setFormClass('Active')
        }
    }

    const handleClick = () => {
        spanClass === 'Active' ? setSpanClass('NotActive') : setSpanClass('Active')
        formClass === 'Active' ? setFormClass('NotActive') : setFormClass('Active')
    }

    console.log(personName)
    console.log(printClass)

    return (
        <span className='Name'>
            <span style={{ display: 'inline - block', transform: 'rotate(-90deg)' }} className={spanClass + ' ' + printClass} onClick={handleClick}>{personName}</span>
            <Form.Control className={formClass} type="text" value={inputValue} onChange={handleImputValue} onKeyDown={handleEnter} />
        </span >
    )
}

export default Name