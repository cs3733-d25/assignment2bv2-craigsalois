import {Table1} from "@/components/ui/table1.tsx";
import {List1} from "@/components/ui/list1.tsx";
import {Form1} from "@/components/ui/form1.tsx";
import {Separator} from "@radix-ui/react-separator";
import {Label} from "@radix-ui/react-label";

export function Hobby1(){
    return(
        <>
            <br/>
            <br/>
            <Label className="text-4xl font-semibold">Kaito's Hobby Stuff</Label>
            <Separator className="bg-gray-300 h-px mt-5" />
            <List1 />
            <Separator className="bg-gray-300 h-0.5px mt-5" />
            <Table1 />
            <br/>
            <br/>
            <Form1 />
        </>

    )

}