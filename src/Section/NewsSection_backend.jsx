import React, { useEffect, useState } from "react";

export default function NewsSection() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:8000/api/v1/category_post")
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((data) => {
        setCategories(data.categories || []);
        setLoading(false);
        console.log(data);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <section className="news-section section-padding pt-0 fix">
      <div className="container">
        {/* Section Header */}
        <div className="section-title text-center">
          <span className="sub-title wow fadeInUp">bLOG &amp; nEWS</span>
          <h2 className="wow fadeInUp" data-wow-delay=".3s">
            <span>I</span>nsights from latest blog
          </h2>
        </div>

        {categories.length === 0 && <p>No categories found.</p>}

        {/* Loop through each category */}
        {categories.map((category) => (
          <div key={category.id} className="category-section mb-5">
            {/* Category Title */}
            <div className="section-title text-center">
              <span className="sub-title wow fadeInUp">{category.name}</span>
            </div>

            <div className="row">
              {category.posts.length === 0 && (
                <p className="text-center">No posts in this category.</p>
              )}

              {/* Loop through posts in this category */}
              {category.posts.map((post) => (
                <div
                  key={post.id}
                  className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                  data-wow-delay=".3s"
                >
                  <div className="news-card-items">
                    {/* News Image + Hover Layers */}
                    <div className="news-image">
                      <img
                        src={
                          post.cover_photo_path
                            ? `http://localhost:8000/storage/${post.cover_photo_path}`
                            : "assets/img/home-1/news/placeholder.jpg"
                        }
                        alt={post.photo_alt_text || post.title}
                      />

                      {/* Hover Layers */}
                      <div className="news-layer-wrapper">
                        {[...Array(4)].map((_, i) => (
                          <div
                            key={i}
                            className="news-layer-image"
                            style={{
                              backgroundImage: post.cover_photo_path
                                ? `url("http://localhost:8000/storage/${post.cover_photo_path}")`
                                : `url("assets/img/home-1/news/placeholder.jpg")`,
                            }}
                          />
                        ))}
                      </div>

                      {/* Bottom Shape */}
                      <div className="bottom-shape">
                        <img
                          src="assets/img/home-1/news/shape.png"
                          alt="shape"
                        />
                      </div>
                    </div>

                    {/* News Content */}
                    <div className="news-content">
                      <ul className="news-meta">
                        <li>
                          <i className="fa-regular fa-user" />
                          By : {post.author_name || "Admin"}
                        </li>
                        <li>
                          <i className="fa-regular fa-comment" />
                          Comments
                        </li>
                      </ul>

                      <h4>
                        <a href={`/news/${post.slug}`}>{post.title}</a>
                      </h4>

                      <a href={`/news/${post.slug}`} className="link-btn">
                        Read More <i className="fa-solid fa-arrow-right-long" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// import React, { useEffect, useState } from "react";

// export default function NewsSection() {
//     const [categories, setCategories] = useState([]);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         fetch("http://localhost:8000/api/v1/category_post")
//             .then((res) => {
//                 if (!res.ok) throw new Error("Network response was not ok");
//                 return res.json();
//             })
//             .then((data) => {
//                 setCategories(data.categories || []);
//                 setLoading(false);
//                 console.log(data);
//             })
//             .catch((err) => {
//                 console.error(err);
//                 setLoading(false);
//             });
//     }, []);

//     if (loading) return <p>Loading...</p>;

//     return (
//         <section className="news-section section-padding pt-0 fix">
//             <div className="container">
//                 {/* Section Header */}
//                 <div className="section-title text-center">
//                     <span className="sub-title wow fadeInUp">bLOG &amp; nEWS</span>
//                     <h2 className="wow fadeInUp" data-wow-delay=".3s">
//                         <span>I</span>nsights from latest blog
//                     </h2>
//                 </div>

//                 {categories.length === 0 && <p>No categories found.</p>}

//                 {/* Loop through each category */}
//                 {categories.map((category) => (
//                     <div key={category.id} className="category-section mb-5">
//                         {/* Category Title */}
//                         <div className="section-title text-center">
//                             <span className="sub-title wow fadeInUp">{category.name}</span>
//                         </div>

//                         <div className="row">
//                             {category.posts.length === 0 && (
//                                 <p className="text-center">No posts in this category.</p>
//                             )}

//                             {/* Limit to latest 6 posts */}
//                             {category.posts
//                                 .slice(0, 6)
//                                 .map((post, index) => (
//                                     <div
//                                         key={post.id}
//                                         className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
//                                         data-wow-delay={`${index * 0.2}s`} // staggered delay
//                                     >
//                                         <div className="news-card-items">
//                                             {/* News Image + Hover Layers */}
//                                             <div className="news-image">
//                                                 <img
//                                                     src={
//                                                         post.cover_photo_path
//                                                             ? `http://localhost:8000/storage/${post.cover_photo_path}`
//                                                             : "assets/img/home-1/news/placeholder.jpg"
//                                                     }
//                                                     alt={post.photo_alt_text || post.title}
//                                                 />

//                                                 <div className="news-layer-wrapper">
//                                                     {[...Array(4)].map((_, i) => (
//                                                         <div
//                                                             key={i}
//                                                             className="news-layer-image"
//                                                             style={{
//                                                                 backgroundImage: post.cover_photo_path
//                                                                     ? `url("http://localhost:8000/storage/${post.cover_photo_path}")`
//                                                                     : `url("assets/img/home-1/news/placeholder.jpg")`,
//                                                             }}
//                                                         />
//                                                     ))}
//                                                 </div>

//                                                 <div className="bottom-shape">
//                                                     <img src="assets/img/home-1/news/shape.png" alt="shape" />
//                                                 </div>
//                                             </div>

//                                             {/* News Content */}
//                                             <div className="news-content">
//                                                 <ul className="news-meta">
//                                                     <li>
//                                                         <i className="fa-regular fa-user" />
//                                                         By : {post.author_name || "Admin"}
//                                                     </li>
//                                                     <li>
//                                                         <i className="fa-regular fa-comment" />
//                                                         Comments
//                                                     </li>
//                                                 </ul>

//                                                 <h4>
//                                                     <a href={`/news/${post.slug}`}>{post.title}</a>
//                                                 </h4>

//                                                 <a href={`/news/${post.slug}`} className="link-btn">
//                                                     Read More <i className="fa-solid fa-arrow-right-long" />
//                                                 </a>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 ))}
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </section>
//     );
// }
