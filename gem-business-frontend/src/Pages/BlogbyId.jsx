import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const BlogPost = () => {
  const { id } = useParams(); // Get blog ID from URL (e.g., 68ee797173698aee02b557e3)
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://gem-business.onrender.com/blogs/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error("Blog not found");
        return res.json();
      })
      .then((data) => setPost(data)) // Assuming response is the blog object directly
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <div className="text-center text-[#96c5a8]">Loading...</div>;
  if (error) return <div className="text-center text-red-300">{error}</div>;
  if (!post) return <div className="text-center text-red-300">Post not found.</div>;

  return (
    <div
      className="relative flex min-h-screen flex-col bg-gradient-to-b from-[#122118] to-[#1b3124] text-white overflow-x-hidden"
      style={{ fontFamily: '"Plus Jakarta Sans", "Noto Sans", sans-serif' }}
    >
      <div className="layout-container flex h-full grow flex-col">
        <div className="px-4 sm:px-6 md:px-10 flex flex-1 justify-center py-10">
          <div className="layout-content-container flex flex-col max-w-full sm:max-w-[960px] w-full flex-1">
            <button
              onClick={() => navigate(-1)}
              className="text-[#96c5a8] mb-6 hover:underline"
            >
              ← Back to Blogs
            </button>
            {post.imageURL && (
              <img
                src={post.imageURL}
                alt={post.title}
                className="w-full h-64 object-cover rounded-lg mb-6"
                onError={(e) => (e.target.src = "https://via.placeholder.com/300x200?text=No+Image")}
              />
            )}
            <h1 className="text-[#96c5a8] text-3xl sm:text-5xl font-bold mb-4">
              {post.title}
            </h1>
            <p className="text-[#e8f3ec] text-sm sm:text-base italic mb-4">
              {new Date(post.createdAt).toLocaleDateString()}
            </p>
            <p className="text-[#e8f3ec] text-sm sm:text-base leading-relaxed mb-6">
              {post.snippet}
            </p>
            <div
              className="text-[#e8f3ec] text-sm sm:text-base leading-relaxed mb-6"
              dangerouslySetInnerHTML={{ __html: post.body }}
            />
            <div className="flex items-center gap-4 text-sm text-[#c5dceb]">
              <span>Category: {post.category}</span>
              <span>Likes: {post.likes}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;