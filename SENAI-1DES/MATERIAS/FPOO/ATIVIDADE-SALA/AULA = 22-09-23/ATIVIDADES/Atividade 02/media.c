#include <stdio.h>
#include <locale.h>

int main(){
	setlocale(LC_ALL,"");
	
	FILE *dados, *resultado;
	char str[80];
	char *nome;
	int n1, n2, n3, n4, n5, n6, n7, n8, n9, n10;
	float medias;
	
	dados = fopen ("dados.txt", "r");
	
	if(dados == NULL)
	
		printf("Erro, não foi possivel abrir o arquivo\n");
		
	else{
		
		resultado = fopen("resultado.txt","w");
		
		while((fgets(str, 80, dados)) != NULL){
			
			nome = strtok(str," ");
			
			n1 = atoi(strtok(NULL," "));
			n2 = atoi(strtok(NULL," "));
			n3 = atoi(strtok(NULL," "));
			n4 = atoi(strtok(NULL," "));
			n5 = atoi(strtok(NULL," "));
			n6 = atoi(strtok(NULL," "));
			n7 = atoi(strtok(NULL," "));
			n8 = atoi(strtok(NULL," "));
			n9 = atoi(strtok(NULL," "));
			n10 = atoi(strtok(NULL," "));
			
			medias = ( n1 + n2 + n3 + n4 + n5 + n6 + n7 + n8 + n9 + n10)/10.0;
			
			printf("a média dos %s: %d + %d + %d + %d + %d + %d + %d + %d + %d + %d = %.1f\n", nome, n1, n2, n3, n4, n5, n6, n7, n8, n9, n10, medias);

			if(medias >= 0)
			
			fprintf(resultado, "A média dos %s: %d + %d + %d + %d + %d + %d + %d + %d + %d + %d = %.1f \n", nome, n1, n2, n3, n4, n5, n6, n7, n8, n9, n10, medias);

		}
		
		fclose(resultado);
		
	}
	
	fclose(dados);
	
	return 0;
}
