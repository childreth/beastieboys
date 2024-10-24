<script>
	export let label = 'Label';
	export let checked = false;
	export let required = false;
	export let placeholder = '';
	export let hideOptional = false;
	export let toolTip = ''
	//export let type = 'text';
	export let patternValidation = '';
	
	import iconInfo from '../../img/info.svg'

	$: inputId = label.toLowerCase().replaceAll(' ', '');
</script>

<div class="checkboxGroup">
	<input
		type="checkbox"
		id={inputId}
		{required}
		{placeholder}
		pattern={patternValidation}
		bind:checked
	/>
	<label for={inputId}
		>{label}
		{#if required}
			<sup class="required">﹡</sup>
		{:else if hideOptional}
			<!-- <span class='optional'></span> -->
		{:else}
			<span class="optional">(optional)</span>
			
		{/if}
		{#if toolTip !== ''}
			<div class="tooltip"  tabindex='0'><img src={iconInfo} alt='fees tooltip' >
				<span class="tooltiptext">{toolTip}</span>
			</div>
		{/if}
			
		<!-- <span>
			{#if checked}
				<svg
					width="24"
					height="24"
					class="checked"
					fill="none"
					aria-hidden="true"
					xmlns="http://www.w3.org/2000/svg"
					><mask id="a" fill="#fff"><rect x="4" y="4" width="16" height="16" rx="4" /></mask><rect
						x="4"
						y="4"
						width="16"
						fill="#333"
						height="16"
						rx="4"
						mask="url(#a)"
					/><path
						d="M10.382 15.808a.772.772 0 0 1-.564-.244L7 12.747a.748.748 0 0 1-.22-.572.805.805 0 0 1 .237-.572.77.77 0 0 1 .568-.228.77.77 0 0 1 .567.228l2.262 2.261L15.86 8.42a.763.763 0 0 1 .555-.23.756.756 0 0 1 .56.23.758.758 0 0 1 .228.558c0 .22-.076.405-.228.557l-6.03 6.03a.772.772 0 0 1-.564.245z"
						fill="#fff"
					/></svg
				>
			{:else}
				<svg
					width="24"
					height="24"
					fill="none"
                    aria-hidden="true"
					xmlns="http://www.w3.org/2000/svg"
					><rect
						x="4.5"
						y="4.5"
						viewBox="0 0 24 24"
						preserveAspectRatio="none"
						width="15"
						height="15"
						rx="3.5"
						fill="#fff"
						stroke="#6A6562"
					/></svg
				>
			{/if}
		</span> -->
	</label>
</div>

<style lang="scss" global>
	@import '../../forms.scss';
</style>
