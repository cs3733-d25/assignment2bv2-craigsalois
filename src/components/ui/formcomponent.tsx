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
        <form onSubmit={handleSubmit(() => {})} className="space-y-4">
            <div>
                <label>Full Name</label>
                <Input {...register("fullName")} placeholder="Your name" />
            </div>

            <div>
                <label>How many miles have you ran this year?</label>
                <Input {...register("milesRan", { valueAsNumber: true })} placeholder="Miles ran" type="number" />
            </div>

            <div>
                <label>Your Year</label>
                <select {...register("year")}>
                    <option value="freshman" className="text-center">Freshman</option>
                    <option value="sophomore" className="text-center">Sophomore</option>
                    <option value="junior" className="text-center">Junior</option>
                    <option value="senior" className="text-center">Senior</option>
                </select>
            </div>

            <div>
                <label>Have you ran:</label>
                <div>
                    {["5k", "10k", "half marathon", "marathon"].map((race) => (
                        <div key={race}>
                            <input type="checkbox" value={race} {...register("races")} /> {race}
                        </div>
                    ))}
                </div>
            </div>

            <div>
                <label>Favorite Shoe Brand</label>
                <select {...register("shoeBrand")}>
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

            <div>
                <label>Comments about running</label>
                <textarea {...register("comments")} placeholder="Share your thoughts" />
            </div>

            <Button type="submit">Submit</Button>
        </form>
    );
}

export default RunningForm;


