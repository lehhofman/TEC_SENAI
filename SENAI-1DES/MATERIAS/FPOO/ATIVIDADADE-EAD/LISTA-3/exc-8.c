#include <stdio.h>

int main () {
	
	int i;
	int n;
	int fatorial;
	
	printf("digite um numero: ");
	scanf("%d", &n);
	
	for(i=1; i <= n; i++) {
		
		fatorial *= i;
		
	}
	
	printf("fatorial desse numero e: %d \n", fatorial);
	
	return 0;
}
