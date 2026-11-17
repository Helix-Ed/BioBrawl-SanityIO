import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'j0eueaqb',
    dataset: 'production'
  },
  deployment: {
    autoUpdates: true,
  },
})
