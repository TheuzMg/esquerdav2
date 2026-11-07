/**
 * PORTAL DA ESQUERDA: IGUALDADE, JUSTIÇA E TRANSFORMAÇÃO SOCIAL
 * Script de Interatividade, Linha do Tempo, Simulador, Mitos & Verdades e Quiz Escolar
 */

document.addEventListener('DOMContentLoaded', () => {
  initReadingProgressBar();
  initMobileMenu();
  initPresentationMode();
  initSmoothScroll();
  initTimeline();
  initSimulator();
  initAccordion();
  initQuiz();
  initNavbarScrollState();
});

/* ==========================================================================
   1. BARRA DE PROGRESSO DE LEITURA
   ========================================================================== */
function initReadingProgressBar() {
  const progressBar = document.getElementById('reading-progress');
  if (!progressBar) return;

  window.addEventListener('scroll', () => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (window.pageYOffset / totalHeight) * 100;
    progressBar.style.width = `${Math.min(100, Math.max(0, progress))}%`;
  });
}

/* ==========================================================================
   2. MENU MOBILE E NAVEGAÇÃO
   ========================================================================== */
function initMobileMenu() {
  const toggleBtn = document.querySelector('.mobile-toggle');
  const navMenu = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (!toggleBtn || !navMenu) return;

  toggleBtn.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('mobile-open');
    toggleBtn.setAttribute('aria-expanded', isOpen);
    toggleBtn.innerHTML = isOpen ? '✕' : '☰';
  });

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('mobile-open');
      toggleBtn.innerHTML = '☰';
    });
  });
}

/* ==========================================================================
   3. MODO APRESENTAÇÃO / SALA DE AULA (PROJETOR)
   ========================================================================== */
function initPresentationMode() {
  const toggleBtn = document.getElementById('btn-presentation-mode');
  if (!toggleBtn) return;

  // Restaurar preferência anterior se houver
  const isPresMode = localStorage.getItem('portal_presentation_mode') === 'true';
  if (isPresMode) {
    document.body.classList.add('presentation-mode');
    toggleBtn.innerHTML = '🖥️ Modo Padrão';
  }

  toggleBtn.addEventListener('click', () => {
    const active = document.body.classList.toggle('presentation-mode');
    localStorage.setItem('portal_presentation_mode', active);
    toggleBtn.innerHTML = active ? '🖥️ Modo Padrão' : '📽️ Modo Apresentação';
  });
}

/* ==========================================================================
   4. ROLAGEM SUAVE E BOTÃO VOLTAR AO TOPO
   ========================================================================== */
