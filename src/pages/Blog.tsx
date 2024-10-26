const blogs = [
  {
    id: 1,
    title: "Maximizing Web Performance with React and Tailwind CSS",
    date: "October 11, 2024",
    coverImage: "/assets/images/tailwind cover.jpeg",
    author: "Victor Kipkurui",
    content: "In today's fast-paced digital world, optimizing web performance is crucial for user experience and SEO. This blog delves into how React combined with Tailwind CSS can create efficient, fast, and responsive web applications...",
  },
  {
    id: 2,
    title: "Transforming Data into Actionable Insights: A Data Analyst’s Journey",
    date: "October 15, 2024",
    coverImage: "/assets/images/data.jpeg",
    author: "Victor Kipkurui",
    content: "As a data analyst, understanding how to manipulate and visualize data is key. In this blog, I'll walk through my process of turning raw data into actionable insights using Python’s Pandas and building visually appealing dashboards...",
  },
  {
    id: 3,
    title: "Web Scraping for Market Research: Tools, Techniques, and Best Practices",
    date: "October 20, 2024",
    coverImage: "/assets/images/web s.jpeg",
    author: "Victor Kipkurui",
    content: "Web scraping is an invaluable tool for gathering data for competitive analysis and market research. Learn about the tools and techniques for scraping, using BeautifulSoup, Scrapy, and Selenium, and how to handle dynamic content...",
  },
  {
    id: 4,
    title: "Building a Full-Stack Application: React Front-End with Django Back-End",
    date: "October 25, 2024",
    coverImage: "/assets/images/Full-Stack.jpg",
    author: "Victor Kipkurui",
    content: "Full-stack development is the norm for creating versatile web apps. Learn how to use React for building interactive interfaces and Django for back-end services, focusing on connecting the two with RESTful APIs...",
  },
  {
    id: 5,
    title: "Using Data-Driven Insights to Improve Business Decisions",
    date: "October 30, 2024",
    coverImage: "/assets/images/daa im.png",
    author: "Victor Kipkurui",
    content: "Data is a powerful tool for driving business strategy. Learn how businesses can use data analysis to uncover trends, optimize KPIs, and improve decision-making with Python and Power BI...",
  },
];

const Blog = () => {
  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-4xl font-semibold text-center mb-10">My Blogs</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <div key={blog.id} className="bg-white shadow-md rounded-lg overflow-hidden">
            <img className="w-full h-48 object-cover" src={blog.coverImage} alt={blog.title} />
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-2">{blog.title}</h2>
              <p className="text-gray-600 mb-4">Published on {blog.date} by {blog.author}</p>
              <p className="text-gray-700">{blog.content.substring(0, 150)}...</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
