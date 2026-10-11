
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
document.querySelectorAll('[data-horo]').forEach(function(root){
  var grid=root.querySelector('.signs'), out=root.querySelector('.reading');
  H.forEach(function(h,i){
    var d=document.createElement('button');d.className='sign';d.type='button';
    d.innerHTML=h[0]+'<span>'+h[1]+'</span>';
    d.addEventListener('click',function(){
      grid.querySelectorAll('.sign').forEach(function(x){x.classList.remove('on')});d.classList.add('on');
      out.innerHTML='<b>'+h[0]+' ('+h[1]+')</b><br>'+R[i%4]+'<div class="note">Sample text. In the live site this comes from the editor or a horoscope service.</div>';});
    grid.appendChild(d);});
  grid.firstChild.click();
});
document.querySelectorAll('[data-zoom]').forEach(function(b){b.addEventListener('click',function(){
  var cur=parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--z'))||1;
  cur=Math.min(1.5,Math.max(0.85,cur+parseFloat(b.dataset.zoom)));
  document.documentElement.style.setProperty('--z',cur);});});
document.querySelectorAll('.story button').forEach(function(b){b.addEventListener('click',function(){
  var s=b.closest('.story');s.classList.toggle('open');b.textContent=s.classList.contains('open')?'Show less':'Read full story';});});
