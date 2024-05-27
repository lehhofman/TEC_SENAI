#include <stdio.h>

int media (int a, int b, int c) {
	
	return (a + b + c) / 3;
	
}

int main () {
	
	int x = media (10, 5, 10);
	
	printf("A media sera = %d", x);
	
	return 0;
}
