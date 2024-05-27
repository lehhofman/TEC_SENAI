#include <stdio.h>

int main (){
	
	int tempo, segundos, minutos ,horas;
	
	printf("Digite o tempo em segundos");
	scanf("%d", &tempo);
	
	horas = tempo / 3600;
	tempo = tempo % 3600; // mostra o resto da divisão!
	minutos = tempo / 60;
	segundos = tempo % 60;
	
	printf("O tempo e de: %02d : %02d : %02d", horas, minutos, segundos); 
	
									// O 02 é a quantidade de casas que deseja mostrar!
	
	return 0;
}
