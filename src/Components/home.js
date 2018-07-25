import React,{ Component } from 'react'
import Banner from './banner'
import Artist from './artists'
class Home extends Component{
		constructor(props){
			super(props);

			this.state = {
				list:''
			}
		}

		componentDidMount(){
			return fetch('http://localhost:3004/artists',{method:'get'})
			.then((response) => response.json())
			.then((respond) => {
				this.setState({
					list:respond
				})
			})
		}


	render(){
		return(
				<div>
				<Banner></Banner>
				<Artist alldata = {this.state.list}/>
				</div>
			  )
	}
}
export default Home