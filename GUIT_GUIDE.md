# Guia Básico de Uso do Git

## Configuração Inicial

Antes de começar a usar o Git, configure seu nome de usuário e e-mail:

```bash
git config --global user.name "Seu Nome"
git config --global user.email "seu-email@example.com" 
```
## Inicializar um Repositório

Para inicializar um repositório

```bash
cd /caminho/para/seu/projeto
git init
```
## Clonar um Repositório

Para clonar um repositório existente, recomendo iniciar um projeto,
criando antes de tudo, um repositório incial dentro do git, e então clonar
e só aí dar andamento ao projeto, isso evita vários incovenientes.

```bash
git clone https://github.com/usuario/repositorio.git
cd repositorio
```
## Verificar o Status do Repositório

Para verificar o status do repositório:

```bash
git status
```
## Adicionar Arquivos para Commit

Para adicionar arquivos modificados ao índice (staging area):

```bash
git add nome-do-arquivo
# ou para adicionar todos os arquivos modificados
git add .
```
## Fazer o Commit

Para gravar as mudanças no repositório local com uma mensagem
descritiva.

```bash
git commit -m "Mensagem do commit descrevendo as mudanças"
```

## Enviar as Mudanças para o GitHub

Para enviar as alterações para o repositório remoto no GitHub

```bash
git push origin nome-da-branch
# normalmente a branch principal é "main" ou "master"
git push origin main
```
## Atualizar o Repositório Local

Para incorporar mudanças do repositório remoto ao repositório local.
Mesmo que você esteja trabalhando sozinha no projeto é importante 
saber esse comando porque se ocorrem muitos conflitos no momento do
push da para você realizar uma atualização manual no repositório do GitHub
e em seguida realizar o pull.

Outra situação seria o caso em que você realizou mudanças no próprio GitHub
e para atualizar seu projeto.

```bash
git pull origin nome-da-branch
# normalmente a branch principal é "main" ou "master"
git pull origin main
```

## Trabalhar com Branches

Para criar e mudar para uma nova branch:

```bash
git branch nome-da-branch
git checkout nome-da-branch
# ou de forma mais concisa
git checkout -b nome-da-branch
```
Para mesclar mudanças de outra branch:

```bash
# mude para a branch principal (main ou master)
git checkout main
# mescle as mudanças da branch de funcionalidade
git merge nome-da-branch
```

Para excluir uma branch:

```bash
git branch -d nome-da-branch
# se a branch ainda não foi mesclada e você quer forçar a exclusão
git branch -D nome-da-branch
```
## Usar o `.gitignore`

O arquivo `.gitignore` especifica quais arquivos e diretórios devem ser ignorados pelo Git. Crie um arquivo `.gitignore` no diretório raiz do seu repositório e adicione padrões para os arquivos e diretórios que você deseja ignorar. Por exemplo:

```bash
# Ignorar arquivos de log
*.log

# Ignorar arquivos de compilação
*.class

# Ignorar diretórios de dependências
node_modules/
vendor/

# Ignorar arquivos de configuração específicos do ambiente
.env

# Ignorar arquivos do sistema
.DS_Store
Thumbs.db

# Ignorar pastas de IDEs
.idea/
.vscode/

# Ignorar arquivos temporários
*.tmp
*.swp

# Ignorar pastas de saída
dist/
build/
```

```bash
git status
```