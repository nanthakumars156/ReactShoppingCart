import Card from "./card";
import PropTypes from "prop-types";

export default function CardContainer({
  products = [],
  handleAddToCart = () => {},
  cart = [],
}) {
  function findCartStatus(product = {}) {
    return cart.some((d) => d.name == product.name);
  }
  return (
    <section className="container" id="products-container">
      <div className="container-fluid p-5">
        <div className="row">
          {products.map((data, index) => (
            <Card
              key={`${data.name}-${index}`}
              data={data}
              handleAddToCart={handleAddToCart}
              isAddedToCart={findCartStatus(data)}
              
            />
          ))}
        </div>
      </div>
    </section>
  );
}

CardContainer.propTypes = {
  products: PropTypes.array,
  handleAddToCart: PropTypes.func,
  cart: PropTypes.array,
};