import { sanityFetch } from "@/sanity/lib/live";
import { POST_QUERY } from "@/sanity/lib/queries";
import { notFound } from "next/navigation";
import Link from "next/link";


export default async function Page({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { data: post } = await sanityFetch({
        query: POST_QUERY,
        params: await params,
    });

    if (!post) {
        notFound();
    }
    return (
        <div className="page">
            <div className="line"></div>
            <div className="pageContent">
                <h1 className="postTitlePage">{post?.title}</h1>
                <hr className='postPage-hr' />
                <Link href="/posts">&larr; Return</Link>
            </div>

        </div>

    );
}