import { connect } from 'react-redux';
import { showPikaChuDetails } from './pikachudetails.action';
import PikachuItemDetailsComponent from './PikachuItemDetailsComponent';


const mapStateToProps = (state) => ({
    pikachuDetailsState: state.PikaChuDetailsReducer
})

export default connect(mapStateToProps, {
    showPikaChuDetails
})(PikachuItemDetailsComponent)