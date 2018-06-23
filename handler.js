'use strict';
const db = require('./src/db')

module.exports.saveClientsReport = (event, context, callback) => {
  const clientReport = event.data
  // Here I can suppose that I received a raw data and I can transform it but to keep it simple
  // I will just save it in my report

  try{
    db.saveClientsReport(clientReport)
  } catch(e) {
    const response = {
      statusCode: 500,
      body: JSON.stringify({
        message: `Error to persist ${JSON.stringify(event.data)}`,
        input: event.data,
      }),
  };

    callback(response, null);
  }

  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: `${JSON.stringify(event.data)} was saved`,
      input: event,
    }),
  };

  callback(null, response);
};
