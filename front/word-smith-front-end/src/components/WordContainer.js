import React, { Component } from 'react';
import ScrambledWords from './ScrambledWords';

export default class WordContainer extends Component {


	render() {
		return(
			<div>
				<p>Scramble a word!</p>
				<input type="text" onChange={this.props.getWord}/><input onClick={this.props.submitWord} type="submit" value="mixup" />
				<ScrambledWords wordList={this.props.wordList}/>
			</div>
			)
	}
}