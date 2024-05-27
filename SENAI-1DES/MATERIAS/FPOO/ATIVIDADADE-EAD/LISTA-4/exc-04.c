#include <stdio.h>
#include <string.h>

int main () {
	
	char nome [5] [10];
	float preco [5];
	float caro;
	float barato;
	int maior;
	int menor;
	int i;
	
	for (i = 0; i < 5; i++) {
		
        printf("Nome da mercadoria: ");
        scanf("%s", nome[i]);
        
        printf("Preco da mercadoria: ");
        scanf("%f", &preco[i]);

        if (i == 0) {
        	
            caro = preco[i];
            barato = preco[i];
            
        } else if (preco[i] > caro) {
            	
                caro = preco[i];
                maior = i;
                
        } else if (preco[i] < barato) {
            	
                barato = preco[i];
                menor = i;
                
            }
        
    }

    printf("\n Mercadoria mais cara: %s custando R$ %.2f \n", nome[maior], caro);
    printf("\n Mercadoria mais barata: %s custando R$ %.2f \n", nome[menor], barato);

    return 0;
}

