function Calcularinvestimento() {

    var ValorInicial = Number(document.getElementById("ValorInicial").value);
    var AporteMensal = Number(document.getElementById("AporteMensal").value);

    var RendimentoMensal = document.getElementById("RendimentoMensal").value;
    RendimentoMensal = Number(RendimentoMensal.replace("%", "")) / 100;

    var Tempo = Number(document.getElementById("Tempo").value);

    var ValorInvestido = Number(ValorInicial) + (Number(AporteMensal) * Number(Tempo));

    var Saldo = Number(ValorInicial);
    var Mes = 1;

    while (Mes <= Tempo) {

        Saldo = Saldo + AporteMensal;

        var Juros = Saldo * RendimentoMensal;

        Saldo = Saldo + Juros;

        Mes++;
    }
    var Rendimentos = Saldo - ValorInvestido;

    document.getElementById("ValorInvestido").value = ValorInvestido.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    document.getElementById("Rendimentos").value = Rendimentos.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    document.getElementById("ValorFinal").value = Saldo.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

}