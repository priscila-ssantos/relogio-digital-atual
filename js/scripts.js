// const horas = document.getElementById('horas');
// const minutos = document.getElementById('minutos');
// const segundos = document.getElementById('segundos');

// const relogio = setInterval(function time(){
//     let datetoday = new Date();
//     let hr =  datetoday.getHours();
//     let min = datetoday.getMinutes();
//     let seg = datetoday.getSeconds();

//     if (hr < 10) hr =  '0' + hr;

//       if (min < 10) min =  '0' + min;

//         if (seg < 10) seg =  '0' + seg;

//     horas.textContent = hr;
//     minutos.textContent = min;
//     segundos.textContent = seg;
// })








function atualizarRelogio() {
  const horas = document.getElementById("horas");
  const minutos = document.getElementById("minutos");
  const segundos = document.getElementById("segundos");


  const agora = new Date();
  let h = agora.getHours().toString().padStart(2, '0');
  let m = agora.getMinutes().toString().padStart(2, '0');
  let s = agora.getSeconds().toString().padStart(2, '0');

  [horas, minutos, segundos].forEach((el, i) => {
    const novoValor = [h, m, s][i];
    if (el.innerText !== novoValor) {
      el.classList.add("change"); // aplica animação
      setTimeout(() => {
        el.innerText = novoValor;
        el.classList.remove("change"); // remove depois de trocar
      }, 150);
    }
  });
}



setInterval(atualizarRelogio, 1000);

  document.getElementById('toggle-dark').addEventListener('click', function() {
  document.body.classList.toggle('dark-mode');
  })