import { useState } from 'react';

interface Project {
  title: string;
  description: string;
  tools: string;
  link?: string;
}

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('dataAnalysis');

  const dataAnalysisProjects: Project[] = [
    {
      title: 'Sales Data Analysis',
      description: 'Analyzed monthly sales data using Python and presented findings in a Power BI dashboard.',
      tools: 'Python, Pandas, Power BI',
    },
    {
      title: 'Customer Segmentation Analysis',
      description: 'Performed customer segmentation based on buying habits using K-Means Clustering.',
      tools: 'Python, Scikit-learn',
    },
    {
      title: 'Sales Data Analysis',
      description: 'Analyzed monthly sales data using Python and presented findings in a Power BI dashboard.',
      tools: 'Python, Pandas, Power BI',
    },
    {
      title: 'Customer Segmentation Analysis',
      description: 'Performed customer segmentation based on buying habits using K-Means Clustering.',
      tools: 'Python, Scikit-learn',
    },
    {
      title: 'Sales Data Analysis',
      description: 'Analyzed monthly sales data using Python and presented findings in a Power BI dashboard.',
      tools: 'Python, Pandas, Power BI',
    },
    {
      title: 'Customer Segmentation Analysis',
      description: 'Performed customer segmentation based on buying habits using K-Means Clustering.',
      tools: 'Python, Scikit-learn',
    },
  ];

  const webDevelopmentProjects: Project[] = [
    {
      title: 'Hospital Appointment Booking System',
      description: 'A full-stack web application for booking hospital appointments using React and Django.',
      link: 'https://victorkipkurui.github.io/Filianta/index.html',
      tools: 'React, Django, Tailwind CSS',
    },
    {
      title: 'Portfolio Website',
      description: 'Developed a personal portfolio showcasing my projects and blogs.',
      link: 'https://my-web-bice-one.vercel.app/',
      tools: 'React, Tailwind CSS',
    },
    {
      title: 'Hospital Appointment Booking System',
      description: 'A full-stack web application for booking hospital appointments using React and Django.',
      link: 'https://victorkipkurui.github.io/Filianta/index.html',
      tools: 'React, Django, Tailwind CSS',
    },
    {
      title: 'Portfolio Website',
      description: 'Developed a personal portfolio showcasing my projects and blogs.',
      link: 'https://victor-portfolio.com',
      tools: 'React, Tailwind CSS',
    },
    {
      title: 'Hospital Appointment Booking System',
      description: 'A full-stack web application for booking hospital appointments using React and Django.',
      link: 'https://victorkipkurui.github.io/Filianta/index.html',
      tools: 'React, Django, Tailwind CSS',
    },
    {
      title: 'Portfolio Website',
      description: 'Developed a personal portfolio showcasing my projects and blogs.',
      link: 'https://victor-portfolio.com',
      tools: 'React, Tailwind CSS',
    },
  ];

  const webScrapingProjects: Project[] = [
    {
      title: 'E-commerce Data Scraping',
      description: 'Scraped product data from e-commerce websites using Python and BeautifulSoup.',
      tools: 'Python, BeautifulSoup, Selenium',
    },
    {
      title: 'Job Listing Scraper',
      description: 'Scraped job listings and organized them into a structured database for analysis.',
      tools: 'Python, Scrapy',
    },
    {
      title: 'E-commerce Data Scraping',
      description: 'Scraped product data from e-commerce websites using Python and BeautifulSoup.',
      tools: 'Python, BeautifulSoup, Selenium',
    },
    {
      title: 'Job Listing Scraper',
      description: 'Scraped job listings and organized them into a structured database for analysis.',
      tools: 'Python, Scrapy',
    },
    {
      title: 'E-commerce Data Scraping',
      description: 'Scraped product data from e-commerce websites using Python and BeautifulSoup.',
      tools: 'Python, BeautifulSoup, Selenium',
    },
    {
      title: 'Job Listing Scraper',
      description: 'Scraped job listings and organized them into a structured database for analysis.',
      tools: 'Python, Scrapy',
    },
  ];

  const analysisDashboards: Project[] = [
    {
      title: 'Sales Performance Dashboard',
      description: 'Interactive dashboard built with Power BI to track sales performance across regions.',
      tools: 'Power BI',
      link: 'https://powerbi-dashboard-link.com',
    },
    {
      title: 'Customer Feedback Analysis',
      description: 'Analyzed and visualized customer feedback using sentiment analysis techniques.',
      tools: 'Python, NLTK, Power BI',
    },
    {
      title: 'Sales Performance Dashboard',
      description: 'Interactive dashboard built with Power BI to track sales performance across regions.',
      tools: 'Power BI',
      link: 'https://powerbi-dashboard-link.com',
    },
    {
      title: 'Customer Feedback Analysis',
      description: 'Analyzed and visualized customer feedback using sentiment analysis techniques.',
      tools: 'Python, NLTK, Power BI',
    },
    {
      title: 'Sales Performance Dashboard',
      description: 'Interactive dashboard built with Power BI to track sales performance across regions.',
      tools: 'Power BI',
      link: 'https://powerbi-dashboard-link.com',
    },
    {
      title: 'Customer Feedback Analysis',
      description: 'Analyzed and visualized customer feedback using sentiment analysis techniques.',
      tools: 'Python, NLTK, Power BI',
    },
  ];

  const categories: { [key: string]: Project[] } = {
    dataAnalysis: dataAnalysisProjects,
    webDevelopment: webDevelopmentProjects,
    webScraping: webScrapingProjects,
    analysisDashboards: analysisDashboards,
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="text-center mb-10">
        <h1 className="text-center text-gray-900 text-3xl font-semibold my-6">PROJECTS</h1>
        <p className="text-lg text-gray-600">Explore the work I have done in various areas like data analysis, web development, web scraping, and more.</p>
      </div>

      <div className="mb-8 grid grid-cols-2 gap-4 sm:flex sm:justify-center sm:space-x-4">
  <button
    className={`px-4 py-2 rounded ${selectedCategory === 'dataAnalysis' ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
    onClick={() => handleCategoryChange('dataAnalysis')}
  >
    Data Analysis
  </button>
  <button
    className={`px-4 py-2 rounded ${selectedCategory === 'webDevelopment' ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
    onClick={() => handleCategoryChange('webDevelopment')}
  >
    Web Development
  </button>
  <button
    className={`px-4 py-2 rounded ${selectedCategory === 'webScraping' ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
    onClick={() => handleCategoryChange('webScraping')}
  >
    Web Scraping
  </button>
  <button
    className={`px-4 py-2 rounded ${selectedCategory === 'analysisDashboards' ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
    onClick={() => handleCategoryChange('analysisDashboards')}
  >
    Analysis Dashboards
  </button>
</div>


      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 justify-center">
        {categories[selectedCategory].map((project, index) => (
          <div key={index} className="bg-white shadow-lg p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
            <p className="text-gray-700 mb-4">{project.description}</p>
            <p className="text-sm font-light mb-4"><strong>Tools:</strong> {project.tools}</p>
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                View Project
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;