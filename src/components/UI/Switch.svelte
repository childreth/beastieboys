<script>
	export let checked = false;
	export let name = 'default';

	$: theLabel = name + 'Label';
	$: theDesc = name + 'Desc';
</script>

<label>
	<div class="label">
		<slot />
	</div>
	<div class="switch">
		<input
			type="checkbox"
			role="switch"
			id={name}
			aria-labelledby={theLabel}
			aria-describedby={theDesc}
      bind:checked
		/>
		<span class="slider round" />
	</div>
</label>

<style lang="scss">
	@import '../../theme.scss';
	/* The switch - the box around the slider */

	label {
		display: flex;
		align-items: center;
		gap: 12px;
		flex-grow: 1;
		cursor: pointer;
		height: 100%;
		width: 100%;
		padding: $p-0_5 0;
	}

	.label {
		flex-grow: 1;
		@include body;
		text-align: left;
		padding: $p-2 0;
	}
	.switch {
		position: relative;
		display: inline-block;
		width: 36px;
		height: 20px;
		box-sizing: border-box;
	}

	/* Hide default HTML checkbox */
	.switch input {
		opacity: 0;
		width: 0;
		height: 0;
	}

	/* The slider */
	.slider {
		position: absolute;
		cursor: pointer;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: $neutral-95;
		border: 1px solid #847f7b;
		box-shadow: inset 1px 2px 4px rgba(255, 255, 255, 0.12), inset 0px -2px 4px rgba(0, 0, 0, 0.08);
		transition: all 0.3s cubic-bezier(0.88, -0.26, 0.23, 1.31);
		box-sizing: border-box;
	}

	.slider:before {
		position: absolute;
		content: '';
		height: 12px;
		width: 12px;
		left: 2px;
		bottom: 3px;
		background-color: $neutral-50;
		transition: all 0.3s cubic-bezier(0.88, -0.26, 0.23, 1.31);
	}

	input:checked + .slider {
		background-color: $theme-primary;
	}

	input:focus + .slider {
		outline: 2px dotted $theme-focus;
		outline-offset: 2px;
	}

	input:checked + .slider:before {
		transform: translateX(16px);
		background-color: $neutral-100;
		height: 14px;
		width: 14px;
		bottom: 2px;
	}

	/* Rounded sliders */
	.slider.round {
		border-radius: 36px;
	}

	.slider.round:before {
		border-radius: 50%;
	}
</style>
