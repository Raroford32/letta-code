import { describe, expect, test } from "bun:test";
import { buildModelSettingsForTest } from "../../agent/modify";
import { getModelUpdateArgs, resolveModel } from "../../agent/model";

describe("OpenRouter model settings", () => {
  test("gpt-5.2 via OpenRouter uses high reasoning effort", () => {
    const handle = resolveModel("openrouter-gpt-5.2-high");
    expect(handle).toBe("openrouter/openai/gpt-5.2");

    const updateArgs = getModelUpdateArgs("openrouter-gpt-5.2-high");
    expect(updateArgs).toBeDefined();

    const settings = buildModelSettingsForTest(handle as string, updateArgs);
    expect(settings).toEqual({
      provider_type: "openai",
      parallel_tool_calls: true,
      reasoning: { reasoning_effort: "high" },
      max_output_tokens: 128000,
    });
  });
});
