// web/app/post/[slug]/page.tsx
import { client } from "@/lib/sanity";
import { PortableText } from "@portabletext/react";
import { groq } from "next-sanity";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";


interface BlogPost {
  title: string;
  body: any[];
  publishedAt: string;
  mainImage?: {
    asset: { url: string };
  };
}

export default async function PostPage({ params }: { params: { slug: string } }) {
  const query = `*[_type == "post" && slug.current == $slug][0]{
    title,
    body,
    publishedAt,
    mainImage{asset->{url}}
  }`;

  const post: BlogPost = await client.fetch(query, { slug: params.slug });

  if (!post) {
    return (
      <div className="min-h-screen" style={{ backgroundColor: 'var(--color-bg)', color: 'var(--color-text)', fontFamily: 'var(--font-primary)' }}>
        <Navbar />
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="text-center">
                <h1 className="mb-4" style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', color: '#2a2a2a' }}>
                  Post Not Found
                </h1>
                <p style={{ color: '#555' }}>
                  The blog post you're looking for doesn't exist.
                </p>
                <Link href="/" className="btn btn-primary mt-3" style={{ 
                  background: 'linear-gradient(to right, var(--color-gradient-start), var(--color-gradient-end))',
                  border: 'none',
                  fontWeight: '600',
                  borderRadius: '50px',
                  padding: '0.5rem 1.5rem',
                  color: 'var(--color-white)',
                  transition: '0.3s ease',
                  textDecoration: 'none',
                  display: 'inline-block'
                }}>
                  Back to Home
                </Link>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--color-bg)', color: 'var(--color-text)', fontFamily: 'var(--font-primary)' }}>
      <Navbar />
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <article>
              <h1 className="mb-3" style={{ fontFamily: 'var(--font-heading)', fontSize: '2.5rem', color: '#2a2a2a' }}>
                {post.title}
              </h1>
              <p className="mb-4" style={{ color: '#777', fontSize: '0.9rem' }}>
                {new Date(post.publishedAt).toLocaleDateString()}
              </p>
              
              {post.mainImage?.asset?.url && (
                <div className="mb-4 position-relative" style={{ height: '400px' }}>
                  <Image
                    src={post.mainImage.asset.url}
                    alt={post.title}
                    fill
                    className="rounded"
                    style={{ objectFit: 'cover' }}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              )}
              
              <div style={{ fontSize: '1.1rem', lineHeight: '1.7' }}>
                <PortableText value={post.body} />
              </div>
              
              <div className="mt-5 pt-4 border-top">
                <Link href="/" className="btn btn-primary" style={{ 
                  background: 'linear-gradient(to right, var(--color-gradient-start), var(--color-gradient-end))',
                  border: 'none',
                  fontWeight: '600',
                  borderRadius: '50px',
                  padding: '0.5rem 1.5rem',
                  color: 'var(--color-white)',
                  transition: '0.3s ease',
                  textDecoration: 'none',
                  display: 'inline-block'
                }}>
                  ← Back to Blog
                </Link>
              </div>
            </article>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
