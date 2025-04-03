import {Card, CardContent} from "@/components/ui/card.tsx";
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel"
import {Label} from "@/components/ui/label"

export function List1(){
    const brands = ["MONO MART", "WYM LINDM", "CLEL", "welise", "REBALANCE"]
    const brandImages = ["src/assets/brandimages/MONO-MART.jpg","src/assets/brandimages/WYMLIDNM.jpg","src/assets/brandimages/CLEL.jpg"
    , "src/assets/brandimages/welise.jpg","src/assets/brandimages/REBALANCE.jpg"];
    return (
        <>
            <Label className="flex justify-center text-xl font-semibold">Kaito's Favorite Brands</Label>
            <div className="flex justify-center">
                <Carousel opts={{startIndex:2}} className="w-full max-w-xs">
                    <CarouselContent>
                        {brands.map((_, index) => (
                            <CarouselItem key={index} className="basis-auto w-64 aspect-square">
                                <Card style={{ backgroundImage: `url(${brandImages[index]})` }}  className="w-full h-full bg-cover bg-center">
                                    <CardContent className="flex items-center justify-center h-full p-6">
                                        <span className="text-4xl text-violet-200 font-semibold ">{brands[index]}</span>
                                    </CardContent>
                                </Card>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>

            </div>
        </>



    )

}