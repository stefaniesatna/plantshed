import "../styles/Checkout.css";

const Checkout = () => {
  const visaImage = "https://seeklogo.com/images/V/visa-logo-6F4057663D-seeklogo.com.png";

  return (
    <div className="checkout">
      <h1>Checkout</h1>
      <form className="checkout-container">
        <h3 className="heading-3">Payment Details</h3>
        <Input label="Cardholder's Name" type="text" name="name" />
        <Input
          label="Card Number"
          type="number"
          name="card_number"
          imgSrc={visaImage}
        />
        <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
            <Input label="Expiration Date" type="month" name="exp_date" />
            <Input label="CVV" type="number" name="cvv" />
        </div>
        <button className="checkout-btn" type="button">
       {"Continue to Shipping"}
      </button>      
      </form>
    </div>
  );
};

const Input = (props) => (
  <div className="input">
    <label>{props.label}</label>
    <div className="input-field">
      <input type={props.type} name={props.name} />
      <img src={props.imgSrc} />
    </div>
  </div>
);

export default Checkout;
