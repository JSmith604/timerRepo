const timer = () => {
  const numbers = process.argv.slice(2);
  console.log(numbers);
  if (numbers.length < 1) {
    console.log("Please enter a number");
    return;
  }
  for (let num of numbers) {
    if (num < 0) {
      continue;
    } if (isNaN(num)) {
      continue;
    } else {
      setTimeout(() =>
        process.stdout.write('\x07'), num * 1000);
    }
  }
};

timer();
  