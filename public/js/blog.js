import sanityClient from "https://cdn.skypack.dev/@sanity/client";

const client = sanityClient({
  projectId: "q0c3zitk", // 🔑 replace with your Sanity project ID
  dataset: "production",
  apiVersion: "2023-01-01",
  useCdn: true,
});

async function loadBlogs() {
  const posts =
    await client.fetch(`*[_type == "blog"] | order(publishedAt desc)[0..5]{
    title,
    slug,
    excerpt,
    coverImage{ asset->{url} },
    publishedAt
  }`);

  const blogContainer = document.getElementById("blog-container");

  posts.forEach((post) => {
    const col = document.createElement("div");
    col.classList.add("col-md-4");

    col.innerHTML = `
      <div class="blog-card">
        <img src="${post.coverImage?.asset.url || "images/default.jpg"}" alt="${
      post.title
    }">
        <div class="blog-card-body">
          <h5>${post.title}</h5>
          <p>${post.excerpt || ""}</p>
          <div class="blog-meta">
            <small>${new Date(post.publishedAt).toDateString()}</small>
          </div>
          <a href="/blog/${
            post.slug.current
          }" class="btn btn-sm btn-outline-primary mt-2">Read More</a>
        </div>
      </div>
    `;

    blogContainer.appendChild(col);
  });
}

loadBlogs();
