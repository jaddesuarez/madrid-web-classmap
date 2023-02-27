import { useState, useEffect, useRef } from 'react'
import { Form, Button, Row, Col } from "react-bootstrap"
import { useReactToPrint } from "react-to-print"
import MyDate from '../../components/MyDate/MyDate'
import MyFooter from '../../components/MyFooter/MyFooter'
import Name from '../../components/Name/Name'
import Germantastico from '../../components/Germantastico/Germantastico'
import PrintIcon from '@mui/icons-material/Print'
import './HomePage.css'

const HomePage = () => {

    const componentRef = useRef()
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    })

    return (
        <div ref={componentRef} >
            <div className='NoPrint' style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div>
                    <h1 className='NoPrint' style={{ boxShadow: '10px 5px 5px rgba(0, 0, 0, 0.1)' }}>Class Map 🗺️</h1>
                    <p className='NoPrint' style={{ margin: '0', marginLeft: '20px', color: 'white', fontWeight: 'bold' }}>Web Dev Madrid</p>
                    <MyDate />
                </div>
                <div className='NoPrint' onClick={handlePrint} style={{ marginRight: '50px', marginTop: '20px', backgroundColor: 'white', padding: '10px', display: 'inline-block', height: '25px', borderRadius: '10px', boxShadow: '10px 5px 5px rgba(0, 0, 0, 0.1)' }}>
                    <PrintIcon />
                </div>
            </div>
            <div className='Mapa'>
                {/* Column 1 */}
                <span style={{ position: 'fixed', top: '3%', left: '7%', textAlign: 'center', width: '60px' }}>
                    <Name />
                </span>
                <span style={{ position: 'fixed', top: '16%', left: '7%', textAlign: 'center', width: '60px' }}>
                    <Name />
                </span>
                <span style={{ position: 'fixed', top: '29%', left: '7%', textAlign: 'center', width: '60px' }}>
                    <Name />
                </span>
                <span style={{ position: 'fixed', top: '41%', left: '7%', textAlign: 'center', width: '60px' }}>
                    <Name />
                </span>
                <span style={{ position: 'fixed', top: '53%', left: '7%', textAlign: 'center', width: '60px' }}>
                    <Name />
                </span>
                {/* Column 2 */}
                <span style={{ position: 'fixed', top: '3%', left: '14%', textAlign: 'center', width: '60px' }}>
                    <Name />
                </span>
                <span style={{ position: 'fixed', top: '16%', left: '14%', textAlign: 'center', width: '60px' }}>
                    <Name />
                </span>
                <span style={{ position: 'fixed', top: '29%', left: '14%', textAlign: 'center', width: '60px' }}>
                    <Name />
                </span>
                <span style={{ position: 'fixed', top: '41%', left: '14%', textAlign: 'center', width: '60px' }}>
                    <Name />
                </span>
                <span style={{ position: 'fixed', top: '53%', left: '14%', textAlign: 'center', width: '60px' }}>
                    <Name />
                </span>
                {/* Column 3 */}
                <span style={{ position: 'fixed', top: '3%', left: '25.5%', textAlign: 'center', width: '60px' }}>
                    <Name />
                </span>
                <span style={{ position: 'fixed', top: '16%', left: '25.5%', textAlign: 'center', width: '60px' }}>
                    <Name />
                </span>
                <span style={{ position: 'fixed', top: '29%', left: '25.5%', textAlign: 'center', width: '60px' }}>
                    <Name />
                </span>
                <span style={{ position: 'fixed', top: '41%', left: '25.5%', textAlign: 'center', width: '60px' }}>
                    <Name />
                </span>
                <span style={{ position: 'fixed', top: '53%', left: '25.5%', textAlign: 'center', width: '60px' }}>
                    <Name />
                </span>
                {/* Column 4 */}
                <span style={{ position: 'fixed', top: '3%', left: '32%', textAlign: 'center', width: '60px' }}>
                    <Name />
                </span>
                <span style={{ position: 'fixed', top: '16%', left: '32%', textAlign: 'center', width: '60px' }}>
                    <Name />
                </span>
                <span style={{ position: 'fixed', top: '29%', left: '32%', textAlign: 'center', width: '60px' }}>
                    <Name />
                </span>
                <span style={{ position: 'fixed', top: '41%', left: '32%', textAlign: 'center', width: '60px' }}>
                    <Name />
                </span>
                <span style={{ position: 'fixed', top: '53%', left: '32%', textAlign: 'center', width: '60px' }}>
                    <Name />
                </span>
                {/* Column 5 */}
                <span style={{ position: 'fixed', top: '3%', left: '44%', textAlign: 'center', width: '60px' }}>
                    <Name />
                </span>
                <span style={{ position: 'fixed', top: '16%', left: '44%', textAlign: 'center', width: '60px' }}>
                    <Name />
                </span>
                <span style={{ position: 'fixed', top: '29%', left: '44%', textAlign: 'center', width: '60px' }}>
                    <Name />
                </span>
                <span style={{ position: 'fixed', top: '41%', left: '44%', textAlign: 'center', width: '60px' }}>
                    <Name />
                </span>
                {/* Column 6 */}
                <span style={{ position: 'fixed', top: '3%', left: '50%', textAlign: 'center', width: '60px' }}>
                    <Name />
                </span>
                <span style={{ position: 'fixed', top: '16%', left: '50%', textAlign: 'center', width: '60px' }}>
                    <Name />
                </span>
                <span style={{ position: 'fixed', top: '29%', left: '50%', textAlign: 'center', width: '60px' }}>
                    <Name />
                </span>
                <span style={{ position: 'fixed', top: '41%', left: '50%', textAlign: 'center', width: '60px' }}>
                    <Name />
                </span>
                {/* Column 7 */}
                <span style={{ position: 'fixed', top: '3%', left: '62%', textAlign: 'center', width: '60px' }}>
                    <Name />
                </span>
                <span style={{ position: 'fixed', top: '16%', left: '62%', textAlign: 'center', width: '60px' }}>
                    <Name />
                </span>
                <span style={{ position: 'fixed', top: '29%', left: '62%', textAlign: 'center', width: '60px' }}>
                    <Name />
                </span>
                <span style={{ position: 'fixed', top: '41%', left: '62%', textAlign: 'center', width: '60px' }}>
                    <Name />
                </span>
                <span style={{ position: 'fixed', top: '53%', left: '62%', textAlign: 'center', width: '60px' }}>
                    <Name />
                </span>
                {/* Column 8 */}
                <span style={{ position: 'fixed', top: '3%', left: '68.5%', textAlign: 'center', width: '60px' }}>
                    <Name />
                </span>
                <span style={{ position: 'fixed', top: '16%', left: '68.5%', textAlign: 'center', width: '60px' }}>
                    <Name />
                </span>
                <span style={{ position: 'fixed', top: '29%', left: '68.5%', textAlign: 'center', width: '60px' }}>
                    <Name />
                </span>
                <span style={{ position: 'fixed', top: '41%', left: '68.5%', textAlign: 'center', width: '60px' }}>
                    <Name />
                </span>
                <span style={{ position: 'fixed', top: '53%', left: '68.5%', textAlign: 'center', width: '60px' }}>
                    <Name />
                </span>
                {/* Column 9 */}
                <span style={{ position: 'fixed', top: '3%', left: '80%', textAlign: 'center', width: '60px' }}>
                    <Name />
                </span>
                <span style={{ position: 'fixed', top: '16%', left: '80%', textAlign: 'center', width: '60px' }}>
                    <Name />
                </span>
                <span style={{ position: 'fixed', top: '29%', left: '80%', textAlign: 'center', width: '60px' }}>
                    <Name />
                </span>
                <span style={{ position: 'fixed', top: '41%', left: '80%', textAlign: 'center', width: '60px' }}>
                    <Name />
                </span>
                <span style={{ position: 'fixed', top: '53%', left: '80%', textAlign: 'center', width: '60px' }}>
                    <Name />
                </span>
                {/* Column 10 */}
                <span style={{ position: 'fixed', top: '3%', left: '87%', textAlign: 'center', width: '60px' }}>
                    <Name />
                </span>
                <span style={{ position: 'fixed', top: '16%', left: '87%', textAlign: 'center', width: '60px' }}>
                    <Name />
                </span>
                <span style={{ position: 'fixed', top: '29%', left: '87%', textAlign: 'center', width: '60px' }}>
                    <Name />
                </span>
                <span style={{ position: 'fixed', top: '41%', left: '87%', textAlign: 'center', width: '60px' }}>
                    <Name />
                </span>
                <span style={{ position: 'fixed', top: '53%', left: '87%', textAlign: 'center', width: '60px' }}>
                    <Name />
                </span>
                <span style={{ position: 'fixed', top: '82%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                    <Germantastico />
                </span>
            </div>
            <div class="pagebreak"> </div>
            <MyFooter />
        </div>

    )

}
export default HomePage