<?php
// Configuración
$archivo = "diplomados.txt";
$urlBase = "verificardiploma.php?diploma=";

// Función para leer todos los registros
function leerRegistros() {
    global $archivo;
    $registros = [];
    
    if (file_exists($archivo)) {
        $lineas = file($archivo, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
        foreach ($lineas as $linea) {
            list($codigo, $nombre) = explode(',', $linea, 2);
            $registros[] = [
                'codigo' => trim($codigo),
                'nombre' => trim(str_replace('"', '', $nombre))
            ];
        }
    }
    
    return $registros;
}

// Función para generar el siguiente código
function generarSiguienteCodigo() {
    $registros = leerRegistros();
    
    if (empty($registros)) {
        return "DPMC000001";
    }
    
    $ultimoRegistro = end($registros);
    $ultimoCodigo = $ultimoRegistro['codigo'];
    $numeroActual = intval(substr($ultimoCodigo, 4));
    $numeroSiguiente = $numeroActual + 1;
    
    return "DPMC" . str_pad($numeroSiguiente, 6, "0", STR_PAD_LEFT);
}

// Función para guardar registros
function guardarRegistros($registros) {
    global $archivo;
    $contenido = "";
    
    foreach ($registros as $registro) {
        $contenido .= $registro['codigo'] . ', "' . $registro['nombre'] . '"' . PHP_EOL;
    }
    
    file_put_contents($archivo, $contenido);
}

// Función para crear un nuevo registro
function crearRegistro($nombre) {
    $registros = leerRegistros();
    $nuevoCodigo = generarSiguienteCodigo();
    
    $registros[] = [
        'codigo' => $nuevoCodigo,
        'nombre' => $nombre
    ];
    
    guardarRegistros($registros);
    return $nuevoCodigo;
}

// Función para actualizar un registro
function actualizarRegistro($codigo, $nombre) {
    $registros = leerRegistros();
    $actualizado = false;
    
    foreach ($registros as $key => $registro) {
        if ($registro['codigo'] == $codigo) {
            $registros[$key]['nombre'] = $nombre;
            $actualizado = true;
            break;
        }
    }
    
    if ($actualizado) {
        guardarRegistros($registros);
        return true;
    }
    
    return false;
}

// Función para eliminar un registro
function eliminarRegistro($codigo) {
    $registros = leerRegistros();
    $eliminado = false;
    $nuevosRegistros = [];
    
    foreach ($registros as $registro) {
        if ($registro['codigo'] != $codigo) {
            $nuevosRegistros[] = $registro;
        } else {
            $eliminado = true;
        }
    }
    
    if ($eliminado) {
        guardarRegistros($nuevosRegistros);
        return true;
    }
    
    return false;
}

// Función para generar QR (usando Google Chart API para simplicidad)
function generarUrlQR($url, $size = 512) {
    $urlEncoded = urlencode($url);
    return "https://chart.googleapis.com/chart?cht=qr&chs={$size}x{$size}&chl={$urlEncoded}";
}

// Manejo de formularios
$mensaje = "";
$accion = isset($_GET['accion']) ? $_GET['accion'] : 'listar';
$codigo = isset($_GET['codigo']) ? $_GET['codigo'] : '';
$nombre = isset($_POST['nombre']) ? $_POST['nombre'] : '';

// Procesar formularios
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    switch ($accion) {
        case 'crear':
            if (!empty($nombre)) {
                $nuevoCodigo = crearRegistro($nombre);
                $mensaje = "Diplomado creado con código: " . $nuevoCodigo;
                $accion = 'detalle';
                $codigo = $nuevoCodigo;
            } else {
                $mensaje = "Error: El nombre no puede estar vacío";
            }
            break;
            
        case 'editar':
            if (!empty($nombre) && !empty($codigo)) {
                if (actualizarRegistro($codigo, $nombre)) {
                    $mensaje = "Diplomado actualizado correctamente";
                    $accion = 'detalle';
                } else {
                    $mensaje = "Error: No se encontró el diplomado";
                }
            } else {
                $mensaje = "Error: Datos incompletos";
            }
            break;
            
        case 'eliminar':
            if (!empty($codigo)) {
                if (eliminarRegistro($codigo)) {
                    $mensaje = "Diplomado eliminado correctamente";
                    $accion = 'listar';
                } else {
                    $mensaje = "Error: No se encontró el diplomado";
                }
            }
            break;
    }
}

