# Blessed Barbearia — guia do projeto

Este projeto foi construído somente com HTML, CSS e JavaScript puros. Não usa frameworks ou bibliotecas.

Veja a [documentação completa](DOCUMENTACAO.md) e o [histórico de alterações](CHANGELOG.md). A versão publicada atualmente está na `main`, com paleta prateada e gestos mobile.

## Arquivos

- `index.html`: estrutura e conteúdo da landing page.
- `styles.css`: paleta, layout, componentes e responsividade.
- `script.js`: menu mobile, ano do rodapé, galeria ampliada, navegação por teclado e gestos de toque.

## Responsividade

O CSS possui dois pontos principais de adaptação:

- Até `900px`: reorganiza seções em uma coluna e ativa o menu mobile.
- Até `600px`: ajusta tipografia e rodapé e transforma a galeria em carrossel horizontal.

## Paleta

- Fundo: `#080808`
- Superfície: `#111214`
- Prateado: `#dce2eb`
- Prateado claro: `#ffffff`
- Texto: `#f0f1f3`
- Texto secundário: `#a5a9b0`

As cores ficam centralizadas nas variáveis do início de `styles.css`.

## Versões de cores

- `backup/paleta-dourada`: versão anterior preservada.
- `visual/prata-preto`: branch de construção da paleta prateada, já integrada à `main`.
- `main`: versão publicada, com melhorias posteriores de cache e mobile.
- Tag `versao-prateada`: marco anterior às melhorias mobile, no commit `d9e3c9a`.
