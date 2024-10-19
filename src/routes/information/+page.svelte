<!-- credit card page -->
<script>
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import Stepper from '../../components/UI/Stepper.svelte';
	import Input from '../../components/UI/Input.svelte';
	import Checkbox from '../../components/UI/Checkbox.svelte';
	import TextArea from '../../components/UI/Textarea.svelte';
	import PrimaryFooter from '../../components/PrimaryFooter.svelte';
	//import Processing from '../../components/UI/Processing.svelte';
	import Select from '../../components/UI/Select.svelte';
	import Alert from '../../components/UI/Alert.svelte';

	import CartSummary from '../../components/Cart.svelte';
	import cartItems from '../../cart.js';

	//import updateErrors from '../../validation.js';
	//let validation = new updateErrors();

	// import processDonation from '../../processDonation.js';
	// let processdonation = new processDonation();

	let gift;
	let theErrors;

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

		//goto('/information');
		console.log('updateGift-after');
	}

	//import {updateErrors} from '../../validation.js';
	// import {processDonation} from '../../processDonation.js';

	function closeMe() {
		const alertBox = document.querySelector('#notifications');
		alertBox.classList.add('showMe');
	}

	function processDonation() {
		const dialog = document.querySelector('#processing');
		const theForm = document.querySelector('form');
		const alertBox = document.querySelector('#notifications');
		const inputs = theForm?.querySelectorAll('input, select,textarea');

		console.log('processing');

		//want validation uncomment this line below
		updateGift();
		
		goto('/payment');
		

		let skipVal = false;

		if (!skipVal) {
			if (theForm.checkValidity()) {
				// dialog.show();
				// setTimeout(() => {
				// 	console.log('processed');
				// 	goto(`/thanks`);
				// }, '2400');
				console.log('checkValidity', theForm.checkValidity());

				//updateGift();
				goto('/payment');
				console.log('updateGift-after');
			} else {
				let firstField = false;
				let theError = [];
				let totalErrors = inputs.length;
				for (let input of inputs) {
					console.log(
						'detect',
						window.getComputedStyle(input, '-webkit-autofill').getPropertyValue('appearance') ===
							'menulist-button'
					);
					// if (!input.style.is(":-webkit-autofill"))
					// 	{
					// 		console.log("true autofill")
					// 	}
					if (input.required && !input.checkValidity()) {
						//sets first field as focus
						//let theField = `'#${input.id}''`;
						
						document.getElementById('firstname').focus()
						

						alertBox.firstChild.classList.remove('hidebanner');

						// if(!firstField){
						// 	console.log('first error',input.id)
						// 	document.getElementById(`'${input.id}'`).focus();
						// }
						// firstField == false
						// 	? document.getElementById('firstname').focus()
						// 	: (firstField = true);

						input.parentNode.classList.add('error');
						console.log('input.previousSibling', input.previousSibling.id);
						theError.push(' ' + input.parentNode.firstElementChild.firstElementChild.textContent);
					}
				}
				let lastOne = theError.length - 1;
				theError.splice(theError.length - 1, theError.length, ' and ' + theError[lastOne]);
				theErrors = theError;
				alertBox.classList.remove('showMe');
				hasSubmitted = true;
				console.log('showErrors', totalErrors);
			}
		}

		//document.getElementById("firstname").focus()

		console.log('processDonation');
	}

	function updateErrors() {
		const dialog = document.querySelector('#processing');
		const theForm = document.querySelector('form');
		const alertBox = document.querySelector('#notifications');
		const inputs = theForm.querySelectorAll('input, select,textarea');

		let firstField = false;
		let theError = [];
		let totalErrors = inputs.length;

		for (let input of inputs) {
			if (input.required && !input.checkValidity()) {
				//sets first field as focus
				//let theField = `'#${input.id}''`;
				let focusMe = document.querySelector('#firstname');

				input.parentNode.classList.add('error');
				console.log('input.previousSibling', input.previousSibling.id);
				theError.push(' ' + input.parentNode.firstElementChild.firstElementChild.textContent);
			}
		}
		let lastOne = theError.length - 1;

		//compose error list

		lastOne > 0
			? theError.splice(theError.length - 1, theError.length, ' and ' + theError[lastOne])
			: undefined;
		lastOne < 0 ? alertBox.firstChild.classList.add('hidebanner') : undefined;
		theErrors = theError;

		//alertBox.classList.remove('showMe');
	}

	const countries = [
		'Please select',
		'Friend 👯‍♀️',
		'Family 👨‍👩‍👧‍👦',
		'Advertisment ✨',
		'Search Engine 🔎',
		'Other 💜'
	];

	const breadcrumbs = ['previous', 'previous', 'current', 'next', 'next'];

	onMount(async () => {
		const theForm = document.querySelector('form');
		const inputs = theForm.querySelectorAll('input, select');
		console.log('setup validation');

		// Loop through fields...
		for (let input of inputs) {
			//input
			input.parentNode.classList.add('isChanged');

			input.addEventListener('input', (event) => {
				//passive error only applied on blur
				console.log('input evt');

				if (input.checkValidity()) {
					input.parentNode.classList.remove('error');
					console.log('No error');
				} else if (
					input.parentNode.classList.contains('isTouched') &&
					!input.parentNode.classList.contains('isValid') &&
					!input.parentNode.classList.contains('isChanged')
				) {
					input.parentNode.classList.add('error');
					input.value !== ''
						? input.parentNode.classList.add('not-empty')
						: input.parentNode.classList.remove('not-empty');
				}

				//more aggressive on re-entry

				// if (input.parentNode.classList.contains('isTouched') && !input.parentNode.classList.contains('isValid')) {
				// 	input.checkValidity()
				// 		? input.parentNode.classList.remove('error')
				// 		: input.parentNode.classList.add('error');
				// 	input.value !== ''
				// 		? input.parentNode.classList.add('not-empty')
				// 		: input.parentNode.classList.remove('not-empty');
				// 	console.log('input event', input.checkValidity());
				// }

				input.parentNode.classList.add('isDirty');
			});

			// change
			input.addEventListener('change', (event) => {
				console.log('change event', input.type, input.value);
				console.log(
					'detect-change',
					window.getComputedStyle(input, '-webkit-autofill').getPropertyValue('appearance') ===
						'menulist-button'
				);
				input.parentNode.classList.contains('isChanged')
					? input.parentNode.classList.remove('isChanged')
					: undefined;

				input.checkValidity()
					? input.parentNode.classList.add('isValid')
					: input.parentNode.classList.remove('isValid');

				if (input.type == 'select-one' && input.checkValidity()) {
					input.value == 'Please select' ? input.parentNode.classList.remove('error') : undefined;
				}
				hasSubmitted ? updateErrors() : undefined;
			});

			// blur validate
			input.addEventListener('blur', (event) => {
				if (input.checkValidity()) {
					input.parentNode.classList.remove('error');
					console.log('A');
				} else if (input.parentNode.classList.contains('isDirty')) {
					input.parentNode.classList.add('error');
					input.value !== ''
						? input.parentNode.classList.add('not-empty')
						: input.parentNode.classList.remove('not-empty');
					console.log('B');
				} else {
					console.log('C');
				}
				if (input.type == 'select-one' && input.checkValidity() && input.required) {
					console.log('blur select', input.value);
					input.value == '' ? input.parentNode.classList.add('error') : undefined;
				}
				input.parentNode.classList.add('isTouched');
				console.log('valid', input.id, input.checkValidity());
			});

			//focus valid check
			input.addEventListener('focus', (event) => {
				//console.log('valid',input.id,input.checkValidity())
			});
		}
	});
