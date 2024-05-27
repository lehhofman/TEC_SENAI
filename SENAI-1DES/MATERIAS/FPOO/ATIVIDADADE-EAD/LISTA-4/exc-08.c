#include <stdio.h>

int main() {
	
    int numeros;
    int um [numeros];
    int dois [numeros];
    int resultado [numeros];
    int i;

    printf("Digite a quantidade de numeros dos vetores: ");
    scanf("%d", &numeros);
    
    for ( i = 0; i < numeros; i++) {
    	
        printf("Numero do primeiro vetor: ");
        scanf("%d", &um[i]);
        
    }
    
    for (i = 0; i < numeros; i++) {
    	
        printf("Numero do segundo vetor: ");
        scanf("%d", &dois[i]);
        
    }

    for (i = 0; i < numeros; i++) {
    	
        resultado[i] = um[i] + dois [numeros - 1 - i];
        
        printf("\n A soma e de: %d \n ", resultado[i]);
        
    }

    return 0;
}
