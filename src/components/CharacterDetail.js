import React, {Component} from 'react';
import {Col, Card, Row, Container} from 'react-bootstrap';
import {createHash} from 'crypto';
import axios from 'axios';

class CharacterDetail extends Component {
	
	constructor(props) {
        super(props);
        this.state = {
            character: null,
          };
    }
    
    async componentDidMount() {
		const character = this.getCharacterById(this.props.id);
		this.setState({
		character
		});
    }
      
    getCharacterById(characterId) {
        let publicKey = '298bab46381a6daaaee19aa5c8cafea5';
        let privateKey = 'b0223681fced28de0fe97e6b9cd091dd36a5b71d';
        let currentTime = + new Date();
        let concatenatedString = currentTime + privateKey + publicKey;

        axios.get(`http://gateway.marvel.com:80/v1/public/characters/{characterId}`, {
            params: {
                "ts": + currentTime,
                "apikey": publicKey,
                "hash": createHash('md5').update(concatenatedString).digest('hex') 
            }
        })
        .then(result => {
            this.setState({
                character: result.data.results[0]
            });
        })
        .catch(err => {
            console.log(err.stack);
        })
    }

	
	render() {
		let character = this.props.character;
		let img = character.thumbnail.path + '.' + character.thumbnail.extension;

		return (
			<Container>
				{character === null && <p>Loading Marvel Detail...</p>}
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
							<Card.Title>{character.name}</Card.Title>
							<Card.Text>{character.name}</Card.Text>
						</Card.Body>
					</Card>
					<h4>Comics</h4>
					character.comics && character.comics.items.map(comic => (
						<Row><p>comic.name</p></Row>))
					}
					<h4>Series</h4>
					character.series && character.series.items.map(serie => (
						<Row><p>serie.name</p></Row>))
					}
					<h4>Events</h4>
					character.events && character.events.items.map(event => (
						<Row><p>comic.name</p></Row>))
					}
					<h4>URLs</h4>
					character.urls && character.urls.items.map(url => (
						<Row><p>url.name</p></Row>))
					}
				</Col>
			</Container>
		)
	}
};

export default CharacterDetail;