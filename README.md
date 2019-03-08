# Daily Coding Problems

Below you will find each question that I work on in order. All credit for finding these questions goes to dailycodingproblems.com, which you should definitely subscribe to.

**Note:** These problems are numbered according to the order I did them, not necessarily the order they were distributed.

## Problem 1 - Google

Given a list of numbers and a number k, return whether any two numbers from the list add up to k.

For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.

Bonus: Can you do this in one pass?

> javascript/problem1.js

## Problem 2 - Uber

Given an array of integers, return a new array such that each element at index i of the new array is the product of all the numbers in the original array except the one at i.

For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24]. If our input was [3, 2, 1], the expected output would be [2, 3, 6].

Follow-up: what if you can't use division?

> javascript/problem2.js

## Problem 3 - Stripe

Given an array of integers, find the first missing positive integer in linear time and constant space. In other words, find the lowest positive integer taht does not exist in the array. The array can contain duplicates and negative numbers as well. 

For example, the input [3, 4, -1, 1] should give 2. The input [1, 2, 0] should give 3.

> javascript/problem3.js

## Problem 4 - Jane Street

cons(a, b) constructs a pair, and car(pair) and cdr(pair) returns the first and last element of that pair. For example, car(cons(3, 4)) returns 3, and cdr(cons(3, 4)) returns 4.

Given this implementation of cons:

    def cons(a, b):
        def pair(f):
            return f(a, b)
        return pair

Implement car and cdr.

> python/problem4.py

## Problem 5 - Snapchat

Given an array of time intervals (start, end) for classroom lectures (possibly overlapping), find the minimum number of rooms required.

For example, given [(30, 75), (0, 50), (60, 150)], you should return 2.

> python/problem5.py

## Problem 6 - Facebook

Given a array of numbers representing the stock prices of a company in chronological order, write a function that calculates the maximum profit you could have made from buying and selling that stock once. You must buy before you can sell it.

For example, given [9, 11, 8, 5, 7, 10], you should return 5, since you could buy the stock at 5 dollars and sell it at 10 dollars.

> python/problem6.py