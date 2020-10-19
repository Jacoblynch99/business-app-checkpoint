import { connect } from 'react-redux'
import Login from '../components/Login'
import { login } from '../redux/actions'

const mapStateToProps = (state) => {
    return {
        loggedIn: state.loggedIn,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        login: (bool) => dispatch(login(bool)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
