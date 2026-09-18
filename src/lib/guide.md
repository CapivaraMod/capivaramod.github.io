# _Como usar o **Capivara Mod**_<br>
Isso não é um **guia definitivo** <br>
só um prototipo *__oficial__* de guia para o **Capivara Mod**  

[O que é Capivara Mod](#o-que-é-capivara-mod)<br>
[Exemplos](#exemplos)<br>
[Novidades](#novidades)<br>
[Como usar o Capivara Mod](#como-usar-o-capivara-mod-1)<br>
[Como Começar](#como-começar)<br>
[Configurações Recomendadas](#configurações-recomendadas)

## O que é Capivara Mod

- Capivara Mod é uma ferramenta de criação de **jogos** e até **Programas** a estrutura de codigo sendo baseada no TurboWarp.<br>
- E extensões novas e funções novas.

### Exemplos

1. Wikipedia<br>Sim a Wikipedia aqui.<br>
![exemplo1](wikipediaExemplo.png)<br>
e<br>
![exemplo2](wikipediaExemplo2.png)<br>
As línguas no total são suportadas o Português, o Inglês e Espanhol<br> 
2. Manipulação de imagens.<br>
3. E blocos de calculo, controle de fps e etc...



## Novidades

-   1. O Capivara Mod contém um sistema de remover extensões caso você colocou uma extensão que não queria.
-   2. O Capivara Mod contém novas fantasias na biblioteca.
-   3. O Capivara Mod adiciona os icones das extensões por padrão
-   4. O Capivara Mod adiciona blocos novos de mouse Ex: "quando rolar para (cima/baixo)"

## Como usar o Capivara Mod

Os links a seguir serão do TurboWarp.<br>
Mas não se preocupe, o Capivara Mod é feito por cima do TurboWarp, tudo que os links mostrarem do TurboWarp, estarão no Capivara Mod

[vídeo 1 em inglês](https://www.youtube.com/watch?v=mqpgL_hR79E&list=PLc81nkoFK5Do)<br>
[vídeo 2 em espanhol](https://www.youtube.com/watch?v=FpkulFe46yA)<br>
[vídeo 3 em português](https://www.youtube.com/watch?v=aEblLTQMpiU&t=4s)<br>

### Como Começar
---
- O Packager pode ser utilizado diretamente no navegador ou via linha de comando (CLI) para automações.<br>
-   1. Opção 1: Web Interface (Recomendado)Acesse o site oficial do CapivaraMod Packager.Carregue o arquivo do seu projeto (.sb3) ou insira o ID de um projeto do Scratch
-   2. Opção 2: Linha de Comando (CLI)Para desenvolvedores avançados que desejam integrar o empacotamento em scripts de build:
```bash
npm install -g @turbowarp/packager
```
### Configurações Recomendadas
---
- Ao carregar seu projeto, configure as opções no menu lateral conforme as necessidades do seu software:
-   1. Opções Gerais (General)Title: Nome oficial do seu jogo ou aplicativo.Icon: Envie uma imagem quadrada (PNG ou ICO) para ser o ícone do executável.
-   2. Controles e Ambiente (Environment)Framerate: Defina a taxa de quadros por segundo. O padrão do Scratch é 30 FPS, mas para jogos fluidos recomenda-se 60 FPS (nota: isso acelera a física do Scratch a menos que você use delta time).Interpolation: Ative para suavizar movimentos se o jogo rodar em uma taxa de quadros maior que a original.High-quality pen: Melhora a resolução de desenhos feitos com a extensão de caneta.
-   3. Modos de Tela (Stage size)Custom Stage Size: Se o seu projeto foi feito para telas largas, mude a resolução de 480x360 (padrão) para 640x360 (16:9 widescreen).