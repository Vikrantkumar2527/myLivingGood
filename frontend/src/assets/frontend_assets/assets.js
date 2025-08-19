import firsta from './image1i.avif'
import firstb from './image1ii.avif'
import seconda from './image2i.jpeg'
import secondb from './image2ii.jpg'
import thirda from './image3i.jpg'
import thirdb from './image3ii.jpeg'
import fourtha from './image4i.jpeg'
import fourthb from './image4ii.jpeg'
import fiftha from './image5i.avif'
import fifthb from './image5ii.jpg'




import logo from './logo.png'
import hero_img from './hero_img.png'
import cart_icon from './cart_icon.png'
import bin_icon from './bin_icon.png'
import dropdown_icon from './dropdown_icon.png'
import exchange_icon from './exchange_icon.png'
import profile_icon from './profile_icon.png'
import quality_icon from './quality_icon.png'
import search_icon from './search_icon.png'
import star_dull_icon from './star_dull_icon.png'
import star_icon from './star_icon.png'
import support_img from './support_img.png'
import menu_icon from './menu_icon.png'
import about_img from './about_img.png'
import contact_img from './contact_img.png'
import razorpay_logo from './razorpay_logo.png'
import stripe_logo from './stripe_logo.png'
import cross_icon from './cross_icon.png'
import twobed from './doublebed.svg'
import threebed from "./triplebed.svg"
import facility from "./Facility.svg"
import hostel from "./hostel.webp"
import star from "./star.png"
import hero from "./hero.png"

export const assets = {
    logo,
    hero_img,
    cart_icon,
    dropdown_icon,
    exchange_icon,
    profile_icon,
    quality_icon,
    search_icon,
    star_dull_icon,
    star_icon,
    bin_icon,
    support_img,
    menu_icon,
    about_img,
    contact_img,
    razorpay_logo,
    stripe_logo,
    cross_icon,
    twobed,
    threebed,
    facility,
    hostel,star,hero

}
export const products = [
  {
    "id": 1,
    "name": "GreenNest Boys Hostel",
    "location": "Delhi, India",
    "description": "Affordable and clean rooms near Delhi University. Ideal for male students  Nestled in the heart of the city, the public library stands as a magnificent blend of contemporary architecture and sustainable design. This five-storey structure immediately draws attention with its sleek, glass façade that reflects the sky and the bustling urban life around it. Towering at nearly 80 feet, the building radiates a sense of openness, knowledge, and inclusivity As you approach the entrance, a wide plaza greets you, lined with neatly trimmed hedges, benches for readers, and sculptures that represent the evolution of books — from ancient scrolls to digital tablets. The main entrance features automated sliding doors framed with brushed steel, leading into a spacious, sunlit lobby.",
    "price": {"DoubleOccupancy":1.5 ,"tripleOccupancy":1},
    "roomType": "Shared",
    "gender": "Male",
    "amenities": ["WiFi", "Laundry", "CCTV", "Mess", "24x7 Water"],
    "rating": 4.2,
    "images": [firsta,firstb],
    "trending":true
  },
  {
    "id": 2,
    "name": "Sunshine Girls PG",
    "location": "Bangalore, India",
    "description": "Safe and spacious accommodation for girls near MG Road.",
    "price": {"DoubleOccupancy":1.8 ,"tripleOccupancy":1.2},
    "roomType": "Private",
    "gender": "Female",
    "amenities": ["WiFi", "24x7 Security", "Hot Water", "Power Backup", "AC"],
    "rating": 4.5,
    "images": [seconda,secondb],
    "trending":false

  },
  {
    "id": 3,
    "name": "Elite PG for Students",
    "location": "Pune, India",
    "description": "Co-ed hostel with modern facilities and a homely atmosphere.",
    "price": {"DoubleOccupancy":1.8 ,"tripleOccupancy":1.4},
    "roomType": "Shared",
    "gender": "Co-ed",
    "amenities": ["WiFi", "Gym", "TV Lounge", "Vegetarian Food", "Laundry"],
    "rating": 4.0,
    "images": [thirda,thirdb],
    "trending":true
  },
  {
    "id": 4,
    "name": "MetroHostel",
    "location": "Mumbai, India",
    "description": "Walking distance from Mumbai Central Station, perfect for working professionals.",
    "price": {"DoubleOccupancy":1.5 ,"tripleOccupancy":1.2},
    "roomType": "Private",
    "gender": "Male",
    "amenities": ["WiFi", "Fridge", "AC", "Security Guard", "Parking"],
    "rating": 3.8,
    "images": [
      fourtha,fourthb
    ],
    "trending":false
  },
  {
    "id": 5,
    "name": "DreamStay Women's Hostel",
    "location": "Chennai, India",
    "description": "Premium accommodation for female students and working women.",
   "price": {"DoubleOccupancy":1.5 ,"tripleOccupancy":1.1},
    "roomType": "Private",
    "gender": "Female",
    "amenities": ["WiFi", "Air Conditioning", "CCTV", "Power Backup", "Meal Included"],
    "rating": 4.7,
    "images": [
      fiftha,fifthb
    ],
    "trending":true
  }
]

