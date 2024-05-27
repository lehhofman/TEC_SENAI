#include <stdio.h>

int main () {
	
	int a;
	int b;
	int c;
    int d;
	int e;
	int f;
	
	printf("Insira 6 numeros: ");
	scanf("%d", &a);
	
	printf("Insira 6 numeros: ");
	scanf("%d", &b);
	
	printf("Insira 6 numeros: ");
	scanf("%d", &c);
	
	printf("Insira 6 numeros: ");
	scanf("%d", &d);
	
	printf("Insira 6 numeros: ");
	scanf("%d", &e);
	
	printf("Insira 6 numeros: ");
	scanf("%d", &f);
	
	if(a > b && a > c && a > d && a > e && a > f){
		
		printf("%d e o maior numero", a);
		
	}else if(b > c && b > d && b > e && b > f){
		
		printf("%d e o maior numero", b);
		
	}else if(c > d && c > e && c > f){
		
		printf("%d e o maior numero", c);
		
	}else if(d > e && d > f){
		
		printf("%d e o maior numero", d);
		
	}else if(e > f){
		
		printf("%d e o maior numero", e);
		
	}else {
		
		printf("%d e o maior numero", f);
		
	}
	
	return 0;
	
}
	
	
