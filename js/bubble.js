!function(){var t,o,h,e,c,n=!0;function r(){if(n)for(var a in o.clearRect(0,0,h,e),c)c[a].draw();requestAnimationFrame(r)}function i(){var a=document.getElementById("card_canvas");h=a.offsetWidth,e=a.offsetHeight,t.width=h,t.height=e}function s(){var a=this;function n(){a.pos.x=Math.random()*h,a.pos.y=e+100*Math.random(),a.alpha=.1+.3*Math.random(),a.alpha_change=2e-4+5e-4*Math.random(),a.scale=.2+.5*Math.random(),a.scale_change=.002*Math.random(),a.speed=.1+.5*Math.random()}a.pos={},n(),this.draw=function(){a.alpha<=0&&n(),a.pos.y-=a.speed,a.alpha-=a.alpha_change,a.scale+=a.scale_change,o.beginPath(),o.arc(a.pos.x,a.pos.y,10*a.scale,0,2*Math.PI,!1),o.fillStyle="rgba(0,255,255,"+a.alpha+")",o.fill()}}!function(){t=document.getElementById("cardbg_canvas"),i(),o=t.getContext("2d"),c=[];for(var a=.06*h,n=0;n<a;n++){var e=new s;c.push(e)}r()}(),window.onresize=function(){i()}}();