<script>
//import applepaylogo from '../img/applepay.svg'
import paypallogo from '../img/paypal-lg.svg'
import venmologo from '../img/venmo-lg.svg'
// import banklogo from '../img/bank.svg'
import sheild from '../img/shield.svg'
import cryptologo from '../img/cyrpto.svg'
	// import { fade } from 'svelte/transition';
    // import { quintOut } from 'svelte/easing';

	export let helper = 'Tim Cook will personally take your money';
	export let ctatext = 'Continue';
	$: {
		if (ctatext == 'paypal') {
			helper = 'Finish your donation with Paypal';
		} else if (ctatext == 'venmo') {
			helper = 'You’ll be shown Venmo QR code next';
		} else if (ctatext == 'applepay') {
			helper = "Complete your donation with Apple Pay";
		} else if (ctatext == 'bank') {
			helper = "Next you'll add you bank account details";
			ctatext = 'Bank transfer';
		} else if (ctatext == 'crypto') {
			helper = 'This method isn’t available currently';
			ctatext = 'crypto';
		} else if (ctatext == 'creditcard') {
			helper = 'Next you’ll enter your credit card details';
			ctatext = 'credit card';
		} else {
			helper = 'Next you’ll enter your credit card details';
			ctatext = 'credit card';
		}
	}
	export let nextStep = () => {};

	
	//import { fade } from 'svelte/transition';
</script>

<footer>
	{#if ctatext == 'venmo'}
		<div >
			<span class="helper">{helper}</span>
			<a href="/information" class="venmo" on:click|preventDefault={nextStep}
				>Donate with <img src="{venmologo}" alt="Venmo" /></a
			>
		</div>
	{:else if ctatext == 'paypal'}
		<div>
			<span class="helper">{helper}</span>
			<a href="/" class="paypal" on:click|preventDefault={nextStep}>Donate with <img src="{paypallogo}" alt="PayPal" /></a>
		</div>
	{:else if ctatext == 'applepay'}
		<div>
			<span class="helper">{helper}</span>
			<a href="/" class="applepay" on:click|preventDefault={nextStep}
				>Donate with <span>Pay</span></a
			>
		</div>
	{:else if ctatext == 'crypto'}
		<div>
			<span class="helper">{helper}</span>
			<button href="/information" class="crypto" on:click|preventDefault={nextStep}>Donate with <img src="{cryptologo}" alt="bitcoin" /></button>
		</div>
	{:else if ctatext == 'credit card'}
		<div>
			<span class="helper">{helper}</span>
			<button on:click|preventDefault={nextStep} class="disabled">Continue to card details</button>
		</div>
	{:else}
		<div>
			<span class="helper" >{helper}</span>
			<button  on:click|preventDefault={nextStep} class="disabled">Continue with {ctatext}</button>
		</div>
	{/if}

	<span class="secure"
		><img src={sheild} width="24px" height="24px" alt="secure transactions" />Transactions are
		secure and encrypted</span
	>
</footer>

<style lang="scss">
	@import '../theme.scss';

	footer {
		background: #fff;
		text-align: center;
		display: grid;
        height: auto;
        min-height: auto;
		// flex-direction: column;
		// min-height: auto;
		// flex-wrap: wrap;
		// justify-content: center;
		// align-items: center;

		> div {
			grid-column-start: 1;
			grid-column-end: 1;
			grid-row-start: 1;
			grid-row-end: 1;
			width: 100%;
		}

		a,button {
			@include body-lg;
			font-weight: 620;
			letter-spacing: 0.3px;
			color: #fff;
			text-decoration: none;
			background-color: $neutral-20;
			border-radius: 56px;
			border:0;
			padding: $p-4 $p-2;
			display: flex;	
			flex-grow: 1;
			width: 100%;
			align-self: stretch;
			gap: 4px;
			align-items: center;
			justify-content: center;
			box-shadow: $button-shadow;
			transition: all 0.25s cubic-bezier(.77,0,.25,1);

		}
		a.disabled {
			// filter: brightness(1.6);
			 background-blend-mode: screen;
		}
		a:hover,button:hover {
			cursor: pointer;
			// background-color: $neutral-10;
			transform: translateY(-1px) scale(1.02);
			filter: brightness(.96);
		}
		a:active,button:active{
			cursor: pointer;
			background-color: $neutral-20;
			transform: translateY(0px) scale(.98);
			filter: brightness(1);
		}
		.helper {
			@include body-sm;
			padding: $p-2;
			color: $neutral-30;
           justify-content: center;
		}
		.secure {
			@include body-xs;
			color: $neutral-30;
			line-height: 1.5rem;
			display: flex;
			justify-content: center;
			gap: 4px;
			padding: $p-3 0;
			// background: transparent url('/src/img/secure.svg') no-repeat 0% 56%;
		}
		//buttons brands
		a.paypal {
			background: #ffc439;
			color: $neutral-20;
			:hover {
				background-color: #ffc439;
			}
		}

		a.venmo {
			background-color: #3d95ce;
			:hover {
				background-color: #3d95ce;
			}
			img {
				height: 18px;
			}
		}
		button.crypto,a.crypto {
			background-image: linear-gradient(to right, #4776e6 0%, #8e54e9 51%, #4776e6 100%);
			color: white;
			background-size: 200% auto;
		}
		a.applepay span {
			font-size: 20px;
			margin-top: -2px;
			line-height: 20px;
			font-weight: 600;
			padding-left: 2px;
		}
	}
</style>
