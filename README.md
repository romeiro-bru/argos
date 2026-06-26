# Projeto Argos <img align="center" width="50" height="50" alt="favicon" src="https://github.com/user-attachments/assets/85668b0a-6992-4040-9edc-448ac14867f9" />

## Visão geral
Aplicação em React + TypeScript + Vite para exibir animais disponíveis para adoção, registrar pets e gerenciar favoritos.

## Pré-requisitos
* Node.js 18+ instalado
* npm 9+ instalado

## Clonar o repositório
```bash
git clone https://github.com/seu-usuario/argos.git
cd argos
```

> Substitua `https://github.com/seu-usuario/argos.git` pela URL correta do repositório, se necessário.

## Instalar dependências
```bash
npm install
```

## Executar em modo de desenvolvimento
```bash
npm run dev
```

Em seguida, abra o navegador em:
```text
http://localhost:5173
```

## Testes
```bash
npm run test
```

## Estrutura do projeto 📂
* `src/` - código fonte da aplicação
* `src/pages/registration/` - página de cadastro de pets
* `src/pages/home/` - página inicial
* `src/pages/details/` - página de detalhes do pet
* `src/pages/favorites/` - página de favoritos
* `src/components/` - componentes reutilizáveis
* `src/routes.tsx` - rotas da aplicação

## Funcionalidades principais ✨
* Listar animais disponíveis para adoção ✅
* Salvar favoritos ✅
* Cadastro de pets com formulário (em andamento) 🚧

## Integração com Supabase 🚧
A integração com o Supabase está em andamento e será usada para:
* autenticação de usuários
* armazenamento de dados dos pets
* cadastro e recuperação de informações no backend do projeto

Para o funcionamento local, é necessário configurar variáveis de ambiente no arquivo `.env` com as chaves do projeto.

## Hooks e  Hooks personalizados 🎣
* `useRegistrationForm` -  para lógica de cadastro e validação do formulário.
* `useFilterFields` -   para lógica de filtros e lista filtrada da página inicial.
  
* `useReducer` para gerenciar o estado e ações do formulário de cadastro.
* `useReducer` em useFilterfields.ts para gerenciar os filtros de busca de pets.
* `createContext` + `useContext` para compartilhar o estado de favoritos globalmente.
* `useCallback` para memoizar as funções isFavorite e toggleFavorite.
* `useMemo` para memoizar o valor do contexto e evitar rerenders desnecessários.
* `useRef` para controlar o primeiro render e impedir que o localStorage seja sobrescrito antes da leitura inicial.
* `useNavigate` para navegar entre rotas.
* `useLocation` para identificar a rota ativa e destacar o item correto do menu.
* `useParams` para ler o id do pet a partir da URL.

## APIs e recursos externos 📤👽️
* `localStorage` para persistir e carregar a lista de favoritos no navegador.
* API de localidades para retornar estados e cidades do Brasil.
