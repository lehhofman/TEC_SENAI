#include <stdio.h>

int main() {
	
    int a;
    int b;
    int i;
        
	printf("Digite um numero: ");
    scanf("%d", &a);
    
    printf("Digite um numero: ");
    scanf("%d", &b);
    
 	for (i = a + 1; i < b; i++) { 
    printf("%d\n", i);
    
	 }
    
    return 0;
}
