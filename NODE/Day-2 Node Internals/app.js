console.log("start");

// Low priority code
setTimeout(
  (A = () => {
    console.log("Async Task-1");

    // High priority
    process.nextTick((X = () => console.log("nextTick-2")));
  }),
  0,
);

setTimeout(
  (B = () => {
    console.log("Async Task-2");
  }),
  2000,
);

setImmediate((E = () => console.log("Immediate check task")));

// High Priority
process.nextTick(
  (C = () => {
    console.log("nextTick-1");

    // Low Priority
    setTimeout(
      (Y = () => {
        console.log("Y function");
      }),
      0,
    );
  }),
);

Promise.resolve("Promise pura hua").then((D = (val) => console.log(val)));

console.log("end");
