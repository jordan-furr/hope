import '../styles/page.css'
import '../styles/globals.css'
import Link from "next/link";
import { sanityFetch } from "@/sanity/lib/live";
import { POSTS_QUERY } from "@/sanity/lib/queries";

const options = { next: { revalidate: 60 } };


export default async function ContactPage() {
    const { data: posts } = await sanityFetch({query: POSTS_QUERY});
    return (
        <div className='page'>
            <div className='line'></div>
            <div className='pageContent'>
                <div className='pageTitle'>
                    <h1>Journal</h1>
                </div>
                <div className='mt3'>
                    <div>
                        <ul>
                            {posts.map((post) => (
                                <li key={post._id}>
                                    <Link
                                        className="postTitle"
                                        href={`/posts/${post?.slug?.current}`}
                                    >
                                        <div className='flex-row space-between w-100'>
                                            <p>{post?.title}</p>
                                            <p>{post?.publishedAt &&
                                                new Date(post.publishedAt).toLocaleDateString("en-US", {
                                                    year: "numeric",
                                                    month: "long",
                                                    day: "numeric",
                                                })}</p>
                                        </div>
                                    </Link>
                                    <hr className='post-hr' />
                                </li>
                            ))}
                        </ul>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}