# 🚀 PROJETO API – Gestão de Matrículas e Cursos

Este projeto consiste no desenvolvimento de uma **API REST** para gerenciamento de **alunos, cursos e suas respectivas matrículas**.

📚 **Contexto Acadêmico**
Este projeto foi desenvolvido como **atividade prática do programa Bolsa Futuro Digital**, no **curso Backend JavaScript – Turma 5**, com o objetivo de consolidar os conhecimentos em **Node.js, Express, Sequelize e modelagem de banco de dados relacional**.

📌 **Objetivo Técnico**
Demonstrar a correta implementação do **relacionamento N:N (Muitos-para-Muitos)** utilizando o **Sequelize ORM**, onde:

* Um aluno pode se matricular em vários cursos
* Um curso pode possuir vários alunos

Esse relacionamento é intermediado pela tabela **Matrículas**, garantindo integridade dos dados e aderência às boas práticas de modelagem.

---

## ✨ Tecnologias Utilizadas

O projeto foi desenvolvido com as seguintes tecnologias:

* **Node.js** – Ambiente de execução JavaScript
* **Express** – Framework web para criação de APIs REST
* **Sequelize** – ORM para modelagem e manipulação do banco de dados
* **SQLite3** – Banco de dados leve, baseado em arquivos
* **Sequelize CLI** – Gerenciamento de models, migrations e seeders
* **Nodemon** – Reinício automático do servidor durante o desenvolvimento

---

## 🛠️ Como Executar o Projeto

Siga os passos abaixo para rodar a aplicação localmente.

### 1️⃣ Instalar as Dependências

No diretório raiz do projeto, execute:

```bash
npm install
```

---

### 2️⃣ Executar as Migrations

As migrations criam a estrutura das tabelas no banco de dados SQLite.

```bash
npx sequelize db:migrate
```

📌 **Resultado esperado:**

* Criação das tabelas `Alunos`, `Cursos` e `Matriculas`
* Geração do arquivo `database.sqlite` (caso não exista)

---

### 3️⃣ Iniciar o Servidor

Para iniciar a API em ambiente de desenvolvimento:

```bash
npm run dev
```

📌 **Resultado esperado no terminal:**

```bash
[nodemon] starting `node src/server.js`
Servidor rodando na porta 3000
```

A API estará disponível em:
👉 **[http://localhost:3000](http://localhost:3000)**

---

## 🔗 Endpoints da API

### 📚 Alunos

| Método | Endpoint                  | Descrição                         |
| ------ | ------------------------- | --------------------------------- |
| POST   | `/alunos`                 | Cria um novo aluno                |
| GET    | `/alunos/:alunoId/cursos` | Lista todos os cursos de um aluno |

---

### 🎓 Cursos

| Método | Endpoint                  | Descrição                                   |
| ------ | ------------------------- | ------------------------------------------- |
| POST   | `/cursos`                 | Cria um novo curso                          |
| GET    | `/cursos/:cursoId/alunos` | Lista todos os alunos matriculados no curso |

---

### 🧩 Matrículas (Relacionamento N:N)

| Método | Endpoint      | Descrição                            |
| ------ | ------------- | ------------------------------------ |
| POST   | `/matriculas` | Cria a matrícula entre aluno e curso |

📌 **Payload esperado:**

```json
{
  "alunoId": 1,
  "cursoId": 1
}
```

---

## 🖼️ Prova de Funcionamento (Entregáveis)

O funcionamento correto da API foi validado através de requisições realizadas no **Insomnia**.

### Prints obrigatórios:

* ✔️ Criação de Aluno (`POST /alunos`)
* ✔️ Criação de Curso (`POST /cursos`)
* ✔️ Criação de Matrícula (`POST /matriculas`)
* ✔️ Consulta de Cursos do Aluno (`GET /alunos/1/cursos`)
* ✔️ Consulta de Alunos do Curso (`GET /cursos/1/alunos`)

---

## ✅ Conclusão

Este projeto consolida, na prática:

* Desenvolvimento de **API REST**
* Uso correto de **ORM com Sequelize**
* Modelagem de **relacionamento Muitos-para-Muitos**
* Organização de código seguindo boas práticas de backend

