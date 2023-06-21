import 'bootstrap/dist/css/bootstrap.min.css'
import { Accordion } from 'react-bootstrap';
import './help.css'

function Help(){
    return(
        <div className='container help'>
            <h1>Help</h1>
            <p>Welcome to the Help page of Rentalcar.com, your go-to resource for assistance and support regarding our rental car services. We understand that navigating through the rental process or resolving any issues that may arise can sometimes be challenging. That's why we're here to provide you with the information and support you need to ensure a smooth and enjoyable rental experience.</p>

            <Accordion>

                <Accordion.Item eventKey='0' className='item'>
                    <Accordion.Header>Frequently Asked Questions (FAQs)</Accordion.Header>
                    <Accordion.Body>
                        <p>Our Frequently Asked Questions (FAQs) section addresses common queries and concerns related to renting a car from Rentalcar.com. We have compiled a list of questions and their corresponding answers to provide you with quick and comprehensive information. Please visit our FAQ page to find answers to commonly asked questions.</p>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey='1' className='item'>
                    <Accordion.Header>Reservation and Booking Assistance</Accordion.Header>
                    <Accordion.Body>
                        <p>f you need assistance with making a reservation or have questions about the booking process, our dedicated customer support team is available to help. Whether you're unsure about vehicle availability, rental terms, or pricing, we are here to guide you through the reservation process and provide the necessary information to make an informed decision.</p>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey='2' className='item'>
                    <Accordion.Header>Contacting Customer Support</Accordion.Header>
                    <Accordion.Body>
                        <p>For personalized assistance, please reach out to our customer support team. You can contact us via email, phone, or through the contact form on our website. Our knowledgeable and friendly support representatives will be happy to assist you with any inquiries, concerns, or issues you may have. We strive to provide timely responses and work towards resolving any problems to ensure your satisfaction.</p>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey='3' className='item'>
                    <Accordion.Header>Rental Policies and Terms</Accordion.Header>
                    <Accordion.Body>
                        <p>Understanding the rental policies and terms is essential for a smooth rental experience. Our website provides detailed information about our rental policies, including age requirements, driver's license validity, insurance coverage, fuel policy, mileage limitations, and more. Familiarizing yourself with these policies will help you make informed decisions and ensure compliance during your rental period.</p>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey='4' className='item'>
                    <Accordion.Header>Vehicle Features and Options</Accordion.Header>
                    <Accordion.Body>
                        <p>If you have specific preferences or requirements regarding vehicle features or options, our website provides details about the amenities available with each vehicle category. Whether you need a car with GPS navigation, child safety seats, or other specific features, you can review the options and select the vehicle that best suits your needs.</p>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey='5' className='item'>
                    <Accordion.Header>Feedback and Suggestions</Accordion.Header>
                    <Accordion.Body>
                        <p>We value your feedback and suggestions as they help us enhance our services and improve the rental experience for all our customers. If you have any feedback, suggestions, or ideas to share, we encourage you to contact us. Your input is important to us, and we appreciate your contribution to our ongoing efforts to provide the best possible rental car experience.</p>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey='6' className='item'>
                    <Accordion.Header>Emergency Assistance</Accordion.Header>
                    <Accordion.Body>
                        <p>In the event of an emergency or roadside assistance, please refer to the contact information provided in your rental agreement or on the rental vehicle. Our team is available to support you in case of unexpected situations or emergencies during your rental period.</p>
                        <p>We are dedicated to providing exceptional customer service and support. If you have any questions or require assistance, please don't hesitate to contact us. We are here to ensure that your rental car experience with Rentalcar.com is smooth, convenient, and enjoyable.</p>
                    </Accordion.Body>
                </Accordion.Item>

            </Accordion>

        </div>
    );
}

export default Help;