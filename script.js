document.addEventListener('DOMContentLoaded', () => {
  const serviceForm = document.getElementById('service-request-form');
  const thankYouMessage = document.getElementById('thank-you-message');
  if(serviceForm) {
    serviceForm.addEventListener('submit', e => {
      e.preventDefault();
      const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        service: document.getElementById('service').value,
        timestamp: new Date().toISOString()
      };
      localStorage.setItem('serviceRequest', JSON.stringify(formData));
      serviceForm.style.display='none';
      thankYouMessage.classList.remove('hidden');
      setTimeout(()=>{ serviceForm.reset(); serviceForm.style.display='block'; thankYouMessage.classList.add('hidden'); }, 5000);
    });
  }
});
