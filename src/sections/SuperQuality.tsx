import Button from "../components/Button"
import shoe8 from "../assets/shoe8.png"

const SuperQuality = () => {
  return (
    <section 
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    > 
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          We Provide You
          <span className="text-coral-red"> Super</span>
          <span className="text-coral-red"> Quality</span> Shoes
          <br />
        </h2>
        <p className="mt-4 lg:max-w-lg info-text text-justify">
          We take pride in offering our customers not only the latest fashion trends but also garments of 
          exceptional quality that stand the test of time. Our commitment to delivering excellence is reflected 
          in every thread, stitch, and fabric we choose.
        </p>
        <div className="mt-11">
          <Button label="View Details" iconUrl="" fullWidth={false}/>
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <img 
          src={shoe8}
          alt="Shoe8"
          width={550}
          height={520}
          className="object-contain bg-card bg-center bg-cover"
        />
      </div>
    </section>
  )
}

export default SuperQuality