// Mostly solved. Issues occur when array has two of the same values, and k is meant to be the sum of those two values.

const array = [7, 12, 8, 4];
const k = 16;

console.log(test_target(array, k));

function test_target(array, k)
{
    for (let i = 0; i < array.length; i++)
    {
        temp = array.slice(i, i + 1);
        mover = temp[0];

        for (let j = 0; j < array.length; j++)
        {
            if (mover !== array[j])
            {
                if (mover + array[j] === k)
                {
                    return true;
                }
            }
        }
    }

    return false;
}