import { Order } from "../../types/Order";
import { OrderBoard } from "../OrdersBoard";
import { Container } from "./styles";

const orders: Order[] = [
  {
    _id: "63c546698bea0b10fb92b491",
    table: "21",
    status: "WAITING",
    products: [
      {
        _id: "63c01fd146efde89e221d4b6",
        product: {
          name: "Marguerita",
          imagePath: "1673535441710-marguerita.png",
          price: 46,
        },
        quantity: 2,
      },
      {
        product: {
          name: "Cerveja",
          imagePath: "1673874540258-cerveja.png",
          price: 4.75,
        },
        quantity: 4,
        _id: "63c54c6c9ca5d97f9173115d",
      },
    ],
  },
];

export function Orders() {
  return (
    <Container>
      <OrderBoard icon="🕑" title="Fila de espera" orders={orders} />
      <OrderBoard icon="👨‍🍳" title="Em preparação" orders={[]} />
      <OrderBoard icon="✅" title="Pronto" orders={[]} />
    </Container>
  );
}
