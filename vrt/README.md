# Pruebas de regresión visual

Kraken
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
   git clone https://github.com/jandres0322/MISW4103-Entrega-Final-Pruebas-Automatizadas-Grupo-10.git
   cd MISW-4103-Pruebas-Automatizadas-Grupo-10
   cd kraken
   ```

   Abrir la carpeta vrt/kraken/ con el IDE de su gusto. Esta será nuestra carpeta raiz de ahora en adelante
   
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


### Configuración y Ejecución de Pruebas de Regressión Visual con ResembleJS

Ubíquese en un directorio donde vaya a ubicar el proyecto y cree una carpeta "resemble", tal y como muestra la siguiete imagen:

![image](https://github.com/user-attachments/assets/e9ca67d7-4500-4cfa-bd3e-a44b75678aaa)

Ejecute los siguietes comandos: 

  ```bash
   npm init
   En este directorio del proyecto debe crear un archivo llamado index.js
   En este directorio del proyecto debe crear un archivo llamado config.json
   isntalalr la libreria: 
      npm install playwright
   Instalar Resemble.js ejecute el siguiente comando:
      npm install resemblejs
   ```
Dentro de la carpeta dodne estan los script "index.js", Ejecute el sigueite comadno para ejecutar las prueabas de regresión:

```bash
   node index.js
   ```

Se visualzará:

![image](https://github.com/user-attachments/assets/d7d0a7d3-684a-4add-9386-aa6c6a8a615e)

En la raiz del repositorio se encuentra la capeta ResembleJs, esta carpeta contiene el reporte en formato Html comparison_report. ResembleJs/comparison_report.html.

Para generar el reporte debe seguir lso siguientes pasos:

Navegar al path /ResembleJs desde la raiz del repositorio
ejecutar npm ci
ejecutar npm run start
Esto generará el reporte nuevamente.

Nota: para generar un reporte con datos actualizados debe haber previamente ejecutado kraken y kraken510

El script buscará las imágenes generadas por kraken de manera recursiva dentro de las carpetas ./Kraken/artefacts/version1 y ./Kraken/artefacts/version2,  con base en dichas imagenes generará la comparacián y el reporte.




