import React from 'react';

export default class Table extends React.Component {

  render () {
    return (
      <table>
        <tr>
          <th>Header1</th>
        </tr>
        <tr>
          <td>Data1</td>
        </tr>
        <tr>
          <td>Data2</td>
        </tr>
      </table>
    )
  }
}