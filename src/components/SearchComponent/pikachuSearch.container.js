import { connect } from 'react-redux';
import PikachuSearchComponent from './PikachuSearchComponent';
import { searchedPikachuList } from './pikachu.action';


const mapStateToProps = (state) => ({
    PikachuSearchReducerState: PikachuSearchReducer.state
})

export default connect(mapStateToProps, {
    searchedPikachuList
})(PikachuSearchComponent)