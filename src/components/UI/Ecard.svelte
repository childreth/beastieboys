<script>
	export let label = '';
	export let checked = false;
	export let name = 'ecards';
    export let value = ''
    export let ecards;
    export let imgsrc = 'https://images.unsplash.com/photo-1560406146-78f8cb5e0fbe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1275&q=80'
	//export let type = 'text';
	export let patternValidation = '';
    let styles = {
        'bgimg': imgsrc,
    }

	$: inputId = label.toLowerCase().replaceAll(' ', '');
</script>

<label class='ecard' for={inputId} 
style="background-image: url({imgsrc});"
		>
        <input
		type="radio"
		id={inputId}
        name={name}
        value={imgsrc}
        bind:group={ecards}
		pattern={patternValidation}
	
	/>
	
	</label>

<style lang="scss" >
	@import '../../forms.scss';



    .ecard {
        display: flex;
        background-color: $neutral-95;
        // border: 1px solid $neutral-90;
        box-sizing: border-box;
        flex-grow: 1;
        position: relative;
        cursor: pointer;
        border-radius: $border-rnd-md;
        transition: all .25s ease-in-out;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
       

    }
    .ecard:has(input[type='radio']:focus-visible) {
        outline: 2px dotted $theme-focus;
        outline-offset: 1px;
    }
    .ecard:has(input[type='radio']:checked) {
        // border: 2px solid $theme-primary;
        box-shadow: inset 0 0 0 2px $theme-primary, inset 0 0 0 3px white;
    }

    input[type='radio'] {
        position: absolute;
        top: 8px;
        left:8px;
		-webkit-appearance: none;
		appearance: none;
		/* For iOS < 15 to remove gradient background */
		background-color: #fff;
		flex-shrink: 0;
		/* Not removed via appearance */
		margin: 0;
		font: inherit;

		box-shadow: inset 0px -2px 4px 1px $neutral-80, inset 0px 0px 0px 0px $theme-primary;
		color: currentColor;
		width: 1em;
		height: 1em;
		border: 1px solid $border-input;
		border-radius: 50%;
		transition: all 0.4s cubic-bezier(0.25, -0.01, 0.03, 1.2);
	}
	input[type='radio']:checked {
		content: '';
		border-color: $neutral-20;
		box-shadow: inset 0px 1px 2px 0px $theme-primary-dark, inset 0px 0px 0px 4px $theme-primary,
			0px 0px 0px 1px white, 0px 0px 8px 0px $neutral-60;
	}
    input[type='radio']:focus {
        outline: none;
    }
</style>
