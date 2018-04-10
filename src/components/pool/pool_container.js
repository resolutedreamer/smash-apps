import { connect } from 'react-redux';
import Pool from './pool';
import { addItemToPool } from '../../actions/pool_actions';

// const mapStateToProps = state => ({

// })

const mapDispatchToProps = dispatch => ({
  addItemToPool: item => dispatch(addItemToPool(item))
})

export default connect(
  null,
  mapDispatchToProps
)(Pool);