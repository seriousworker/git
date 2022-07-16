def count(number: int) -> int:
    result = 0

    for elem in number:
        result += int(elem)

    return result 



def calc(x):
    total1 = ''.join([str(ord(i)) for i in x])
    total2 = total1.replace('7', '1')
    
    return count(total1) - count(total2)

print(calc('abcdef'))
print(calc('ifkhchlhfd'))
print(calc('aaaaaddddr'))
print(calc('jfmgklf8hglbe'))
print(calc('jaam'))
    
