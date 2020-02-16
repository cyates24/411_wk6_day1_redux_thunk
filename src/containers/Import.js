// fill out this container
import { connect } from 'react-redux'
import Import from '../components/Import'
import {fetchMakes, deleteMake} from '../redux/actions'


const mapStateToProps = (state) => {
    return {
        makes: state.makes
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
      fetchMakes: (makes) => dispatch(fetchMakes(makes)),
      deleteMake: (make) => dispatch(deleteMake(make))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Import)
