
export default function initModal(){
    const openButton = document.querySelector('[data-modal="open"]');
    const closeButton = document.querySelector('[data-modal="close"]');
    const containerModal = document.querySelector('[data-modal="container"]');
    const error = document.querySelector('[data-modal="error"]');
    const inputs = containerModal.querySelectorAll('input');

    if(openButton && closeButton && containerModal){
            function toggleModal(event){
                resetModal();
                event.preventDefault()
                containerModal.classList.toggle('active');
            }
    
            function outsideClick(event){

                if(event.target === this)
                    toggleModal(event)
            }

            function resetModal(){
                if(error.classList.contains('active'))
                    error.classList.remove('active');

                inputs.forEach(input => input.value = "");
            }
            
            openButton.addEventListener('click', toggleModal);
            closeButton.addEventListener('click', toggleModal);
            containerModal.addEventListener('click', outsideClick);
    }
}