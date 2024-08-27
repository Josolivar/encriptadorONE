document.addEventListener('DOMContentLoaded', function () {
  let entrada = document.getElementById('entradaTexto');
  let saida = document.getElementById('saidaTexto');
  const msgErro = document.getElementById('msg-erro');

  document
    .querySelector('button[name="codificador"]')
    .addEventListener('click', function () {
      if (validarTexto(entrada.value)) {
        msgErro.style.display = 'none';
        saida.textContent = criptografar(entrada.value);
      } else {
        msgErro.style.display = 'block';
      }
    });

  document
    .querySelector('button[name="decodificador"]')
    .addEventListener('click', function () {
      if (validarTexto(entrada.value)) {
        msgErro.style.display = 'none';
        saida.textContent = descriptografar(entrada.value);
      } else {
        msgErro.style.display = 'block';
      }
    });

  document
    .querySelector('button[name="copiador"]')
    .addEventListener('click', function () {
      navigator.clipboard
        .writeText(saida.textContent)
        .then(() => {
          saida.textContent = '';
        })
        .catch(err => {
          console.error('Erro ao copiar o texto: ', err);
        });
    });
});

function criptografar(texto) {
  const codificacoes = {
    e: 'enter',
    i: 'imes',
    a: 'ai',
    o: 'ober',
    u: 'ufat',
  };
  return texto
    .split('')
    .map(char => codificacoes[char] || char)
    .join('');
}

function descriptografar(texto) {
  const decodificacoes = {
    enter: 'e',
    imes: 'i',
    ai: 'a',
    ober: 'o',
    ufat: 'u',
  };
  return texto
    .replace(/enter/g, 'e')
    .replace(/imes/g, 'i')
    .replace(/ai/g, 'a')
    .replace(/ober/g, 'o')
    .replace(/ufat/g, 'u');
}

function validarTexto(texto) {
  const regex = /^[a-z\s.,;:?!(){}\[\]'"-]*$/;
  const isValid = regex.test(texto);
  return isValid;
}
