import type { Language } from '../i18n/translations';

type ProjectText = {
  title: string;
  category: string;
};

type BlogText = {
  tag: string;
  date: string;
  comments: string;
  title: string;
  excerpt: string;
};

type ProjectCatalogItem = {
  id: string;
  image: string;
};

type BlogCatalogItem = {
  id: string;
  image: string;
};

export type ProjectCard = ProjectCatalogItem & ProjectText;
export type BlogCard = BlogCatalogItem & BlogText;

const PROJECT_CATALOG: ProjectCatalogItem[] = [
  { id: 'custom-home-renovations', image: '/assets/images/project4.jpg' },
  { id: 'kitchen-remodeling', image: '/assets/images/project5.jpg' },
  { id: 'bedroom-renovation', image: '/assets/images/project6.jpg' },
  { id: 'living-room-modernization', image: '/assets/images/project7.jpg' },
  { id: 'scandinavian-bedroom-refresh', image: '/assets/images/project8.jpg' },
  { id: 'office-fit-out', image: '/assets/images/project9.jpg' },
  { id: 'bathroom-upgrade', image: '/assets/images/project10.jpg' },
  { id: 'attic-conversion', image: '/assets/images/project11.jpg' },
];

const BLOG_CATALOG: BlogCatalogItem[] = [
  { id: 'planning-home-renovation', image: '/assets/images/blog5.jpg' },
  { id: 'green-remodeling-choices', image: '/assets/images/blog6.jpg' },
  { id: 'spa-style-bathroom', image: '/assets/images/blog7.jpg' },
  { id: 'budget-mistakes-guide', image: '/assets/images/blog12.jpg' },
  { id: 'finishing-materials-checklist', image: '/assets/images/blog13.jpg' },
  { id: 'lighting-design-tips', image: '/assets/images/blog14.jpg' },
];

const PROJECT_CLIENTS_EN = [
  'Miller Family',
  'Dawson Group',
  'Olivia Carter',
  'Apex Studio',
  'Emily Stone',
  'Northline Co.',
  'Harper & Co.',
  'David Morgan',
];

const PROJECT_CLIENTS_RU = [
  'Семья Мельниковых',
  'Группа «Давсон»',
  'Ольга Карпова',
  'Студия «Аpex»',
  'Елена Сорокина',
  'Компания «Нордлайн»',
  'Студия «Харпер»',
  'Дмитрий Морозов',
];

const PROJECT_LOCATIONS_EN = [
  'Moscow',
  'Khimki',
  'Krasnogorsk',
  'Odintsovo',
  'Mytishchi',
  'Zelenograd',
  'Balashikha',
  'Podolsk',
];

const PROJECT_LOCATIONS_RU = [
  'Москва',
  'Химки',
  'Красногорск',
  'Одинцово',
  'Мытищи',
  'Зеленоград',
  'Балашиха',
  'Подольск',
];

const BLOG_AUTHORS_EN = [
  'Anastasia Petrova',
  'Dmitry Sokolov',
  'Maria Kuznetsova',
  'Alexey Voronov',
  'Elena Smirnova',
  'Ilya Novikov',
];

const BLOG_AUTHORS_RU = [
  'Анастасия Петрова',
  'Дмитрий Соколов',
  'Мария Кузнецова',
  'Алексей Воронов',
  'Елена Смирнова',
  'Илья Новиков',
];

const BLOG_TAGS_EN = ['Renovation', 'Interior', 'Planning'];
const BLOG_TAGS_RU = ['Ремонт', 'Интерьер', 'Планирование'];

export const buildProjectCards = (items: ProjectText[]): ProjectCard[] => {
  return PROJECT_CATALOG.map((base, index) => ({
    ...base,
    title: items[index]?.title ?? '',
    category: items[index]?.category ?? '',
  })).filter((item) => item.title.trim().length > 0);
};

export const buildBlogCards = (posts: BlogText[]): BlogCard[] => {
  return BLOG_CATALOG.map((base, index) => ({
    ...base,
    tag: posts[index]?.tag ?? '',
    date: posts[index]?.date ?? '',
    comments: posts[index]?.comments ?? '',
    title: posts[index]?.title ?? '',
    excerpt: posts[index]?.excerpt ?? '',
  })).filter((item) => item.title.trim().length > 0);
};

