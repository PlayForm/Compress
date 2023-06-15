#!/usr/bin/env node

import { Command } from "commander";
import compress from "./command/compress.js";

const program = new Command();

program
	.command("compress")
	.description("Compress files")
	.argument("<files...>", "Scripts to build")
	.option("-c, --config <file>", "ESBuild config file")
	.action(compress);

program.parse();