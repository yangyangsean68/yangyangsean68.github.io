/** ASCII progress bar used by the About skill matrix. */
export function asciiBar(percent: number, width = 10) {
  const filled = Math.max(0, Math.min(width, Math.round((percent / 100) * width)))
  return `[${'|'.repeat(filled)}${'.'.repeat(width - filled)}]`
}
