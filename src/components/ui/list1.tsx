import {Card, CardContent} from "@/components/ui/card.tsx";
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel"
import {Label} from "@/components/ui/label"

export function List1(){
    const brands = ["MONO MART", "WYM LINDM", "CLEL", "DEVICE", "REBALANCE"]
    return (
        <>
            <Label className="flex justify-center text-xl font-semibold">Kaito's Favorite Brands</Label>
            <div className="flex justify-center">
                <Carousel className="w-full max-w-xs">
                    <CarouselContent>
                        {brands.map((_, index) => (
                            <CarouselItem key={index} className="basis-auto w-64 aspect-square">
                                <Card className="w-full h-full">
                                    <CardContent className="flex items-center justify-center h-full p-6">
                                        <span className="text-4xl font-semibold">{brands[index]}</span>
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
    {/*My Top Fashion brands*/}
    {/*<ol>*/}
    {/*    <li>MONO-MART</li>*/}
    {/*    <li>WYM LIDNM</li>*/}
    {/*    <li>CLEL</li>*/}
    {/*    <li>DEVICE</li>*/}
    {/*    <li>REBALANCE</li>*/}
    {/*</ol>*/}
}