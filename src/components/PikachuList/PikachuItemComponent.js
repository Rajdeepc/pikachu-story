import React, { Component } from "react";
import { Card, Image } from "react-bootstrap";
import "./pikachu.css";

export default class PikachuItemComponent extends Component {
  render() {
    return (
      <Card>
        <div className="text-center">
          <Card.Img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
              this.props.item.id
            }.png`}
          />

          <Card.Body>
            <Card.Title>{this.props.item.name}</Card.Title>
          </Card.Body>
        </div>
      </Card>
    );
  }
}
