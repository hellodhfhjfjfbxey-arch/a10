(function(){
var b=document.querySelector('.burger'),n=document.getElementById('nav');
if(b&&n)b.addEventListener('click',function(){var o=n.classList.toggle('open');b.setAttribute('aria-expanded',o?'true':'false');b.setAttribute('aria-label',o?'Close menu':'Open menu');});
function $(i){return document.getElementById(i);}
var f=$('cform');
if(f)f.addEventListener('submit',function(e){e.preventDefault();var fm=$('fm');
 if($('website').value)return;
 if(!f.checkValidity()){fm.hidden=false;fm.textContent='Please add your name, a valid email address and a message, and tick the agreement box.';return;}
 var body='Name: '+$('name').value+'\nEmail: '+$('email').value+'\nTopic: '+$('topic').value+'\n\n'+$('message').value;
 location.href='mailto:'+f.getAttribute('data-to')+'?subject='+encodeURIComponent(f.getAttribute('data-brand')+': '+$('topic').value)+'&body='+encodeURIComponent(body);
 fm.hidden=false;fm.textContent='Your email app should open with the message ready to send. If nothing happens, write to us directly at '+f.getAttribute('data-to')+'.';});
var c=$('cookie'),k=null;try{k=localStorage.getItem('ck_'+location.hostname);}catch(e){}
if(c&&!k)c.classList.add('show');
if(c)c.querySelectorAll('button').forEach(function(bt){bt.addEventListener('click',function(){try{localStorage.setItem('ck_'+location.hostname,bt.getAttribute('data-cookie'));}catch(e){}c.classList.remove('show');});});
var y=$('year');if(y)y.textContent=new Date().getFullYear();
})();
(function(){var d=document.documentElement,rm=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;
[].forEach.call(document.querySelectorAll('.stg'),function(g){[].forEach.call(g.children,function(c,i){c.style.transitionDelay=(i*110)+'ms';});});
function cnt(el){var to=parseFloat(el.getAttribute('data-count')),dec=(el.getAttribute('data-count').split('.')[1]||'').length,t0=null,dur=1600;if(rm){el.textContent=to.toFixed(dec);return;}function f(t){if(!t0)t0=t;var p=Math.min(1,(t-t0)/dur),e=1-Math.pow(1-p,3);el.textContent=(to*e).toFixed(dec);if(p<1)requestAnimationFrame(f);}requestAnimationFrame(f);}
var els=[].slice.call(document.querySelectorAll('.rv,[data-count]'));
if(rm||!('IntersectionObserver' in window)){els.forEach(function(e){e.classList.add('in');if(e.hasAttribute('data-count'))e.textContent=e.getAttribute('data-count');});}
else{var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){var ts=(e.target.__rv||[]).concat(els.indexOf(e.target)>-1?[e.target]:[]);ts.forEach(function(t){t.classList.add('in');if(t.hasAttribute('data-count'))cnt(t);});io.unobserve(e.target);}});},{rootMargin:'0px 0px -6% 0px',threshold:.01});
 els.forEach(function(e){var o=e;if(e.classList.contains('rv-c')||e.classList.contains('rv-w')){o=e.parentElement;}if(o!==e){(o.__rv=o.__rv||[]).push(e);}io.observe(o);});
 setTimeout(function(){els.forEach(function(e){var r=e.getBoundingClientRect();if(r.top<innerHeight&&r.bottom>0)e.classList.add('in');});},1200);}
var px=[].slice.call(document.querySelectorAll('[data-px]')),pr=document.getElementById('prog'),tk=false;
function upd(){var h=innerHeight;if(!rm)px.forEach(function(el){var r=el.parentElement.getBoundingClientRect();if(r.bottom<0||r.top>h)return;var s=+el.getAttribute('data-px');el.style.transform='translate3d(0,'+((r.top+r.height/2-h/2)*s).toFixed(1)+'px,0) scale(1.14)';});
 if(pr){var m=d.scrollHeight-h;pr.style.width=(m>0?scrollY/m*100:0)+'%';}d.classList.toggle('scd',scrollY>60);tk=false;}
