#include <stdio.h>

int main() {
	
	int i;
    int numero;

    printf("digite um numero entre 0 e 10: ");
    scanf("%d", &numero);
        
        for (i = 1; i <= 10; i++) {
        	
        	 numero * i;
        	 
            printf("%d * %d = %d \n", numero, i, numero * i);
        }
    

    return 0;
}



