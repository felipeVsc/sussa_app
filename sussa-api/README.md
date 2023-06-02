# Sussa Backend

O backend do serviço Sussa é composto por 3 aplicações:

1. **Sussa API**
	- Aplicação Django responsável por disponibilizar a principal API do serviço;
	- Concentra as regras de negócio;
	- Provê um painel administrativo;
	- Interage com o banco de dados e agenda a execução de tarefas assíncronas;
	- Gerencia as migrações de banco de dados;
	- Possui como clientes as aplicações do paciente e do psicólogo.

2. **Sussa CRP**
	- Implementa automação com Selenium para validar código CRP do psicólogo;
	- Disponibiliza uma API HTTP para comunicação;
	- Possui como cliente a aplicação Sussa API.

3. **Sussa NLP**
	- Carrega um modelo NLP para a inferência de emoção em textos;
	- Disponibiliza uma API HTTP para comunicação;
	- Possui como cliente a aplicação Sussa API.

E interage com dois tipos de banco de dados:

- **Postgres**
	- Banco de dados relacional;
	- Para persistir os dados referentes ao domínio do negócio.
  
- **Redis**
	- Banco de dados não relacional do tipo chave-valor;
	- Para gerenciamento de filas e cache.

### Ambiente Virtual

Antes de cada configuração abaixo, é recomendado criar um ambiente virtual para isolar a instalação de pacotes:

1. Instalar Python 3;

2. Criar ambiente virtual:
	> python -m venv env

3. Ativar ambiente virtual:
	> source env/bin/activate
	- Agora o comando `python` e `pip` irá apontar para instalações dentro do diretório `env/bin/`.

## 1. Executando Sussa API

### Aplicação Django

1. Instalar banco de dados Postgres;
2. Configurar nome e usuário do banco de dados no Postgres (conforme o arquivo `.env.debug`);
3. Instalar banco chave-valor Redis;
4. Certifcar-se da instalação do Python 3 e Pip;
5. Copiar arquivo `.env.debug` como `.env` e alterar valor das variáveis conforme necessário;
6. Atualizar Pip:
	> pip install -U pip

7. Instalar dependências da aplicação:
	> pip install -r requirements.txt

8. Executar migrações de banco de dados:
	> python manage.py migrate

9. Executando servidor na porta 8000:
	> python manage.py runserver 8000 

### Filas Celery

Necessitamos do Celery para executar algumas tarefas assíncronas:

1. Executar Celery Worker para execução de tarefas assíncronas:
	> celery  -A  app.celery  worker  --pool=eventlet  --concurrency=8  -l  INFO
	- `--pool=eventlet` indica a execução das tarefas em um pool gerenciado pela biblioteca de concorrência eventlet;
	- `--concurrency=8` indica a alocação de 8 workers para processar as tarefas, neste caso, 8 light threads (coroutines) por estarmos utilizando a biblioteca eventlet.

2. Executar Celery Beat para execução de tarefas periódicas:
	> celery  -A  app.celery  beat  -l  INFO

3. Executar Celery Flower para monitoramento dos clusters Celery:
	> celery  -A  app.celery  --broker=CELERY_BROKER  flower --port=8010
	- Visualizar valor da variável `CELERY_BROKER` no arquivo `.env`.

## 2. Configurando Sussa CRP

1. Atualizar Pip:
	> pip install -U pip

2. Instalar dependências da aplicação:
	> pip install -r requirements.txt

3. Certificar-se da instalação do Chrome;

4. Executando servidor na porta 8001:
	> python main.py 8001

## 3. Configurando Sussa NLP

1. Certificar-se da configuração do modelo:
	- Recomendação: https://huggingface.co/michellejieli/emotion_text_classifier
	- Instalar Git LFS
	- Clonar repositório do modelo:
		> git clone https://huggingface.co/michellejieli/emotion_text_classifier

2. Copiar arquivo `.env.debug` como `.env` e alterar valor da variável `NLP_PATH` apontando para o diretório do modelo configurado;

3. Atualizar Pip:
	> pip install -U pip

4. Instalar dependências da aplicação:
	> pip install -r requirements.txt

5. Instalar dependência `pytorch` para a plataforma CPU:
	> pip install torch==2.0.1 --index-url https://download.pytorch.org/whl/cpu

6. Executando servidor na porta 8002:
	> python main.py 8002

## Executando com Docker Compose

1. Instalar Docker e Docker Compose;
2. Navegar para o diretório da aplicação Sussa API;
3. Copiar arquivo `.env.debug` como `.env` nos diretórios `sussa-api` e `sussa-nlp`;
4. Realizar o build das imagens das aplicações:
	> docker compose build

5. Executar os containers a partir dessas imagens:
	> docker compose up

### Mapeamento de portas:

As aplicações são executadas na porta 8000 dentro dos containers e são mapeadas para as seguintes portas da máquina host:

- `0.0.0.0:8000` -> Sussa API
- `0.0.0.0:8001` -> Sussa CRP
- `0.0.0.0:8002` -> Sussa NLP
- `0.0.0.0:8010` -> Celery Flower
