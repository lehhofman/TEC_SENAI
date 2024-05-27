#include <stdio.h>
#include <string.h>

int main (){
	
	char cidades [5] [20];
	int eleitores [5];
	float votos [5];
	float participacao [5];
	int i;
	
	for(i = 0; i < 5; i++) {
		
        printf("Digite o nome da cidade: ");
        scanf("%s", cidades[i]);
        
        printf("Digite o numero total de eleitores: ");
        scanf("%d", &eleitores[i]);
        
        printf("Digite o total de votos apurados na ultima eleicao: ");
        scanf("%f", &votos[i]);

    }

    printf("\n Resultados:\n");
    
    for (i = 0; i < 5; i++) {
    	
    	participacao[i] = votos[i] / eleitores[i] * 100;
    	
        printf("\n Cidade de %s:", cidades[i]);
        
        printf("\n Numero total de eleitores: %d", eleitores[i]);
        
        printf("\n Total de votos apurados: %.2f", votos[i]);
        
        printf("\n Porcentagem de participacao: %.2f%% \n", participacao[i]);
 
    }

    return 0;
    
}
