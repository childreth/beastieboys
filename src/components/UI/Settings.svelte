<script>
	let theColor = '#3c5d4d';
	let scaleBase = 100;
	let dcfEnabled=false;
	//import Input from '../../components/UI/Input.svelte';
	import Select from '../../components/UI/Select.svelte';
	import Checkbox from '../../components/UI/Checkbox.svelte';

	const customq = [
		'Please select',
		'None 🐈',
		'Minimum',
		'Average 🦄',
		'Large',
		'Ridiculousness ✨',

	]
	

	function closeMe(evt) {
		let settingsDialog = document.getElementById('settings');
		settingsDialog.close();
	}
	
	function letsdoit() {
       
		const r = document.querySelector(':root');
        let scaled = (scaleBase / 100) * 16 + "px";
        r.style.setProperty("--baseSize", scaled);
        //show PX on element
        setTimeout(resizeHeading, 500);
      }

	function hexToCssHsl(hex, valuesOnly = false) {
		var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
		var r = parseInt(result[1], 16);
		var g = parseInt(result[2], 16);
		var b = parseInt(result[3], 16);
		var primaryBase = '';
		(r /= 255), (g /= 255), (b /= 255);
		var max = Math.max(r, g, b),
			min = Math.min(r, g, b);
		var h,
			s,
			l = (max + min) / 2;
		if (max == min) {
			h = s = 0; // achromatic
		} else {
			var d = max - min;
			s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
			switch (max) {
				case r:
					h = (g - b) / d + (g < b ? 6 : 0);
					break;
				case g:
					h = (b - r) / d + 2;
					break;
				case b:
					h = (r - g) / d + 4;
					break;
			}
			h /= 6;
		}

		h = Math.round(h * 360);
		s = Math.round(s * 100);
		l = Math.round(l * 100);


		let lDark = Math.round(5 + (l / 2) )
		let lLightest = Math.round(100 - (((100 - l) * .1)) - 2);
		console.log('themesllll',lDark);

		
		let primaryDark = h + ',' + s + '%,' + lDark + '%';
		let primaryLightest = h + ',' + s + '%,' + lLightest + '%';
		let summaryBottom = h + ',' + '8%,'  + '88%';
		let summaryTop = h + ',' + '8%,'  + '96%';


		primaryBase = h + ',' + s + '%,' + l + '%';
		primaryBase = !valuesOnly ? 'hsl(' + primaryBase + ')' : primaryBase;
		primaryDark = !valuesOnly ? 'hsl(' + primaryDark + ')' : primaryDark;
		primaryLightest = !valuesOnly ? 'hsl(' + primaryLightest + ')' : primaryLightest;

		summaryBottom = !valuesOnly ? 'hsl(' + summaryBottom + ')' : summaryBottom;
		summaryTop = !valuesOnly ? 'hsl(' + summaryTop + ')' : summaryTop;

		return [primaryBase,primaryDark,primaryLightest,summaryBottom,summaryTop];
	}

	function NewColor() {
		const picker = document.querySelector('#colorPicking');
		const r = document.querySelector(':root');
		const themes = hexToCssHsl(picker.value);
		r.style.setProperty('--theme-primary',themes[0]);
		r.style.setProperty('--theme-primary-dark',themes[1]);
		r.style.setProperty('--theme-primary-lightest',themes[2]);
		r.style.setProperty('--bg-summary-bottom',themes[3]);
		r.style.setProperty('--bg-summary-top',themes[4]);
		console.log('hextocss',themes);
	}
</script>

