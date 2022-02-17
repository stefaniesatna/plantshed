import "../styles/Checkout.css";

const Address = () => {
  return (
    <div className="checkout">
      <form className="checkout-container">
        <h1>Checkout</h1>
        <h3 className="heading-3">Shipping Information</h3>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Input label="First Name" type="text" name="first_name" />
          <Input label="Last Name" type="text" name="last_name" />
        </div>
        <Input label="Address" type="text" name="address" />
        <Input label="City" type="text" name="city" />
        <Input label="Post Code" type="text" name="post_code" />
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

export default Address;
