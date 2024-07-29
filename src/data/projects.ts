import Paytm from "../assets/projectImages/Paytm.png"
import ExpTracker from "@/assets/projectImages/ExpTracker.png"
import InvoiceGen from "@/assets/projectImages/InvoiceGen.png"
import PDFReader from "@/assets/projectImages/PDFReader.png"


const projects = [
  {
    title: "Paytm wallet",
    description: `• Built a wallet application with Next.js and Express, enabling users to perform demo banking transactions and manage their accounts 
    • Gained insights into banking APIs, transaction handling, and database locking mechanisms while utilizing
 PostgreSQL, Prisma ORM, and Tailwind CSS.`,
    thumbnail: Paytm,
    githubLink: "https://github.com/Rihanmulani12/paytm"
  },
  {
    title: " Expense Tracker",
    description: `• Created an expense tracker application using Next.js and Clerk for secure user authentication, allowing users to
 manage their expenses and income.
 • Implemented database management with Prisma ORM and PostgreSQL, featuring functionalities to list and update
 expenses for efficient financial tracking.`,
    thumbnail: ExpTracker,
    githubLink: "https://github.com/Rihanmulani12/ExpTrack"
  },
  {
    title: "Invoice Generation Web Application",
    description: ` • Developed a web application using ReactJS, JavaScript, HTML, and CSS to automate invoice generation for
 Mujawar-Roadways.
 • Improved efficiency and facilitated the transition from paper-based invoicing to a digital system`,
    thumbnail: InvoiceGen,
    githubLink: "https://github.com/Rihanmulani12/Mujawar-Roadways"
  },
  {
    title: ` PDF Reader with Google Gemini AI`,
    description: ` • Built a PDF reader integrating Google Gemini AI to enable users to upload and query PDF content, using Python and
    FastAPI for the backend.
 • Designed a responsive frontend with React.js to provide a seamless user experience for interacting with PDF
 documents`,
    thumbnail: PDFReader,
    githubLink: "https://github.com/Rihanmulani12/mypdfreader"
  }
  
]

export default projects