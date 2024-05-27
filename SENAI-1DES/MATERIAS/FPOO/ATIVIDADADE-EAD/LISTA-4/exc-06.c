#include <stdio.h>
#include <string.h>

int main (){
	
	char nome [2] [20];
	float preco [2];
	float desconto [2];
	float valor [2];
	float desc[2];
	int i;

	
	for(i = 0; i < 2; i++){
		
		printf("Porcentagem de desconto: ");
		scanf("%f", &desconto[i]);
		
		printf("Nome do produto: ");
		scanf("%s", &nome[i]);
		
		printf("Valor do %s: ", nome[i]);
		scanf("%f", &preco[i]);
	}
	
	for(i = 0; i < 2; i++){
		
		desc[i] = preco[i] * desconto[i] / 100;
        valor[i] = preco[i] - desc[i];
        
    }
    
    for(i = 0; i < 2; i++){
	
        printf("A mercadoria : %s, com o valor de %.2f, teve %.2f de desconto, com valor final de: R$ %.2f \n", nome[i
		], preco [i], desc[i], valor[i]);

	}
	
	return 0;
}
