import { connect } from 'react-redux';
import { addItem } from '../actions';
import Footer from '../components/Footer';

const mapStateToProps = (state, ownProps) => {
    return {}
}

const mapDispatchToProps = dispatch => {
    console.log("In ConnectedFooter mapDispatchToProps...")
    console.log(dispatch)
    
    return {
        addItem: () => dispatch(addItem())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Footer);