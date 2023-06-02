# SUSSA - Equipe 01

## Projeto

> “Auxiliar estudantes universitários com problemas de ansiedade e estresse, por meio de uma ferramenta móvel de autoconhecimento.”

Solução de software voltada para saúde mental, com foco em transtornos de ansiedade e estresse e em auxiliar o processo de autoconhecimento de alunos universitários, por meio de métodos como journaling e testes psicológicos. O software também irá conectar profissionais de psicologia com o público-alvo da solução, que são os alunos universitários.

### Estudante

O projeto tem como objetivo oferecer aos estudantes universitários um local onde eles possam depositar suas emoções e obter ajuda de um profissional de psicologia, além de dispor de um aparato informativo sobre saúde mental, com foco em ansiedade e depressão, e os serviços disponíveis na universidade.

### Profissional de Psicologia

Acesso aos dados de saúde mental dos estudantes, além de uma conexão mais próxima

O projeto tem como objetivo oferecer aos profissionais de psicologia dados e insights sobre a saúde mental dos estudantes universitários, por meio do monitoramento das emoções, que são extraídas de textos redigidos pelos usuários. A plataforma também conta um Chat para comunicação direta entre o Estudante e o Profissional.

## Problemas

1) Demanda por soluções médicas voltadas para jovens;
2) Demanda de saúde mental voltada para transtornos como ansiedade, depressão e estresse na vida do jovem universitário;
3) Demanda por soluções de auto-monitoramento, que trazem benefícios para os usuários;
4) Demanda por uma coleta passiva de dados por parte dos profissionais de psicologia;
5) Demanda por mais informações sobre os serviços voltados a saúde mental disponíveis na universidade.

## Expectativas

1) Aplicação mobile voltada para o Estudante, com um Diário com a funcionalidade de extração de emoção de textos, permitindo um monitoramento das emoções do usuário. O aplicativo também irá contar com um Chat com psicológos, testes psicológicos e textos informativos sobre saúde mental.

2) Aplicação Web voltada para o profissional, onde ele irá poder encontrar os dados acerca dos seus pacientes, por meio de gráficos informativos, além de um sistema de Chat com os pacientes.

## Personas
Uma persona representa um usuário do produto e essa descrição deve falar não só o papel, mas também suas necessidades e seus objetivos. Isso cria uma representação realista dos usuários, auxiliando a equipe a descrever funcionalidades a partir do ponto de vista de quem vai usar o produto (Aguiar, 2021).

### Estudante

*O que ele faz?*

O aluno está vivendo momentos dificeis, seja na universidade, seja em sua vida pessoal, ou sejam as preocupações sobre o seu futuro acadêmico e profissional, logo ele está se sentindo ansioso, com crises de ansiedade e possivelmente sinais de outras patologias como depressão. Ele não se sente entendido, não consegue perceber alguém que possa acolher ele.

*O que ele espera?*

Um local onde ele possa receber informações sobre saúde mental, onde ele possa praticar a técnica do journaling. Ele espera um local onde ele possa desabafar quando necessário, externando seus sentimentos e preocupações. Ele gostaria também de saber onde e como ele pode buscar ajuda, tanto de profissionais da universidade, quanto de serviços oficiais da universidade.

### Profissionais

*O que ele faz?*

Os profissionais de psicologia das universidades não conseguem mensurar quão bem emocionalmente os seus alunos estão. Existem estudos, porém, a obtenção dos dados reais é um processo dificil, logo eles não conseguem mensurar efetivamente o estado emocional do corpo discente. Os profissionais também sentem um distanciamento dos alunos, dado que os serviços prestados nem sempre são de conhecimento de toda a comunidade acadêmica. Ainda no distanciamento, os profissionais gostariam de ofertar mais vagas de estágios para os alunos dentro da universidade.

*O que ele espera?*

Ele espera a obtenção de dados acerca dos estudantes, de modo que ele consiga monitorar o estado emocional. Ele também espera ter um contato mais próximo com o corpo discente e poder dar a oportunidade de estudantes de psicologia trabalharem em cima dos dados e em conjunto com os usuários do aplicativo.

## Marcos

Devemos entregar **pequenas versões frequentes**. A equipe deve definir os marcos do projeto (*milestones)*, definindo os prazos de entrega e quais funcionalidades serão implementados até o final de cada marco. No final de cada marco devemos distribuir uma nova versão do produto, pronta para produção.

Podemos pensar nessas pequenas versões como MVPs (do inglês, *minimum viable product*). MVP é a versão mais simples de um produto que pode ser disponibilizada para a validação de um pequeno conjunto de hipóteses sobre o negócio. Após ser **construído,** o MVP é colocado à prova. Com isso, teremos dados que possibilitam **medir** o seu uso e, portanto, gerar o **aprendizado** desejado (Caroli, 2018).

### Marco 1 - 15/02/2023

O `Marco 1` deve incluir: `documentação dos requisitos; Figma de Alta Fidelidade`. Saberemos que isso aconteceu com base em: `reuniões para validação com docentes do Instituto de Psicologia; Reuniões com os professores da disciplina para validação dos requisitos e do Figma; Link para o Figma`.

- [x] Documentação de Requisitos.
- [x] Figma de Alta Fidelidade.

### Marco 2 - 30/03/2023

O `Marco 2` deve incluir: `front-end do aplicativo do estudante; modelagem entidade-relacionamento do banco de dados`. Saberemos que isso aconteceu com base em: `Disponibilização do APK na entrega da AB1; Link para o Lucidchart contendo o diagrama ER.`.

