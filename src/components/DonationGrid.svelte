<script>
	//stores

	import cartItems from '../cart.js';
	import Checkbox from '../components/UI/Checkbox.svelte';
	import { onMount } from 'svelte';
	import dropdown from '../img/arrow_drop_down.svg'

	let gift;

	cartItems.subscribe((items) => {
		console.log('load gift');
		gift = items;
	});

	export let amount = gift.myamount;
	export let frequency = gift.frequency;
	export let dcfCheck = gift.dcfChecked;
	export let amountCal = gift.totalAmount;

	let otherVal;
	let donationAmount;

	function checkOther() {
		amount = 'Other';
	}
	function updateAmount(evt) {
		console.log('updateAmt', evt.target.value, otherVal);
		//amount = evt.target.value;
	}
	function selectMe(event) {
		console.log('selectMe', event);
	}

	function updateGift() {
		console.log('updateGift', gift);
		// cartItems.update(items => {
		// 	return [
		// 		items.amount = selectedAmount;
		// 	]
		// })
		cartItems.set({
			myamount: Number(donationAmount).toFixed(2),
			frequency: frequency,
			dcfChecked: dcfCheck,
			dcfAmount: dcf,
			totalAmount: amountCal,
			payment: '',
			hasGift: false
		});
		console.log('updateGift-after', gift);
	}

	$: dcf = Number(donationAmount * 0.1).toFixed(2);
	$: if (amount == 'Other') {
		donationAmount = otherVal;
	} else {
		donationAmount = amount;
		otherVal = '';
	}

	$: if (dcfCheck) {
		amountCal = Number(donationAmount + donationAmount * 0.1).toFixed(2);
	} else {
		amountCal = Number(donationAmount).toFixed(2);
	}

	onMount(async () => {
		// amount = gift.myamount;
	});
</script>

<section id="donationForm">
	<h2><small>💜</small> Make Impact Today!</h2>
	<fieldset id="frequency">
		<legend class="hideIt"><h3>Choose a donation frequency</h3></legend>
		<input
			type="radio"
			id="onetime"
			name="donation-freq"
			bind:group={frequency}
			value="one-time"
			aria-label="One time donation"
		/>
		<label for="onetime" class="radiobtn frequency"><span>One-time</span></label>

		<input
			type="radio"
			id="monthly"
			name="donation-freq"
			bind:group={frequency}
			value="monthly"
			aria-label="Monthly donation"
			
		/>
		<label for="monthly" class="radiobtn frequency"><span>Monthly</span></label>
	</fieldset>
	<fieldset id="amount">
		<legend>Choose a <strong id="freq">{frequency}</strong> amount</legend>
		<div class="amountWrapper">
			<input type="radio" id="25" name="donation-amount" bind:group={amount} value={25}  />
			<label for="25" class="radiobtn"><span class="textValue">$25</span></label>

			<input type="radio" id="50" name="donation-amount" bind:group={amount} value={50} />
			<label for="50" class="radiobtn"><span class="textValue">$50</span></label>

			<input type="radio" id="75" name="donation-amount" bind:group={amount} value={75} />
			<label for="75" class="radiobtn"><span class="textValue">$75</span></label>

			<input type="radio" id="100" name="donation-amount" bind:group={amount} value={100} />
			<label for="100" class="radiobtn"><span class="textValue">$100</span></label>

			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<div id="otherGroup">
				<label
					for="Other"
					on:click={selectMe}
					class="radiobtn other"
					aria-label="Tab to enter an amount"
				>
					<input
						type="radio"
						id="Other"
						name="donation-amount"
						bind:group={amount}
						value="Other"
						aria-label="Custom donation amount"
					/>

					<span id="currency">$</span>
					<input
						type="number"
						inputmode="decimal"
						id="Otheramt"
						aria-label='Enter amount'
						class="otherinput"
						bind:value={otherVal}
						name="donation-amount"
						placeholder="Other"
						on:click={checkOther}
						on:input={updateAmount}
						autocomplete="off"
						
					/>
				</label>
				
			</div>
		</div>
		<!-- <div id="currency-sec" aria-label="Currency section">
		<select name="currency" id="currency-select">
			<option value="USD" selected>USD</option>
			<option value="cat">EUR</option>
			<option value="hamster">IRR</option>
			<option value="parrot">IDR</option>
			<option value="spider">YEN</option>
			<option value="goldfish">PES</option>
		</select>
	</div> -->
	</fieldset>
	
	<div class="gradBorder" />
	<footer>
		<div class="checkbox">
			<Checkbox label={`Cover transaction fees (\$${dcf})`} bind:checked={dcfCheck} hideOptional 
			toolTip="I’d like to cover the fees associated with my donation so more of my donation goes directly to Santa Fe Pantry."
			/>
		</div>
		<!-- <a id="primaryCta" href="/details" on:click={updateGift}>
			<span class="freqTitle">Donate {frequency}</span>
			<span class="gift">${amountCal}</span>
		</a> -->
		<a id="primaryCta" href="/details" on:click={updateGift} aria-describedby="sr_continue">
			
			<!-- <span class="gift" style="padding:8px 0;font-size:20px;">Continue to details</span> -->
			<span class="freqTitle">Donate {frequency}</span>
			<span class="gift">${amountCal}</span>
			
		</a>
		<p id="sr_continue" class="SR_hide">Continue with the donation process, next step is adding options</p>
	</footer>
