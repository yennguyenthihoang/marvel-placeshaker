import React, {Component} from 'react';
import {Col, Card, Row} from 'react-bootstrap';
import {Link} from 'react-router-dom';

class Character extends Component {
	
	constructor(props) {
		super(props);
	}

	render() {
        let character = {};
		let img = "";
        if(this.props.character){
            character = this.props.character;
            img = character.thumbnail.path + '.' + character.thumbnail.extension;
            
        }
        return (
            <Col xs={12} sm={6} md={4} key={character.id}>
                <Card >
                    <Card.Body>
                        <Link to={`/characters/${character.id}`} activeClassName="current">
                            <Card.Img variant="top" src={img} />
                        </Link>
                        <Card.Title>{character.name}</Card.Title>
                        <Row className="App-link">
                        {character.urls && character.urls.map(url => (
                            <Card.Link href={url.url}>{url.type}</Card.Link>
                        ))
                        }
                        </Row>
                    </Card.Body>
                </Card>
            </Col>
        );
	}
};

export default Character;


