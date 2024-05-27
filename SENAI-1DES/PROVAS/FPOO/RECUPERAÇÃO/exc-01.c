#include <stdio.h>

int main (){
	
	int a;
	int b;
	int c;
	
	printf("Digite um numero inteiro: ");
	scanf("%d", &a);
	
	printf("Digite um numero inteiro: ");
	scanf("%d", &b);
	
	c = a + b;
	
	printf("O resultado da soma de a + b = %d", c);
	
	return 0;
}
