#!/bin/python3

import math
import os
import random
import re
import sys

# Complete the divisibleSumPairs function below.
def divisibleSumPairs(n, k, ar):
    divs = 0
    for i in range(n-1):
        print("Cheking " + str(i))
        for j in range(i+1, n):
            print("Checking " + str(ar[i]) + " + " + str(ar[j]))
            if (ar[i] + ar[j]) % k == 0:
                divs += 1
    return divs

if __name__ == '__main__':

    nk = input().split()

    n = int(nk[0])

    k = int(nk[1])

    ar = list(map(int, input().rstrip().split()))

    result = divisibleSumPairs(n, k, ar)

    print(result)
