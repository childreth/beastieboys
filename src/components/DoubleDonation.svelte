<script>
	import Switch from './UI/Switch.svelte';
	import heartimg from '../img/user-heart.svg';
	import Input from '../components/UI/Input_Text.svelte';
	import { fade,slide } from 'svelte/transition';
	import { quadOut,circInOut } from 'svelte/easing';

	export let showDtD;
	let options = {duration: 300, easing: circInOut};
</script>

<li class="optionItem">
	<div class="wrap">
		<!-- <img src={heartimg} width="40px" height="40px" alt="heart" aria-hidden="true" /> -->
		<div class="icon">
			<img src={heartimg} aria-hidden="true" alt="dedications" />
		</div>

		<Switch bind:checked={showDtD}>
			<span id="" class="title"> Employer Matching </span>
		</Switch>
	</div>
		{#if showDtD}
		<section class="searchMatch" transition:slide={{...options}}>
			<Input
				val={''}
				hideLabel={true}
				required={true}
				placeholder={'Search company...'}
				patternValidation={'[a-zA-Z0-9.+ ]+'}
				invalidMsg={'Please enter a real address'}
			/>
			<p>Donation matching is provided by our partner Double the Donation. They may send you an email explaining how to request a match from your employer.</p>
		</section>
		{/if}
	
</li>

<style lang="scss">
	@import '../theme.scss';

	.wrap {
		all: unset;
		display: flex;
		flex-grow: 1;
		gap: 12px;
		width: 100%;
		padding: 0 $p-4;
		min-height: 76px;
		box-sizing: border-box;
		align-items: center;
		flex-direction: row;
		border-radius: $border-rnd-md;
		transition: all 0.25s ease-in-out;
		label {
			height: 100%;
		}
	}
	.searchMatch {
		width: 100%;
		flex-grow: 1;
		display: flex;
		flex-direction: column;
		padding: 0 $p-5;
		box-sizing: border-box;
		margin-top:-12px;
		p {
			@include body-sm;
			padding:$p-1 $p-1 $p-4 $p-1;
			margin:0;
			color: $neutral-30;
		}
	}
	:global(.wrap label) {
		min-height: 72px!important;
	}
</style>
