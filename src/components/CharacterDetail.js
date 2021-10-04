import React, {Component} from 'react';
import {Col, Card, Row, Container} from 'react-bootstrap';
import {createHash} from 'crypto';
import axios from 'axios';

class CharacterDetail extends Component {
	
	constructor(props) {
        super(props);
        this.state = {
            character: {},
          };
    }
	
    async componentDidMount() {
		const character = this.getCharacterById(props.id);
		this.setState({
		character
		});
    }
	
    getCharacterById(characterId) {
        let publicKey = '298bab46381a6daaaee19aa5c8cafea5';
        let privateKey = 'b0223681fced28de0fe97e6b9cd091dd36a5b71d';
        let currentTime = + new Date();
        let concatenatedString = currentTime + privateKey + publicKey;

        axios.get(`http://gateway.marvel.com:80/v1/public/characters/${characterId}`, {
            params: {
                "ts": + currentTime,
                "apikey": publicKey,
                "hash": createHash('md5').update(concatenatedString).digest('hex') 
            }
        })
        .then(result => {
            this.setState({
                character: result.data.data.results[0]
            });
        })
        .catch(err => {
            console.log(err.stack);
		})
    }
	
	render() {
		const {character} = this.state;
		let img = "";
		if(character){
			img = character.thumbnail.path + '.' + character.thumbnail.extension;
		}
		return (
			<Container>
				{character === null && <p>Loading Marvel Detail...</p>}
				<Row>
					<Col xs={4} sm={4} md={4}>
						<Card >
							<Card.Body>
								<Card.Img variant="top" src={img} />
							</Card.Body>
						</Card>
					</Col>
					<Col xs={6} sm={6} md={6}>
						<Card >
							<Card.Body>
								<Card.Title className="character-detail-title">{character.name}</Card.Title>
								<Card.Text>{character.description}</Card.Text>
							</Card.Body>
						</Card>
						<div className="character-detail">
							<Row><b>Comics</b></Row>
							{character.comics && character.comics.items.map(comic => (
								<Row><p>{comic.name}</p></Row>))
							}
							<Row><b>Series</b></Row>
							{character.series && character.series.items.map(serie => (
								<Row><p>{serie.name}</p></Row>))
							}
							<Row><b>Events</b></Row>
							{character.events && character.events.items.map(event => (
								<Row><p>{event.name}</p></Row>))
							}
						</div >
					</Col>
				</Row>
			</Container>
		)
	}
};

export default CharacterDetail;