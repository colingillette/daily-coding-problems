/*
    Entire Problem solved! The base problem method is used for most cases, but the follow-up question's methodology is used whenever i happens to be zero.
    Both methods could be used entirely, although handling zeros on the base problem's method is more complicated.
    I made a method just for the follow up, I actually find it's algorithm a little less challenging at the end of the day.
    End result should be the same two output arrays.
*/

input = [ 1, 2, 3, 4, 5 ];

console.log(do_thing(input));
console.log(do_only_followup(input));

// Do this problem with division
function do_thing(input)
{
    // Decare out output array
    let output = [];

    // Start a for loop that does this process for each i in input
    for (let i = 0; i < input.length; i++)
    {
        // Set a divisor and a total so that after we go through all elements and multiply, we can eliminate i from our process
        const divisor = input[i];
        let total = 1;

        if (divisor !== 0)
        {
            total = input[0];

            // Multiply each element of the array
            for (let j = 1; j < input.length; j++)
            {
                total *= input[j];
            }

            // Get the answer after removing i
            total /= divisor;
        }
        else
        {
            for (let j = 0; j <input.length; j++)
            {
                if (j !== i)
                {
                    total *= input[j];
                }
            }
        }

        output.push(total);
    }

    return output;
}

function do_only_followup(input)
{
    let output = [];

    for (let i = 0; i < input.length; i++)
    {
        let total = 1;

        for (let j = 0; j <input.length; j++)
        {
            if (j !== i)
            {
                total *= input[j];
            }
        }

        output.push(total);
    }

    return output;
}