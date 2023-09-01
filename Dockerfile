# Usar una imagen base
FROM node:14

# Establecer el directorio de trabajo
WORKDIR /app

# Copiar archivos de la aplicación
COPY package*.json ./
RUN npm install
COPY . .

# Puerto en el que la aplicación escucha
EXPOSE 80

# Comando para iniciar la aplicación
CMD ["npm", "start"]
