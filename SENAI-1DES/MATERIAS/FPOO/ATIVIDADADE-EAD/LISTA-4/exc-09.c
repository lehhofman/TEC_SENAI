#include <stdio.h>

int main() {
	
    int vetor[10];
    int somaP = 0; 
	int somaI = 0;
	int mediaP = 0;
	int mediaI = 0;
    int totalP = 0;
	int totalI = 0;
	int i;

    for(i = 0; i < 10; i++) {
    	
    	printf("Digite um numero inteiro: ");
    	scanf("%d", &vetor[i]);
    	
        if (vetor[i] % 2 == 0) {
        	
            somaP += vetor[i];
            totalP++;
            mediaP = somaP / totalP;
            
        } else {
        	
            somaI += vetor[i];
            totalI++;
            mediaI = somaI / totalI;
            
        }
        
    }

    printf("\n A soma dos numeros pares: %d \n", somaP);
    printf("\n A media dos numeros pares: %d \n", mediaP);
    printf("\n O total de numeros pares: %d \n", totalP);

    printf("\n A soma dos numeros impares: %d \n", somaI);
    printf("\n A media dos numeros impares: %d \n", mediaI);
    printf("\n O total de numeros impares: %d \n", totalI);

    return 0;
}
