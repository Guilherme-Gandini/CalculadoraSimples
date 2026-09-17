# Calculadora Simples

Aplicação web desenvolvida com React e Vite para realizar operações matemáticas básicas.

## Funcionalidades

- Entrada para o primeiro número.
- Entrada para o segundo número.
- Seleção das operações de adição, subtração, multiplicação e divisão.
- Exibição do resultado na tela.
- Botão para limpar os campos e o resultado.
- Validação de campos vazios e divisão por zero.

## Tecnologias

- React
- Vite
- JavaScript
- CSS

## Como executar

### Pré-requisitos

Tenha o Node.js instalado na máquina.

### Instalação

No terminal, dentro da pasta `Calculadora`, execute:

```bash
npm install
```

### Ambiente de desenvolvimento

```bash
npm run dev
```

Depois, acesse o endereço exibido pelo Vite no terminal, geralmente `http://localhost:5173`.

### Outros comandos

```bash
# Verifica possíveis problemas no código
npm run lint

# Gera a versão de produção
npm run build

# Pré-visualiza a versão de produção
npm run preview
```

## Estrutura principal

```text
src/
├── components/
│   └── FormCalculadora.jsx
├── App.css
├── App.jsx
├── index.css
└── main.jsx
```

## Uso

1. Informe os dois números.
2. Escolha uma operação no campo de seleção.
3. Clique em **Calcular**.
4. Para começar novamente, clique em **Limpar**.
