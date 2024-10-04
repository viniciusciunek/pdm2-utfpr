# PDM2 - UTFPR

📖 02 | Gerenciamento de estado global | 4h

# Tema de Estudo: Gerenciamento de recursos em dispositivos móveis

## Carga Horária: 4h

Este módulo apresenta o uso de uma técnica para gestão de estados globais no React Native. Em contraste à abordagem tradicional, onde cada componente pode ter um estado individual, a biblioteca Zustand é aplicada para permitir a criação de estados externos ao componente, sendo muito úteis no compartilhamento de informações.

# Nesta aula:

- Diferenças de estado local e estado global

- Instalação da biblioteca Zustand

- Criação de estados e Hooks para manipulação

- Estados persistentes

- Estados compostos com Maps e Sets

# Videoaula:

- https://youtu.be/1eCnTG2K56c

# Exercício para fixação do conteúdo:

- Faça o clone dos dois repositórios presentes na seção "Links Úteis". Instale as dependências em cada projeto ($ yarn) e execute-os. Analise o comportamento e identifique as diferentes formas de escrever estados globais.

- Crie um novo projeto, neste projeto, simule a situação em que você precisa armazenar e persistir um token de autenticação (string) para uso em requisições REST. A criação da interface é livre, mas sugere-se:

- Uma tela de login, com um formulário de usuário e senha e um botão "Login"

- Faça com que o botão de login gere um token aleatório e salve-o de forma persistente usando Zustand.

- Ao iniciar o App, verifique se já existe um token salvo, se ele existir, renderize uma página Home (com qualquer conteúdo). Caso o token não exista, renderize a página de login para que o usuário possa fazer o login (fake).

# Links úteis:

## Instalação da biblioteca:

    - https://docs.pmnd.rs/zustand/getting-started/introduction#installation

## Persistência:

    - https://docs.pmnd.rs/zustand/integrations/persisting-store-data

    É necessário instalar o AsyncStorage também: npx expo install @react-native-async-storage/async-storage

# Maps e Sets:

    - https://docs.pmnd.rs/zustand/guides/maps-and-sets-usage

# Repositório com o código do vídeo:

    - https://github.com/university-lessons/dpdm-global-state-zustand

# Repositório extra, com exemplos de uso da Zustand no Expo:

    - https://github.com/university-lessons/pdm-experiment-expo-zustand
