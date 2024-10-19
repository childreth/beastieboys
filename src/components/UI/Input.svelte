<script>
export let label = 'Label';
export let val;
export let required;
export let placeholder = '';
export let readOnly=false
export let type = 'text';
export let disabled=false;
export let patternValidation = '';
export let autocomplete = 'on';
export let helper ='';
export let invalidMsg = '';

$: inputId = label.toLowerCase().replaceAll(' ','');



</script>

<style lang='scss' global>
    @import '../../forms.scss';

</style>

<div class="inputGroup" >
<label for={inputId}><span>{label}</span>
    {#if required}
        <sup class='required' aria-hidden='true'>﹡</sup>
        {:else}
        <span class='optional'>(optional)</span>
    {/if}
</label>
<input type={type} id={inputId} value={val} {required} placeholder={placeholder}  autocomplete={autocomplete}	
pattern={patternValidation !=='' ? patternValidation : undefined }
aria-describedby={`${inputId}helper`} 
readonly={readOnly}
disabled={disabled}
/>
{#if helper}
<span id={`${inputId}helper`} class="helper">
    {helper}
</span>
{/if}
<span id={`${inputId}helper`} class="errormsg" >
 
    <span class="material-symbols-rounded" aria-hidden='true' style="font-size:16px;">
    error</span> 
    <span class='empty' aria-live="assertive">{label} is required.</span>
    <span class='format'>{invalidMsg}</span>
    
</span>
</div>