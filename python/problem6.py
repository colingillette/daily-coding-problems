# Assumptions: All values are positive dollar values like a stock would be in normal circumstances

def max_value(prices):
    maximum = 0
    unpassed = prices

    for i in range(len(prices)):
        unpassed.remove(prices[i] - 1)
        for j in range(len(unpassed)):
            if unpassed[j] - prices[i] > maximum:
                maximum = unpassed[j] - prices[i]

max_value([9, 11, 8, 5, 7, 10])