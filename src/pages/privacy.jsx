import 'bootstrap/dist/css/bootstrap.min.css'
import { Accordion } from 'react-bootstrap';
import './privacy.css';

function Privacy(){
    return(
        <div className='accordion container privacy'>
            <h1>Privacy Policy</h1>

            <Accordion>

            <Accordion.Item eventKey='0' className='item'>
                <Accordion.Header>Types of information Collected</Accordion.Header>
                <Accordion.Body>
                    <p><b>We may collect the following types of information from you:</b></p>
                    <p><b>Personal Information:</b> When you make a reservation or interact with our website, we may collect personal information such as your name, email address, phone number, billing address, and payment details. This information is necessary for processing reservations, contacting you regarding your bookings, and facilitating your rental car experience.</p>
                    <p><b>Non-Personal Information:</b> We also collect non-personal information, including your IP address, browser type, operating system, and browsing behavior on our website. This information helps us improve our website functionality, understand user preferences, and optimize our services.</p>
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey='1' className='item'>
                <Accordion.Header>Information Collection Methods</Accordion.Header>
                <Accordion.Body>
                    <p><b>We collect information from you through various methods, including:</b></p>
                    <p><b>Online Forms:</b> When you fill out reservation forms, contact forms, or subscribe to our newsletters, we collect the information you provide.</p>
                    <p><b>Cookies and Tracking Technologies:</b> We use cookies and similar tracking technologies to enhance your browsing experience, personalize content, and analyze website traffic. Cookies may also be used by our partners and third-party service providers to deliver targeted advertisements. You have the option to disable cookies through your browser settings, but please note that certain features of our website may not function properly as a result.</p>
                    <p><b>Third-Party Analytics:</b> We may utilize third-party analytics tools to gather information about website usage and performance. These tools collect data such as your IP address, browser information, and website interactions. The data collected is used to analyze trends, administer the site, and track user demographics.</p>
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey='2' className='item'>
                <Accordion.Header>Purpose of Data Collection</Accordion.Header>
                <Accordion.Body>
                    <p><b>We collect and use your information for the following purposes:</b></p>
                    <p><b>Reservation Processing:</b> To process and confirm your rental car reservations and communicate with you regarding your bookings.</p>
                    <p><b>Customer Service:</b> To provide you with customer support, respond to inquiries, and address any issues or concerns you may have.</p>
                    <p><b>Personalization:</b> To personalize your experience on our website, recommend relevant offers, and tailor our services to your preferences.</p>
                    <p><b>Marketing and Promotions:</b> To send you promotional materials, newsletters, and special offers related to our rental car services. You can unsubscribe from these communications at any time.</p>
                    <p><b>Legal Compliance:</b> To comply with applicable laws, regulations, and legal processes.</p>
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey='3' className='item'>
                <Accordion.Header>Data Usage and Sharing</Accordion.Header>
                <Accordion.Body>
                    <p>We respect your privacy and will not sell, rent, or share your personal information with third parties for their marketing purposes without your explicit consent. However, we may share your information with trusted third-party service providers and business partners who assist us in operating our website, processing payments, managing reservations, or conducting business activities on our behalf. These entities are obligated to maintain the confidentiality and security of your information.</p>
                    <p>We may also disclose your information if required by law, government authorities, or to protect our legal rights, safety, or property.</p>
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey='4' className='item'>
                <Accordion.Header>Data security</Accordion.Header>
                <Accordion.Body>
                    <p>We take the security of your personal information seriously. We implement appropriate technical, administrative, and physical safeguards to protect against unauthorized access, disclosure, alteration, or destruction of your data. However, no method of transmission over the internet or electronic storage is completely secure. Therefore, while we strive to protect your information, we cannot guarantee its absolute security.</p>
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey='5' className='item'>
                <Accordion.Header>Data retention</Accordion.Header>
                <Accordion.Body>
                    <p>We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. When your data is no longer needed, we will securely dispose of it in accordance with applicable laws and regulations.</p>
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey='6' className='item'>
                <Accordion.Header>User rights</Accordion.Header>
                <Accordion.Body>
                    <p>You have the right to access, update, correct, or delete your personal information. If you would like to exercise any of these rights, or if you have any questions or concerns about our privacy practices, please contact us using the information provided below.</p>
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey='7' className='item'>
                <Accordion.Header>Cookies and Tracking Technologies</Accordion.Header>
                <Accordion.Body>
                    <p>Our website uses cookies and similar tracking technologies to enhance your browsing experience. You can manage your cookie preferences through your browser settings or opt-out of targeted advertising by visiting the Digital Advertising Alliance's opt-out page (http://www.aboutads.info/choices) or the Network Advertising Initiative's opt-out page (http://www.networkadvertising.org/choices).</p>
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey='8' className='item'>
                <Accordion.Header>Links to Third-Party Websites</Accordion.Header>
                <Accordion.Body>
                    <p>Our website may contain links to third-party websites or services. This Privacy Policy applies solely to our website, and we have no control over the privacy practices or content of these linked sites. We encourage you to review the privacy policies of any third-party sites you visit.</p>
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey='9' className='item'>
                <Accordion.Header>Updates to the Privacy Policy</Accordion.Header>
                <Accordion.Body>
                    <p>We may update this Privacy Policy periodically to reflect changes in our information practices. We will notify you of any material changes by posting the updated policy on our website with a revised "Effective Date" at the top of the page. We encourage you to review this Privacy Policy regularly for any updates.</p>
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey='10' className='item'>
                <Accordion.Header>Contact Information</Accordion.Header>
                <Accordion.Body>
                    <p>If you have any questions, comments, or concerns about this Privacy Policy or our privacy practices, please contact us at:</p>
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

export default Privacy;