import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type FormData = {
    fullName: string;
    milesRan: number;
    year: string;
    races: string[];
    shoeBrand: string;
    comments: string;
};

export function RunningForm() {
    const { register, handleSubmit } = useForm<FormData>();

    return (
        <form onSubmit={handleSubmit(() => {})} className="space-y-4 max-w-lg mx-auto">
            <div className="text-center">
                <label className="font-bold">Full Name</label>
                <Input {...register("fullName")} placeholder="Your name" className="w-40 mx-auto" />
            </div>

            <div className="text-center">
                <label className="font-bold">How many miles have you ran this year?</label>
                <Input {...register("milesRan", { valueAsNumber: true })} placeholder="Miles ran" type="number" className="w-40 mx-auto" />
            </div>

            <div className="flex flex-col items-center text-center space-y-2">
                <label className="font-bold">Your Year</label>
                {["Freshman", "Sophomore", "Junior", "Senior"].map((year) => (
                    <label key={year} className="flex items-center space-x-2">
                        <input type="radio" value={year.toLowerCase()} {...register("year")} />
                        <span>{year}</span>
                    </label>
                ))}
            </div>

            <div className="text-center">
                <label className="font-bold">Have you ran:</label>
                <div className="space-y-1">
                    {["5k", "10k", "half marathon", "marathon"].map((race) => (
                        <div key={race}>
                            <input type="checkbox" value={race} {...register("races")} /> {race}
                        </div>
                    ))}
                </div>
            </div>

            <div className="text-center">
                <label className="font-bold">Favorite Shoe Brand</label>
                <select {...register("shoeBrand")} className="mx-auto">
                    <option value="null" className="text-center">---</option>
                    <option value="Nike" className="text-center">Nike</option>
                    <option value="Adidas" className="text-center">Adidas</option>
                    <option value="Brooks" className="text-center">Brooks</option>
                    <option value="Asics" className="text-center">Asics</option>
                    <option value="New Balance" className="text-center">New Balance</option>
                    <option value="Saucony" className="text-center">Saucony</option>
                    <option value="Hoka" className="text-center">Hoka</option>
                </select>
            </div>

            <div className="text-center">
                <label className="font-bold">Comments about running</label>
                <textarea {...register("comments")} placeholder="Share your thoughts" className="mx-auto" />
            </div>

            <div className="text-center">
                <Button type="submit">Submit</Button>
            </div>
        </form>



    );
}

export default RunningForm;