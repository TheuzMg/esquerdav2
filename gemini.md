# A Esquerda: Igualdade, Justiça e Transformação Social — Trabalho Escolar de Ciências Humanas

Site interativo sobre as **origens, os ideais, as conquistas e as propostas da esquerda política**, desenvolvido como trabalho escolar de Ciências Humanas (História, Sociologia e Filosofia Política).

O projeto é feito só com **HTML, CSS e JavaScript puros**, sem frameworks nem bibliotecas externas.

---

## 👥 Integrantes do grupo

1. Vitória Maria Magalhães Santos
2. Thatiane Vitória Conrado Silva
3. Alice Gabrielle Faria Rodrigues
4. Maria Eduarda Siqueira Santos

---

## 🎯 Ideia do trabalho

O objetivo é explicar de forma clara **de onde surgiu a esquerda, o que ela defende e por que o grupo escolheu defendê-la**. O site é uma página única de rolagem, em que cada seção responde a uma pergunta (de onde surgiu? o que defende? por que defendemos? o que já conquistou? o que propõe para o futuro?), e o leitor pode interagir com o conteúdo em vez de só ler.

## 🧭 Como o site funciona

É uma página única (`index.html`) com menu fixo no topo e as seguintes seções:

| Seção | O que mostra |
|---|---|
| **Início** | Apresentação do tema e botões de acesso rápido |
| **História** | Origem de "esquerda" e "direita" na Revolução Francesa (1789) e **linha do tempo interativa** com 8 marcos, de 1789 a 1988 |
| **Ideais** | 8 cards com os princípios da esquerda (igualdade social, justiça, direitos trabalhistas etc.) |
| **Argumentos** | Os 7 argumentos do grupo, que são o centro do trabalho |
| **Brasil** | A esquerda na história brasileira (1917, CLT, Diretas Já, Constituição de 1988) |
| **Conquistas** | Direitos sociais e trabalhistas ligados a essa trajetória |
| **Simulador** | Seis conquistas (jornada de 8h, SUS, férias e 13º, educação e cotas, aposentadoria e BPC, salário mínimo e CLT). Ao clicar, o site mostra como era antes, como é hoje, a lei que garantiu e quem lutou por ela |
| **Mitos & Fatos** | 5 perguntas em formato de acordeão (abre e fecha) |
| **Futuro** | 8 propostas, como o fim da escala 6x1, justiça climática e outras para o século XXI |
| **Quiz** | 5 questões de múltipla escolha sobre História e Cidadania, com explicação a cada resposta e pontuação final |
| **Fontes** | Referências usadas no trabalho |
| **Manifesto** | Conclusão com o posicionamento do grupo |

### Recursos de interação
- **Barra de progresso de leitura** no topo da página.
- **Menu que destaca a seção atual** enquanto o leitor rola a página.
- **Menu para celular** (botão ☰).
- **Modo Apresentação:** aumenta o tamanho dos textos para projeção em sala de aula, e o site lembra a escolha do usuário.
- **Rolagem suave** entre as seções e botão de voltar ao topo.

---

## 📐 Critérios usados para construir o site

1. **Posicionamento claro e fundamentado.** O trabalho pede que o grupo defenda uma posição, então os argumentos são o ponto central, cada um explicado e justificado.
2. **Base histórica.** O conteúdo parte de fatos e datas (Revolução Francesa, Revolução Industrial, Haymarket e 1º de Maio, Greve Geral de 1917, Constituição de 1988), citando as leis e artigos que garantiram cada direito.
3. **Ligação com o cotidiano.** O simulador mostra que direitos de hoje, como férias, SUS e salário mínimo, vieram de lutas históricas.
4. **Aprender interagindo.** Linha do tempo, simulador, acordeão e quiz tornam o site mais dinâmico do que um texto corrido.
5. **Linguagem acessível.** Textos organizados em cards e seções curtas, com títulos que fazem perguntas ao leitor.
6. **Identidade visual.** Tema escuro com vermelho e dourado, ilustrações em SVG (`hero-artwork.svg`, `brasil-history.svg`, `logo-esquerda.svg`) que carregam rápido e não perdem qualidade.
7. **Responsividade.** O layout se adapta a computador, tablet e celular.
8. **Acessibilidade e uso em sala.** Textos alternativos nas imagens, rótulo nos botões do menu e modo apresentação para projetor.
9. **Fontes e honestidade com a história.** Há uma seção de referências e um compromisso explícito com a verdade histórica.
10. **Simplicidade técnica.** Só HTML, CSS e JavaScript puros, com todos os arquivos na mesma pasta, o que facilita publicar no GitHub Pages.

---

## 📁 Arquivos do projeto

- `index.html`, `style.css`, `script.js`: o site
- `hero-artwork.svg`, `brasil-history.svg`, `logo-esquerda.svg`: ilustrações e logo
- `gemini.md`: este arquivo de documentação

## 🚀 Como publicar no GitHub Pages

1. Suba todos os arquivos desta pasta para a raiz do repositório.
2. Vá em *Settings* → *Pages*, escolha a branch `main` e a pasta `/ (root)`.
3. O site abrirá no endereço que o GitHub mostrar.
