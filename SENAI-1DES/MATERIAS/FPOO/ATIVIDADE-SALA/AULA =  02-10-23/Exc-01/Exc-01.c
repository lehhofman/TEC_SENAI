#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define SIZE 100

int main() {
	
    FILE *entrada = fopen("entrada.csv", "r");

    if (entrada == NULL) {
    	
        printf("Erro ao abrir o arquivo.\n");
        
        return 1;
    }

    char line[SIZE];

    while (fgets(line, SIZE, entrada) != NULL) {
  
        char *id = strtok(line, ";");
        char *nome = strtok(NULL, ";");
        char *nascimento = strtok(NULL, ";");

        if (id != NULL && nome != NULL && nascimento != NULL) {
        	
            printf("ID: %s \n", id);
            printf("Nome: %s \n", nome);
            printf("Nascimento: %s \n", nascimento);

        }
        
    }

    fclose(entrada);
    return 0;
}
