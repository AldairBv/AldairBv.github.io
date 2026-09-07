
const bar=document.querySelector('.progress span');
window.addEventListener('scroll',()=>{if(bar){const h=document.documentElement.scrollHeight-innerHeight;bar.style.width=(h?scrollY/h*100:0)+'%'}});
document.querySelectorAll('.quiz-form').forEach(form=>{
 form.addEventListener('submit',e=>{
  e.preventDefault(); let score=0;
  form.querySelectorAll('[data-answer]').forEach(q=>{
   const checked=q.querySelector('input:checked');
   if(checked && checked.value===q.dataset.answer) score++;
  });
  const result=form.querySelector('.result'); result.style.display='block';
  result.innerHTML=`<strong>Resultado: ${score}/5</strong><br>${score===5?'¡Excelente! Dominas los conceptos principales.':score>=3?'Buen trabajo. Repasa los módulos donde tengas dudas.':'Te recomendamos volver a leer los módulos y realizar el quiz nuevamente.'}`;
  result.scrollIntoView({behavior:'smooth',block:'center'});
 });
});
