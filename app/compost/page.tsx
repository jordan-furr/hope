import '../styles/page.css'
import Image from 'next/image'
import { getPosts } from '@/sanity/lib/queries'

export default async function CompostPage() {
  const posts = await getPosts()

  return (
    <div className='page evergreen'>
      <div className='line'></div>
      <div className='pageContent'>
        <div className='pageTitle'>
          <h1>Compost</h1>
        </div>
        <div className='mt3 mb5 margin-a postsContainer'>
          {posts.length === 0 ? (
            <p>Nothing here yet.</p>
          ) : (
            posts.map((post) => (
              <div key={post._id} className='mb6'>
                {post.mainImage?.asset?.url && (
                  <Image
                    src={post.mainImage.asset.url}
                    alt={post.mainImage.alt || ''}
                    width={800}
                    height={500}
                    style={{ width: '100%', height: 'auto', marginBottom: '1rem' }}
                  />
                )}
                {post.title && <p className='mb2 bold'>{post.title}</p>}
                {post.publishedAt && (
                  <p className='mt1 mb3' style={{ opacity: 0.5, fontSize: '0.85em' }}>
                    {new Date(post.publishedAt).toLocaleDateString('en-GB', {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric',
                    })}
                  </p>
                )}
                {post.body && <p>{post.body}</p>}
                
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  )
}