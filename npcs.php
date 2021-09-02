<?php include_once "conexao.php"; 
$result_personagens = "SELECT * FROM personagens";
$resultado_personagens = mysqli_query($conn, $result_personagens);
?>

<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Lyze</title>
    <link rel="stylesheet" href="css/normalize.css">
    <link rel="stylesheet" href="css/reset.css">
    <link rel="stylesheet" href="css/grid.css">
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/npcs.css">
    <link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet">
    <link rel="shortcut icon" href="./img/icones/icone_page.svg">
    
</head>
<body>
    <header class="header">
        <div class="container">
            <a href="index.html" class="grid-4">
                <img src="img/icones/lyze-icon.svg" alt="Lyze">
            </a>
            <nav class="header_menu grid-12"> <!-- menu -->
                <ul>
                    <li><a href="mecanicas.html">Mecânicas</a></li>
                    <li><a href="aikatsu.html">Aikatsu</a></li>
                    <li><a href="nature.html">Nature Highschool</a></li>
                    <li><a href="personagens.html" class="menu_ativo">Personagens</a></li>
                </ul>
            </nav>
        </div>
    </header> 

    <section class="introducao_interna interna_personagens">
        <div class="container">
            <h1>Personagens</h1>
            <p>Todos os personagens do roleplay</p>
        </div>
    </section>
        
    <section class="container botoes">
        <div class="subtitulo_botoes">
            <h2 class="subtitulo subtitulo_preto h2_botoes">NPCS</h2>
        </div>

        <div>
            <a href="players.html" class="btn a_players">Players</a>
        </div>

        <div class="vitrine">
            <?php while($rows_personagens = mysqli_fetch_assoc($resultado_personagens)) { ?>
                <img src="./img/personagens/npcs/<?php echo $rows_personagens['foto'];?>" alt="aaa">
                <p><?php echo $rows_personagens['nome']; ?></p>
            <?php } ?>
            
        </div>

        <p class="sla">aaa</p>

    </section>

    
    <div class="pre_footer pre_footer_aikatsu">
        <blockquote class="quote">
            <p>"Tudo isso é uma droga e essas merdas de
                escolhas só pioram tudo!"</p>
            <cite>anônimo</cite>
        </blockquote>
    </div>
    <footer>
        <div class="container">
            <p>© Nature Roleplay 2020 - Alguns direitos reservados - Criado por @aryane.motta</p>
        </div>
    </footer>
    
</body>
</html>