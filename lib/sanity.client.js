import { createClient } from 'next-sanity'
import { projectId, dataset, apiVersion, useCdn } from './sanity.config'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn,
})
