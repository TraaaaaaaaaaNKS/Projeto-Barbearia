# Guia completo — Blessed Barbearia

Atualizado em **6 de novembro de 2026**.

## Estado do projeto

Site estático, sem framework, servidor de aplicação ou banco de dados. Não é necessário instalar dependências para executar a página.

- Site: https://traaaaaaaaaanks.github.io/Projeto-Barbearia/
- GitHub: https://github.com/TraaaaaaaaaaNKS/Projeto-Barbearia
- Hospedagem: GitHub Pages, branch `main`, pasta raiz (`/`).
- Repositório público, conforme autorização do proprietário.
- Versão atual: preto e prata com efeito metálico, mapa e galeria com gestos mobile.

## Arquivos

| Arquivo | Função |
| --- | --- |
| `index.html` | Conteúdo, seções, fotos, links, iframe e estrutura do visualizador. |
| `styles.css` | Cores, tipografia, botões, grades e responsividade. |
| `script.js` | Menu, ano do rodapé, visualizador, teclado e gestos. |
| `assets/hero-barbearia.png` | Fundo local da chamada inicial. |
| `docs/GUIA.md` | Guia completo de uso e manutenção. |
| `README.md` | Apresentação e links para os guias. |
| `docs/CHANGELOG.md` | Histórico das alterações. |
| `.gitignore` | Regras de arquivos ignorados. |
| `.gitattributes` | Normalização dos arquivos de texto. |
| `LICENSE` | Licença MIT presente no repositório. |

## Conteúdo e navegação

A ordem das seções é: cabeçalho, chamada para agendamento, destaque, sobre, galeria, serviços, diferenciais, localização e rodapé.

A chamada “Pronto para renovar o visual?” fica no início. Seu nome de classe histórico, `chamada-final`, permanece no código. O destaque tem somente o botão “Conhecer serviços”.

O menu possui Sobre, Galeria, Serviços, Localização e Agendar horário. As quatro primeiras opções levam às seções internas. No desktop, logo e nome ficam à esquerda; a navegação fica à direita com recuo adicional de 100px. A fonte dos links é 16px. As seções aproveitam a largura disponível com margens pequenas.

Foram removidos o parágrafo auxiliar da galeria e os números dos artigos de serviços e diferenciais. A numeração nas legendas das fotos permanece.

## Agendamento e dados comerciais

Os botões “Agendar horário” abrem `https://wa.me/558791105879` em nova aba.

O link inclui o parâmetro `text`, com a mensagem “Gostaria de agendar meu horário!” já preenchida. O cliente precisa confirmar o envio no WhatsApp; a mensagem não é enviada automaticamente. Para alterar o texto, atualize o parâmetro nos dois botões de `index.html`, codificando os caracteres para URL.

- WhatsApp: +55 87 9110-5879.
- Endereço: Rua da Granja, nº 56, Arcoverde–PE.
- Atendimento: segunda a sábado, das 08h às 18h.

O formulário demonstrativo foi removido. O site não registra reservas nem confirma horários: o atendimento e a combinação de horário acontecem na conversa pelo WhatsApp.

Para trocar o número, substitua todas as ocorrências do link `wa.me` em `index.html`, usando apenas dígitos no endereço do link, incluindo país e DDD.

## Galeria ampliada

Clique ou toque em uma miniatura para abrir a foto em um `dialog` nativo. A imagem ampliada apresenta legenda e contador.

- Setas avançam e voltam; não há navegação circular.
- Na primeira foto, a seta esquerda desaparece; na última, a direita desaparece.
- Setas do teclado navegam; Esc e X fecham o visualizador.
- Clicar no fundo fora da foto também fecha.
- A página fica sem rolagem enquanto a galeria está aberta.
- Ao fechar, o foco retorna à miniatura de origem.
- Setas brancas preenchidas no estilo ➜, X maior e fundos dos controles transparentes.
- As miniaturas usam cursor `pointer`.

### Arrastar no celular

Arrastar a foto ampliada para a esquerda avança; para a direita volta. O gesto precisa ter pelo menos 50px de deslocamento horizontal e superar o deslocamento vertical em 1,5 vez.

Toques curtos, movimentos predominantemente verticais, cancelamentos e gestos com múltiplos dedos não trocam a foto. O CSS permite rolagem vertical e zoom nativos; não há um mecanismo próprio de zoom.

Na galeria fechada, as miniaturas permitem rolagem horizontal no celular, com encaixe por foto (`scroll-snap`).

### Substituir ou adicionar fotos

Edite as figuras dentro de `.grade-galeria`, em `index.html`. Cada `.item-galeria` precisa conter um botão `.abrir-foto`, uma imagem com descrição `alt` e uma legenda `figcaption`.

O JavaScript calcula a quantidade de fotos, o contador e os limites automaticamente. As três fotos atuais são arquivos locais: `assets/ft1.jpg`, `assets/ft2.jpg` e `assets/ft3.jpg`.

## Localização com iframe

O menu leva a `#localizacao`, sem abrir outra página. O iframe consulta Rua da Granja, 56, Arcoverde, PE, com zoom 17 e carregamento adiado (`loading="lazy"`). Não há chave de API no código.

O ponto exibido é o resultado da busca do Google pelo endereço; não foi fixado por coordenadas ou identificador do estabelecimento. O mapa depende de internet e do serviço Google Maps.

Ao mudar o endereço, atualize o texto da seção, o rodapé, o atributo `title` do iframe e a consulta no `src`.

## Paleta e aparência

As variáveis estão no início de `styles.css`.

