(()=>{
const D=document;P.th=P.th||{b:0,p:0,g:0,s:1,t:0};P.pz=P.pz||{d:0,x:[0,0]};
const BP=[['كلاسيكي','#e9dcc3','#4f7a72'],['خشبي','#f0d9b5','#b58863'],['أزرق','#dee3e6','#8ca2ad'],['أخضر','#eeeed2','#769656']],
PS=[['كلاسيكي','#fff','#0d0d0d'],['ذهبي','#ffd86b','#3b1f0a'],['أزرق','#cfe8ff','#10243d']],
BG=['#0f2a2e','#14161a','#2a1740','#1f2a1a'],SN=['نقرة','خشب','ناعم'],
FN=['6k1/5ppp/8/8/8/8/5PPP/3R2K1 w - - 0 1','r1bqkb1r/pppp1ppp/2n2n2/4p2Q/2B1P3/8/PPPP1PPP/RNB1K1NR w KQkq - 4 4','6k1/8/8/8/8/8/R7/1R4K1 w - - 0 1','3k4/8/8/8/8/8/7R/R5K1 w - - 0 1','6rk/6pp/8/6N1/8/8/8/6K1 w - - 0 1','7k/8/6K1/8/8/8/Q7/8 w - - 0 1','k7/8/1K6/8/8/8/8/7R w - - 0 1'];
let tc=0,T={w:0,b:0},lt=Date.now(),hm0='ai',hd=2,ht=10,pz=null,PL=null,ac;
const sy=D.createElement('style');sy.id='thx';D.head.append(sy);
const cs2=D.createElement('style');cs2.textContent=`body{padding-bottom:76px}h2{color:var(--ac);margin:10px 0}
#nv{position:fixed;bottom:0;left:0;right:0;display:flex;background:#0b1f22;border-top:1px solid #2b5a60;padding-bottom:env(safe-area-inset-bottom);z-index:5}
#nv button{flex:1;margin:0;border:0;border-radius:0;background:none;padding:10px 0;font-size:12px;color:#9bb5b1}#nv button.on{background:none;color:var(--ac)}
.pg{max-width:460px;margin:0 auto}.go{display:block;width:100%;background:#81b64c;color:#fff;font-size:24px;font-weight:700;padding:16px;border:0;border-bottom:4px solid #5d8c34;border-radius:12px;margin:16px 0}
.cd{background:var(--pn);border-radius:12px;padding:12px;margin:8px 0;display:flex;justify-content:space-between;align-items:center}.cd button{margin:0}
#ck{display:flex;justify-content:space-between;width:calc(var(--s)*8);margin:4px auto;font-size:18px;font-weight:700;direction:ltr}`;D.head.append(cs2);
const g=D.createElement('div');g.id='gm';g.className='pg';
[...D.body.children].forEach(e=>{if(e.id!='ov'&&e.tagName!='SCRIPT')g.append(e)});
const mkv=id=>{const d=D.createElement('div');d.id=id;d.className='pg';return d},hv=mkv('hm'),pv=mkv('pz'),mv=mkv('mr'),nv=D.createElement('div');nv.id='nv';
D.body.prepend(hv,g,pv,mv);D.body.append(nv);
nv.innerHTML='<button>🏠<br>الرئيسية</button><button>🧩<br>الألغاز</button><button>☰<br>المزيد</button>';
['hm','pz','mr'].forEach((v,i)=>nv.children[i].onclick=()=>xs(v));
const ck=D.createElement('div');ck.id='ck';$('bd').before(ck);$('m_ai').parentNode.style.display='none';
const lvl=()=>Math.min(50,1+Math.floor(P.w/5)),esc=s=>String(s).replace(/[<&>]/g,'');
function ap(){const t=P.th,b=BP[t.b],p=PS[t.p];sy.textContent=`.l{background:${b[1]}}.d{background:${b[2]}}.w{color:${p[1]}}.k{color:${p[2]}}`;D.documentElement.style.setProperty('--bg',BG[t.g])}
function snd(k){if(!P.th.s)return;try{ac=ac||new AudioContext();const o=ac.createOscillator(),v=ac.createGain();o.type=['square','triangle','sine'][P.th.t];o.frequency.value=[[520,380,700,300],[300,220,500,180],[660,520,880,400]][P.th.t][k];v.gain.value=.08;o.connect(v);v.connect(ac.destination);o.start();v.gain.exponentialRampToValueAtTime(.0001,ac.currentTime+.13);o.stop(ac.currentTime+.14)}catch(e){}}
function xs(v){['hm','gm','pz','mr'].forEach(k=>$(k).style.display=k==v?'block':'none');
[...nv.children].forEach((b,i)=>b.className=(v=='pz'?1:v=='mr'?2:v=='hm'?0:-1)==i?'on':'');if(v=='hm')xh();if(v=='pz')xp();if(v=='mr')xm()}
const ch=(k,a,cur)=>a.map(x=>`<button class="${String(cur)==String(x[0])?'on':''}" onclick="xset('${k}','${x[0]}')">${x[1]}</button>`).join('');
function xh(){hv.innerHTML=`<h1>♟︎ شطرنج</h1><div class="cd"><span>المستوى ${lvl()} · انتصارات ${P.w}${P.title?' · 🏆':''} · ID ${P.id}</span><button onclick="xprof()">👤</button></div>
<h2>الخصم</h2>${ch('m',[['ai','الذكاء'],['fr','صديق (نفس الهاتف)'],['co','المدرب'],['fo','🌐 صديق بالـ ID']],hm0)}
${hm0=='ai'?'<h2>الصعوبة</h2>'+ch('d',[[1,'سهل'],[2,'متوسط'],[3,'صعب']],hd):''}
<h2>الوقت</h2>${ch('t',[[0,'بدون'],[5,'5 دقائق'],[10,'10 دقائق'],[15,'15 دقيقة']],ht)}
<button class="go" onclick="xgo()">العب</button>`}
function xset(k,v){if(k=='m')hm0=v;if(k=='d')hd=+v;if(k=='t')ht=+v;xh()}
function xgo(){if(hm0=='fo')return xchal();tc=ht;mode=hm0;diff=hd;cup=0;xs('gm');if(mode=='on')return net();newG()}
const _n=newG;newG=function(f){if(og&&!f)xq();_n(f);T={w:tc*6e4,b:tc*6e4};lt=Date.now();xs('gm')};
const _u=U;U=function(){_u();$('df').style.display='none'};
const _p=play;play=function(m,r){if(mode=='pz')return xpp(m);const c=S.b[m.t]||m.ep;if(mode=='on'&&og&&!r)dbp('/g/'+og.gid+'/m/k'+og.n,'PUT',{f:m.f,t:m.t,pr:m.pr||''});_p(m,r);if(og)og.n++;snd(chk(S)?2:c?1:0)};
const fm=t=>{t=Math.max(0,Math.ceil(t/1e3));return(t/60|0)+':'+String(t%60).padStart(2,'0')};
setInterval(()=>{const n=Date.now(),d=Math.min(n-lt,1000);lt=n;const on=tc&&mode!='pz';
if(on&&!over&&$('gm').style.display!='none'){T[S.t]-=d;if(T[S.t]<=0){T[S.t]=0;snd(3);end(S.t=='w'?'b':'w')}}
ck.style.display=on?'flex':'none';ck.innerHTML=`<span style="opacity:${S.t=='b'?1:.5}">⚫ ${fm(T.b)}</span><span style="opacity:${S.t=='w'?1:.5}">⚪ ${fm(T.w)}</span>`},250);
function xf(f){const[a,t,c]=f.split(' '),b=[];for(const h of a){if(h=='/')continue;if(h>='1'&&h<='8')for(let i=0;i<+h;i++)b.push('');else b.push(h)}return{b,t,c:c=='-'?'':c,e:-1}}
const dn=()=>Math.floor(Date.now()/864e5);
function xp(){if(!PL){PL=[];for(const f of FN){const s=xf(f);for(const k of[1,2])if(ab(s,2*k,-1e9,1e9)>=99999){PL.push({f,n:k});break}}}
if(P.pz.d!=dn()){P.pz={d:dn(),x:[0,0]};sv()}
pv.innerHTML='<h2>🧩 ألغاز اليوم</h2>'+(PL.length?[0,1].map(i=>`<div class="cd"><span>لغز ${i+1} · أبيض يلعب ويكسب مات في ${PL[(2*dn()+i)%PL.length].n}</span><button class="on" onclick="xpz(${i})">${P.pz.x[i]?'✅ أعد الحل':'حل'}</button></div>`).join('')+'<p style="font-size:13px;color:#b9d0cc">يتجدد اللغزان كل يوم</p>':'<p>لا توجد ألغاز الآن</p>')}
function xpz(i){const p=PL[(2*dn()+i)%PL.length];pz={i,n:p.n};mode='pz';S=xf(p.f);over=0;busy=0;sel=-1;tg=[];last=null;hint=null;L=legal(S,1);xs('gm');U();R();$('st').textContent='🧩 مات في '+p.n+' — دورك';$('ex').textContent=''}
function xpp(m){const N=mk(S,m),r=pz.n-1;
if(!legal(N).length&&chk(N)){S=N;last=m;sel=-1;tg=[];R();snd(3);P.pz.x[pz.i]=1;sv();over=1;return ov('<p>✅ أحسنت! حللت اللغز</p><button onclick="cl();xs(\'pz\')">الألغاز</button>')}
if(r<1||ab(N,2*r+1,-1e9,1e9)>-99999){$('ex').textContent='❌ ليست الحركة الصحيحة، جرّب مرة أخرى';sel=-1;tg=[];return R()}
const q=best(N,2).m;S=mk(N,q);last=q;pz.n=r;sel=-1;tg=[];hint=null;L=legal(S,1);R();snd(0);$('st').textContent='🧩 مات في '+r+' — دورك';$('ex').textContent='✔ حركة صحيحة، تابع'}
function xm(){mv.innerHTML=`<h2>المزيد</h2><div class="cd"><span>👤 الصفحة الشخصية</span><button onclick="xprof()">فتح</button></div><div class="cd"><span>🎨 السمة (رقعة، قطع، خلفية، أصوات)</span><button onclick="xthp()">فتح</button></div><div class="cd"><span>🏆 كأس ضد الذكاء</span><button onclick="cs()">ابدأ</button></div><div class="cd"><span>📤 مشاركة اللعبة</span><button onclick="sh()">مشاركة</button></div><div class="cd"><span>⭐ قيّم اللعبة</span><button onclick="xrate()">قيّم</button></div>`}
function xprof(){ov(`<p>👤 ${esc(P.name||'لاعب')}</p><p style="font-size:14px">ID: ${P.id}<br>المستوى ${lvl()} · الانتصارات ${P.w}${P.title?'<br>🏆 أفضل لاعب شطرنج':''}</p><button onclick="xname()">تغيير الاسم</button><button onclick="cl()">إغلاق</button>`)}
function xname(){const n=prompt('اسمك:',P.name||'');if(n){P.name=n.slice(0,20);sv()}xprof()}
function xthp(){const t=P.th,c=(k,a)=>a.map((x,i)=>`<button class="${t[k]==i?'on':''}" onclick="xth('${k}',${i})">${x}</button>`).join('');
ov(`<p>🎨 السمة</p><small>الرقعة</small><br>${c('b',BP.map(x=>x[0]))}<br><small>القطع</small><br>${c('p',PS.map(x=>x[0]))}<br><small>الخلفية</small><br>${BG.map((x,i)=>`<button style="background:${x};border:2px solid ${t.g==i?'#f0b429':'#2b5a60'}" onclick="xth('g',${i})">${i+1}</button>`).join('')}<br><small>الأصوات</small><br><button class="${t.s?'on':''}" onclick="xth('s',${t.s?0:1})">${t.s?'مفعّلة 🔊':'مغلقة 🔇'}</button>${c('t',SN)}<br><button onclick="cl()">تم</button>`)}
function xth(k,i){P.th[k]=i;sv();ap();snd(1);xthp()}
function xrate(){location.href='market://details?id=com.shatranj.app'}
const DB='https://chess-app-739c1-default-rtdb.europe-west1.firebasedatabase.app';let og=null,es=null,ws=null;
const dbp=(p,m,b)=>fetch(DB+p+'.json',{method:m,body:b==null?undefined:JSON.stringify(b)}).catch(()=>{});
function xq(){if(es)es.close();es=null;og=null;mode='ai'}
function xon(gid,c,t){if(es)es.close();og={gid,n:0,mv:{}};mode='on';me=c;tc=t;cl();newG(1);
es=new EventSource(DB+'/g/'+gid+'.json');es.addEventListener('put',gev);es.addEventListener('patch',gev)}
function gev(e){if(!og)return;let d;try{d=JSON.parse(e.data)}catch(x){return}const p=d.path,v=d.data;
if(p=='/'||p=='/m')Object.assign(og.mv,(p=='/'?v&&v.m:v)||{});else if(p.startsWith('/m/'))og.mv[p.slice(3)]=v;
for(let o;(o=og.mv['k'+og.n]);){const m=L.find(x=>x.f==o.f&&x.t==o.t&&(x.pr||'')==o.pr);if(!m)break;play(m,1)}}
function xchal(){const f=(prompt('اكتب ID صديقك (6 أرقام):')||'').trim();if(!/^\d{6}$/.test(f)||f==P.id)return alert('ID غير صحيح');
const gid=Date.now().toString(36)+Math.random().toString(36).slice(2,6),t=ht;
dbp('/inv/'+f,'PUT',{gid,from:P.id,name:P.name||('ID '+P.id),tc:t,ts:Date.now()});
ov('<p>بانتظار قبول صديقك...</p><small>يجب أن يكون التطبيق مفتوحاً عنده</small><br><button onclick="xcan()">إلغاء</button>');
if(ws)ws.close();ws=new EventSource(DB+'/g/'+gid+'/ok.json');ws.addEventListener('put',e=>{try{if(JSON.parse(e.data).data===true){ws.close();xon(gid,'w',t)}}catch(x){}})}
function xcan(){if(ws)ws.close();cl()}
function xacc(g,t){dbp('/g/'+g+'/ok','PUT',true);dbp('/inv/'+P.id,'DELETE');xon(g,'b',t)}
function xrej(){dbp('/inv/'+P.id,'DELETE');cl()}
function xinv(){const ie=new EventSource(DB+'/inv/'+P.id+'.json');ie.addEventListener('put',e=>{try{const v=JSON.parse(e.data).data;
if(v&&v.gid&&Date.now()-v.ts<12e4)ov(`<p>${esc(v.name)} يتحداك${v.tc?' ('+(+v.tc)+' د)':''}</p>
