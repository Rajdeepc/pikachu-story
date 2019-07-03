import React, { Component } from 'react'
import {Form} from 'react-bootstrap';
export default class PikachuSearchComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            search:''
          }
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
      <div>
        <input type="text" placeholder="Search Pikachu..." onChange={this.handleChange} />
      </div>
    )
  }
}
