import {Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow,} from "@/components/ui/table"

export function Table1(){
    return (
        <Table>
            < TableCaption>Recent Games I've Played</TableCaption>
            <TableHeader>
            <TableRow>
                <TableHead className="w-1/3 text-center">Title</TableHead>
                <TableHead className="w-1/3 text-center">Total Playtime</TableHead>
                <TableHead className="w-1/3 text-center">Genre</TableHead>
            </TableRow>
            </TableHeader>
            <TableBody>
                <TableRow>
                    <TableCell className="font-medium">Monster Hunter Wilds</TableCell>
                    <TableCell>21 hours</TableCell>
                    <TableCell>Action RPG</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell className="font-medium">R.E.P.O</TableCell>
                    <TableCell>5 hours</TableCell>
                    <TableCell>COOP Horror Survival</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell className="font-medium">FragPunk</TableCell>
                    <TableCell>5.5 hours</TableCell>
                    <TableCell>FPS</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell className="font-medium">Magic: The Gathering Arena</TableCell>
                    <TableCell>5.4 hours</TableCell>
                    <TableCell>TCG</TableCell>
                </TableRow>
            </TableBody>
        </Table>
    )
}