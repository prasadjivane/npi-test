#!/usr/bin/env node

const axios = require('axios');
const { Command } = require('commander');

const program = new Command();

program
  .version('1.0.0')
  .description('CLI for testing APIs')
  .requiredOption('-u, --url <url>', 'API URL')
  .requiredOption('-m, --method <method>', 'HTTP Method (GET, POST, PUT, DELETE)')
  .option('-d, --data <data>', 'Request Data')
  .parse(process.argv);

const options = program.opts();
const { url, method, data } = options;

if (!['GET', 'POST', 'PUT', 'DELETE'].includes(method.toUpperCase())) {
  console.error('Invalid HTTP Method.');
  process.exit(1);
}

const startTime = new Date(); // Measure start time

axios({
  method: method.toUpperCase(),
  url,
  data: data ? JSON.parse(data) : undefined,
})
  .then(response => {
    const endTime = new Date(); // Measure end time
    const responseTime = endTime - startTime; // Calculate response time in milliseconds

    console.log('Response Data:', response.data);
    console.log('Status Code:', response.status);
    console.log('Response Time:', responseTime + 'ms');
  })
  .catch(error => {
    if (error.response) {
      console.error('Error:', error.response.data);
      console.error('Status Code:', error.response.status);
    } else if (error.request) {
      console.error('Error:', 'No response received');
    } else {
      console.error('Error:', error.message);
    }
    process.exit(1);
  });
