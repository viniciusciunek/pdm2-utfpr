# PDM2 - UTFPR

📖 03 | Boas práticas para a criação de componentes reutilizáveis | 4h

```
    git clone https://github.com/viniciusciunek/pdm2-utfpr/tree/modulo_03 -b modulo_03

    yarn

    yarn start --tunnel
```

# Tema de Estudo: Gerenciamento de recursos em dispositivos móveis

## Carga Horária: 4h

Este módulo apresenta dicas para a contrução de componentes reutilizáveis e semânticos. O isolamento de componentes repetitivos, bem como a aplicação de algumas técnicas e patterns favorece tanto a legibilidade como a manutenção do código.

# Nesta aula:

- Isolamento de componentes que se repetem

- Uso de nomenclaturas minimalistas (porém descritivas no seu contexto!)

- Parametrização de componentes

- Uso de mocks para popular interfaces durante o desenvolvimento

- Componentes que recebem filhos (children)

- Criando componentes compostos (agrupamentos de exports)

- Criando componentes que disparam eventos para o pai

# Videoaula:

- https://youtu.be/OtdMPckhiqs

# Exercício para fixação:

- Crie um projeto novo usando Expo, escolha o template typescript Blank

- Crie um componente que receba argumentos (via interface), faça com que um desses argumentos seja uma callback de evento (para avisar o pai que algo aconteceu)

- Crie um arquivo de mock com 100 registros (o tipo de objeto e os atributos são livres, seja criativo). Use este mock para popular uma FlatList.

- Crie um componente “Card” composto (usando o pattern de composição) por Card.Header (opcional), Card.Body (obrigatório) e Card.Footer (opcional).

# Links úteis:

- Repositório do vídeo: https://github.com/university-lessons/dpdm-components-advanced

- Atomic Design (conceito): https://medium.com/pretux/atomic-design-o-que-%C3%A9-como-surgiu-e-sua-import%C3%A2ncia-para-a-cria%C3%A7%C3%A3o-do-design-system-e3ac7b5aca2c

- Atomic Design (aula prática da RocketSeat, excelente referência!): https://youtu.be/su_xOZMiPKo

- Pattern de Composição (re-export de componentes, neste caso aplicado a react JS, mas o conceito se aplica a RN também): https://youtu.be/oPOKpSFqy-I
