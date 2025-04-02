import {Button} from "@/components/ui/button.tsx";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle,} from "@/components/ui/card";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {Textarea} from "@/components/ui/textarea";
import {Slider} from "@/components/ui/slider";

import {Formtable} from "@/components/ui/formtable.tsx";
import {Separator} from "@radix-ui/react-separator";


export function Form1(){
    return (
        <form onSubmit={(e)=>{e.preventDefault();}}>
            <Card className="max-w-md mx-auto">
                <CardHeader>
                    <CardTitle>
                        Shoe Recommendations
                    </CardTitle>
                    <CardDescription>
                        Recommend me climbing shoes
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Label htmlFor="ShoeName">Enter Shoe Name</Label>
                    <Input type="text" id="ShoeName" placeholder="Your shoe rec" />
                    <br/>
                    <Label htmlFor="Price">Enter Price</Label>
                    <Input type="text" placeholder="$$$" id="Price"/>
                    <br/>
                    <Formtable></Formtable>
                    <br/>
                    <br/>
                    <Label className="flex justify-center">Additional Rec Comments</Label> <br/>
                    <Textarea id="Comment"></Textarea>
                    <br/>
                    <Label className="flex justify-center">Recommendation Level</Label>
                    <br/>
                    <Slider defaultValue={[50]} max={100} step={1}> </Slider>
                    <br/>
                    <br/>
                    <Separator className="bg-gray-300 h-px mt-5" />
                </CardContent>
                <CardFooter className="flex justify-between">
                    <Label>Thank you for your input</Label>
                    <Button>submit</Button>
                </CardFooter>
            </Card>

        </form>
    )
}