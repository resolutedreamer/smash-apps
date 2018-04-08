import React from 'react';

export default class Header extends React.Component {
  render () {
    return (
	
	<div id="overlay">
		<div id="modalWrapper">
			<div id="modal">
				<h1>SETTINGS</h1>
				<span id="close"></span>
				<p>Choose label color:</p>
				<div id="colorselect"><span style="background:#FF7F7F"></span><span style="background:#FFBF7F"></span><span style="background:#FFDF7F"></span><span style="background:#FFFF7F"></span><span style="background:#BFFF7F"></span><span style="background:#7FFF7F"></span><span style="background:#7FFFFF"></span><span style="background:#7FBFFF"></span><span style="background:#7F7FFF"></span><span style="background:#FF7FFF"></span><span style="background:#BF7FBF"></span><span style="background:#3B3B3B"></span><span style="background:#858585"></span><span style="background:#CFCFCF"></span><span style="background:#F7F7F7"></span></div>
				<p>Label name:</p><textarea id="labelName"></textarea>
				<p>Row functions:</p>
				<p><button id="deleteRow">Delete row</button> <button id="clearRow">Clear row</button></p>
				<p><button id="addRowUp">Add row above</button> <button id="addRowBelow">Add row below</button></p>
			</div>
			<div id="gameChange">
				<h1>CHANGE GAME</h1>
				<span id="close"></span>
				<div id="switchButtons">
					<button id="switch64">Super Smash Bros. 64</button>
					<button id="switchMelee">Super Smash Bros. Melee</button>
					<button id="switchBrawl">Super Smash Bros. Brawl</button>
					<button id="switchSmash4">Super Smash Bros. 4 (Screenshots)</button>
					<button id="switchSSB4Renders">Super Smash Bros. 4 (Renders)</button>
					<button id="switchPM">Project M</button>
					<button id="switchSSF2">Super Smash Flash 2</button>
					<button id="switchBrawlMinus">Brawl Minus</button>
					<button id="switchBrawlZeus">Brawl Zeus</button>
					<button id="switchSFV">Street Fighter V</button>
					<button id="switchGGREV">Guilty Gear Xrd -Revelator-</button>
					<button id="switchBrawlhalla">Brawlhalla</button>
					<button id="switchOW">Overwatch</button>
				</div>
				<p><strong>Changing your game will empty your tierlist!</strong> Do not click unless you are sure you want to change! You cannot undo this.</p>
				<p>64, Melee, Brawl, and Smash 4 screenshot icons from <a href="http://ssbwiki.com">SmashWiki</a>. Smash 4 render icons made by /u/wafflepotamus. Project M screenshot icons made by /u/brewster_the_pigeon. Smash Flash 2 screenshot icons made by /u/AxeEnding999. Brawl Minus icons made by /u/mslb99. Street Fighter V icons from <a href="http://sfv-wiki.com/wiki/STREET_FIGHTER_V_Wiki">SFV-Wiki</a>. Guilty Gear screenshot from <a href="http://www.dustloop.com/wiki/index.php/Guilty_Gear_Xrd_-REVELATOR-">Dustloop GG Rev Wiki</a>. Overwatch icons made by Blizzard Entertainment.</p>
			</div>
			<div id="helpMenu">
				<h1>HELP</h1>
				<span id="close"></span>
				<p>This is the new version of the old Smash Tier List Maker. If you still like the old one, <a href="old/">click here</a> to go there.</p>
				<p><strong>All 4 official Smash games and Project M are supported.</strong> If you want to change the game you are using, click on "Change game" in the top bar.</p>
				<p><strong>You can take screenshots of your tierlist.</strong> To take a screenshot, click on the "Share" button in the top bar. A popup should appear that contains an image of your tierlist. You can copy or save this image to then upload to an image hosting site. If the screenshot feature does not work for you, you can click the "Hide controls" button to make the list look cleaner.</p>
				<p><strong>You can share editable versions of your tierlist.</strong> Click on the "Share" button and you will see a textbox that contains a code. Copy and share this with others so that they can edit your tierlist.</p>
				<p><strong>Your latest tierlist autosaves to your device.</strong> As soon as you drag a character image, your tierlist will be saved. Any time you reopen it you will be able to access your previous tierlist.</p>
				<p>There is a gear next to each tier in the tierlist. (If you don't see this gear, click on the "Toggle screenshot mode" button in the top bar. If this doesn't work, <a href="https://www.reddit.com/message/compose?to=Buizbuiz&subject=Smash%20Tier%20List%20Maker">message /u/Buizbuiz on reddit</a>.) If you click on it, you can <strong>change the color of the tier label, add rows, delete the row, or remove all of the characters currently in the row.</strong></p>
				<p>Next to the gear are 2 arrows, pointed up and down. Clicking these will let you <strong>move a tier up and down a level</strong>.</p>
				<p><strong>You can change the name of the tier.</strong> Click on the tier label, you can type in there. If this doesn't work, you can change it in the textbox in the corresponding settings menu.</p>
				<p>If you want to <strong>completely start over</strong>, just refresh the page.</p>
			</div>
			<div id="screenshotShow">
				<span id="close"></span>
				<p>Your image should appear above. You can copy or save this image. Try uploading it to an image hosting website such as <a href="http://imgur.com">Imgur</a>. Alternatively, copy the code below to share an editable version of your tierlist. Just paste a code into the box below and click "Run code" to access it.</p>
			<textarea id="exportcode" cols="30" rows="8"></textarea><div><button id="runCode">Run code</button></div>
			</div>
		</div>
	</div>
	
    )
  }
}