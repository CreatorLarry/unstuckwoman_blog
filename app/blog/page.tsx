import Link from "next/link";
import Image from "next/image";
import { client } from "@/lib/sanity";
import { groq } from "next-sanity";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

type BlogPost = {
  _id: string;
  title: string;
  slug: { current: string };
  mainImage?: {
    asset: { url: string };
  };
  excerpt?: string;
  publishedAt: string;
};

export default async function BlogPage() {
  const posts: BlogPost[] = await client.fetch(
    groq`*[_type == "post"] | order(publishedAt desc){
      _id,
      title,
      slug,
      mainImage{asset->{url}},
      excerpt,
      publishedAt
    }`
  );

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--color-bg)', color: 'var(--color-text)', fontFamily: 'var(--font-primary)' }}>
      {/* Header */}
      <Navbar />

      {/* Blog Section */}
      <main className="container py-5">
        <h2 className="text-center mb-5" style={{ fontFamily: 'var(--font-heading)', fontSize: '2.5rem', color: '#2a2a2a' }}>
          Our Blog
        </h2>
        <div className="row" id="blog-list">
          {posts.map((post) => (
            <div className="col-md-4 mb-4" key={post._id}>
              <div className="blog-card h-100">
                {post.mainImage?.asset?.url ? (
                  <div className="position-relative" style={{ height: '220px' }}>
                    <Image
                      src={post.mainImage.asset.url}
                      alt={post.title}
                      fill
                      className="card-img-top"
                      style={{ objectFit: 'cover' }}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                ) : (
                  <div className="bg-gray-200" style={{ height: '220px' }}></div>
                )}
                <div className="blog-card-body">
                  <h5 style={{ fontFamily: 'var(--font-heading)', fontWeight: '600', fontSize: '1.25rem', color: '#2a2a2a' }}>
                    {post.title}
                  </h5>
                  <p style={{ color: '#555', fontSize: '0.95rem' }}>
                    {post.excerpt || "Click to read more..."}
                  </p>
                  <div className="blog-meta">
                    <small style={{ fontSize: '0.85rem', color: '#777' }}>
                      {new Date(post.publishedAt).toDateString()}
                    </small>
                  </div>
                  <Link
                    href={`/post/${post.slug.current}`}
                    className="btn btn-primary mt-3"
                    style={{ 
                      background: 'linear-gradient(to right, var(--color-gradient-start), var(--color-gradient-end))',
                      border: 'none',
                      fontWeight: '600',
                      borderRadius: '50px',
                      padding: '0.5rem 1.5rem',
                      color: 'var(--color-white)',
                      transition: '0.3s ease',
                      textDecoration: 'none',
                      display: 'inline-block'
                    }}
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}