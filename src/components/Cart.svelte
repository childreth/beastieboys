<script>
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	

	export let donationAmt = Number;
	export let donationFrequency = String;
	export let dcfValue = Number;
	export let dcfCheck;
	export let totalAmount;
	export let paymentMethod;

	import creditcardlogo from '../img/generic_cc.svg';
	import ccbrands from '../img/cc-brands.svg';
	import applepaylogo from '../img/applepay.svg';
	import paypallogo from '../img/paypal.svg';
	import venmologo from '../img/venmo.svg';
	import banklogo from '../img/bank.svg';
	import cryptologo from '../img/cyrpto.svg';
	import donatelogo from '../img/donate.svg';

	import Checkbox from '../components/UI/Checkbox.svelte';
	import Button from '../components/UI/Button.svelte';

	let dcfListItem = 1;
	let theDetails;
	let editedTotal;

	$: !dcfCheck ? editedTotal = donationAmt : editedTotal = totalAmount;
	$: paymentLogo = '/src/img/'+paymentMethod+'.svg'

	import Badge from './UI/Badge.svelte';
	import DoubleDonation from './DoubleDonation.svelte';
	// $: {
	// 	if(dcfCheck){ totalAmount = (Number(donationAmt) + Number(dcfValue)).toFixed(2)}
	// else{
	// 	totalAmount =Number(donationAmt)
	// }};
	onMount(async () => {
		visualViewport.width > 768 ? (theDetails.open = true) : (theDetails.open = false);
		visualViewport.addEventListener('resize', () => {
			if (visualViewport.width > 768) {
				theDetails.open = true;
			} else {
				theDetails.open = false;
			}
		});
	});
	$: {
		if (dcfCheck) {
			dcfListItem = dcfValue;
		} else {
			dcfListItem = 0.0;
		}
	}

	function showSummary() {
		const theSummary = document.querySelector('summary');
		const summaryDetails = document.querySelector('.summaryDetails');
		const theDetails = document.querySelector('details');
		if (theDetails.open) {
			// gsap.fromTo(".summaryDetails", {height: 0}, {height: 500, ease: Expo.easeOut,duration: 1});
		}

		console.log('open?', theDetails.open);
	}
</script>

