#include <stdio.h>


	int portas(int n, FILE *saida) {
		
    int i;
    
    fprintf(saida, "\n Portas Abertas \n");
    
    for (i = 1; i * i <= n; i++) {
    	
        fprintf(saida, "\n %d \n ", i * i);
        
    }

}

int main() {
	
    int n;
    
    FILE *entrada = fopen("portas.in", "r");
    FILE *saida = fopen("portas.out", "w");

    while (1) {
    	
        fscanf(entrada, "%d", &n);
        
        if (n == 0) {
        	
            break;
            
        }
        
        portas(n, saida);
    }

    fclose(entrada);
    fclose(saida);

    return 0;
}