</section>
<section class="terms">
	Santa Pantry is a 501(c)3 tax-exempt organization and your donation is tax deductible within the
	guidelines of U.S. taxes, please keep your email donation as a deduction on your U.S. taxes,
	please keep your email donation receipt as your official record. We’ll send it to you upon
	successful completion of your donation.
</section>

<style lang="scss">
	@import '../theme.scss';

	label.radiobtn,
	label.other input {
		background-color: $theme-primary-lightest;
		line-height: 2rem;
		font-size: 1.125rem;
		padding: 12px 8px;
		border-radius: 8px;
		flex: 1 1 auto;
		flex-wrap: wrap;
		cursor: pointer;
		font-weight: 700;
	}

	#otherGroup {
		background-color: $theme-primary-lightest;
		border-radius: $border-rnd-md;
		width: 100%;
	}
	#otherGroup input {
		background-color: transparent;
	}
	fieldset {
		display: flex;
		flex-wrap: wrap;
		gap: 0px;
		border: 0; 
	}

	input[type='radio'] {
		-webkit-appearance: none;
		-moz-appearance: none;
		appearance: none;
		background-color: #fff;
		margin: 0;
		position: absolute;
		opacity: 0;
		pointer-events: none;
		transition: all .3s ease-in-out;
	}
	input[type='radio']:focus {
		outline: none;
	}
	#currency-sec {
		
		flex-basis: 100%;
		padding: $p-1;
		justify-content: flex-end;
		display: flex;
	}
	#currency-select {
		padding: $p-1 $p-4 $p-1 $p-2;
		min-width: 80px;
		border-radius: $border-rnd-md;
		border-color: $border-lightest;
		background: white url('../img/arrow_drop_down.svg') no-repeat 100% 50%;
		@include body-sm;
		appearance: none;
		background-size: 40%;


	}

	// input[type='radio']:checked + label {
	// 	background-color: $theme-primary;
	// 	color: white;
	// 	transition: all 0.2s ease-in-out;
	// 	box-shadow: inset 0px 0px 0px 1px rgba(0, 0, 0, 0.3), inset 1px 2px 12px rgba(0, 0, 0, 0.2),
	// 		inset 1px 2px 2px rgba(0, 0, 0, 0.2);
	// }

	//donationForm
	#donationForm {
		box-shadow: 0px 2px 12px $neutral-90;
		border-radius: 20px;
		border: 1px solid $border-lightest;
		background-color: white;
		padding: 40px 0 32px 0;
		text-align: center;

		h2 {
			font-size: $fs-header;
			font-weight: 700;
			line-height: 2.25rem;
			padding: 0 0 24px 0;
			margin: 0;
		}
	}

	//frequency toggle
	fieldset#frequency {
		gap: 4px;
		margin: 0 32px;
		padding: 0;
		border-radius: 48px;
		box-shadow: 0px 0px 0px 2px $theme-primary-lightest;
		background: $theme-primary-lightest;
		legend {
			padding: 0 0 12px 0;
		}

		label {
			font-size: $fs-body;
			font-weight: 700;
			text-align: center;
			line-height: 1.25rem;
			background: $theme-primary-lightest;
			border-radius: 24px;
			transition: all 0.25s ease-in-out;
		}
		label:hover {
			background: $theme-primary-lightest;
			box-shadow: inset 0px 0px 0px 1px white, 0px 0px 0px 2px $theme-primary-lighter;
		}

		input[type='radio']:checked + label {
			background-color: $theme-primary;
			position: relative;
			color: white;
			display: flex;
			
			justify-content: center;
			align-items: center;
			transition: all 0.2s ease-in-out;
			box-shadow: inset 0px 0px 0px 1px rgba(0, 0, 0, 0.3), inset 1px 2px 12px rgba(0, 0, 0, 0.2),
				inset 1px 2px 2px rgba(0, 0, 0, 0.2);
		}
		input[type='radio'] + label span {
			position: relative;
		}

		input[type='radio'] + label span:before {
			content: url('../img/checkbox_check.svg');
			position: absolute;
			left: -20px;
			top: 2px;
			transform: scale(0);
			transition: all 0.3s cubic-bezier(0.03, 0.47, 0.08, 1.18);
			transition-delay: 0.2s;
		}
		input[type='radio']:checked + label span:before {
			transform: scale(1.2);
		}
	}
	fieldset#amount {
		padding: 0 40px $p-8 40px;

		legend {
			padding: 20px 0 $p-2 0;
			line-height: 1.25rem;
			position: relative;
			width: 100%;
		}
		label {
			display: flex;
			justify-content: center;
			flex: 1 1 0px;
			min-width: 33%;
			transition: all 0.25s ease-in-out;
		}
		label:hover {
			background: $theme-primary-lightest;
			box-shadow: inset 0px 0px 0px 1px white, 0px 0px 0px 2px $theme-primary-lighter;
		}
		label:active {
			transform: scale(0.98);
		}

		label:focus-within {
			background-color: $theme-primary;
		}
		input[type='radio']:checked + label,
		#otherGroup:has(input[type='radio']:checked) input#Otheramt {
			background-color: $theme-primary;
			transition: all 0.2s ease-in -out;
			box-shadow: inset 0px 0px 0px 1px rgba(0, 0, 0, 0.3), inset 1px 2px 12px rgba(0, 0, 0, 0.2),
				inset 1px 2px 2px rgba(0, 0, 0, 0.2);
			color: white;
			span.textValue {
				// mix-blend-mode: color;
				color: white;
			}
		}
		#otherGroup:has(input[type='radio']:checked) {
			:focus-visible{}
			#currency {
				color: white;
			}
			input#Otheramt::placeholder {
				color: rgba(255, 255, 255, 0.4);
			}
		}
		input#Otheramt::-webkit-outer-spin-button,
		input#Otheramt::-webkit-inner-spin-button {
			-webkit-appearance: none;
			margin: 0;
		}
		input#Otheramt:focus-visible {
			outline-offset: 4px;
			outline: 2px dotted $theme-focus!important;
		}

		.amountWrapper {
			display: flex;
			flex-wrap: wrap;
			flex-direction: row;
			flex: 1 1 50%;
			gap: 4px;
		}
		label.other {
			padding: 0;
			position: relative;
			flex-direction: row;
			flex-wrap: nowrap;
			flex: 1 0 0px;
			min-height: 56px;
			overflow: hidden;
		}
		select {
			// width: 100px;
			// height: 56px;
			// border: 0;
			// background-color: transparent;
			// font-size: $fs-body-lg;
			// font-weight: 700;
			// padding: 0 16px;
			// border-right: 2px solid white;
		}
		input.otherinput {
			// display: absolute;
			border: 0;
			padding: 8px 12px 8px 32px;
			margin: 0px;
			border-radius: 0;
		}
		input.otherinput:focus-visible {
			outline-offset: -8px;
		}
		input.otherinput::placeholder {
			color: $neutral-10;
		}
		#currency {
			position: absolute;
			left: 18px;
			line-height: 56px;
			color: $neutral-10;
		}
	}
	.terms {
		@include body-xs;
		color: $neutral-50;
		text-align: center;
		padding-top: 16px;
	}
	//gradient seperator

	.gradBorder {
		background: radial-gradient(
			79.1% 135.19% at 50% 135.19%,
			$theme-primary-grad 0%,
			hsl(150 21% 100%) 80%
		);

		height: 28px;
		border-bottom: 1px solid white;
		filter: drop-shadow(0px 1px 0px $theme-primary-lightest);
	}
	//footer primary cta

	footer {
		background-color: transparent;
		min-height: auto;
		padding: 0 32px;

		#primaryCta {
			background-color: $neutral-20;
			display: flex;
			flex-direction: column;
			padding: $p-3;
			border-radius: $border-rnd-lg;
			color: white;
			text-decoration: none;
			box-shadow: $button-shadow;
			transition: all 0.2s ease-in-out;
			.freqTitle {
				@include body-sm;
				font-weight: 600;
			}

			.gift {
				@include body-lg;
				font-weight: 700;
			}
		}
		#primaryCta:hover {
			background-color: $neutral-10;
		}
		#primaryCta:active {
			transform: scale(0.95);
		}
		.checkbox {
			display: flex;
			justify-content: center;
			padding: $p-4 $p-2;
			input[type='checkbox'] {
				margin: $p-1;
			}
		
		}
	}
	@media only screen and (max-width: 768px) {
		fieldset#frequency {
			margin: 0 24px;
		}
		fieldset#amount {
			padding: 0 32px $p-8 32px;
		}
		#donationForm {
			border-radius: 0;
		}
		footer {
			padding: 0 24px;
		}
	}
</style>
