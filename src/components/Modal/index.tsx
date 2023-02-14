import { Overlay, Container, OrderDetails } from "./styles";
import closeIcon from "../../assets/images/close-icon.svg";
import { Order } from "../../types/Order";

interface OrderModalProps {
  isVisible: boolean;
  order: Order | null;
}

export function OrderModal({ isVisible, order }: OrderModalProps) {
  if (!isVisible || !order) return null;

  return (
    <Overlay>
      <Container>
        <header>
          <strong>Mesa {order.table}</strong>
          <button type="button">
            <img src={closeIcon} alt="Ícone para fechar" />
          </button>
        </header>

        <div className="status-container">
          <small>Status do Pedido</small>
          <div>
            <span>
              {order.status === "WAITING" && "🕑"}
              {order.status === "IN_PRODUCTION" && "👨‍🍳"}
              {order.status === "DONE" && "✅"}
            </span>
            <strong>
              {order.status === "WAITING" && "Fila de espera"}
              {order.status === "IN_PRODUCTION" && "Em preparação"}
              {order.status === "DONE" && "Pronto!"}
            </strong>
          </div>
        </div>

        <OrderDetails>
          <strong>Items</strong>
        </OrderDetails>
      </Container>
    </Overlay>
  );
}
