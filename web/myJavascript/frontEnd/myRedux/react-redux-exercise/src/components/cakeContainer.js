import { connect } from "react-redux";
import { buyCake } from "../cake/cakeAction";

// getting Redux state and dispatch as React props
const CakeContainer = ({ numberOfCakes, buyCake }) => {
    return ( 
        <div>
            <h2>Number of cakes {numberOfCakes} </h2>
            <button onClick={buyCake}>Buy Cake</button>
        </div>
     );
}

// mapping Redux state to React(props) App
const mapStateToProps = state => {
    return { 
        numberOfCakes : state.cake.numberOfCakes
    }
}

// mapping Redux dispatch state to React(props) App
const mapDispatchToProps = dispatch => {
    return {
        buyCake : () => dispatch(buyCake())
    }
}

// connect(redux state, redux dispatch)(react component)
export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);