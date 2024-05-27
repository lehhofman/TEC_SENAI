#include <stdio.h>
#define SIZE 10

int fila[SIZE];
int ponteiro = 0;
int i;

void mostraFila(){
	
	printf("Fila:\n");
	
	for(i = 0; i < ponteiro; i++)
	
		printf("%d ", fila[i]);
		
	printf("\n");
	
}

int push(int dado){
	
	if(ponteiro < SIZE){
		
		fila[ponteiro] = dado;
		ponteiro++;
		
		return 1;
		
	} 
	
	else return 0;
	
}

int pop(){
	
	if(ponteiro >= 0){
		
		ponteiro--;
		
		for(i = 0; i < ponteiro; i++){
			
			fila[i] = fila[i+1];
			
		}
		
		return 1;
		
	}else
	
		return 0;
		
}

	int main() {
	
    int opcao, elemento;

    do {
    	
        printf("\n Menu:\n");
        
        printf("\n 1 para inserir elemento \n");
        printf("\n 2 para remover elemento \n");
        printf("\n 3 para mostrar fila \n");
        printf("\n 0 para encerrar o programa \n");
        
        printf("\n Escolha uma opcao:");
        scanf("%d", &opcao);

        if (opcao == 1) {
        	
            printf("\n Digite um elemento: ");
            scanf("%d", &elemento);
            
            if (push(elemento))
                printf("\n Elemento inserido \n");
                
            else
                printf("\n Elemento nao inserido \n");
                
        } else if (opcao == 2) {
        	
            if (pop())
                printf("\n Elemento removido \n");
                
            else
            
                printf("\n Nenhum elemento removido \n");
                
        } else if (opcao == 3) {
        	
            mostraFila();
            
        } else if (opcao == 0) {
        	
            printf("\n Programa encerrado \n");
            
        } else {
        	
            printf("\n Opcao invalida \n");
        }
        
    } while (opcao != 0);

    return 0;
}


