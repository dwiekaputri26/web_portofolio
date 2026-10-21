// Mengganti tahun footer secara otomatis.
document.querySelectorAll('.year').forEach((el) => {
  el.textContent = new Date().getFullYear();
});

// Validasi formulir kontak (demo front-end; tidak mengirim pesan ke server).
const form = document.getElementById('contactForm');

if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    
    const fields = [...form.querySelectorAll('input, textarea')];
    let valid = true;

    fields.forEach((field) => {
      const ok = field.checkValidity();
      field.classList.toggle('is-invalid', !ok);
      if (!ok) {
        valid = false;
      }
    });

    const feedback = document.getElementById('contactFeedback');

    if (!valid) {
      feedback.className = 'mt-3 feedback-error';
      feedback.textContent = 'Periksa kembali nama, email, dan pesan kamu.';
      return;
    }

    const nameInput = document.getElementById('name');
    const userName = nameInput ? nameInput.value.trim() : '';

    feedback.className = 'mt-3 feedback-success';
    feedback.textContent = `Terima kasih, ${userName}! Formulir berhasil divalidasi. Pesan ini hanya simulasi.`;

    form.reset();
    fields.forEach((field) => field.classList.remove('is-invalid'));
  });
}
