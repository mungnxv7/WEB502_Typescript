const Footer = ()=>{
    return (
       <footer className="pb-10">
  <div className="container mx-auto grid grid-cols-4 border-b-2 py-14">
    <div>
      <h2 className="font-bold text-lg">Contact Us</h2>
      <ul className="mt-8">
        <li className="text-gray-600 py-1"><i className=" mr-3 fa-solid fa-location-arrow" />451 Wall Street, UK, London</li>
        <li className="text-gray-600 py-1"><i className=" mr-3 fa-solid fa-phone" />Phone: (+084) 333-1233</li>
        <li className="text-gray-600 py-1"><i className=" mr-3 fa-regular fa-address-book" />demo@demo.com.</li>
      </ul>
    </div>
    <div>
      <h2 className="font-bold text-lg">My Account</h2>
      <ul className="mt-8">
        <li className="py-1"><a className="text-gray-600 hover:text-[#ECAF82]" href="#">The board</a></li>
        <li className="py-1"><a className="text-gray-600 hover:text-[#ECAF82]" href="#">Accessories</a></li>
        <li className="py-1"><a className="text-gray-600 hover:text-[#ECAF82]" href="#">FAQs</a></li>
        <li className="py-1"><a className="text-gray-600 hover:text-[#ECAF82]" href="#">Terms &amp; Conditions</a></li>
      </ul>
    </div>
    <div>
      <h2 className="font-bold text-lg">Product</h2>
      <ul className="mt-8">
        <li className="py-1"><a className="text-gray-600 hover:text-[#ECAF82]" href="#">Order</a></li>
        <li className="py-1"><a className="text-gray-600 hover:text-[#ECAF82]" href="#">Downloads</a></li>
        <li className="py-1"><a className="text-gray-600 hover:text-[#ECAF82]" href="#">Addresses</a></li>
        <li className="py-1"><a className="text-gray-600 hover:text-[#ECAF82]" href="#">Account details</a></li>
      </ul>
    </div>
    <div>
      <h2 className="font-bold text-lg">Design Blog</h2>
      <ul className="mt-8">
        <li className="py-1"><a className="text-gray-600 hover:text-[#ECAF82]" href="#">Blog</a></li>
        <li className="py-1"><a className="text-gray-600 hover:text-[#ECAF82]" href="#">Forums</a></li>
        <li className="py-1"><a className="text-gray-600 hover:text-[#ECAF82]" href="#">Builders Showcase</a></li>
        <li className="py-1"><a className="text-gray-600 hover:text-[#ECAF82]" href="#">How-To Guides</a></li>
      </ul>
    </div>
  </div>
  <div className="text-center mt-10">
    <p className="font-medium">Copyright © 2022 - mixxstore. All rights reserved.</p>
  </div>
</footer>

    )
}
export default Footer