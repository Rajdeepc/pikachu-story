import { connect } from 'react-redux';
import PikaChuList from './PikachuListComponent';
import { getAllPikachu } from './pikachu.action';
import { getFilteredSearchPikachu } from '../../selectors/searchSelector';


const mapStateToProps = (state) => ({
    searchResults: getFilteredSearchPikachu(state)
})

export default connect(mapStateToProps, {
    getAllPikachu
})(PikaChuList)