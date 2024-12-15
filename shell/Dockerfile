FROM node:20-alpine

# Definir diretório de trabalho
WORKDIR /usr/src/app

# Copiar apenas os arquivos de dependências
COPY package*.json ./

# Instalar dependências
RUN npm install

# Copiar o restante do código
COPY . .

# Expor a porta padrão do ng serve
EXPOSE 4200

# Comando para rodar a aplicação em modo de desenvolvimento com hot reload
# O --host 0.0.0.0 permite acesso externo (necessário no Docker)
# O --poll=2000 faz com que o webpack fique verificando alterações de forma ativa (útil em sistemas de arquivos montados via Docker)
CMD [ "npm", "start", "--", "--host", "0.0.0.0", "--poll=2000" ]