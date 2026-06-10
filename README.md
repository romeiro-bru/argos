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

## Construir para produção
```bash
npm run build
```

## Testes
```bash
npm test
```

## Estrutura do projeto
* `src/` - código fonte da aplicação
* `src/pages/registration/` - página de cadastro de pets
* `src/pages/home/` - página inicial
* `src/pages/details/` - página de detalhes do pet
* `src/pages/favorites/` - página de favoritos
* `src/components/` - componentes reutilizáveis
* `src/routes.tsx` - rotas da aplicação

## Funcionalidades principais
* Listar animais disponíveis para adoção
* Salvar favoritos
* Cadastro de pets com formulário (em andamento)

## Observações
* Se estiver usando um proxy ou ambiente diferente, verifique as configurações em `vite.config.ts`.
* Caso precise utilizar outro gerenciador de pacotes, `npm` pode ser substituído por `pnpm` ou `yarn` desde que as dependências estejam instaladas corretamente.


