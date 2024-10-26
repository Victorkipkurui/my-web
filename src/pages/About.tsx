
const About = () => {
  

  return (
    <>
      <div>
        <div className="relative p-6 border-4 rounded-lg border-gray-300 bg-gradient-to-r from-purple-500 to-pink-500">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h1 className="text-center text-gray-900 text-3xl font-semibold mb-6">SKILLS</h1>
            <p>
              I specialize in creating responsive and dynamic web applications using modern frameworks and technologies.
              I primarily work with React for front-end development, ensuring that the user interfaces are fast,
              interactive, and highly scalable. For styling, I rely on Tailwind CSS which allows me to build custom
              designs efficiently while maintaining clean and maintainable code. On the back-end, I use Django or Node
              for building robust APIs and handling database management. This combination of React and Django/Node
              enables me to develop full-stack applications that are both user-friendly and powerful. Additionally, I
              integrate axios for handling API requests in React applications, allowing seamless communication between
              the front-end and back-end services.
            </p>
            <p>
              As a data analyst, I focus on transforming raw data into actionable insights that help businesses make
              informed decisions. I use Python for data analysis, leveraging libraries such as Pandas for data
              manipulation, NumPy for numerical computations, and Matplotlib and Seaborn for data visualization. These
              tools enable me to handle large datasets efficiently and create compelling visual representations of key
              data trends. I also have experience with Power BI, which I use to build interactive dashboards that
              provide clients with an easy-to-understand overview of their data, allowing them to track KPIs and monitor
              business performance in real-time.
            </p>
            <p>
              In my role as a web scraper, I specialize in extracting valuable data from various online sources, which
              is essential for market research, competitor analysis, and other data-driven tasks. I use BeautifulSoup
              and Scrapy to gather structured data from websites efficiently. Selenium is another tool I rely on for web
              scraping, particularly when dealing with dynamic web pages that require automation to load content.
              Additionally, I utilize Python scripting to clean and preprocess the scraped data, ensuring it is
              well-organized and ready for further analysis or integration into databases.
            </p>
            <p>
              This blend of skills allows me to offer a comprehensive service, from developing web solutions to
              extracting and analyzing data, tailored to meet the unique needs of each project.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;