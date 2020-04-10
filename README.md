# S3 album

Este projeto foi criado para facilitar o trabalho com imagens armazenadas nas AWS s3. o intuito é tornar o trabalho de pegar e inserir imagens no Bucket de forma mais simples.

## rotas

 - get `/`
	 Acessar o bucket principal, e todas as ultimas imagens adcionadas
 - post `/insert`
	Inserir novas imagens no bucket
 - get `/image/:uri`
	Pegar uma imagem pelo seu nome completo
 - get `/image/:prefix`
	Realizar uma consulta pelo prefixo da imagem

## Instalação
Para poder rodar esse projeto voce precisa ter o node.js, npm ou Yarn instalado na sua maquina. após isso bastar rodatr o comando do seu gerenciador de pacotes para instalar as dependencias do projeto e rodar 
 `node index.js` ou `nodemon`

Lembre-se que voce precisa ter uma conta na AWS para poder popular o seu arquivo de variaveis de ambiente `.env` com a sua key e secretID
