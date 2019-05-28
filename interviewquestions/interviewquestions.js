// Function to find the number of ways to partition the number n using
//  partitions from the partition set parts using Dynamic Programming
function partition(n, parts) {
  // Structure to hold recursive data
  let data = [];

  // Loop through all of the parts available to partition n
  for (let part = 0; part < parts.length + 1; ++part) {
    // Build the array as entries are used
    data.push([]);

    // Loop through ways to make smaller numbers m up to n (inclusive)
    for (let m = 0; m < n + 1; ++m) {
      // Initializing data to zeros
      data[part].push(0);

      // data[0] is placeholder for base case
      if (part == 0) {
        // No logic for base case
        continue;
      }

      // The partition is too big for m
      if (parts[part - 1] > m) {
        // Can only partition using smaller parts
        data[part][m] = data[part - 1][m];

      // The partition is just the right size
      } else if (parts[part - 1] == m) {
        // Can partition once with part but also with smaller parts
        data[part][m] = 1 + data[part - 1][m];
      
      // The partition is smaller than m
      } else if (parts[part - 1] < m) {
        // The partition can be used once (or more) but also with smaller parts
        data[part][m] = data[part - 1][m] + data[part][m - parts[part - 1]];
      }
    }
  }

  // The last entry in the matrix is partitioning n with parts
  return data[data.length - 1][data[0].length - 1];
}

let ops = ['+', '-', '']

// Function to recursively calculate evaluations of strings with the numbers
//  1-9 with operations from ops
function recurse(expr, evaluate_to) {
  // Try each operation
  for (let op in ops) {
    // Calculate what the last number used was
    let last_num = Number(expr[expr.length - 1]);

    // Add the operation to the stack
    expr.push(ops[op]);

    // Add the next number to the stack
    expr.push((last_num + 1).toString());

    // If the number 9 was added (the last number),
    //  evaluate and store the information
    if (last_num == 8) {
      // Calculate the value by formatting expr nicely for eval
      let value = eval(expr.join().replace(/,/g, ''));

      // See if the evaluation is already in evaluate_to,
      //  if not, initialize to 0 (the number of evaluations)
      if (!(value in evaluate_to)) {
        evaluate_to[value] = 0;
      }

      // The number of times value has been evaluated to is one more
      evaluate_to[value] += 1;

    // Go to the next number
    } else {
      recurse(expr, evaluate_to);
    }

    // Undo the last number
    expr.pop();

    // Undo the last operation
    expr.pop();
  }
}

// Make change for $5.00 using various coins
partition(500, [1, 2, 5, 10, 20, 50, 100, 200]);

// Evaluation dictionary holding number evaluated to
//  and the number of times it was evaluated to
let evaluate_to = {};

// Fill in the dictionary
recurse(['1'], evaluate_to);

// Convert evaluate_to to a list
let list = Object.keys(evaluate_to).map(function (key) {
  return [key, evaluate_to[key]];
});

// Sort this found list based on the number of times
//  the number (first component of each item) was
//  evaluated to by an expression
list.sort(function (first, second) {
  return second[1] - first[1];
});
