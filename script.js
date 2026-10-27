const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    menuToggle.setAttribute('aria-label', isOpen ? 'بستن منو' : 'باز کردن منو');
  });

  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

const serviceForm = document.getElementById('serviceForm');
if (serviceForm) {
  serviceForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const form = new FormData(serviceForm);
    const lines = [
      'سلام، از سایت افرا سرویس درخواست خدمات دارم.',
      `نام: ${form.get('name')}`,
      `شماره تماس: ${form.get('phone')}`,
      `نوع خدمت: ${form.get('service')}`,
      `محله: ${form.get('location') || 'ذکر نشده'}`,
      `توضیح: ${form.get('details') || 'ذکر نشده'}`
    ];
    const message = encodeURIComponent(lines.join('\n'));
    const status = document.getElementById('formStatus');
    if (status) status.textContent = 'در حال باز کردن واتساپ با متن آماده…';
    window.open(`https://wa.me/989128347224?text=${message}`, '_blank', 'noopener');
  });
}