| Uso | Valor |
| --- | --- |
| Fundo | `#080808` |
| Fundo secundário | `#111214` |
| Card | `#1a1b1e` |
| Prata | `#dce2eb` |
| Prata clara | `#ffffff` |
| Texto | `#f0f1f3` |
| Texto secundário | `#a5a9b0` |
| Bordas | `rgba(220, 226, 235, 0.42)` |

Botões usam `--gradiente-prata`, texto escuro, raio de borda de 6px e brilho suave. Ficam mais claros no hover. Marca e títulos em destaque também recebem reflexo discreto. Há indicadores de foco e redução de efeitos quando o sistema solicita menos movimento.

## Responsividade e acessibilidade

- Até 900px: menu recolhido e reorganização de seções.
- Até 600px: títulos fluidos, serviços e rodapé em coluna, galeria horizontal e ajustes no mapa.
- Visualizador mobile: imagem mais larga, setas abaixo dela e controles com área de 48 × 48px.
- Altura dinâmica da tela (`dvh`), áreas seguras e regras para orientação horizontal com altura até 500px.
- Descrições das imagens, rótulos dos controles, `aria-expanded` no menu e `aria-live` na legenda ampliada.

### Verificações realizadas

Em 6 de novembro de 2026 foram executados testes automatizados em Edge sem janela, com dimensões e eventos de toque simulados:

| Dimensões | Cenário |
| --- | --- |
| 320 × 568 | Celular estreito |
| 375 × 667 | Celular |
| 390 × 844 | Celular alto |
| 768 × 1024 | Tablet |
| 844 × 390 | Horizontal |
| 1440 × 900 | Desktop |

Foram conferidos: ausência de transbordamento horizontal da página; menu nas larguras aplicáveis; abertura da galeria; avanço, retorno e limites; rejeição de gestos curtos, verticais e múltiplos dedos; posição e tamanho dos controles visíveis; ausência de erros JavaScript.

Também passaram `node --check script.js` e `git diff --check`. Os recursos externos foram bloqueados nos testes de layout, portanto esses testes não validaram fotos remotas nem conteúdo do mapa. Os gestos foram simulados, sem ensaio físico em Android ou iPhone. A ferramenta foi instalada temporariamente; não há suíte de testes permanente no repositório.

## Branches, tag e recuperação

| Referência | Conteúdo |
| --- | --- |
| `main` | Versão publicada, incluindo ajustes de cache e mobile. |
| `backup/paleta-dourada` | Versão dourada anterior, commit `49bb638`. |
| `visual/prata-preto` | Branch de construção do novo visual, já integrada à `main`. |
| Tag `versao-prateada` | Marco `d9e3c9a`, anterior aos ajustes de cache e mobile. |

A branch prateada não recebe automaticamente os novos commits da `main`. Para alterações futuras, crie uma branch a partir da `main` atualizada.

Para consultar a versão antiga no GitHub Desktop, escolha `backup/paleta-dourada` em **Current branch**. Isso não muda o site publicado.

Para voltar somente às cores douradas, crie uma alteração de CSS na `main`, usando o backup como referência. Assim as melhorias recentes podem ser mantidas.

Mesclar o backup antigo na `main` não desfaz alterações posteriores. Recuperar o projeto inteiro exige um novo commit restaurando os arquivos do estado antigo e remove também funcionalidades posteriores. Não é necessário usar `reset --hard` ou push forçado para trocar a paleta.

## Publicar pelo GitHub Desktop

1. Selecione `main` e use **Fetch origin / Pull origin**, se houver atualizações.
2. Crie uma branch para as alterações, se quiser trabalhar separadamente.
3. Faça as mudanças, revise e crie o commit.
4. Se usou outra branch, volte à `main` e use **Branch → Merge into current branch…** para integrá-la.
5. Clique em **Push origin**.
6. Acompanhe a publicação do Pages na aba **Actions** do GitHub e confira o site após a conclusão.

Somente mudanças enviadas à `main` atualizam o site. O push e a conclusão do deploy são etapas diferentes e a publicação pode levar alguns minutos.

### Cache

Os arquivos usam atualmente `styles.css?v=fotos-3` e `script.js?v=fotos-3` no HTML. Ao modificar CSS ou JavaScript, altere o sufixo `v` para que o navegador solicite os arquivos novos. Não é necessário renomeá-los.

No computador, use Ctrl + F5. No celular, recarregue ou compare em uma aba privada. Confirme primeiro se o deploy terminou.

## Privacidade e limites

O repositório público expõe arquivos e histórico. Nome do desenvolvedor e link do GitHub constam no rodapé. Telefone e endereço comerciais estão no HTML. A revisão inicial não encontrou senhas, tokens ou chaves de API nos arquivos e commits examinados, mas identificou e-mail pessoal nos metadados dos commits.

Não publique credenciais. O `.gitignore` atual tem apenas as regras específicas `*.agdai` e `MAlonzo/**`; não é uma proteção geral contra segredos. Apagar um arquivo atual não o remove do histórico.

Não há painel administrativo, autenticação, banco de dados ou registro de reservas. Conteúdo e contatos são editados nos arquivos e publicados pelo Git.

## Checklist de manutenção

1. Conferir tela larga, tela estreita, menu, títulos e rolagem.
2. Testar WhatsApp, serviços e mapa.
3. Testar galeria, setas, X, Esc, toque e limites.
4. Executar `node --check script.js`, se houver Node instalado.
5. Executar `git diff --check` e revisar o conteúdo do commit.
6. Após o push, conferir o deploy e recarregar o site.
