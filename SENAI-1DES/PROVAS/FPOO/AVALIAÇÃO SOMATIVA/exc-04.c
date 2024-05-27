#include <stdio.h>

int main (){
	
	int itens, i;
	
	printf("Digite quantos itens Jorge comprou:");
	scanf("%d", &itens);
	
	char nome [itens] [20];
	float custo [itens], margem[itens], venda[itens];
	
	for(i = 0; i < itens; i++){
		
		printf("Digite o nome do produto:");
		scanf("%s", &nome[i]);
		
		printf("Digite o custo do produto %s:", nome[i]);
		scanf("%f", &custo[i]);
	}
	
	printf("Margem de lucros esperada em % :");
	scanf("%f", &margem);
	
	for(i = 0; i < itens; i++){
		
		venda[i] = custo[i] * (1 + margem[i]/ 100);
		
		printf("\n O %s custara R$ %.2f", nome[i], venda[i]);
	}
	
	return 0;
}
