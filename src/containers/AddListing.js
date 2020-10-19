import { connect } from 'react-redux'
import AddListing from '../components/AddListing'
import { addPlace } from '../redux/actions'

const mapStateToProps = (state) => {
    return {
        places: state.places,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPlace: (listing) => dispatch(addPlace(listing)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddListing)
