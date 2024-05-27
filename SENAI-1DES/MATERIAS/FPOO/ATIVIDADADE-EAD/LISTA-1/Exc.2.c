#include <stdio.h>
int main(){
	int a;
	int b;
	int c;
	printf("digite a velocidade percorrida em km/h:");
	scanf("%d", &a);
	printf("digite a distancia percorrida em km/h:");
	scanf("%d", &b);
	c = (a / b);
	printf("sera nescessario: %d horas(h) para percorrer a essa distancia", c);
	return 0;
}
