def count(list_of_numbers: list) -> int:
    summ_of_digits = 0

    for elem in list_of_numbers:
        summ_of_digits += int(elem)

    return summ_of_digits


def compare(left_side: list, right_side: list) -> bool:
    if count(left_side) == count(right_side):
        return True

    else: 
        return False


def luck_check(string):
    try:
        if (len(string) % 2 == 0):
            left_side = list(string)[0 : int(len(string) / 2)]
            right_side = list(string)[int(len(string) / 2) : ]
            return compare(left_side, right_side)

        else:
            left_side = list(string)[0 : int(len(string) / 2)]
            right_side = list(string)[int(len(string) / 2) + 1 : ]
            return compare(left_side, right_side)

    except ValueError:
        print("Invalid error!")



print(luck_check('683000'))