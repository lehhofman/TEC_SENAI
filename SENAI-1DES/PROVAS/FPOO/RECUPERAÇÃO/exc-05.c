#include <stdio.h>

int main() {

    float distancia;
	float tempo;
	float media;

    printf("Digite a distancia entre as duas cidades: ");
    scanf("%f", &distancia);

    printf("Digite o tempo para percorrer essa distancia: ");
    scanf("%f", &tempo);

    media = distancia / tempo;

    printf(" \n A velocidade media do veiculo foi de %.2f km/h \n", media);

    return 0;
}
