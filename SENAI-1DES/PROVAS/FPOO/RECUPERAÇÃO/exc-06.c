#include <stdio.h>
#include <string.h>

int main() {
	
    char nomes[5][50];
    int idades[5];
    int maior = 0;
    int indice = -1;
    int i;

    for(i = 0; i < 5; i++) {
    	
        printf("Digite o nome da pessoa: ");
        scanf("%s", &nomes);
        
        printf("Digite a idade da pessoa: ");
        scanf("%d", &idades[i]);

        if (idades[i] > maior) {
        	
            maior = idades[i];
            indice = i;
            
        }
        
    }

    if (indice != -1) {
    	
        printf(" \n A pessoa mais velha tem %d anos.\n", maior);
        
    } else {
    	
        printf("Inexistente.\n");
        
    }

    return 0;
    
}
