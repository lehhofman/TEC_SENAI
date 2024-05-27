#include <stdio.h>
#include <locale.h>

void mostrar(int vetor[], int n){
	
	int i;
	
	printf("indice \t Conteudo\n");
	
	for(i = 0; i < n; i++)
	
		printf("%d \t [%d] \n", i, vetor[i]);	
}

int buscar(int *vetor, int n, int valor){
	
	int i, posicao = -1;
	
	for(i = 0; i < n; i++){
		
		if(valor == vetor[i]){
			
			posicao = i;
			
			break;
			
		}
		
	}
	
	return posicao;
	
}

int main(){
	
	setlocale(LC_ALL,"");
	
	int range[] = { 25, 41, 8, 7, 13, 18, 4, 1, 7, 3};
	
	int n = sizeof(range) / sizeof(range[0]);
	
	mostrar(range, n);
	
	int valor;
	
	printf("Digite o valor a ser buscado: ");
	scanf("%d", &valor);
	
	int resultado = buscar(range, n, valor);
	
	if(resultado == -1)
	
		printf("Valor nao encontrado");
		
	else
	
		printf("O valor foi encontrado na posicao %d", resultado);
		
	return 0;
}
