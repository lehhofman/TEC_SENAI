#include <stdio.h>
#include <string.h>

int main(){
	
	int doador;
	
	printf("Digite o total de doadores:");
	scanf("%d",&doador);
	
	char nome[doador][15];
	int idade[doador];
	char sexo[doador];
	int dias[doador];
	char status[doador][7];
	int i = 0;

	for(i = 0; i < doador; i++){
		
	printf("nome:");
	scanf("%s", &nome[i]);
	
	printf("idade:");
	scanf("%d", &idade[i]);
	
	printf("sexo 'M' ou 'F'");
	scanf("%s", &sexo[i]);
	
	printf("dias desde a ultima doaçao:");
	scanf("%d", &dias[i]);
		
		if(idade[i] >= 16 && idade[i] <= 69 && sexo[i] == 'M' && dias[i] > 60)
		
			strcpy(status[i],"Apto");
			
		else if(idade[i] >= 16 && idade[i] <= 69 && sexo[i] == 'F' && dias[i] > 90)
		
			strcpy(status[i],"Apto");
			
		else
		
			strcpy(status[i],"Inapto");
			
	}
	
	printf("Nome \t Status \n");
	
	for(i = 0; i < doador; i++){
		
		printf("%s \t %s \n", nome[i], status[i]);	
		
	}
	
	return 0;
}
