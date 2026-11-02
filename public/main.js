// Número de demostración; reemplazar por el WhatsApp real de Vanessa.
const WHATSAPP = '51900000000';
const wa = t => `https://wa.me/${WHATSAPP}${t ? `?text=${encodeURIComponent(t)}` : ''}`;

document.querySelectorAll('[data-wa]').forEach(a => {
  a.href = wa('Hola Vanessa, me gustaría agendar una sesión de orientación.');
  a.target = '_blank'; a.rel = 'noopener';
});

document.getElementById('form').addEventListener('submit', e => {
  e.preventDefault();
  const f = e.target, n = f.nombre;
  n.classList.toggle('err', !n.value.trim());
  if (!n.value.trim()) return n.focus();
  const t = `Hola Vanessa, soy ${n.value.trim()}. Quiero agendar una sesión ${f.modalidad.value.toLowerCase()}. ` +
    `Motivo: ${f.motivo.value}.` + (f.tel.value.trim() ? ` Mi teléfono: ${f.tel.value.trim()}.` : '');
  window.open(wa(t), '_blank', 'noopener');
});
