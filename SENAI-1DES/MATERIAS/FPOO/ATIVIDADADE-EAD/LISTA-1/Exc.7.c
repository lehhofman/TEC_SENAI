#include <stdio.h>
int main() {
    int quantidadealqueires;
	int capacidadecaminhao;
    printf("Digite a quantidade de alqueires da fazenda:");
    scanf("%d", &quantidadealqueires);
    printf("Digite a capacidade do caminhao em toneladas:");
    scanf("%d", &capacidadecaminhao);
    int quantidadelaranjas = quantidadealqueires * 250;
    int numeroviagens = (quantidadelaranjas + capacidadecaminhao - 1) / capacidadecaminhao;
    printf("Serao necessarias quantas viagens de caminhão para transportar toda a colheita: %d \n",numeroviagens);
    return 0;
}
