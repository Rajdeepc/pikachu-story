import { createSelector } from 'reselect'

const getPikachuList = (state) => state.PikaChuReducer.collection;
const getSearchPikachuValue = (state) => state.PikachuSearchReducer.searchValue;

export const getFilteredSearchPikachu = createSelector(
    [getPikachuList,getSearchPikachuValue],
    (collection,searchValue) => {
        if(searchValue !== null){
            return Object.keys(collection).filter(searchValue => {
                const pokemon = collection[searchValue]
                return pokemon.name.includes(searchValue)
              })
        } else {
            return collection
        }
    }
)