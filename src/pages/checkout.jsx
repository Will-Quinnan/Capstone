import './checkout.css';
import Product from '../components/product';


function Checkout() {


    return (
        <div className="checkout">
            <div className='product-box'>
                <div className="vehical-image">
                    {/* add image here of selected product */}
                    <p>img</p>
                </div>
            </div>

                <div className="vehical-description">
                    {/* add selected product description and name here */}
                    <p>import product</p>
                </div>

                <div className="order-info">


                <div className="price-box">
                    <div className="outer-layer">
                        <h3>Pay on Pickup</h3>
                    </div>

                    <div className="price-breakdown">
                        {/* add breakdown of product price including all fees */}
                        <p>fees</p>
                        <p>price of car</p>
                    </div>

                    <div className="outer-layer">
                        <h3>Total Price:</h3> 
                        {/* add total price of order */}
                    </div>

                </div>


                <div className="email">
                    <p>Email:</p><input type="text" />
                    {/* add email text box here */}
                </div>


                <div className="button">
                    <button>Place Order</button>
                    {/* add place reservation button here */}
                </div>

            </div>
        </div>

    )
}

export default Checkout;