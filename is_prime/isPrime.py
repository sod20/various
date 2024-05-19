def isPrime(n):
    if (n < 0):
        return False
    if (n<=3):
        return True
    divisor = 2
    while(divisor**2 < n):
        if (n % divisor == 0):
            return False
        divisor+=1
    return True


print(isPrime(45))
print(isPrime(11))
print(isPrime(31531))
print(isPrime(556))