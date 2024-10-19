<script>
	// import Switch from './UI/Switch.svelte';
	import userHeart from '../../img/user-heart.svg';
	import ChildDialog from '../../components/UI/Dialog.svelte';
	import chervon from '../../img/chervon.svg';
	import Input from '../../components/UI/Input_Text.svelte';
	import Textarea from './Textarea.svelte';
	import Switch from '../../components/UI/Switch.svelte';
	import Ecard from '../../components/UI/Ecard.svelte';
	import Select from '../../components/UI/Select.svelte';
	import Button from '../../components/UI/Button.svelte';

	import { onMount } from 'svelte';

	import { fade,slide } from 'svelte/transition';
	import { quadOut,circInOut } from 'svelte/easing';
	import { add_render_callback } from 'svelte/internal';
	let options = {duration: 100, easing: circInOut};
	// const animate = (node, args) =>
	// 	args.cond ? slide(node, args) : slide(node, args);

	let closeModal;
	export let firstName = '';
	export let lastName = '';
	let email = '';
	let rec_firstName = '';
	let rec_lastName = '';
	let theMessage = '';
	export let dedicationtype = 'In honor of';
	let ecards = '';

	let showDedications = false;
	let showeCard = true;
	let showPrinted = false;

	$: fullName = firstName + ' ' + lastName;

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

	function openChild() {
		const dedView = document.querySelector('#dedication');
		
		let firstFocusable = dedView.querySelector('#honorof')
		dedView.showModal(firstFocusable);
		firstFocusable.focus();
		
		// firstFocusable.focus();
		console.log('dialog',firstFocusable);
	}
	function saveDedication() {
		//theSavedComment = theComment
		console.log('saved');
		closeModal();
	}
	function cancelDedication() {
		//theComment = theSavedComment
		closeModal();
		console.log('canceled');
		// theComment = theSavedComment
	}
	onMount(async () => {});
</script>

<ChildDialog
	thename="dedication"
	modalTitle="Dedicate a donation"
	saveIt={() => saveDedication()}
	cancelIt={() => cancelDedication()}
	bind:closeMe={closeModal}
