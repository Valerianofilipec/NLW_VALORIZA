# Projeto "NLW VALORIZA"
  ## Cadastro de Usuários

  ## Cadastro de Tags
    -Somente usuário Administrador
  ## Cadastro de Elogios
    -ID do Usuário (a receber elegios)
    -ID do Usuário (a enviar elogios)
    -ID da Tag
    -Data da criação

  ## Autenticação de Usuário
    -Gerar Token JWT
    -Validar Usuário logado nas rotas necessárias
  ## Listagens de:
    -Usuários
    -Tags
    -Elogios por Usuário

## Regras

- Cadastro de usuário

  [ x ] Não é permitido cadastrar mais de um usuário com o mesmo e-mail

  [ x ] Não é permitido cadastrar usuário sem e-mail

- Cadastro de TAG

  [ x ] Não é permitido cadastrar mais de uma tag com o mesmo nome

  [ x ] Não é permitido cadastrar tag sem nome

  [ x ] Não é permitido o cadastro por usuários que não sejam administradores

- Cadastro de elogios

  [ x ] Não é permitido um usuário cadastrar um elogio para si

  [ x ] Não é permitido cadastrar elogios para usuários inválidos

  [...] O usuário precisa estar autenticado na aplicação
