#include <stdio.h>
#include <stdlib.h>

#define SIZE 10

int pilha[SIZE];
int ponteiro = 0;
int i;

int fila[SIZE];
int pontFila = 0;

struct Lista {
    int dado;
    struct Lista* prox;
};

struct Lista* inicio = NULL;
struct Lista* fim = NULL;
struct Lista* aux = NULL;

void mostraPilha() {
    printf("\n Pilha: \n");
    for (i = 0; i < ponteiro; i++) {
        printf(" %d ", pilha[i]);
    }
    printf("\n");
}

int pushPilha(int dado) {
    if (ponteiro < SIZE) {
        pilha[ponteiro] = dado;
        ponteiro++;
        return 1;
    } else
        return 0;
}

int popPilha() {
    if (ponteiro > 0) {
        ponteiro--;
        return 1;
    } else
        return 0;
}

void mostraFila() {
    printf("\n Fila: \n");
    for (i = 0; i < pontFila; i++) {
        printf(" %d ", fila[i]);
    }
    printf("\n");
}

int pushFila(int dado) {
    if (pontFila < SIZE) {
        fila[pontFila] = dado;
        pontFila++;
        return 1;
    } else
        return 0;
}

int popFila() {
    if (pontFila >= 0) {
        pontFila--;
        for (i = 0; i < pontFila; i++) {
            fila[i] = fila[i + 1];
        }
        return 1;
    } else
        return 0;
}

void mostraLista() {
    aux = inicio;
    printf("Lista:\n");
    while (aux != NULL) {
        printf("%d\n", aux->dado);
        aux = aux->prox;
    }
}

int pushLista(int dado) {
    aux = (struct Lista*)malloc(sizeof(struct Lista));
    if (aux == NULL)
        return 0;
    aux->dado = dado;
    aux->prox = NULL;
    if (inicio == NULL) {
        inicio = aux;
        fim = aux;
    } else {
        fim->prox = aux;
        fim = aux;
    }
    return 1;
}

int popLista() {
    if (inicio != NULL) {
        aux = inicio;
        inicio = inicio->prox;
        free(aux);
        return 1;
    } else
        return 0;
}

int sliceLista(int index) {
    int i;
    aux = inicio;
    if (index == 0) {
        inicio = inicio->prox;
        free(aux);
        return 1;
    } else {
        for (i = 0; i < index - 1; i++) {
            aux = aux->prox;
        }
        struct Lista* aux2 = aux->prox;
        aux->prox = aux2->prox;
        free(aux2);
        return 1;
    }
    return 0;
}

int main() {
	
    int opcao, elemento;
    int escolhaEstrutura;

    do {
    	
        printf("\n Escolha a estrutura:\n");
        printf(" 1 para Pilha\n");
        printf(" 2 para Fila\n");
        printf(" 3 para Lista\n");
        printf(" 0 para encerrar o programa\n");

        printf("\n Escolha uma opcao:");
        scanf("%d", &escolhaEstrutura);

        switch (escolhaEstrutura) {
        	
            case 1:
            	
                printf("\n 1 Adicionar elemento \n");
                printf("\n 2 Retirar elemento \n");
                printf("\n 3 Mostrar elementos \n");
                printf("\n Escolha uma opcao: ");
                scanf("%d", &opcao);

                switch (opcao) {
                	
                    case 1:
                    	
                        printf("Digite o elemento a ser inserido:");
                        scanf("%d", &elemento);
                        
                        if (pushPilha(elemento))
                        
                            printf("\n Elemento adicionado \n");
                            
                        else
                        
                            printf("\n Erro \n");
                            
                        break;
                        
                    case 2:
                    	
                        if (popPilha())
                        
                            printf("\n Elemento retirado \n");
                            
                        else
                        
                            printf("\n Erro \n");
                            
                        break;
                        
                    case 3:
                    	
                        mostraPilha();
                        break;
                        
                    default:
                    	
                        printf("\n Opcao invalida \n");
                        
                }
                
                break;
                
            case 2:
            	
                printf("\n 1 Adicionar elemento \n");
                printf("\n 2 Retirar elemento \n");
                printf("\n 3 Mostrar elementos \n");
                printf("\n Escolha uma opcao: ");
                scanf("%d", &opcao);

                switch (opcao) {
                	
                    case 1:
                    	
                        printf("\n Digite o elemento a ser inserido: ");
                        scanf("%d", &elemento);
                        
                        if (pushFila(elemento))
                        
                            printf("\n Elemento adicionado \n");
                            
                        else
                        
                            printf("\n Erro \n");
                            
                        break;
                        
                    case 2:
                    	
                        if (popFila())
                        
                            printf("\n Elemento retirado \n");
                            
                        else
                        
                            printf("\n Erro \n");
                            
                        break;
                        
                    case 3:
                    	
                        mostraFila();
                        break;
                        
                    default:
                    	
                        printf("\n Opcao invalida \n");
                        
                }
                
                break;
                
            case 3:
            	
                printf("\n 1 Adicionar elemento \n");
                printf("\n 2 Retirar elemento \n");
                printf("\n 3 Mostrar elementos \n");
                printf("\n Escolha uma opcao: ");
                scanf("%d", &opcao);

                switch (opcao) {
                	
                    case 1:
                    	
                        printf("\n Digite o elemento a ser inserido: ");
                        scanf("%d", &elemento);
                        
                        if (pushLista(elemento))
                        
                            printf("\n Elemento adicionado \n");
                            
                        else
                        
                            printf("\n Erro \n");
                            
                        break;
                        
                    case 2:
                    	
                        if (popLista())
                        
                            printf("\n Elemento retirado \n");
                            
                        else
                        
                            printf("\n Erro \n");
                            
                        break;
                        
                    case 3:
                    	
                        mostraLista();
                        break;
                        
                    default:
                    	
                        printf("\n Opcao invalida \n");
                        
                }
                
                break;
                
            case 0:
            	
                printf("\n Encerrando o programa...\n");
                
                break;
                
            default:
            	
                printf("\n Escolha uma opcao valida. \n");
                
        }
        
    } while (escolhaEstrutura != 0);

    return 0;
}
