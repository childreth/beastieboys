<script>
	import '../global.scss';
	import DonationGrid from '../components/DonationGrid.svelte';
	import Mission from '../components/Mission.svelte';

	//stores
	import cartItems from '../cart.js';

	let mygift;

	cartItems.subscribe((items) => {
		// console.log(items)
		mygift = items;
	});
</script>


<main>
	<section id="hero">
		<div>
			<h1>
				We're here for all who <span style="white-space: nowrap;"
					>need food
					<svg
						width="326"
						height="16"
						viewBox="0 0 326 16"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						class="underline"
					>
						<path
							d="M313.001 2.9999C315.001 1.99953 317.167 4.16667 318 5.5C320 3.99953 325.001 4.00037 324.001 8.50037C323.201 12.1004 317.667 12.667 315.001 12.5004C312 9.49995 309.154 4.9238 313.001 2.9999Z"
							fill="#F4775E"
						/>
						<path
							d="M1.59517 9.29789C60.2071 7.29519 202.437 4.26672 302.459 8.17438"
							stroke="var(--theme-primary)"
							stroke-width="3"
							stroke-linecap="round"
						/>
					</svg>
				</span>
			</h1>
			<p>
				Santa Pantry combats hunger by farming and distributing food. We provide community
				leadership on issues related to hunger. {mygift.myamount}
			</p>
		</div>
	</section>

	<!-- donation area -->
	<section class="donateSec">
		<div class="col formCol">
			<Mission />
		</div>
		<div class="col formCol thirdCol">
			<DonationGrid   />
		</div>
		
	</section>
	<section id="footImg" />
</main>
<!-- footer area -->
<footer>
	<section class="location">
		<h2>Santa Pantry Location</h2>
		<address>
			123 Street Name Ave. <br />
			City, AB 12345
		</address>
		<p class="social" />
	</section>
	<section class="copyright">
		Copyright ©2022 • All rights reserved • Privacy Policy • Terms of Use • Cookie Statement • DMCA
		Policy
	</section>
</footer>

<style lang="scss">
	@media only screen and (min-width: 1020px) {
		.thirdCol {
			max-width: 40%;
		}
		.formCol {
			padding: 64px 36px;
		}
	}
	@media only screen and (min-width: 1440px) {
		.thirdCol {
			max-width: 33%;
		}
		.formCol {
			padding: 64px 48px;
		}
	}
</style>
