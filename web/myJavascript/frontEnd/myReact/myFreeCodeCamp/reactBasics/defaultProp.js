// You can set default prop in React. React assigns default props if the props are 
// undefined. When null passed, it will remain null.
const ShoppingCart = (props) => {
    return (
      <div>
        <h1>Shopping Cart Component</h1>
      </div>
    )
  };
  // Change code below this line

  ShoppingCart.defaultProps = { items: 0 } // items will be 0 unless specified