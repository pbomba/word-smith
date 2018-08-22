import React, { Component } from 'react';

export default class ScrambledWords extends Component {

	generateList = () => {
		const wordList = this.props.wordList
		return wordList.map(word => {return <li>{word.attributes.word} : {word.attributes.output}</li>})
	}

	render() {
		console.log(this.props.wordList)



		return(
			<div>
				<ul>
					{this.generateList()}
				</ul>
			</div>
			)
	}
}