
function Checkout() {
    return (
        <div className="checkout">
            <div className="vehical-image">
                {/* add image here of selected product */}
            </div>

            <div className="vehical-description">
                {/* add selected product description and name here */}
            </div>

            <div className="order-info">


                <div className="price-box">
                    <div className="outer-layer">
                        <h3>Pay on Pickup</h3>
                    </div>

                    <div className="price-breakdown">
                        {/* add breakdown of product price including all fees */}
                    </div>

                    <div className="outer-layer">
                        <h3>Total Price:</h3> 
                        {/* add total price of order */}
                    </div>

                </div>


                <div className="email">
                    {/* add email text box here */}
                </div>


                <div className="button">
                    {/* add place reservation button here */}
                </div>

            </div>
        </div>

    )
}