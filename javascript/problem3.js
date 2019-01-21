/*
    Base problem: First positive non-zero integer that is not in a given array.
*/

console.log(get_int([ 3, 4, -1, 1 ])); // Expected output is 2
console.log(get_int([ 1, 2, 0 ])); // Expected output is 3
console.log(get_int([ 0, -1, -2, 3 ])); // Expected output is 1
console.log(get_int([ 123, 1, 3, 2, 0, -5, -7, 4 ])); // Expected output is 5

function get_int(input)
{
    let count = 0;
    let done = false;

    while (!done)
    {
        count++;

        if (!input.includes(count))
        {
            done = true;
        }
    }

    return count;
}