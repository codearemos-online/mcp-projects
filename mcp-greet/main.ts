import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from 'zod';


const server = new McpServer({
    name: 'Greeting-MCP',
    version: '1.0.0'
})

server.tool(
    "MCP-Greet",
    "say hello",
    {
        name:z.string() 
    },
    async ({name}) => ({
        content:[{
            type:"text",
            text:`Hello ${name} vamos a aprender a usar MCP`
        }]
    })
);

const transport = new StdioServerTransport();

async function main() {
    await server.connect(transport);
}

main().catch(console.error);
 