import { connect } from "react-redux";
import { buyIceCream } from "../iceCream/iceCreamActions";

// getting Redux state and dispatch as React props
const IceCreamContainer = ({ numberOfIceCream, buyIceCream }) => {
    return ( 
        <div>
            <h2>Number of icecream {numberOfIceCream} </h2>
            <button onClick={buyIceCream}>Buy icecream</button>
        </div>
     );
}

// mapping Redux state to React(props) App
const mapStateToProps = state => {
    return { 
        numberOfIceCream : state.iceCream.numberOfIceCream
    }
}

// mapping Redux dispatch state to React(props) App
const mapDispatchToProps = dispatch => {
    return {
        buyIceCream : () => dispatch(buyIceCream())
    }
}

// connect(redux state, redux dispatch)(react component)
export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer);