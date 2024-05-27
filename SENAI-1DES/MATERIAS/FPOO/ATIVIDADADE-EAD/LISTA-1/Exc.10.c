#include <stdio.h>
int main(){
	char cidade;
	int populacao;
	int votos;
	int porcentagem;
	printf("digite o nome da cidade:");
	scanf("%s", &cidade);
	printf("digite o total de populacao da cidade:");
	scanf("%d", &populacao);
	printf("digite a quantidade de votos da cidade:");
	scanf("%d", &votos);
	porcentagem = votos * 100 / populacao;
	printf("a porcentagem da populacao na eleicao da cidade foi: %d \n",porcentagem);
	return 0;
}
