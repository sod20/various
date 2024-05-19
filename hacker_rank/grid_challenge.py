#!/bin/python3

import math
import os
import random
import re
import sys

#
# Complete the 'gridChallenge' function below.
#
# The function is expected to return a STRING.
# The function accepts STRING_ARRAY grid as parameter.
#

def gridChallenge(grid):
    isSorted=True
    colReview = 0
    for row in range(len(grid[colReview])):
        lastView = 0
        for col in range(len(grid)):
            check = ord(grid[col][row])
            if lastView > check:
                isSorted = False
                break
            lastView = check
    if isSorted:
        return "YES"
    return "NO"
        

if __name__ == '__main__':
    letters = ['abcde','fghij','klmno','pqrst']
    grid=[]
    for i in range(len(letters)):
        grid.append(sorted(letters[i]))
    print(grid)
    result = gridChallenge(grid)

    print(result)
