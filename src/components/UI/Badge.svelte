<script>
	export let label = 'default';
	export let status = 'neutral';
	export let size = 'default';
	export let showIcon = false;
</script>

<div class="badge {status} {size}">{label} 
	{#if showIcon && label == 'monthly'}
	<span class="material-symbols-rounded">
		event
	</span>
	{/if}
</div>

<style lang="scss">
	@import '../../theme.scss';
	.badge {
		border-radius: $border-rnd-md;
        padding: $p-1 $p-3;
        @include body-sm;
        font-weight: 600;
        border: 1px solid $neutral-100;
		display: inline-flex;
		gap:2px;
		align-items: center;
		text-transform: capitalize;
		img { padding-left: $p-1;}
		// border:1px solid green;

	}
	.neutral {
		background: $neutral-95;
		color: $neutral-30;
	}
	.dark {
		background: #fff;
		color: $neutral-20;
	}
	.large {
		$font-size: $fs-body-sm;
		border-radius:$border-rnd-md;
	}
	
</style>
