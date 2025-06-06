import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { z } from 'zod';


const server = new McpServer({
    name: 'Greeting-MCP',
    version: '1.0.0'
})

server.tool(
    "MCP - greet",
    "say hello",
    {
        name:z.string() 
    },
    async ({name}) => ({
        content:[{
            type:"text",
            text:`Hello ${name}`
        }]
    })
);