#!/bin/python3

import os
import sys

#
# Complete the getMoneySpent function below.
#
def getMoneySpent(keyboards, drives, b):
    if min(keyboards) + min(drives) > b:
        return -1
    maxSpending = 0
    for index in range(len(keyboards)):
        for driveInd in range(len(drives)):
            localMax = drives[driveInd] + keyboards[index]
            if localMax <= b:
                if maxSpending < localMax:
                    maxSpending = localMax
    return maxSpending

if __name__ == '__main__':
    bnm = input().split()

    b = int(bnm[0])

    n = int(bnm[1])

    m = int(bnm[2])

    keyboards = list(map(int, input().rstrip().split()))

    drives = list(map(int, input().rstrip().split()))

    #
    # The maximum amount of money she can spend on a keyboard and USB drive, or -1 if she can't purchase both items
    #

    moneySpent = getMoneySpent(keyboards, drives, b)

    print(str(moneySpent) + '\n')
