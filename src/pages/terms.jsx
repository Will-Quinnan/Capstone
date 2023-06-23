import 'bootstrap/dist/css/bootstrap.min.css'
import { Accordion } from 'react-bootstrap';
import './terms.css';

function Terms(){
    return(
        <div className='container terms'>
            <h1>Terms of service</h1>

            <Accordion>

                <Accordion.Item eventKey='0' className='item'>
                    <Accordion.Header>Acceptance of Terms</Accordion.Header>
                    <Accordion.Body>
                        <p>By using our website, you acknowledge that you have read, understood, and agree to comply with these Terms. If you do not agree with any part of these Terms, please refrain from using our website.</p>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey='1' className='item'>
                    <Accordion.Header>Eligibility</Accordion.Header>
                    <Accordion.Body>
                        <p>You must be at least 18 years old and possess the legal authority to enter into a binding agreement to use our website. By using our website, you represent and warrant that you meet these eligibility requirements.</p>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey='2' className='item'>
                    <Accordion.Header>User Account and Information</Accordion.Header>
                    <Accordion.Body>
                        <p>In order to access certain features of our website, you may be required to create a user account. You are responsible for maintaining the confidentiality of your account information, including your username and password. You agree to provide accurate, current, and complete information during the registration process. You are solely responsible for all activities that occur under your account.</p>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey='3' className='item'>
                    <Accordion.Header>Rental Car Reservations</Accordion.Header>
                    <Accordion.Body>
                        <p>Our website allows you to make reservations for rental cars. By making a reservation, you agree to provide accurate, current, and complete information about yourself and the rental details. You are responsible for reviewing and complying with the rental terms and conditions provided by our rental car partners. We do not guarantee the availability of any specific vehicle or rental terms.</p>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey='4' className='item'>
                    <Accordion.Header>Prohibited Conduct</Accordion.Header>
                    <Accordion.Body>
                        <p><b>You agree not to:</b></p>
                        <p>-Use our website for any illegal, unauthorized, or prohibited purposes.</p>
                        <p>-Violate any applicable laws, regulations, or third-party rights.</p>
                        <p>-Modify, adapt, translate, or reverse engineer any part of our website.</p>
                        <p>-Interfere with or disrupt the operation of our website or servers.</p>
                        <p>-Use any automated means to access or collect data from our website.</p>
                        <p>-Transmit any viruses, malware, or other harmful code.</p>
                        <p>-Engage in any fraudulent or deceptive activities.</p>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey='5' className='item'>
                    <Accordion.Header>Intellectual Property Rights</Accordion.Header>
                    <Accordion.Body>
                        <p>Our website and its content, including text, graphics, logos, images, and software, are protected by copyright, trademark, and other intellectual property laws. You may not reproduce, distribute, modify, or create derivative works of any part of our website without our prior written consent.</p>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey='6' className='item'>
                    <Accordion.Header>Disclaimer of Warranties</Accordion.Header>
                    <Accordion.Body>
                        <p>Our website is provided on an "as is" and "as available" basis, without any warranties of any kind, express or implied. We do not warrant that our website will be uninterrupted, error-free, or free from viruses or other harmful components. We disclaim all warranties, including but not limited to the implied warranties of merchantability, fitness for a particular purpose, and non-infringement.</p>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey='7' className='item'>
                    <Accordion.Header>Limitation of Liability</Accordion.Header>
                    <Accordion.Body>
                        <p>In no event shall we be liable for any direct, indirect, incidental, special, consequential, or punitive damages arising out of or relating to your use of our website, even if we have been advised of the possibility of such damages. Our liability to you shall be limited to the extent permitted by applicable law.</p>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey='8' className='item'>
                    <Accordion.Header>Indemnification</Accordion.Header>
                    <Accordion.Body>
                        <p>You agree to indemnify, defend, and hold us harmless from and against any claims, losses, liabilities, damages, costs, and expenses, including reasonable attorneys' fees, arising out of or relating to your use of our website, your violation of these Terms, or your violation of any rights of a third party.</p>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey='9' className='item'>
                    <Accordion.Header>Third-Party Links</Accordion.Header>
                    <Accordion.Body>
                        <p>Our website may contain links to third-party websites or services that are not owned or controlled by us. We are not responsible for the content, privacy policies, or practices of any third-party sites. Your use of third-party websites is at your own risk.</p>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey='10' className='item'>
                    <Accordion.Header>Modification and Termination</Accordion.Header>
                    <Accordion.Body>
                        <p>We reserve the right to modify or terminate our website, features, or these Terms at any time, without prior notice. We may also suspend or terminate your access to our website if we believe you have violated these Terms or applicable laws.</p>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey='11' className='item'>
                    <Accordion.Header>Governing Law and Jurisdiction</Accordion.Header>
                    <Accordion.Body>
                        <p>These Terms shall be governed by and construed in accordance with the laws of [Jurisdiction]. Any dispute arising out of or relating to these Terms or your use of our website shall be subject to the exclusive jurisdiction of the courts located in [Jurisdiction].</p>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey='12' className='item'>
                    <Accordion.Header>Entire Agreement</Accordion.Header>
                    <Accordion.Body>
                        <p>These Terms constitute the entire agreement between you and [Company Name] regarding your use of our website and supersede all prior and contemporaneous agreements, representations, and understandings.</p>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey='13' className='item'>
                    <Accordion.Header>Contact Information</Accordion.Header>
                    <Accordion.Body>
                        <p>If you have any questions, comments, or concerns about these Terms, please contact us at:</p>
                        <p><b>Rentalcar.com</b></p>
                        <p><b>San Diego, California</b></p>
                        <p><b>rentalcar@gmail.com</b></p>
                        <p><b>(619)621-2121</b></p>
                    </Accordion.Body>
                </Accordion.Item>

            </Accordion>

        </div>
    );
}

export default Terms;