</script>

<svelte:head>
	<title>Santa Pantry - Donor information</title>
</svelte:head>
<!-- <Processing /> -->
<div id="notifications" class="showMe">
	<Alert status={'error'} label={theErrors} closeMe={() => closeMe()} />
</div>

<main class="checkout">
	<form id="info">
		<section class="formcontent">
			<header>
				<h1>Donor Information</h1>
				<Stepper state={breadcrumbs} hasCC="none" />
			</header>
			<section>
				<div class="col-2 topEl">
					<Input label={'First name'} val={''} required={true} patternValidation={'.+'} />
					<Input label={'Last name'} val={''} required={true} patternValidation={'[a-zA-Z0-9]+'} />
				</div>
				<Checkbox label={'Hide my name from the public'} />
				<Input
					label={'Email'}
					val={''}
					required={true}
					type={'email'}
					helper={'Your receipt will be emailed here.'}
					invalidMsg={'Please use email format of name@email.com'}
				/>
				<Checkbox label={'It’s ok to contact me in the future'} />

				<Input
					label={'Phone'}
					val={''}
					required={false}
					patternValidation={'[0-9-./()+ ]{9,24}'}
					type={'tel'}
					invalidMsg={'Please enter a valid phone number'}
				/>
				<!-- <Input
					label={'Cell Phone'}
					val={''}
					required={false}
					patternValidation={'[0-9-./()+ ]{9,24}'}
					type={'tel'}
					invalidMsg={'Please enter a valid phone number'}
				/> -->

				<!-- {#if customquestion==='some'} -->
				<!-- <Input
					label={'How did you find us?'}
					val={''}
					required={false}
					patternValidation={'[a-zA-Z0-9]+'}
					type='select-one'
				/> -->
				<Select label={'How did you find us?'} val={''} required={false} listItems={countries} />
				<!-- {/if} -->

				<!-- <TextArea
					label={'Leave a comment'}
					val={''}
					required={false}
					limit={100}
					patternValidation={'[a-zA-Z0-9]+{0,4}'}
				/> -->
			</section>
			<PrimaryFooter ctatext={'payment'} nextStep={() => processDonation()} />
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
</style>
