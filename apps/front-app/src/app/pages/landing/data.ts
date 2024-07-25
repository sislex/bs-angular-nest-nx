export type HeroType = {
  name: string
  position: string
  image: string
}

export type TargetDataType = {
  category: string
  content: {
    id: string
    text: string
    list: string[]
  }
}

export type SpeakerType = {
  name: string
  role: string
  avatar: string
}

export type SponsorsType = {
  name: string
  dark_logo: string
  light_logo: string
  description: string
}

export type ScheduleType = {
  time: string
  event: string
  description?: string
  attendees?: string[]
}

export type AttendanceType = {
  name: string
  avatar: string
  rating: number
  review: string
}

export type GalleryType = {
  id: number
  videoUrl?: string
  thumbnailUrl: string
  altText: string
  imageUrl?: string
}

export const heroSwiper: HeroType[] = [
  {
    name: 'Aleksey Rozhnov',
    position: 'Founder of the company, Team leader',
    image: 'assets/img/landing/conference/about/01.jpg',
  },
  {
    name: 'Nikolay Tola',
    position: 'Angular developer, Design specialist',
    image: 'assets/img/landing/conference/about/02.jpg',
  },
  {
    name: 'Kathryn Murphy',
    position: 'VP of Marketing, Glassdoor',
    image: 'assets/img/landing/conference/about/03.jpg',
  },

]

export const targetData: TargetDataType[] = [
  {
    category: 'Startups and Innovative Companies',
    content: {
      id: 'companies',
      text: 'Our team is capable of tackling any challenge. Regardless of whether you are a large corporation or a small startup, we are here to help solve your problems and elevate your product to a new level. Collaborating with us is:',
      list: [
        'Flexibility and Innovation: Our team helps startups implement innovative ideas and quickly adapt to market changes.',
        'Technological Solutions: We offer technical solutions that can serve as the foundation for successful businesses.',
        'Attracting Investments: Our technologies create prototypes and minimum viable products that attract investors.',
        'Product Scaling: We ensure product scalability, which is critical for startup growth.',
      ],
    },
  },
  {
    category: 'Corporations',
    content: {
      id: 'corporations',
      text: ``,
      list: [
        'Process Optimization: Our team optimizes processes, increasing efficiency and reducing costs.',
        'Product Innovations: We introduce innovations into products, helping corporations stay industry leaders.',
        'Digital Transformation: Our team leads digital transformation by integrating new technologies into business models.',
        'Data Security: Our technologies’ solutions ensure corporate data protection and information security.',
      ],
    },
  },
  {
    category: 'Educational Institutions',
    content: {
      id: 'educational-institutions',
      text: '',
      list: [
        'Educational Platforms: We create platforms that make learning more interactive and accessible.',
        'Educational Technologies: Our company’s developments are integrated into the educational process, enhancing education quality.',
        'Adaptive Learning: We create adaptive learning systems that respond to each student’s needs.',
        'Learning Analytics: Our tools provide the ability to analyze student performance and engagement.',
      ],
    },
  },
]

export const speakersData: SpeakerType[] = [
  {
    name: 'Aleksey Rozhnov',
    role: 'Software Engineer, Team leader',
    avatar: 'assets/img/landing/conference/about/01.jpg',
  },
  {
    name: 'Nikolay Tola',
    role: 'Angular developer, Design specialist',
    avatar: 'assets/img/landing/conference/about/02.jpg',
  },
  {
    name: 'Kathryn Murphy',
    role: 'VP of Marketing, Glassdoor',
    avatar: 'assets/img/landing/conference/about/03.jpg',
  },
  {
    name: 'Albert Flores',
    role: 'Product Manager, Google',
    avatar: 'assets/img/landing/conference/about/03.jpg',
  },
]

