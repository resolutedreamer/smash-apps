import React from 'react';

export default class Table extends React.Component {

  render () {
    return (
		<div id="controls">
			<div id="buttons">
				<button id="screenshot">Share</button>
				<button id="hidebuttons">Hide controls</button>
				<button id="game">Change game</button>
				<button id="help">Help</button>
				<button id="reset">Reset</button>
			</div>
		</div>
    )
  }
}