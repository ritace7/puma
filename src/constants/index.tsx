import facebook from '../assets/facebook.png';
import instagram from '../assets/instagram.png';
import shieldTick from '../assets/shieldTick.png';
import support from '../assets/support.svg';
import delivery from '../assets/delivery.png';
import twitter from '../assets/twitter.png';
import bigShoe1 from '../assets/bigShoe1.png';
import bigShoe2 from '../assets/bigShoe2.png';
import bigShoe3 from '../assets/bigShoe3.png';
import thumbnailShoe1 from '../assets/thumbnailShoe1.svg';
import thumbnailShoe2 from '../assets/thumbnailShoe2.svg';
import thumbnailShoe3 from '../assets/thumbnailShoe3.svg';
import shoe4 from '../assets/shoe4.png';
import shoe5 from '../assets/shoe5.png';
import shoe6 from '../assets/shoe6.png';
import shoe7 from '../assets/shoe7.png';
import customer1 from '../assets/customer1.jpg';
import customer2 from '../assets/customer2.jpg';
import customer3 from '../assets/customer3.jpg';

export const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about-us", label: "About Us" },
    { href: "#products", label: "Products" },
    { href: "#contact-us", label: "Contact Us" },
];

export const shoes = [
    {
        thumbnail: thumbnailShoe1,
        bigShoe: bigShoe1,
    },
    {
        thumbnail: thumbnailShoe2,
        bigShoe: bigShoe2,
    },
    {
        thumbnail: thumbnailShoe3,
        bigShoe: bigShoe3,
    },
];

export const statistics = [
    { value: '1k+', label: 'Products' },
    { value: '830+', label: 'Shops' },
    { value: '250k+', label: 'Customers' },
];

export const products = [
    {
        imgURL: shoe4,
        name: "Suede Classic XXI Sneakers",  
        price: "$75.00",
        rating: 4.5,
        link: "https://au.puma.com/au/en/pd/suede-classic-xxi-sneakers---youth-8-16-years/380560.html?dwvar_380560_color=01"
    },
    {
        imgURL: shoe5,
        name: "Cali Court Jeux",
        price: "$105.00",
        rating: 4.6,
        link: "https://au.puma.com/au/en/pd/puma-cali-court-jeux-sets-womens-sneakers/393096.html?dwvar_393096_color=01&_br_psugg_q=cali+court+jeux"
    },
    {
        imgURL: shoe6,
        name: "FENTY x PUMA AVANTI",
        price: "$240.00",
        rating: 4.4,
        link: "https://au.puma.com/au/en/pd/fenty-x-puma-avanti-l-unisex-sneakers/398352.html?dwvar_398352_color=02&_br_psugg_q=fenty+x+puma"
    },
    {
        imgURL: shoe7,
        name: "PUMA x Rick And Morty MB.02 ",
        price: "$642.00",
        rating: 4.4,
        link: "https://au.puma.com/au/en/pd/mb.01-x-rick-and-morty-basketball-shoes/376682.html"
    },
];

export const services = [
    {
        imgURL: delivery,
        label: "Free shipping",
        subtext: "Enjoy seamless shopping with our complimentary shipping service."
    },
    {
        imgURL: shieldTick,
        label: "Secure Payment",
        subtext: "Experience worry-free transactions with our secure payment options."
    },
    {
        imgURL: support,
        label: "Love to help you",
        subtext: "Our dedicated team is here to assist you every step of the way."
    },
];

export const reviews = [
    {
        imgURL: customer1,
        customerName: 'Morich Brown',
        rating: 4.5,
        feedback: "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!"
    },
    {
        imgURL: customer2,
        customerName: 'Lara Fraser',
        rating: 4.5,
        feedback: "The product not only met but exceeded my expectations. I'll definitely be a returning customer!"
    },
    {
        imgURL: customer3,
        customerName: 'Sarah Howard',
        rating: 4.7,
        feedback: "I needed a pair of sneakers for an upcoming trip, and the super-fast shipping got them to me just in time. The quality and style were a bonus!"
    }
];


export const footerLinks = [
    {
        title: "Products",
        links: [
            { name: "PUMA x GREMLINS All Pro NITRO", link: "https://au.puma.com/au/en/pd/puma-x-gremlins-all-pro-nitro%E2%84%A2-unisex-basketball-shoes/379303.html?dwvar_379303_color=01&dwvar_379303_size=0200" },
            { name: "Scuderia Ferrari Drift Cat Decima", link: "https://au.puma.com/au/en/pd/scuderia-ferrari-drift-cat-decima-unisex-motorsport-shoes/307193.html?dwvar_307193_color=07&dwvar_307193_size=0200" },
            { name: "FENTY x PUMA Creeper Phatty", link: "https://au.puma.com/au/en/pd/fenty-x-puma-creeper-phatty-unisex-sneakers/396403.html?dwvar_396403_color=01&dwvar_396403_size=0140" },
            { name: "FUTURE 7 ULTIMATE FTR", link: "https://au.puma.com/au/en/pd/future-7-ultimate-ftr-fg%2Fag-mens-football-boots/107834.html?dwvar_107834_color=01" },
            { name: "PROADAPT ALPHACAT", link: "https://au.puma.com/au/en/pd/proadapt-alphacat-leather-mens-golf-shoes/376044.html?dwvar_376044_color=01&dwvar_376044_size=0160" },
            { name: "Pure XT Fresh", link: "https://au.puma.com/au/en/pd/pure-xt-fresh-mens-training-shoes/377276.html?dwvar_377276_color=01&dwvar_377276_size=0160" },
        ],
    },
    {
        title: "Help",
        links: [
            { name: "About us", link: "https://puma-au.zendesk.com/hc/en-us" },
            { name: "FAQs", link: "https://puma-au.zendesk.com/hc/en-us" },
            { name: "How it works", link: "https://puma-au.zendesk.com/hc/en-us" },
            { name: "Privacy policy", link: "https://puma-au.zendesk.com/hc/en-us" },
            { name: "Payment policy", link: "https://puma-au.zendesk.com/hc/en-us" },
        ],
    },
    {
        title: "Get in touch",
        links: [
            { name: "onlinestore-au@puma.com", link: "mailto:onlinestore-au@puma.com" },
            { name: "03 4514 5262", link: "tel:03 4514 5262" },
        ],
    },
];

export const socialMedia = [
    { src: facebook, alt: "facebook logo" },
    { src: twitter, alt: "twitter logo" },
    { src: instagram, alt: "instagram logo" },
];