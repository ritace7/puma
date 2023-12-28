import offer from "../assets/offer.png";
import Button from "../components/Button";
import arrowRight from "../assets/right-arrow.png";

const SpecialOffer = () => {
  return (
    <section className="flex justify-center items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img 
          src={offer}
          width={600}
          height={500}
          className="object-contain w-full"
        />
      </div>
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          <span className="text-coral-red"> Special</span> Offer
          <br />
        </h2>
        <p className="mt-4 lg:max-w-lg info-text text-justify">
        Get ready to strut your stuff in style without breaking the bank! At Puma, we're rolling out the red carpet for our 
        incredible Shoe-tastic Sale, where fashion meets unbeatable prices. 
        Discover the perfect pair to elevate your every step, all at prices that make your wallet smile.
        </p>
        <div className="mt-11">
          <Button label="Shop Now" iconUrl={arrowRight}/>
        </div>
      </div>
    </section>
  )
}

export default SpecialOffer