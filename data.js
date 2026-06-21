
// data.js
// Banco de 30 perguntas do Diagnóstico Digital Chevalier
// Organizadas em 6 categorias, 5 perguntas cada

const perguntas = [
  // 1. Presença Digital
  { id: 1, categoria: "Presença Digital", texto: "Sua empresa tem um site profissional?" },
  { id: 2, categoria: "Presença Digital", texto: "Seu site/perfil aparece quando alguém busca seu produto no Google?" },
  { id: 3, categoria: "Presença Digital", texto: "Você tem perfil ativo no Instagram ou Facebook?" },
  { id: 4, categoria: "Presença Digital", texto: "Seus clientes conseguem te encontrar facilmente no WhatsApp Business?" },
  { id: 5, categoria: "Presença Digital", texto: "Você usa fotos e vídeos profissionais para divulgar seus produtos/serviços?" },

  // 2. Marketing e Divulgação
  { id: 6, categoria: "Marketing e Divulgação", texto: "Você já investiu em anúncios pagos (Google Ads, Instagram Ads)?" },
  { id: 7, categoria: "Marketing e Divulgação", texto: "Você sabe quanto custa para conquistar um novo cliente?" },
  { id: 8, categoria: "Marketing e Divulgação", texto: "Você tem uma estratégia de marketing definida e ativa hoje?" },
  { id: 9, categoria: "Marketing e Divulgação", texto: "Você publica conteúdo nas redes sociais com frequência (mín. 2x por semana)?" },
  { id: 10, categoria: "Marketing e Divulgação", texto: "Você já recebeu indicações de clientes satisfeitos recentemente?" },

  // 3. Atendimento e Vendas
  { id: 11, categoria: "Atendimento e Vendas", texto: "Você responde mensagens de clientes em menos de 1 hora?" },
  { id: 12, categoria: "Atendimento e Vendas", texto: "Você tem um processo padronizado de atendimento?" },
  { id: 13, categoria: "Atendimento e Vendas", texto: "Você usa algum sistema de automação (chatbot, respostas automáticas)?" },
  { id: 14, categoria: "Atendimento e Vendas", texto: "Você sabe sua taxa de conversão (quantos visitantes se tornam clientes)?" },
  { id: 15, categoria: "Atendimento e Vendas", texto: "Você faz follow-up com clientes que não compraram na primeira conversa?" },

  // 4. Operação e Processos
  { id: 16, categoria: "Operação e Processos", texto: "Sua empresa tem processos escritos e padronizados?" },
  { id: 17, categoria: "Operação e Processos", texto: "Você usa alguma ferramenta de gestão (planilha, CRM, sistema)?" },
  { id: 18, categoria: "Operação e Processos", texto: "Você tem controle de estoque ou agenda sempre atualizado?" },
  { id: 19, categoria: "Operação e Processos", texto: "Sua equipe sabe claramente suas funções e metas?" },
  { id: 20, categoria: "Operação e Processos", texto: "Você consegue medir os resultados das suas ações de marketing?" },

  // 5. Fidelização de Clientes
  { id: 21, categoria: "Fidelização de Clientes", texto: "Você tem um programa de fidelidade ou cupons de desconto?" },
  { id: 22, categoria: "Fidelização de Clientes", texto: "Você mantém contato com clientes antigos (aniversário, promoções)?" },
  { id: 23, categoria: "Fidelização de Clientes", texto: "Você pede avaliações ou depoimentos dos seus clientes?" },
  { id: 24, categoria: "Fidelização de Clientes", texto: "Você sabe qual percentual dos seus clientes voltam a comprar?" },
  { id: 25, categoria: "Fidelização de Clientes", texto: "Você tem alguma forma de coletar feedback dos clientes?" },

  // 6. Finanças e Precificação
  { id: 26, categoria: "Finanças e Precificação", texto: "Você sabe exatamente sua margem de lucro por produto/serviço?" },
  { id: 27, categoria: "Finanças e Precificação", texto: "Seus preços são definidos com base em pesquisa de mercado?" },
  { id: 28, categoria: "Finanças e Precificação", texto: "Você acompanha seu faturamento mensal de forma organizada?" },
  { id: 29, categoria: "Finanças e Precificação", texto: "Você sabe quanto gasta com marketing por mês?" },
  { id: 30, categoria: "Finanças e Precificação", texto: "Você tem reserva financeira para investir em crescimento?" }
];

// Mapeamento de categoria -> proposta comercial da Digital Chevalier Card
const propostas = {
  "Presença Digital": {
    problema: "sua empresa está praticamente invisível no ambiente digital, perdendo clientes que buscam por você online.",
    solucao: "criação de um site premium profissional + otimização de perfis nas redes sociais e WhatsApp Business."
  },
  "Marketing e Divulgação": {
    problema: "sua empresa não tem uma estratégia de divulgação ativa, dependendo só da sorte ou do boca a boca.",
    solucao: "gestão de tráfego pago e consultoria de marketing digital com metas e resultados acompanhados."
  },
  "Atendimento e Vendas": {
    problema: "seu atendimento está lento ou sem padrão, fazendo a empresa perder vendas por demora ou desorganização.",
    solucao: "automação de atendimento via WhatsApp (chatbot com IA) para responder e converter clientes 24h por dia."
  },
  "Operação e Processos": {
    problema: "sua operação ainda depende de processos manuais e desorganizados, o que trava o crescimento.",
    solucao: "implementação de um sistema de gestão simples com automações que organizam estoque, agenda e equipe."
  },
  "Fidelização de Clientes": {
    problema: "você está perdendo clientes que já compraram uma vez e não voltam, deixando dinheiro na mesa.",
    solucao: "automação de relacionamento (mensagens automáticas, programa de fidelidade e coleta de avaliações)."
  },
  "Finanças e Precificação": {
    problema: "a falta de controle financeiro está dificultando saber se a empresa realmente está lucrando.",
    solucao: "consultoria digital com dashboard de acompanhamento de faturamento, custos e margem de lucro."
  }
};
