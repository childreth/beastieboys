<script>
	// export let open = false;
	import applepayui from '../../img/applepay-faceid.png';
	import Loader from '../../components/UI/Loader.svelte';
	import Button from "../../components/UI/Button.svelte"
	import { goto } from '$app/navigation';

	export let paymentMethod='paypal'

	// onMount(async () => {
	// 	//dialog = document.getElementById('processing');
	// });
	function exitDialog(){
		let theDialog = document.querySelector('#applepayui');
		let theScrim = document.querySelector('#scrim');
		let theAppleUI = document.querySelector('#appleUI')
			theDialog.close();
			// theScrim.classList.remove('fadeMe');
			// theAppleUI.classList.add('scrim');
			console.log('anim evt');
			//removeEvents()
		}

	function closeMe(evt) {
		let theDialog = document.querySelector('#applepayui');
		let theScrim = document.querySelector('#scrim');
		let theAppleUI = document.querySelector('#appleUI')
		let theLoader = document.querySelector('#theLoader')
		let appleDialog = evt.target;
		//theScrim.classList.add('fadeMe');
		//theScrim.classList.remove('scrim');
		theAppleUI.classList.add('zoomOutMe')
		theAppleUI.classList.remove('showUI')
		theLoader.classList.add('showProcessing');
		setTimeout(() => {
				console.log('processed');
				goto(`/thanks`);
			}, '3000');
		theScrim.addEventListener("animationend", closeDialog);

		function closeDialog(){
			//theDialog.close();
			//theScrim.classList.remove('fadeMe');
			//theAppleUI.classList.add('scrim');
			console.log('anim evt');
			//removeEvents()
		}
		function processDialog(){
			//theDialog.close();
			theScrim.classList.remove('fadeMe');
			theScrim.classList.add('scrim');
			console.log('anim evt');
			removeEvents()
		}
		function removeEvents(){
			theScrim.removeEventListener("animationend",closeDialog, false);
			console.log('removed')
		}
		console.log('close', evt.target.parentNode);
	}
</script>

<dialog id="applepayui" class="apple">
	<div id="scrim" class="scrim">
		
		<section id="appleUI" class="showUI">

			
				<span class='fakeScreen'>
					<h2>Fake {paymentMethod} screen</h2>
					<p style='padding-bottom:12px;'>Imagine you are paying with {paymentMethod} and going though their screens to complete  a donation payment. You can continue below.</p>
					<Button label="Continue finishing test" class="primary large" on:click={closeMe} />
					
				</span>
				<!-- <p style="padding:24px;"><Button label="< Go back" class="text large" on:click={exitDialog} /></p> -->
			
		</section>
		<section id='theLoader'>
			<Loader />
			<h2>Processing your payment (fake)</h2>
			<p><strong>Please do not leave or refresh the page.</strong></p>
			<p>Once your donation is complete, you’ll be taken to a summary and email receipt.</p>
		</section>
	</div>
</dialog>

<style lang="scss">
	@import '../../theme.scss';

	dialog.apple {
		border: 0;
		position: fixed;
		padding: 0;
		margin: 0;
		top: 0;
		left: 0;
		z-index: 100000;
		width: 100vw;
		height: 100dvh;
		background: transparent;

		div {
			width: 100%;
			height: 100%;
			display: flex;
			justify-content: center; 
			flex-direction: column;
			align-items: center;
			text-align: center;
			box-sizing: border-box;
			
		}
		.fakeScreen {
			border: 1px solid gray;
			background-color: white;
			border-radius: 12px;
			padding:$p-10;
			h2 {
				margin-top:0;
			}
		}
		.scrim {
			background-color: rgba(255, 255, 255, 0.7);
			backdrop-filter: blur(8px);
			-webkit-backdrop-filter: blur(8px);
			animation: fadeIn 0.5s cubic-bezier(0.03, 0.15, 0.04, 1.1) forwards;
		}

		section {
			max-width: 420px;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			padding: $p-2 $p-6;
			
		}
		section#appleUI,section#theLoader {
			transform: translate(-50%, -50%);
			position: absolute;
		}
		section#theLoader {
			max-width: 420px;
			opacity: 0;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			padding: $p-2 $p-8;
		}
		.showUI {
			animation: showme 0.5s cubic-bezier(0.03, 0.15, 0.04, 1.1) forwards;
			
		}
		

		h2 {
			margin: $p-6 0 $p-4 0;
		}
		p {
			margin: 0 0 $p-1 0;
		}
		img {
			max-width: 480px;
		}
	}
	:global {
		.fadeMe {
			animation: fadeOut 0.5s cubic-bezier(0.03, 0.15, 0.04, 1.1) forwards;
			animation-fill-mode: forwards;
		}
		.zoomOutMe {
			animation: zoomOut 0.5s cubic-bezier(0.03, 0.15, 0.04, 1.1) forwards;
			animation-fill-mode: forwards;
		}
		.showProcessing {
			animation: showme 0.5s cubic-bezier(0.03, 0.15, 0.04, 1.1) forwards;
			animation-delay: 400ms;
		}

	}
	@keyframes showme {
		0% {
			transform: scale(0.7);
			filter: blur(4px);
			opacity: 0;
		}
		50% {
		}
		100% {
			transform: scale(1);
			filter: blur(0px);
			opacity: 1;
		}
	}
	@keyframes zoomOut {
		0% {
			transform: scale(1);
			opacity: 1;
		}
		50% {
		}
		100% {
			transform: scale(0.7);
			opacity: 0;
		}
	}
	@keyframes fadeIn {
		0% {
			backdrop-filter: blur(0px);
			-webkit-backdrop-filter: blur(0px);
			background: rgba(255, 255, 255, 0);
		}
		50% {
		}
		100% {
			backdrop-filter: blur(8px);
			-webkit-backdrop-filter: blur(8px);
			background: rgba(255, 255, 255, 0.7);
		}
	}
	@keyframes fadeOut {
		0% {
			opacity: 1;
			backdrop-filter: blur(8px);
			-webkit-backdrop-filter: blur(8px);
			background: rgba(255, 255, 255, 0.7);
		}
		50% {
		}
		100% {
			opacity: 0;
			backdrop-filter: blur(0px);
			-webkit-backdrop-filter: blur(0px);
			background: rgba(255, 255, 255, 0);
		}
	}
</style>
