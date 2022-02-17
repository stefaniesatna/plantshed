import '../styles/Checkout.css';

const Checkout = () => {
  return (
    <div style={{ backgroundColor: "pink" }}>
      <h1>Your Basket</h1>
      <form>
        <div>
          <label>First Name</label>
          <input type="text" className="firstName" id="firstName" name="firstName" required />
          <label>Last Name</label>
          <input type="text"  className="lastName" id="lastName" name="lastName" required />
        </div>
      <CheckoutButton text="Continue to Shipping"/>
      </form>
    </div>
  );
};

const CheckoutButton = (props) => (
    <button className="checkout-btn" type="button">{props.text}</button>
)

export default Checkout;