function initSmoothScroll() {
  const scrollBtns = document.querySelectorAll('[data-scroll-to]');
  scrollBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = btn.getAttribute('data-scroll-to');
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

function initNavbarScrollState() {
  const navbar = document.querySelector('.portal-navbar');
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    // Sombra da barra de navegação
    if (window.scrollY > 40) {
      navbar.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.7)';
      navbar.style.borderBottomColor = 'rgba(185, 28, 28, 0.4)';
    } else {
      navbar.style.boxShadow = 'none';
      navbar.style.borderBottomColor = 'rgba(255, 255, 255, 0.08)';
    }

    // Marca link ativo no menu
    let currentSection = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      if (window.pageYOffset >= sectionTop) {
        currentSection = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSection}`) {
        link.classList.add('active');
      }
    });
  });
}

/* ==========================================================================
   5. LINHA DO TEMPO HISTÓRICA INTERATIVA
   ========================================================================== */
function initTimeline() {
  const stepButtons = document.querySelectorAll('.timeline-step-btn');
  const contentPanes = document.querySelectorAll('.timeline-content-pane');

  stepButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const year = btn.getAttribute('data-year');

      stepButtons.forEach(b => b.classList.remove('active'));
      contentPanes.forEach(p => p.classList.remove('active'));

      btn.classList.add('active');
      const targetPane = document.getElementById(`timeline-${year}`);
      if (targetPane) {
        targetPane.classList.add('active');
      }
    });
  });
}

/* ==========================================================================
   6. SIMULADOR INTERATIVO "SEU DIA COM AS CONQUISTAS SOCIAIS"
   ========================================================================== */
const simulatorData = {
  jornada: {
    title: 'Jornada Máxima de 8 Horas e Descanso Semanal Remunerado',
    law: 'Conquista histórica internacional (1886) e Art. 7º, XIII da CF/88',
    without: 'Antes das lutas operárias, trabalhadores (incluindo crianças de 8 anos) cumpriam jornadas exaustivas de 14 a 16 horas por dia, 7 dias por semana, sem descanso semanal. A expectativa de vida em distritos fabris não passava de 30 anos.',
    with: 'Você tem direito a descanso semanal remunerado e jornada de no máximo 8 horas diárias, permitindo tempo livre para convívio familiar, descanso físico, estudos e lazer indispensáveis à dignidade humana.',
    actors: 'Greves de Haymarket (1886), Greve Geral de 1917 no Brasil e sindicatos operários.'
  },
  sus: {
    title: 'Atendimento Gratuito e Universal no SUS (Sistema Único de Saúde)',
    law: 'Artigos 196 a 200 da Constituição Federal de 1988 e Lei 8.080/1990',
    without: 'Antes de 1988, quem não tinha carteira de trabalho assinada (INAMPS) não tinha direito a hospitais públicos. Os pobres dependiam de caridade nas Santas Casas ou morriam sem atendimento médico.',
    with: 'Qualquer cidadão brasileiro ou estrangeiro em território nacional tem acesso 100% gratuito a vacinas, socorro de urgência (SAMU 192), tratamentos oncológicos de alto custo e transplantes de órgãos.',
    actors: 'Movimento da Reforma Sanitária (liderado por médicos e sanitaristas de esquerda como Sergio Arouca) na Constituinte de 1988.'
  },
  ferias: {
    title: 'Férias Remuneradas com 1/3 a Mais e 13º Salário',
    law: 'Lei Federal nº 4.090/1962 e Art. 7º, VIII e XVII da CF/88',
    without: 'Trabalhar um ano inteiro sem nenhuma pausa remunerada. Se ficasse exausto ou doente, o trabalhador era sumariamente substituído sem indenização. No fim de ano, nenhuma renda extra para sustento.',
    with: 'Direito assegurado a 30 dias de descanso remunerado anual acrescido de um terço do salário, além de uma folha salarial extra no fim do ano (13º salário) para impulsionar a vida da família e o consumo interno.',
    actors: 'Mobilizações do movimento sindical trabalhista nos anos 50 e 60, com promulgação sob o governo de João Goulart.'
  },
  educacao: {
    title: 'Ensino Público Gratuito e Lei de Cotas Sociais/Raciais',
    law: 'Art. 205 da CF/88 e Lei Federal nº 12.711/2012',
    without: 'O ensino superior e as boas escolas eram feudos quase exclusivos das famílias ricas. Negros, indígenas e filhos de trabalhadores rurais e operários eram sistematicamente barrados da universidade.',
    with: 'Acesso garantido a escolas públicas, expansão das Universidades Federais (REUNI, Prouni) e cotas que colocaram mais de 1,2 milhão de jovens de baixa renda e negros nas melhores universidades públicas do país.',
    actors: 'Movimentos estudantis (UNE), movimento negro unificado, educadores progressistas (como Paulo Freire e Darcy Ribeiro) e governos populares.'
  },
  aposentadoria: {
    title: 'Previdência Pública e Benefício de Prestação Continuada (BPC)',
    law: 'Art. 201 e 203 da Constituição de 1988 (Seguridade Social)',
    without: 'Idosos que não conseguiam mais trabalhar fisicamente eram abandonados à mendicância e à fome, sem nenhuma pensão ou amparo estatal. A velhice equivalia à miséria absoluta.',
    with: 'Aposentadoria pública garantida por lei e proteção solidária intergeracional, além de um salário mínimo mensal para idosos e pessoas com deficiência em extrema pobreza (BPC/LOAS).',
    actors: 'Lutas dos trabalhadores rurais (CONTAG), movimentos sociais e bancada progressista da Constituinte de 1988.'
  },
  salario: {
    title: 'Salário Mínimo Nacional Unificado e Proteção da CLT',
    law: 'Consolidação das Leis do Trabalho (Decreto-Lei 5.452/1943) e CF/88',
    without: 'Contratos verbais leoninos em que o empregador fixava o pagamento que quisesse, demitia sem justa causa a qualquer momento e não pagava adicionais de insalubridade ou horas extras.',
    with: 'Um piso mínimo legalmente exigível para suprir as necessidades vitais básicas de moradia, alimentação e vestuário, além de FGTS, aviso prévio indenizado e proteção contra demissão arbitrária.',
    actors: 'Grandes greves operárias da Primeira República e pressão sindical incorporada na legislação trabalhista brasileira.'
  }
};

function initSimulator() {
  const simButtons = document.querySelectorAll('.sim-option-btn');
  const simTitle = document.getElementById('sim-result-title');
  const simLaw = document.getElementById('sim-result-law');
  const simWithout = document.getElementById('sim-result-without');
  const simWith = document.getElementById('sim-result-with');
  const simActors = document.getElementById('sim-result-actors');

  if (!simTitle || simButtons.length === 0) return;

  simButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const key = btn.getAttribute('data-sim');
      const data = simulatorData[key];
      if (!data) return;

      simButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      simTitle.textContent = data.title;
      simLaw.textContent = data.law;
      simWithout.textContent = data.without;
      simWith.textContent = data.with;
      simActors.textContent = data.actors;
    });
  });
}

/* ==========================================================================
   7. ACCORDION: MITOS E VERDADES SOBRE A ESQUERDA
   ========================================================================== */
function initAccordion() {
  const items = document.querySelectorAll('.accordion-item');

  items.forEach(item => {
    const header = item.querySelector('.accordion-header');
    header.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');

      // Fecha todos os outros para manter leitura limpa
      items.forEach(other => {
        if (other !== item) other.classList.remove('open');
      });

      // Alterna o atual
      item.classList.toggle('open', !isOpen);
    });
  });
}

/* ==========================================================================
   8. QUIZ INTERATIVO DE HISTÓRIA E CIDADANIA (SALA DE AULA)
   ========================================================================== */
const quizQuestions = [
  {
    question: "Onde e em que momento histórico surgiram originalmente as designações políticas de 'esquerda' e 'direita'?",
    options: [
      "Na Revolução Russa de 1917, na disputa entre Bolcheviques e Mencheviques.",
      "Na Revolução Francesa de 1789, pela posição espacial dos deputados na Assembleia Nacional.",
      "Na Grécia Antiga, durante as assembleias democráticas de Atenas.",
      "Na Guerra Fria de 1945, entre os blocos dos Estados Unidos e da União Soviética."
    ],
    correctIndex: 1,
    explanation: "Correto! Em 1789, na Assembleia Nacional Constituinte francesa, os deputados do Terceiro Estado e jacobinos que defendiam transformações profundas e a igualdade sentavam-se à esquerda do presidente. À direita sentavam-se os nobres que queriam preservar o Antigo Regime."
  },
  {
    question: "Qual foi a principal motivação para a emergência das correntes socialistas durante o século XIX?",
    options: [
      "A oposição ao avanço da tecnologia e das máquinas a vapor.",
      "As condições desumanas de trabalho (14 a 16 horas por dia) e a exploração infantil geradas pela Revolução Industrial.",
      "O interesse de aristocratas feudais em recuperar suas terras perdidas.",
      "A criação de um sistema bancário exclusivamente privado."
    ],
    correctIndex: 1,
    explanation: "Exato! A Revolução Industrial concentrou imensas riquezas nas mãos de industriais enquanto a classe operária sofria com jornadas abusivas, acidentes constantes e miséria, motivando teóricos e sindicatos a formularem as teorias socialistas."
  },
  {
    question: "No Brasil, qual documento histórico consagrou os Direitos Sociais como o SUS, a previdência pública e a educação universal?",
    options: [
      "A Constituição Republicana de 1891.",
      "O Ato Institucional nº 5 (AI-5) de 1968.",
      "A Constituição Cidadã de 1988, especialmente em seus Artigos 6º e 196.",
      "O Tratado de Tordesilhas de 1494."
    ],
    correctIndex: 2,
    explanation: "Perfeito! A Constituição Federal de 1988, fruto da intensa mobilização popular na redemocratização após a ditadura militar, instituiu o Estado Democrático de Direito e consagrou a saúde como 'direito de todos e dever do Estado'."
  },
  {
    question: "Como a esquerda política contemporânea compreende o conceito de igualdade de oportunidades?",
    options: [
      "Defendendo que todos recebam rigorosamente o mesmo salário, independente de qualquer fator.",
      "Proibindo que as pessoas comprem seus próprios pertences pessoais, roupas ou computadores.",
      "Garantindo que todas as crianças e jovens tenham um ponto de partida digno (educação e saúde públicas) para que o destino não dependa de sua renda familiar ao nascer.",
      "Eliminando a realização de eleições e escolhas democráticas."
    ],
    correctIndex: 2,
    explanation: "Exatamente! Como teorizado pelo filósofo John Rawls e pelas correntes progressistas, a meritocracia só é justa quando as condições de partida são reais. Ninguém escolhe o berço onde nasce, portanto o Estado deve assegurar direitos fundamentais a todos."
  },
  {
    question: "Qual foi a origem do Dia Internacional dos Trabalhadores (1º de Maio)?",
    options: [
      "Um feriado decretado por reis absolutistas europeus como presente aos servos.",
      "A comemoração pacífica de um acordo empresarial entre bancos norte-americanos.",
      "A greve geral e as manifestações de maio de 1886 em Chicago (Massacre de Haymarket) que reivindicavam a jornada de 8 horas diárias.",
      "A inauguração da Torre Eiffel em Paris no século XIX."
    ],
    correctIndex: 2,
    explanation: "Certíssimo! Em maio de 1886, operários em Chicago paralisaram as fábricas exigindo a jornada máxima de 8 horas diárias. A violenta repressão policial que vitimou líderes operários tornou o 1º de Maio símbolo mundial de luta e dignidade."
  }
];

let currentQuestionIndex = 0;
let userScore = 0;

function initQuiz() {
  const questionEl = document.getElementById('quiz-question');
  const optionsCol = document.getElementById('quiz-options');
  const feedbackBox = document.getElementById('quiz-feedback');
  const nextBtn = document.getElementById('quiz-next-btn');
  const currentStepEl = document.getElementById('quiz-step');
  const scoreBadge = document.getElementById('quiz-score');

  if (!questionEl || !optionsCol) return;

  function renderQuestion() {
    feedbackBox.className = 'quiz-feedback-box';
    feedbackBox.textContent = '';
    nextBtn.style.display = 'none';

    const q = quizQuestions[currentQuestionIndex];
    currentStepEl.textContent = `Pergunta ${currentQuestionIndex + 1} de ${quizQuestions.length}`;
    scoreBadge.textContent = `Pontos: ${userScore}/${quizQuestions.length}`;
    questionEl.textContent = q.question;
    optionsCol.innerHTML = '';

    q.options.forEach((optText, index) => {
      const btn = document.createElement('button');
      btn.className = 'quiz-opt-btn';
      btn.innerHTML = `<span style="font-weight:700; color:var(--accent-gold);">${String.fromCharCode(65 + index)})</span> ${optText}`;

      btn.addEventListener('click', () => {
        handleOptionClick(index, btn, q);
      });

      optionsCol.appendChild(btn);
    });
  }

  function handleOptionClick(selectedIndex, chosenBtn, q) {
    const allButtons = optionsCol.querySelectorAll('.quiz-opt-btn');
    allButtons.forEach(b => b.disabled = true);

    const isCorrect = selectedIndex === q.correctIndex;
    if (isCorrect) {
      userScore++;
      chosenBtn.classList.add('correct');
      feedbackBox.className = 'quiz-feedback-box show correct';
      feedbackBox.innerHTML = `<strong>Resposta Correta!</strong> ${q.explanation}`;
    } else {
      chosenBtn.classList.add('wrong');
      allButtons[q.correctIndex].classList.add('correct');
      feedbackBox.className = 'quiz-feedback-box show wrong';
      feedbackBox.innerHTML = `<strong>Atenção:</strong> ${q.explanation}`;
    }

    scoreBadge.textContent = `Pontos: ${userScore}/${quizQuestions.length}`;
    nextBtn.style.display = 'inline-flex';
    nextBtn.textContent = currentQuestionIndex < quizQuestions.length - 1 ? 'Próxima Questão ➔' : 'Ver Resultado Final 🏆';
  }

  nextBtn.addEventListener('click', () => {
    if (currentQuestionIndex < quizQuestions.length - 1) {
      currentQuestionIndex++;
      renderQuestion();
    } else {
      showFinalResult();
    }
  });

  function showFinalResult() {
    questionEl.textContent = 'Parabéns pela Conclusão do Quiz de Cidadania & História!';
    optionsCol.innerHTML = `
      <div style="background: rgba(255,255,255,0.03); border: 1px solid var(--border-red); border-radius: 12px; padding: 2rem; text-align: center;">
        <div style="font-size: 3rem; margin-bottom: 0.5rem;">🎉</div>
        <h4 style="font-size: 1.5rem; color: #fff; margin-bottom: 0.5rem;">Sua Pontuação Final: ${userScore} de ${quizQuestions.length}</h4>
        <p style="color: var(--text-muted); font-size: 1rem; max-width: 600px; margin: 0 auto 1.5rem auto;">
          ${userScore >= 4
            ? 'Excelente domínio conceitual! Você compreende com profundidade as raízes históricas, os direitos e o significado da luta social da esquerda.'
            : 'Bom trabalho! O estudo contínuo da história nos ensina que nenhum direito fundamental existiria hoje sem a coragem e a solidariedade dos movimentos populares.'}
        </p>
        <button id="quiz-restart-btn" class="btn btn-primary">Reiniciar Quiz 🔄</button>
      </div>
    `;
    feedbackBox.className = 'quiz-feedback-box';
    nextBtn.style.display = 'none';

    document.getElementById('quiz-restart-btn')?.addEventListener('click', () => {
      currentQuestionIndex = 0;
      userScore = 0;
      renderQuestion();
    });
  }

  renderQuestion();
}