export type ProjectDetailContent = {
  heading: string;
  paragraphs: string[];
  solutionTitle: string;
  solutionText: string;
  checklist: string[];
  processTitle: string;
  processText: string;
  closingText: string;
  projectInfoTitle: string;
  ratingLabel: string;
  info: { label: string; value: string }[];
  freeConsultation: string;
  emailSupport: string;
  scheduleProject: string;
  schedulePlaceholders: { name: string; email: string; message: string };
};

export const buildProjectDetailContent = (
  project: ProjectCard,
  language: Language,
  index: number
): ProjectDetailContent => {
  const completionMonth = ((index + 2) % 12) + 1;
  const completionMonthRu = ((index + 2) % 12) + 1;
  const budget = 45000 + index * 7000;

  if (language === 'ru') {
    return {
      heading: project.title,
      paragraphs: [
        `${project.title} был реализован как поэтапный проект с понятным графиком и фиксированными контрольными точками.`,
        `Мы детально проработали сценарии использования пространства, чтобы итоговый интерьер был удобным ежедневно и оставался актуальным на годы.`,
      ],
      solutionTitle: 'Ключевое решение',
      solutionText: `Для проекта ${project.title.toLowerCase()} мы выбрали практичные материалы, нейтральную базу и акцентные детали, которые легко обновлять без повторного капитального ремонта.`,
      checklist: [
        'Полная техническая подготовка объекта',
        'Прозрачная смета и календарный план',
        'Контроль качества на каждом этапе',
        'Финишная уборка и сдача под ключ',
      ],
      processTitle: 'Процесс работ',
      processText:
        'Работы шли в согласованной последовательности: демонтаж, черновые этапы, инженерия, чистовая отделка и финальная комплектация.',
      closingText:
        'В результате заказчик получил готовое пространство без необходимости дополнительных доработок после сдачи.',
      projectInfoTitle: 'Информация о проекте',
      ratingLabel: 'Рейтинг:',
      info: [
        { label: 'Название:', value: project.title },
        { label: 'Клиент:', value: PROJECT_CLIENTS_RU[index % PROJECT_CLIENTS_RU.length] },
        { label: 'Локация:', value: PROJECT_LOCATIONS_RU[index % PROJECT_LOCATIONS_RU.length] },
        { label: 'Бюджет:', value: `${budget.toLocaleString('ru-RU')} $` },
        { label: 'Старт:', value: `0${(index % 7) + 1}.02.2025` },
        { label: 'Финиш:', value: `1${(index % 7) + 1}.${completionMonthRu.toString().padStart(2, '0')}.2025` },
      ],
      freeConsultation: 'Бесплатная консультация',
      emailSupport: 'Поддержка по email',
      scheduleProject: 'Обсудить похожий проект',
      schedulePlaceholders: {
        name: 'Ваше имя',
        email: 'Email',
        message: 'Расскажите, что хотите обновить',
      },
    };
  }

  return {
    heading: project.title,
    paragraphs: [
      `${project.title} was delivered as a phased renovation with clear milestones and a predictable timeline.`,
      'Each zone was optimized for day-to-day comfort so the final layout works both functionally and visually.',
    ],
    solutionTitle: 'Project Approach',
    solutionText: `For ${project.title}, we combined durable finishes, clean geometry, and flexible storage to keep the interior practical over time.`,
    checklist: [
      'Full technical site preparation',
      'Transparent budget and delivery schedule',
      'Stage-by-stage quality checks',
      'Move-in ready handover',
    ],
    processTitle: 'Execution Process',
    processText:
      'The team followed a controlled workflow: demolition, rough work, engineering updates, finishing, and final styling.',
    closingText:
      'The client received a complete turnkey space with no extra corrections required after handover.',
    projectInfoTitle: 'Project Information',
    ratingLabel: 'Rating:',
    info: [
      { label: 'Project:', value: project.title },
      { label: 'Client:', value: PROJECT_CLIENTS_EN[index % PROJECT_CLIENTS_EN.length] },
      { label: 'Location:', value: PROJECT_LOCATIONS_EN[index % PROJECT_LOCATIONS_EN.length] },
      { label: 'Budget:', value: `$${budget.toLocaleString('en-US')}` },
      { label: 'Start:', value: `Feb ${(index % 7) + 2}, 2025` },
      { label: 'Finish:', value: `${new Date(2025, completionMonth - 1, (index % 7) + 16).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}` },
    ],
    freeConsultation: 'Free Consultation',
    emailSupport: 'Email Support',
    scheduleProject: 'Schedule Similar Project',
    schedulePlaceholders: {
      name: 'Your Name',
      email: 'Email',
      message: 'Tell us about your renovation goals',
    },
  };
};

