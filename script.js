var def={n1:"新郎",n2:"新婦",d:"2026年10月4日(日)",t:"開宴 12:00",p:"会場名",m:"本日はご列席いただき\nありがとうございます。\nささやかなひとときですが、\nどうぞ楽しんでください。",img:""};
var S=Object.assign({},def);
try{var s=localStorage.getItem("wd");if(s)S=Object.assign(S,JSON.parse(s))}catch(e){}
var map={n1:"i1",n2:"i2",d:"id",t:"it",p:"ip",m:"im"};
function render(){
  for(var k in map){document.getElementById(k).textContent=S[k];document.getElementById(map[k]).value=S[k]}
}
function save(){try{localStorage.setItem("wd",JSON.stringify(S))}catch(e){}}
function toggle(){var e=document.getElementById("edit");e.style.display=e.style.display=="block"?"none":"block"}
Object.keys(map).forEach(function(k){document.getElementById(map[k]).addEventListener("input",function(ev){S[k]=ev.target.value;document.getElementById(k).textContent=S[k];save()})});
render();
