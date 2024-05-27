#include <stdio.h>
#include <string.h>

int main () {
	
	char mercadoria [5] [10];
	float valor [5];
	float preco [5];
	int aumento [5];
	int i;
	
	for(i = 0; i < 5; i++){
		
		printf("Nome da mercadoria:");
		scanf("%s", &mercadoria[i]);
		
		printf("Valor da mercadoria: R$");
		scanf("%f", &preco[i]);
		
		if(preco < 1000){
			
			valor[i] = preco[i] * 1.05;
			
		}else {
			
			valor[i] = preco[i] * 1.07;
			
		}
		
	}
	
	for(i = 0; i < 5; i++){
		
		printf("%s: R$ %.2f \n", mercadoria[i], valor[i]);
	}
	
	return 0;
}
