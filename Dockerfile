# Estágio 1: Build (Construção)
FROM node:20-alpine AS build
WORKDIR /app
COPY package.json .
COPY package-lock.json .
RUN npm install
COPY . .
RUN npm run build

# Estágio 2: Server (Servidor)
FROM nginx:1.25-alpine
# Copia os arquivos da pasta 'dist' do estágio de build
COPY --from=build /app/dist /usr/share/nginx/html
# Copia nossa configuração para o React Router
COPY nginx.conf /etc/nginx/conf.d/default.conf 
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]