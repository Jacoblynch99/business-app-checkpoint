import { connect } from 'react-redux'
import Restaurant from '../components/Restaurant'

const mapStateToProps = (state) => {
    return {
        places: state.places,
    }
}

export default connect(mapStateToProps)(Restaurant)
