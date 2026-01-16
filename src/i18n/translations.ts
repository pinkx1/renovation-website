export type Language = 'en' | 'ru';

export const translations: Record<Language, Record<string, unknown>> = {
  en: {
    header: {
      locationLabel: 'Location:',
      emailLabel: 'Email:',
      links: {
        about: 'About',
        faq: 'FAQ',
        testimonials: 'Testimonials',
      },
    },
    company: {
      address: 'Moscow, Russia',
      email: 'hello@renovia.com',
      emailAlt: 'support@renovia.com',
      phone: '+7 (495) 123-45-67',
      phoneAlt: '+7 (495) 765-43-21',
    },
    nav: {
      about: 'About Us',
      testimonials: 'Testimonials',
      faqs: 'FAQs',
      pricing: 'Pricing',
      projects: 'Projects',
      blog: 'Blog',
      contact: 'Contact Us',
    },
    buttons: {
      getFreeQuote: 'Get Free Quote',
    },
    footer: {
      newsletterText: 'Sign up for our newsletter to latest weekly updates & news',
      urgentService: 'Urgent Service',
      getInTouch: 'Get In Touch',
      ourServices: 'Our Services',
      followUs: 'Follow Us',
      privacy: 'Privacy Policy',
      terms: 'Terms & Conditions',
      language: 'Language',
      emailPlaceholder: 'Enter Your Email',
    },
    footerServices: [
      'Residential painting',
      'Interior design consultation',
      'Commercial renovation',
      'Painting Consultation',
      'Exceptional Craftsmanship',
    ],
    footerContacts: {
      location: 'Location',
      email: 'Email',
      phone: 'Phone',
    },
    sidebar: {
      blurb:
        'We pride ourselves on attention to detail reliability and a customer-first approach that ensures satisfaction from start to finish from color consultation to coat',
      newsletterTitle: 'Newsletter',
      contactInfo: 'Contact Info',
      followUs: 'Follow Us',
      emailPlaceholder: 'Enter Your Email',
    },
    search: {
      placeholder: 'Search',
    },
    common: {
      home: 'Home',
      readMore: 'Read More',
      browseMore: 'Browse More',
      bookingNow: 'Booking Now',
      sendMessage: 'Send Message',
      contactNow: 'Contact Now',
      contactUsNow: 'Contact Us Now',
      searchHere: 'Search Here',
      popularPost: 'Popular Post',
      newsCategory: 'News Category',
      popularTags: 'Popular Tags',
      share: 'Share:',
      reply: 'Reply',
      postComment: 'Post A Comment',
      leaveReply: 'Leave A Reply',
    },
    banner: {
      topTitle: 'welcome to renovia',
      title: 'Renovation Services Based In Moscow',
      description:
        'Renovation is the perfect way to breathe new life into your space whether a single room or an entire allows you to improve enhance aesthetics and tailor environment.',
      buttons: {
        explore: 'Explore Now',
        learn: 'learn more',
      },
      stats: [
        { value: 28, suffix: '+', label: 'Years Of Experience' },
        { value: 3, suffix: 'k+', label: 'Happy Clients' },
        { value: 10, suffix: '+', label: 'Award Winning' },
      ],
    },
    whatWeDo: {
      topTitle: 'what we do',
      title: 'Your Trusted Experts In Professional Remodeling Services',
      items: [
        {
          title: 'Residential painting',
          description:
            'From interiors to weather resistant painting to involves careful surface for preparation materials skilled techniques',
        },
        {
          title: 'Commercial Renovation',
          description:
            'From structural upgrades to aesthetic improvements every detail is tailored to meet the unique needs for operations',
        },
        {
          title: 'Interior Design Consultation',
          description:
            'Interior design consultation is a service helps bring your vision to life is by combining style comfort redesigning room',
        },
      ],
    },
    getToKnow: {
      topTitle: 'Get to Know Us',
      title: 'Remodeling Solutions Tailored For You',
      description:
        'It enhances comfort improves layout and often increases the overall value of your home or commercial space',
      list: ['Easily Book Painting', 'Get 24/7 on-demand care', 'Reminders about painting'],
      button: 'More About Us',
      authorName: 'Sarah Brown',
      authorRole: 'CEO & Founder',
      accordion: [
        {
          title: 'Our Mission',
          body:
            'Our mission is to transform spaces with excellence creativity and care we are dedicated to delivering high quality painting and services that enhance the focus on customer',
        },
        {
          title: 'Our Vision',
          body:
            'To be a trusted leader in the renovation and painting industry, delivering exceptional quality, innovative solutions, and lasting value to every client. We aim to transform spaces into beautiful, functional environments that inspire and enhance the lives of those who experience them.',
        },
        {
          title: 'Our Value',
          list: [
            {
              title: 'Quality:',
              text: 'We deliver top-notch workmanship in every project.',
            },
            {
              title: 'Integrity:',
              text: 'We are honest, transparent, and reliable in all our dealings.',
            },
            {
              title: 'Customer Satisfaction:',
              text: 'We prioritize our clients\' needs and ensure they are delighted with the results.',
            },
          ],
        },
      ],
      marquee: ['Smart Work', 'Unique Design', 'Smart Work', 'Best Pricing', 'Skilled Team'],
    },
    servicesHome: {
      topTitle: 'our services',
      title: 'Transform Your Space With Our Expertise',
      benefits: [
        'Manufacturer Quality Equipment',
        'Use Premium Paints And Materials',
        '100% Satisfaction Guarantee',
      ],
      button: 'Browse More',
      tabs: [
        {
          title: 'Kitchen Remodeling',
          description:
            'Kitchen remodeling renovation is a wonderful way to create a more comfortable functional personalized retreat within home improving storage enhancing lighting',
        },
        {
          title: 'Bedroom Renovation',
          description:
            'Bedroom renovation is a wonderful way to create a more comfortable functional personalized retreat within home improving storage enhancing lighting',
        },
        {
          title: 'Exterior Painting',
          description:
            'Exterior renovation is a wonderful way to create a more comfortable functional personalized retreat within home improving storage enhancing lighting',
        },
        {
          title: 'Bathroom Painting',
          description:
            'Bathroom renovation is a wonderful way to create a more comfortable functional personalized retreat within home improving storage enhancing lighting',
        },
      ],
    },
    projectsHome: {
      topTitle: 'Latest Projects',
      title: 'Latest projects',
      items: [
        { title: 'Custom Home Renovations', category: 'home renovation' },
        { title: 'Kitchen Remodeling', category: 'home renovation' },
        { title: 'Bedroom Renovation', category: 'home renovation' },
      ],
    },
    whyChoose: {
      topTitle: 'why choose us',
      title: 'Why Choose Renovia For Your Remodeling Services',
      items: [
        {
          title: 'Residential Renovation',
          description:
            'Residential renovation is transformative process that breathes new life into home enhancing both its functionality and aesthetic appeal single room',
        },
        {
          title: 'Design & Planning',
          description:
            'Design & Planning is the foundation of any successful renovation or construction project It involves turning ideas into practical well structured solutions',
        },
        {
          title: 'Turnkey Renovation',
          description:
            'Turnkey renovation offers a complete hassle free solution for transforming space from start to finish from initial design and planning to final execution',
        },
      ],
      progress: [
        { label: 'Professional Workers', percent: 90 },
        { label: 'Paint Spraying', percent: 80 },
      ],
    },
    testimonialsHome: {
      topTitle: 'testimonial',
      title: 'What Our Clients Say About Our Painting Company',
      trustedBy: 'Trusted By 1000+ Satisfied Customers',
      items: [
        {
          quote: 'Impeccable craftsmanship and outstanding service!',
          text:
            'What impressed us most was the level of communication and kept informed stage and concerns change were addressed promptly and with care the project completed to on time and within the agreed budget which is rare in remodeling our house happier with the results highly recommend their services to anyone looking transform their living space. It was a smooth stress free experience',
          name: 'Marquite  Pridgen',
          location: 'Brooklyn, USA',
        },
        {
          quote: 'Exceeded Our Expectations',
          text:
            '"From start to finish, the experience was outstanding. The painters were detail-oriented, respectful of our space, and finished earlier than expected. The color consultation helped us choose the perfect tones that completely refreshed our living room. Highly recommend their services!"',
          name: 'Daniela  Simmons',
          location: 'Chicago, USA',
        },
      ],
    },
    teamHome: {
      topTitle: 'Team Members',
      title: 'Our team',
      members: [
        { name: 'Robert Pineda', role: 'Paint Consultant' },
        { name: 'Lori Sheffield', role: 'Detail Painter' },
        { name: 'David Chadwell', role: 'Surface Specialist' },
        { name: 'Miriam Sherburn', role: 'Lead Painter' },
      ],
    },
    partners: {
      title: 'SPECIAL THANKS TO ALL OUT PARTNERS',
    },
    contactSection: {
      topTitle: 'contact us',
      title: 'Collect Your Slot For Upcoming Remodeling House',
      description:
        'Home remodeling projects can include additions like extra bedrooms home offices or finished basements. These spaces provide more room for growing families hobbies',
      helpTitle: 'Need Help?',
      helpLabel: 'Please Call Us:',
      formTitle: 'Please Fill In The Information Below',
      formDescription:
        "We'd love to hear from you! Whether you're ready to start your next project or simply have a few questions, our team is here to help.",
      placeholders: {
        name: 'Enter Your Name',
        email: 'Enter Your Email',
        phone: 'Enter Your Number',
        message: 'Write Your Message',
      },
      termsText: 'I understand and agree to the',
    },
    funFacts: {
      title: 'INTERESTING AND UNEXPECTED FACTS',
      items: [
        { value: 85, label: 'Repeat clients' },
        { value: 38, label: 'Team experience' },
        { value: 74, label: 'Projects Done' },
        { value: 62, label: 'Contractors Employed' },
      ],
    },
    blogHome: {
      topTitle: 'latest news',
      title: 'Check Out Latest News Update And Articles',
      readMore: 'Browse More',
      posts: [
        {
          tag: 'Home',
          date: '01 Jun 2025',
          comments: 'No Comment',
          title: 'The Complete Guide to Planning Your Home Renovation',
          excerpt:
            'During remodeling hidden issues such as plumbing leaks wiring mold structural damage can be identified addressed',
        },
        {
          tag: 'Office',
          date: '02 Jun 2025',
          comments: '01 Comment',
          title: 'Green Remodeling Sustainable Choices for a Healthier Home',
          excerpt:
            'Home remodeling projects can include additions like extra bedrooms home offices finished basements',
        },
        {
          tag: 'Custom',
          date: '03 Jun 2025',
          comments: '02 Comment',
          title: 'Bathroom Remodeling Ideas for a Spa Like Experience',
          excerpt:
            'Older homes may not meet current building codes or safety standards remodeling ensures home complies',
        },
      ],
    },
    consultation: {
      title: 'Contact Us Today for a Free remodeling Consultation',
      button: 'Contact Us Now',
    },
    subscribe: {
      topTitle: 'NEWSLETTER',
      title: 'Subscribe To Our Newsletter',
      emailPlaceholder: 'Enter Your Email',
      termsText: 'I agree to the',
    },
    pages: {
      about: 'About Us',
      services: 'Our Services',
      pricing: 'Pricing',
      projects: 'Latest Projects',
      blog: 'Latest Blog',
      contact: 'Contact Us',
      testimonials: 'Testimonials',
      faqs: 'FAQs',
      requestQuote: 'Request A Quote',
      privacy: 'Privacy Policy',
      terms: 'Terms & Conditions',
      error: 'Error 404',
      serviceDetails: 'Service Details',
      projectDetails: 'Project Details',
      singleBlog: 'Single Blog',
    },
    aboutPage: {
      getToKnowTitle: 'Get to Know Us',
      getToKnowHeading: 'Transform your space with our skilled full members',
      getToKnowText:
        'Perfect for business cards invitation packaging and promotional materials digital foiling enhances visual appeal and leaves a lasting impression with its elegant',
      moreAbout: 'More About Us',
      progressTitle: 'Company progress',
      progressItems: [
        { label: 'Satisfaction', percent: 90 },
        { label: 'Revenue', percent: 80 },
      ],
      knowItems: [
        {
          number: '01',
          title: 'Our Mission',
          text: 'Our mission is to deliver painting solution that enhance to character of space we touch',
        },
        {
          number: '02',
          title: 'Our Vision',
          text: 'We aim to inspire and transform through innovative sustainable and dedication to brushstroke',
        },
      ],
      workingProcessTop: 'working process',
      workingProcessTitle: 'How we work',
      workingSteps: [
        {
          title: 'Get A quote',
          text: 'Please Contact us use our online form to request a quote',
        },
        {
          title: 'Schedule A Consultation',
          text: 'We visit your location to discuss your needs and preferences',
        },
        {
          title: 'Painting Process',
          text: 'Our team starts the painting project ensuring quality and cleanliness',
        },
        {
          title: 'Final Walkthrough',
          text: 'We review the finished work with you to ensure satisfaction',
        },
      ],
      testimonialTop: 'testimonial',
      testimonialTitle: 'What Our Clients Say About Our Painting Company',
      testimonials: [
        {
          quote: '“Our Home Looks Brand New”',
          quoteAsHeading: false,
          text:
            '“The team did an amazing job transforming our home with fresh, vibrant colors. They were punctual, professional, and left everything spotless painting recommend this painting company for anyone looking for quality work! from the initial consultation to the final coat everything choices.”',
          name: 'Marquite Pridgen',
          location: 'Brooklyn, USA',
        },
        {
          quote: '“Exceeded Our Expectations”',
          quoteAsHeading: true,
          text:
            '“From start to finish, the experience was outstanding. The painters were detail-oriented, respectful of our space, and finished earlier than expected. The color consultation helped us choose the perfect tones that completely refreshed our living room. Highly recommend their services!”',
          name: 'Daniela Simmons',
          location: 'Chicago, USA',
        },
      ],
      marquee: [
        'Quality Painting Excellence',
        'Certified Painters Guarantee',
        'Quality Painting Excellence',
        'Certified Painters Guarantee',
        'Quality Painting Excellence',
        'Certified Painters Guarantee',
        'Quality Painting Excellence',
        'Certified Painters Guarantee',
        'Quality Painting Excellence',
        'Certified Painters Guarantee',
        'Quality Painting Excellence',
        'Comfort and familiarity',
      ],
    },
    pricingPage: {
      topTitle: 'Pricing Plan',
      title: 'Select Your Suitable Packages',
      plans: [
        {
          title: 'Home Painting',
          description:
            'Home painting is one of the most effective ways to refresh and personalize your living space',
          price: '$39.99',
          frequency: '(Hourly)',
          isActive: true,
          features: [
            'Dusting and wiping all surfaces',
            'Emptying trash bins',
            'Vacuuming and mopping floors',
            'Livingston cleaning',
            'painting bathrooms and kitchens',
          ],
        },
        {
          title: 'Office Painting',
          description:
            'Office painting plays key role in creating a professional productive visually appealing work environment',
          price: '$59.99',
          frequency: '(Hourly)',
          isActive: false,
          features: [
            'All Services In Basic Painting',
            'Painting Inside Appliances (Oven, Fridge)',
            'Painting Bathrooms And Kitchens',
            'Baseboard And Molding Painting Trash Bins',
            'Window And Blind Painting',
          ],
        },
        {
          title: 'Custom Wall Finish',
          description:
            'A custom wall finish is unique way to elevate the look and feel of any interior space adding texture depth',
          price: '$79.99',
          frequency: '(Hourly)',
          isActive: true,
          features: [
            'Tailored cleaning schedule',
            'Flexible hours to minimize disruption',
            'painting bathrooms and kitchens',
            'Specialized painting for different industries',
            'Ongoing maintenance and support',
          ],
        },
      ],
      marquee: [
        'Quality Painting Excellence',
        'Certified Painters Guarantee',
        'Quality Painting Excellence',
        'Certified Painters Guarantee',
        'Quality Painting Excellence',
        'Certified Painters Guarantee',
        'Quality Painting Excellence',
        'Certified Painters Guarantee',
        'Quality Painting Excellence',
        'Certified Painters Guarantee',
        'Quality Painting Excellence',
        'Comfort and familiarity',
      ],
    },
    servicesPage: {
      services: [
        {
          title: 'Interior Painting',
          description:
            'Interior painting is a powerful way to refresh and personalize your living or working space with the right colors and finishes it can enhance mood',
        },
        {
          title: 'Wallpaper Design',
          description:
            'Wallpaper design is a creative and stylish way to elevate any interior space with texture pattern from bold prints to subtle textures wallpapers',
        },
        {
          title: 'Exterior Painting',
          description:
            'Exterior painting is a vital part of maintaining and enhancing the appearanc and protection of It not only boosts curb appeal but also serves against',
        },
        {
          title: 'Paint supply',
          description:
            'Paint supply is a crucial part of any painting or renovation project ensuring have access to the right products for a smooth high quality finish',
        },
        {
          title: 'Exterior painting',
          description:
            'Exterior painting is a powerful way to refresh and protect the outside of your home or building enhances curb appeal with clean updated look protective',
        },
        {
          title: 'Wallpaper Removal',
          description:
            'Wallpaper removal is an essential step in preparing walls for a fresh updated look over time wallpaper can peel fade or become outdated making',
        },
        {
          title: 'Paint supply',
          description:
            'Paint supply is a crucial part of any painting or renovation project ensuring have access to the right products for a smooth high quality finish',
        },
        {
          title: 'Exterior painting',
          description:
            'Exterior painting is a powerful way to refresh and protect the outside of your home or building enhances curb appeal with clean updated look protective',
        },
        {
          title: 'Wallpaper Removal',
          description:
            'Wallpaper removal is an essential step in preparing walls for a fresh updated look over time wallpaper can peel fade or become outdated making',
        },
      ],
    },
    projectsPage: {
      items: [
        { title: 'Custom Home Renovations', category: 'home renovation' },
        { title: 'Kitchen Remodeling', category: 'home renovation' },
        { title: 'Bedroom Renovation', category: 'home renovation' },
        { title: 'Bedroom Renovation', category: 'home renovation' },
        { title: 'Bedroom Renovation', category: 'home renovation' },
        { title: 'Custom Home Renovations', category: 'home renovation' },
        { title: 'Kitchen Remodeling', category: 'home renovation' },
        { title: 'Bedroom Renovation', category: 'home renovation' },
      ],
    },
    blogPage: {
      posts: [
        {
          tag: 'Home',
          date: '01 Jun 2025',
          comments: 'No Comment',
          title: 'The Complete Guide to Planning Your Home Renovation',
          excerpt:
            'During remodeling hidden issues such as plumbing leaks wiring mold structural damage can be identified addressed',
        },
        {
          tag: 'Office',
          date: '02 Jun 2025',
          comments: '01 Comment',
          title: 'Green Remodeling Sustainable Choices for a Healthier Home',
          excerpt:
            'Home remodeling projects can include additions like extra bedrooms home offices finished basements',
        },
        {
          tag: 'Custom',
          date: '03 Jun 2025',
          comments: '02 Comment',
          title: 'Bathroom Remodeling Ideas for a Spa Like Experience',
          excerpt:
            'Older homes may not meet current building codes or safety standards remodeling ensures home complies',
        },
        {
          tag: 'Home',
          date: '01 Jun 2025',
          comments: 'No Comment',
          title: 'The Complete Guide to Planning Your Home Renovation',
          excerpt:
            'During remodeling hidden issues such as plumbing leaks wiring mold structural damage can be identified addressed',
        },
        {
          tag: 'Office',
          date: '02 Jun 2025',
          comments: '01 Comment',
          title: 'Green Remodeling Sustainable Choices for a Healthier Home',
          excerpt:
            'Home remodeling projects can include additions like extra bedrooms home offices finished basements',
        },
        {
          tag: 'Custom',
          date: '03 Jun 2025',
          comments: '02 Comment',
          title: 'Bathroom Remodeling Ideas for a Spa Like Experience',
          excerpt:
            'Older homes may not meet current building codes or safety standards remodeling ensures home complies',
        },
      ],
      popularPosts: [
        {
          date: '07 Jun 2025',
          title: 'How to Plan Your Renovation Project Budget Timeline & Tips',
        },
        {
          date: '08 Jun 2025',
          title: 'Before & After Stunning Remodeling Transformations You’ll Love',
        },
        {
          date: '09 Jun 2025',
          title: 'Common Renovation Mistakes and How to Avoid Them',
        },
      ],
      categories: [
        'Interior Painting',
        'Wallpaper Design',
        'Exterior Painting',
        'Wallpaper Removal',
        'Tile installation',
      ],
      tags: ['Painting', 'Construction', 'Interior', 'Furniture', 'Building', 'Space', 'Urban'],
    },
    singleBlog: {
      tag: 'Office',
      date: '02 Jun 2025',
      comments: '01 Comment',
      title: 'Green Remodeling Sustainable Choices for a Healthier Home',
      paragraphs: [
        'Bedroom renovation is a great way to create a more comfortable, stylish, and functional personal retreat. Whether you\'re updating the layout, adding smart storage, improving lighting, or refreshing the color scheme, a well-designed bedroom renovation enhances both relaxation and practicality. It allows you to tailor the space to your lifestyle and preferences, turning it into a haven of rest and rejuvenation. With thoughtful design choices and quality finishes, bedroom renovation',
        'An efficient office setup is essential for boosting productivity, comfort, and professionalism in any workspace. Whether it’s a home office or a corporate environment, a well-designed setup includes thoughtful furniture placement, ergonomic solutions, proper lighting, and organized storage. A good office layout encourages focus, reduces distractions, and supports',
      ],
      quote:
        'With the right choice of moisture resistant paints and finishes it not only enhances the visual appeal but also protects the walls from humidity mold and daily wear.',
      subTitle: 'It’s The Perfect Time To Paint Your Home',
      subParagraphs: [
        'Kitchen remodeling is a transformative upgrade that enhances the heart of your home, combining style, functionality, and efficiency. Whether you\'re looking to modernize outdated features, improve layout and storage, or add high-quality appliances, a kitchen remodel creates a space that suits your lifestyle and cooking needs',
        'It’s not just about aesthetics smart remodeling increases your home’s value, energy efficiency, and overall comfort. With thoughtful design and expert craftsmanship, kitchen remodeling turns your cooking area into a beautiful, welcoming space',
      ],
      tags: ['Kitchen,', 'House,', 'Building'],
      authorName: 'William Driscoll',
      authorBio:
        'Plumbing works are essential for maintaining a safe, functional, and efficient water system in any residential or commercial property. From installing new pipes and fixtures to repairing leaks and ensuring proper drainage, professional plumbing services help keep your water flow smooth',
      commentTitle: '01 Comments',
      commentName: 'David Cochran',
      commentMeta: 'Mar 10,2025 | 08:10 pm',
      commentText:
        'Quality plumbing work prevents costly water damage, supports hygiene, and enhances overall comfort new construction project a renovation or routine maintenance skilled plumbers ensure everything',
      replyTitle: 'Leave A Reply',
      replyNote: 'Your email address will not be published. Required fields are marked',
      replyPlaceholders: {
        name: 'Name',
        email: 'Email',
        comment: 'Comment',
      },
    },
    singleService: {
      categoryTitle: 'Service Category',
      categories: [
        'Interior Painting',
        'Wallpaper Design',
        'Exterior Painting',
        'Wallpaper Removal',
        'Tile installation',
      ],
      tags: ['Painting', 'Construction', 'Interior', 'Furniture', 'Building', 'Space', 'Urban'],
      getInTouch: 'Get In Touch',
      touchPlaceholders: {
        name: 'Name',
        email: 'Email',
        message: 'Your Message',
      },
      scheduleTitle: 'Schedule your consultation',
      scheduleText:
        'Roller painting is a fast efficient and versatile method for covering large surfaces with a smooth even coat paint Ideal for walls and ceilings roller painting ensures',
      emergencyLabel: 'Emergency Call',
      detailsTitle: 'Wallpaper Design Service',
      detailsParagraphs: [
        'Wallpaper removal is an essential step in preparing walls for a fresh, updated look. Over time, old wallpaper can peel fade or become outdated, making removal necessary for a clean and smooth surface. Professional wallpaper removal ensures the process',
        'Roller painting is a fast, efficient, and versatile method for covering large surfaces with a smooth, even coat of paint. Ideal for walls and ceilings, roller painting ensures consistent coverage with minimal streaks, making it a popular choice for both residential and commercial projects. Using the right roller type and technique, this method allows for quicker application',
      ],
      rangeTitle: 'Our Range of Customer Services',
      rangeText:
        'Professional tile installation ensures precise alignment, secure adhesion, and a flawless finish that can withstand moisture, heavy traffic, and daily wear. With its combination of beauty, functionality, and long-lasting performance, expertly installed tile adds value and elegance to any room. From subtle tones to bold statements, wall painting breathes new life into your space',
      midParagraph:
        'Tile installation is a durable and stylish solution for enhancing floors, walls, and surfaces in both residential and commercial spaces. Whether you\'re upgrading a bathroom, kitchen, or entryway, tile offers a wide range of design options—from classic ceramics to modern porcelains and natural stones remove adhesive residue, and prepare',
      coveredTitle: 'What’s covered in our service',
      coveredText:
        'Wall painting is one of the most effective ways to transform the look and feel of any space refreshing a single room or updating an entire property, the right paint color and finish can enhance mood, reflect personal style, and create a clean',
      coveredLeft: [
        'Quality Painting Excellence',
        'Expert Consultation Assurance',
        'Certified Painters Guarantee',
        'Commercial Residential Multi-Level',
        'Odor-Free Application',
      ],
      coveredRight: [
        'General Constructing',
        'Building Maintenance & Renovation',
        'Experienced Construction Professional',
        'Eco-Friendly Cleaning Products',
        'Customized Cleaning Packages',
      ],
    },
    singleProject: {
      projectInfoTitle: 'Project Information',
      ratingLabel: 'Rating:',
      title: 'Custom Home Renovations',
      paragraphs: [
        'Roller painting is a fast, efficient, and effective technique for achieving smooth and even coverage on large surfaces. Ideal for walls and ceilings, this method allows for a clean finish with minimal streaks and a consistent texture.',
        'Our expert color consultants take into account your style preferences, existing décor, architectural elements, and natural lighting to recommend shades that complement your vision. With professional guidance, you can avoid costly mistakes, gain confidence in your choices, and achieve a cohesive, beautiful result that truly reflects your personality and purpose.',
      ],
      solutionTitle: 'project solution',
      solutionText:
        'Color consultation is a personalized service designed to help you choose the perfect palette for your space. Whether refreshing a single room or transforming an entire property, selecting the right colors can greatly impact mood',
      checklist: [
        'Comprehensive Residential & Commercial Painting Services',
        'Professional & Experienced Painters',
        'Top-Quality Materials & Eco-Friendly Options',
        'Detailed Surface Preparation',
        'Transparent Pricing & Free Estimates',
      ],
      processTitle: 'Process & Challenge',
      processText:
        'Wall painting is more than just adding color it\'s about creating atmosphere enhancing style and expressing textures personality it’s a bold feature wall, a calming neutral palette, or a creative design, wall painting can dramatically transform any room. With the right combination of colors, textures, and techniques, walls can reflect your taste and elevate',
      closingText:
        'At our painting company, we are committed to transforming spaces with precision, passion, and professionalism. Whether it\'s a residential home, commercial property, or industrial site, our team of skilled painters delivers top-quality finishes using premium materials and modern techniques. We pride ourselves on attention to detail, reliability, and a customer-first approach',
      info: [
        { label: 'Project Name:', value: 'Custom Home renovation' },
        { label: 'Client::', value: 'Florence Smith' },
        { label: 'Tags:', value: 'painting, interior, building' },
        { label: 'Budgets:', value: '60,000 USD' },
        { label: 'Start Date:', value: '23 Jun 2025' },
        { label: 'End Date:', value: '17 September 2025' },
      ],
      freeConsultation: 'Free Consultation',
      emailSupport: 'Email Support',
      scheduleProject: 'Schedule Your Project',
      schedulePlaceholders: {
        name: 'Name',
        email: 'Email',
        message: 'Your Message',
      },
    },
    testimonialsPage: {
      items: [
        {
          text:
            '"From start to finish, the team made our entire interior painting project a stress-free experience. They helped us choose the perfect color palette, worked within our schedule, and kept us updated at every step. The painters were meticulous with their work, and they left our home clean and spotless transformation was unbelievable.”',
          name: 'Leonard Massie',
          role: 'Project Manager',
        },
        {
          text:
            '"I hired them to paint our office space, and the results were fantastic complete the job ahead of schedule, but they also managed to work around our business hours without disrupting our operations. The new look has completely refreshed the energy of our workplace and our staff loves the brighter more modern atmosphere.”',
          name: 'Caroline Bogert',
          role: 'Marketing Officer',
        },
        {
          text:
            '"We were overwhelmed with choices when planning to repaint our living room, but the color consultation service offered by this compan was a game changer helped us for pick the perfect tones to match our furniture and lighting. The execution was flawless no mess streaks and perfect edges care about their work their customers.”',
          name: 'Karen Pritchard',
          role: 'Interior Decorator',
        },
        {
          text:
            '"This painting company turned our outdated kitchen into a vibrant and modern space with just a few coats of carefully chosen paint. The crew was friendly, efficient, and took great pride in their work revived the heart of our home. I was particularly impressed their punctuality and attention to detail rare to find such dedicated.”',
          name: 'Rebeca Engebrets',
          role: 'Sales Manager',
        },
        {
          text:
            '"Hiring this team was one of the best decisions we made during our home renovation. They painted multiple rooms including ceilings and trims with incredible precision to care result was a fresh, elegant look that completely transformed our space arrived on time each day, worked and cleaned up thankful for their hard work."',
          name: 'Rebecca Edwards',
          role: 'Partner & CEO',
        },
        {
          text:
            '"We hired this team for both interior and exterior painting, and they did not disappoint. They provided a detailed quote, explained every step of the process, and delivered exceptional results. The quality of the paint and workmanship is top-tier, and the fresh look added a lot of value to our looking for a company that stands.”',
          name: 'Stephen Cordova',
          role: 'Interior Designer',
        },
      ],
    },
    faqsPage: {
      topTitle: 'Ask a question',
      title: 'Transforming Spaces With The Stroke Of A Brush',
      description:
        'From walls and ceilings to trims and accents a well executed interior paint job brings new life to any room and reflects your unique style with elegance and precision',
      helpTitle: 'Need Help?',
      helpLabel: 'Please Call Us:',
      formTitle: 'Ask a question',
      formHeading: 'Find What You Want To Know About Renovia Services',
      formPlaceholders: {
        name: 'Name',
        email: 'Email',
        phone: 'Phone',
        subject: 'Subject',
        message: 'Write Your Message',
      },
      faqs: [
        {
          question: 'How long does a money transfer take?',
          answer:
            'The right combination of colors textures and techniques walls can reflect wall taste and elevate the overall feel of your space from smooth finishes artistic accents professional wall painting ensures precision and a flawless look',
        },
        {
          question: 'How do you help customers choose the right colors?',
          answer:
            'We help customers choose the right colors by first understanding their preferences, the purpose of the space, and the mood they want to create. We consider factors like lighting, existing décor, and color psychology, and often provide samples or visual mock-ups so they can see how different colors will look in real life. Our goal is to guide them to a choice that is both visually appealing and practical.',
        },
        {
          question: 'How long will the painting project take?',
          answer:
            'The duration of a painting project depends on factors like the size of the area, the number of coats required, the condition of the surfaces, and the type of paint being used. For example, a small room may take 1–2 days, while larger areas or projects with detailed work could take several days to a week. We provide a realistic timeline after assessing the space to ensure quality work without unnecessary delays.',
        },
        {
          question: 'Do you offer any warranty or guarantee on your work?',
          answer:
            'Yes, we stand by the quality of our work. We offer a [specific time period, e.g., 1-year] warranty or guarantee on our painting and renovation services, which covers issues like peeling, cracking, or poor workmanship. Our aim is to ensure that every customer is fully satisfied and confident in the durability and finish of our work.',
        },
        {
          question: 'How do you prepare surfaces before painting?',
          answer:
            'Before painting, we carefully prepare all surfaces to ensure a smooth and long-lasting finish. This includes cleaning to remove dust and grease, sanding rough areas, filling cracks or holes with the right fillers, and applying primer if necessary. Proper preparation is essential because it helps the paint adhere better and prevents issues like peeling, bubbling, or uneven coverage.',
        },
        {
          question: 'Is your company licensed and insured?',
          answer:
            'Yes, our company is fully licensed and insured. Being licensed ensures that we comply with all local regulations and industry standards, and our insurance protects both our team and our clients in case of accidents or damage. This gives our customers peace of mind that the work is done safely and professionally.',
        },
        {
          question: 'What safety measures do you take on the job site?',
          answer:
            'Safety is a top priority on every job site. Our team wears appropriate protective gear, such as gloves, masks, and safety goggles. We follow proper procedures for ladders and equipment, ensure good ventilation, and keep the site organized to prevent accidents. By adhering to all industry safety standards, we create a safe environment for both our workers and clients.',
        },
      ],
    },
    contactPage: {
      infoCards: {
        phone: 'Phone Number',
        email: 'Our Email',
        location: 'Our Location',
      },
      locationText: 'Moscow, Russia',
      getInTouchTop: 'get in touch',
      getInTouchTitle: 'Don’t Hesitate To Contact Us',
      formPlaceholders: {
        name: 'Name',
        email: 'Email',
        phone: 'Phone',
        subject: 'Subject',
        message: 'Write Your Message',
      },
      mapTitle: 'Map',
    },
    requestQuote: {
      topTitle: 'quote',
      title: 'Request A Quote Now For Your Next Project',
      placeholders: {
        name: 'Name',
        email: 'Email',
        phone: 'Phone',
        category: 'Project Category',
        location: 'Project Location',
        message: 'Write Your Message',
      },
      categories: ['Home Renovation', 'Kitchen Remodeling', 'Bedroom Renovation'],
      locations: ['Seattle', 'San Francisco', 'Austin'],
    },
    privacy: {
      updated: 'Last updated: December 2025',
      title: 'Privacy policy',
      sections: [
        'Turpis gravida turpis mauris magna in libero ac dis consequat. Imperdiet ac semper quisque volutpat consectetur cursus non pretium pharetra. Nisl duis blandit dui imperdiet nec id integer. Elit varius cras arcu tempor integer in.',
        'Quam nunc arcu nunc a lobortis convallis magnis dolor. Integer malesuada vel mi eu elementum. Etiam eget urna quis dui amet facilisis fringilla sed. Massa vitae accumsan viverra in morbi nec volutpat aenean tortor. At nec sagittis eget placerat. Mi accumsan massa vitae etiam nisi suspendisse condimentum elementum. Arcu varius id ipsum arcu et diam non rutrum. Auctor elit malesuada non aenean posuere mattis iaculis mauris nibh.',
      ],
      headings: [
        'What type of personal information do we collect?',
        'How do we collect your personal data?',
        'What are our legal bases for processing your data?',
        'Security',
      ],
      paragraphs: [
        'Turpis gravida turpis mauris magna in libero ac dis consequat. Imperdiet ac semper quisque volutpat consectetur cursus non pretium pharetra. Nisl duis blandit dui imperdiet nec id integer. Elit varius cras arcu tempor integer in. Quam nunc arcu nunc a lobortis convallis magnis dolor. Integer malesuada vel mi eu elementum. Etiam eget urna quis dui amet facilisis fringilla sed. Massa vitae accumsan viverra in morbi nec volutpat aenean tortor. At nec sagittis eget placerat. Mi accumsan massa vitae etiam nisi suspendisse condimentum elementum. Arcu varius id ipsum arcu et diam non rutrum. Auctor elit malesuada non aenean posuere mattis iaculis mauris nibh.',
        'Turpis gravida turpis mauris magna in libero ac dis consequat. Imperdiet ac semper quisque volutpat consectetur cursus non pretium pharetra. Nisl duis blandit dui imperdiet nec id integer. Elit varius cras arcu tempor integer in.',
        'Quam nunc arcu nunc a lobortis convallis magnis dolor. Integer malesuada vel mi eu elementum. Etiam eget urna quis dui amet facilisis fringilla sed. Massa vitae accumsan viverra in morbi nec volutpat aenean tortor. At nec sagittis eget placerat. Mi accumsan massa vitae etiam nisi suspendisse condimentum elementum. Arcu varius id ipsum arcu et diam non rutrum. Auctor elit malesuada non aenean posuere mattis iaculis mauris nibh.',
        'Turpis gravida turpis mauris magna in libero ac dis consequat. Imperdiet ac semper quisque volutpat consectetur cursus non pretium pharetra. Nisl duis blandit dui imperdiet nec id integer. Elit varius cras arcu tempor integer in. Quam nunc arcu nunc a lobortis convallis magnis dolor. Integer malesuada vel mi eu elementum. Etiam eget urna quis dui amet facilisis fringilla sed. Massa vitae accumsan viverra in morbi nec volutpat aenean tortor. At nec sagittis eget placerat. Mi accumsan massa vitae etiam nisi suspendisse condimentum elementum. Arcu varius id ipsum arcu et diam non rutrum. Auctor elit malesuada non aenean posuere mattis iaculis mauris nibh.',
        'Turpis gravida turpis mauris magna in libero ac dis consequat. Imperdiet ac semper quisque volutpat consectetur cursus non pretium pharetra. Nisl duis blandit dui imperdiet nec id integer. Elit varius cras arcu tempor integer in.',
        'Quam nunc arcu nunc a lobortis convallis magnis dolor. Integer malesuada vel mi eu elementum. Etiam eget urna quis dui amet facilisis fringilla sed. Massa vitae accumsan viverra in morbi nec volutpat aenean tortor. At nec sagittis eget placerat. Mi accumsan massa vitae etiam nisi suspendisse condimentum elementum. Arcu varius id ipsum arcu et diam non rutrum. Auctor elit malesuada non aenean posuere mattis iaculis mauris nibh.',
      ],
      list: [
        'Imperdiet ac semper quisque volutpat consectetur cursus non pretium pharetra.',
        'Nisl duis blandit dui imperdiet nec id integer.',
        'Quam nunc arcu nunc a lobortis convallis magnis dolor.',
        'Massa vitae accumsan viverra in morbi nec volutpat aenean tortor.',
      ],
    },
    terms: {
      updated: 'Last updated: December 2025',
      title: 'Terms & Conditions',
      sections: [
        'Turpis gravida turpis mauris magna in libero ac dis consequat. Imperdiet ac semper quisque volutpat consectetur cursus non pretium pharetra. Nisl duis blandit dui imperdiet nec id integer. Elit varius cras arcu tempor integer in.',
        'Quam nunc arcu nunc a lobortis convallis magnis dolor. Integer malesuada vel mi eu elementum. Etiam eget urna quis dui amet facilisis fringilla sed. Massa vitae accumsan viverra in morbi nec volutpat aenean tortor. At nec sagittis eget placerat. Mi accumsan massa vitae etiam nisi suspendisse condimentum elementum. Arcu varius id ipsum arcu et diam non rutrum. Auctor elit malesuada non aenean posuere mattis iaculis mauris nibh.',
      ],
      headings: [
        'What type of personal information do we collect?',
        'How do we collect your personal data?',
        'What are our legal bases for processing your data?',
        'Security',
      ],
      paragraphs: [
        'Turpis gravida turpis mauris magna in libero ac dis consequat. Imperdiet ac semper quisque volutpat consectetur cursus non pretium pharetra. Nisl duis blandit dui imperdiet nec id integer. Elit varius cras arcu tempor integer in. Quam nunc arcu nunc a lobortis convallis magnis dolor. Integer malesuada vel mi eu elementum. Etiam eget urna quis dui amet facilisis fringilla sed. Massa vitae accumsan viverra in morbi nec volutpat aenean tortor. At nec sagittis eget placerat. Mi accumsan massa vitae etiam nisi suspendisse condimentum elementum. Arcu varius id ipsum arcu et diam non rutrum. Auctor elit malesuada non aenean posuere mattis iaculis mauris nibh.',
        'Turpis gravida turpis mauris magna in libero ac dis consequat. Imperdiet ac semper quisque volutpat consectetur cursus non pretium pharetra. Nisl duis blandit dui imperdiet nec id integer. Elit varius cras arcu tempor integer in.',
        'Quam nunc arcu nunc a lobortis convallis magnis dolor. Integer malesuada vel mi eu elementum. Etiam eget urna quis dui amet facilisis fringilla sed. Massa vitae accumsan viverra in morbi nec volutpat aenean tortor. At nec sagittis eget placerat. Mi accumsan massa vitae etiam nisi suspendisse condimentum elementum. Arcu varius id ipsum arcu et diam non rutrum. Auctor elit malesuada non aenean posuere mattis iaculis mauris nibh.',
        'Turpis gravida turpis mauris magna in libero ac dis consequat. Imperdiet ac semper quisque volutpat consectetur cursus non pretium pharetra. Nisl duis blandit dui imperdiet nec id integer. Elit varius cras arcu tempor integer in. Quam nunc arcu nunc a lobortis convallis magnis dolor. Integer malesuada vel mi eu elementum. Etiam eget urna quis dui amet facilisis fringilla sed. Massa vitae accumsan viverra in morbi nec volutpat aenean tortor. At nec sagittis eget placerat. Mi accumsan massa vitae etiam nisi suspendisse condimentum elementum. Arcu varius id ipsum arcu et diam non rutrum. Auctor elit malesuada non aenean posuere mattis iaculis mauris nibh.',
        'Turpis gravida turpis mauris magna in libero ac dis consequat. Imperdiet ac semper quisque volutpat consectetur cursus non pretium pharetra. Nisl duis blandit dui imperdiet nec id integer. Elit varius cras arcu tempor integer in.',
        'Quam nunc arcu nunc a lobortis convallis magnis dolor. Integer malesuada vel mi eu elementum. Etiam eget urna quis dui amet facilisis fringilla sed. Massa vitae accumsan viverra in morbi nec volutpat aenean tortor. At nec sagittis eget placerat. Mi accumsan massa vitae etiam nisi suspendisse condimentum elementum. Arcu varius id ipsum arcu et diam non rutrum. Auctor elit malesuada non aenean posuere mattis iaculis mauris nibh.',
      ],
      list: [
        'Imperdiet ac semper quisque volutpat consectetur cursus non pretium pharetra.',
        'Nisl duis blandit dui imperdiet nec id integer.',
        'Quam nunc arcu nunc a lobortis convallis magnis dolor.',
        'Massa vitae accumsan viverra in morbi nec volutpat aenean tortor.',
      ],
    },
    errorPage: {
      title: 'Oops! page is not found',
      description: 'Sorry, but the page you are looking for does not exist.',
      button: 'Back To Homepage',
    },
  },
  ru: {
    header: {
      locationLabel: 'Адрес:',
      emailLabel: 'Email:',
      links: {
        about: 'О нас',
        faq: 'FAQ',
        testimonials: 'Отзывы',
      },
    },
    company: {
      address: 'Москва, Россия',
      email: 'hello@renovia.com',
      emailAlt: 'support@renovia.com',
      phone: '+7 (495) 123-45-67',
      phoneAlt: '+7 (495) 765-43-21',
    },
    nav: {
      about: 'О нас',
      testimonials: 'Отзывы',
      faqs: 'FAQ',
      pricing: 'Цены',
      projects: 'Проекты',
      blog: 'Блог',
      contact: 'Контакты',
    },
    buttons: {
      getFreeQuote: 'Получить расчет',
    },
    footer: {
      newsletterText: 'Подпишитесь на рассылку, чтобы получать еженедельные новости и обновления',
      urgentService: 'Срочный сервис',
      getInTouch: 'Свяжитесь с нами',
      ourServices: 'Наши услуги',
      followUs: 'Мы в соцсетях',
      privacy: 'Политика конфиденциальности',
      terms: 'Условия использования',
      language: 'Язык',
      emailPlaceholder: 'Введите email',
    },
    footerServices: [
      'Покраска жилых помещений',
      'Консультация по интерьерному дизайну',
      'Коммерческий ремонт',
      'Консультация по покраске',
      'Безупречное качество',
    ],
    footerContacts: {
      location: 'Адрес',
      email: 'Email',
      phone: 'Телефон',
    },
    sidebar: {
      blurb:
        'Мы гордимся вниманием к деталям, надежностью и ориентацией на клиента — от подбора цвета до финишного слоя',
      newsletterTitle: 'Рассылка',
      contactInfo: 'Контакты',
      followUs: 'Мы в соцсетях',
      emailPlaceholder: 'Введите email',
    },
    search: {
      placeholder: 'Поиск',
    },
    common: {
      home: 'Главная',
      readMore: 'Подробнее',
      browseMore: 'Смотреть дальше',
      bookingNow: 'Записаться',
      sendMessage: 'Отправить сообщение',
      contactNow: 'Связаться',
      contactUsNow: 'Связаться с нами',
      searchHere: 'Поиск',
      popularPost: 'Популярные статьи',
      newsCategory: 'Категории',
      popularTags: 'Популярные теги',
      share: 'Поделиться:',
      reply: 'Ответить',
      postComment: 'Отправить комментарий',
      leaveReply: 'Оставить комментарий',
    },
    banner: {
      topTitle: 'добро пожаловать в renovia',
      title: 'Ремонт и реконструкция в Москве',
      description:
        'Ремонт — лучший способ обновить пространство: от одной комнаты до всего объекта. Мы улучшаем функциональность, эстетику и комфорт.',
      buttons: {
        explore: 'Наши услуги',
        learn: 'Узнать больше',
      },
      stats: [
        { value: 28, suffix: '+', label: 'Лет опыта' },
        { value: 3, suffix: 'k+', label: 'Довольных клиентов' },
        { value: 10, suffix: '+', label: 'Профессиональных наград' },
      ],
    },
    whatWeDo: {
      topTitle: 'что мы делаем',
      title: 'Что мы делаем',
      items: [
        {
          title: 'Ремонт квартир',
          description:
            'От косметического до капитального: подготовка поверхностей, качественные материалы и аккуратная работа',
        },
        {
          title: 'Коммерческие объекты',
          description:
            'Офисы, магазины и пространства под бизнес: сроки, планирование и минимальные простои',
        },
        {
          title: 'Консультация по интерьеру',
          description:
            'Поможем с концепцией, цветами и материалами, чтобы интерьер был удобным и современным',
        },
      ],
    },
    getToKnow: {
      topTitle: 'О нас',
      title: 'Ремонт под вашу задачу и бюджет',
      description:
        'Повышаем комфорт, улучшаем планировки и увеличиваем ценность недвижимости',
      list: ['Онлайн-заявка за 2 минуты', 'Поддержка 24/7', 'Напоминания о работах'],
      button: 'Подробнее о компании',
      authorName: 'Анна Морозова',
      authorRole: 'Основательница и генеральный директор',
      accordion: [
        {
          title: 'Наша миссия',
          body:
            'Мы создаем комфортные и продуманные пространства, сочетая качество, точность и заботу о клиентах.',
        },
        {
          title: 'Наше видение',
          body:
            'Стать надежным партнером в ремонте и реконструкции, предлагая инновации, качество и долгосрочную ценность.',
        },
        {
          title: 'Наши принципы',
          list: [
            {
              title: 'Качество:',
              text: 'Безупречная отделка и аккуратные детали в каждой работе.',
            },
            {
              title: 'Честность:',
              text: 'Прозрачные сметы, сроки и понятные этапы.',
            },
            {
              title: 'Сервис:',
              text: 'Ставим интересы клиента в центр каждого решения.',
            },
          ],
        },
      ],
      marquee: ['Надежно', 'Дизайн', 'Качество', 'Лучшие цены', 'Сильная команда'],
    },
    servicesHome: {
      topTitle: 'наши услуги',
      title: 'Комплексный ремонт под ключ',
      benefits: [
        'Проверенные материалы и инструменты',
        'Премиальные покрытия и отделка',
        'Гарантия качества на работы',
      ],
      button: 'Все услуги',
      tabs: [
        {
          title: 'Кухни',
          description:
            'Обновление кухни с грамотной планировкой, хранением и светом для ежедневного удобства',
        },
        {
          title: 'Спальни',
          description:
            'Комфортные пространства для отдыха: свет, отделка и функциональная мебель',
        },
        {
          title: 'Фасады',
          description:
            'Обновление внешнего вида и защита фасада от погодных условий',
        },
        {
          title: 'Ванные комнаты',
          description:
            'Планировка, отделка и влагостойкие решения для надежного результата',
        },
      ],
    },
    projectsHome: {
      topTitle: 'Последние проекты',
      title: 'Последние проекты',
      items: [
        { title: 'Комплексный ремонт дома', category: 'ремонт дома' },
        { title: 'Ремонт кухни', category: 'ремонт дома' },
        { title: 'Обновление спальни', category: 'ремонт дома' },
      ],
    },
    whyChoose: {
      topTitle: 'почему мы',
      title: 'Почему выбирают Renovia для ремонта',
      items: [
        {
          title: 'Жилые помещения',
          description:
            'Обновляем квартиры и дома, улучшая функциональность и внешний вид',
        },
        {
          title: 'Дизайн и планирование',
          description:
            'От идеи до реализации — логичная планировка и понятные решения',
        },
        {
          title: 'Ремонт под ключ',
          description:
            'Полный цикл работ: от подготовки до финальной сдачи',
        },
      ],
      progress: [
        { label: 'Профессиональные мастера', percent: 90 },
        { label: 'Покрытие распылением', percent: 80 },
      ],
    },
    testimonialsHome: {
      topTitle: 'отзывы',
      title: 'Что говорят наши клиенты',
      trustedBy: 'Нас рекомендуют 1000+ клиентов',
      items: [
        {
          quote: 'Отличное качество и внимание к деталям!',
          text:
            'Больше всего впечатлила коммуникация: нас держали в курсе каждого этапа, работали аккуратно и в срок. Результатом очень довольны.',
          name: 'Мария Кузнецова',
          location: 'Москва',
        },
        {
          quote: 'Превзошли ожидания',
          text:
            'Команда работала аккуратно, завершили раньше срока, а подбор цветов действительно освежил интерьер. Рекомендуем.',
          name: 'Ольга Иванова',
          location: 'Санкт-Петербург',
        },
      ],
    },
    teamHome: {
      topTitle: 'Команда',
      title: 'Наша команда',
      members: [
        { name: 'Сергей Романов', role: 'Консультант по отделке' },
        { name: 'Алексей Смирнов', role: 'Мастер по деталям' },
        { name: 'Игорь Соколов', role: 'Специалист по поверхностям' },
        { name: 'Дмитрий Орлов', role: 'Руководитель бригады' },
      ],
    },
    partners: {
      title: 'СПАСИБО НАШИМ ПАРТНЕРАМ',
    },
    contactSection: {
      topTitle: 'контакты',
      title: 'Запишитесь на ближайший ремонт',
      description:
        'Ремонт может включать дополнительные комнаты, кабинеты или отделку под ключ — мы поможем выбрать оптимальное решение.',
      helpTitle: 'Нужна помощь?',
      helpLabel: 'Позвоните нам:',
      formTitle: 'Заполните форму',
      formDescription:
        'Готовы начать проект или просто есть вопросы? Мы на связи и быстро ответим.',
      placeholders: {
        name: 'Ваше имя',
        email: 'Ваш email',
        phone: 'Ваш телефон',
        message: 'Ваше сообщение',
      },
      termsText: 'Я принимаю',
    },
    funFacts: {
      title: 'ИНТЕРЕСНЫЕ ФАКТЫ',
      items: [
        { value: 85, label: 'Повторных клиентов' },
        { value: 38, label: 'Лет опыта команды' },
        { value: 74, label: 'Проектов завершено' },
        { value: 62, label: 'Специалиста в штате' },
      ],
    },
    blogHome: {
      topTitle: 'новости',
      title: 'Полезные статьи о ремонте и дизайне',
      readMore: 'Читать далее',
      posts: [
        {
          tag: 'Дом',
          date: '1 июня 2025',
          comments: '0 комментариев',
          title: 'Полный гид по планированию ремонта',
          excerpt:
            'В процессе ремонта можно выявить скрытые проблемы: проводка, протечки и дефекты конструкции',
        },
        {
          tag: 'Офис',
          date: '2 июня 2025',
          comments: '1 комментарий',
          title: 'Экологичные решения для здорового дома',
          excerpt:
            'Ремонт может включать кабинеты, дополнительные комнаты и полезные зоны',
        },
        {
          tag: 'Индивидуально',
          date: '3 июня 2025',
          comments: '2 комментария',
          title: 'Идеи для ванной как в спа',
          excerpt:
            'Реконструкция помогает привести дом в соответствие современным стандартам',
        },
      ],
    },
    consultation: {
      title: 'Бесплатная консультация по ремонту',
      button: 'Связаться',
    },
    subscribe: {
      topTitle: 'РАССЫЛКА',
      title: 'Подпишитесь на новости',
      emailPlaceholder: 'Введите email',
      termsText: 'Я принимаю',
    },
    pages: {
      about: 'О нас',
      services: 'Наши услуги',
      pricing: 'Цены',
      projects: 'Проекты',
      blog: 'Блог',
      contact: 'Контакты',
      testimonials: 'Отзывы',
      faqs: 'FAQ',
      requestQuote: 'Запросить расчет',
      privacy: 'Политика конфиденциальности',
      terms: 'Условия использования',
      error: 'Ошибка 404',
      serviceDetails: 'Детали услуги',
      projectDetails: 'Детали проекта',
      singleBlog: 'Статья',
    },
    aboutPage: {
      getToKnowTitle: 'О нас',
      getToKnowHeading: 'Надежная команда для вашего ремонта',
      getToKnowText:
        'Мы делаем ремонт аккуратно, прозрачно и с вниманием к деталям — от планирования до сдачи.',
      moreAbout: 'Подробнее',
      progressTitle: 'Прогресс компании',
      progressItems: [
        { label: 'Удовлетворенность', percent: 90 },
        { label: 'Рост', percent: 80 },
      ],
      knowItems: [
        {
          number: '01',
          title: 'Наша миссия',
          text: 'Создавать комфортные пространства, которые улучшают жизнь людей.',
        },
        {
          number: '02',
          title: 'Наше видение',
          text: 'Сделать ремонт понятным, прогнозируемым и качественным для каждого клиента.',
        },
      ],
      workingProcessTop: 'как мы работаем',
      workingProcessTitle: 'Как мы работаем',
      workingSteps: [
        {
          title: 'Запрос сметы',
          text: 'Свяжитесь с нами и расскажите о задаче',
        },
        {
          title: 'Выезд и консультация',
          text: 'Оцениваем объект и обсуждаем решения',
        },
        {
          title: 'Выполнение работ',
          text: 'Работаем по плану, соблюдая сроки и качество',
        },
        {
          title: 'Финальная проверка',
          text: 'Сдаем результат и подтверждаем качество',
        },
      ],
      testimonialTop: 'отзывы',
      testimonialTitle: 'Отзывы клиентов о нашей работе',
      testimonials: [
        {
          quote: '“Наш дом выглядит как новый”',
          quoteAsHeading: false,
          text:
            '“Команда отлично справилась с обновлением интерьера: аккуратно, чисто и точно в срок. Рекомендуем.”',
          name: 'Мария Кузнецова',
          location: 'Москва',
        },
        {
          quote: '“Превзошли ожидания”',
          quoteAsHeading: true,
          text:
            '“От первого контакта до финальной сдачи — все профессионально и внимательно.”',
          name: 'Ольга Иванова',
          location: 'Санкт-Петербург',
        },
      ],
      marquee: [
        'Качество работ',
        'Сертифицированные мастера',
        'Качество работ',
        'Сертифицированные мастера',
        'Качество работ',
        'Сертифицированные мастера',
        'Качество работ',
        'Сертифицированные мастера',
        'Качество работ',
        'Сертифицированные мастера',
        'Качество работ',
        'Комфорт и уверенность',
      ],
    },
    pricingPage: {
      topTitle: 'Тарифы',
      title: 'Выберите подходящий пакет',
      plans: [
        {
          title: 'Ремонт квартиры',
          description:
            'Оптимальный пакет для обновления жилых помещений и улучшения комфорта',
          price: '3 600 ₽',
          frequency: '(час)',
          isActive: true,
          features: [
            'Подготовка поверхностей',
            'Вывоз мусора',
            'Чистовая отделка',
            'Уборка после работ',
            'Санузлы и кухни',
          ],
        },
        {
          title: 'Офисный ремонт',
          description:
            'Решения для бизнеса: сроки, организация и минимум простоев',
          price: '5 400 ₽',
          frequency: '(час)',
          isActive: false,
          features: [
            'Все услуги базового пакета',
            'Работы вне рабочего времени',
            'Отделка санузлов и кухни',
            'Плинтуса и молдинги',
            'Окна и жалюзи',
          ],
        },
        {
          title: 'Индивидуальный проект',
          description:
            'Гибкий пакет под сложные задачи и дизайнерские решения',
          price: '7 200 ₽',
          frequency: '(час)',
          isActive: true,
          features: [
            'Индивидуальный график',
            'Гибкие сроки',
            'Санузлы и кухни',
            'Работа с разными типами помещений',
            'Сопровождение и контроль качества',
          ],
        },
      ],
      marquee: [
        'Качество работ',
        'Сертифицированные мастера',
        'Качество работ',
        'Сертифицированные мастера',
        'Качество работ',
        'Сертифицированные мастера',
        'Качество работ',
        'Сертифицированные мастера',
        'Качество работ',
        'Сертифицированные мастера',
        'Качество работ',
        'Комфорт и уверенность',
      ],
    },
    servicesPage: {
      services: [
        {
          title: 'Внутренняя отделка',
          description:
            'Освежаем интерьер, подбираем материалы и создаем аккуратный результат',
        },
        {
          title: 'Дизайн обоев',
          description:
            'Фактуры, узоры и грамотная оклейка для стильного пространства',
        },
        {
          title: 'Фасады',
          description:
            'Обновление внешнего вида и защита от внешних воздействий',
        },
        {
          title: 'Поставка материалов',
          description:
            'Подберем и доставим материалы для качественной отделки',
        },
        {
          title: 'Наружные работы',
          description:
            'Работы по наружной отделке и обновлению объектов',
        },
        {
          title: 'Снятие обоев',
          description:
            'Подготовка стен под новую отделку без повреждений',
        },
        {
          title: 'Поставка материалов',
          description:
            'Надежные материалы и проверенные поставщики',
        },
        {
          title: 'Наружные работы',
          description:
            'Комплексная отделка и защита фасада',
        },
        {
          title: 'Снятие обоев',
          description:
            'Быстро и аккуратно подготовим стены',
        },
      ],
    },
    projectsPage: {
      items: [
        { title: 'Комплексный ремонт дома', category: 'ремонт дома' },
        { title: 'Ремонт кухни', category: 'ремонт дома' },
        { title: 'Обновление спальни', category: 'ремонт дома' },
        { title: 'Обновление спальни', category: 'ремонт дома' },
        { title: 'Обновление спальни', category: 'ремонт дома' },
        { title: 'Комплексный ремонт дома', category: 'ремонт дома' },
        { title: 'Ремонт кухни', category: 'ремонт дома' },
        { title: 'Обновление спальни', category: 'ремонт дома' },
      ],
    },
    blogPage: {
      posts: [
        {
          tag: 'Дом',
          date: '1 июня 2025',
          comments: '0 комментариев',
          title: 'Полный гид по планированию ремонта',
          excerpt:
            'В процессе ремонта можно выявить скрытые проблемы: проводка, протечки и дефекты конструкции',
        },
        {
          tag: 'Офис',
          date: '2 июня 2025',
          comments: '1 комментарий',
          title: 'Экологичные решения для здорового дома',
          excerpt:
            'Ремонт может включать кабинеты, дополнительные комнаты и полезные зоны',
        },
        {
          tag: 'Индивидуально',
          date: '3 июня 2025',
          comments: '2 комментария',
          title: 'Идеи для ванной как в спа',
          excerpt:
            'Реконструкция помогает привести дом в соответствие современным стандартам',
        },
        {
          tag: 'Дом',
          date: '1 июня 2025',
          comments: '0 комментариев',
          title: 'Полный гид по планированию ремонта',
          excerpt:
            'В процессе ремонта можно выявить скрытые проблемы: проводка, протечки и дефекты конструкции',
        },
        {
          tag: 'Офис',
          date: '2 июня 2025',
          comments: '1 комментарий',
          title: 'Экологичные решения для здорового дома',
          excerpt:
            'Ремонт может включать кабинеты, дополнительные комнаты и полезные зоны',
        },
        {
          tag: 'Индивидуально',
          date: '3 июня 2025',
          comments: '2 комментария',
          title: 'Идеи для ванной как в спа',
          excerpt:
            'Реконструкция помогает привести дом в соответствие современным стандартам',
        },
      ],
      popularPosts: [
        {
          date: '7 июня 2025',
          title: 'Как спланировать бюджет и сроки ремонта',
        },
        {
          date: '8 июня 2025',
          title: 'До/после: впечатляющие трансформации',
        },
        {
          date: '9 июня 2025',
          title: 'Частые ошибки в ремонте и как их избежать',
        },
      ],
      categories: [
        'Внутренняя отделка',
        'Обои и дизайн',
        'Фасады',
        'Снятие обоев',
        'Укладка плитки',
      ],
      tags: ['Ремонт', 'Стройка', 'Интерьер', 'Мебель', 'Дом', 'Проект', 'Город'],
    },
    singleBlog: {
      tag: 'Офис',
      date: '2 июня 2025',
      comments: '1 комментарий',
      title: 'Экологичные решения для здорового дома',
      paragraphs: [
        'Ремонт спальни — это способ создать комфортное и функциональное пространство для отдыха. Грамотная планировка, свет и отделка делают интерьер уютным и практичным.',
        'Продуманное рабочее место повышает продуктивность и комфорт. Эргономика, хранение и свет — ключевые элементы удобного офиса.',
      ],
      quote:
        'Правильно подобранные краски защищают стены от влаги и износа, сохраняя красивый внешний вид.',
      subTitle: 'Самое время обновить интерьер',
      subParagraphs: [
        'Ремонт кухни повышает функциональность и комфорт. Это инвестиция в удобство и ценность дома.',
        'Это не только про эстетику: качественная отделка увеличивает стоимость и удобство жилья.',
      ],
      tags: ['Кухня,', 'Дом,', 'Ремонт'],
      authorName: 'William Driscoll',
      authorBio:
        'Профессиональные работы по коммуникациям важны для безопасности и надежности объекта — от монтажа до обслуживания.',
      commentTitle: '01 комментарий',
      commentName: 'David Cochran',
      commentMeta: 'Mar 10,2025 | 08:10 pm',
      commentText:
        'Качественные работы помогают избежать проблем и обеспечивают надежность на годы.',
      replyTitle: 'Оставить комментарий',
      replyNote: 'Ваш email не будет опубликован. Обязательные поля отмечены',
      replyPlaceholders: {
        name: 'Имя',
        email: 'Email',
        comment: 'Комментарий',
      },
    },
    singleService: {
      categoryTitle: 'Категории услуг',
      categories: [
        'Внутренняя отделка',
        'Обои и дизайн',
        'Фасады',
        'Снятие обоев',
        'Укладка плитки',
      ],
      tags: ['Ремонт', 'Стройка', 'Интерьер', 'Мебель', 'Дом', 'Проект', 'Город'],
      getInTouch: 'Связаться',
      touchPlaceholders: {
        name: 'Имя',
        email: 'Email',
        message: 'Сообщение',
      },
      scheduleTitle: 'Запланировать консультацию',
      scheduleText:
        'Валиковая покраска — быстрый и надежный способ получить ровное покрытие на больших поверхностях.',
      emergencyLabel: 'Срочный звонок',
      detailsTitle: 'Дизайн обоев',
      detailsParagraphs: [
        'Снятие обоев — важный этап подготовки стен. Мы аккуратно удаляем покрытие и готовим поверхность.',
        'Валиковая покраска обеспечивает равномерное покрытие и экономит время на больших площадях.',
      ],
      rangeTitle: 'Что мы предлагаем',
      rangeText:
        'Профессиональная укладка плитки обеспечивает долговечность и аккуратный внешний вид. От классических решений до современных материалов.',
      midParagraph:
        'Плитка — практичный выбор для ванных, кухонь и входных зон. Мы подбираем решения под ваш стиль и задачи.',
      coveredTitle: 'Что входит в услугу',
      coveredText:
        'Качественная отделка меняет пространство: правильные материалы, цвета и технологии дают чистый и аккуратный результат.',
      coveredLeft: [
        'Качество отделки',
        'Профессиональная консультация',
        'Гарантия качества',
        'Жилые и коммерческие проекты',
        'Без запаха и лишнего мусора',
      ],
      coveredRight: [
        'Строительные работы',
        'Техническое обслуживание',
        'Опытные специалисты',
        'Экологичные материалы',
        'Индивидуальные решения',
      ],
    },
    singleProject: {
      projectInfoTitle: 'Информация о проекте',
      ratingLabel: 'Рейтинг:',
      title: 'Комплексный ремонт дома',
      paragraphs: [
        'Валиковая покраска — эффективный метод для ровного покрытия стен и потолков.',
        'Наши специалисты помогают подобрать цвета и материалы, чтобы интерьер выглядел гармонично.',
      ],
      solutionTitle: 'решение проекта',
      solutionText:
        'Консультация по цвету помогает выбрать правильную палитру и создать нужное настроение.',
      checklist: [
        'Полный спектр работ',
        'Опытная команда',
        'Премиальные материалы',
        'Тщательная подготовка поверхностей',
        'Прозрачная смета',
      ],
      processTitle: 'Процесс и сложности',
      processText:
        'Отделка — это не только цвет, но и атмосфера. Мы подбираем решения под стиль и задачи клиента.',
      closingText:
        'Мы выполняем ремонт с вниманием к деталям, современными технологиями и ориентацией на результат.',
      info: [
        { label: 'Название:', value: 'Комплексный ремонт дома' },
        { label: 'Клиент:', value: 'Florence Smith' },
        { label: 'Теги:', value: 'ремонт, интерьер, строительство' },
        { label: 'Бюджет:', value: '60,000 USD' },
        { label: 'Старт:', value: '23 Jun 2025' },
        { label: 'Финиш:', value: '17 September 2025' },
      ],
      freeConsultation: 'Бесплатная консультация',
      emailSupport: 'Поддержка по email',
      scheduleProject: 'Запланировать проект',
      schedulePlaceholders: {
        name: 'Имя',
        email: 'Email',
        message: 'Сообщение',
      },
    },
    testimonialsPage: {
      items: [
        {
          text:
            '“От начала до конца все было организовано четко. Подбор цвета, сроки и аккуратность — на высоте.”',
          name: 'Leonard Massie',
          role: 'Project Manager',
        },
        {
          text:
            '“Офис преобразился, работы сделали аккуратно и без остановки бизнеса.”',
          name: 'Caroline Bogert',
          role: 'Marketing Officer',
        },
        {
          text:
            '“Сомневались с выбором цвета, консультация помогла. Результат отличный.”',
          name: 'Karen Pritchard',
          role: 'Interior Decorator',
        },
        {
          text:
            '“Кухня стала современной и свежей. Команда вежливая и пунктуальная.”',
          name: 'Rebeca Engebrets',
          role: 'Sales Manager',
        },
        {
          text:
            '“Лучшее решение в нашем ремонте — работа этой команды.”',
          name: 'Rebecca Edwards',
          role: 'Partner & CEO',
        },
        {
          text:
            '“Качество материалов и исполнения на высоком уровне. Рекомендуем.”',
          name: 'Stephen Cordova',
          role: 'Interior Designer',
        },
      ],
    },
    faqsPage: {
      topTitle: 'Вопросы',
      title: 'Ответы на популярные вопросы',
      description:
        'От подготовки стен до финишной отделки — рассказываем, как проходит ремонт',
      helpTitle: 'Нужна помощь?',
      helpLabel: 'Позвоните нам:',
      formTitle: 'Вопросы',
      formHeading: 'Ответим на любые вопросы о Renovia',
      formPlaceholders: {
        name: 'Имя',
        email: 'Email',
        phone: 'Телефон',
        subject: 'Тема',
        message: 'Сообщение',
      },
      faqs: [
        {
          question: 'Сколько длится ремонт?',
          answer:
            'Срок зависит от объема работ, состояния объекта и сложности проекта. Мы заранее согласовываем график.',
        },
        {
          question: 'Помогаете ли с выбором материалов?',
          answer:
            'Да, подбираем материалы под задачу и бюджет, предлагаем несколько вариантов.',
        },
        {
          question: 'Можно ли делать ремонт поэтапно?',
          answer:
            'Да, мы можем разделить работы на этапы, чтобы было удобнее по времени и бюджету.',
        },
        {
          question: 'Есть ли гарантия?',
          answer:
            'Да, мы предоставляем гарантию на выполненные работы.',
        },
        {
          question: 'Как подготовить помещение?',
          answer:
            'Мы подскажем, что убрать и как подготовить пространство. Остальное возьмем на себя.',
        },
        {
          question: 'Вы официально работаете?',
          answer:
            'Да, мы работаем официально и предоставляем необходимые документы.',
        },
        {
          question: 'Как обеспечиваете безопасность?',
          answer:
            'Мы соблюдаем технику безопасности, используем защиту и аккуратно организуем площадку.',
        },
      ],
    },
    contactPage: {
      infoCards: {
        phone: 'Телефон',
        email: 'Email',
        location: 'Адрес',
      },
      locationText: 'Москва, Россия',
      getInTouchTop: 'связаться',
      getInTouchTitle: 'Напишите нам',
      formPlaceholders: {
        name: 'Имя',
        email: 'Email',
        phone: 'Телефон',
        subject: 'Тема',
        message: 'Сообщение',
      },
      mapTitle: 'Карта',
    },
    requestQuote: {
      topTitle: 'заявка',
      title: 'Получите расчет для вашего проекта',
      placeholders: {
        name: 'Имя',
        email: 'Email',
        phone: 'Телефон',
        category: 'Тип проекта',
        location: 'Локация',
        message: 'Сообщение',
      },
      categories: ['Ремонт квартиры', 'Ремонт кухни', 'Ремонт спальни'],
      locations: ['Москва', 'Санкт-Петербург', 'Казань'],
    },
    privacy: {
      updated: 'Последнее обновление: Декабрь 2025',
      title: 'Политика конфиденциальности',
      sections: [
        'Мы заботимся о персональных данных и используем их только для работы с клиентами.',
        'Ваши данные не передаются третьим лицам без вашего согласия.',
      ],
      headings: [
        'Какие данные мы собираем?',
        'Как мы используем данные?',
        'Правовые основания обработки',
        'Безопасность',
      ],
      paragraphs: [
        'Мы можем собирать контактные данные, информацию о проекте и предпочтениях для подготовки сметы.',
        'Данные используются для связи, подготовки предложения и сопровождения проекта.',
        'Мы обрабатываем данные на основании вашего согласия или договора.',
        'Мы используем технические и организационные меры защиты данных.',
        'Дополнительные меры безопасности применяются для защиты от утечек.',
        'Мы регулярно пересматриваем внутренние процедуры.',
      ],
      list: [
        'Контактные данные',
        'Адрес объекта',
        'Предпочтения по материалам',
        'Комментарии и пожелания',
      ],
    },
    terms: {
      updated: 'Последнее обновление: Декабрь 2025',
      title: 'Условия использования',
      sections: [
        'Настоящие условия регулируют порядок предоставления услуг.',
        'Используя сайт, вы соглашаетесь с условиями и политикой конфиденциальности.',
      ],
      headings: [
        'Какие данные мы собираем?',
        'Как мы используем данные?',
        'Правовые основания обработки',
        'Безопасность',
      ],
      paragraphs: [
        'Мы собираем данные, необходимые для расчета стоимости и связи с клиентом.',
        'Данные используются для подготовки предложения и выполнения работ.',
        'Обработка данных осуществляется на основании согласия или договора.',
        'Мы защищаем данные в соответствии с внутренними стандартами.',
        'Мы применяем меры защиты от несанкционированного доступа.',
        'Политика может обновляться при необходимости.',
      ],
      list: [
        'Сроки и этапы работ',
        'Условия оплаты',
        'Гарантии и ответственность',
        'Контакты для связи',
      ],
    },
    errorPage: {
      title: 'Упс! страница не найдена',
      description: 'К сожалению, такой страницы не существует.',
      button: 'На главную',
    },
  },
};
