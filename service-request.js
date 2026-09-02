'use strict';
(() => {
  const form = document.querySelector('.request-form');
  if (!form) return;
  const button = form.querySelector('button[type="submit"]');
  const status = document.getElementById('request-status');
  let sending = false;
  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    if (sending || !form.reportValidity()) return;
    if (location.protocol === 'file:') {
      status.textContent = 'Please open www.comtelsolutions.com to send your request. The downloaded preview cannot submit requests.';
      status.dataset.state = 'error';
      return;
    }
    sending = true;
    button.disabled = true;
    button.textContent = 'Sending request…';
    status.dataset.state = 'pending';
    status.textContent = 'Sending your service request. Please keep this page open.';
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 25000);
    try {
      const data = Object.fromEntries(new FormData(form));
      delete data._next;
      const response = await fetch('https://formsubmit.co/ajax/wasimelmtni@gmail.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(data),
        signal: controller.signal
      });
      const result = await response.json();
      if (!response.ok || !(result.success === true || result.success === 'true')) {
        throw new Error('Submission was not accepted');
      }
      if (/activat|confirm.{0,20}email|verify.{0,20}email/i.test(String(result.message || ''))) {
        status.dataset.state = 'error';
        status.textContent = 'Online requests are awaiting setup confirmation. Your request is not confirmed. Please call (832) 614-0914. Your entered details have been kept below.';
        return;
      }
      status.dataset.state = 'success';
      status.textContent = 'Your request was accepted for submission. Comtel will follow up to discuss service and scheduling. This is not an appointment confirmation. For urgent equipment problems, call (832) 213-6736.';
      form.reset();
    } catch (error) {
      status.dataset.state = 'error';
      status.textContent = 'We could not confirm your request was sent. Your details are still here. Please try again, or call (832) 614-0914. If you retry, mention that this may be a duplicate request.';
    } finally {
      clearTimeout(timer);
      sending = false;
      button.disabled = false;
      button.textContent = 'Send service request';
    }
  });
})();
