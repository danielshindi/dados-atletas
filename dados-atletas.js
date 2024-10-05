class Atleta {
    constructor (nome, idade, peso, altura, notas) {
        this.nome=nome;
        this.idade=idade;
        this.peso=peso;
        this.altura=altura;
        this.notas=notas;
    }

    calculaCategoria() {
        if (this.idade >= 9 && this.idade <= 11) {
            return 'Infantil';
        }
        if (this.idade >= 12 && this.idade <= 13) {
            return 'Juvenil';
        }
        if (this.idade >= 14 && this.idade <= 15) {
            return 'Intermediário';
        }
        if (this.idade >= 16 && this.idade <= 30) {
            return 'Adulto';
        }
        
        return 'Sem categoria';     
    }

    calculaIMC() {
        return this.peso / (this.altura * this.altura)
    }

    calculaMediaValida() {
        return this.notas.sort((a, b) => a - b).
        slice(1, 4).
        reduce((a, b) => a + b, 0) / 3;
    }

    obtemNomeAtleta() {
        return this.nome;
    }

    obtemIdadeAtleta() {
        return this.idade;
    }

    obtemPesoAtleta() {
        return this.peso;
    }

    obtemNotasAtleta() {
        return this.notas.join(', ');
    }

    obtemCategoria() {
        return this.calculaCategoria();
    }

    obtemIMC() {
        return this.calculaIMC();
    }

    obtemMediaValida() {
        return this.calculaMediaValida();
    }

    imprimeDadosAtleta() {
        return `Nome: ${this.obtemNomeAtleta()}
Idade: ${this.obtemIdadeAtleta()}
Peso: ${this.obtemPesoAtleta()}
Altura: ${this.altura}
Notas: ${this.obtemNotasAtleta()}
Categoria: ${this.obtemCategoria()}
IMC: ${this.obtemIMC()}
Média válida: ${this.obtemMediaValida()}\n`
    }
}


// Declara o atleta
const atleta = new Atleta("Cesar Abascal",
    30, 80, 1.70,
    [10, 9.34, 8.42, 10, 7.88]);

console.log(atleta.imprimeDadosAtleta());
