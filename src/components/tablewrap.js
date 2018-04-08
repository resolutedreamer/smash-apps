import React from 'react';

export default class Table extends React.Component {

  render () {
    return (
	<div id="tablewrap">
	<table><tbody>
		<tr>
			<td class="labelHolder" contenteditable="true"><span class="label">S</span></td>
			<td><div class="tier sort" id="rows"></div></td>
			<td><div id="settings"></div><div id="moveButtons"><div id="moveUp"></div><div id="moveDown"></div></div></td>
		</tr>
		<tr>
			<td class="labelHolder" contenteditable="true"><span class="label">A</span></td>
			<td><div class="tier sort" id="rows"></div></td>
			<td><div id="settings"></div><div id="moveButtons"><div id="moveUp"></div><div id="moveDown"></div></div></td>
		</tr>
		<tr>
			<td class="labelHolder" contenteditable="true"><span class="label">B</span></td>
			<td><div class="tier sort" id="rows"></div></td>
			<td><div id="settings"></div><div id="moveButtons"><div id="moveUp"></div><div id="moveDown"></div></div></td>
		</tr>
		<tr>
			<td class="labelHolder" contenteditable="true"><span class="label">C</span></td>
			<td><div class="tier sort" id="rows"></div></td>
			<td><div id="settings"></div><div id="moveButtons"><div id="moveUp"></div><div id="moveDown"></div></div></td>
		</tr>
		<tr>
			<td class="labelHolder" contenteditable="true"><span class="label">D</span></td>
			<td><div class="tier sort" id="rows"></div></td>
			<td><div id="settings"></div><div id="moveButtons"><div id="moveUp"></div><div id="moveDown"></div></div></td>
		</tr>
		<tr>
			<td class="labelHolder" contenteditable="true"><span class="label">E</span></td>
			<td><div class="tier sort" id="rows"></div></td>
			<td><div id="settings"></div><div id="moveButtons"><div id="moveUp"></div><div id="moveDown"></div></div></td>
		</tr>
		<tr>
			<td class="labelHolder" contenteditable="true"><span class="label">F</span></td>
			<td><div class="tier sort" id="rows"></div></td>
			<td><div id="settings"></div><div id="moveButtons"><div id="moveUp"></div><div id="moveDown"></div></div></td>
		</tr>
	</tbody>
	</table>
	</div>
	
    )
  }
}