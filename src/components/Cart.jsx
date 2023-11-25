import { useProductSelector } from "./hooks/useProductSelector";
import Cards from "./Cards";
import { remove } from "./store/cartReducer";

function Cart() {
  let count = 0;
  const { cart } = useProductSelector();

  return (
    <>
      <div className="container d-flex justify-content-center gap-5 mt-5 ">
        {cart.length === 0 ? (
          <h1 className="text-center">В корзине ничего нет.</h1>
        ) : (
          cart.map((cards) => {
            count += cards.price;
            return (
              <Cards
                cards={cards}
                handleClick={remove}
                name="remove from cart"
              />
            );
          })
        )}
      </div>
      {cart.length > 0 ? <h2 className="text-end me-5">Total: {count} c.</h2> : ""}
    </>
  );
}

export default Cart;
