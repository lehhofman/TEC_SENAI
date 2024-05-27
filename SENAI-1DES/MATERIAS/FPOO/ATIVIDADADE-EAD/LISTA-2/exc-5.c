#include <stdio.h>

int main() {
	
    char nome[20];
    float preco;
	float novo_preco;

    printf("Digite o nome do produto: ");
    scanf("%s", nome);

    printf("Digite o preco da produto: ");
    scanf("%f", &preco);

    if (preco < 1000) {
    	
        novo_preco = preco * 1.05; 
        
    } else {
    	
        novo_preco = preco * 1.07;
        
    }
    
    	printf("o valor do %s e = R$  %.2f\n", nome, novo_preco);

    return 0;
}