export type BlogDetailContent = {
  tag: string;
  date: string;
  comments: string;
  title: string;
  paragraphs: string[];
  quote: string;
  subTitle: string;
  subParagraphs: string[];
  tags: string[];
  authorName: string;
  authorBio: string;
  commentTitle: string;
  commentName: string;
  commentMeta: string;
  commentText: string;
  replyTitle: string;
  replyNote: string;
  replyPlaceholders: { name: string; email: string; comment: string };
};

export const buildBlogDetailContent = (
  post: BlogCard,
  language: Language,
  index: number
): BlogDetailContent => {
  const fallbackDate = language === 'ru' ? `0${index + 4}.03.2025` : `Mar ${index + 4}, 2025`;
  const resolvedDate = post.date || fallbackDate;
  const resolvedComments = post.comments || (language === 'ru' ? '0 комментариев' : '0 comments');

  if (language === 'ru') {
    return {
      tag: post.tag || 'Ремонт',
      date: resolvedDate,
      comments: resolvedComments,
      title: post.title,
      paragraphs: [
        `Статья «${post.title}» помогает на старте проекта определить приоритеты, бюджет и реалистичные сроки.`,
        'Мы рекомендуем начинать с технического аудита помещения, после чего формировать последовательный план работ по этапам.',
        'Такой подход уменьшает риски переделок и помогает контролировать качество на каждом шаге.',
      ],
      quote:
        'Лучший ремонт начинается не с выбора цвета, а с понятной логики работ и проверенных решений.',
      subTitle: `Как применить рекомендации из «${post.title}» на практике`,
      subParagraphs: [
        'Сначала зафиксируйте обязательные задачи: инженерные коммуникации, выравнивание поверхностей и подготовку под чистовую отделку.',
        'После этого распределите бюджет по приоритетам и оставьте резерв на скрытые работы, которые обычно проявляются после демонтажа.',
      ],
      tags: BLOG_TAGS_RU,
      authorName: BLOG_AUTHORS_RU[index % BLOG_AUTHORS_RU.length],
      authorBio:
        'Редактор блога Renovia. Пишет о ремонте квартир, подборе материалов и управлении проектами без лишнего стресса.',
      commentTitle: '1 комментарий',
      commentName: 'Екатерина Власова',
      commentMeta: 'Практикующий дизайнер интерьеров',
      commentText:
        'Полезный разбор: особенно понравился блок про этапность бюджета и контроль подрядчиков.',
      replyTitle: 'Оставить комментарий',
      replyNote: 'Ваш email не будет опубликован. Обязательные поля отмечены.',
      replyPlaceholders: {
        name: 'Ваше имя',
        email: 'Email',
        comment: 'Комментарий',
      },
    };
  }

  return {
    tag: post.tag || 'Renovation',
    date: resolvedDate,
    comments: resolvedComments,
    title: post.title,
    paragraphs: [
      `The article "${post.title}" is focused on planning decisions that save time and reduce budget overruns.`,
      'Start with a technical review of the property, then convert requirements into a staged plan with clear dependencies.',
      'This method keeps execution predictable and helps maintain quality from rough work to final finishes.',
    ],
    quote:
      'The strongest renovation results come from clear scope, realistic sequencing, and disciplined quality control.',
    subTitle: `How to apply "${post.title}" in a real project`,
    subParagraphs: [
      'Define non-negotiable priorities first: engineering systems, wall preparation, and core finishing standards.',
      'Split your budget into mandatory works and flexible upgrades, then keep a reserve for hidden conditions after demolition.',
    ],
    tags: BLOG_TAGS_EN,
    authorName: BLOG_AUTHORS_EN[index % BLOG_AUTHORS_EN.length],
    authorBio:
      'Renovia editorial team member covering renovation workflows, material choices, and practical project management.',
    commentTitle: '1 Comment',
    commentName: 'Olivia Bennett',
    commentMeta: 'Interior Project Consultant',
    commentText:
      'Strong structure and very practical recommendations, especially the section on budgeting by construction stage.',
    replyTitle: 'Leave A Reply',
    replyNote: 'Your email address will not be published. Required fields are marked.',
    replyPlaceholders: {
      name: 'Your Name',
      email: 'Email',
      comment: 'Your Comment',
    },
  };
};
