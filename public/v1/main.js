// Número de demostración; reemplazar por el WhatsApp real de Vanessa.
const WHATSAPP = '51900000000';

const io = new IntersectionObserver(es => es.forEach(e => {
  if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
}), { threshold: .15 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

document.getElementById('form').addEventListener('submit', e => {
  e.preventDefault();
  const f = e.target, nombre = f.nombre;
  nombre.classList.toggle('err', !nombre.value.trim());
  if (!nombre.value.trim()) return nombre.focus();
  const t = `Hola Vanessa, soy ${nombre.value.trim()}${f.edad.value ? ` (${f.edad.value} años)` : ''}. ` +
    `Me interesa una sesión ${f.modalidad.value.toLowerCase()}. ` + (f.motivo.value.trim() ? `Me gustaría trabajar: ${f.motivo.value.trim()}` : '');
  window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(t)}`, '_blank', 'noopener');
});
