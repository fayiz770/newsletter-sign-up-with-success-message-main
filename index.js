const submit = document.getElementById('submit')
const email = document.getElementById('email')
const warning = document.getElementById('warning')
const modal = document.getElementById('modal')
const container = document.getElementById('container')
const footer = document.getElementById('footer')
const modalSubmit = document.getElementById('modal-submit')


email.addEventListener('keyup', () => {
    warning.style.display = 'none'
    email.style.border = '1px solid var(--grey)'
    email.style.color = 'var(--dark-slate-grey)'
    email.style.background = 'var(--white)'
})

submit.addEventListener('click', (e) => {
    e.preventDefault()
    if(email.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        container.style.display = 'none'
        footer.style.display = 'none'
        modal.style.display = 'flex'
        email.value = ''
    }else {
        warning.style.display = 'flex'
        email.style.border = '1px solid var(--tomato)'
        email.style.color = 'var(--tomato)'
        email.style.background = 'var(--tomato-2)'
    }
})

modalSubmit.addEventListener('click', () => {
    modal.style.display = 'none'
    container.style.display = 'grid'
    footer.style.display = 'block'
})