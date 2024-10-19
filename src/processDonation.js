export function processDonation() {

    const dialog = document.querySelector('#processing');
    const theForm = document.querySelector('form');
    const alertBox = document.querySelector('#notifications');
    const inputs = theForm.querySelectorAll('input, select,textarea');
    let theErrors;
    let hasSubmitted = false;
    

    if (theForm.checkValidity()) {
        
        dialog.show();
        setTimeout(() => {
            console.log('processed');
            goto(`/thanks`);
        }, '2400');
        
    } else {
        let firstField=false;
        let theError = [];
        let totalErrors = inputs.length
        for (let input of inputs){
            if(input.required && !input.checkValidity()) {

                //sets first field as focus
                //let theField = `'#${input.id}''`;
                let focusMe = document.querySelector('#firstname')

                firstField==false ? document.getElementById("firstname").focus() : firstField=true;

                input.parentNode.classList.add('error');
                console.log('input.previousSibling',input.previousSibling.id)
                theError.push(" " + input.parentNode.firstElementChild.firstElementChild.textContent);
            } 

        }
        let lastOne = theError.length-1
        theError.splice((theError.length-1), theError.length, (' and ' + theError[lastOne]))
        theErrors = theError;
        alertBox.classList.remove('showMe');
        hasSubmitted=true;
        console.log('showErrors',totalErrors);
        
    }
    //document.getElementById("firstname").focus()
    

    console.log('processDonation');
}

// export default processDonation