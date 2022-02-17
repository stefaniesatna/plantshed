export default function Basket() {
  return (
    <div style={basketStyles.basket}>
      <p>3</p>
    </div>
  )
}

const basketStyles = {
  basket: {
    display: 'flex',
    alignContent: 'center',
    height: 20,
    width: 20,
  },
}
