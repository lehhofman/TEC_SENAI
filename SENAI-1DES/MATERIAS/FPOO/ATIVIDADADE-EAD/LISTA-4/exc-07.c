#include <stdio.h>

int main() {
	
    int a;
    int b;
    int c;
    int d;
    int e;

    printf("Digite um numero inteiros:");
    scanf("%d", &a);
	
	printf("Digite um numero inteiros:");
    scanf("%d", &b);
    
    printf("Digite um numero inteiros:");
    scanf("%d", &c);
    
    printf("Digite um numero inteiros:");
    scanf("%d", &d);
    
    printf("Digite um numero inteiros:");
    scanf("%d", &e);
    
    if (a > b) {
    	
        int temp = a;
        a = b;
        b = temp;
    }
    if (b > c) {
        int temp = b;
        b = c;
        c = temp;
    }
    if (c > d) {
        int temp = c;
        c = d;
        d = temp;
    }
    if (d > e) {
        int temp = d;
        d = e;
        e = temp;
    }
    if (a > b) {
        int temp = a;
        a = b;
        b = temp;
    }
    if (b > c) {
        int temp = b;
        b = c;
        c = temp;
    }
    if (c > d) {
        int temp = c;
        c = d;
        d = temp;
    }
    if (a > b) {
        int temp = a;
        a = b;
        b = temp;
    }
    if (b > c) {
        int temp = b;
        b = c;
        c = temp;
    }
    if (a > b) {
        int temp = a;
        a = b;
        b = temp;
    }

    printf("ordem crescente: %d %d %d %d %d\n", a, b, c, d, e);

    return 0;
}
