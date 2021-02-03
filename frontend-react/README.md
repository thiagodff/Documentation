# Configurando Story Book no React

Bastar rodar o comando abaixo que ele irá realizar toda a configuração do Story Book no projeto.

```sh
npx sb init
```

Na pasta criada na raiz do projeto chamada .storybook é onde podemos configurá-lo, como adicionar o um novo tema, adicionar dark theme, etc.

Também oferece alguns plugins e addons para complementar nossa documentação.

Na pasta stories criada na src do projeto é basicamente onde irá ficar todas as nossas histórias

stories: A história é basicamente nosso componente, nossa tela, etc, e ainda com a possibilidade de criar uma estrutura de pastas com suas variações.

Para rodar o storybook ou gerar sua build para subir em alguma plataforma:

```sh
yarn storybook
```

```sh
yarn build-storybook
```
