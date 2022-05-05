async function getProcessedData(url) {
  var download = await downloadData(url) // returns a promise
  return download
    .catch(e => {
      return downloadFallbackData(url)  // returns a promise
    })
    .then(v => {
      return processDataInWorker(v); // returns a promise
    });
}