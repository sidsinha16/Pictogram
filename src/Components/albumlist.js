import React from 'react'

const AlbumList = (props) =>{
	if(props.list){
	var listAlbum = props.list.map(i => {
		console.log("album",i.title);
		return (
				<span className="images" style={{background:`url('/images/albums/${i.cover}.jpg')  no-repeat`}}>
				</span>
				)
	})
}
	return (
				<div className="albums_list">
				<h1> Album List : </h1>
				{listAlbum}
				</div>
			);

}

export default AlbumList;