import type { Block } from "./_parse";
import type { ResolvedConfig } from "./config";

export interface GenerateContext {
  args: Record<string, any>;
  config: ResolvedConfig;
  block: Block;
  transform: (contents: string) => Promise<GenerateResult>;
}

export interface GenerateResult {
  contents: string;
  issues?: string[];
  unwrap?: boolean;
}

export interface Generator {
  name: string;
  generate: (ctx: GenerateContext) => GenerateResult | Promise<GenerateResult>;
}

/**
 * @internal
 */
export function defineGenerator(generator: Generator) {
  return generator;
}
