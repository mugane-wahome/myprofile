import React from "react";
import "./style.css";
import { HelmetProvider } from "react-helmet-async";
import img7 from "../../assets/images/img7.png";
import img6 from "../../assets/images/img6.png";
// import img5 from "../../assets/images/img5.png";
import img4 from "../../assets/images/img4.png";
import img3 from "../../assets/images/img3.png";
import img2 from "../../assets/images/img2.png";
// import img1 from "../../assets/images/img1.png";
import img8 from "../../assets/images/img8.png";

export const Aboutt = () => {
  const blogPosts = [
    {
        id: 8,
        img: img8,
        title: "Taking Your Business to Bigger Heights: Strategies for Success",
        category: "Business",
        date: "2022-06-10",
        author: "Samuel Mugane",
        content: "Growing a business requires careful planning, strategic decision-making, and a willingness to adapt to changing market conditions. In this blog post, we'll explore key strategies for taking your business to the next level, including leveraging technology, expanding into new markets, building a strong team, and focusing on customer satisfaction. By implementing these strategies, you can position your business for long-term success and growth.\n\nOne of the most important aspects of growing a business is making decisions based on data. Data-driven decision-making involves collecting and analyzing relevant data to gain insights into your business operations, market trends, and customer behavior. By leveraging data analytics tools and techniques, you can make informed decisions that drive business growth and profitability.\n\nMachine learning models can also play a significant role in business growth. These models use algorithms to analyze data, identify patterns, and make predictions. For example, machine learning can be used to analyze customer data and personalize marketing campaigns, predict market trends, optimize pricing strategies, and improve operational efficiency. By incorporating machine learning into your business processes, you can gain a competitive edge and drive growth.\n\nAnother important aspect of business growth is creating appealing business posters and brochures. These marketing materials can help you attract new customers, promote your products or services, and communicate your brand message effectively. By investing in professional design services and using high-quality images and content, you can create eye-catching marketing materials that leave a lasting impression on your target audience.\n\nBy implementing these strategies and staying focused on your goals, you can take your business to bigger heights and achieve long-term success.",
        link: "https://www.linkedin.com/pulse/5-proven-strategies-scaling-your-business-new-heights"
      },
      {
        id: 9,
        title: "Harnessing the Power of AI: Transforming Your Business",
        category: "Artificial Intelligence",
        date: "2022-06-15",
        author: "Samuel Mugane",
        content: "Artificial Intelligence (AI) is revolutionizing the way businesses operate, offering new opportunities for growth, efficiency, and innovation. By harnessing the power of AI, businesses can automate repetitive tasks, gain valuable insights from data, and enhance decision-making processes. In this blog post, we'll explore how you can use AI to transform your business and stay ahead of the competition.\n\nOne of the key benefits of AI is its ability to automate repetitive tasks, allowing employees to focus on more strategic and creative endeavors. AI-powered tools can streamline workflows, improve productivity, and reduce errors, leading to cost savings and improved efficiency. For example, AI can be used to automate customer service interactions, analyze financial data, and optimize supply chain operations.\n\nAI also offers businesses the opportunity to gain valuable insights from data. By analyzing large volumes of data, AI algorithms can uncover patterns, trends, and correlations that humans may overlook. This can help businesses make more informed decisions, identify new opportunities, and mitigate risks. For example, AI can be used to analyze customer data and personalize marketing campaigns, or to predict market trends and optimize pricing strategies.\n\nFurthermore, AI can enhance decision-making processes by providing real-time insights and recommendations. AI-powered analytics tools can process data faster than humans, allowing businesses to make decisions more quickly and accurately. For example, AI can be used to analyze sales data and recommend pricing changes, or to identify potential risks and opportunities in financial markets.\n\nIn conclusion, AI has the potential to transform businesses across industries, offering new ways to automate tasks, gain insights from data, and improve decision-making processes. By embracing AI technologies, businesses can stay ahead of the competition and drive innovation in their respective industries.",
        img: img2,
        link: "https://www.businessdailyafrica.com/bd/corporate/technology/how-to-harness-the-power-of-ai-for-your-business-a-guide-to-efficiency-productivity-and-innovation-4533838"
      },
      
      


    {
        id: 6,
        title: "Demystifying Web3: The Future of the Internet",
        category: "Web Development",
        date: "2022-05-25",
        author: "Samuel Mugane",
        content: "Web3 is a term used to describe the next generation of the internet, which is decentralized, open, and user-centric. It is built on blockchain technology and aims to give users more control over their data and online interactions. Web3 includes concepts such as decentralized applications (dApps), cryptocurrencies, non-fungible tokens (NFTs), and decentralized finance (DeFi).",
        img: img3,
        link: "https://www.toolify.ai/ai-news/demystifying-web3-the-future-of-the-internet-explained-390400"
      },
      

    {
      id: 1,
      title: "Introduction to Machine Learning",
      category: "Machine Learning",
      date: "2022-05-01",
      author: "John Doe",
      content: "Machine learning is a subset of artificial intelligence (AI) that focuses on the development of computer programs that can automatically improve and learn from experience. It enables computers to learn and make decisions without being explicitly programmed.",
      img: img4,
      link: "https://monkeylearn.com/machine-learning/#:~:text=Machine%20learning%20(ML)%20is%20a,time%2C%20without%20being%20explicitly%20programmed."
    },
    {
      id: 2,
      title: "The Art of Data Science",
      category: "Data Science",
      date: "2022-05-05",
      author: "Jane Smith",
      content: "Data science is an interdisciplinary field that uses scientific methods, processes, algorithms, and systems to extract knowledge and insights from structured and unstructured data. It combines principles from statistics, mathematics, computer science, domain knowledge, and information science.",
      img: img6,
      link: "https://bookdown.org/rdpeng/artofdatascience/"

    },
    {
      id: 3,
      title: "Getting Started with React",
      category: "React",
      date: "2022-05-10",
      author: "Alice Johnson",
      content: "React is a JavaScript library for building user interfaces. It allows developers to create reusable UI components and build interactive, single-page applications. React uses a declarative approach to describe how your UI should look, making it easier to understand and maintain your code.",
      img: "https://example.com/react.jpg",
      link: "https://legacy.reactjs.org/docs/getting-started.html"
    },
    {
      id: 4,
      title: "Understanding Regression Models",
      category: "Machine Learning",
      date: "2022-05-15",
      author: "Samuel Mugane",
      content: "Regression analysis is a statistical method used to examine the relationship between one dependent variable and one or more independent variables. In simple regression, there is only one independent variable, while in multivariate regression, there are multiple independent variables.",
      img: "https://example.com/regression.jpg",
      link: "https://www.imsl.com/blog/what-is-regression-model"
    },
    {
      id: 5,
      title: "Developing AI Applications with Devin AI",
      category: "Artificial Intelligence",
      date: "2022-05-20",
      author: "Samuel Mugane",
      content: "Devin AI is a powerful platform that allows developers to easily create AI-powered applications. With Devin AI, you can build chatbots, recommendation systems, image recognition tools, and more. The platform provides a range of tools and APIs that make it easy to integrate AI into your applications.",
      img: "https://example.com/devin-ai.jpg",
      link: "https://www.cognition-labs.com/introducing-devin"
    },
    // Add more blog posts for other categories
  ];

  const handlePostClick = (post) => {
    window.location.href = post.link; // Access the link property of the clicked post
  };

  return (
    <HelmetProvider>
      <div className="blog-posts">
        {blogPosts.map((post) => (
          <div key={post.id} className="blog-post" onClick={() => handlePostClick(post)}>
            
            <h2 className="blog-post-title">{post.title}</h2>
            <p className="blog-post-category">Category: {post.category}</p>
            {/* <p className="blog-post-date">Date: {post.date}</p>
            <p className="blog-post-author">Author: {post.author}</p> */}
            <p className="blog-post-content">{post.content}</p>
            <img src={post.img} alt={post.title} className="blog-post-image" />
          </div>
        ))}
      </div>
    </HelmetProvider>
  );
};

export default Aboutt;