>	<form novalidate>
	<div class="dcontent overflowView">
		<div class="type">
			<label>
				<input
					type="radio"
					id="honorof"
					name="dedicationtype"
					value="In honor of"
					required
					bind:group={dedicationtype}
					
				/>
				In honor of
			</label>
			<label>
				<input
					type="radio"
					id="memoryof"
					name="dedicationtype"
					value="In memory of"
				
					bind:group={dedicationtype}
				/>
				In memory of
			</label>
		</div>

		<div class="col-2 topEl" style="width:100%;padding-bottom:8px;">
			<Input
				label={'Honoree’s first name'}
				bind:val={firstName}
				required={true}
				patternValidation={'.+'}
			/>
			<Input
				label={'Honoree’s last name'}
				bind:val={lastName}
				required={true}
				patternValidation={'[a-zA-Z0-9]+'}
			/>
		</div>
		<div class='divider'></div>
		<div class="recipientHeader">
			<h2>Recipient options</h2>
		<p>Send someone a message about this donation</p>
		</div>
		
		<div class="switchHead">
			<Switch bind:checked={showDedications} name={'email'}>
				<!-- <h2>Dedication email</h2>
				<p>Optionally send a notification email</p> -->
				<span id="emailLabel">Email notification</span>
				<p id="emailDesc" class="SR_hide">Send an email to someone about this dedication, enabling shows additional form fields to complete</p>
			</Switch>
		</div>
		<div class="switchHead">
			<Switch bind:checked={showPrinted} name={'printed'}>
				<!-- <h2>Printed card</h2>
				<p>Send the recipient a postcard in the mail </p> -->
				<span id="printedLabel">Printed card in the mail</span>
				<p id="printedDesc" class="SR_hide">Add your address to send a postcard to someone, enabling shows additional form fields to complete</p>
			</Switch>
		</div>
		<div class='divider'></div>
		{#if showDedications || showPrinted}
		
			<section class='emailGroup' transition:slide={{...options}}>
				{#if showDedications }
				<div>
					<Input
						label={'Recipient’s email'}
						bind:val={email}
						required={true}
						patternValidation={'.+'}
					/>
				</div>
				{/if}
				<!-- //recipient name msg -->
				{#if showDedications || showPrinted}
				<div class="col-2 topEl" style="width:100%">
					<Input
						label={'Recipient’s first name'}
						bind:val={rec_firstName}
						required={true}
						patternValidation={'.+'}
					/>
					<Input
						label={'Recipient’s last name'}
						bind:val={rec_lastName}
						required={true}
						patternValidation={'[a-zA-Z0-9]+'}
					/>
				</div>
				<div>
					<Textarea
						label={'Your message to the recipient'}
						rows={3}
						required={false}
						limit={0}
						helperText={"Please spell check, include how you would like your name(s) signed, mention the amount if desired, and format your message as you would like it delivered."}
						hideLabel={false}
						bind:val={theMessage}
					/>
				</div>
				{/if}
				<!-- //ecard -->
				{#if showDedications}
				<div class="switchHead" style='margin-top:8px;'>
					<Switch bind:checked={showeCard} name={'eCard'}>
						<span id="printedLabel">Include an eCard</span>
						<p id="printedDesc" class="SR_hide">Add an ecard image to your email notification</p>
					</Switch>
				</div>
				{#if showeCard}
				<fieldset class="ecardThumbs" transition:slide={{...options}}>
					
						<legend class="SR_hide">Choose an ecard image</legend>
					<Ecard
						label="choice4"
						name='ecards'
						bind:ecards={ecards}
						
						imgsrc={"https://images.unsplash.com/photo-1552083375-1447ce886485?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTV8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"}
					/>
					<Ecard 
						label="choice1"
						name='ecards'
						bind:ecards={ecards}
						
						imgsrc={"https://images.unsplash.com/photo-1685556636541-b141d0a09746?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDh8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"}
					/>
					<Ecard 
						label="choice2"
						name='ecards'
						bind:ecards={ecards}
						
						imgsrc={"https://images.unsplash.com/photo-1495107334309-fcf20504a5ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE0fHxuYXR1cmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"}
					/>
					<Ecard 
						label="choice3"
						
						name='ecards'
						bind:ecards={ecards}
						
						imgsrc={"https://images.unsplash.com/photo-1685810062916-f14fdc0bfa64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1288&q=80"}
					/>
			
				</fieldset>
				<details>
					<summary>
						<span class='closed'>Show </span><span class='open'>Hide </span>&nbsp;Preview</summary>
					<div class="previewImg" transition:slide={{...options}}>
						<div class='image' >
							
							{#if ecards !==  ''}
							<img src={ecards} alt="ecard"  />
							{:else}
							<span style="opacity:.6">You haven't selected an eCard image</span>
							{/if}
						</div>
						<p>{theMessage}
							<!-- {#if theMessage !==  ''}
							{theMessage}
							{:else}
							<span style="opacity:.6">No message added for your ecard</span>
							{/if} -->
						</p>
					</div>
				</details>
				{/if}
				{/if}
			</section>
			
		{/if}
		
		<!-- <div class="switchHead">
			<Switch bind:checked={showPrinted} name={'printed'}>
				<h2>Printed card</h2>
				<p>Send the recipient a postcard in the mail </p>
			</Switch>
		</div> -->
		<!-- //printed card form -->
				{#if showPrinted}
				<section class="printed" transition:slide={{...options}}>
					<Select label={'Country'} val={''} required={true} listItems={countries} />
				<Input
					label={'Address'}
					val={''}
					required={true}
					patternValidation={'[a-zA-Z0-9.+ ]+'}
					invalidMsg={'Please enter a real address'}
				/>
				
				
				<Input label={'City'} val={''} required={true} patternValidation={'[a-zA-Z0-9.+ ]+'} />
				<div class="cityzip col-2"  style="width:100%">
					<Select
						label={'State'}
						val={''}
						required={true}
						listItems={states}
						autocomplete={'address-line1'}
						
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
				{/if}
	</div></form>
</ChildDialog>

<li class="optionItem">
	<button aria-labelledby="#destitle" on:click={openChild}>
		<div class="icon">
			<img src={userHeart} aria-hidden="true" alt="dedications" />
		</div>
		<div class="content">
			<span id="destitle" class="title">
				{#if fullName !== ''}Dedicated donation
				{:else}Dedicate my donation
				{/if}
			</span>

			<p class="subtitle">
				{#if fullName !== ' '}{dedicationtype} {/if}
				{fullName}
			</p>
		</div>
		<div class="action"><img src={chervon} alt="chevron" aria-hidden="true" /></div>
	</button>
	<!-- <Switch /> -->
</li>

<style lang="scss">
	@import '../../theme.scss';
	
	form {
		padding: 0 !important;
		width: 100%;
		overflow: hidden;
	}
	.divider {
		border-top: 1px solid $neutral-90;
		padding-top: $p-2;
		margin-top: $p-5;
	}
	.cityzip .inputGroup{
		flex-shrink: 1!important;
		box-sizing: border-box;
	}
	.recipientHeader {
		padding:$p-4 0 $p-2 0;
		h2 {
			@include body-lg;
			padding-bottom:$p-0_5;
		}
		p {
			color: $neutral-40;
		}
	}
	.type {
		border-radius: $border-rnd-md;
		background-color: $neutral-95;
		padding: $p-3;
		text-align: left;
		display: flex;
		gap: 24px;
		margin: $p-7 0 8px;
		position: relative;
		&:before {
			content: 'Type';
			position: absolute;
			top: -24px;
			left: 0px;
			@include body-sm;
		}
	}
	.ecardThumbs {
		flex-direction: row;
		display: flex;
		gap:8px;
		height: 84px;	
		padding:12px 0;
		border: none;
	}
	.printed {
		padding-top:$p-2;
	}
	.emailGroup {
		padding-top:$p-2;
	}
	.switchHead {
		display: flex;

		flex-direction: column;
		// padding-top: $p-2;
		// border-top: 1px solid $neutral-90;
		// margin-top: $p-5;
		// margin-bottom: $p-3;
		align-items: center;
		div {
			flex-grow: 1;
		}
	}
	h2 {
		@include body;
		font-weight: 600;
		text-align: left;
		margin: 0;
	}
	p {
		margin: 0;
		@include body-sm;
		text-align: left;
	}
	label {
		@include body;
		display: flex;
		align-items: center;
		gap: 8px;
	}
	details {
		padding:0;
		box-shadow: none;
		border-radius: $border-rnd-md;
		border: 1px solid $neutral-95;
		background-color: $neutral-95;
		transition: all .25s ease-in-out;
		color: $theme-primary;
		overflow: hidden;
		summary {
			min-height: 44px;
			display: flex;
			align-items: center;
			justify-content: center;
			cursor: pointer;

			.open{
				display:none;
				position: relative;
			}
			.closed{
				display:inline;
				position: relative;
				&:before {
				content: url(../../img/visible.svg);
				position: absolute;
				left:-28px;
				top:-2px;
				
			}
				
			}
		}
	}
	details[open] {
		box-shadow: $nav-shadow;
		border-color: $neutral-90;
		background-color: $neutral-100;
		summary  {
			border-bottom:1px solid $neutral-90
		}
		summary .open{
			display:inline;
			
			&:before {
				content: url(../../img/visible_off.svg);
				position: absolute;
				left:-28px;
				top:-2px;
				
			}
		}
		summary .closed{
			display:none;

		}
	}
	.previewImg {
		width:100%;
		min-height: 380px;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		

		.image {
			
			padding: 0;
			box-sizing: border-box;
			img {
				max-height:320px; width:auto;max-width: 100%;
				box-sizing: border-box;
				padding: $p-4 $p-4 0;
			}
			
		}
		p {
			min-height: 2rem;
			text-align: center;
			background-color: white;
			padding: $p-2;
			@include body;
		}
	}
	.overflowView {
		overflow-y: auto;
		overflow-x: hidden;
		padding: $p-6 $p-7 $p-8 $p-7;
		margin-bottom: $p-4;
		// -webkit-mask-image: linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 2%, rgba(255,255,255,1) 97%, rgba(255,255,255,0) 100%);
		// mask-image: linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 2%, rgba(255,255,255,1) 95%, rgba(255,255,255,0) 100%);
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

		box-shadow: inset 0px -2px 4px 1px $neutral-80, inset 0px 0px 0px 0px $theme-primary;
		color: currentColor;
		width: 1em;
		height: 1em;
		border: 1px solid $border-input;
		border-radius: 50%;
		transition: all 0.4s cubic-bezier(0.25, -0.01, 0.03, 1.2);
	}
	input[type='radio']:checked {
		content: '';
		border-color: $neutral-20;
		box-shadow: inset 0px 1px 2px 0px $theme-primary-dark, inset 0px 0px 0px 4px $theme-primary,
			0px 0px 0px 1px white, 0px 0px 8px 0px $neutral-60;
	}
	@media screen and (max-width: 480px) {
		.overflowView {
		padding: $p-5 $p-5 $p-8 $p-5;
	}	
	}

</style>
