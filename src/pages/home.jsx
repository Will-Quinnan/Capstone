import "./home.css";
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faMagnifyingGlass, faClock } from '@fortawesome/free-solid-svg-icons'
import { useContext, useState } from "react";
import StoreContext from "../store/storeContext";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import  InputGroup  from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button"

function Home() {
    const addInfo = useContext(StoreContext).addInfo;
    const [info, setInfo] = useState({pUpLocation: '', pUpDate: '', pUpTime: '', dOffDate: '', dOffTime: '', dOffLocation: ''});
    const [validated, setValidated] = useState(false);

    const Search = () => {
        addInfo(info);
    };

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
    
        setValidated(true);
      };

    return (
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <div className = "home">

                <div className="site-info">
                    <h1>Car Rental - Search, Compare & Book</h1>
                    <h4><FontAwesomeIcon icon={faCheck} /> Free cancelation</h4>
                    <h4><FontAwesomeIcon icon={faCheck} /> Customer support</h4>
                </div>


                <div className="container">
                    <div className="inputs">

                        <Form.Group>
                            <div className="wrapper pb-1">
                                <div className="icon">
                                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                                </div>
                                <select class="sep form-select form-select-lg input ps-5" aria-label="Default select example" required onChange={e => setInfo({...info, pUpLocation: e.target.value})}>
                                    <option selected disabled value="">Pick-up location</option>
                                    <option value="Dealership">Dealership</option>
                                    <option value="San Diego Airport">San Diego Airport</option>
                                </select>
                            </div>
                            <Form.Control.Feedback>
                                Please provide a Pick-Up location
                            </Form.Control.Feedback>
                        </Form.Group>

                        <div className="position-relative wrapper pb-1">
                            <label htmlFor="" className="position-absolute start-0 ps-5">Date Pick-up</label>
                            <input class="sep form-control form-control-lg input ps-5" type="date" placeholder="Pick-up date" onChange={e => setInfo({...info, pUpDate: e.target.value})}/>
                        </div>

                        <div className="wrapper pb-1">
                            <div className="icon">
                                <FontAwesomeIcon icon={faClock} />
                            </div>
                            <select class="sep form-select form-select-lg input ps-5" aria-label="Default select example" id="floatingInput" onChange={e => setInfo({...info, pUpTime: e.target.value})}>
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

                        </div>

                        <div className="wrapper pb-1">
                            <div className="icon">
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                            </div>
                            <select class="sep form-select form-select-lg input ps-5" aria-label="Default select example" onChange={e => setInfo({...info, dOffLocation: e.target.value})}>
                                <option selected disabled value="">Drop-off location</option>
                                <option value="Dealership">Dealership</option>
                                <option value="San Diego Airport">San Diego Airport</option>
                            </select>
                        </div>

                        <div className="position-relative wrapper pb-1">
                            <label htmlFor="" className="position-absolute start-0 ps-5">Date Drop-off</label>
                            <input class="sep form-control form-control-lg input ps-5" type="date" placeholder="Drop-off date" onChange={e => setInfo({...info, dOffDate: e.target.value})}/>
                        </div>

                        <div className="wrapper pb-1">
                            <div className="icon">
                                <FontAwesomeIcon icon={faClock} />
                            </div>
                            <select class="sep form-select form-select-lg input ps-5" aria-label="Default select example" id="floatingInput" onChange={e => setInfo({...info, dOffTime: e.target.value})}>
                                <option selected disabled value="">Time Drop-off</option>
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
                        </div>
                    
                        <Link className="btn btn-success sep p-3" to="/catalog" onClick={Search}>Search</Link>
                        {/* <button className="btn btn-sucess sep p-3 position-relative" >Search</button> We have to implement the validation*/} 

                    </div>
                    
                </div>

            </div>
                
        </Form>

    );
}

export default Home