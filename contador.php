<?php
// Ruta del archivo de contador
$archivo_contador = 'contador.txt';

// Verifica si el archivo existe, si no existe, lo crea
if (!file_exists($archivo_contador)) {
    $archivo = fopen($archivo_contador, 'w');
    fwrite($archivo, '0');
    fclose($archivo);
}

// Obtiene el número actual de veces que se ha presionado el botón
$contador = file_get_contents($archivo_contador);

// Si se ha presionado el botón, incrementa el contador y actualiza el archivo
if (isset($_POST['boton'])) {
    $contador++;
    file_put_contents($archivo_contador, $contador);
}
?>

<!DOCTYPE html>
<html>
<head>
    <title>Contador de botón</title>
</head>
<body>
    <h1>Contador de botón</h1>
    <p>Número de veces que se ha presionado el botón: <?php echo $contador; ?></p>
    <form method="post">
        <input type="submit" name="boton" value="Presiona aquí">
    </form>
</body>
</html>