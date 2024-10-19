<script>
    export let label = 'Label';
    export let val;
    export let required;
    export let hideLabel=false;
    export let placeholder ='';
    export let limit = 50;
    export let rows = 3;
    export let helperText=''
    let overLimit = false;
    export let patternValidation;
    let charactersUsed = 0;

   $: inputId = label.toLowerCase().replaceAll(' ','');
 

    function counter(evt){
        let theInput = evt.target
        let theCount = theInput.nextElementSibling.firstChild;
        let totalChar = theInput.value.length
        charactersUsed = totalChar;
        let charUsed = document.querySelector('.charUsed')
        console.log('theInput.parentNode',theInput.parentNode)
        if(totalChar > limit && limit !== 0){
            theInput.parentNode.classList.add('error')
            charUsed.innerHTML = totalChar-limit;
            overLimit = true
        }else if (totalChar == limit){
            // theInput.parentNode.classList.add('error')
            theInput.parentNode.classList.remove('error')
            charUsed.innerHTML = '0';
            overLimit = true
        }
        else {
            theInput.parentNode.classList.remove('error')
            charUsed.innerHTML = limit-totalChar;
            overLimit = false
        }
       
    }
    
    </script>
    
    <style lang='scss' global>
        @import '../../forms.scss';

        .helper.textarea {
            display: flex!important;
        }
    </style>
    
    <div class="inputGroup">
    <label for={inputId} class:hideIt="{hideLabel === true}"><span>{label}</span>
        {#if required}
            <sup class='required'>﹡</sup>
            {:else}
            <span class='optional'>(optional)</span>
        {/if}
        <!-- <span class="numberCounter">10 of 255</span> -->
    </label>
    <textarea id={inputId} {required} rows={rows} class="resizeVert hasCounter" placeholder={placeholder} 
        on:input={counter}
        pattern={patternValidation}
        aria-describedby={`${inputId}helper`} 
        bind:value={val}
        
    ></textarea>
    
    <div class="helper textarea">
        {#if helperText!=''}
        <span style="text-align:left;">
{helperText}
        </span>
        {/if}
        {#if limit!=0}
        <span class="counter">
            {#if overLimit}
            <span id={`${inputId}helper`}><span class="material-symbols-rounded">
                error</span>  <span>You are&nbsp;<span class='charUsed'>{limit}</span>&nbsp;characters over the limit.</span></span>
            {:else}
              <span style="visibility:hidden" >You have&nbsp;<span class='charUsed'>{limit}</span>&nbsp;characters left.</span>
            {/if}
            <span class="condenseCounter">{charactersUsed} of {limit}</span>
        </span>
        {/if}
    </div>
   
    </div>