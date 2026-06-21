
// app.js
// Lógica do Diagnóstico Digital Chevalier

const app = document.getElementById("app");

function renderFormulario() {
  let html = `
    <h1>Diagnóstico Gratuito do seu Negócio</h1>
    <p>Responda as 30 perguntas com sinceridade. Ao final, você recebe um diagnóstico e uma proposta personalizada.</p>
    <form id="form-diagnostico">
  `;

  let categoriaAtual = "";
  perguntas.forEach((p) => {
    if (p.categoria !== categoriaAtual) {
      categoriaAtual = p.categoria;
      html += <h3>${categoriaAtual}</h3>;
    }
    html += `
      <div class="pergunta">
        <p>${p.id}. ${p.texto}</p>
        <label><input type="radio" name="p${p.id}" value="sim" required> Sim</label>
        <label><input type="radio" name="p${p.id}" value="nao"> Não</label>
      </div>
    `;
  });

  html += `
      <button type="submit">Ver meu diagnóstico</button>
    </form>
  `;

  app.innerHTML = html;

  document.getElementById("form-diagnostico").addEventListener("submit", (e) => {
    e.preventDefault();
    processarRespostas();
  });
}

function processarRespostas() {
  const respostas = {};
  perguntas.forEach((p) => {
    const campo = document.querySelector(input[name="p${p.id}"]:checked);
    respostas[p.id] = campo ? campo.value : "nao";
  });

  const pontosPorCategoria = {};
  perguntas.forEach((p) => {
    if (!pontosPorCategoria[p.categoria]) pontosPorCategoria[p.categoria] = 0;
    if (respostas[p.id] === "nao") {
      pontosPorCategoria[p.categoria]++;
    }
  });

  const ranking = Object.entries(pontosPorCategoria).sort((a, b) => b[1] - a[1]);

  renderDiagnostico(ranking);
}

function renderDiagnostico(ranking) {
  const top3 = ranking.slice(0, 3).filter((c) => c[1] > 0);

  let html = <h1>Seu Diagnóstico</h1>;

  if (top3.length === 0) {
    html += <p>Parabéns! Seu negócio está bem estruturado em todas as áreas avaliadas. Vamos conversar sobre como acelerar ainda mais o crescimento.</p>;
  } else {
    html += <p>Identificamos os pontos mais urgentes do seu negócio:</p>;

    top3.forEach(([categoria, pontos]) => {
      const prop = propostas[categoria];
      html += `
        <div class="resultado-categoria">
          <h3>⚠️ ${categoria} (${pontos}/5 pontos críticos)</h3>
          <p><strong>Problema identificado:</strong> ${prop.problema}</p>
          <p><strong>Nossa proposta:</strong> ${prop.solucao}</p>
        </div>
      `;
    });

    html += `
      <div class="cta">
        <h3>Pronto para resolver isso?</h3>
        <p>A Digital Chevalier Card pode implementar essas soluções pra você, com tecnologia e IA aplicadas ao crescimento do seu negócio.</p>
        <a href="https://wa.me/SEUNUMEROAQUI?text=Quero%20saber%20mais%20sobre%20a%20proposta%20do%20meu%20diagn%C3%B3stico" target="_blank">
          <button>Falar no WhatsApp</button>
        </a>
      </div>
    `;
  }

  html += <button id="refazer">Refazer diagnóstico</button>;

  app.innerHTML = html;

  document.getElementById("refazer").addEventListener("click", renderFormulario);
}

renderFormulario();
