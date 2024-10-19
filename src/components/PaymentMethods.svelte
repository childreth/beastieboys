<script>
export let paymenttype = 'creditcard';
import Badge from './UI/Badge.svelte'

import creditcard from '../img/generic_cc.svg'
import ccbrands from '../img/cc-brands.svg'
import applepaylogo from '../img/applepay.svg'
import paypallogo from '../img/paypal.svg'
import venmologo from '../img/venmo.svg'
import banklogo from '../img/bank.svg'
import cryptologo from '../img/cyrpto.svg'
import donatelogo from '../img/donate.svg'


</script>


<fieldset>
	<legend class='hideIt'><h2>Choose a payment method</h2></legend>

	<label for="creditcard">
		<input type="radio" id="creditcard" name="payment" value="creditcard" bind:group={paymenttype} checked />
		<span class='brandicon'><img src={creditcard} alt="credit card" width="32px" height="20px" aria-hidden="true" /></span>
		<span>Credit Card</span>
		<span class="info ccbrands"><img src={ccbrands} alt="Credit card brands" aria-hidden="true" /></span>
	</label>

	<label for="applepay">
		<input type="radio" id="applepay" name="payment" value="applepay" bind:group={paymenttype}  />
		<span class='brandicon'><img src={applepaylogo} alt="Apple Pay"  aria-hidden="true" /></span>
		<span>Apple Pay</span>
	</label>

	<label for="paypal">
		<input type="radio" id="paypal" name="payment" value="paypal" bind:group={paymenttype} />
		<img src={paypallogo} alt="Paypal" aria-hidden="true" />
		<span>Paypal</span>
	</label>
    <label for="venmo">
		<input type="radio" id="venmo" name="payment" value="venmo" bind:group={paymenttype} />
		<img src={venmologo} alt="Paypal" aria-hidden="true" />
		<span>Venmo</span>
	</label>

	<label for="bank">
		<input type="radio" id="bank" name="payment" value="bank" bind:group={paymenttype} />
		<img src={banklogo} alt="Bank Transfer" aria-hidden="true" />
		<span>Bank Transfer</span>
        <span class="info"><Badge label={'Low fees'} /></span>
	</label>
	<label for="crypto">
		<input type="radio" id="crypto" name="payment" value="crypto" bind:group={paymenttype} />
		<img src={cryptologo} alt="Cryptocurrency" aria-hidden="true" />
		<span>Cryptocurrency</span>
	</label>
	<!-- <label for="stock">
		<input type="radio" id="stock" name="payment" value="donatestock" bind:group={paymenttype} />
		<img src={donatelogo} alt="Donate stock" aria-hidden="true" />
		<span>Donate Stock</span>
	</label> -->
</fieldset>

<style lang="scss">
	@import '../checkout.scss';

	fieldset {
		border: 1px solid $border-lightest;
		border-radius: $border-rnd-lg;
		padding: 0;
		margin: 32px $p-1 28px $p-1;
		overflow: hidden;

		> label {
			display: flex;
		}
		// legend {
		// 	visibility: hidden;
		// 	position: absolute;
		// 	height: 1px;
		// }
		label {
			@include body;
			padding: $p-4 $p-4;
			transition: all 0.1s ease-in-out;
			border-bottom: 1px solid $border-lightest;
			cursor: pointer;
            color: $neutral-10;
			display: flex;
			gap: 8px;
			align-items: center;
            font-weight:400;
            transition: all .2s ease-in-out;
		}
        label:hover {
            box-shadow: inset 0 0 12px 0 $bg-input;
			cursor: pointer;
        }
		label:has(input[type='radio']:checked) {
			background-color: $bg-input;
			color: $neutral-10;
			font-weight: 600;
		}
		label:last-child {
			border: 0;
            border-radius: 0 0 $border-rnd-lg $border-rnd-lg;
		}
        label:first-child {
			border: 0;
            border-radius:  $border-rnd-lg $border-rnd-lg 0 0;
		}
		
        label span {
            padding:2px 0;
        }
		input[type='radio'] {
			-webkit-appearance: none;
			appearance: none;
			/* For iOS < 15 to remove gradient background */
			background-color: #fff;
			flex-shrink: 0;
			/* Not removed via appearance */
			margin: 0;
			font: inherit;
			display: flex;
			box-shadow: inset 0px -2px 4px 1px $neutral-80, inset 0px 0px 0px 0px $theme-primary;
			color: currentColor;
			width: 1em;
			height: 1em;
			border: 1px solid $border-input;
			border-radius: 50%;
            transition: all .4s cubic-bezier(.25,-0.01,.03,1.2);
		}
		input[type='radio']:checked {
			content: '';
			border-color: $neutral-20;
			box-shadow: inset 0px 1px 2px 0px $theme-primary-dark,inset 0px 0px 0px 4px $theme-primary,0px 0px 0px 1px white,0px 0px 8px 0px $neutral-60;
		}
		input[type='radio']:checked ~ span.ccbrands {
            opacity: 1;
			// for FF ~
        }
		span.ccbrands {
            opacity: .6;
        }
        // label:has(input[type='radio']:checked)  .ccbrands {
        //     opacity: 1;
        // }
		
		
		.info {
			display: flex;
			flex-grow: 1;
			justify-content: flex-end;
            transition: all .25s ease-in-out;
		}
		.brandicon {
			width: 36px;
			height: 28px;
			display: flex;
			padding:0;
			align-items: center;
			justify-content: center;
		}
        
	}
</style>
