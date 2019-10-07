# Zach Waite's Question

In class Wednesday we looked at objects and I was surprised that we can't use a collection as an object key. I run into a need to do this from time to time when doing groupby operations for e.g. making a dashboard to present to the user. So I made up a toy example and tried to solve it in JS like I would in Python. It was an interesting exercise, so thought I'd share and see if fellow JS coders could improve on my solution using builtins or even 3rd party libraries that could make the job easier.
The problem definition: **find the total number of letters in the last name of presidents grouped by state and first name**

My benchmark solution (Python):

```python
presidents = [
  {'first_name': 'George', 'last_name': 'Washington', 'state': 'VA'},
  {'first_name': 'John', 'last_name': 'Adams', 'state': 'MA'},
  {'first_name': 'Thomas', 'last_name': 'Jefferson', 'state': 'VA'},
  {'first_name': 'James', 'last_name': 'Madison', 'state': 'VA'},
  {'first_name': 'James', 'last_name': 'Monroe', 'state': 'VA'},
  {'first_name': 'Andrew', 'last_name': 'Jackson', 'state': 'SC'},
]

from collections import defaultdict
from pprint import pprint

output = defaultdict(int)
for pres in presidents:
  output[(pres['state'], pres['first_name'])] += len(pres['last_name'])

pprint(output)
```

Yielding output of:

```python
defaultdict(<class 'int'>,
  {('MA', 'John'): 5,
  ('SC', 'Andrew'): 7,
  ('VA', 'George'): 10,
  ('VA', 'James'): 13,
  ('VA', 'Thomas'): 9})
```

My Javascript solution:

```javascript
let presidents = [
  { first_name: "George", last_name: "Washington", state: "VA" },
  { first_name: "John", last_name: "Adams", state: "MA" },
  { first_name: "Thomas", last_name: "Jefferson", state: "VA" },
  { first_name: "James", last_name: "Madison", state: "VA" },
  { first_name: "James", last_name: "Monroe", state: "VA" },
  { first_name: "Andrew", last_name: "Jackson", state: "SC" }
];

let output = [];
for (let pres of presidents) {
  let match = output.filter(row => {
    return row[0][0] === pres.state && row[0][1] === pres.first_name;
  });
  if (!match.length) {
    output.push([[pres.state, pres.first_name], 0]);
  }
}

for (let key of output) {
  for (let pres of presidents) {
    if (pres.state === key[0][0] && pres.first_name === key[0][1]) {
      key[1] += pres.last_name.length;
    }
  }
}

console.log(output);
```

Yielding output of:

```javascript
[
  [["VA", "George"], 10],
  [["MA", "John"], 5],
  [["VA", "Thomas"], 9],
  [["VA", "James"], 13],
  [["SC", "Andrew"], 7]
];
```

# Kevin Normile's Response

just looking at your code's output now, noticed an error, program is reading both of the James as one and summing the combined total of both their last names to output 13, as well as only displaying a single james rather than two

```javascript
let output = [];
for (let pres of presidents) {
  let match = output.filter(row => {
    return row[0][0] === pres.state && row[0][1] === pres.first_name;
  });
  if (!match.length) {
    output.push([[pres.state, pres.first_name, pres.last_name], 0]);
  }
}
// need to include last name as a test parameter
// since both presidents have JAMES and VA as identical parameters
for (let key of output) {
  for (let pres of presidents) {
    if (
      pres.state === key[0][0] &&
      pres.first_name === key[0][1] &&
      pres.last_name === key[0][2]
    ) {
      key[1] += pres.last_name.length;
    }
  }
}
```

# Matina's Response

If the key does not have to be unique:

```javascript
const output = presidents.map(pres => [
  [pres.state, pres.first_name],
  pres.last_name.length
]);
console.log(output);
```

Which is the same ouptput as Zach's above. But the problem with this is that it doesn't actually group the data. And, as Kevin noticed, we also have the problem that if we group the data, the state and first name combined is not going to be unique. There are two James' in Virgina.

If both keys need to be unique, and we want to combine the length of last names for both James, I would do this:

```javascript
const output = presidents.reduce((acc, pres) => {
  const previousLength =
    acc[pres.state] && acc[pres.state][pres.first_name]
      ? acc[pres.state][pres.first_name]
      : 0;
  acc[pres.state] = {
    ...acc[pres.state],
    [pres.first_name]: previousLength + pres.last_name.length
  };
  return acc;
}, {});
console.log(output);
```

Which outputs:

```javascript
{
  VA: { George: 10, Thomas: 9, James: 13 }, 
  MA: { John: 5 }, 
  SC: { Andrew: 7 }
} 
```

If the state must be unique, but we don't want to combine the lengths of last names, I would do this:

```javascript
const output = presidents.reduce((acc, pres) => {
  acc[pres.state] = [
    ...(acc[pres.state] || []),
    [pres.first_name, pres.last_name.length]
  ];
  return acc;
}, {});
console.log(output);
```

Which outputs:

```javascript
{
  VA: [
    [ 'George', 10 ], 
    [ 'Thomas', 9 ], 
    [ 'James', 7 ], 
    [ 'James', 6 ]
  ], 
  MA: [ [ 'John', 5 ] ], 
  SC: [ [ 'Andrew', 7 ] ]
} 
```
