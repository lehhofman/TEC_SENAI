#include <stdio.h>

int main () {
	
	float salario;
	float reajuste;
	float salario_final;
	
	printf("digite o salario atual do funcionario: R$ ");
	scanf("%f", &salario);
	
	if (salario <= 1750.00) {
		
		reajuste = salario * 0.15;
		salario_final = salario + reajuste;
		
		printf("o reajuste do salario e de: R$ %.2f \n", reajuste);
		printf("o salario final do funcionario e de: R$ %.2f \n", salario_final);
		
	} else 	if (salario <= 2000.00) {
		
		reajuste = salario * 0.12;
		salario_final = salario + reajuste;
		
		printf("o reajuste do salario e de: R$ %.2f \n", reajuste);
		printf("o salario final do funcionario e de: R$ %.2f \n", salario_final);
		
	} else if (salario <= 3000.00) {
		
		reajuste = salario * 0.09;
		salario_final = salario + reajuste;
		
		printf("o reajuste do salario e de: R$ %.2f \n", reajuste);
		printf("o salario final do funcionario e de: R$ %.2f \n", salario_final);
		
	} else	if (salario <= 30001.00) {
		
		reajuste = salario * 0.06;
		salario_final = salario + reajuste;
		
		printf("o reajuste do salario e de: R$ %.2f \n", reajuste);
		printf("o salario final do funcionario e de: R$ %.2f \n", salario_final);
		
	} else {
		
		printf("opcao invalida");
		
	}
	
	return 0;
	
}
