// Write your code here
import CartContext from '../../context/CartContext'
import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      let totalAmount = 0
      cartList.forEach(item => {
        totalAmount += item.price * item.quantity
      })

      return (
        <div className="totalTag">
          <div className="tag">
            <h1>Order Total: {totalAmount}/- </h1>
            <p>{cartList.length} items in cart</p>
            <button type="button">CheckOut</button>
          </div>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
