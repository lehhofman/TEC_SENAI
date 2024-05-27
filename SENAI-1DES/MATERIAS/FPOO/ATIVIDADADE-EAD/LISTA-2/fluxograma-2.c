#include <stdio.h>

int main() {
	
    int cor;

    printf("Digite a cor do semaforo ([1.verde], [2.amarelo], [3.vermelho]): ");
    scanf("%d", &cor);

    if (cor == 1){
    	
    	printf("Voce escolheu verde, entao pode ir \n");
        
    }else {
    	
    	printf("voce nao escolheu verde, entao nao pode ir \n");
	}
	
    return 0;
}
