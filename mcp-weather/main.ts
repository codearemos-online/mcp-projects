import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from 'zod';

const server = new McpServer({
    name: "Weather-MCP",
    version: "1.0.0"
})


server.tool(
    "MCP-Weather",
    "Get the weather for a given city",
    {
        city: z.string()
    },
    async ({city}) => ({
        content:[{
            type:"text",
            text: `The weather in ${city} is sunny`
        }]
    })
)

const transport = new StdioServerTransport();

async function main() {
    await server.connect(transport);
}

main();


