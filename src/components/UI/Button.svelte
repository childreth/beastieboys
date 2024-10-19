<script>
	export let label = 'default';
	export let type = 'neutral';
	export let size = 'default';
	export let showIcon = false;
	let buttonProps = {
		class: [$$restProps.class]
	};
</script>

<button on:click on:mouseover on:mouseenter on:mouseleave {...buttonProps}>
	<span class="beforeIcon material-symbols-rounded"> event </span>
	{label}
	{#if showIcon}
		<span class="afterIcon material-symbols-rounded"> event </span>
	{/if}
</button>

<style lang="scss">
	@import '../../theme.scss';
	button {
		border-radius: $border-rnd-md;
		padding: $p-1 $p-4;
		@include body-sm;
		font-weight: 400;
		border: none;
		display: inline-flex;
		gap: 2px;
		align-items: center;
		cursor: pointer;
		img {
			padding-left: $p-1;
		}
	}
	.text {
		background: transparent;
		text-decoration: underline;
		color: $theme-primary;
		padding: $p-0_5;
	}
	.primary {
		background: $theme-primary;
		color: white;

	}
	.large {
			font-size: $fs-body-lg;
			border-radius: $border-rnd-md;
			padding: $p-3 $p-5;
		}

	.beforeIcon,
	.afterIcon {
		display: none;
	}
	:global {
		.neutral {
			background: $neutral-95;
			color: $neutral-30;
		}
		.dark {
			background: #fff;
			color: $neutral-20;
		}
		button.ghost {
			background: transparent;
			font-weight: 600;
			font-size: 1rem;
			min-height: 44px;
			box-sizing: border-box;
			color: $theme-primary;
			border-radius: $border-rnd-sm;
			transition: all .3s ease-in-out;
		}
		button.ghost:hover{
			color: $theme-primary-dark;
			// background-color:  $theme-primary-lightest;
		}
		
	}
</style>
