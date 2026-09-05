/** 拼接 className。与 React 无关的纯函数放 utils。 */
export function cn(...parts: Array<string | false | undefined>) {
  return parts.filter(Boolean).join(' ')
}