export const reviews=[
  {
    "hostelName": "Perfect PG",
    "studentName": "Priya Mehta",
    "review": "The facilities at Perfect PG are excellent. Thanks to LivingGood for helping me find this place.",
    "stars": 2
  },
  {
    "hostelName": "Blue Heaven Girls Hostel",
    "studentName": "Rishi Sharma",
    "review": "Blue Heaven Girls Hostel is a peaceful place to stay, with all the amenities I needed.",
    "stars": 1
  },
  {
    "hostelName": "RPH Boys Hostel",
    "studentName": "Kavya Agarwal",
    "review": "LivingGood’s referral to RPH Boys Hostel was perfect. The hostel is safe and well-maintained.",
    "stars": 4
  },
  {
    "hostelName": "Blue Heaven Girls Hostel",
    "studentName": "Rohit Verma",
    "review": "The rooms are clean, and the food is excellent. Thanks, LivingGood!",
    "stars": 5
  },
  {
    "hostelName": "RPH Boys Hostel",
    "studentName": "Simran Kaur",
    "review": "RPH Boys Hostel is well-located and offers great facilities.",
    "stars": 4
  },
  {
    "hostelName": "Perfect PG",
    "studentName": "Ankit Yadav",
    "review": "Affordable and comfortable stay, the staff is very helpful.",
    "stars": 5
  },
  {
    "hostelName": "Blue Heaven Girls Hostel",
    "studentName": "Sneha Kapoor",
    "review": "Very safe for girls, and the environment is homely.",
    "stars": 5
  },
  {
    "hostelName": "RPH Boys Hostel",
    "studentName": "Aman Gupta",
    "review": "Nice hostel but food quality could be improved.",
    "stars": 3
  },
  {
    "hostelName": "Perfect PG",
    "studentName": "Megha Singh",
    "review": "Rooms are spacious and facilities are top-notch.",
    "stars": 5
  },
  {
    "hostelName": "Blue Heaven Girls Hostel",
    "studentName": "Neha Kumari",
    "review": "I loved the peaceful environment. Definitely recommend.",
    "stars": 4
  },
  {
    "hostelName": "RPH Boys Hostel",
    "studentName": "Satyam Mishra",
    "review": "The hostel has good WiFi and study environment.",
    "stars": 4
  },
  {
    "hostelName": "Perfect PG",
    "studentName": "Divya Rawat",
    "review": "The staff is friendly and the cleanliness is maintained well.",
    "stars": 5
  },
  {
    "hostelName": "Blue Heaven Girls Hostel",
    "studentName": "Tanya Sharma",
    "review": "Food is healthy and hygienic, totally worth it.",
    "stars": 5
  },
  {
    "hostelName": "RPH Boys Hostel",
    "studentName": "Nikhil Jain",
    "review": "Budget-friendly option for students, great location.",
    "stars": 4
  },
  {
    "hostelName": "Perfect PG",
    "studentName": "Aarav Malhotra",
    "review": "LivingGood’s recommendation saved me time, Perfect PG is really perfect!",
    "stars": 5
  },
  {
    "hostelName": "Blue Heaven Girls Hostel",
    "studentName": "Anjali Sinha",
    "review": "Rooms are cozy and safe, a great choice for students.",
    "stars": 5
  },
  {
    "hostelName": "RPH Boys Hostel",
    "studentName": "Harsh Vardhan",
    "review": "Good hostel, but sometimes the water supply is irregular.",
    "stars": 3
  },
  {
    "hostelName": "Perfect PG",
    "studentName": "Muskan Bhatia",
    "review": "I found it very comfortable and homely thanks to LivingGood.",
    "stars": 5
  },
  {
    "hostelName": "Blue Heaven Girls Hostel",
    "studentName": "Shreya Pandey",
    "review": "Great hostel with nice ambiance for study and living.",
    "stars": 4
  },
  {
    "hostelName": "RPH Boys Hostel",
    "studentName": "Kunal Singh",
    "review": "Nice stay overall, good value for money.",
    "stars": 4
  }
]

