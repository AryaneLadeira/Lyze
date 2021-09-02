
<?php
	$servidor = "localhost";
	$usuario = "root";
	$senha = "";
	$dbname = "siterp";
	
	//Criar a conexão
    $conn = mysqli_connect($servidor, $usuario, $senha, $dbname);
    
    if($conn->connect_errno)
    echo "Falha na conexão: (" .$conn->connect_errno.") ".$conn->connect_error;

    mysql_select_db($dbname, $conn);
?>