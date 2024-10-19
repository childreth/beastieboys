<script>
	import { onMount } from 'svelte';
	import { slide } from 'svelte/transition';
	import { quintInOut } from 'svelte/easing';
	import { goto } from '$app/navigation';

	// function fadeSlide(node, options) {
	// 		const slideTrans = slide(node, options)
	// 		return {
	// 			duration: options.duration,
	// 			easing: options.easing,
	// 			css: t => `
	// 				${slideTrans.css(t)}
	// 				opacity: ${t};
	// 			`
	// 		};
	// 	}

	import Stepper from '../../components/UI/Stepper.svelte';
	import Input from '../../components/UI/Input.svelte';
	import Select from '../../components/UI/Select.svelte';
	import Checkbox from '../../components/UI/Checkbox.svelte';
	import PrimaryFooter from '../../components/PrimaryFooter.svelte';
	import Button from '../../components/UI/Button.svelte';
	import Alert from '../../components/UI/Alert.svelte';
	import Processing from '../../components/UI/Processing.svelte';

	let companyCC = false;
	let showAddress2 = false;

	import CartSummary from '../../components/Cart.svelte';
	import cartItems from '../../cart.js';

	let gift;
	let theErrors;
	let hasSubmitted = false;

	cartItems.subscribe((items) => {
		// console.log(items)
		gift = items;
	});
	let donationAmt = gift.myamount;
	let donationFrequency = gift.frequency;
	let dcfVal = gift.dcfAmount;
	let dcfChecked = gift.dcfChecked;
	let totalAmount = gift.totalAmount;
	let paymentChoosen = gift.payment;

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
			hasGift: false
		});
		console.log('updateGift-after', gift);
	}

	// function nextStep(){
	// 	console.log('nextstep',paymentChoosen);
	// 	updateGift()
	// 	goto(`/information`)

	// }
	const states = [
		'Please select',
		'Alabama',
		'California',
		'Delware',
		'Massachusetts',
		'Minnesota',
		'Nebraska',
		'New York',
		'Utah'
	];
	const countries = [
		'United States of America',
		'Canada',
		'Chile',
		'France',
		'Hungary',
		'Russia',
		'Ubezestan',
		'Zimbabwe'
	];
	const breadcrumbs = ['previous', 'previous', 'previous', 'previous','current'];

	function closeMe() {
		const alertBox = document.querySelector('#notifications');
		alertBox.classList.add('showMe');
	}

	function nextStep() {
		const dialog = document.querySelector('#processing');
		const theForm = document.querySelector('form');
		const alertBox = document.querySelector('#notifications');
		const inputs = theForm.querySelectorAll('input, select,textarea');
		let skipVal = false;
		//want validation uncomment this line below
		updateGift();
			// dialog.show();
			// setTimeout(() => {
			// 	console.log('processed');
			// 	goto(`/thanks`);
			// }, '2400');
		
			console.log('theForm.checkValidity()',theForm.checkValidity());

		if (theForm.checkValidity() || skipVal) {
			console.log('nextstep', theForm);
			updateGift();
			dialog.show();
			setTimeout(() => {
				console.log('processed');
				goto(`/thanks`);
			}, '2400');
		} else {
			let firstField=false;
			let theError = [];
			let totalErrors = inputs.length
			for (let input of inputs){
				if(input.required && !input.checkValidity()) {

					//sets first field as focus
					//let theField = `'#${input.id}''`;
					//let focusMe = document.querySelector('#firstname')
					alertBox.firstChild.classList.remove('hidebanner')

					//firstField==false ? document.getElementById("firstname").focus() : firstField=true;

					input.parentNode.classList.add('error');
					console.log('input.previousSibling',input.previousSibling.id)
					theError.push(" " + input.parentNode.firstElementChild.firstElementChild.textContent);
				} 

			}
			let lastOne = theError.length-1
			theError.splice((theError.length-1), theError.length, (' and ' + theError[lastOne]))
			theErrors = theError;
			alertBox.classList.remove('showMe');
			hasSubmitted=true;
			console.log('showErrors',totalErrors);
			
		}

		console.log('processDonation');
	}

	function updateErrors() {
		const dialog = document.querySelector('#processing');
		const theForm = document.querySelector('form');
		const alertBox = document.querySelector('#notifications');
		const inputs = theForm.querySelectorAll('input, select,textarea');

		let firstField=false;
		let theError = [];
		let totalErrors = inputs.length

		for (let input of inputs){
				if(input.required && !input.checkValidity()) {

					//sets first field as focus
					//let theField = `'#${input.id}''`;
					let focusMe = document.querySelector('#firstname')

					input.parentNode.classList.add('error');
					console.log('input.previousSibling',input.previousSibling.id)
					theError.push(" " + input.parentNode.firstElementChild.firstElementChild.textContent);
				} 

			}
			let lastOne = theError.length-1
			

			lastOne >0 ? theError.splice((theError.length-1), theError.length, (' and ' + theError[lastOne])) : undefined;
			lastOne <0 ? alertBox.firstChild.classList.add('hidebanner') : undefined;
			theErrors = theError;

			//alertBox.classList.remove('showMe');
			
	}

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
					console.log('A');
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

				input.parentNode.classList.contains('isChanged')
					? input.parentNode.classList.remove('isChanged')
					: undefined;

				input.checkValidity()
					? input.parentNode.classList.add('isValid')
					: input.parentNode.classList.remove('isValid');

				if (input.type == 'select-one' && input.checkValidity()) {
					input.value == 'Please select' ? input.parentNode.classList.remove('error') : undefined;
				}
				hasSubmitted ? updateErrors(): undefined;
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

