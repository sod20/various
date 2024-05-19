
def get_roman(dec_value):
    rom_number = ""
    sym = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"]
    num = [1000,900,500,400,100,90,50,40,10,9,5,4,1]
    index = 0
    while dec_value:
        div = dec_value // num[index]
        dec_value %= num[index]
        rom_number = rom_number + sym[index]*div
        index+=1
    return rom_number

decimal_number = int(input("Enter decimal value: "))

print("Roman value: " + get_roman(decimal_number))