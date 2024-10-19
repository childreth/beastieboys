<!-- credit card page -->
<script>
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import Stepper from '../../components/UI/Stepper.svelte';
	import PrimaryFooter from '../../components/PrimaryFooter.svelte';

	import CartSummary from '../../components/Cart.svelte';
	import Options from '../../options.js';
	import cartItems from '../../cart.js';
	import DoubleDonation from '../../components/DoubleDonation.svelte';
	import Designations from '../../components/UI/Designation.svelte';
	import Comments from '../../components/UI/LeaveComment.svelte';
	import Dedications from '../../components/UI/Dedications.svelte'


	// import updateErrors from '../../validation.js';
  	// let validation = new updateErrors();

	// import processDonation from '../../processDonation.js';
  	// let processdonation = new processDonation();

	let gift;
	let theOptions;
	let theErrors;

	Options.subscribe((items) => {
		// console.log(items)
		theOptions = items;
	});
	let comments=theOptions.comment
	let designations=theOptions.designations
	let dedicationType=theOptions.dedicationType
	let honoreeFirst=theOptions.honoreeFirst
	let honoreeLast=theOptions.honoreeLast

	function updateOptions() {
		Options.set({
			comment: comments,
			designations: designations,
			dedicationType: dedicationType,
    		honoreeFirst: honoreeFirst,
    		honoreeLast: honoreeLast,
		
		});
		
	
	}
	//let donationAmt = gift.myamount;
	

	cartItems.subscribe((items) => {
		// console.log(items)
		gift = items;
	});
	let donationAmt = gift.myamount;
	let donationFrequency = gift.frequency;
	let dcfVal = gift.dcfAmount;
	let dcfChecked = gift.dcfChecked;
	let totalAmount = gift.totalAmount;
	let paymentMethod = gift.payment;
	let hasSubmitted = false;

	function updateGift() {
		console.log('updateGift', gift);
		// cartItems.update(items => {
		// 	return [
		// 		items.amount = selectedAmount;
		// 	]
		// })
		cartItems.set({
			payment: paymentMethod,
			myamount: donationAmt,
			frequency: donationFrequency,
			dcfChecked: dcfChecked,
			dcfAmount: dcfVal,
			totalAmount: totalAmount,
			hasGift: false
		});
		
		// goto("/information")
		console.log('updateGift-after');
	}

	function nextStep(){
		updateGift()
		updateOptions()
		goto("/information")
	}

	//import {updateErrors} from '../../validation.js';
	// import {processDonation} from '../../processDonation.js';




	const breadcrumbs = ['previous', 'current','next', 'next', 'next'];

	onMount(async () => {

	
	});
</script>

<!-- <Processing /> -->
<svelte:head>
   <title>Santa Pantry - Donation options</title>
</svelte:head>

<main class="checkout">
	<form id="info">
		<section class="formcontent">
			<header>
				<h1>Donation options</h1>
				<Stepper state={breadcrumbs} hasCC='none' />
			</header>
			<ul class='details' aria-label='Donation options'>
				<Designations bind:pdValue={designations}/>
				<Dedications 
					bind:firstName={honoreeFirst}
					bind:lastName={honoreeLast}
					bind:dedicationtype={dedicationType}
					/>
				<Comments bind:theComment={comments} />
				<DoubleDonation /> 
			</ul>
			<PrimaryFooter ctatext={'information'} nextStep={() => nextStep()} />
			</section>
	</form>
	<div class="summary">
		<CartSummary
			{donationAmt}
			{donationFrequency}
			dcfValue={dcfVal}
			bind:dcfCheck={dcfChecked}
			{totalAmount}
			
		/>
	</div>
</main>

<style lang="scss">
	@import '../../checkout.scss';

	textarea.error {
		border-color: red !important;
	}
	.details {
		display: flex;
		flex-direction: column;
		position: relative;
		gap:.5rem;
		margin:0;
		flex-grow: 1;
		padding:$p-7 0 $p-6_5 0;
	}
	@media only screen and (max-width: 468px){
		.formcontent {
		display: flex;
		}
	}
	
	
</style>
