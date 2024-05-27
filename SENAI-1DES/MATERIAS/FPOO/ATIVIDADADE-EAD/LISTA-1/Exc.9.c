#include <stdio.h>
int main(){
    char mercadoria;
	int preco;
	int reajuste;
	printf("digite o nome do mercadoria:");
	scanf("%s", &mercadoria);
	printf("digite o preco atual da mercadoria:");
	scanf("%d", &preco);
	printf("digite a porcentagem de reajuste da mercadoria:");
	scanf("%d", &reajuste);
	reajuste = preco + preco * reajuste / 100;
	printf("o novo preco da mercadoria e: R$ %d \n",reajuste);
	return 0;
}
