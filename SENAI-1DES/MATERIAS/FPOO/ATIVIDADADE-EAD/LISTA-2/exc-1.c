#include <stdio.h>

int main() {
	
    float preco;
	float preco_final;

    printf("Digite o preço do produto: ");
    scanf("%f", &preco);

    if (preco > 1000) {
    	
        preco_final = preco * 0.92; 
        
    } else {
    	
        preco_final = preco;
        
    }
    
    printf("Preço final: %.2f\n", preco_final);

    return 0;
}

