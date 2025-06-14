import { useCart } from "../contexts/CartContext";
import "./styles/ShoppingCartPage.css";
import { EmptyCartIcon } from "../components/CustomIcons";
import { ClearCartIcon } from "../components/CustomIcons";
import { UilTrashAlt } from "@iconscout/react-unicons";
import { UilWhatsapp } from "@iconscout/react-unicons";
import { InputNumber } from "antd";

export const ShoppingCartPage = () => {
  const { cartItems, removeFromCart, clearCart, setItemQty } = useCart();

  return (
    <div className="shopping-cart-page-container">
      <h2 className="shopping-cart-title">Carrito de compras</h2>

      <div className={`shopping-cart-content ${cartItems.length === 0 ? "empty" : ""}`}>
        {cartItems.length === 0 ? (
          <h3 className="cart-empty-message">
            <EmptyCartIcon color="var(--text-color-third)" /> El carrito está vacío
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
                    <div className="cart-page-item-qty">
                      Cantidad:
                      <InputNumber
                        min={1}
                        max={99}
                        value={item.quantity}
                        onChange={(value) => {
                          if (typeof value === "number") {
                            setItemQty(item.id, item.size ?? null, value);
                          }
                        }}
                        parser={(value) => value.replace(/[^\d]/g, "")}
                        formatter={(value) => `${value}`.replace(/[^\d]/g, "")}
                        onKeyDown={(e) => {
                          const allowedKeys = [
                            "Backspace",
                            "Tab",
                            "ArrowLeft",
                            "ArrowRight",
                            "Delete",
                            "Home",
                            "End",
                          ];

                          if (
                            !/[0-9]/.test(e.key) &&
                            !allowedKeys.includes(e.key)
                          ) {
                            e.preventDefault();
                          }
                        }}
                      />
                    </div>
                    <p className="cart-page-item-price">
                      Precio: Q{item.price}
                    </p>
                  </div>
                  <div className="cart-page-item-delete">
                    <button
                      className="cart-page-remove-item-btn"
                      onClick={() => removeFromCart(item.id, item.size)}
                    >
                      <UilTrashAlt size="24px" color="currentColor" />
                    </button>
                  </div>
                </li>
              ))}
            </ul>

            <div className="cart-page-buttons-container">
              <button className="clear-cart-btn" onClick={clearCart}>
                Vaciar carrito
                <ClearCartIcon />
              </button>
              <button className="whatsapp-order-btn">
                Realizar pedido
                <UilWhatsapp size="24" color="currentColor" />
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
