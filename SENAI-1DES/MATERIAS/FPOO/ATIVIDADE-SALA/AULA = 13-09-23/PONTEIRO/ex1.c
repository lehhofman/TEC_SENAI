#include <stdio.h>

int main(){
	
	char nome[] = "Marcelo";
	char *ponteiro = nome; 
	
	printf("%s\n", nome);
	printf("%c\n", ponteiro[0]);
	
	return 0;
}
