#include <stdio.h>

int main() {
	
    int cor;

    printf("Digite a cor do semaforo ([1.verde], [2.amarelo], [3.vermelho]): ");
    scanf("%d", &cor);

    if (cor == 1){
    	
    	printf("Voce escolheu verde, entao pode ir \n");
        
    }else if (cor == 2) {
    	
    	printf("voce escolheu amarelo, entao fique atento \n");
    	
	}else if (cor == 3) {
		
		printf("voce escolheu vermelho, espere");
		
	}else if (cor > 3){
		
		printf("opcao invalida");
		
	}
	
    return 0;
}
