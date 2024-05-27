#include <stdio.h>

int main (){
	
	float n1,n2,media;
	
	printf("Digite as duas notas da disciplinas");
	scanf("%f %f", &n1, &n2);
	
	media = (n1 + n2) / 2;
	
	printf("A media do aluno e de: %.2f \n", media);
	
	if(media >= 6){
		
		printf("Voce foi aprovado");
		
	}else{
		
		printf("Voce foi reprovado");
		
	}
	
	return 0;
}
