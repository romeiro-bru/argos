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
npm install
npm run dev
```
Em seguida, abra o navegador em:
```text
http://localhost:5173
```

## 🛠️ Stack Tecnológico

- **Frontend Framework**: React 18+ com TypeScript
- **Build Tool**: Vite
- **Estilização**: Tailwind CSS
- **Roteamento**: React Router v6
- **Estado Global**: React Context API
- **Autenticação & BD**: Supabase
- **Testes**: Vitest + React Testing Library
- **Linting**: ESLint
- **Dados**: JSON locais (breeds) + API de localidades do Brasil

## Funcionalidades principais ✨
* Listar animais disponíveis para adoção ✅
* Persistência local de favoritos (localStorage) ✅
* Página dedicada para visualizar favoritos salvos ✅
* Indicadores visuais de favoritos na listagem ✅
* Busca de animais com filtros por raça, tamanho, gênero, temperamento, localização (estados e cidades do Brasil) ✅
* Cadastro de pets com supabase (em andamento) 🚧
* Cadastro e login de usuários com Supabase Auth ✅
* Logout com redirecionamento ✅
* Sessão persistente do usuário ✅

## Integração com Supabase 🚧
A integração com o Supabase está em andamento e será usada para:
* autenticação de usuários
* armazenamento de dados dos pets
* cadastro e recuperação de informações no backend do projeto

Para o funcionamento local, é necessário configurar variáveis de ambiente no arquivo `.env` com as chaves do projeto.

## Hooks e  Hooks personalizados 🎣
* `useRegistrationForm` -  para lógica de cadastro e validação do formulário.
* `useFilterFields` -   para lógica de filtros e lista filtrada da página inicial.
* `useUserSupabase` - Gerencia autenticação e sessão do usuário
- `useLogout` - Lógica de logout com tratamento de erros
  
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
* `localStorage`: persiste e carrega a lista de favoritos no navegador.
* API de localidades: retorna os estados e cidades do Brasil.
* `Supabase`: utilizado para armazenamento de dados.

 ## Estrutura do Projeto 📂

```
src/
├── App.tsx                          # Componente raiz com gerenciamento de sessão
├── main.tsx                         # Ponto de entrada
├── routes.tsx                       # Definição das rotas
├── supabase-client.ts               # Cliente Supabase configurado
│
├── assets/                          # Ícones e assets SVG
│   └── ...
│
├── components/                     # Componentes reutilizáveis
│   ├── layout.tsx                  # Layout principal
│   ├── sidebar.tsx                 # Navegação lateral
│   └── ...
│
├── pages/                          # Páginas/rotas
│   ├── landing/                    # Página inicial (landing)
│   │   ├── landing.tsx
│   │   └── ...
│   │
│   ├── home/               
│   │   └── ...
│   │
│   ├── details/                    # Página de detalhes do animal
│   │   └── details.tsx
│   │
│   ├── favorites/                  # Página de favoritos
│   │   ├── favorites.tsx
│   │   └── ...
│   │
│   ├── registration/               # Página de cadastro de animais
│   │   ├── registration.tsx
│   │   ├── hooks/
│   │   │   └── useRegistrationForm.ts
│   │   └── formFields/
│   │       └── ...
│   │
│   ├── signup/                     # Página de cadastro de usuários
│   │   ├── signup.tsx
│   │   └── formFields/
│   │       └── ...
│   │
│   ├── common/                     # Componentes e lógica compartilhada
│   │   ├── constants.ts
│   │   ├── types.ts
│   │   ├── components/
│   │   │   └── ...
│   │   │
│   │   ├── context/
│   │   │   ├── favoritesProvider.tsx
│   │   │   └── ...
│   │   │
│   │   ├── hooks/
│   │   │   └── ...
│   │   ├── service/
│   │       └── ... 
│   │
│   ├── context/
│   │   └── userSupabaseContext.tsx # Context global de autenticação
│   │
│   └── pets.json                   # Dados de exemplo de animais
│
├── context/
│   └── userSupabaseContext.tsx     # Contexto global de usuário
│
├── catsBreed.json                  # Catálogo de raças de gatos
├── dogsBreed.json                  # Catálogo de raças de cães
└──  index.css                       # Estilos globais

```
