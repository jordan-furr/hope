import '../styles/page.css'
import { getQuotes } from '@/sanity/lib/queries'

export default async function InspirationPage() {
  const quotes = await getQuotes()

  return (
    <div className='page evergreen'>
      <div className='line'></div>
      <div className='pageContent'>
        <div className='pageTitle'>
          <h1>Inspiration</h1>
        </div>
        <div className='mt3 mb5 margin-a'>
          <p className='mb6'>
            Here you'll find voices that speak to nature's wisdom, the practice of regeneration,
            and the infinite game of becoming.
          </p>
          {quotes.length === 0 ? (
            <p>Nothing here yet.</p>
          ) : (
            quotes.map((quote) => (
              <div key={quote._id} className='mb6'>
                <p className='mb2 bold attribution'>{quote.attribution}</p>
                <p className='mb5'>{quote.quoteText}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  )
}