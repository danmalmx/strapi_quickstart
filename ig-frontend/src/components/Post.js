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
			"url": "/uploads/daniel_malmgren_OLA_7478_a6d556674e.jpg",
	}
}

const API_URL = 'http://localhost:1337'
const formatImageUrl = (url) => `${API_URL}${url}`

export default ({ description, likes, url }) => {

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
