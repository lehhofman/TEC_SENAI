#include <stdio.h>

int main (){
	
	int raio;
	int altura;
	int area;
	int volume;
	int pi = 3;
	
	printf("digite o raio de um cilindro em cm:");
	scanf("%d", &raio);
	
	printf("digite o altura de um cilindro em cm:");
	scanf("%d", &altura);
	
		int arealat = 2 * pi * (raio * altura);
	int areabase = 2 * pi * (raio * raio);
	
	area = arealat + areabase;
	volume = pi * raio * (raio * altura);

	
	printf("a area do cilindro = %d \n",area);
	
	printf("o volume do cilindro = %d \n",volume);
	
	return 0;
}
