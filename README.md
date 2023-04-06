# 👁 Now Watch

O Now Watch foi pensado para os dias de *day off* em que não queremos passar mais tempo na frente da TV rodando de *streaming* em *streaming* cassando algo para assistir do que propriamente assistindo. Nele você pode selecionar quais *streamings* tem acesso no momento, se tem preferência por filmes, séries ou até por algum gênero específico. 

O retorno é uma lista das midias disponíveis em cada streaming, te direcionando diretamente para o que você selecionar para assistir!

![Tela do MVP](https://github.com/AmandaRH07/now-watch/blob/master/src/images/readme/mvp-screen.png?raw=true)

## 🎬 Principais Tecnologias Utilizadas
HTML | CSS | JavaScript | React 
- React Router Dom
- Axios
- Material UI

Utils :
- API: [Streaming Availability](https://rapidapi.com/movie-of-the-night-movie-of-the-night-default/api/streaming-availability/)
- Editor: Visual Studio Code
- Fonts: Poppins

## 🍿 Instalando <Now Watch>

Para instalar o <Now Watch>, siga estas etapas:

Após clonar o repositório, você vai precisar do `git`, `node` e do `yarn` instalados na sua máquina. Também de um editor de texto como o [VSCode](https://code.visualstudio.com/)

## 📺  Usando <Now Watch>

```bash
# Clone o repositório
$ git clone git@github.com: AmandaRH07 / now-watch.git

# Acesse a página do projeto no terminal
$ cd now-watch

# Instale as dependências
$ yarn

# Rode a aplicação em modo de desenvolvimento
$ yarn start

# A aplicação vai estar rodando na porta: 3000 - http://localhost:3000
```

### 🔍 Rodando Suit de Testes
**Gerais**
`yarn test -u`

**Arquivo específico**
`yarn test <nome_do_arquivo>` ➡️ `yarn test orders-filter.test.js`

**Code Coverage**
`yarn test --coverage`

### 💡 Ajustes e melhorias

O projeto ainda está em desenvolvimento e as próximas atualizações serão voltadas nas seguintes tarefas:
- [] Criação dos Créditos
- [] Criação de testes unitários para MVP do sistema
- [] Inserção de barra de pesquisa para procurar por midias específicas
- [] Ajustes de layout

## 📝 Licença

Esse projeto está sob licença. Veja o arquivo [LICENÇA](LICENSE.md) para mais detalhes.

```❗ Este produto usa a API do TMDB mas não é certificada pelo TMDB || This product uses the TMDB API but is not endorsed or certified by TMDB```
