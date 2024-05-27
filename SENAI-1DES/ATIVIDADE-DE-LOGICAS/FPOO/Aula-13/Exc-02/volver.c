#include <stdio.h>
#include <locale.h>

char posicao(char comandos[], int N) {
    char sentido = 'N';

    int i;

    for (i = 0; i < N; i++) {

        if (comandos[i] == 'E') {

            if (sentido == 'N') {
                sentido = 'O';

            } else if (sentido == 'O') {
                sentido = 'S';

            } else if (sentido == 'S') {
                sentido = 'L';

            } else if (sentido == 'L') {
                sentido = 'N';

            }
        } else if (comandos[i] == 'D') {

            if (sentido == 'N') {
                sentido = 'L';

            } else if (sentido == 'L') {
                sentido = 'S';

            } else if (sentido == 'S') {
                sentido = 'O';

            } else if (sentido == 'O') {
                sentido = 'N';

            }

        }

    }

    return sentido;
}

int main() {
    setlocale(LC_ALL, " ");

    int N;
    char comandos[1001];

    FILE *entrada = fopen("esquerda.in", "r");

    if (entrada == NULL) {

        printf("Erro ao abrir o arquivo");

    }

    FILE *saida = fopen("esquerda.out", "w");

    if (saida == NULL) {

        printf("Erro ao abrir o arquivo");

        fclose(entrada);

    }

    while (1) {

        fscanf(entrada, "%d", &N);

        if (N == 0) {

            break;

        }

        fscanf(entrada, "%s", comandos);

        char PosicaoFinal = posicao(comandos, N);

        fprintf(saida, "\n %c \n", PosicaoFinal);

    }

    fclose(entrada);
    fclose(saida);

    return 0;
}
