import http from 'http'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const DATA_FILE = path.join(__dirname, 'plan.json')
const PORT = 3001

function readPlan() {
  try { return fs.readFileSync(DATA_FILE, 'utf8') } catch (e) { return null }
}

const server = http.createServer((req, res) => {
  if (req.url === '/api/plan' && req.method === 'GET') {
    const data = readPlan()
    if (data === null) { res.writeHead(404); res.end(); return }
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(data)
    return
  }
  if (req.url === '/api/plan' && req.method === 'PUT') {
    let body = ''
    req.on('data', chunk => {
      body += chunk
      if (body.length > 2_000_000) req.destroy()
    })
    req.on('end', () => {
      try {
        JSON.parse(body)
        fs.writeFileSync(DATA_FILE, body)
        res.writeHead(200); res.end()
      } catch (e) {
        res.writeHead(400); res.end('invalid json')
      }
    })
    return
  }
  res.writeHead(404); res.end()
})

server.listen(PORT, '127.0.0.1', () => console.log('plan-api listening on ' + PORT))
