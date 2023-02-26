import IResumeDetails from './IResumeDetails';

export const resumeDetails: IResumeDetails = {
    personalInfo: {
        name: 'Deepesh Gupta',
        designation: 'Frontend Web Developer',
    },
    summary:
        'A self-taught Front-End Developer with proficiency in React.js and experienced in using Redux to create user-friendly and responsive applications. Strong knowledge of Node.js, and experience using MongoDB to build robust back-end systems.',
    socialLinks: {
        website: {
            name: 'deepeshdg.com',
            url: 'https://deepeshdg.com/',
        },
        github: 'deepesh-dg',
        linkedin: 'deepeshdg',
        mailId: 'deepesh@deepeshdg.com',
        mobile: 9352635182,
        // npm: 'deepeshgupta',
    },
    educationInfo: [
        {
            name: "Master's of Computer Application (Open Distance Learning)",
            institite: { name: 'Chandigarh University, Punjab' },
            from: new Date('2022-07-01'),
            to: new Date('2024-06-30'),
        },
        {
            name: "Bachelor's of Computer Application",
            institite: { name: 'RRBM University, Alwar' },
            from: new Date('2016-08-01'),
            to: new Date('2019-09-30'),
        },
        {
            name: 'Higher Secondary',
            institite: { name: 'RBSE Board, Rajasthan' },
            from: new Date('2015-07-01'),
            to: new Date('2016-06-30'),
        },
    ],
    skills: [
        'React, React.js, React JS',
        'Redux, Redux-Toolkit, React-Redux',
        'Unit Testing, Integration Testing',
        'Jest, Testing-Library',
        'JavaScript, TypeScript',
        'HTML, CSS, SCSS',
        'Bootstrap, Tailwind',
        'Node, Node.js',
        'NPM, Yarn',
        'Angular 2',
        'Rest API',
        'Git, Github, Jira',
        'Docker',
    ],
    sectionInfo: [
        {
            title: 'projects',
            content: [
                {
                    name: 'SuperMarket',
                    url: 'https://store.deepeshdg.com/',
                    source: 'E-commerce Website',
                    description:
                        'Created a single-page application (SPA) using React and React Router for a mock online store, leveraging Redux for state management.',
                    list: [
                        'optimising performance with lazy loading and code splitting techniques.',
                        'Utilised back-end APIs to retrieve and display product information.',
                        'Implemented a dynamic shopping cart system using React-Redux.',
                        'Implemented JWT authentication.',
                    ],
                },
                // {
                //     name: 'NodeJS Developer',
                //     source: 'Self Learning',
                //     description: "Learned NodeJS and created REST API's using NestJS and MongoDB.",
                //     list: [
                //         "Implemented Rest API's.",
                //         'Learned working with Passport and JWT for user authentication.',
                //         'Implemented Cloudinary and Tinify API.',
                //     ],
                //     from: new Date('2021-10-01'),
                //     to: 'present',
                // },
            ],
        },
        {
            title: 'work experience',
            content: [
                {
                    name: 'Associate Software Engineer',
                    source: 'SLT Pvt Ltd, Alwar',
                    description:
                        'Developed and maintained nearly 150 websites, working closely with the backend team to ensure seamless integration of website features and functionality.',
                    list: [
                        'Building responsive and user-friendly interfaces using modern web technologies, such as HTML, CSS, and JavaScript.',
                        'Integrated APIs into websites, ensuring proper functionality and security.',
                        'Integrating third-party plugins to extend website functionality and improve user experience.',
                        'Stayed up-to-date with emerging technologies and industry trends to maintain best practices and drive innovation in frontend development.',
                    ],
                    from: new Date('2021-03-01'),
                    to: new Date('2022-01-01'),
                },
            ],
        },
        {
            title: 'Achievements',
            content: [
                {
                    name: 'Certificate of Appreciation',
                    source: 'SLT Pvt Ltd',
                    url: 'https://res.cloudinary.com/deepeshgupta/image/upload/v1677346250/deepeshgupta/SLT_Award_of2xgm.jpg',
                    description:
                        'Received a Certificate of Appreciation for demonstrating exceptional courage and skill in the successful launch of the new product by the company. This recognition was awarded for my significant contributions to the development and launch of the product, which resulted in hitting 40,000 traffic within 24 hours and thousands of user sign-ups.',
                    list: [],
                    from: new Date('2021-08-22'),
                },
                {
                    name: 'Gold Medalist',
                    source: 'BCA',
                    description:
                        'I have been honored with the Gold Medal for securing the 1st rank in my graduation from the esteemed university.',
                    list: [],
                    from: new Date('2021-03-05'),
                },
            ],
        },
        {
            title: 'freelancing and internships',
            content: [
                {
                    name: 'CleanTax',
                    url: 'https://cleantax.deepeshdg.com',
                    source: 'A Blog Website',
                    description:
                        'A Blog Website build using MEAN Stack, having user registration and an admin panel to post blogs with a media section for uploading images.',
                    list: [],
                    from: new Date('2022-10-01'),
                    to: new Date('2022-10-01'),
                },
                {
                    name: 'UI Designer Intern',
                    source: 'SLT Pvt Ltd, Alwar',
                    description: 'WordPress Theme Development using HTML, CSS, Bootstrap and jQuery.',
                    list: ['Learned SCSS and JavaScript.', 'Learned to work with npm packages.'],
                    from: new Date('2020-12-01'),
                    to: new Date('2021-02-01'),
                },
                {
                    name: 'PHP Intern',
                    source: 'IMG Global Infotech Pvt Ltd, Alwar',
                    description:
                        'Learned HTML5, CSS3, Bootstrap 4, JavaScript, PHP7, CodeIgniter 3 Framework with MySQL DB.',
                    list: [],
                    from: new Date('2018-08-01'),
                    to: new Date('2019-01-01'),
                },
            ],
        },
    ],
    certifications: [
        {
            name: 'Namaste React Live Course',
            institite: {
                name: 'NamasteDev.com',
                url: 'https://namastedev.com/namaste-react-live/',
            },
            url: 'https://res.cloudinary.com/deepeshgupta/image/upload/v1677258011/deepeshgupta/1677257922766-certificate_aybj9z.jpg',
            from: new Date('2022-12-24'),
            to: new Date('2023-02-16'),
        },
        {
            name: 'MERN & MEAN Stack Development',
            institite: {
                name: 'Self Learning',
            },
            from: new Date('2021-10-1'),
            to: new Date('2022-12-23'),
        },
    ],
};

export default resumeDetails;