addEventListener('scroll',function(){if(!tk){requestAnimationFrame(upd);tk=true;}},{passive:true});addEventListener('resize',upd);upd();
[].forEach.call(document.querySelectorAll('.hs'),function(s){var down=false,x0=0,s0=0,mv=0;s.addEventListener('pointerdown',function(e){if(e.pointerType!=='mouse')return;down=true;mv=0;x0=e.clientX;s0=s.scrollLeft;s.classList.add('drag');});addEventListener('pointerup',function(){down=false;s.classList.remove('drag');});s.addEventListener('pointermove',function(e){if(!down)return;mv=Math.abs(e.clientX-x0);s.scrollLeft=s0-(e.clientX-x0);});s.addEventListener('click',function(e){if(mv>6){e.preventDefault();e.stopPropagation();}},true);});
})();
(function(){function $(i){return document.getElementById(i);}
var tm=$('tm-m');if(tm){var tw=$('tm-w'),tk=$('tm-ticks'),h='';for(var i=0;i<=24;i++){var a=-135+i*11.25;h+='<line x1="110" y1="16" x2="110" y2="'+(i%4?26:32)+'" transform="rotate('+a+' 110 110)" data-i="'+i+'"/>';}tk.innerHTML=h;var lns=[].slice.call(tk.querySelectorAll('line'));
 var M={ch:['Whole chicken',200,40,40,74,15,'Roast breast side up. The juices should run clear and the thickest part of the thigh reach 74°C.'],tu:['Whole turkey',180,40,70,74,30,'Cover with foil for the first part of the roast if it browns too fast.'],
  br:['Beef, rare',180,30,20,50,20,'Start at 220°C for 20 minutes to brown, then lower to 180°C.'],bm:['Beef, medium',180,40,20,58,20,'Start at 220°C for 20 minutes to brown, then lower to 180°C.'],bw:['Beef, well done',180,50,20,68,20,'Lower and slower keeps well-done beef from drying out.'],
  pk:['Pork loin',180,50,25,63,15,'For crackling, score the skin, salt it and start at 220°C for 25 minutes.'],lb:['Leg of lamb',180,40,20,58,15,'Rub with garlic and rosemary. Lamb is also good cooked further, to 65°C.']};
 function f(m){return (m>=60?Math.floor(m/60)+' h ':'')+(m%60)+' min';}
 function calc(){var w=+tw.value,m=M[tm.value],mins=Math.round(m[2]*w+m[3]);$('tm-wo').textContent=w.toFixed(1)+' kg';$('tm-o').textContent=m[1]+'°C';$('tm-t').textContent=f(Math.round(mins/5)*5);$('tm-i').textContent=m[4]+'°C';$('tm-r').textContent=m[5]+' min';$('tm-dt').textContent=m[1]+'°';
  var p=(m[1]-100)/150;$('tm-kn').style.transform='rotate('+(-135+p*270)+'deg)';lns.forEach(function(l,i){l.classList.toggle('on',i/24<=p);});$('tm-n').textContent=m[6]+' Times are a guide for a conventional oven; reduce the temperature by about 20°C for a fan oven and always check with a thermometer.';}
 tm.addEventListener('change',calc);tw.addEventListener('input',calc);calc();}
var pt=$('pn-t');if(pt){var cbs=[].slice.call(document.querySelectorAll('.ro-veg input')),CL={Potatoes:'#E3C07A',Beetroot:'#8E2346',Carrots:'#E07A2B',Parsnips:'#E8D9B5',Squash:'#E89B3A','Red onion':'#9B4A7A',Cauliflower:'#F1EBDD',Sprouts:'#6E8F3A',Peppers:'#D6402C',Broccoli:'#3F6B2A',Courgette:'#7FA35A',Asparagus:'#5E8A3A','Cherry tomatoes':'#C8332B'};
 function pn(){var s=cbs.filter(function(c){return c.checked;}).map(function(c){return [c.getAttribute('data-n'),+c.value];}).sort(function(a,b){return b[1]-a[1];});if(!s.length){pt.innerHTML='';$('pn-l').innerHTML='<li><b>&ndash;</b>Tick a vegetable to start.</li>';return;}
  var mx=s[0][1],g='',k=0;s.forEach(function(v){for(var j=0;j<Math.max(2,Math.round(24/s.length));j++){g+='<i style="--c:'+CL[v[0]]+';animation-delay:'+(k++*30)+'ms"></i>';}});pt.innerHTML=g;
  var grp={};s.forEach(function(v){var at=mx-v[1];(grp[at]=grp[at]||[]).push(v[0]);});$('pn-l').innerHTML=Object.keys(grp).map(Number).sort(function(a,b){return a-b;}).map(function(at){return '<li><b>'+(at?'+'+at+' min':'Start')+'</b>'+(at?'Add ':'Put in ')+grp[at].join(', ')+'</li>';}).join('')+'<li><b>'+mx+' min</b>Everything is ready together. Turn once, halfway through.</li>';}
 cbs.forEach(function(c){c.addEventListener('change',pn);});pn();}
var tf=$('th-f');if(tf){var tb=$('th-v'),ls=[].slice.call(document.querySelectorAll('.ro-tl')),sec=tf.closest('.ro-th');function th(){var r=sec.getBoundingClientRect(),p=Math.max(0,Math.min(1,(innerHeight*.5-r.top)/(r.height*.8))),t=Math.round(30+p*65);tf.style.height=(8+p*88)+'%';tb.style.bottom=(8+p*88)+'%';tb.textContent=t+'°';ls.forEach(function(l){l.classList.toggle('hot',t>=+l.getAttribute('data-t'));});}addEventListener('scroll',th,{passive:true});th();}
})();
