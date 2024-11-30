# Pruebas de Reconocimiento

# Pruebas de reconocimiento con Monkeys / Cypress
Con la herramienta Monkey-cypress se pueden realizar pruebas de reconocimiento generando automaticamente entradas y eventos sobre la interfaz grafica usando monkeys

## Preparacion del ambiente

### Clonar el repositorio
Abrir la carpeta MISW4103-Entrega-Final-Pruebas-Automatizadas-Grupo-10/pruebas-reconocimiento/cypress
Instalar cypress en su maquina local ejecutando:
npm install cypress@9.7.0 -g
Estando en la carpeta monkey ejecutar el siguiente:
npm install

### Correr pruebas
Correr Ghost localmente. Verificar que este corriendo en el puerto 2368

Estando en la carpeta monkey ejecutar el siguiente comando para inicializar las pruebas
cypress run -C monkey-config.json -b chrome
