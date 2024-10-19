<script>
// export const prerender = true;
import logo from '../img/logo.png';
import Settings from '../components/UI/Settings.svelte'
// import { fade } from "svelte/transition";
// import CartSummary from '../components/Cart.svelte';
// import cartItems from '../cart.js';

// 	let gift;

// 	cartItems.subscribe((items) => {
// 		// console.log(items)
// 		gift = items;
// 	});
// 	let paymentChoosen = 'none';
// 	let donationAmt = gift.myamount;
// 	let donationFrequency = gift.frequency;
// 	let dcfVal = gift.dcfAmount;
// 	let dcfChecked = gift.dcfChecked;
// 	let totalAmount = gift.totalAmount;
 
export let data;

function showSettings(){
		
		const dialog = document.getElementById('settings')
		dialog.show();
	}
</script>

<!-- <Settings /> -->
<div class="page">
	<nav id='appbar'>
		<a href="/" class="logo"
			><img alt="Santa FE Pantry Logo" src={logo} height="36px" width="auto" /></a
		> <a class="secondary" id="settingsbtn" href="/" on:click|preventDefault={showSettings} style="display:none">Prototype Settings</a>
	</nav>
	
	<!-- {#key data.currentPath}
  <div class="transitionWrap"
    in:fade={{  duration: 250, delay: 150 }}
    out:fade={{ duration: 250 }}
  > -->

    <slot />

  <!-- </div>
{/key} -->

<!-- <div class="summary">
	<CartSummary
		{donationAmt}
		{donationFrequency}
		dcfValue={dcfVal}
		dcfCheck={dcfChecked}
		{totalAmount}
	/>
</div>
</main> -->
</div>


<style lang="scss" global>
	@import '../checkout.scss';
	body,html {
		height:100%;
	}
	.page {
    height: 100%;
    // overflow: auto;
    display: flex;
	position: relative;
	flex-direction: column;
}
nav#appbar {
	padding: $p-3 $p-4;
	// box-shadow:$nav-shadow;
	border-bottom: 1px solid $border-light;
	display: flex;
	align-items: center;
	background: white;
	justify-content: space-between;
	
	/* // position: sticky;
	// top: 0;
	// z-index: 10000; */

	a.logo {
		height: 36px;
	}
}
</style>



