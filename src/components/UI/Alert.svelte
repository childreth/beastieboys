<script>
	export let label = 'default';
	export let status = 'neutral';
	export let size = 'default';
	export let showIcon = true;

    export let closeMe = () => {};

    
</script>

<div class="alert {status} {size} " aria-live="assertive">
	<span class='msgcontent'>
	{#if showIcon}
		<span class="material-symbols-rounded icon"> error </span>
	{/if}
	<span class='message'>
		Please complete the following fields below: <span class="fields">{label} </span> before donating.
	</span>
</span>
    <button on:click={closeMe}><svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m12 12.94-4.165 4.165a.601.601 0 0 1-.456.187.662.662 0 0 1-.463-.208.645.645 0 0 1 0-.94l4.144-4.145-4.165-4.165a.614.614 0 0 1-.188-.466.673.673 0 0 1 .209-.475.645.645 0 0 1 .94 0l4.145 4.165 4.165-4.165a.65.65 0 0 1 .466-.198.635.635 0 0 1 .474.198.645.645 0 0 1 0 .941l-4.165 4.165 4.165 4.165c.13.13.195.281.198.456a.623.623 0 0 1-.198.464.645.645 0 0 1-.94 0L12 12.94z" fill="#000"/></svg></button>
</div>

<style lang="scss">
	@import '../../theme.scss';
	.alert {
		border-radius: $border-rnd-md;
		padding: 0 $p-1 0 $p-2;
		@include body;
		font-weight: 400;
		box-sizing: border-box;
		border: 1px solid $error;
		display: inline-flex;
		gap: 8px;
		z-index:1000;
		font-weight:400;
		align-items: center;
        justify-content: center;
		img {
			padding-left: $p-1;
		}
		max-width: 932px;
		// margin: 0 $p-3;
		width: calc(100% - 24px);
		box-shadow: $alert-shadow;
		position: fixed;
		// top: 0;
		// left: 0;
		// transform: translate(-50%, 24px);
		animation: showme 0.75s cubic-bezier(.03,.67,.26,1.08) forwards;

		.msgcontent {
			display: flex;
			flex-grow: 1;
			padding:$p-3 0;
			gap:4px;
		}
		.icon {
			display: flex;
			padding:$p-1;
		}
		

		.fields {
			font-weight: 600;
			
		}
        .message {
            flex-grow: 1;
			color: $neutral-10;
			padding: $p-1 0;
        }
        button {
            border: 0;
            background-color: transparent;
            padding:$p-2 $p-2;
            @include body-sm;
            display: flex;
            align-items: center;
            justify-content: center;

            svg {
                transform: scale(1.2);
				display: flex;
				padding:2px;
            }
        }

		// border:1px solid green;
		@media only screen and (max-width: 480px) {
			transform: translate(0px,52px)!important;
			border-radius: 0;
			border: 0;
			align-items: flex-start;
			border-bottom: 1px solid $error;
			width: 100%;
			button {
				// margin-top:6px;
				transform: translateY(6px);
			}
		}
	}
	.hidebanner {
			animation: hideme 0.5s cubic-bezier(.03,.67,.26,1.08) forwards;
		}
	.icon {
		font-size: $fs-header;
		color: $error;
	}
	.neutral {
		background: $neutral-95;
		color: $neutral-30;
	}
	.error {
		background: $error-bg;
		color: $error;
	}
	.dark {
		background: #fff;
		color: $neutral-20;
	}
	.large {
		$font-size: $fs-body-sm;
		border-radius: $border-rnd-md;
	}

	@keyframes showme {
		0% {
			// transform: scale(0.7);
			opacity: 0;
			transform:  translateY(100px) scale(0.98);
		}
		50% {
		}
		100% {
			// transform: scale(1);
			opacity: 1;
			transform:  translateY(60px) scale(1);
		}
	}
	@keyframes hideme {
		0% {
			// transform: scale(0.7);
			opacity: 1;
			transform:  translateY(60px) scale(1);
		}
		50% {
		}
		100% {
			// transform: scale(1);
			opacity: 0;
			transform:  translateY(40px) scale(1);
		}
	}
</style>
