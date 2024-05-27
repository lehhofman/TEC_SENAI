#include <stdio.h>

int main() {
	
    int nota1;
	int nota2;
	int nota3; 
	int media;

    printf("digite a primeira nota: ");
    scanf("%d", &nota1);

    printf("digite a segunda nota: ");
    scanf("%d", &nota2);

    printf("digite a terceira nota: ");
    scanf("%d", &nota3);

    media = (nota1 + nota2 + nota3) / 3;

    if (media >= 6) {
    	
        printf("aprovado");
        
    } else if (media >= 4) {
    	
        printf("recuperacao");
        
    } else {
    	
        printf("reprovado");
        
    }

    return 0;
}