<dialog id="settings">
	<div >
		<div class="scrim" on:click={closeMe}></div>
		<section class="">
			<header>
				<h1 style="padding:12px">Prototype Settings</h1> <button on:click={closeMe}
					><strong><u>Close</u></strong></button
				>
			</header>
			<div id="fontsize" class="inputEL">
				<label for="scaler"><strong>Font size</strong></label>
				<input
				  type="range"
				  min="50"
				  max="250"
				  step="10"
				  id="scaler"
				  bind:value={scaleBase}
				  on:input={letsdoit}
				/><label id="labelSize" for="scaler">{scaleBase}</label>
			  </div>
			<div class="inputEL">
				<label for="colorPicking" style="line-height:32px"><strong>Change Primary {theColor}</strong></label>
				<input
					type="color"
					id="colorPicking"
					name="head"
					bind:value={theColor}
					on:input={NewColor}
				/>
				
			</div>
			<div style="display:flex;gap:2px;width:calc(100% - 24px);font-size:14px;padding:12px;">
				<div style="width:56px;height:56px;background: var(--theme-primary);color:white">
				   Base
				</div>
				<div style="width:56px;height:56px;background: var(--theme-primary-lightest);color:black">
				   Lighter
				</div>
				<div style="width:56px;height:56px;background: var(--theme-primary-dark);color:white ">
				   Darker
				</div>
			   </div>
			<div class="inputEL">
				<p><strong>Show checkout with custom questions level</strong></p>
				<Select
					label={'Enabled amount'}
					val={''}
					required={true}
					listItems={customq}
	
				/>
				
			</div>
			<div class="inputEL">
				<p><strong>Show checkout with DCF</strong></p>
				<p> <Checkbox label={'Enable DCF in checkout'} bind:checked={dcfEnabled} hideOptional /></p>
				
				
			</div>
			
			  
		</section>
	</div>
</dialog>

<style lang="scss">
	@import '../../theme.scss';

	dialog#settings {
		border: 0;
		position: fixed;
		padding: 0;
		margin: 0;
		top: 0;
		left: 0;
		z-index: 100000;
		width: 100vw;
		height: 100dvh;
		background: transparent !important;
		// backdrop-filter: blur(8px);
		// -webkit-backdrop-filter: blur(8px);
		animation: fadeIn 0.5s cubic-bezier(0.03, 0.15, 0.04, 1.1) forwards;
		font-size: 16px;

		> div {
			width: 100vw;
			height: 100%;
			display: flex;
			justify-content: flex-end;
			align-items: flex-end;
			text-align: center;
			box-sizing: border-box;
		}
		header {
			display: flex;
			width: 100%;
			justify-content: space-between;
			h1 {
				font-size:1.25rem;
				flex-grow:1;
				text-align: left;
				padding: 0 $p-4;
			}
			button {
				border:0;
				background: 0;
				margin-right:1rem;
				color: blue;
			}
		}

		section {
			display: flex;
			background-color: white;
			width: 400px;
			min-width: 250px;
			height: calc(100% - 0px);
			flex-direction: column;
			justify-content: flex-start;
			align-items: flex-end;
			padding:0;
			animation: slideInRight 0.5s cubic-bezier(0.03, 0.15, 0.04, 1.1) forwards;
			box-shadow: 0 -4px 12px rgba(0, 0, 0, 0.3);
		}
		.inputEL {
        display: flex;
        align-content: center;
        justify-items: center;
		flex-direction: column;
		width: 100%;
        border-top: 1px solid gray;
        padding: 12px;
        align-content: center;
		box-sizing: border-box;
		text-align: left;
      }
	  .inputEL label {
		padding-right:1rem;
	  }
		.fadeIn {
		}

		h2 {
			margin: $p-6 0 $p-4 0;
		}
		p {
			margin: 0 0 $p-1 0;
		}
		img {
			max-width: 480px;
		}
		.dark {
			width: 100px;
			height: 100px;
			color: red;
		}
	}

	:global {
		.fadeMe {
			animation: fadeOut 0.5s cubic-bezier(0.03, 0.15, 0.04, 1.1) alternate-reverse;
		}
	}
	@keyframes slideInRight {
		0% {
			transform: translateX(200px);
			opacity: 0;
		}
		50% {
		}
		100% {
			// transform: scale(1);
			transform: translateX(0px);
			opacity: 1;
		}
	}
	@keyframes fadeIn {
		0% {
			// backdrop-filter: blur(0px);
			// -webkit-backdrop-filter: blur(0px);
			background: rgba(255, 255, 255, 0);
		}
		50% {
		}
		100% {
			// backdrop-filter: blur(8px);
			// -webkit-backdrop-filter: blur(8px);
			background: rgba(255, 255, 255, 1);
			box-shadow: 0 3px 12px rgba(0, 0, 0, 0.1);
		}
	}
	@keyframes fadeOut {
		0% {
			opacity: 1;
		}
		50% {
		}
		100% {
			opacity: 0;
		}
	}
</style>
