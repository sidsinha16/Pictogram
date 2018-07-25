import React,{ Component } from 'react'
import Header from './header'
import AlbumList from './albumlist'

const url = `http://localhost:3004/artists`
class ArtistDetails extends Component {

	constructor(props){
		super(props);

		console.log(props);

		this.state = {
			detail:""
		}
	}

		componentDidMount(){
			console.log(`${url}/${this.props.match.params.artistId}`)
			return fetch(`${url}/${this.props.match.params.artistId}`,{method:"GET"})
			.then((response) => response.json())
			.then((data) =>{
				console.log(data);
				this.setState({detail:data})

			})
		}


	render(){

	return (
			<div>
				<Header />
				<div className='artist_bio'>
					<span className = "img" style={{background:`url('/images/covers/${this.state.detail.cover}.jpg')`}}></span>
					<div className='name'>
					{this.state.detail.name}
					</div>
					<div className='bio'>
					{this.state.detail.bio}
					</div>
					<AlbumList list = {this.state.detail.albums} />
				</div>
			</div>
			)

	}
}
export default ArtistDetails;