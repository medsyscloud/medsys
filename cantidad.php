<?php
// Ruta del archivo de contador
$archivo_contador = 'contador.txt';

// Verifica si el archivo existe, si no existe, muestra un mensaje de error
if (!file_exists($archivo_contador)) {
    echo "El archivo de contador no existe.";
} else {
    // Lee el contenido del archivo de contador
    $contador = file_get_contents($archivo_contador);

    // Muestra el valor del contador en la pantalla
    echo "El número de veces que se ha presionado el botón es: " . $contador;
}
?>