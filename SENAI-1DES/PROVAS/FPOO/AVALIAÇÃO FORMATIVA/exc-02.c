#include <stdio.h>
#include <string.h>

int main(){

	char cidade[20];
	int votos;
	
	printf("cidade: ");
	scanf("%s", &cidade);
	
	printf("quantidade: ");
	scanf("%d", &votos);
	
	char nome[votos][20];
	int voto[votos];
	float porcentagens[votos];
	int branco;
	int nulos;
	int i;
	float validos;
	float brancos;
	int primeiro;
	
	for(i = 0; i < votos; i++){
		
		printf("nome:");
		scanf("%s", &nome[i]);
		
		printf("votos:");
		scanf("%d", &voto[i]);
		
		validos += voto[i];
		
		if(primeiro < voto[i]){
			
			primeiro = i;
			primeiro = voto[i];
			
		}
	}
	printf("total de votos Brancos: ");
	
	scanf("%d", &branco);
	
	validos += branco;
	
	printf("total de votos Nulos: ");
	scanf("%d", &nulos);
	
	if(validos > nulos){
		
		printf("eleição Valida\n");
		printf("votos validos %.1f:\n",validos);
		printf("votos invalidos %.1f:\n",nulos);
		
		printf("Candidato \t Porcentagem:\n");
		
		for(i = 0; i < votos; i++){
			
			porcentagens[i] = voto[i] / validos * 100.0;
			
			printf("%s \t %.1f %% \n", nome[i], porcentagens[i]);
		}
		
		brancos = branco / validos * 100.0;
		
		printf("brancos \t %.1f %% \n", brancos);
		
		if(validos + nulos < 20000){
			
			printf("%s eleito", nome);	
		
		}else
		
			printf("eleicao Invalida");
			
	
	return 0;
}

}
