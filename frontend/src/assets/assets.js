import appointment_img from './appointment_img.png'
import header_img from './header_img.png'
import group_profiles from './group_profiles.png'
import profile_pic from './profile_pic.png'
import contact_image from './contact_image.png'
import about_image from './about_image.png'
import logo from './logo.png'
import dropdown_icon from './dropdown_icon.svg'
import menu_icon from './menu_icon.svg'
import cross_icon from './cross_icon.png'
import chats_icon from './chats_icon.svg'
import verified_icon from './verified_icon.svg'
import arrow_icon from './arrow_icon.svg'
import info_icon from './info_icon.svg'
import upload_icon from './upload_icon.png'
import stripe_logo from './stripe_logo.png'
import razorpay_logo from './razorpay_logo.png'
import doc1 from './doc1.png'
import doc2 from './doc2.png'
import doc3 from './doc3.png'
import doc4 from './doc4.png'
import doc5 from './doc5.png'
import doc6 from './doc6.png'
import doc7 from './doc7.png'
import doc8 from './doc8.png'
import doc9 from './doc9.png'
import doc10 from './doc10.png'
import doc11 from './doc11.png'
import doc12 from './doc12.png'
import doc13 from './doc13.png'
import doc14 from './doc14.png'
import doc15 from './doc15.png'
import Dermatologist from './Dermatologist.svg'
import Gastroenterologist from './Gastroenterologist.svg'
import General_physician from './General_physician.svg'
import Gynecologist from './Gynecologist.svg'
import Neurologist from './Neurologist.svg'
import Pediatricians from './Pediatricians.svg'


export const assets = {
    appointment_img,
    header_img,
    group_profiles,
    logo,
    chats_icon,
    verified_icon,
    info_icon,
    profile_pic,
    arrow_icon,
    contact_image,
    about_image,
    menu_icon,
    cross_icon,
    dropdown_icon,
    upload_icon,
    stripe_logo,
    razorpay_logo
}

export const specialityData = [
    {
        speciality: 'General physician',
        image: General_physician
    },
    {
        speciality: 'Gynecologist',
        image: Gynecologist
    },
    {
        speciality: 'Dermatologist',
        image: Dermatologist
    },
    {
        speciality: 'Pediatricians',
        image: Pediatricians
    },
    {
        speciality: 'Neurologist',
        image: Neurologist
    },
    {
        speciality: 'Gastroenterologist',
        image: Gastroenterologist
    },
]

