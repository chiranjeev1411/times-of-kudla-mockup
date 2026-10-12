
document.querySelectorAll('[data-tabs]').forEach(function(root){
  var btns=root.querySelectorAll('.tabs button'), panes=root.querySelectorAll('.tabpane');
  btns.forEach(function(b,i){b.addEventListener('click',function(){
    btns.forEach(function(x){x.classList.remove('on')});panes.forEach(function(x){x.classList.remove('on')});
    b.classList.add('on');panes[i].classList.add('on');});});
});
var H=[
['ಮೇಷ','Aries'],['ವೃಷಭ','Taurus'],['ಮಿಥುನ','Gemini'],['ಕರ್ಕಾಟಕ','Cancer'],['ಸಿಂಹ','Leo'],['ಕನ್ಯಾ','Virgo'],
['ತುಲಾ','Libra'],['ವೃಶ್ಚಿಕ','Scorpio'],['ಧನು','Sagittarius'],['ಮಕರ','Capricorn'],['ಕುಂಭ','Aquarius'],['ಮೀನ','Pisces']];
var R=['ಇಂದು ಕೆಲಸದಲ್ಲಿ ಹೊಸ ಅವಕಾಶಗಳು ಸಿಗಬಹುದು. ಕುಟುಂಬದೊಂದಿಗೆ ಸಮಯ ಕಳೆಯಿರಿ.',
'ಹಣಕಾಸಿನ ವಿಷಯದಲ್ಲಿ ಎಚ್ಚರಿಕೆ ಅಗತ್ಯ. ಸಂಜೆ ಶುಭ ಸುದ್ದಿ ಬರುವ ಸಾಧ್ಯತೆ ಇದೆ.',
'ಸ್ನೇಹಿತರ ಸಹಕಾರ ದೊರೆಯಲಿದೆ. ಪ್ರಯಾಣದಲ್ಲಿ ಎಚ್ಚರ ವಹಿಸಿ.',
'ಆರೋಗ್ಯದ ಕಡೆ ಗಮನ ಕೊಡಿ. ಹಳೆಯ ಕೆಲಸವೊಂದು ಪೂರ್ಣಗೊಳ್ಳಲಿದೆ.'];
var W=['ಈ ವಾರ ಹೊಸ ಯೋಜನೆಗಳನ್ನು ಆರಂಭಿಸಲು ಒಳ್ಳೆಯ ಸಮಯ. ವಾರದ ಮಧ್ಯದಲ್ಲಿ ಹಣಕಾಸಿನ ವಿಷಯದಲ್ಲಿ ಎಚ್ಚರ ಅಗತ್ಯ.','ಈ ವಾರ ಕೆಲಸದ ಒತ್ತಡ ಹೆಚ್ಚಾಗಬಹುದು. ವಾರಾಂತ್ಯದಲ್ಲಿ ಕುಟುಂಬದೊಂದಿಗೆ ಸಮಯ ಕಳೆಯಿರಿ.','ಸ್ನೇಹಿತರು ಮತ್ತು ಬಂಧುಗಳಿಂದ ಸಹಾಯ ದೊರೆಯುತ್ತದೆ. ಪ್ರಯಾಣದಲ್ಲಿ ಎಚ್ಚರ ವಹಿಸಿ.'];
var Y=['ಈ ವರ್ಷ ವೃತ್ತಿಯಲ್ಲಿ ಪ್ರಗತಿ ಕಾಣಲಿದೆ. ವರ್ಷದ ದ್ವಿತೀಯಾರ್ಧದಲ್ಲಿ ಹೊಸ ಅವಕಾಶಗಳು ಬರಲಿವೆ.','ಹಣಕಾಸಿನ ಸ್ಥಿತಿ ಹಂತ ಹಂತವಾಗಿ ಸುಧಾರಿಸುತ್ತದೆ. ಆರೋಗ್ಯದ ಬಗ್ಗೆ ಗಮನ ಅಗತ್ಯ.','ಕುಟುಂಬದಲ್ಲಿ ಶುಭ ಕಾರ್ಯಗಳು ನಡೆಯುವ ಸಾಧ್ಯತೆ ಇದೆ. ಹೊಸ ಸ್ನೇಹ ಸಂಬಂಧಗಳು ಬೆಳೆಯುತ್ತವೆ.'];
document.querySelectorAll('[data-horo]').forEach(function(root){
  var grid=root.querySelector('.signs'), out=root.querySelector('.reading');
  H.forEach(function(h,i){
    var d=document.createElement('button');d.className='sign';d.type='button';
    d.innerHTML=h[0]+'<span>'+h[1]+'</span>';
    d.addEventListener('click',function(){
      grid.querySelectorAll('.sign').forEach(function(x){x.classList.remove('on')});d.classList.add('on');
      out.innerHTML='<b>'+h[0]+' ('+h[1]+')</b><br>'+(function(){var a=root.dataset.horo==='weekly'?W:root.dataset.horo==='yearly'?Y:R;return a[i%a.length];})()+'<div class="note">Sample text. In the live site this comes from the editor or a horoscope service.</div>';});
    grid.appendChild(d);});
  grid.firstChild.click();
});
(function(){var bar=document.querySelector('.themebar');if(!bar)return;
  var cur=document.documentElement.getAttribute('data-theme')||'original';
  bar.querySelectorAll('button').forEach(function(b){
    if(b.dataset.t===cur)b.classList.add('on');
    b.addEventListener('click',function(){
      var t=b.dataset.t;
      if(t==='original')document.documentElement.removeAttribute('data-theme');else document.documentElement.setAttribute('data-theme',t);
      try{localStorage.setItem('tok-theme',t)}catch(e){}
      bar.querySelectorAll('button').forEach(function(x){x.classList.toggle('on',x===b)});
    });});})();
document.querySelectorAll('[data-zoom]').forEach(function(b){b.addEventListener('click',function(){
  var cur=parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--z'))||1;
  cur=Math.min(1.5,Math.max(0.85,cur+parseFloat(b.dataset.zoom)));
  document.documentElement.style.setProperty('--z',cur);});});
document.querySelectorAll('.story button').forEach(function(b){b.addEventListener('click',function(){
  var s=b.closest('.story');s.classList.toggle('open');b.textContent=s.classList.contains('open')?'Show less':'Read full story';});});
