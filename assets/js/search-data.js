// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-首页",
    title: "首页",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-发表文章",
          title: "发表文章",
          description: "发表文章.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-专利项目",
          title: "专利项目",
          description: "projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-团队成员",
          title: "团队成员",
          description: "团队成员",
          section: "Navigation",
          handler: () => {
            window.location.href = "/people/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-a-simple-inline-announcement",
          title: 'A simple inline announcement.',
          description: "",
          section: "News",},{id: "news-a-long-announcement-with-details",
          title: 'A long announcement with details',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "news-a-simple-inline-announcement-with-markdown-emoji-sparkles-smile",
          title: 'A simple inline announcement with Markdown emoji! :sparkles: :smile:',
          description: "",
          section: "News",},{id: "projects-一种云锦妆花缎面料纹样快速生成系统及方法",
          title: '一种云锦妆花缎面料纹样快速生成系统及方法',
          description: "zl10",
          section: "Projects",handler: () => {
              window.location.href = "/projects/10_project/";
            },},{id: "projects-一种基于高精度数字图像的服装缝线疵点自动检测方法",
          title: '一种基于高精度数字图像的服装缝线疵点自动检测方法',
          description: "zl11",
          section: "Projects",handler: () => {
              window.location.href = "/projects/11_project/";
            },},{id: "projects-一套具有救生功能的船用工作服",
          title: '一套具有救生功能的船用工作服',
          description: "zl12",
          section: "Projects",handler: () => {
              window.location.href = "/projects/12_project/";
            },},{id: "projects-一种多功能腰腹带",
          title: '一种多功能腰腹带',
          description: "专利13",
          section: "Projects",handler: () => {
              window.location.href = "/projects/13_project/";
            },},{id: "projects-一种参数可调整的服装工艺模块化设计方法",
          title: '一种参数可调整的服装工艺模块化设计方法',
          description: "专利1",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-一种自动识别服装工艺的方法",
          title: '一种自动识别服装工艺的方法',
          description: "专利2",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-一种多相机图像采集方法及装置",
          title: '一种多相机图像采集方法及装置',
          description: "zl3",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-一种基于faster-r-cnn网络的衬衣袖口工艺识别方法",
          title: '一种基于Faster R-CNN网络的衬衣袖口工艺识别方法',
          description: "zl4",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-一种基于分层原理的云锦风格图像生成方法",
          title: '一种基于分层原理的云锦风格图像生成方法',
          description: "zl5",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-一种仿云锦妆花缎的印花面料及其制备方法",
          title: '一种仿云锦妆花缎的印花面料及其制备方法',
          description: "zl6",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-一种两段式防水透气袖子",
          title: '一种两段式防水透气袖子',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-一种通气下水裤",
          title: '一种通气下水裤',
          description: "zl8",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-一种便于锁后共享单车移动的辅助装置",
          title: '一种便于锁后共享单车移动的辅助装置',
          description: "zl9",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{id: "teachings-data-science-fundamentals",
          title: 'Data Science Fundamentals',
          description: "This course covers the foundational aspects of data science, including data collection, cleaning, analysis, and visualization. Students will learn practical skills for working with real-world datasets.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/data-science-fundamentals/";
            },},{id: "teachings-introduction-to-machine-learning",
          title: 'Introduction to Machine Learning',
          description: "This course provides an introduction to machine learning concepts, algorithms, and applications. Students will learn about supervised and unsupervised learning, model evaluation, and practical implementations.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/introduction-to-machine-learning/";
            },},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
