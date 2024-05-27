#include <stdio.h>

int main() {
	
    FILE *entrada = fopen("suco.in", "r");
    FILE *saida = fopen("suco.out", "w");

    if (entrada == NULL || saida == NULL) {
    	
        printf("Erro ao abrir arquivo\n");
    
    }

    while (1) {
    	
        int Amigos, Frutas;
        
        fscanf(entrada, "%d %d", &Amigos, &Frutas);

        if (Amigos == 0 && Frutas == 0) {
        	
            break;
            
        }

        float suco = (float)Frutas / (Amigos * 20.0); 
        
        fprintf(saida, "\n Quantidade de suco: %.2f \n", suco);
    }

    fclose(entrada);
    fclose(saida);

    return 0;
}





