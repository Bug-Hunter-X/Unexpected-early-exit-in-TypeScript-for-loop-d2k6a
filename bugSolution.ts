function printNumbers(n: number): void {
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
}

printNumbers(5); // this works fine

function printNumbers2(n: number): void {
  for (let i = 1; i <= n; i++) {
    console.log(i);
    if (i === 3) break; // use break instead of return
  }
}

printNumbers2(5); // this prints 1,2,3 as expected

//Alternative Solution using while loop:

function printNumbers3(n: number): void {
  let i = 1;
  while(i <= n) {
    console.log(i);
    if (i === 3) break;
    i++;
  }
}

printNumbers3(5); // this also prints 1,2,3 as expected