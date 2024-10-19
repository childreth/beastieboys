<script>
	export let thename;
	export let modalTitle;
	import Button from '../../components/UI/Button.svelte';
	export let saveIt = () => {};
	export let cancelIt = () => {};
	export const closeMe = () => {
		console.log('close');
		const theDialog = document.querySelector(`#${thename}`);
		const theScrim = document.querySelector(`#${thename} .scrim`);
		const theContent = document.querySelector(`#${thename} .maincontent`);
		theScrim.classList.remove('showScrim');
		theContent.classList.remove('showUI');
		theScrim.classList.add('fadeMe');
		theContent.classList.add('slideMe');
		theScrim.addEventListener(
			'animationend',
			(e) => {
				console.log('Animation ended');
				theDialog.close();
				theContent.classList.remove('slideMe');
				theScrim.classList.add('showScrim');
				theContent.classList.add('showUI');
			},
			{ once: true }
		);
	};
	function stopIt(evt) {
		evt.stopPropagation();
	}
	function focusRestrict(event) {
		let modal = document.getElementById(`${thename}`);

		document.addEventListener(
			'focus',
			function (event) {
				if (modalOpen && !modal.contains(event.target)) {
					event.stopPropagation();
					modal.focus();
				}
			},
			true
		);
	}
</script>

<dialog id={thename} class="" role="dialog" aria-labelledby={`${thename}_title`} on:click={closeMe}>
	<div class="scrim showScrim">
		<h2 id={`${thename}_title`} class="hideIt">{modalTitle}</h2>
		<section class="maincontent showUI" on:click={stopIt}>
			<div class="dheader">
				<Button label="Cancel" class="ghost" on:click={cancelIt} />
				<span>{modalTitle}</span>
				<Button label="Save" class="ghost" on:click={saveIt} />
			</div>
			<slot />
		</section>
	</div>
</dialog>

<style lang="scss">
	@import '../../theme.scss';
	dialog::backdrop {
		background-color: transparent;
	}

	dialog {
		max-width: none;
		max-height: none;
		width: 100%;
		height: 100%;
		margin: 0;
		padding: 0;
		border: 0;
		background-color: transparent;

		.scrim {
			width: 100%;
			height: 100%;
			display: flex;
			overflow: hidden;
			justify-content: center;
			flex-direction: column;
			align-items: center;
			text-align: center;
			background-color: rgba(0, 0, 0, 0.7);
			backdrop-filter: blur(8px);
			-webkit-backdrop-filter: blur(8px);
		}

		section {
			max-width: 600px;
			width: 90vw;
			height: 80vh;
			min-height: 440px;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			padding: 0;
			background-color: $neutral-100;
			border-radius: $border-rnd-xxl;
			box-shadow: $sheet-shadow;
		}
		.showScrim {
			animation: fadeIn 0.75s cubic-bezier(0.05, 0.49, 0.19, 1.03) forwards;
		}
		.showUI {
			animation: slideIn 0.5s cubic-bezier(0.05, 0.49, 0.19, 1.03) forwards;
		}
	}
	@media screen and (max-width: 480px) {
		dialog {
			.scrim {
				justify-content: flex-end;
			}
			section {
				max-width: 600px;
				width: 100vw;
				height: calc(100% - 40px);
				border-radius: 12px 12px 0 0;
			}
			.dcontent {
				padding:$p-3;
			}
		}
	}
	:global {
		.fadeMe {
			animation: fadeOut 0.35s cubic-bezier(0.74, 0, 0.92, 0.31) forwards;
			animation-fill-mode: forwards;
		}
		.slideMe {
			animation: slideOut 0.35s cubic-bezier(0.74, 0, 0.92, 0.31) forwards;
			animation-fill-mode: forwards;
		}
		// .zoomOutMe {
		// 	animation: zoomOut 0.5s cubic-bezier(0.74, 0, 0.92, 0.31) forwards;
		// 	animation-fill-mode: forwards;
		// }
		.showProcessing {
			animation: showme 0.5s cubic-bezier(0.03, 0.15, 0.04, 1.1) forwards;
			animation-delay: 400ms;
		}
		.dheader {
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
			width: 100%;
			padding: $p-2;
			box-sizing: border-box;
			height: 64px;
			border-bottom: 1px solid $border-light;
			h2 {
				@include body;
				font-weight: 400;
			}
		}
		.dcontent {
			display: flex;
			flex-direction: column;
			scroll-behavior: smooth;
			flex-grow: 1;
			padding: $p-6;
			width: 100%;
			box-sizing: border-box;
		}
	}
</style>
