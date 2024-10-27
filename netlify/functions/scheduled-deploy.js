const fetch = require('node-fetch')
import { schedule } from '@netlify/functions'

// This is sample build hook
const BUILD_HOOK = 'https://api.netlify.com/build_hooks/671e401adecd37614c35b723'

// Schedules the handler function to run at midnight on
// Mondays, Wednesday, and Friday
const handler = schedule('0 0 * * 1,3,5', async () => {
  await fetch(BUILD_HOOK, {
    method: 'POST'
  }).then(response => {
    console.log('Build hook response:', response)
  })

  return {
    statusCode: 200
  }
})

export { handler }