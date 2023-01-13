import { Card, CardTitle, CardSubtitle, CardBody, Button } from "reactstrap";
import { cartContext } from "../Context";
import { useContext } from "react";
const Product = ({ prod }) => {
  const { cart, setCart } = useContext(cartContext);

  const removeFromCart = (prod) => {
    setCart(cart.filter((c) => c.productName !== prod.productName));
    console.log("Cart after remove ", cart);
  };

  const addToCart = (prod) => {
    console.log(prod);
    setCart([...cart, prod]);
  };

  return (
    <div
      style={{
        width: "33%",
        marginRight: "2px",
        marginBottom: "2px",
      }}
    >
      <Card
        color="warning"
        style={{
          height: "27vmax",
          marginRight: "2vmax",
          marginBottom: "0.1vmax",
          marginTop: "2vmax",
          width: "20vw",
          border: "0.1vmax solid black",
        }}
      >
        <img alt="Sample" src={prod.image} />
        <CardBody>
          <CardTitle tag="h5">{prod.productName}</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            {prod.price}
          </CardSubtitle>

          {cart.includes(prod) ? (
            <Button
              style={{ marginTop: "0.5vmax" }}
              onClick={() => removeFromCart(prod)}
            >
              Remove from cart
            </Button>
          ) : (
            <Button onClick={() => addToCart(prod)}>Add to cart</Button>
          )}
        </CardBody>
      </Card>
    </div>
  );
};

export default Product;
