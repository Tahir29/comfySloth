import { GiCompass, GiDiamondHard, GiStabbedNote } from 'react-icons/gi'

export const navList = [
    {
        title: 'Home',
        url: '/'
    },
    {
        title: 'About',
        url: '/about'
    },
    {
        title: 'Products',
        url: '/product'
    }
]

export const services = [
    {
        icon: <GiCompass />,
        title: 'mission',
        text:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi',
    },
    {
        icon: <GiDiamondHard />,
        title: 'vision',
        text:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi',
    },
    {
        icon: <GiStabbedNote />,
        title: 'history',
        text:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi',
    },
]