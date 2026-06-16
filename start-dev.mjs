import { createServer } from './node_modules/vite/dist/node/index.js';
const server = await createServer({
  configFile: new URL('./vite.config.ts', import.meta.url).pathname,
  logLevel: 'info',
});
await server.listen();
const addr = server.httpServer?.address();
process.stdout.write('LISTENING:' + JSON.stringify(addr) + '\n');
process.on('SIGTERM', () => server.close().then(() => process.exit(0)));
process.on('SIGINT', () => server.close().then(() => process.exit(0)));
