<script>
export let label = 'Label';
export let val;
export let required;
export let placeholder = '';
export let type = 'text';
export let patternValidation = '';
export let autocomplete = 'on';
export let helper ='';
export let invalidMsg = '';
export let hideLabel=false;



$: inputId = label.toLowerCase().replaceAll(' ','');



</script>

<style lang='scss' global>
    @import '../../forms.scss';

</style>

<div class="inputGroup" >
<label for={inputId} class:hideIt="{hideLabel === true}"><span>{label}</span>
    {#if required}
        <sup class='required' aria-hidden='true'>﹡</sup>
        {:else}
        <span class='optional'>(optional)</span>
    {/if}
</label>
<input type='text' id={inputId} bind:value={val} {required} placeholder={placeholder}  autocomplete={autocomplete}	
pattern={patternValidation !=='' ? patternValidation : undefined }
aria-describedby={`${inputId}helper`} 
/>
{#if helper}
<span id={`${inputId}helper`} class="helper">
    {helper}
</span>
{/if}
<span id={`${inputId}helper`} class="errormsg" aria-live="assertive">
    <span class="material-symbols-rounded" aria-hidden='true' style="font-size:16px;">
    error</span> 
    <span class='empty'>{label} is required.</span>
    <span class='format'>{invalidMsg}</span>
</span>
</div>