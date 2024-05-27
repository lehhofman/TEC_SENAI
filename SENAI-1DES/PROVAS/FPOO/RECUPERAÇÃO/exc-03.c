#include <stdio.h>
#include <string.h>

int main() {
	
    char nome[5][10];
    int nota1[5];
    int nota2[5];
    int media[5];
    char situacao[5][15];
    int i;

    for (i = 0; i < 5; i++) {
    	
        printf("Digite o nome do aluno e suas (nota1 e nota2): ");
        scanf("%s %d %d", nome[i], &nota1[i], &nota2[i]);

        media[i] = (nota1[i] + nota2[i]) / 2;

        if (media[i] >= 5) {
        	
            strcpy(situacao[i], "Aprovado");
            
        } else {
        	
            strcpy(situacao[i], "Reprovado");
            
        }
        
    }

    for (i = 0; i < 5; i++) {
    	
        printf("\nO aluno(a) %s foi %s com %d de media\n", nome[i], situacao[i], media[i]);
        
    }

    return 0;
}
