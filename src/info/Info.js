import self from "../img/self.png"

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];

export const info = {
    firstName: "Sumer",
    lastName: "Punjabi",
    initials: "SP",
    position: "Software Developer in the making",
    selfPortrait: self,
    gradient: `-webkit-linear-gradient(135deg, ${colors})`,
    baseColor: colors[0],
    miniBio: [
        {
            emoji: '🎓',
            text: 'Computer Science at UWindsor'
        },
        {
            emoji: "✒️",
            text: "Your only limit is your mind."
        },
        {
            emoji: "📧",
            text: "sumerpunjabi1@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://www.instagram.com/sumerpunjabi/",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },
        {
            link: "https://github.com/sumerpunjabi",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/sumerpunjabi/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        {
            link: "https://twitter.com/SumerPunjabi",
            icon: "fa fa-twitter",
            label: 'twitter'
        }
    ],
    bio: "I am currently pursuing my Bachelors in Computer Science at the University of Windsor, looking to become a Software Developer focused on Backend. I am always looking to learn new things. I am looking for opportunities to work on projects.",
    skills:
        {
            proficientWith: ['Python Java Go', 'C C# SQL Git Linux'],
            exposedTo: ['Docker Jenkins', 'Postman Unity']
        }
    ,
    hobbies: [
        {
            label: 'Football',
            emoji: '⚽️'
        },
        {
            label: 'Badminton',
            emoji: '🏸'
        },
        {
            label: 'F1',
            emoji: '🏎️'
        },
        {
            label: 'Music',
            emoji: '🎧'
        },
        {
            label: 'Gaming',
            emoji: '🎮'
        }

    ],
}