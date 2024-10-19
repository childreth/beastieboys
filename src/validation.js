

export function updateErrors() {

    const dialog = document.querySelector('#processing');
    const theForm = document.querySelector('form');
    const alertBox = document.querySelector('#notifications');
    const inputs = theForm.querySelectorAll('input, select,textarea');

    let firstField=false;
    let theErrors;
    let theError = [];
    let totalErrors = inputs.length

    for (let input of inputs){
            if(input.required && !input.checkValidity()) {

                //sets first field as focus
                //let theField = `'#${input.id}''`;
                let focusMe = document.querySelector('#firstname')

                input.parentNode.classList.add('error');
                console.log('input.previousSibling',input.previousSibling.id)
                theError.push(" " + input.parentNode.firstElementChild.firstElementChild.textContent);
            } 

        }
        let lastOne = theError.length-1
        

        lastOne >0 ? theError.splice((theError.length-1), theError.length, (' and ' + theError[lastOne])) : undefined;
        lastOne <0 ? alertBox.firstChild.classList.add('hidebanner') : undefined;
        theErrors = theError;

        //alertBox.classList.remove('showMe');
        
}

// export default updateErrors
