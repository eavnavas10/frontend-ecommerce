import { useCart } from "../contexts/CartContext";
import { useState } from "react";
import { EmptyCartIcon } from "../components/CustomIcons";
import { ClearCartIcon } from "../components/CustomIcons";
import { UilTrashAlt } from "@iconscout/react-unicons";
import { UilWhatsapp } from "@iconscout/react-unicons";
import { Modal, Input,InputNumber, Radio, Form } from "antd";
import "./styles/ShoppingCartPage.css";

export const ShoppingCartPage = () => {
  const { cartItems, removeFromCart, clearCart, setItemQty } = useCart();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [entrega, setEntrega] = useState("Tienda");
  const [form] = Form.useForm();

  const showModal = () => setIsModalOpen(true);
  const handleCancel = () => setIsModalOpen(false);
  const handleOk = async () => {
  try {
    const values = await form.validateFields();

    const {
      nombre,
      email,
      telefono,
      pago,
      entrega,
      direccion,
    } = values;

    const carritoTexto = cartItems
      .map(
        (item, i) =>
          `${i + 1}. ${item.title}${item.size ? ` (Talla: ${item.size})` : ""} \nCantidad: ${item.quantity} - Q${item.price*item.quantity}`
      )
      .join("\n");

    const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

    let mensaje = `¡Hola! Estoy interesado/a en realizar un pedido... \n\n`;
    mensaje += `Nombre: ${nombre}\n`;
    mensaje += `Correo: ${email || "No proporcionado"}\n`;
    mensaje += `Teléfono: ${telefono}\n`;
    mensaje += `Método de pago: ${pago}\n`;
    mensaje += `Entrega: ${entrega}\n`;
    if (entrega === "Domicilio") {
      mensaje += `Dirección: ${direccion}\n`;
    }
    mensaje += `\nProductos:\n${carritoTexto}\n`;
    mensaje += `\nTotal: Q${total.toFixed(2)}`;

    const encoded = encodeURIComponent(mensaje);
    const url = `https://wa.me/33347867?text=${encoded}`;

    window.open(url, "_blank");

    setIsModalOpen(false);
  } catch (errorInfo) {
    console.log("Error de validación:", errorInfo);
  }
};


  return (
    <div className="shopping-cart-page-container">
      <h2 className="shopping-cart-title">Carrito de compras</h2>

      <div
        className={`shopping-cart-content ${
          cartItems.length === 0 ? "empty" : ""
        }`}
      >
        {cartItems.length === 0 ? (
          <h3 className="cart-empty-message">
            <EmptyCartIcon color="var(--text-color-third)" /> El carrito está
            vacío
          </h3>
        ) : (
          <>
            <ul className="cart-items-list">
              {cartItems.map((item, idx) => (
                <li key={idx} className="cart-item">
                  <img className="cart-item-image" src={item.image} alt={item.title} />
                  <div className="cart-item-details">
                    <p className="cart-item-title">{item.title}</p>
                    {item.size && <p className="cart-item-size">Talla: {item.size}</p>}
                    <div className="cart-item-qty">
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
                    <p className="cart-item-price">
                      Precio: Q{item.price*item.quantity}
                    </p>
                  </div>
                  <div className="cart-item-delete-container">
                    <button
                      className="cart-item-delete-btn"
                      onClick={() => removeFromCart(item.id, item.size)}
                    >
                      <UilTrashAlt size="24px" color="currentColor" />
                    </button>
                  </div>
                </li>
              ))}
            </ul>

            <div className="cart-page-buttons-container">
              <button className="cart-page-clear-btn" onClick={clearCart}>
                <div className="cart-page-clear-btn-txt">
                  <p>Vaciar carrito</p>
                  <ClearCartIcon size="26" color="currentColor" />
                </div>
              </button>
              <button className="cart-page-whatsapp-btn" onClick={showModal}>
                <div className="cart-page-whatsapp-btn-txt">
                  <p>Realizar pedido</p>
                  <UilWhatsapp size="24" color="currentColor" />
                </div>
              </button>
            </div>
            <Modal
              title="Confirmar pedido por WhatsApp"
              open={isModalOpen}
              onOk={handleOk}
              onCancel={handleCancel}
              okText="Enviar pedido"
              cancelText="Cancelar"
            >
              <Form form={form} layout="vertical">
                <Form.Item
                  label="Nombre completo"
                  name="nombre"
                  rules={[{ required: true }]}
                >
                  <Input placeholder="Ej: Juan Pérez" />
                </Form.Item>

                <Form.Item
                  label="Correo electrónico"
                  name="email"
                  rules={[{ type: "email" }]}
                >
                  <Input placeholder="Ej: correo@gmail.com" />
                </Form.Item>

                <Form.Item
                  label="Número telefónico"
                  name="telefono"
                  rules={[{ required: true }]}
                >
                  <Input placeholder="Ej: 3334 7867" />
                </Form.Item>

                <Form.Item
                  label="Método de pago"
                  name="pago"
                  initialValue="Efectivo"
                >
                  <Radio.Group>
                    <Radio value="Efectivo">Efectivo</Radio>
                    <Radio value="Transferencia">Transferencia</Radio>
                  </Radio.Group>
                </Form.Item>

                <Form.Item label="Entrega" name="entrega" initialValue="Tienda">
                  <Radio.Group onChange={(e) => setEntrega(e.target.value)}>
                    <Radio value="Tienda">Recoger en tienda</Radio>
                    <Radio value="Domicilio">Envío a domicilio</Radio>
                  </Radio.Group>
                </Form.Item>

                {entrega === "Domicilio" && (
                  <Form.Item
                    label="Dirección de entrega"
                    name="direccion"
                    rules={[{ required: true }]}
                  >
                    <Input.TextArea placeholder="Escribe la dirección completa" />
                  </Form.Item>
                )}
              </Form>
            </Modal>
          </>
        )}
      </div>
    </div>
  );
};
