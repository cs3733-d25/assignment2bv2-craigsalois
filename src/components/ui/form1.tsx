import {Button} from "@/components/ui/button.tsx";

import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle,} from "@/components/ui/card";

export function Form1(){
    return (
        <form>
            <Card>
                <CardHeader>
                    <CardTitle>
                        Shoe Recommendations
                    </CardTitle>
                    <CardDescription>
                        Recommend me climbing shoes
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <label htmlFor="ShoeName">Enter Shoe Name</label>
                    <input type="text" id="ShoeName"/>
                    <br/>
                    <label htmlFor="Price">Enter Price</label>
                    <input type="text" id="Price"/>
                    <br/>
                    Strength Point
                    <br/>
                    <table className="formtable">
                        <tbody>
                        <tr>
                            <th><label htmlFor="Technique">Technique</label></th>
                            <th><input type="checkbox" id="technique"/></th>
                        </tr>
                        <tr>
                            <th><label htmlFor="Quality">Quality</label></th>
                            <th><input type="checkbox" id="quality"/></th>
                        </tr>
                        <tr>
                            <th><label htmlFor="Style">Style</label></th>
                            <th><input type="checkbox" id="style"/></th>
                        </tr>
                        </tbody>
                    </table>
                    <label htmlFor="Comment">Additional Rec Comments</label> <br/>
                    <textarea id="Comment"></textarea>
                    <br/>
                    <label htmlFor="Rec Level">Recommendation Level</label>
                    <select id="Rec Level">
                        <option value="1">Weak</option>
                        <option value="2">Medium</option>
                        <option value="3">Strong</option>
                    </select>
                    <br/>
                    <br/>
                    <Button>submit</Button>
                    <br/>
                </CardContent>

            </Card>

        </form>
    )
}