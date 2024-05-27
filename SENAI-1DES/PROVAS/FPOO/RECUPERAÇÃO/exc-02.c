#include <stdio.h>

int main (){
	
	int a;
	int b;
	int c;
	int d;
	
	printf("Digite um numero inteiro: ");
	scanf("%d", &a);
	
	printf("Digite um numero inteiro: ");
	scanf("%d", &b);
	
	printf("Digite um numero inteiro: ");
	scanf("%d", &c);
	
	d = (a + b + c ) / 3;
	
	printf("A media e de : %d", d);
	
	return 0;
}