export const sponsoredData: SponsorsType[] = [
  {
    name: 'Ngrx',
    dark_logo: 'assets/img/landing/conference/technologies/ngrx-logo-dark.png',
    light_logo: 'assets/img/landing/conference/technologies/ngrx-logo-light.png',
    description:
      'NgRx uses RxJS for reactive programming and provides scalability and predictable state management for applications',
  },
  {
    name: 'Angular',
    dark_logo: 'assets/img/landing/conference/technologies/angular-logo-dark.png',
    light_logo: 'assets/img/landing/conference/technologies/angular-logo-light.png',
    description:
      'Angular offers tools for creating components, routing, form management, and other features',
  },

  {
    name: 'React',
    dark_logo: 'assets/img/landing/conference/technologies/react-logo-dark.png',
    light_logo: 'assets/img/landing/conference/technologies/react-logo-light.png',
    description:
      'React uses a component-based approach and allows you to create reusable UI components',
  },
  {
    name: 'Storybook',
    dark_logo: 'assets/img/landing/conference/technologies/storybook-logo-dark.png',
    light_logo: 'assets/img/landing/conference/technologies/storybook-logo-light.png',
    description:
      'Storybook is a tool for developing and documenting UI component',
  },
  {
    name: 'Blender',
    dark_logo: 'assets/img/landing/conference/technologies/blender-logo-dark.png',
    light_logo: 'assets/img/landing/conference/technologies/blender-logo-light.png',
    description:
      ' Blender is software for 3D modeling and animation',
  },
  {
    name: 'Git',
    dark_logo: 'assets/img/landing/conference/technologies/git-logo-dark.png',
    light_logo: 'assets/img/landing/conference/technologies/git-logo-light.png',
    description:
      'GitHub uses Git for version control and provides tools for collaborative work on projects',
  },
  {
    name: 'Bootstrap',
    dark_logo: 'assets/img/landing/conference/technologies/bootstrap-logo-dark.png',
    light_logo: 'assets/img/landing/conference/technologies/bootstrap-logo-light.png',
    description:
      'Bootstrap provides ready-made styles for interface elements such as buttons, forms, and tables',
  },
  {
    name: 'Figma',
    dark_logo: 'assets/img/landing/conference/technologies/figma-logo-dark.png',
    light_logo: 'assets/img/landing/conference/technologies/figma-logo-light.png',
    description:
      'Figma is an online tool for interface design that allows teams to collaborate on projects',
  },
]

export const attendance: AttendanceType[] = [
  {
    name: 'Wade Warren',
    avatar: 'assets/img/avatar/23.jpg',
    rating: 4,
    review:
      'Sit facilisis dolor arcu, fermentum vestibulum arcu elementum imperdiet. Mauris duis eleifend faucibus amet sagittis amet consequat aucibus.',
  },
  {
    name: 'Jenny Wilson',
    avatar: 'assets/img/avatar/26.jpg',
    rating: 5,
    review:
      'Netus vel, amet placerat eget sit eleifend. Urna laoreet ultricies orci feugiat amet egestas semper praesent. Risus ut porttitor metus.',
  },
  {
    name: 'Bessie Cooper',
    avatar: 'assets/img/avatar/27.jpg',
    rating: 4.5,
    review:
      'Netus vel, amet placerat eget sit eleifend. Urna laoreet ultricies orci feugiat amet egestas semper praesent. Risus ut porttitor metus.',
  },
  {
    name: 'Ralph Edwards',
    avatar: 'assets/img/avatar/32.jpg',
    rating: 4,
    review:
      'Odio viverra tristique id adipiscing varius. Leo vel tincidunt amet arcu. Auctor ipsum fames lacus vestibulum. Ultricies cras et at sed sed turpis.',
  },
  {
    name: 'Cameron Williamson',
    avatar: 'assets/img/avatar/28.jpg',
    rating: 4.5,
    review:
      'Mauris fermentum vitae volutpat orci mattis dolor malesuada porta id. Enim, dis nisi eget tincidunt bibendum leo pulvinar in. At justo hacsit diam.',
  },
  {
    name: 'Annette Black',
    avatar: 'assets/img/avatar/24.jpg',
    rating: 5,
    review:
      'Nisi et venenatis vitae, purus arcu. Integer lacus maecenas rhoncus nibh aliquam, enim sollicitudin interdum hendrerit. Proin venenatis varius.',
  },
]

export const galleryData: GalleryType[] = [
  {
    id: 1,
    imageUrl: 'assets/img/landing/conference/gallery/01.jpg',
    thumbnailUrl: 'assets/img/landing/conference/gallery/th01.jpg',
    altText: 'Auditorium',
  },
  {
    id: 2,
    imageUrl: 'assets/img/landing/conference/gallery/02.jpg',
    thumbnailUrl: 'assets/img/landing/conference/gallery/th02.jpg',
    altText: 'Comfortable chairs',
  },
  {
    id: 3,
    videoUrl: 'https://www.youtube.com/watch?v=5-A8_ocajCM',
    thumbnailUrl: 'assets/img/landing/conference/gallery/th05.jpg',
    altText: 'Conference showreel',
  },
  {
    id: 4,
    imageUrl: 'assets/img/landing/conference/gallery/03.jpg',
    thumbnailUrl: 'assets/img/landing/conference/gallery/th03.jpg',
    altText: 'Whiteboard',
  },
  {
    id: 5,
    imageUrl: 'assets/img/landing/conference/gallery/04.jpg',
    thumbnailUrl: 'assets/img/landing/conference/gallery/th04.jpg',
    altText: 'Coffee break',
  },
  {
    id: 6,
    videoUrl: 'https://www.youtube.com/watch?v=Omr18ybhPKI',
    thumbnailUrl: 'assets/img/landing/conference/gallery/th06.jpg',
    altText: 'Speaker on stage',
  },
]
