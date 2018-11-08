import React, { Component } from 'react'

export default class StartButton extends Component {
	render() {
		return (
			<div>
				<button disables='false' onClick={this.props.startTimer}>Start</button>
			</div>
		)
	}
}
