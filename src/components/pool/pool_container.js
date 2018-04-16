import { connect } from 'react-redux';
import Pool from './pool';
import { addItemToPool } from '../../actions/pool_actions';

const mapStateToProps = state => ({
  items: state.entities.pool
})

const mapDispatchToProps = dispatch => ({
  addItemToPool: item => dispatch(addItemToPool(item))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Pool);