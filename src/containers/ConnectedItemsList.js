import { connect } from 'react-redux';
import { clickItem } from '../actions';
import ItemsList from '../components/ItemsList';

const mapStateToProps = (state, ownProps) => {
    let itemsArray = Object.entries(state.items.byId);
    let itemsToDisplay = [];
    for (const element of itemsArray) {
        if (element[1].listId === ownProps.listId) {
            itemsToDisplay.push(element[1]);
        }
    }

    return { items: itemsToDisplay }
}

const mapDispatchToProps = dispatch => {
    console.log("In ConnectedItemsList mapDispatchToProps...")
    console.log(dispatch)
    
    return {
        clickItem: (id, listId) => dispatch(clickItem(id, listId))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ItemsList);
