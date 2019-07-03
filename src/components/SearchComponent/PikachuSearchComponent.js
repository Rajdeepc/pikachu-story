import React, { Component } from 'react'
import './search.css';

export default class PikachuSearchComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            search:''
          }
    }

    componentDidMount(){
      this.props.searchedPikachuList(this.state.search);
    }

    handleChange = (event) => {
        this.setState({
          search:event.target.value
        },() => {
            this.props.searchedPikachuList(this.state.search);
        })
      }

  render() {
    return (
      <div className="searchInput">
          <input type="text" placeholder="Search Pikachu..." onChange={this.handleChange} />
      </div>
    )
  }
}
