// Copyright 2024 Google LLC

// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at

//     https://www.apache.org/licenses/LICENSE-2.0

// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

export default {
  'A/V キャプション': {
  // 'A/V captions': {
    emoji: '👀',
    prompt: `このビデオの各シーンに対して、シーンを説明するキャプションを生成し、発話されたテキストは引用符で囲んで記載してください。
    各キャプションをset_timecodesに送信されるオブジェクトに配置し、ビデオ内のキャプションのタイムコードも含めてください。`,
    isList: true
  },

  '要約': {
  // Paragraph: {
    emoji: '📝',
    prompt: `このビデオを要約する段落を生成してください。3〜5文に収めてください。\
    要約の各文を、ビデオ内のその文のタイムコードとともに、set_timecodesに送信されるオブジェクトに配置してください。`
  },

  '重要な瞬間の抽出': {
  // 'Key moments': {
    emoji: '🔑',
    prompt: `ビデオの箇条書きを生成してください。各箇条書き項目を、ビデオ内のその項目のタイムコードとともに、set_timecodesに送信されるオブジェクトに配置してください。`,
    isList: true
  },

  // Table: {
  '表形式': {
    emoji: '🤓',
    prompt: `このビデオから5つの重要なショットを選び、set_timecodes_with_objectsを呼び出してください。\
    その際、タイムコード、10語以内のテキスト説明、およびシーンに見える物体のリスト（代表的な絵文字付き）を含めてください。`
  },

  '俳句': {
  // Haiku: {
    emoji: '🌸',
    prompt: `ビデオのための俳句を生成してください。\
    俳句の各行を、ビデオ内のその行のタイムコードとともに、set_timecodesに送信されるオブジェクトに配置してください。必ず俳句のルール「五七五」に従ってください。`
  },

　Chart: {
    emoji: '📈',
    prompt: input =>
      `ビデオのためのチャートデータを以下の指示に基づいて生成してください： \
${input}。 データ値とタイムコードのリストを使用して、set_timecodes_with_numeric_valuesを一度呼び出してください。`,
    subModes: {
      '興奮度':
      // Excitement:
        '各シーンに対して、興奮度を1から10のスケールで推定してください。',
      '重要性':
      // Importance:
        '各シーンに対して、ビデオ全体における重要度を1から10のスケールで推定してください。',
      '人数': 
      // 'Number of people': 
        '各シーンで、視認できる人数を数えてください。'
    }
  },

  Custom: {
    emoji: '🔧',
    prompt: input =>
      `以下の指示を使用して、set_timecodesを一度呼び出してください。: ${input}`,
    isList: true
  }
}
