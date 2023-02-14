import { Overlay, Container, OrderDetails } from "./styles";
import closeIcon from "../../assets/images/close-icon.svg";

interface OrderModalProps {
  isVisible: boolean;
}

export function OrderModal({ isVisible }: OrderModalProps) {
  if (!isVisible) return null;

  return (
    <Overlay>
      <Container>
        <header>
          <strong>Mesa 2</strong>
          <button type="button">
            <img src={closeIcon} alt="Ícone para fechar" />
          </button>
        </header>

        <div className="status-container">
          <small>Status do Pedido</small>
          <div>
            <span>🕑</span>
            <strong>Fila de espera</strong>
          </div>
        </div>

        <OrderDetails>
          <strong>Items</strong>
        </OrderDetails>
      </Container>
    </Overlay>
  );
}
