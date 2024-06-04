const navLinks = document.querySelector('.nav-links')
const img=document.querySelectorAll('.img-slide')
function onToggleMenu(e){
    e.name = e.name === 'menu' ? 'close' : 'menu'
    navLinks.classList.toggle('top-[440%]')
}
const btnSubmit = document.getElementById('enviarCorreo');

btnSubmit.addEventListener('click', function(i) {
    i.preventDefault();
    const email = document.getElementById('floating_email').value;
    const name = document.getElementById('floating_name').value;
    const lastName = document.getElementById('floating_last_name').value;
    const phone = document.getElementById('floating_phone').value;
    const area = document.getElementById('AreaInteres').value;
    
    window.location.href=`mailto:contacto@noumatrading.com.ve?subject=Solicitud&body=Correo%3A${email}%0ANombre%3A${name}%0AApellido%3A${lastName}%0ATel%C3%A9fono%3A${phone}%0A%C3%81rea%3A${area}%0AAdjunte%20su%20S%C3%ADntesis%20Curricular`;
})