export const doctors = [
{
    _id: 'doc1',
    name: 'Dr. Amit Sharma',
    image: doc1,
    speciality: 'General physician',
    degree: 'MBBS, MD (Medicine)',
    experience: '4 Years',
    about: 'Provides primary healthcare, fever, cold, diabetes and BP management.',
    fees: 50,
    address: { line1: 'Connaught Place', line2: 'New Delhi, Delhi' }
},
{
    _id: 'doc2',
    name: 'Dr. Neha Kapoor',
    image: doc2,
    speciality: 'Gynecologist',
    degree: 'MBBS, MS (OBG)',
    experience: '3 Years',
    about: 'Expert in pregnancy care, PCOS, and women’s reproductive health.',
    fees: 60,
    address: { line1: 'Rajouri Garden', line2: 'New Delhi, Delhi' }
},
{
    _id: 'doc3',
    name: 'Dr. Ankit Bansal',
    image: doc3,
    speciality: 'Dermatologist',
    degree: 'MBBS, MD (Dermatology)',
    experience: '1 Years',
    about: 'Treats acne, pigmentation, allergies and other skin conditions.',
    fees: 30,
    address: { line1: 'Dwarka Sector 10', line2: 'New Delhi, Delhi' }
},
{
    _id: 'doc4',
    name: 'Dr. Karan Mehta',
    image: doc4,
    speciality: 'Pediatricians',
    degree: 'MBBS, DCH',
    experience: '2 Years',
    about: 'Child specialist focusing on vaccination and newborn care.',
    fees: 40,
    address: { line1: 'Rohini Sector 7', line2: 'New Delhi, Delhi' }
},
{
    _id: 'doc5',
    name: 'Dr. Sanya Gupta',
    image: doc5,
    speciality: 'Neurologist',
    degree: 'MBBS, DM (Neurology)',
    experience: '4 Years',
    about: 'Treats migraines, epilepsy and neurological disorders.',
    fees: 50,
    address: { line1: 'Saket', line2: 'New Delhi, Delhi' }
},
{
    _id: 'doc6',
    name: 'Dr. Arjun Verma',
    image: doc6,
    speciality: 'Neurologist',
    degree: 'MBBS, DM (Neurology)',
    experience: '4 Years',
    about: 'Specialist in brain and nerve related conditions.',
    fees: 50,
    address: { line1: 'Greater Kailash', line2: 'New Delhi, Delhi' }
},
{
    _id: 'doc7',
    name: 'Dr. Rohit Malhotra',
    image: doc7,
    speciality: 'General physician',
    degree: 'MBBS, MD (Medicine)',
    experience: '4 Years',
    about: 'Handles general illnesses and preventive healthcare.',
    fees: 50,
    address: { line1: 'Karol Bagh', line2: 'New Delhi, Delhi' }
},
{
    _id: 'doc8',
    name: 'Dr. Rahul Arora',
    image: doc8,
    speciality: 'Gynecologist',
    degree: 'MBBS, MS (OBG)',
    experience: '3 Years',
    about: 'Provides women wellness and maternity care services.',
    fees: 60,
    address: { line1: 'Janakpuri', line2: 'New Delhi, Delhi' }
},
{
    _id: 'doc9',
    name: 'Dr. Riya Patel',
    image: doc9,
    speciality: 'Dermatologist',
    degree: 'MBBS, MD (Dermatology)',
    experience: '1 Years',
    about: 'Offers treatment for skin infections and cosmetic procedures.',
    fees: 30,
    address: { line1: 'Pitampura', line2: 'New Delhi, Delhi' }
},
{
    _id: 'doc10',
    name: 'Dr. Vivek Jain',
    image: doc10,
    speciality: 'Pediatricians',
    degree: 'MBBS, DCH',
    experience: '2 Years',
    about: 'Ensures healthy growth and child immunization programs.',
    fees: 40,
    address: { line1: 'Vasant Kunj', line2: 'New Delhi, Delhi' }
},
{
    _id: 'doc11',
    name: 'Dr. Isha Khanna',
    image: doc11,
    speciality: 'Neurologist',
    degree: 'MBBS, DM (Neurology)',
    experience: '4 Years',
    about: 'Manages stroke care and chronic neurological issues.',
    fees: 49,
    address: { line1: 'Ashok Vihar', line2: 'New Delhi, Delhi' }
},
{
    _id: 'doc12',
    name: 'Dr. Deepak Yadav',
    image: doc12,
    speciality: 'Neurologist',
    degree: 'MBBS, DM (Neurology)',
    experience: '4 Years',
    about: 'Focuses on brain health and rehabilitation therapies.',
    fees: 50,
    address: { line1: 'Preet Vihar', line2: 'New Delhi, Delhi' }
},
{
    _id: 'doc13',
    name: 'Dr. Simran Kaur',
    image: doc13,
    speciality: 'General physician',
    degree: 'MBBS, MD (Medicine)',
    experience: '4 Years',
    about: 'Treats common infections and chronic diseases.',
    fees: 50,
    address: { line1: 'Mayur Vihar', line2: 'New Delhi, Delhi' }
},
{
    _id: 'doc14',
    name: 'Dr. Nitin Chawla',
    image: doc14,
    speciality: 'Gastroenterologist',
    degree: 'MBBS, DM (Gastroenterology)',
    experience: '3 Years',
    about: 'Treats stomach, liver and digestive disorders.',
    fees: 60,
    address: { line1: 'South Extension', line2: 'New Delhi, Delhi' }
},
{
    _id: 'doc15',
    name: 'Dr. Ayesha Khan',
    image: doc15,
    speciality: 'Dermatologist',
    degree: 'MBBS, MD (Dermatology)',
    experience: '1 Years',
    about: 'Specializes in acne, hair fall and skin allergy treatment.',
    fees: 30,
    address: { line1: 'Patel Nagar', line2: 'New Delhi, Delhi' }
}
];
