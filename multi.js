const { Worker } = require("worker_threads");
const doFib = (iterations) => {
  return new Promise((resolve) => {
    const start = Date.now();
    const worker = new Worker("./worker.js", {
      workerData: {
        iterations,
      },
    });

    worker.once("message", (data) => {
      console.log(
        `worker [${worker.threadId}]: done in ${Date.now() - start} ms`
      );
      resolve(data);
    });
    worker.once("error", (err) => reject(err));
  });
};
const main = async () => {
  const start = Date.now();
  const values = await Promise.all([
    doFib(40),
    doFib(40),
    doFib(40),
    doFib(40),
    doFib(40),
    doFib(40),
    doFib(40),
    doFib(40),
    doFib(40),
    doFib(40),
  ]);
  console.log("values", values);
  console.log(`ALl done in : ${Date.now() - start}ms`);
};
main().catch(console.error);
