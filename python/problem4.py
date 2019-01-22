# First problem implemented in python

def cons(a, b):
        def pair(f):
            return f(a, b)
        return pair

print(cons(1, 2))
