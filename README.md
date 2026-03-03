# 🚀 API REST com Node.js + Express + SQLite

Este projeto foi desenvolvido com foco em aprendizado prático de **backend**, aplicando conceitos fundamentais que servem como base para arquiteturas mais avançadas no futuro (NestJS, MongoDB, PostgreSQL, etc).

---

## 🎯 Objetivo do Projeto

Construir uma **API REST estruturada e organizada**, aplicando boas práticas desde o início, mesmo utilizando um banco de dados simples como o SQLite.

---

# 🧠 Conceitos Aplicados

## ✅ 1. Como funciona uma API REST

A API segue os princípios REST:

* Comunicação via HTTP
* Uso correto de métodos
* Respostas padronizadas em JSON
* Separação entre cliente e servidor

---

## ✅ 2. Rotas HTTP (CRUD Completo)

Implementação das operações básicas:

* **GET** → Buscar dados
* **POST** → Criar novos registros
* **PUT** → Atualizar dados existentes
* **DELETE** → Remover registros

Exemplo de estrutura de rota:

```
GET     /users
GET     /users/:id
POST    /users
PUT     /users/:id
DELETE  /users/:id
```

---

## ✅ 3. Uso de Middlewares

Middlewares foram utilizados para:

* Tratamento de JSON (`express.json()`)
* Tratamento centralizado de erros
* Interceptação de requisições
* Possível futura implementação de autenticação

---

## ✅ 4. Estrutura MVC

O projeto segue o padrão **Model-View-Controller** adaptado para API:

```
src/
 ├── controllers/
 ├── services/
 ├── repositories/
 ├── database/
 └── server.js
```

* **Controller** → Recebe a requisição
* **Service** → Contém regra de negócio
* **Repository** → Comunicação direta com o banco
* **Database** → Configuração da conexão

---

## ✅ 5. Conexão com Banco de Dados (SQLite)

Foi utilizado SQLite por ser:

* Leve
* Fácil de configurar
* Ideal para aprendizado
* Baseado em arquivo local (.db)

A conexão é feita via driver SQLite no Node.js.

---

## ✅ 6. Tratamento de Erros

Implementação de:

* Middleware global de erro
* Padronização de respostas HTTP
* Status codes adequados (200, 201, 400, 404, 500)

Exemplo de resposta de erro:

```json
{
  "error": "Usuário não encontrado"
}
```

---

## ✅ 7. Organização de Projeto

O projeto foi estruturado para facilitar:

* Escalabilidade futura
* Migração de banco de dados
* Implementação de autenticação
* Refatoração para frameworks como NestJS

---

## ✅ 8. Separação de Camadas

O projeto aplica separação clara entre:

* **Controller → Interface da API**
* **Service → Regra de negócio**
* **Repository → Acesso ao banco**

Essa separação permite:

✔ Trocar o banco sem alterar regras
✔ Testar regras de negócio isoladamente
✔ Escalar a aplicação com mais segurança

---

# 🚀 Como Executar o Projeto

### 1️⃣ Clonar o repositório

```
git clone URL_DO_REPOSITORIO
```

### 2️⃣ Instalar dependências

```
npm install
```

### 3️⃣ Rodar o servidor

```
npm run dev
```

ou

```
node src/server.js
```

---

# 🔥 Próximos Passos (Evolução)

Este projeto pode evoluir para:

* Autenticação com JWT
* Upload de arquivos
* Paginação
* Filtros avançados
* Testes automatizados
* Migração para MongoDB ou PostgreSQL
* Refatoração para NestJS

---

# 📚 Conclusão

Este projeto representa:

* Base sólida de backend
* Entendimento de arquitetura
* Organização profissional de código
* Fundamentos necessários para nível Júnior

---

Desenvolvido para aprendizado prático e evolução contínua 🚀
****
