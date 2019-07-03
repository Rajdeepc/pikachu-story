import React, { Component } from "react";
import PikachuItemComponent from "./PikachuItemComponent";
import { Row,Col,Image,Form } from 'react-bootstrap';
import PikachuSearchComponent from '../SearchComponent/PikachuSearchComponent';

export default class PikaChuList extends Component {
  constructor(props) {
    super(props);
   
  }

  componentDidMount() {
    this.props.getAllPikachu();
  }

  componentDidUpdate(){
    console.log(this.props.searchResults)
  }


  
  render() {
    return (
      <div className="container">        
        <div className="text-center">
            <Image fluid src="http://pluspng.com/img-png/pokemon-logo-png-image-logo-de-pokemon-en-png-heroism-wiki-fandom-powered-by-wikia-1300.png" />
        </div>
     <PikachuSearchComponent {...this.props}/>
      <Row>
        {Object.keys(this.props.searchPikachuResults).map((key, i) => (
            <Col xs={2} key={i}>
              <PikachuItemComponent  item={this.props.searchPikachuResults[key]}/>
            </Col>
        ))}
     </Row>
     </div>
    );
  }
}
