SOFTWARE: JOGO DA VELHA ONLINE

Requisitos:

Requisitos não funcionais:

- Deverá ter tratamento de dados no login
- Deverá ser intuitivo e de fácil aplicação
- Deverá exigir simples complexidadade

Requisitos funcionais:

 - Precisará armazenar dados de login do usuário
 - Filtrar histórico de partida
 - Rodar na WEB, PC

Descrição do uso de caso

	UC01 - Login 

	UC02 - Registro

	UC03 - Menu inicial

	UC04 - Partida

	Nome: UC01 - Login
	Breve descrição: Utilizar sua conta e ir até o menu inicial
	Pré-condição:
	Fluxo Principal: 


	1 - Usuário escolhe ir para menu login ou registro
	2 - Se escolher menu registro será redirecionado para UC02
	3 - Usuário informa usuário e senha escolhida
	4 - Sistema verifica RN01
	5 - Se verificou e passou irá passar ao menu principal indo para UC03.

	Fluxo Alternativo:

	Mensagens:

	MSG01 - Usuário ou senha não encontrados, favor verificar informações alocadas

	Regras de Négocio

	RN01 - Sistema realiza uma tratação de dados do usuário e a senha informada e valida com o banco de dados se combinou, caso não combine retorna mensagem MSG01 e retorna para UC01


	

	Nome: UC02 - Registro
	Breve descrição: Irá se cadastrar para acessar o login
	Pré-condição: Sem 
	Fluxo Principal: 


	1 - Usuário irá informar um usuário e uma senha
	2 - Sistema irá verificar RN01
	3 - Se aprovou irá aparecer MSG02 e será levado em seguida para UC01


	Fluxo Alternativo:

	Mensagens: 

	MSG01 - Senha ou usuários informados não estão dentro dos conformes, favor verificar

	MSG02 - Cadastro criado!

	Regras de Négocio

	RN01 - Usuário pode ter no máximo 15 carácteres e a senha pode counter até 30 carácteres, precisando possuir 1 letra maiúscula e 1 letra minúscula e 1 número no minimo caso não possua retorna MSG01 se for aprovado segue o fluxo


	Nome: UC03 - Menu inicial
	Breve descrição: 
	Pré-condição: Estar logado
	Fluxo Principal:

	Buscar partida
	1 - Verifica RN02
	2 - Usuário irá poder buscar uma partida aleatória
	3 - Sistema irá realizar RN01
	4 - Após sistema realizar será levado a UC04

	Fluxo Alternativo:

		FA - 

	Mensagens:

		MSG01 - Localizando jogador, (TIMING)
		MSG02 - Encontrado jogador, levando a partida

	Regras de Négocio

		RN01 - Sistema irá localizar outro jogador que se encontra procurando partida para realizar uma sala com ambos jogadores, enquanto isso mostrando MSG01 e quando achar irá mudar para MSG02

		RN02 - Sistema irá verificar wse jogador já está em partida e será levado até a sala que saiu


	Nome: UC04 - Partida
	Breve descrição: Duelo de jogo da velha, multiplayer
	Pré-condição: Estar logado e estar em uma partida
	Fluxo Principal:

		1 - Sistema realiza RN01
		2 - Usuário escolhido deverá tomar uma ação em 60 segundos
		3 - Sistema realiza RN02

	Fluxo Alternativo:

		FA01:
		1 - Mostra mensagem MSG01 e MSG02
		2 - Ao pressionar MSG02 será levado ao UC03
		3 - Após 10 segundos será levado ao menu principal automaticamente será levado ao UC03

	Mensagens:

		MSG01 - Parabens, você ganhou usuário! Será levado ao menu principal agora
		MSG02 - Voltar ao menu principal

	Regras de Négocio:

		RN01 - Sistema irá randomizar quem começa primeiro

		RN02 - Sistema irá verificar se algum dos jogadores ganhou e retornará para FA01