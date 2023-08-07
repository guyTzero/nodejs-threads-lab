const { workerData, parentPort } = require("worker_threads");
function fibonacci(n) {
  if (n <= 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}
const result = fibonacci(workerData.iterations);
parentPort.postMessage(result);
