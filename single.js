function fibonacci(n) {
  if (n <= 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}
const doFib = (iterations) =>
  new Promise((resolve) => {
    const start = Date.now();
    const result = fibonacci(iterations);
    console.log(`doFib done in : ${Date.now() - start}ms`);
    resolve(result);
  });
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
