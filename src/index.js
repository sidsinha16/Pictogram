import React,{ Component } from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter,Route} from 'react-router-dom'

import Home from './Components/home'
import Artist from './Components/artistdetail'



class App extends Component{


	render(){

		return (
				<BrowserRouter>
				<div>
				<Route exact path='/' component={Home}/>
				<Route  path='/artistdetail/:artistId' component={Artist}/>
				</div>
				</BrowserRouter>
				)
	}
}
ReactDOM.render(<App/>,document.querySelector('#root'));