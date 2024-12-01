const fs = require("fs");
const path = require("path");
const PNG = require('pngjs').PNG;
const pixelmatch = require('pixelmatch');
const sharp = require('sharp');

const scenarios = ["EP-005", "EP-006", "EP-007", "EP-008", "EP-012", "EP-017"];

const edgeDir = path.join(__dirname, "..", "cypress/screenshots/edge/");
const firefoxDir = path.join(__dirname, "..", "cypress/screenshots/firefox/");
const diffDir = path.join(__dirname, "..", "cypress/screenshots/diff/");

if (!fs.existsSync(diffDir)) {
  console.log("Creando carpeta de diferencias");
  fs.mkdirSync(diffDir);
}

let htmlContent = `
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Reporte de Comparación de Capturas</title>
  <style>
    body { font-family: Arial, sans-serif; }
    table { width: 100%; border-collapse: collapse; margin-bottom: 20px; }
    th, td { border: 1px solid #ddd; padding: 8px; text-align: center; }
    th { background-color: #f2f2f2; }
    img { max-width: 300px; }
  </style>
</head>
<body>
  <h1>Reporte de Comparación de Capturas de Pantalla</h1>
  <table>
    <thead>
      <tr>
        <th>Escenario</th>
        <th>Archivo</th>
        <th>Píxeles Diferentes</th>
        <th>Imagen de Diferencias</th>
      </tr>
    </thead>
    <tbody>
`;

let comparisonCount = 0;

(async () => {
  for (const scenario of scenarios) {
    console.log(`Procesando escenario: ${scenario}`);

    const edgeScenarioDir = fs.readdirSync(edgeDir).find((folder) => folder.includes(scenario));
    const firefoxScenarioDir = fs.readdirSync(firefoxDir).find((folder) => folder.includes(scenario));

    if (edgeScenarioDir && firefoxScenarioDir) {
      console.log(`Carpeta encontrada para escenario: ${scenario}`);

      const edgePath = path.join(edgeDir, edgeScenarioDir);
      const firefoxPath = path.join(firefoxDir, firefoxScenarioDir);
      const diffScenarioDir = path.join(diffDir, scenario);

      if (!fs.existsSync(diffScenarioDir)) {
        fs.mkdirSync(diffScenarioDir);
      }

      const files = fs.readdirSync(edgePath);

      for (const file of files) {
        console.log(`Comparando archivo: ${file} del escenario: ${scenario}`);

        const edgeFilePath = path.join(edgePath, file);
        const firefoxFilePath = path.join(firefoxPath, file);
        const diffFilePath = path.join(diffScenarioDir, `diff-${file}`);

        if (fs.existsSync(firefoxFilePath)) {
          const edgeStats = fs.statSync(edgeFilePath);
          const firefoxStats = fs.statSync(firefoxFilePath);

          if (edgeStats.isFile() && firefoxStats.isFile()) {
            const edgeBuffer = fs.readFileSync(edgeFilePath);
            const firefoxBuffer = fs.readFileSync(firefoxFilePath);

            const edgeImage = PNG.sync.read(edgeBuffer);
            const firefoxImage = PNG.sync.read(firefoxBuffer);

            const minWidth = Math.min(edgeImage.width, firefoxImage.width);
            const minHeight = Math.min(edgeImage.height, firefoxImage.height);

            const resizedEdgeBuffer = await sharp(edgeBuffer)
              .resize(minWidth, minHeight)
              .toBuffer();

            const resizedFirefoxBuffer = await sharp(firefoxBuffer)
              .resize(minWidth, minHeight)
              .toBuffer();

            const img1 = PNG.sync.read(resizedEdgeBuffer);
            const img2 = PNG.sync.read(resizedFirefoxBuffer);

            const { width, height } = img1;
            const diff = new PNG({ width, height });

            const numDiffPixels = pixelmatch(img1.data, img2.data, diff.data, width, height, {
              threshold: 0.1
            });

            if (numDiffPixels > 0) {
              console.log(`Diferencias encontradas: ${numDiffPixels} píxeles para el archivo ${file} del escenario ${scenario}`);
            } else {
              console.log(`No se encontraron diferencias para el archivo ${file} del escenario ${scenario}`);
            }

            fs.writeFileSync(diffFilePath, PNG.sync.write(diff));

            htmlContent += `
            <tr>
              <td>${scenario}</td>
              <td>${file}</td>
              <td>${numDiffPixels}</td>
              <td><img src="../screenshots/diff/${scenario}/diff-${file}" alt="Diferencias para ${file}"></td>
            </tr>
            `;

            comparisonCount++;
          } else {
            console.warn(`Uno de los archivos no es válido para comparación: ${file}`);
          }
        } else {
          console.warn(`Archivo correspondiente no encontrado en 'firefox' para ${file} del escenario ${scenario}`);
        }
      }
    } else {
      console.warn(`Directorio correspondiente no encontrado para el escenario ${scenario}`);
    }
  }

  htmlContent += `
      </tbody>
    </table>
  </body>
  </html>
  `;

  const reportPath = path.join(__dirname, "..", "cypress/screenshots", "report.html");
  fs.writeFileSync(reportPath, htmlContent);

  if (comparisonCount > 0) {
    console.log(`Comparaciones realizadas: ${comparisonCount}`);
    console.log("Reporte de comparación generado en:", reportPath);
  } else {
    console.warn("No se realizaron comparaciones. Verifica si los archivos y las dimensiones son correctos.");
  }
})();
