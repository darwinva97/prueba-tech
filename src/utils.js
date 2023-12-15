const wait = (seconds = 1) =>
  new Promise((resolve) => setTimeout(resolve, seconds * 1000));

/**
 *
 * @param {number} i
 * @param {number} total
 * @param {() => Promise<void> } processToExecute
 * @param {() => Promise<void>} callbackResult
 * @returns
 */
const asyncLoop = async (i, total, processToExecute, callbackResult) => {
  if (i <= total) {
    if (i === 1) await wait();
    const [success, result] = await processToExecute();
    await callbackResult(result);
    return await asyncLoop(success ? i + 1 : i, total, processToExecute, callbackResult);
  } else {
    return Promise.resolve();
  }
};

module.exports = {
  asyncLoop,
};
