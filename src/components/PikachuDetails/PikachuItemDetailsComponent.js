import React, { Component } from 'react'
import { Row,Col,Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './pikachu.css';
export default class PikachuItemDetailsComponent extends Component {

  componentDidMount(){
    const {id} = this.props.match.params;
    this.props.showPikaChuDetails(id);
    console.log("pika objects" + JSON.stringify(this.props.pikachuDetailsState.pikachuDetails))
  }

  render() {
    const pikaItem = this.props.pikachuDetailsState.pikachuDetails; 
    

    return (
      <div>
     
      <div className="container">  
      <Link className="goBack" to={'/'}>Back</Link>      
        <div className="text-center">
            <Image className="bannerImage" src="http://pluspng.com/img-png/pokemon-logo-png-image-logo-de-pokemon-en-png-heroism-wiki-fandom-powered-by-wikia-1300.png" />
        </div>
        <Row>
          <Col xs={3}>
            <Image src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.props.match.params.id}.png`}/>
            <h3>{pikaItem.name}</h3>
          </Col>
          <Col xs={3}>
            <p>Height: {pikaItem.height}</p>
            <p>Base Experience: {pikaItem.base_experience}</p>
            <p>Weight: {pikaItem.weight}</p>
            <p>No of Moves: {pikaItem.moves ? pikaItem.moves.length : 0}</p>
            <p>Height: {pikaItem.height}</p>

          </Col>

        </Row>
      </div>
      </div>
    )
  }
}
