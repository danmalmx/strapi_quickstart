import React from 'react'

const post = {
	"id": 1,
	"description": "Just plain old me!",
	"likes": 10,
	"author": null,
	"published_at": "2021-01-27T19:04:54.937Z",
	"created_at": "2021-01-27T19:04:47.071Z",
	"updated_at": "2021-01-27T19:04:54.966Z",
	"image": {
			"id": 1,
			"name": "daniel_malmgren_OLA7478.jpg",
			"alternativeText": "",
			"caption": "",
			"width": 140,
			"height": 140,
			"formats": null,
			"hash": "daniel_malmgren_OLA_7478_a6d556674e",
			"ext": ".jpg",
			"mime": "image/jpeg",
			"size": 4.85,
			"url": "/uploads/daniel_malmgren_OLA_7478_a6d556674e.jpg",
			"previewUrl": null,
			"provider": "local",
			"provider_metadata": null,
			"created_at": "2021-01-27T19:04:19.985Z",
			"updated_at": "2021-01-27T19:04:20.002Z"
	}
}

const API_URL = 'http://localhost:1337'
const formatImageUrl = (url) => `${API_URL}${url}`

const url = post.image && post.image.url;
console.log('url', url);
const description = post.description;
console.log('description', description);
const likes = post.likes;
console.log('likes', likes);



export default () => {
	return (
		<div className="Post">
			<img className="Post__Image" src={formatImageUrl(url)} alt=""/>
			<h4>{description}</h4>
			<div>
				<span>Likes: {likes}</span>
			</div>
		</div>

	)
}
