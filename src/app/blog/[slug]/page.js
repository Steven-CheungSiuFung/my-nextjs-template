
// export async function generateStaticParams() {
//     const posts = await fetch('https://.../posts').then((res) => res.json())
   
//     return posts.map((post) => ({
//       slug: post.slug,
//     }))
// }
 
export default async function Page({ params }) {
    const { slug } = await params
    return (
        <div>
            <h1>Hello, Blog Post {slug} Page!</h1>
            <p>This [slug]/page.js can creates a special dynamic route segment used to generate multiple pages from data.</p>
        </div>
    )
}