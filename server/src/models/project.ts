export type Project = {
  id: string
  title: string
  summary: string
  description: string
  tags: string[]
  year: number
  status: 'ACTIVE' | 'STANDBY'
  schematicLabel: string
  schematic: string
  pid: string
  mode: string
  url?: string
}
