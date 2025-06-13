import { useCart } from "../contexts/CartContext";
import "./styles/ShoppingCartPage.css"
import { EmptyCartIcon } from "../components/CustomIcons";

export const ShoppingCartPage = () => {
  const { cartItems, removeFromCart, clearCart } = useCart();

  return (
    <div className="shopping-cart-page-container">
      <h2 className="shopping-cart-title">Tu carrito</h2>

      {cartItems.length === 0 ? (
        <h3 className="cart-empty-message">
          <EmptyCartIcon color="var(--text-color-third)"/> El carrito está vacío
          </h3>
      ) : (
        <>
          <ul className="cart-items-list">
            {cartItems.map((item, idx) => (
              <li key={idx} className="cart-item">
                <img src={item.image} alt={item.title} />
                <div className="cart-item-details">
                  <p className="product-title">{item.title}</p>                  
                  {item.size && <p>Talla: {item.size}</p>}
                  <p>Cantidad: {item.quantity}</p>
                  <p>Precio: Q{item.price}</p>
                </div>
                <div className="cart-item-controls">
                  <button
                    className="remove-item-btn"
                    onClick={() => removeFromCart(item.id, item.size)}
                  >
                    Quitar
                  </button>
                </div>
              </li>
            ))}
          </ul>

          <button className="clear-cart-btn" onClick={clearCart}>
            Vaciar carrito
          </button>
        </>
      )}
    </div>
  );
};