<aside class="summaryWrapper" aria-label="Donation summary">
	<h2 class='hideIt'>Your donation summary</h2>
	<details bind:this={theDetails}>
		<summary on:click={showSummary}>
			<div class="summaryHeader">
				<span>View Summary</span> <span class="">{donationFrequency} / ${donationAmt}</span>
			</div>
		</summary>
		<section class="summaryDetails">
			<div class="donationsummary">
				<div class="topTotal" aria-label="edit your donation">
					<span><sup>$</sup>{editedTotal}</span>
					<Badge label={donationFrequency} status="dark" size={'large'} showIcon={true} />
				</div>
				<!-- <Button label="Edit" class="text" /> -->
			</div>
			<Checkbox
				label={`Cover transaction fees (\$${dcfValue})`}
				bind:checked={dcfCheck}
				hideOptional
				toolTip="I’d like to cover the fees associated with my donation so more of my donation goes directly to Santa Fe Pantry."
			/>

			{#if paymentMethod !== undefined}
				<div class="payment">
					<span
						>Pay with
						<span class="paymentIcon"
							><img src={paymentLogo} height="20px" width="auto" alt="payment method" />
						</span>
					</span>
					<Button label="Edit" class="text" />
				</div>
			{/if}

			<ul aria-label="Your checkout items">
				<li><span>Donation ({donationFrequency})</span><span>${donationAmt}</span></li>
				<li><span>Fees</span><span>${dcfListItem}</span></li>
				<li class="total"><span>Total</span><span>${editedTotal}</span></li>
			</ul>
			<!-- <DoubleDonation /> -->
			<p class="terms">
				Santa Pantry is a 501(c)3 tax-exempt organization and your donation is tax deductible within
				the guidelines of U.S. taxes, please keep your email donation as a deduction on your U.S.
				taxes, please keep your email donation receipt as your official record. We'll send it to you
				upon successful completion of your donation.
			</p>
		</section>
	</details>
</aside>

<style lang="scss">
	@import '../global.scss';

	aside {
		padding: 92px 0 24px 0;
		width: 336px;
		align-items: center;

		details {
			// border-top: 1px solid $cardboard-lighter;
			border-bottom: 1px solid $border-light;
			// transition: border .3s ease-in-out;
		}
		details[open] {
			// border-top:0;
			// border-bottom: 0;
		}

		summary {
			display: none;
		}
		.summaryDetails {
			padding: 0;
			// transform: translateY(-400px);
			// margin-top:-700px;
			// display: flow-root;
			// overflow: hidden;
			// overflow: clip;
			//transition: all .5s cubic-bezier(.17,.67,.13,1.06);
		}
		:global(.summaryOpen) {
			animation: slideDown .75s cubic-bezier(.17,.67,.13,1.06) forwards;
			transform: translateY(-400px);
			transition: all 0.5s cubic-bezier(0.17, 0.67, 0.13, 1.06);
		}
		:global(.summaryClose) {
			animation: slideUp 0.75s cubic-bezier(0.17, 0.67, 0.13, 1.06) forwards;
		}

		.donationsummary,
		.payment {
			display: flex;
			align-items: center;
			margin: 0 0 $p-2 0;
		}
		.payment {
			justify-content: space-between;
			margin: $p-5 0 $p-0 $p-1;
			flex-grow: 1;
		}
		.payment > * {
			display: flex;
			gap: 4px;
			align-items: center;
		}
		.summaryHeader {
			display: inline-flex;
			margin: 0;
			font-weight: 400;
			padding: $p-3 $p-5;
			@include body-sm;
			display: flex;
			justify-content: space-between;
			flex-grow: 1;
			color: $theme-primary;
			font-weight: 700;

			span {
				font-weight: 400;
				color: $neutral-20;
			}
		}

		.topTotal {
			display: flex;
			align-content: space-between;

			gap: 8px;
			flex-grow: 1;
			margin: 0;
			font-size: $fs-page-title;
			line-height: 28px;
			font-weight: 650;

			> span {
				flex-direction: row;
				display: flex;
				gap: 0px;
			}

			sup {
				font-size: $fs-body;
				padding: 0 2px 0 0;
			}
		}
	}
	ul {
		padding: $p-6 $p-1;
		display: flex;
		flex-direction: column;
		gap: 16px;
		margin: $p-6_5 0 $p-5 0;
		border-top: 1px solid white;
	}
	ul li {
		list-style-type: none;
		@include body;
		display: flex;
		justify-content: space-between;
		padding: 0;
		font-weight: 350;
		color: $ink;
	}
	ul li.total {
		border-top: 1px solid white;
		padding: $p-6 0 0 0;
		font-weight: 600;
		@include body-lg;
		margin-top: $p-3;
	}
	.terms {
		@include body-xs;
		color: $neutral-50;
		padding:0;
		margin: 0;
	}
	.paymentIcon {
		width: 40px;
		height: 24px;
		display: flex;
		padding-left:$p-1;
		align-items: center;
		justify-content: flex-start;
		img {
			transform: scale(1.2);
		}
	}
	@media screen and (max-width: 1020px) {
		aside {
			width: 100%;
		}
	}
	@media screen and (max-width: 768px) {
		aside {
			padding: 0;
			details {
				background-color: $bg-lightest;
			}
			.summaryDetails {
				padding: $p-5 $p-5 $p-7;
			}
			summary {
				display: flex;
				background-color: white;
			}
			details[open] summary {
				background-color: $bg-lightest;
			}
		}
	}
	@keyframes slideDown {
		from {
			margin-top: -600px;
			opacity: 0;
		}

		to {
			margin-top: 0;
			opacity: 1;
		}
	}
	@keyframes slideUp {
		from {
			margin-top: 0px;
			opacity: 0;
		}

		to {
			margin-top: -600px;
			opacity: 1;
		}
	}
</style>
