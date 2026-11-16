let acertos = 0;
let erros = 0;
let jogadas = 0;

function Desenhar() {
    if (jogadas >= 10) {
        return;
    }

    let z = document.getElementById("aposta");
    let aposta = Number(z.value);

    // Impede jogar se não escolheu uma forma válida (1, 2 ou 3)
    if (!aposta || aposta < 1 || aposta > 3) {
        alert("Por favor, selecione uma forma antes de começar!");
        return;
    }

    let botaoJogar = document.getElementById("botaoJogar");
    botaoJogar.disabled = true;

    let x = document.getElementById("x").getContext("2d");
    let sorteio = Math.floor(Math.random() * 3) + 1;

    x.clearRect(0, 0, 300, 300);
    x.beginPath();
    
    if (sorteio == 1) {
        x.fillStyle = "#cc0088";
        x.strokeStyle = "#cc1";
        x.arc(150, 150, 50, 0, 2 * Math.PI);
        x.fill();
        x.stroke();
    } else if (sorteio == 2) {
        x.fillStyle = "#f5ee8a";
        x.fillRect(100, 100, 100, 100);
    } else {
        x.fillStyle = "#00fc6d";
        x.fillRect(50, 100, 200, 100);
    }

    setTimeout(() => {
        if (aposta == sorteio) {
            alert("Parabéns!!!");
            acertos++;
        } else {
            alert("Tente novamente!!!");
            erros++;
        }

        jogadas++;

        document.getElementById("acertos").innerHTML = acertos;
        document.getElementById("erros").innerHTML = erros;

        if (jogadas === 10) {
            let mensagem = "";
            
            if (acertos >= 7) {
                mensagem = "Excelente jogador";
            } else if (acertos >= 3) {
                mensagem = "Bom";
            } else if (acertos >= 2) {
                mensagem = "Ruim";
            } else {
                mensagem = "Péssimo";
            }

            alert("Fim de jogo! Seu resultado: " + mensagem + " (" + acertos + " acertos)");
        } else {
            botaoJogar.disabled = false;
        }
    }, 500);
}

function Limpar() {
    let x = document.getElementById("x").getContext("2d");
    x.clearRect(0, 0, 300, 300);

    acertos = 0;
    erros = 0;
    jogadas = 0;

    document.getElementById("acertos").innerHTML = acertos;
    document.getElementById("erros").innerHTML = erros;
    document.getElementById("botaoJogar").disabled = false;
}