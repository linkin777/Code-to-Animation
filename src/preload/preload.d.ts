declare global {
  interface Window {
    api: {
      openFile: (filter?: { extensions: string[] }) => Promise<string>
      parseCode: (content: string) => Promise<{
        assignments: any[]
        depthMap: Map<number, number>
        executionTimeline: Array<{step: number, type: string, data: any}>
      }>
    }
  }
}

export {};