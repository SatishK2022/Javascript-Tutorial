const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
        const bgColor = event.target.id;

        switch(bgColor){
            case 'grey':
                body.style.backgroundColor = event.target.id;
                break;

            case 'white':
                body.style.backgroundColor = event.target.id;
                break;

            case 'blue':
                body.style.backgroundColor = event.target.id;
                break;

            case 'yellow':
                body.style.backgroundColor = event.target.id;
                break;
        }
    })
})