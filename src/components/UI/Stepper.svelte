<script>
	export let hasCC;

	let stateProps = {
		state: [$$restProps.state]
	};
</script>

<nav aria-label='Steps for your checkout'>
	<ol class="stepper" >
		<li class={stateProps.state[0][0]}><a href="/">Donation </a></li>
		<span aria-hidden='true'>/</span>
		<li class={stateProps.state[0][1]}><a href="/details"
			tabindex={stateProps.state[0][1]!=='previous' ? '-1' : undefined }
			aria-current={stateProps.state[0][1]==='current' ? 'step' : undefined }
			>Options</a></li>
		<span aria-hidden='true'>/</span>
		<li class={stateProps.state[0][2]}><a href="/information"
			tabindex={stateProps.state[0][2]!=='previous' ? '-1' : undefined }
			aria-current={stateProps.state[0][2]==='current' ? 'step' : undefined }
			aria-disabled={stateProps.state[0][2]==='next' ? 'true' : undefined }
			>Information</a></li>
			<!-- <li class={stateProps.state[0][1]}><a href="/payment"
				tabindex={stateProps.state[0][1]!=='previous' ? '-1' : undefined }
				aria-current={stateProps.state[0][1]==='current' ? 'step' : undefined }
				>Payment</a></li> -->
		
		{#if hasCC == 'creditcard'}
		<span aria-hidden='true'>/</span>
		<li class={stateProps.state[0][3]}><a 
			href={stateProps.state[0][3]==='previous' ? '/payment' : '' }
			tabindex={stateProps.state[0][3]!=='previous' ? '-1' : undefined }
			aria-current={stateProps.state[0][3]==='current' ? 'step' : undefined }
			aria-disabled={stateProps.state[0][3]==='next' ? 'true' : undefined }
			>Payment</a></li>
			<span aria-hidden='true'>/</span>
			<li class={stateProps.state[0][4]}><a href="/creditcard"  
				tabindex={stateProps.state[0][4]!=='previous' ? '-1' : undefined }
				aria-current={stateProps.state[0][4]==='current' ? 'step' : undefined }
				>Card</a></li>
			
			
		{:else}
		<span aria-hidden='true'>/</span>
			<li class={stateProps.state[0][3]}><a  
				href={stateProps.state[0][3]==='previous' ? '/payment' : '' }
				tabindex={stateProps.state[0][3]!=='previous'  ? '-1' : undefined } 
				aria-current={stateProps.state[0][3]==='current' ? 'step' : undefined }
				aria-disabled={stateProps.state[0][3]==='next' ? 'true' : undefined }
				>Payment</a></li>
				<!-- <li class={stateProps.state[0][3]}><a  
					href={stateProps.state[0][3]==='previous' ? '/information' : '' }
					tabindex={stateProps.state[0][3]!=='previous'  ? '-1' : undefined } 
					aria-current={stateProps.state[0][3]==='current' ? 'step' : undefined }
					aria-disabled={stateProps.state[0][3]==='next' ? 'true' : undefined }
					>Information</a></li> -->
		{/if}
		
	</ol>
</nav>

<style lang="scss">
	@import '../../theme.scss';

	nav {
		box-shadow: none;
		padding: $p-0_5 0;
	}

	ol.stepper {
		display: flex;
		list-style-type: none;
		margin: 0;
		padding: 0;
	}
	ol.stepper li {
		@include body-sm;
	}
	ol.stepper li + span {
		display: inline-flex;
		padding: 0 $p-2;
		font-weight:300;
		color: $neutral-60;
	}
	
	ol.stepper li a {
		text-decoration: none;
		color: $theme-primary;
        display: inline-block;
        cursor: default;
	}
	.stepper {
		li.previous a {
			cursor: pointer;
		}
		li.previous a:visited {
			pointer-events: auto;
			
            
		}
		li.previous a:hover {
			text-decoration: underline;
			// color: $theme-primary;
		}
		li.current a{
			color: $neutral-10 !important;
			pointer-events: none;
            font-weight:500;
		}
		li.current + li a{
			color: $neutral-60;
            
			// pointer-events: none;
		}

		li.next a:not([aria-disabled="true"]) {
			color: $neutral-45;
			pointer-events: none;
		}
		li.next a[aria-disabled="true"]{
			outline: none;
			color: $neutral-45;
		}
		
	}
</style>
