def breakingRecords(scores):
    highest = 0
    lowest = 0
    hScore = scores[0]
    lScore = scores[0]
    for i in range(1, len(scores)):
        if scores[i] > hScore:
            highest += 1
            hScore = scores[i]
        elif scores[i] < lScore:
            lowest += 1
            lScore = scores[i]
    return [highest, lowest]

print(breakingRecords([3, 4, 21, 36, 10, 28, 35, 5, 24, 42]))