<script>
    export let label = 'Label';
    export let val;
    export let required;
    export let placeholder = '';
    export let type = 'text';
    export let autocomplete = 'on';
    //export let patternValidation = '';
    export let listItems;
    
    
    $: selectName = label.toLowerCase().replaceAll(' ','');
    
    
    
    </script>
    
    <style lang='scss' global>
        @import '../../forms.scss';
    
    </style>
    
    <div class="inputGroup" >
    <label for={selectName}><span>{label}</span>
        {#if required}
            <sup class='required' aria-hidden='true'>﹡</sup>
            {:else}
            <span class='optional'>(optional)</span>
        {/if}
    </label>
    <select name={selectName} id={selectName}
    aria-describedby={`${selectName}helper`}
    {required}
    autocomplete={autocomplete}
    >
        {#each listItems as item}
        <option 
        value={item!=='Please select' ? item : ''} 
        disabled={(item=='Please select' && required) ? true : undefined}
        selected={item=='Please select' ? true : undefined}
        >{item}</option>
        {/each}
    </select>
    <span id={`${selectName}helper`} class="errormsg" aria-live="assertive">
        <span class="material-symbols-rounded" aria-hidden='true'>
        error</span> 
        This field is required.
    </span>
    </div>