import { useState } from "react";
import { toast } from "react-toastify";

import { Order } from "../../types/Order";
import { api } from "../../utils/api";
import { OrderModal } from "../Modal";
import { Board, OrdersContainer } from "./styles";

interface OrderBoardProps {
  icon: string;
  title: string;
  orders: Order[];
  onCancelOrder: (orderId: string) => void;
  onChangeOrderStatus: (orderId: string, status: Order["status"]) => void;
}

export function OrderBoard({
  icon,
  title,
  orders,
  onCancelOrder,
  onChangeOrderStatus,
}: OrderBoardProps) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  function handleOpenModal(order: Order) {
    setIsModalVisible(true);
    setSelectedOrder(order);
  }

  function handleCloseModal() {
    setIsModalVisible(false);
    setSelectedOrder(null);
  }

  async function handleChangeOrderStatus() {
    setIsLoading(true);

    const status =
      selectedOrder?.status === "WAITING" ? "IN_PRODUCTION" : "DONE";
    await api.patch(`/orders/${selectedOrder!._id}`, { status });

    toast.success(
      `O pedido da mesa ${selectedOrder!.table} teve o status alterado!`
    );
    onChangeOrderStatus(selectedOrder!._id, status);
    setIsLoading(false);
    setIsModalVisible(false);
  }

  async function handleCancelOrder() {
    setIsLoading(true);

    await new Promise((resolve) => setTimeout(resolve, 500));
    await api.delete(`/orders/${selectedOrder!._id}`);
    toast.success(`O pedido da mesa ${selectedOrder!.table} foi cancelado!`);

    onCancelOrder(selectedOrder!._id);
    setIsLoading(false);
    setIsModalVisible(false);
  }

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
              <button
                type="button"
                key={order._id}
                onClick={() => handleOpenModal(order)}
              >
                <strong>Mesa {order.table}</strong>
                <span>{order.products.length} items</span>
              </button>
            );
          })}
        </OrdersContainer>
      )}

      <OrderModal
        isVisible={isModalVisible}
        order={selectedOrder}
        onClose={handleCloseModal}
        onCancelOrder={handleCancelOrder}
        onChangeOrderStatus={handleChangeOrderStatus}
        isLoading={isLoading}
      />
    </Board>
  );
}
