let spinnerChars = ["|", "/", "-", "\\", "|", "/", "-", "\\", "|"];
let timeIncreaser = 100;
spinnerChars.forEach((e, i) => {
  if (i < spinnerChars.length) {
    setTimeout(() => {
      process.stdout.write(`\r${e}   `);
      if (i === spinnerChars.length - 1) process.stdout.write("\n")
    }, (i * 100) + timeIncreaser);
    timeIncreaser += 100;
  }
});