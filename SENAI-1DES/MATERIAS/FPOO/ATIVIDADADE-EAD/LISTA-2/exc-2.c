#include <stdio.h>

int main() {
	
    float salario;
	float salario_final
    int filhos;
   
    printf("Digite o salario do funcionario: ");
    scanf("%f", &salario);

    printf("Digite o numero de filhos: ");
    scanf("%d", &filhos);
    
    if (salario < 2000) {
    	
        salario_final = salario + (45 * filhos);
        
        printf("O salario final = R$ %.2f\n", salario_final);
        
    } else {
    	
        salario_final = salario;
        
        printf("O salario final = R$ %.2f\n", salario_final);
        
    }

    return 0;
}
