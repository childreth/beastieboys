<script>
	import '../../global.scss';
	import Button from '../../components/UI/Button.svelte';
  
	//stores
	import cartItems from '../../cart.js';

	let mygift;

	cartItems.subscribe((items) => {
		// console.log(items)
		mygift = items;
	});
</script>


<main>
	<section id="thankyou">
		<div>
			<span class="bigemoji">👏</span>
			<h1>
				Thank you <span style="white-space: nowrap;"
					>for giving!
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
				Thank you so much for your gift this will help our community you'll receive an email receipt as well details below. Your efforts to provide food and resources to those in need are truly appreciated..
			</p>
		</div>
	</section>
    <section id="social">
        <h2>Social links area</h2>
		<p>This is a prototype area where you would see a list of links to share your donation.</p>
    </section>
    <section id="info">
        <h2>Receipt and info area</h2>
		<p>This is a prototype area where you would see a donation receipt and login to manage your account.</p>
		<Button label="Manage Account" class="dark" />
    </section>
	
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
    @import '../../theme.scss';
    #social,#info {
        min-height: 360px;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
    }
    #info {
        background: $bg-lightest;
    }
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
