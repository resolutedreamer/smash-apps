import React from 'react';

export default class Table extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      rowNames: ['S','A','B','C','D','E','F']
    }
  }

  render() {
    return (
      <table>
        <tbody>
          {this.state.rowNames.map((rowName, idx) => (
            <tr key={idx}>
              <td>{rowName}</td>
            </tr>
          ))}
        </tbody>
      </table>
    )
  }
}