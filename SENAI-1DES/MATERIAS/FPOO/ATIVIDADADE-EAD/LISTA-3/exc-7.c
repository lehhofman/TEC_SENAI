#include <stdio.h>

int main(){
	
    int i = 0;
    int soma = 0;

    while(i < 100) {
    	
    	i++;
        
        soma = soma + i;
        
        printf("%d\n", soma);
    }
}
