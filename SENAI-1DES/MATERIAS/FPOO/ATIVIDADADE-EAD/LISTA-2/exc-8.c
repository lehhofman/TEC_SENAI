#include <stdio.h>

int main (){
	
	int a;
	int b;
	
	printf("digite um numero: ");
	scanf("%d", &a);
	
	printf("digite um numero: ");
	scanf("%d", &b);
	
	if(a > b) {
		
		printf("maior numero: %d \n",a);
		
		printf("menor numero: %d \n",b);
		
	} else if(b > a) {
		
		printf("maior numero: %d \n",b);
		
		printf("menor numero: %d \n",a);
		
	} else 
	
	printf("o maior numero : %d \n o menor numero: %d \n",a);
	
	return 0;
}
