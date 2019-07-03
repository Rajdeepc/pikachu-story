import { createSelector } from 'reselect'

const getPikachuList = (state) => state.PikaChuReducer.collection;
const getSearchPikachuValue = (state) => state.PikachuSearchReducer.searchValue;

export const getFilteredSearchPikachu = createSelector(
    [getPikachuList,getSearchPikachuValue],
    (collection,searchValue) => {
        if(searchValue !== null){
            return collection.filter(o => o.name.includes(searchValue))

        } else {
            return collection
        }
    }
)