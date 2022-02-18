import React from 'react'

export const Component1 = () => {
	return 'I am component1'
}

export const Component2 = () => {
	return <div>I am component2</div>
}

export const Component3 = () => {
	const users = ["Dhanur", "Mosh", "Josh"]
	return <div>{users.map(usr => <p>{usr}</p>)}</div>
}

