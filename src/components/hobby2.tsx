
import List2 from "@/components/ui/list2.tsx";
import {
    Table2,
    TableHeader2,
    TableBody2,
    TableHead2,
    TableRow2,
    TableCell2,
    TableCaption2,
} from "@/components/ui/table2.tsx"
import {RunningForm} from "@/components/ui/form2.tsx"


export function Hobby2(){

    const listItems = ["Dirt Path", "Grass","Asphalt","Concrete","Sand"];

    return(
        <>
            <div className="flex justify-center items-center">
                {/* Centering the List2 component */}
                <List2 items={listItems} />
            </div>

            <br/>



            <Table2 className="border border-gray-300">
                <TableCaption2>Routes near WPI</TableCaption2>
                <TableHeader2>
                    <TableRow2 className="text-center">
                        <TableHead2 className="text-center">Location</TableHead2>
                        <TableHead2 className="text-center">Distance(miles)</TableHead2>
                        <TableHead2 className="text-center">Difficulty</TableHead2>
                    </TableRow2>
                </TableHeader2>
                <TableBody2>
                    <TableRow2>
                        <TableCell2>Elm Park</TableCell2>
                        <TableCell2>0.5</TableCell2>
                        <TableCell2>Easy</TableCell2>
                    </TableRow2>
                    <TableRow2>
                        <TableCell2>Bancroft Tower</TableCell2>
                        <TableCell2>2 miles</TableCell2>
                        <TableCell2>Hard</TableCell2>
                    </TableRow2>
                    <TableRow2>
                        <TableCell2>Indian Lake</TableCell2>
                        <TableCell2>2.5 miles</TableCell2>
                        <TableCell2>Medium</TableCell2>
                    </TableRow2>
                </TableBody2>
            </Table2>

            <br/>

            <RunningForm/>



        </>

    )

}