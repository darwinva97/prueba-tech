const express = require("express");
const app = express();
const { PORT, MAX_SALE_TICKETS } = require("./config");
const { processVoucher } = require("./lib");
const { asyncLoop } = require("./utils");

const asyncLoopSave = async (i, total, processToExecute) => {
  const executions = [];
  const addExecutionAndLog = (result) => {
    console.log(result.fileName, result.status);
    executions.push(result);
  };
  await asyncLoop(i, total, processToExecute, addExecutionAndLog);
  return executions;
};

app.get("*", async (_, res) => {
  const startTime = new Date().toLocaleString();
  const results = await asyncLoopSave(1, MAX_SALE_TICKETS, processVoucher);
  const endTime = new Date().toLocaleString()

  const result = {
    startTime,
    results,
    endTime
  }
  res.json(result);
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
