#include <stdio.h>

int procedimentoBart () {
	
	int i;
	
	for(i = 0; i < 100; i++)
	
	printf("Nao vou atormentar a Lisa \n");
	
}

int frases (char frase [], int n){
	
	int i;
	
	for(i = 0; i < n; i++)
	
	printf("%s \n", frase);
	
}

int main () {
	
	frases ("Procedimento em c", 5); // 5 tem como função quantas repetições teram.
	
	return 0;
	
}
