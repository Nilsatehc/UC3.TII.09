 /*
        Solução 1: Mostra a divisão correta das horas, porém
        os minutos vão de uma escala de 0 a 1 quando deveriam ir  de 0 a 60.

        // Entrada - Pedir um total de minutos
        let minutos = prompt("Informe um total de minutos:");

        // Processamento - Converter esses minutos em horas e minutos
        let horas = minutos / 60;

        // Saída - Escrever no formato HH:MM
        console.log("Total em horas: " + horas);
        */

        /*
        //Solução 2: consegue exibir horas e minutos em formato ideal
        let minutos = prompt("Informe o total de minutos");
        
        let horas = Math.floor(minutos / 60);
        let minutosRestantes = minutos % 60;

        console.log("Total de horas: " + horas + ":" + minutosRestantes);
        */

        let minutos = document.getElementById
        let horas = 0;

        while(minutos > 60) {
            minutos = minutos - 60
            horas++;
        }

        console.log("Total de horas: " + horas + ":" + minutos);
       