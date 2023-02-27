import { useState, useEffect } from 'react'
import { Form, Button, Row, Col } from "react-bootstrap"
import './Germantastico.css'

const Germantastico = () => {

    const [formClass, setFormClass] = useState('NotActive')
    const [spanClass, setSpanClass] = useState('Active')
    const [inputValue, setInputValue] = useState('')
    const [personName, setPersonName] = useState('Germantástico')

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

    return (
        <span className='Name'>
            <span className={spanClass} onClick={handleClick}>{personName}</span>
            <Form.Control className={formClass} type="text" value={inputValue} onChange={handleImputValue} onKeyDown={handleEnter} />
        </span>
    )
}

export default Germantastico