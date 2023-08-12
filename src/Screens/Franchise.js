import React, { useState } from "react";
import Navbar from '../Components/Navbar'
import marble from '../marble.JPG'
import forever from '../forever21.jpg'
import chuys from '../chuys.jpg'
import './Franchise.css'

const InstagramPost = ({ imageUrl, username, caption }) => {
  const [likes, setLikes] = useState(0);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  return (
    <div  style={{background:"linear-gradient(to bottom, #e1e4e6, #1d415e)", minHeight:"100vh"}}>
      <Navbar/>    
    <div className="post" style={{background:"white", marginLeft:"100px", marginRight:"100px", paddingTop:"40px", paddingBottom:"40px"}}>
     <div>
      <h2 style={{background:" #1d415e", color:"white", padding:"1%", marginTop:"70px"}}>"Welcome to our Franchise Offers section! If you've ever dreamed of owning your own business, our franchise opportunities can make that dream a reality. Our franchise partners benefit from our proven business model, extensive training and support, and a recognized brand name that customers know and trust. With a range of locations available,  now is the perfect time to join our franchise family. Take a look at our current offers below, and start your journey towards becoming a successful business owner today!"
      </h2> </div>
      <h1 style={{disply:"flex", textAlign:"center",alignContent:"center", justifyContent:"center"}}>Right now, there are offers available! Seize your chances.
</h1>
<div style={{display: "flex", justifyContent: "center"}}>

      <div className="post-details" style={{marginLeft:"20px", marginRight:"20px",disply:"block",borderRadius:"20px"  ,width:"500px", border:"solid #1d415e"}}>
       <img src={marble} alt="Brand Image" />
        <p style={{marginLeft:"15px"}}>Exciting news for all ice cream lovers out there! Marble Slab is now offering franchise opportunities in locations where we currently don't have a presence. If you're passionate about ice cream and want to start your own business, this is your chance to partner with one of the most loved brands in the industry. With our proven business model, dedicated support team, and premium quality ingredients, you'll have everything you need to succeed. Plus, you'll be part of a community that's committed to creating memorable experiences for our customers. Don't miss this chance to scoop up a sweet deal! Contact us now to learn more about our franchise opportunities. </p>
        <button>Contact Us</button>
        <button onClick={handleLike}>{likes} I'm Interested</button>
      </div>
      <div className="post-details" style={{marginLeft:"20px", marginRight:"20px",disply:"block",borderRadius:"20px"  ,width:"500px", border:"solid #1d415e"}}>
       <img src={chuys} alt="Brand Image" />
        <p style={{marginLeft:"15px"}}>Exciting news for all ice cream lovers out there! Marble Slab is now offering franchise opportunities in locations where we currently don't have a presence. If you're passionate about ice cream and want to start your own business, this is your chance to partner with one of the most loved brands in the industry. With our proven business model, dedicated support team, and premium quality ingredients, you'll have everything you need to succeed. Plus, you'll be part of a community that's committed to creating memorable experiences for our customers. Don't miss this chance to scoop up a sweet deal! Contact us now to learn more about our franchise opportunities. </p>
        <button>Contact Us</button>
        <button onClick={handleLike}>{likes} I'm Interested</button>
      </div>
      <div className="post-details" style={{marginLeft:"20px", marginRight:"20px",disply:"block",borderRadius:"20px"  ,width:"500px", border:"solid #1d415e"}}>
       <img src={forever} alt="Brand Image" />
        <p style={{marginLeft:"15px"}}>Exciting news for all ice cream lovers out there! Marble Slab is now offering franchise opportunities in locations where we currently don't have a presence. If you're passionate about ice cream and want to start your own business, this is your chance to partner with one of the most loved brands in the industry. With our proven business model, dedicated support team, and premium quality ingredients, you'll have everything you need to succeed. Plus, you'll be part of a community that's committed to creating memorable experiences for our customers. Don't miss this chance to scoop up a sweet deal! Contact us now to learn more about our franchise opportunities. </p>
        <button>Contact Us</button>
        <button onClick={handleLike}>{likes} I'm Interested</button>
      </div>
      
      </div>

      </div>
    </div>
  
  );
};



export default InstagramPost;