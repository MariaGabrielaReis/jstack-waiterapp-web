import { useEffect, useState } from "react";
import { Order } from "../../types/Order";
import { api } from "../../utils/api";
import { OrderBoard } from "../OrdersBoard";
import { Container } from "./styles";

export function Orders() {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    api.get("/orders").then(({ data }) => setOrders(data));
  }, []);

  const waiting = orders.filter((order) => order.status === "WAITING");
  const inProduction = orders.filter(
    (order) => order.status === "IN_PRODUCTION"
  );
  const done = orders.filter((order) => order.status === "DONE");

  return (
    <Container>
      <OrderBoard icon="🕑" title="Fila de espera" orders={waiting} />
      <OrderBoard icon="👨‍🍳" title="Em preparação" orders={inProduction} />
      <OrderBoard icon="✅" title="Pronto" orders={done} />
    </Container>
  );
}