// Obtener datos para formularios de edición
$datosEdicion = null;
if (($accion == 'editar' || $accion == 'detalle') && !empty($codigo)) {
    $registros = leerRegistros();
    foreach ($registros as $registro) {
        if ($registro['codigo'] == $codigo) {
            $datosEdicion = $registro;
            break;
        }
    }
    
    if (!$datosEdicion && $accion != 'detalle') {
        $mensaje = "Error: No se encontró el diplomado";
        $accion = 'listar';
    }
}
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Gestión de Diplomados</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            max-width: 900px;
            margin: 0 auto;
            padding: 20px;
        }
        
        table {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 20px;
        }
        
        table, th, td {
            border: 1px solid #ddd;
        }
        
        th, td {
            padding: 10px;
            text-align: left;
        }
        
        th {
            background-color: #f2f2f2;
        }
        
        tr:hover {
            background-color: #f5f5f5;
        }
        
        .mensaje {
            padding: 10px;
            margin-bottom: 20px;
            background-color: #d4edda;
            border: 1px solid #c3e6cb;
            color: #155724;
            border-radius: 4px;
        }
        
        .error {
            background-color: #f8d7da;
            border-color: #f5c6cb;
            color: #721c24;
        }
        
        form {
            margin-bottom: 20px;
        }
        
        label {
            display: block;
            margin-bottom: 5px;
            font-weight: bold;
        }
        
        input[type="text"] {
            width: 100%;
            padding: 8px;
            margin-bottom: 10px;
            border: 1px solid #ddd;
            border-radius: 4px;
        }
        
        button {
            padding: 8px 16px;
            background-color: #4CAF50;
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
        }
        
        button:hover {
            background-color: #45a049;
        }
        
        .btn-danger {
            background-color: #dc3545;
        }
        
        .btn-danger:hover {
            background-color: #c82333;
        }
        
        .btn-warning {
            background-color: #ffc107;
            color: #212529;
        }
        
        .btn-warning:hover {
            background-color: #e0a800;
        }
        
        .btn-info {
            background-color: #17a2b8;
        }
        
        .btn-info:hover {
            background-color: #138496;
        }
        
        .menu {
            margin-bottom: 20px;
        }
        
        .url-display {
            margin: 20px 0;
            padding: 10px;
            background-color: #f8f9fa;
            border: 1px solid #ddd;
            border-radius: 4px;
            word-break: break-all;
        }
        
        .qr-code {
            text-align: center;
            margin: 20px 0;
        }
    </style>
