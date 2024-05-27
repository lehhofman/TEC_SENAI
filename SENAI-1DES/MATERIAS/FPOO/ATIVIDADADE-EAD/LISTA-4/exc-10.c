#include <stdio.h>

int main() {
	
	int i;
	int temp;
    int vetor[6] = {2, 4, 6, 8, 10, 11};
    
    printf("Numeros em sua ordem: \n ");

    for(i = 0; i < 6; i++) {
    	
        printf("\n %d \n", vetor[i]);
        
    }

    for(i = 0; i < 3; i++) {
    	
        temp = vetor[i];
        vetor[i] = vetor[5 - i];
        vetor[5 - i] = temp;
        
    }
    
    printf("Numeros em ordem inversa: \n ");

    for(i = 0; i < 6; i++) {
    	
        printf("\n %d \n", vetor[i]);
        
    }

    return 0;
}
