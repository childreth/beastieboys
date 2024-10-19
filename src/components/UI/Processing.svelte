<script>
	// export let open = false;
	import Loader from '../../components/UI/Loader.svelte';
	import { onMount } from 'svelte';
	
	onMount(async () => {
		
	});
</script>

<dialog id="processing">
	<div>
	<section>
		<Loader />
		<h2>Processing your payment</h2>
		<p><strong>Please do not leave or refresh the page.</strong></p>
		<p>Once your donation is complete, you’ll be taken to a summary and email receipt.</p>
	</section>
</div>
</dialog>

<style lang="scss">
	@import '../../theme.scss';

	dialog {
		border: 0;
		position: fixed;
		padding: 0;
		margin: 0;
		top: 0;
		left: 0;
		z-index: 100000;
		width: 100vw;
		height: 100dvh;
		background-color: rgba(255, 255, 255, 0.8);
		backdrop-filter: blur(8px);
		-webkit-backdrop-filter: blur(8px);
		animation: fadeIn 0.75s cubic-bezier(0.03, 0.15, 0.04, 1.1) forwards;
		
		div {
			width: 100%;
			height:100%;
			display: flex;
			justify-content: center;
		align-items: center;
		text-align: center;
		box-sizing: border-box;
		}

		section {
			max-width: 420px;
			animation: showme 0.75s cubic-bezier(0.03, 0.15, 0.04, 1.1) forwards;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			padding: $p-2 $p-8;
		}
		h2 {
			margin: $p-6 0 $p-4 0;
		}
		p {
			margin: 0 0 $p-1 0;
		}
	}
	@keyframes showme {
		0% {
			transform: scale(0.7);
			opacity: 0;
		}
		50% {
		}
		100% {
			transform: scale(1);
			opacity: 1;
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
</style>
