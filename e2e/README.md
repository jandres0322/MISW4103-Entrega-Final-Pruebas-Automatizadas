# Pruebas End To End Cypress y Kraken


# Kraken
## Descripción

Este proyecto utiliza **Kraken** para realizar pruebas automatizadas en la aplicación web **Ghost** (http://localhost:2368/ghost/). Kraken es un framework de pruebas basado en **Cucumber** que permite escribir pruebas en un formato legible por humanos. En este proyecto se aplican los patrones de diseño **GivenWhenThen** y **PageObject**, y **Faker** se utiliza para generar datos aleatorios en las pruebas.

---

## Instalación

### Prerequisitos

1. **Node.js**: Kraken está basado en Node.js. Asegúrate de tener **Node.js** instalado. Si no lo tienes, puedes instalarlo desde [aquí](https://nodejs.org/).

2. **Git**: Asegúrate de tener **Git** instalado para gestionar el código del proyecto. Si no lo tienes, puedes instalarlo desde [aquí](https://git-scm.com/).

3. **Ghost instalado**:
   - Para la versión estándar de Ghost, asegúrate de tener la aplicación Ghost corriendo en tu máquina local en http://localhost:2368/ghost/. Puedes instalarla desde [aquí](https://ghost.org/).
   - Para la versión 4.5 de Ghost, que se utilizará en las pruebas de la semana 6, esta debe ejecutarse en Docker. Usa el siguiente comando para iniciar Ghost en la versión 4.5 en Docker:
     ```bash
     docker run --name my-ghost-4-5 -e NODE_ENV=development -e url=http://localhost:3001 -p 3001:2368 ghost:4.5
     ```
     Ghost 4.5 corriendo en tu máquina local en [http://localhost:3001/ghost](http://localhost:3001/ghost)

### Pasos de instalación

1. **Clona el repositorio**

   Clona este repositorio en tu máquina local usando Git:

   ```bash
   git clone  https://github.com/jandres0322/MISW4103-Entrega-Final-Pruebas-Automatizadas-Grupo-10
   cd MISW-4103-Pruebas-Automatizadas-Grupo-10
   cd kraken
   ```

   Abrir la carpeta e2e/kraken con el IDE de su gusto. Esta será nuestra carpeta raiz de ahora en adelante
   
   Ejecutar en la raíz del proyecto:
   ```bash
   npm install kraken-node
   ```
   En caso de tener problemas appium, instalarlo globalmente con el siguiente comando:

   ```bash
   npm install -g appium
   ```
   Una vez dentro del proyecto, instala todas las dependencias necesarias:


   Asegúrate de que Ghost esté corriendo en http://localhost:2368/ghost/ antes de ejecutar las pruebas.
   ```bash
   http://localhost:2368/ghost/
   ```
3. **Configuración de Ejecución**
   
   Abre el archivo properties.json y cambia las credenciales: url, username, y password según tu configuración de ambiente.
   
4. **Ejecutar pruebas**

   Abrir el archivos properties.json y cambiar las credenciales: url, username y password según haya configurado el ambiente.

   Para ejecutar las pruebas con Kraken, utiliza el siguiente comando en tu terminal gitbash:
     ```bash
   ./node_modules/kraken-node/bin/kraken-node run
   ```

   Ejecutar los escenarios de forma individual de la siguiente manera: 

   ```bash
   ./node_modules/kraken-node/bin/kraken-node run EP-001-Crear-Cuenta.feature --properties=properties.json
   ```

    Ubicación de escenarios y estrategia:

Los escenarios E2E se alojan en la carpeta *feacturesEjecutados*, los cuales se pueden pasar manaulmente a la carpeta feature para poder ejecutarlos.
   ![image](https://github.com/user-attachments/assets/55cacac5-21dd-4b2d-8bd7-1a66e64dabd5)



## Cypress

Cypress es una herramienta de automatización de pruebas de interfaz para pruebas de regresión de aplicaciones web . Cypress se ejecuta en Windows , Linux y macOS . La aplicación Cypress es un software de código abierto publicado bajo la licencia MIT 

## Aplicación Objetivo de pruebas

![image](https://github.com/user-attachments/assets/22173b28-de89-491a-8887-5c8d2b3fa9db)

## Pasos para poder ejecutar los escenarios de pruebas con la herramienta Cypress

### Preparación del ambiente

Clonar el repositorio

```bash
  git clone https://github.com/jandres0322/MISW-4103-Pruebas-Automatizadas-Grupo-10
  cd MISW-4103-Pruebas-Automatizadas-Grupo-10
```

Ir a la carpeta ```cypress```
``` bash
    cd cypress
```

Ejecutar las dependencias
```
    npm i
```

Para ejecutar el ambiente de Cypress puede usar el siguiente comando:
``` 
    npm run cypress:open
```


### Ejecución de pruebas

1. Correr Ghost localmente

2. Es importante saber que no se debe tener cuenta creada, ya que las pruebas hacen la creación automática de esta con los parametros que se encuentran en los scripts de cada uno de los escenariso de prueba. En caso de tener una cuenta anteriormente creada, es necesario borrar la base de datos del ghost de la siguiente forma:

3. Situarse en el directorio de la aplicación ghost ejecutar el comando rm -f content/data/ghost-local.db

