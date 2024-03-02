import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function InputSearch() {
  return (
    <div className="flex w-full max-w-sm items-center justify-center space-x-0 mx-auto my-10">
      <Input
        type="text"
        className="focus:border-blue border border-solid border-blue focus:outline-none min-h-[58px] rounded-none focus-visible:border-none focus-visible:outline-none"
        placeholder="Search query..."
      />
      <Button type="submit" className="bg-blue min-h-[58px] rounded-none">
        Search
      </Button>
    </div>
  );
}
