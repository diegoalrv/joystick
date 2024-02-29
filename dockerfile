# Usa la imagen base de Python
FROM python:3.9-slim

# Establece el directorio de trabajo en /app
WORKDIR /FastAPI

# Copia el archivo de requisitos al contenedor
COPY requirements.txt .

# Instala las dependencias
RUN pip install -r requirements.txt

# Copia el código de la aplicación al contenedor
COPY . /FastAPI/

# Expone el puerto en el que la aplicación se ejecuta
EXPOSE 8080 9090 9080 9060 9050 9040

# Comando para ejecutar la aplicación FastAPI
# CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8080"]
CMD ["python", "main.py"]
