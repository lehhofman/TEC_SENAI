#include <stdio.h>
#include <locale.h>
#include <string.h>

int main(){
	setlocale(LC_ALL,"");
	
	int pessoas;
	char nome [5] [10];
	float salario [5] ;
	int reajuste [5] ;
	float valor [5] ;
	int i;
	
	printf("Quantas pessoas deseja registrar:");
	scanf("%d", &pessoas);
	
	for(i = 0; i < pessoas; i++){
	
	printf("Nome:");
	scanf("%s", &nome [i]);
	
	printf("Sálario:");
	scanf("%f", &salario [i]);
	
	printf("Reajuste em %:");
	scanf("%d", &reajuste [i]);
	
	valor [i] = salario [i] + salario [i] * (reajuste [i]) / 100;
	
	}
	
	for(i = 0; i < 5; i++){
		
		printf("%s \t %.2f \n", nome[i], valor[i]);
	}
	
	return 0;
	
}