</head>
<body>
    <h1>Sistema de Gestión de Diplomados</h1>
    
    <div class="menu">
        <a href="?accion=listar"><button type="button">Ver Todos</button></a>
        <a href="?accion=crear"><button type="button">Crear Nuevo</button></a>
    </div>
    
    <?php if (!empty($mensaje)): ?>
    <div class="mensaje <?php echo strpos($mensaje, 'Error') !== false ? 'error' : ''; ?>">
        <?php echo $mensaje; ?>
    </div>
    <?php endif; ?>
    
    <?php if ($accion == 'listar'): ?>
        <h2>Lista de Diplomados</h2>
        <table>
            <thead>
                <tr>
                    <th>Código</th>
                    <th>Nombre</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                <?php 
                $registros = leerRegistros();
                if (empty($registros)): 
                ?>
                <tr>
                    <td colspan="3">No hay diplomados registrados</td>
                </tr>
                <?php else: ?>
                <?php foreach ($registros as $registro): ?>
                <tr>
                    <td><?php echo htmlspecialchars($registro['codigo']); ?></td>
                    <td><?php echo htmlspecialchars($registro['nombre']); ?></td>
                    <td>
                        <a href="?accion=detalle&codigo=<?php echo $registro['codigo']; ?>">
                            <button type="button" class="btn-info">Ver</button>
                        </a>
                        <a href="?accion=editar&codigo=<?php echo $registro['codigo']; ?>">
                            <button type="button" class="btn-warning">Editar</button>
                        </a>
                        <form method="post" action="?accion=eliminar&codigo=<?php echo $registro['codigo']; ?>" style="display:inline;">
                            <button type="submit" class="btn-danger" onclick="return confirm('¿Está seguro de eliminar este diplomado?')">Eliminar</button>
                        </form>
                    </td>
                </tr>
                <?php endforeach; ?>
                <?php endif; ?>
            </tbody>
        </table>
    <?php endif; ?>
    
    <?php if ($accion == 'crear'): ?>
        <h2>Crear Nuevo Diplomado</h2>
        <form method="post" action="?accion=crear">
            <div>
                <label for="nombre">Nombre del Diplomado:</label>
                <input type="text" id="nombre" name="nombre" required>
            </div>
            <button type="submit">Guardar</button>
        </form>
    <?php endif; ?>
    
    <?php if ($accion == 'editar' && $datosEdicion): ?>
        <h2>Editar Diplomado</h2>
        <form method="post" action="?accion=editar&codigo=<?php echo htmlspecialchars($datosEdicion['codigo']); ?>">
            <div>
                <label for="codigo">Código:</label>
                <input type="text" id="codigo" value="<?php echo htmlspecialchars($datosEdicion['codigo']); ?>" readonly>
            </div>
            <div>
                <label for="nombre">Nombre del Diplomado:</label>
                <input type="text" id="nombre" name="nombre" value="<?php echo htmlspecialchars($datosEdicion['nombre']); ?>" required>
            </div>
            <button type="submit">Actualizar</button>
        </form>
    <?php endif; ?>
    
    <?php if ($accion == 'detalle' && (!empty($datosEdicion) || !empty($codigo))): ?>
        <?php 
        $codigoMostrar = !empty($datosEdicion) ? $datosEdicion['codigo'] : $codigo;
        $nombreMostrar = !empty($datosEdicion) ? $datosEdicion['nombre'] : '';
        
        // Si no tenemos datosEdicion pero sí tenemos código, buscar el registro
        if (empty($datosEdicion) && !empty($codigo)) {
            $registros = leerRegistros();
            foreach ($registros as $registro) {
                if ($registro['codigo'] == $codigo) {
                    $nombreMostrar = $registro['nombre'];
                    break;
                }
            }
        }
        
        $urlCompleta = $urlBase . $codigoMostrar;
        $urlAbsoluta = (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on' ? "https" : "http") . "://$_SERVER[HTTP_HOST]$_SERVER[PHP_SELF]";
        $urlAbsoluta = dirname($urlAbsoluta) . "/" . $urlCompleta;
        ?>
        
        <h2>Detalles del Diplomado</h2>
        <div>
            <p><strong>Código:</strong> <?php echo htmlspecialchars($codigoMostrar); ?></p>
            <p><strong>Nombre:</strong> <?php echo htmlspecialchars($nombreMostrar); ?></p>
        </div>
        
        <h3>URL de Verificación</h3>
        <div class="url-display">
            <a href="<?php echo htmlspecialchars($urlCompleta); ?>" target="_blank">
                <?php echo htmlspecialchars($urlCompleta); ?>
            </a>
        </div>
        
        <h3>Código QR</h3>
        <div class="qr-code">
            <img src="<?php echo generarUrlQR($urlAbsoluta); ?>" alt="Código QR">
        </div>
        
        <div>
            <a href="?accion=editar&codigo=<?php echo htmlspecialchars($codigoMostrar); ?>">
                <button type="button" class="btn-warning">Editar</button>
            </a>
            <a href="?accion=listar">
                <button type="button">Volver a la lista</button>
            </a>
        </div>
    <?php endif; ?>
    
</body>
</html>
</antArtifact