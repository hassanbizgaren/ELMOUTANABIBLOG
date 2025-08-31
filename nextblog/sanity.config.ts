import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'nextBlog',

  projectId: 'tvfzk6e6',
  dataset: 'nextblog',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
