<!-- //PAYMENT METHODS VIEW  -->


<script>

	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';

	import Stepper from '../../components/UI/Stepper.svelte';
	import PaymentMethods from '../../components/PaymentMethods.svelte';
	import PaymentFooter from '../../components/PaymentFooter.svelte';
	import ApplePay from '../../components/UI/ApplePay.svelte';
	import Processing from '../../components/UI/Processing.svelte';
	import CartSummary from '../../components/Cart.svelte';
	import cartItems from '../../cart.js';	

	let gift;
	let paymentChoosen;

	cartItems.subscribe((items) => {
		// console.log(items)
		gift = items;
	});
	let donationAmt = gift.myamount;
	let donationFrequency = gift.frequency;
	let dcfVal = gift.dcfAmount;
	let dcfChecked = gift.dcfChecked;
	let totalAmount = gift.totalAmount;
	paymentChoosen = 'creditcard'

	

	function updateGift() {
		console.log('updateGift', gift);
		// cartItems.update(items => {
		// 	return [
		// 		items.amount = selectedAmount;
		// 	]
		// })
		cartItems.set({
			payment: paymentChoosen,
			myamount: donationAmt,
			frequency: donationFrequency,
			dcfChecked: dcfChecked,	
			dcfAmount: dcfVal,
			totalAmount: totalAmount,
			hasGift: false,
		});
		console.log('updateGift-after', gift);
	}
	function nextStep(){
		console.log('nextstep',paymentChoosen);
		updateGift()
		if(paymentChoosen=='creditcard'){
			goto(`/${paymentChoosen}`)
		}else {
			thirdPartyProcessor()
		}
		
	}
	function thirdPartyProcessor(evt) {
		const dialog = document.getElementById('applepayui');
		console.log('processDonation', dialog);
		dialog.show();
	}
	const breadcrumbs = [
		'previous',
		'previous',
		'previous',
		'current',
		'next',

	]

	onMount(async () => {

		// const theHead = document.querySelector('#pagehead')
		// theHead.focus()
	});

	
	
	

</script>


<svelte:head>
   <title>Santa Pantry - Payment method</title>
</svelte:head>
<ApplePay paymentMethod={paymentChoosen} />
<Processing />
<main class="checkout">
	
	<form>
		<section class="formcontent">
			<header>
				<h1 id='pagehead' tabindex='0'>Payments Method</h1>
				<Stepper  hasCC='none' state={breadcrumbs} />
			
					
			</header>
			<PaymentMethods bind:paymenttype={paymentChoosen} />
			<PaymentFooter 
				ctatext={paymentChoosen} 
				nextStep={() => nextStep()}
			/>
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
	
</style>