- [x] Boilerplate do Front-end.
- [x] Front-end funcional.
- [x] Modelagem ER do Banco.
- [x] Models do banco no back-end.
- [x] Migrations do banco no back-end.


### Marco 3 - 18/04/2023

O `Marco 3` deve incluir: `back-end funcional`. Saberemos que isso aconteceu com base em: `Deploy da API nos sistemas do Edge para a AB1`.

- [x] Rotas de SignIn/Up (Auth)
- [x] Rotas de Course
- [x] Rotas de Service
- [x] Rotas de Diary Report
- [x] Rotas de Diary Access
- [x] Rotas de Notification

### Marco 4 - 11/05/2023

O `Marco 4` deve incluir: `aplicativo web do psicólogo`. Saberemos que isso aconteceu com base em: `Deploy do app web nos sistemas do Edge para a AB2`.

- [x] Deploy
- [x] Front-end do aplicativo web
- [x] Rotas do back-end para servir as especificidades do aplicativo web

### Marco 5 - 11/05/2023

O `Marco 5` deve incluir: `deploy final`. Saberemos que isso aconteceu com base em: `Integração de todos os módulos e partes do sistema; Entrega do deploy em produção no sistema Edge para a AB2`.

- [x] Aplicativo utilizável (Integrado)
- [x] Manual do Usuário
- [x] Manual do Desenvolvedor
- [x] Vídeo de Apresentação
- [x] Deploy


## Riscos

1. **Risco 1** Falha no Módulo de Extração de Emoções. *Severidade Alta e Probabilidade Média*.

   Ações para mitigação do risco:

   * Testes extensivos em diversos modelos existentes.
   * Teste em diversas condições, de modo que a máquina seja capaz de realizar a inferência.
   * Sistema de Fila para possibilitar um processamento posterior, evitando a perda do input do usuário.

2. **Risco 2** Falha no Módulo de Chat. *Severidade Média e Probabilidade Baixa*.

   Ações para mitigação do risco:

   * Não definir como funcionalidade core do aplicativo.
   * Testar diferentes formas de realizar a construção do Chat.

3. **Risco 3** Falta de Engajamento. *Severidade Média e Probabilidade Média*.

   Ações para mitigação do risco:

   * Contato com professores do Instituto de Psicologia para validação do MVP.
   * Se basear na experiência de mercado dos professores para validação do MVP.
   * Projetos de marketing para engajamento dos usuários.

4. **Risco 4** Falhas no Deploy. *Severidade Alta e Probabilidade Baixa*.

   Ações para mitigação do risco:

   * Contato frequente com DevOps do Edge (Diogo).
   * Utilização de soluções conhecidas.
   * Testes contínuos de integração.

## Soluções Técnicas 

### Front-end Mobile:
Para o App Mobile, escolhemos o React Native, que possui por vantagens a possibilidade de desenvolvimento de um único app para iOS e Android. Além disso, o framework possui ótima performance, renderizando componentes nativos. Além disso, o conhecimento da equipe tendeu mais para esta tecnologia, sendo possível a replicação dos conceitos de React entre a Web e o Mobile.

### Front-end Web:
Para a Web, aplicamos React com Next.js. A vantagem do Next.js é que ocorre renderização do lado do servidor, possibilitando melhor indexação nos mecanismos de busca;

### Back-end:
Para a construção do back-end foi escolhido o framework Django REST, escrito em Python. A escolha se deu pela fácil legibilidade da linguagem Python e pela necessidade de integração com ferramentas de NLP e Web Scrapping.
Como solução de banco de dados, utilizamos um banco de dados relacional construído no PostgreSQL. PostgreSQL é uma das principais opções open-source para SGBD’s, e a utilização de um modelo relacional atendia as necessidades do projeto.

### NLP:
Com o objetivo de facilitar o desenvolvimento da aplicação, escolhemos por utilizar um modelo pré-treinado disponível no Hugginface.
A escolha por um modelo pré-treinado retirou a necessidade de construção e treino de um modelo, tornando possível aproveitarmos diversos modelos já testados em datasets mundialmente reconhecidos.
O modelo utilizado em questão foi o “michellejieli/emotion_text_classifier”, que se baseia no DistilRoBERta, que é um famoso modelo de classificação de textos. O modelo foi testado em seis datasets diferentes, além de ter sido realizado um processo de fine-tuning com dados de um dataset de frases da sitcom Friends.
O modelo é capaz de reconhecer sete emoções: felicidade, surpresa, raiva, tristeza, neutralidade, medo e desgosto. Ele está disponível em: https://huggingface.co/michellejieli/emotion_text_classifier


## Equipe

Jose Rui <br />
*Scrum Master; Desenvolvedor Front-end* <br />
*E-mail* <br />
https://github.com/ruifernandees

Allanderson Lima <br />
*Desenvolvedor Back-end; DevOps* <br />
*E-mail* <br />
https://github.com/koallann

Felipe Vasconcelos <br />
*Desenvolvedor Back-end; Cientista de Dados* <br />
*E-mail* <br />
https://github.com/felipevsc

Wagner Silva <br />
*Desenvolvedor Front-end* <br />
*E-mail* <br />
https://github.com/zadhart

Rick Martim<br />
*Desenvolvedor Back-end* <br />
*E-mail* <br />
https://github.com/RickMLS1

## Documentos e Links (AB)

[Jira]()
[Atas de Daily]()
[Relatório da AB1](https://docs.google.com/document/d/1x7npXY9l7eMCflpuC_innvaWutvFWS_poyXHTK9vDoI/edit?usp=sharing)
Link 2:
