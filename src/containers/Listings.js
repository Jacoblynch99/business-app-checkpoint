import { connect } from 'react-redux'
import Listings from '../components/Listings'
import { removePlace } from '../redux/actions'

const mapStateToProps = (state) => {
    return {
        places: state.places,
        loggedIn: state.loggedIn,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        removePlace: (idx) => dispatch(removePlace(idx)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Listings)
