#include <stdio.h>
#include <string.h>

int main (){
	
	char time[5] [20];
	int vitorias [5];
	int empates [5];
	int pontos [5];
	char classificacao [5];
	int posicao [5];
	int i;
	
	for(i = 0; i < 5; i++){
		
		printf("Digite o nome do time:");
		scanf("%s", &time[i]);
		
		printf("Digite o numero de vitorias:");
		scanf("%d", &vitorias[i]);
		
		printf("Digite o numero de empates:");
		scanf("%d", &empates[i]);
		
	}
	
	printf("\n classificacao: \n", classificacao);
	
	for(i = 0; i < 5; i++){
		
		pontos[i] = vitorias[i] * 3 + empates[i];
		
		printf("%s: com: %d  pontos \n", time[i], pontos[i]);
	}
	
	return 0;	
}
