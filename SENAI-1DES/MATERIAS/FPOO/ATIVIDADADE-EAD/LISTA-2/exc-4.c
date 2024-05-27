#include <stdio.h>
 
 int main () {
 	
	int a;
 	int b;
 	int c;
 	
 	printf("digite o valor de um dos lados do triangulo:");
 	scanf("%d", &a);
 	
 	printf("digite o valor de um dos lados do triangulo:");
 	scanf("%d", &b);
 	
 	printf("digite o valor de um dos lados do triangulo:");
 	scanf("%d", &c);
 	
 	if(a != b && b != c) {
 		
 		printf("esse triangulo e: ESCALENO");
 		
	 } else if (a == b && b == c) {
	 	
	 	printf("esse triangulo e: EQUILATERO");
	 	
	 } else if (a == b && b != c) {
	 	
	 	printf("esse triangulo e: ISOSCELES");
	 	
	 }
	 
	 return 0;
	 
 }

