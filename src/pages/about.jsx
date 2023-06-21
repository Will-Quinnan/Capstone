import 'bootstrap/dist/css/bootstrap.min.css'
import { Accordion } from 'react-bootstrap';
import './about.css';

function About(){
    return(
        <div className='container about'>
            <h1>About us</h1>
            <p>Welcome to Rentalcar.com, your trusted destination for rental car services. At Rentalcar.com, we are committed to providing exceptional car rental experiences to our valued customers. Whether you're traveling for business or leisure, we strive to meet your transportation needs with quality vehicles and excellent customer service.</p>

            <Accordion>

                <Accordion.Item eventKey='0' className='item'>
                    <Accordion.Header>Our mission</Accordion.Header>
                    <Accordion.Body>
                        <p>Our mission is to make your rental car experience seamless, convenient, and enjoyable. We aim to offer a wide range of well-maintained vehicles at competitive prices, ensuring that you have the perfect vehicle for your travel requirements. With a focus on customer satisfaction, we go above and beyond to deliver exceptional service and exceed your expectations.</p>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey='1' className='item'>
                    <Accordion.Header>Quality Vehicles</Accordion.Header>
                    <Accordion.Body>
                        <p>We understand the importance of a reliable and comfortable vehicle during your travels. That's why we maintain a diverse fleet of well-maintained cars that are regularly serviced and inspected for safety and performance. From compact cars for solo travelers to spacious SUVs for family adventures, our vehicles are designed to cater to your specific needs.</p>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey='2' className='item'>
                    <Accordion.Header>Convenience and Flexibility</Accordion.Header>
                    <Accordion.Body>
                        <p>We value your time and strive to make the rental process as convenient and flexible as possible. Our user-friendly website allows you to easily search for available vehicles, compare prices, and make reservations with just a few clicks. Whether you need a vehicle for a few hours or an extended period, we offer flexible rental options to accommodate your schedule.</p>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey='3' className='item'>
                    <Accordion.Header>Exceptional Customer Service</Accordion.Header>
                    <Accordion.Body>
                        <p>At Rentalcar.com, our dedicated team is committed to providing exceptional customer service. We believe in building long-lasting relationships with our customers by ensuring their satisfaction at every step. Our knowledgeable staff is available to assist you with any inquiries, provide personalized recommendations, and address any concerns you may have.</p>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey='4' className='item'>
                    <Accordion.Header>Competitive Pricing and Transparency</Accordion.Header>
                    <Accordion.Body>
                        <p>We understand the importance of budget-friendly options when it comes to rental cars. That's why we strive to offer competitive pricing without compromising on the quality of our vehicles or services. Our pricing is transparent, with no hidden fees or surprises. What you see is what you get, allowing you to plan your travel expenses with confidence.</p>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey='5' className='item'>
                    <Accordion.Header>Community Involvement</Accordion.Header>
                    <Accordion.Body>
                        <p>At Rentalcar.com, we believe in giving back to the community. We actively participate in local initiatives and charitable programs that make a positive impact. By choosing Rentalcar.com, you contribute to our efforts to support and strengthen our community.</p>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey='6' className='item'>
                    <Accordion.Header>Contact Us</Accordion.Header>
                    <Accordion.Body>
                        <p>We value your feedback and are always here to assist you. If you have any questions, comments, or feedback about our rental car services, please do not hesitate to contact our friendly customer support team. We are available via email, phone, or through our website's contact form.</p>
                    </Accordion.Body>
                </Accordion.Item>

            </Accordion>

        </div>
    );
}

export default About;