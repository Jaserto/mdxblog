import { MDXRemote } from 'next-mdx-remote'
import { getFileBySlug, getFiles } from '../lib/mdx'
import Layout from '../layouts/app-layout'

export default function Post({ source, frontmatter }) {
    return (
    <Layout type="post" metadata={frontmatter}>
        <MDXRemote {...source} />
    </Layout>
   
    )
}

export async function getStaticProps( { params } ) {
    const { source, frontmatter } = await getFileBySlug(params.slug)

    return {
        props: { source, frontmatter }
    }
}

export async function getStaticPaths() {
        const posts = await getFiles();
        const paths = posts.map((post) => ({
            params: { 
                slug: post.replace(/\.mdx/, ""),
            }
        }))

        return {
            paths,
            fallback: false
        }
}