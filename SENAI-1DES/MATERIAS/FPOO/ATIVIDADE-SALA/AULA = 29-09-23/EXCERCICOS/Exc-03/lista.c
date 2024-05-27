#include <stdio.h>
#include <stdlib.h>

struct Lista{
	
    int dado;
    struct Lista *prox;
    
};

struct Lista *inicio = NULL;
struct Lista *fim = NULL;
struct Lista *aux = NULL;

void mostraLista(){
	
    aux = inicio;
    
    printf("Lista:\n");
    
    while(aux != NULL){
    	
        printf("%d\n", aux->dado);
        
        aux = aux->prox;
        
    }
    
}
int push(int dado){
	
    aux = (struct Lista*) malloc(sizeof(struct Lista));
    
    if(aux == NULL) return 0;
    
    aux->dado = dado;
    aux->prox = NULL;
    
    if(inicio == NULL){
    	
        inicio = aux;
        fim = aux;
        
    }else{
    	
        fim->prox = aux;
        fim = aux;
        
    }
    
    return 1;
    
}

int pop(){
	
    if(inicio != NULL){
    	
        aux = inicio;
        inicio = inicio->prox;
        free(aux);
        
        return 1;
        
    }else
    
        return 0;
        
}

int slice(int index){
	
    int i;
    aux = inicio;
    
    if(index == 0){
    	
        inicio = inicio->prox;
        free(aux);
        
        return 1;
        
    }else{
    	
        for(i = 0; i < index-1; i++){
        	
            aux = aux->prox;
            
        }
        
        struct Lista *aux2 = aux->prox;
        
        aux->prox = aux2->prox;
        free(aux2);
        
        return 1;
        
    }
    
    return 0;
    
}

	int main() {
	
    int opcao, elemento;

    do {
    	
        printf("\n Menu:\n");
        
        printf("\n 1 para inserir elemento \n");
        printf("\n 2 para remover elemento \n");
        printf("\n 3 para mostrar lista \n");
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
        	
            mostraLista();
            
        } else if (opcao == 0) {
        	
            printf("\n Programa encerrado \n");
            
        } else {
        	
            printf("\n Opcao invalida \n");
        }
        
    } while (opcao != 0);

    return 0;
}
