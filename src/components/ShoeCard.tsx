type ShoeCardProps = {
    imgUrl: string; 
    changeBigShoeImage: (shoe: string) => void;
    bigShoeImg: string;
}

const ShoeCard = ({imgUrl, changeBigShoeImage, bigShoeImg}: ShoeCardProps) => {
    
    const handleClick = () =>{
        if(bigShoeImg !== imgUrl){
            changeBigShoeImage(imgUrl)
        }
    }

    return (
    <div 
        className={`border-2 rounded-xl
            ${bigShoeImg === imgUrl? 'border-coral-red': 'border-transparent'}
            cursor-pointer max-sm:flex-1
        `}
        onClick={handleClick}
    >  
        <div className="flex justify-center items-center bg-card bg-center bg-cover 
            sm:w-40 sm:h-40 rounded-xl max-sm:p-4
        ">
            <img  
                src={imgUrl}
                alt="shoe collection"
                width={100}
                height={100}
                className="object-cover"
            />
        </div>
    </div>
  )
}

export default ShoeCard