## Swagger example - Express/Node
Tecnologías utilizadas:
+ Node
+ Git
+ Docker
+ Docker Compose
+ Express

Librerias utilizadas de swagger: 
+ swagger-jsdoc
+ swagger-ui-express


## Despliegue
1. Clonar el repo o descargar el repositorio:
```bash
git clone https://github.com/AlexisFabianCarranza/Swagger-Node-Example.git
```
2. Posicionarse sobre la carpeta principal, donde esta ubicado el archivo docker-compose.yml y ejecutar:
```bash
docker-compose up --build -d
```
3. Verificar que el contenedor se encuentre levantado:
```bash
docker-compose ps
```
5. Ingresar a la siguientes URL para probar la documentación y la api de libros: <br>
a) [http://localhost:4000/books/](http://localhost:4000/books/) <br>
b) [http://localhost:4000/api-docs](http://localhost:4000/apidocs) <br>