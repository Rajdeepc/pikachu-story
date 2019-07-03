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
  //  console.log(this.props.searchResults)
  }

  
  
  render() {
    return (
      <div className="container">        
        <div className="text-center">
            <Image className="bannerImage" src="http://pluspng.com/img-png/pokemon-logo-png-image-logo-de-pokemon-en-png-heroism-wiki-fandom-powered-by-wikia-1300.png" />
        </div>
     <PikachuSearchComponent {...this.props}/>
      <Row>
        {this.props.searchPikachuResults.map((item, i) => (
            <Col xs={2} key={item.id}>
              <PikachuItemComponent item={item} {...this.props}/>
            </Col>
        ))}
     </Row>
     </div>
    );
  }
}
