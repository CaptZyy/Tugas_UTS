import Footer from "./Footer";
import Navbar from "./Navbar";

const Content2 = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col md:flex-row items-center justify-center px-8 py-12 font-serif min-h-screen">
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center text-center mb-8 md:mb-0">
          <h2 className="text-3xl font-bold mb-4">About Chow & Chug</h2>
          <p className="text-lg leading-relaxed">
            Welcome to <span className="font-bold">Chow & Chug</span>, your go-to café for all things milk! 
            We are proud to serve a variety of delicious, fresh, and innovative milk-based products, 
            from creamy milkshakes and refreshing smoothies to delectable milk-infused pastries and savory dishes.
          </p>
          <p className="text-lg leading-relaxed mt-4">
            At Chow & Chug, we believe in using only the finest quality milk and dairy products 
            to create an unforgettable experience for our customers. Whether you're craving a classic cold glass of milk, 
            a rich latte, or a unique milk-inspired dessert, we've got you covered.
          </p>
          <p className="text-lg leading-relaxed mt-4">
            Our mission is to bring the joy of dairy to everyone. Come and indulge in our milk-based 
            menu items and discover a new way to enjoy your favorite dairy treats.
          </p>
        </div>


        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <img src="Chow&Chug-logo.png" alt="Chow & Chug Café" className="max-w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Content2;
