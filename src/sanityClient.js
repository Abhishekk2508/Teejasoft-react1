import { createClient } from '@sanity/client'

export default createClient({
  projectId: 'jvdvjc2q',   // your correct project ID
  dataset: 'production',  // your correct dataset
  apiVersion: '2023-01-01',
  useCdn: true
})