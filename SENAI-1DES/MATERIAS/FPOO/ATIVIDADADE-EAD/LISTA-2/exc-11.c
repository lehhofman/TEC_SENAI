#include <stdio.h>

int main() {
    int peca;
    float preco;
	float desconto;
	float valor_final;

    printf("Digite o produto [1 para camisa], [2 para bermuda], [3 para calca]: ");
    scanf("%d", &peca);

    printf("Digite o preco do produto: ");
    scanf("%f", &preco);

    if (peca == 1) {
    	
        desconto = preco * 0.20; 
		valor_final = preco - desconto; 
		
		printf("Valor final da venda: R$ %.2f\n", valor_final);
        
    } else if (peca == 2) {
    	
        desconto = preco * 0.10;  
        valor_final = preco - desconto;
        
        printf("Valor final da venda: R$ %.2f\n", valor_final);
        
    } else if (peca == 3) {
    	
        desconto = preco * 0.15;  
        valor_final = preco - desconto;
        
        printf("Valor final da venda: R$ %.2f\n", valor_final);
        
    } else {
    	
        printf("Produto inválido!\n");
        
	}

    return 0;
}
