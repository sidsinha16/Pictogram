import React from 'react'
import {Link} from 'react-router-dom'
const Artist = (props) =>{

		const List = (alldata) => {
			console.log(alldata);
		if(!(alldata.alldata === "")){
			console.log("alldata",alldata);
		return alldata.alldata.map((data) => {
			var style = {
					background:`url('/images/covers/${data.cover}.jpg') no-repeat`
			}
			return(
				<Link key = {data.id} to={`/artistdetail/${data.id}`} className= "artist_item" style={style}>
				<div><h1>{data.name}</h1></div>
				</Link>
				  )
			});					
		}
	}	

		return(
				<div className="artists_list">
                	<h2 className='styles'>List</h2>	
                	{List(props)}
				</div>
			  )
}
export default Artist