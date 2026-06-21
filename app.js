
// app.js
// Logica do Diagnostico Digital Chevalier (sem crases, seguro para copiar/colar)

var app = document.getElementById('app');

function renderCapa() {
  var html = '';
  html += '<div class="capa">';
  html += '<h1>Diagnóstico Empresarial</h1>';
  html += '<p>Responda 30 perguntas sobre o seu negócio e receba um raio-x dos pontos mais urgentes, com propostas de solução e investimento estimado para cada uma.</p>';
  html += '<button id="iniciar">Iniciar diagnóstico</button>';
  html += '</div>';

  app.innerHTML = html;

  document.getElementById('iniciar').addEventListener('click', renderFormulario);
}

function renderFormulario() {
  var html = '';
  html += '<h1>Diagnóstico Empresarial</h1>';
  html += '<p>Responda as 30 perguntas com sinceridade. Ao final, voce recebe o diagnostico e as propostas de solucao com investimento estimado.</p>';
  html += '<form id="form-diagnostico">';

  var categoriaAtual = '';
  for (var i = 0; i < perguntas.length; i++) {
    var p = perguntas[i];
    if (p.categoria !== categoriaAtual) {
      categoriaAtual = p.categoria;
      html += '<h3>' + categoriaAtual + '</h3>';
    }
    html += '<div class="pergunta">';
    html += '<p>' + p.id + '. ' + p.texto + '</p>';
    html += '<label><input type="radio" name="p' + p.id + '" value="sim" required> Sim</label> ';
    html += '<label><input type="radio" name="p' + p.id + '" value="nao"> Nao</label>';
    html += '</div>';
  }

  html += '<button type="submit">Ver meu diagnostico</button>';
  html += '</form>';

  app.innerHTML = html;

  document.getElementById('form-diagnostico').addEventListener('submit', function (e) {
    e.preventDefault();
    processarRespostas();
  });
}

function processarRespostas() {
  var respostas = {};
  for (var i = 0; i < perguntas.length; i++) {
    var p = perguntas[i];
    var campo = document.querySelector('input[name="p' + p.id + '"]:checked');
    respostas[p.id] = campo ? campo.value : 'nao';
  }

  var pontosPorCategoria = {};
  for (var i = 0; i < perguntas.length; i++) {
    var p = perguntas[i];
    if (!pontosPorCategoria[p.categoria]) {
      pontosPorCategoria[p.categoria] = 0;
    }
    if (respostas[p.id] === 'nao') {
      pontosPorCategoria[p.categoria]++;
    }
  }

  var ranking = Object.entries(pontosPorCategoria).sort(function (a, b) {
    return b[1] - a[1];
  });

  renderDiagnostico(ranking);
}

function renderDiagnostico(ranking) {
  var top3 = ranking.slice(0, 3).filter(function (c) {
    return c[1] > 0;
  });

  var html = '<h1>Seu Diagnostico</h1>';

  if (top3.length === 0) {
    html += '<p>Parabens! Seu negocio esta bem estruturado em todas as areas avaliadas. Vamos conversar sobre como acelerar ainda mais o crescimento.</p>';
  } else {
    html += '<p>Identificamos os pontos mais urgentes do seu negocio e as opcoes de solucao para cada um:</p>';

    for (var i = 0; i < top3.length; i++) {
      var categoria = top3[i][0];
      var pontos = top3[i][1];
      var prop = propostas[categoria];

      html += '<div class="resultado-categoria">';
      html += '<h3>Atencao: ' + categoria + ' (' + pontos + '/5 pontos criticos)</h3>';
      html += '<p><strong>Problema identificado:</strong> ' + prop.problema + '</p>';
      html += '<p><strong>Solucao proposta:</strong> ' + prop.solucao + '</p>';
      html += '<div class="precos">';
      html += '<div class="preco-opcao"><span class="preco-tag">Simples</span><span class="preco-valor">' + prop.investimentoSimples + '</span></div>';
      html += '<div class="preco-opcao preco-premium"><span class="preco-tag">Premium</span><span class="preco-valor">' + prop.investimentoPremium + '</span></div>';
      html += '</div>';
      html += '</div>';
    }

    html += '<div class="cta">';
    html += '<h3>Pronto para resolver isso?</h3>';
    html += '<p>A Digital Chevalier Card implementa essas solucoes pra voce, com tecnologia e IA aplicadas ao crescimento do seu negocio.</p>';
    html += '<a href="https://wa.me/5575991771095?text=Quero%20saber%20mais%20sobre%20a%20proposta%20do%20meu%20diagnostico" target="_blank">';
    html += '<button>Falar no WhatsApp</button>';
    html += '</a>';
    html += '</div>';
  }

  html += '<button id="refazer">Refazer diagnostico</button>';

  app.innerHTML = html;

  document.getElementById('refazer').addEventListener('click', renderCapa);
}

renderCapa();
