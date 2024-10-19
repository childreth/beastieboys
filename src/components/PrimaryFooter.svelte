<script>
	import sheild from '../img/shield.svg';
    import { goto } from '$app/navigation';

	export let helper = 'Tim Cook will personally take your money';
	export let ctatext = 'Continue';
	export let nextStep = () => {};

	$: {
		if (ctatext == 'final') {
			helper = 'By donating you agree to our Terms & Privacy Policy';
			ctatext = 'Donate Now  ❤️';
		} else if (ctatext == 'payment') {
			helper = "Final step you'll finish up with payment method";
			ctatext = 'Continue to payment';
		} else {
			helper = "Continue or customize with these options above";
			ctatext = 'Continue to information';
		}

	}

	// function exitStageRight(evt) {
	// 	console.log('exitStageRight');
	// 	const theForm = document.querySelector('.form');
	// 	theForm.classList.add('formOut');

	// 	theForm.addEventListener('animationend', () => {
	// 		console.log('animation ends');
	// 		//gotoInfo();
    //         goto(`/information`)
	// 		//window.location.href = '/information'
	// 	});
	// }
	// function gotoInfo(){
	// 	goto(`/information`)
	// }

	//import { fade } from 'svelte/transition';
</script>

<footer>
	{#if ctatext == 'payment'}
		<span class="helper">{helper}</span>
		<button on:clic|preventDefault={nextStep}>{ctatext}</button>
	{:else}
		<span class="helper">{helper}</span>
		<button on:click|preventDefault={nextStep}>{ctatext}</button>
	{/if}
	<span class="secure"
		><img src={sheild} width="24px" height="24px" alt="secure transactions" />Transactions are
		secure and encrypted</span
	>
</footer>

<style lang="scss">
	@import '../theme.scss';

	footer {
		background: $neutral-100;
		text-align: center;
		display: flex;
		flex-direction: column;
		min-height: auto;
		flex-wrap: wrap;
		justify-content: center;
		padding-top:$p-2;

		a,button {
			@include body-lg;
			font-weight: 620;
			letter-spacing: 0.3px;
			color: #fff;
			border:none;
			cursor: pointer;
			text-decoration: none;
			background-color: $neutral-20;
			border-radius: 56px;
			padding: $p-4 $p-2;
			display: flex;
			flex-grow: 1;
			gap: 4px;
			align-items: center;
			justify-content: center;
			box-shadow: $button-shadow;
			transition: all 0.25s ease-in-out;
		}
		a:hover,button:hover {
			cursor: pointer;
			background-color: $neutral-20;
			transform: translateY(-1px);
			transform: scale(1.02);
		}
		.helper {
			@include body-sm;
			padding: $p-2;
			color: $neutral-30;
			display: flex;
			align-self: center;
		}
		.secure {
			@include body-xs;
			color: $neutral-30;
			line-height: 1.5rem;
			display: flex;
			justify-content: center;
			gap: 4px;
			padding: $p-3 0;
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
		a.crypto {
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
		@media only screen and (max-width: 480px) {
			.secure {
				padding: $p-2 0;
			}
		}
	}
	
</style>
