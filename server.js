
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  let envVar = process.env.PRINT_VALUE;
  while(true) {
    console.log(`Microservices rock! ${envVar}`);
    await sleep(5000);
  }
}

main();
