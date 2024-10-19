<script>
</script>

<div class="mission">
	<h2>Our Mission &amp; Vision</h2>
	<p>
		Since 2001, Santa Fe Pantry has worked to mobilize resources in the community to alleviate
		hunger. Our goal is to grow, source, acquire, and distribute nutritious food and other products
		to people experiencing nutrition insecurity.
	</p>
	<p>
		Sourcing food can be expensive, our farming program helps reduce costs of sourcing food while
		also providing jobs to families in need. While we provide food to hungry individuals, we also
		have a variety of meal plans sponsored by donors to support entire families.
	</p>
</div>
<section class="faqs">
	<h2>Frequently asked questions</h2>
	<details>
		<summary>Is this donation tax deductibles?</summary>
		<p>
			This is a prototype and not all areas work as expected. This is a prototype and not all areas work as expected. 
		</p>
	</details>
	<details>
		<summary>Do I get a receipt?</summary>
		<p>
			This is a prototype and not all areas work as expected. This is a prototype and not all areas work as expected. 
		</p>
	</details>
	<details>
		<summary>Is my donation secure?</summary>
		<p>
			This is a prototype and not all areas work as expected. This is a prototype and not all areas work as expected. 
		</p>
	</details>
</section>

<style lang="scss">
	@import '../theme.scss';

	.mission {
		h2:after {
			content: '';
			width: 32px;
			height: 32px;
			position: absolute;
			right: 0;
			background: transparent url('../img/lemon.png') no-repeat center right;
			background-size: contain;
		}
    h2 {
		font-family: $theme-font-family;
		font-size: 1.75rem;
		padding-right: 40px;
		position: relative;
		display: inline-block;
		margin: $p-4 0 0 0;
	}
		p {
			@include body;
		}
	}

	.faqs {
		border: 1px solid rgba(0, 0, 0, 0.12);
		border-radius: $border-rnd-md;
		margin-top: $p-8;
		h2 {
			font-family: system-ui;
			font-size: $fs-body-lg;
			font-weight: 400;
			margin: 0;
			padding: $p-6;
		}
		details {
			border-bottom: 1px solid $border-light;
			font-size: $fs-body-sm;
			font-weight: 600;

			summary {
				background: url('../img/keyboard-arrow-down.svg') no-repeat 95% 50%;
				cursor: pointer;
				padding: $p-6;
				list-style: none;
			}

			p {
				padding: 0 $p-6;
        font-weight: 400;
			}
		}
		details[open] summary {
			background: url('../img/keyboard-arrow-up.svg') no-repeat 95% 50%;
		}
	}
	@media only screen and (max-width: 768px) {
		.mission {
			padding:$p-8 $p-6 $p-4 $p-6;
		}
		.faqs {

			margin:$p-6 $p-6 $p-8 $p-6;

		}
	}
</style>
