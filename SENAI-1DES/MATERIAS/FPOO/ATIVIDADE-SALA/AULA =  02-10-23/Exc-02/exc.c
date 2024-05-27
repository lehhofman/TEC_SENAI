#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define SIZE 100

int calcularIdade(char *data) {
	
    int ano, mes, dia;
    
    sscanf(data, "%d-%d-%d", &ano, &mes, &dia);

    int anoAtual = 2023;

    // Calcula a idade
    
    int idade = anoAtual - ano;
    
    if (mes > 3 || (mes == 3 && dia > 18)) {
    	
        idade--;
        
    }

    return idade;
    
}

int main() {
	
    FILE *entrada = fopen("entrada.csv", "r");
    FILE *saida = fopen("saida.csv", "w");

    if (entrada == NULL || saida == NULL) {
    	
        printf("Erro ao abrir os arquivos");
        
        return 1;
    }

    char linha[SIZE];

    if (fgets(linha, SIZE, entrada) == NULL) {
    	
        printf("Erro ao ler");
        
        fclose(entrada);
        fclose(saida);
        
        return 1;
    }

    fprintf(saida, "\n id; Idade\n", linha);

    while (fgets(linha, SIZE, entrada)) {
    	
        char *idStr = strtok(linha, ";");
        char *nome = strtok(NULL, ";");
        char *dataStr = strtok(NULL, ";");

        int idade = calcularIdade(dataStr);

        fprintf(saida, "\n %s; %d \n", linha, idade);
        
    }

    fclose(entrada);
    fclose(saida);

    printf("Dados processados e salvos em saida.csv\n");

    return 0;
}
