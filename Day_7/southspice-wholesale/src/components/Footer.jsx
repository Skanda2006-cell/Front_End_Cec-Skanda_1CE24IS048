// A thematically enhanced version of your original footer

const Footer = () => (
   <footer className="bg-stone-900 border-t-4 border-amber-500 text-gray-200 py-6 text-center mt-20">
     <p>© {new Date().getFullYear()} SouthSpice Wholesale Co. | All Rights Reserved</p>
     <p className="text-sm text-amber-400 mt-2 font-medium">
       Authentic Flavors from the Heart of South India
     </p>
   </footer>
 );

 export default Footer;