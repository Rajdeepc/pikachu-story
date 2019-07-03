import { connect } from 'react-redux';
import PikaChuList from './PikachuListComponent';
import { getAllPikachu } from './pikachu.action';
import { searchedPikachuList } from '../SearchComponent/pikachuSearch.action';
import { getFilteredSearchPikachu } from '../../selectors/searchSelector';


const mapStateToProps = (state) => ({
    searchPikachuResults: getFilteredSearchPikachu(state)
})

export default connect(mapStateToProps, {
    getAllPikachu,
    searchedPikachuList
})(PikaChuList)