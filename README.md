# Desafio

# Sobre o Projeto

---

**O projeto foi solicitado como um teste onde as solicitações foram:**

1. Crie uma aplicação React que exibe uma listagem de veículos, agrupada por marcas. O
formato de JSON que você irá consumir é o da url abaixo, apresente da maneira que você
achar mais apropriada, justifique as decisões tomadas:
[https://wswork.com.br/cars.json](https://wswork.com.br/cars.json)
2. Crie um componente para a sua listagem de veículos implementada acima, crie uma
documentação de uso deste componente e apresente pra gente como se fossemos um
outro programador que irá implementar esse componente em outra tela.
3. Crie um formulário que faça a persistência de um novo carro, faça da maneira que achar mais apropriado.
4. Esse passo não é obrigatório, mas se você hospedar e mandar o link da aplicação
funcionando (Heroku, Aws, etc)

**Resumo do projeto:**

- CarList é uma tabela que exibe uma listagem de carros com a informação de ***Marca, Modelo, Ano, Tipo de combustível, numero de portas, Cor, e a Data do Cadastro***
- O banco de dados recupera os seguintes valores: ***Id, Id_Marca, Marca, Modelo, Ano, Tipo de combustível, numero de portas, Cor, e a Data do Cadastro***
- Forma como o ***id_marca*** é recuperado no banco de dados: criei uma listagem no input onde cada opção de marca retorna um id via condição. Ao selecionar ele seta um id de acordo com o nome.
para adcionar mais marcas é preciso ir no código fonte
- O código envia a data do cadastro como timestamp para o banco de dados e retorna como data padrão brasileiro no componente de listagem visual
- É possível criar, deletar e editar um item do projeto

# **Tecnologias e libs ultilizadas | Importações ultilizando yarn**

---

- **JavaScript**
- **yarn**
- **ReactJS** - Instalação: `yarn create react-app listcar --teamplate`
- **json-server** - Istalação: `yarn add json-server`

- **swr** - Instalação: `yarn add swr`
- **style-components** - Instalação: `yarn add styled-components`
- **react-icons -** Instalação `yarn add react-icons`
- **axios -** Instalação `yarn add axios`

# Instalação do projeto

---

No Yarn

```jsx
yarn install
```

No Npm

```jsx
npm instal
```

# Bild do projeto

---

**O link do projeto bildado está no heroku** 

[https://testecarws.herokuapp.com](https://testecarws.herokuapp.com/)

**Bild Local**

Obs: Ao usar na máquina local, algumas alterações devem ser feitas pois foram adções de arquivos para o deploy no heroku: 

- O arquivo 📄server.js deve ser excluído
- Na no arquivo “services/axiosConfig” altere  `“baseURL: [ttps://testecarws.herokuapp.com/](https://testecarws.herokuapp.com/)”` pelo [`http://localhost:3333/`](http://localhost:3333/) ou a porta padrão do seu banco de dados.
- No package.json altere a inicialização do start de 
`"node server.js”` para `"react-scripts start --port 3000”` use a sua porta padrão.

 

Start no React

```jsx
yarn start
```

Start no json-server

```jsx
yarn server
```