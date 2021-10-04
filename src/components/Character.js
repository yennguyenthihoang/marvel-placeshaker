import React, {Component} from 'react';
import {Col, Card, Row} from 'react-bootstrap';

class Character extends Component {
	
	constructor(props) {
		super(props);
	}

	render() {
        let character = this.props.character;
		let img = character.thumbnail.path + '.' + character.thumbnail.extension;

		return (
			<Col xs={12} sm={6} md={4} key={character.id}>
                <Card >
                    <Card.Body>
                        <Card.Img variant="top" src={img} />
                        <Card.Title>{character.name}</Card.Title>
                        <Row className="App-link">
                            <Card.Link href={`/characters/${ character.id }`}>detail</Card.Link>
                            <Card.Link href="#">wiki</Card.Link>
                            <Card.Link href="#">comiclink</Card.Link>
                        </Row>
                    </Card.Body>
                </Card>
			</Col>
		);
	}
};

export default Character;


