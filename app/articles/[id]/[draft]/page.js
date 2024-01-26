import { Metadata } from 'next'
import { meta, articlePage } from '../../article.js'

export async function generateMetadata({ params }) {
  return await meta('https://tkbutsuribu.microcms.io/api/v1/articles/' + params.id + '?draftKey=' + params.draft, 0)
}

export default async function Page({ params }) {
  return await articlePage('https://tkbutsuribu.microcms.io/api/v1/articles/' + params.id + '?draftKey=' + params.draft, 0)
}