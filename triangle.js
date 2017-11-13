var height;
var base;
var prevLine = 1;
var line = "";

for (height = 0; height < 6; height = height + 1) {
  for (base = prevLine; base < prevLine + 1; base = base + 1) {
    line = line + "#";
  }
  console.log(line);
  prevLine = prevLine + 1;
}
