const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function doMining(){
  while (true) {
    this.console.log("Do mining, but it not implemented yet.");
    await sleep(1000);
  }
}

self.addEventListener("message", function (e) {
    const data = e.data;
    const cmd = data.cmd;
    if(cmd === "start"){
      doMining();
    }
  },
  false
);