#include <stdio.h>

int main () {
	
	float salario;
	float desconto;
	float salario_final;
	
	printf("digite o salario do funcionario: R$ ");
	scanf("%f", &salario);
	
	if (salario <= 1212.70) {
		
		desconto = salario * 0.075;
		salario_final = salario - desconto;
		
		printf("o desconto vai ser de: R$ %.2f \n ", desconto);
		printf("o salario final do funcionario e de: R$ %.2f \n", salario_final );
		
	} else if (salario <= 2427,35) {
		
		desconto = salario * 0.090;
		salario_final = salario - desconto;
		
		printf("o desconto vai ser de: R$ %.2f \n ", desconto);
		printf("o salario final do funcionario e de: R$ %.2f \n", salario_final );
		
	} else if (salario <= 3641,03) {
		
		desconto = salario * 0.12;
		salario_final = salario - desconto;
		
		printf("o desconto vai ser de: R$ %.2f \n ", desconto);
		printf("o salario final do funcionario e de: R$ %.2f \n", salario_final );
		
	} else if (salario <= 7087.22) {
		
		desconto = salario * 0.14;
		salario_final = salario - desconto;
		
		printf("o desconto vai ser de: R$ %.2f \n ", desconto);
		printf("o salario final do funcionario e de: R$ %.2f \n", salario_final );
		
	} else if (salario >= 7087.22) {
		
		desconto = salario * 0.14;
		salario_final = salario - desconto;
		
		printf("o desconto vai ser de: R$ %.2f \n ", desconto);
		printf("o salario final do funcionario e de: R$ %.2f \n", salario_final );
		
	} else {
		
		printf("opcao invalida");
		
	}
	
	return 0;
	
}
