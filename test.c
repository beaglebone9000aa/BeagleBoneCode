#include<stdio.h>
 
int main(int argc, char *argv[])
{
   int n, i = 3, count, c;
   if ( argc == 1 )
   {
      printf("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!\n");
      printf("!!! You did not enter a valid number as an argument !!! \n");
      printf("!!!!!!!!!!!!!!!!!! Experimental !!!!!!!!!!!!!!!!!!!!!!!\n");
      printf("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!\n");
      return 0;
   }

   n = atoi(argv[1]); 
   //printf("Enter the number of prime numbers required\n");
   //scanf("%d",&n);

   printf("You enterned '%d' \n",n);
   printf("-------------------------");

   if ( n >= 1 )
   {
      printf("First %d prime numbers are :\n",n);
      printf("2\n");
   }
 
   for ( count = 2 ; count <= n ;  )
   {
      for ( c = 2 ; c <= i - 1 ; c++ )
      {
         if ( i%c == 0 )
            break;
      }
      if ( c == i )
      {
         printf("%d\n",i);
         count++;
      }
      i++;
   }         
 
   return 0;
}
