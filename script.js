const envelope = document.querySelector('.envelope');
const heptagon = document.querySelector('.heptagon');
const clickText = document.querySelector('.click-text');

heptagon.addEventListener('click', (e) => {
  e.stopPropagation();

  // إخفاء نص الضغط
  clickText.style.opacity = 0;

  // فتح الغطاء + الزوم
  envelope.classList.add('open');

  // الانتقال للصفحة الجديدة بعد 8 ثواني (مطابقة مدة الفتح)
  setTimeout(() => {
    window.location.href = "invite.html"; // رابط الصفحة الجديدة
  }, 2000); 
});