#include <stdio.h>
int main(){
    char funcionario;
	int salario;
	int reajuste;
	printf("digite o nome do funcionario:");
	scanf("%s", &funcionario);
	printf("digite o sallario atual do funcionario:");
	scanf("%d", &salario);
	printf("digite a porcentagem de reajuste do salario:");
	scanf("%d", &reajuste);
	reajuste = salario + salario * reajuste / 100;
	printf("o novo salario do funcionario e: R$ %d \n",reajuste);
	return 0;
}
