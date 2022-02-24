import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

const Shipping = () => {
  return (
    <div className="checkout">
      <form className="checkout-container">
        <h1>Checkout</h1>
        <h3 className="heading-3">Shipping Information</h3>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
        <FormControlLabel control={<Checkbox defaultChecked />} label="UPS Next Day Shipping" />
        $4.95
        <FormControlLabel control={<Checkbox />} label="UPS 3-5 Days" />
        $2.95
        </div>
      </form>
    </div>
  );
};

export default Shipping;