<div id="notifications" class="showMe">
	<Alert status={'error'} label={theErrors} closeMe={() => closeMe()} />
</div>
<Processing />
<main class="checkout">
	<form id="info">
		<section class="formcontent">
			<header>
				<h1>Add card details</h1>
				<Stepper state={breadcrumbs} hasCC={paymentChoosen} />
			</header>
			<section class="content">
				<Input
					label={'Card number'}
					val={'4242 4242 4242 4242'}
					required={true}
					type={'text'}
					disabled={true}
					readOnly={true}
					patternValidation={'[a-zA-Z0-9.+ ]+'}
					placeholder="1234 1234 1234 1234"
					autocomplete={'off'}
				/>

				<div class="fieldCol2">
					<Input
						label={'Exp. date'}
						val={'12/34'}
						type={'text'}
						required={true}
						readOnly={true}
						disabled={true}
						patternValidation={'[a-zA-Z0-9.+/ ]+'}
						placeholder="MM/YY"
						autocomplete={'off'}
					/>
					<Input
						label={'Security code'}
						val={'000'}
						required={true}
						readOnly={true}
						disabled={true}
						patternValidation={'[a-zA-Z0-9.+ ]+'}
						placeholder="CVC"
						autocomplete={'off'}
					/>
				</div>

				<fieldset class="companycard">
					<legend class="hideIt">Company credit card</legend>
					<Checkbox label={'Is this a company card'} bind:checked={companyCC} hideOptional />
					{#if companyCC}
						<div>
							<Input
								label={'Company'}
								val={''}
								required={true}
								patternValidation={'[a-zA-Z0-9]+'}
							/>
						</div>
					{/if}
				</fieldset>
				<Select label={'Country'} val={''} required={true} listItems={countries} />
				<Input
					label={'Address'}
					val={''}
					required={true}
					patternValidation={'[a-zA-Z0-9.+ ]+'}
					invalidMsg={'Please enter a real address'}
				/>
				<div class="address2">
					{#if !showAddress2}
						<div>
							<Button
								label={'+ Add apt., suite, floor'}
								class="text"
								on:click={() => (showAddress2 = !showAddress2)}
							/>
						</div>
					{/if}

					{#if showAddress2}
						<!-- transition:fadeSlide="{{duration: 400,easing: quintInOut}}" -->
						<div>
							<Input
								label={'Address 2'}
								val={''}
								required={false}
								patternValidation={'[a-zA-Z0-9.+ ]+'}
								placeholder={'Apt., suite, floor'}
							/>
						</div>
					{/if}
				</div>

				<Input label={'City'} val={''} required={true} patternValidation={'[a-zA-Z0-9.+ ]+'} />
				<div class="cityzip">
					<Select
						label={'State'}
						val={''}
						required={true}
						listItems={states}
						autocomplete={'address-level1'}
					/>
					<Input
						label={'Zip code'}
						val={''}
						type={'number'}
						required={true}
						patternValidation={'[0-9]+'}
						autocomplete={'postal-code'}
					/>
				</div>
			</section>

			<PrimaryFooter ctatext={'final'} nextStep={() => nextStep()} />
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

	.form > section > section {
		padding: $p-5 0;
	}

	textarea.error {
		border-color: red !important;
	}
	.companycard {
		border: 0;
		padding: $p-1 0;
		margin: 0;
		display: flex;
		flex-direction: column;
		gap: 0;
		legend {
		}
		:global(.inputGroup) {
			margin-top: $p-1;
		}
	}
	.cityzip {
		display: flex;
		flex-direction: row;
		gap: 8px;
	}
	:global(.cityzip > div:first-child) {
		flex-basis: 70%;
	}
	
</style>
