#include <iostream>
#include <cmath>
int fun(int n) {
    int x = 0;
    int count=0;
    while (n>=(++x)*(++x)){
        x++;
        count++;
    } 
    return count;  
}
int main(){
    std::cout<<fun(100000)<<std::endl;
    return 0;
}