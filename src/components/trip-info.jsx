import { useContext, useState } from 'react';
import './trip-info.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import StoreContext from '../store/storeContext';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function TripInfo(){
    const searchInfo = useContext(StoreContext).searchInfo;
    const [pLocation, setPLocation] = useState(searchInfo.pUpLocation);
    const [dLocation, setDLocation] = useState(searchInfo.dOffLocation);
    const [pDate , setPDate] = useState(searchInfo.pUpDate);
    const [dDate , setDDate] = useState(searchInfo.dOffDate);
    const [pTime, setPTime] = useState(searchInfo.pUpTime);
    const [dTime, setDTime] = useState(searchInfo.dOffTime)


    return (
        <Container className='mt-4'>
            <Row className='justify-content-md-center'>
                <Col xs={4}>
                    <select value={pLocation} onChange={e => setPLocation(e.target.value)} className="form-control" id="textService">
                            <option selected disabled value="">Pick-up location</option>
                            <option value="Dealership">Dealership</option>
                            <option value="San Diego Airport">San Diego Airport</option>                        
                    </select>
                    <Row>
                        <Col>
                            <input className='form-control' value={pDate} onChange={e => setPDate(e.target.value)} type="date" id="pickup" name="pickup"></input>
                        </Col>
                        <Col>
                            <select value={pTime} onChange={e => setPTime(e.target.value)} className="form-control" id="textService">
                                <option selected disabled value="">Time Pick-up</option>
                                <option value="12 am">00:00</option>
                                <option value="1 am">01:00</option>
                                <option value="2 am">02:00</option>
                                <option value="3 am">03:00</option>
                                <option value="4 am">04:00</option>
                                <option value="5 am">05:00</option>
                                <option value="6 am">06:00</option>
                                <option value="7 am">07:00</option>
                                <option value="8 am">08:00</option>
                                <option value="9 am">09:00</option>
                                <option value="10 am">10:00</option>
                                <option value="11 am">11:00</option>
                                <option value="12 pm">12:00</option>
                                <option value="1 pm">13:00</option>
                                <option value="2 pm">14:00</option>
                                <option value="3 pm">15:00</option>
                                <option value="4 pm">16:00</option>
                                <option value="5 pm">17:00</option>
                                <option value="6 pm">18:00</option>
                                <option value="7 pm">19:00</option>
                                <option value="8 pm">20:00</option>
                                <option value="9 pm">21:00</option>
                                <option value="10 pm">22:00</option>
                                <option value="11 pm">23:00</option>
                            </select>
                        </Col>
                    </Row>
                </Col>
                <Col className='fontArrow' xs={1}>
                    <FontAwesomeIcon icon={faArrowRight} />
                </Col>
                <Col xs={4}>
                    {/* <label>Drop-Off Date</label> */}
                    <select value={dLocation} onChange={e => setDLocation(e.target.value)} className="form-control" id="textService">
                            <option selected disabled value="">Drop-off location</option>
                            <option value="Dealership">Dealership</option>
                            <option value="San Diego Airport">San Diego Airport</option>
                    </select>
                    <Row>
                        <Col>
                            <input className='form-control' value={dDate} onChange={e => setDDate(e.target.value)} type="date" id="dropoff" name="dropoff"></input>
                        </Col>
                        <Col>
                            <select value={dTime} onChange={e => setDTime(e.target.value)} className="form-control" id="textService">
                                <option selected disabled value="">Time Pick-up</option>
                                <option value="12 am">00:00</option>
                                <option value="1 am">01:00</option>
                                <option value="2 am">02:00</option>
                                <option value="3 am">03:00</option>
                                <option value="4 am">04:00</option>
                                <option value="5 am">05:00</option>
                                <option value="6 am">06:00</option>
                                <option value="7 am">07:00</option>
                                <option value="8 am">08:00</option>
                                <option value="9 am">09:00</option>
                                <option value="10 am">10:00</option>
                                <option value="11 am">11:00</option>
                                <option value="12 pm">12:00</option>
                                <option value="1 pm">13:00</option>
                                <option value="2 pm">14:00</option>
                                <option value="3 pm">15:00</option>
                                <option value="4 pm">16:00</option>
                                <option value="5 pm">17:00</option>
                                <option value="6 pm">18:00</option>
                                <option value="7 pm">19:00</option>
                                <option value="8 pm">20:00</option>
                                <option value="9 pm">21:00</option>
                                <option value="10 pm">22:00</option>
                                <option value="11 pm">23:00</option>
                            </select>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>

    );
}

export default TripInfo;