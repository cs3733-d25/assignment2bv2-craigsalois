import {Card, CardContent, CardHeader, CardTitle,} from "@/components/ui/card";
import { Label } from "@/components/ui/label"
import {Checkbox} from "@/components/ui/checkbox";
import {Separator} from "@radix-ui/react-separator";

export function Formtable(){
    return (
        <>
            <br/>
            <Card className="formtable">
                <CardHeader className="pb-0">
                    <CardTitle>
                        Strength Points
                    </CardTitle>
                </CardHeader>
                <CardContent className="-mt-5">
                    <Separator className="bg-gray-300 h-px my-0" />
                    <tbody>
                    <tr>
                        <th><Checkbox id="technique"/></th>
                        <th><Label htmlFor="Technique">&nbsp;&nbsp;&nbsp;Technique</Label></th>
                    </tr>
                    <tr>
                        <th><Checkbox  id="quality"/></th>
                        <th><Label htmlFor="Quality">&nbsp;&nbsp;&nbsp;Quality</Label></th>
                    </tr>
                    <tr>
                        <th><Checkbox  id="style"/></th>
                        <th><Label htmlFor="Style">&nbsp;&nbsp;&nbsp;Style</Label></th>
                    </tr>
                    </tbody>
                </CardContent>
            </Card>
        </>
    );
}