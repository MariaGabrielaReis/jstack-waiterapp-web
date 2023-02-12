import { Order } from "../../types/Order";
import { Board, OrdersContainer } from "./styles";

interface OrderBoardProps {
  icon: string;
  title: string;
  orders: Order[];
}

export function OrderBoard({ icon, title, orders }: OrderBoardProps) {
  return (
    <Board>
      <header>
        <span>{icon}</span>
        <strong>{title}</strong>
        <span>({orders.length})</span>
      </header>

      {orders.length > 0 && (
        <OrdersContainer>
          {orders.map((order) => {
            return (
              <button type="button" key={order._id}>
                <strong>Mesa {order.table}</strong>
                <span>{order.products.length} items</span>
              </button>
            );
          })}
        </OrdersContainer>
      )}
    </Board>
  );
}
