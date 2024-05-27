#include <stdio.h>
int main() {
    char time;
    int vitorias;
	int empates;
    int pontos = (vitorias * 3) + empates;
    printf("Digite o nome do time: ");
    scanf("%s", &time);
    printf("Digite o numero de vitorias:");
    scanf("%d", &vitorias);
    printf("Digite o numero de empates:");
    scanf("%d", &empates);
    pontos = (vitorias * 3) + empates;
    printf("Total de pontos: %d",pontos);
    return 0;
}


