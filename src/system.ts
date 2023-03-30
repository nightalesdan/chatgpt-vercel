import type { Model } from "./types"

export const defaultSetting = {
  continuousDialogue: true,
  archiveSession: false,
  openaiAPIKey: "",
  openaiAPITemperature: 60,
  password: "",
  systemRule: "",
  model: "gpt-3.5-turbo" as Model
}

export const defaultMessage = `- [玩赚 AI 学院](https://t.zsxq.com/0csZhQoAQ) 内部专享，可免费使用
- 基于 [OpenAI(gpt-3.5-turbo)](https://platform.openai.com/docs/guides/chat) 部署, [GPT-4](https://openai.com/product/gpt-4) 优化，提问前按下 [[空格]] 选择人物预设。出现 [[error]] 请点右下角清空对话。`

export type Setting = typeof defaultSetting

export const defaultResetContinuousDialogue = false

export const defaultMaxInputTokens: Record<Model, number> = {
  "gpt-3.5-turbo": 3072,
  "gpt-4": 6144,
  "gpt-4-32k": 24576
}

export const defaultModel: Model = "gpt-3.5-turbo"
