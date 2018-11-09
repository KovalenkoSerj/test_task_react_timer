import React, { Component } from 'react'

export default class StartButton extends Component {
	render() {
		return (
			<div>
				<button disabled={!this.props} onClick={this.props.startTimer}>Start Timer</button>
			</div>
		)
	}
}
