import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Field, FieldGroup } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

interface addSkillsProp {
  title: string;
}

const handleSkillItem = () => {};

function AddSkillDialog({ title }: addSkillsProp) {
  return (
    <DialogContent className="sm:max-w-sm text-white bg-gradient-to-br from-gray-800 to-gray-700 rounded-xl">
      {/* <DialogHeader>
        <DialogTitle>Add {title} Skill </DialogTitle>
      </DialogHeader> */}
      <FieldGroup>
        <Field>
          <Label htmlFor="skill">{title} Skill</Label>
          <Input id="skill" name="skill" defaultValue="" />
        </Field>
      </FieldGroup>
      <DialogFooter className="bg-gradient-to-br from-gray-800 to-gray-700">
        <DialogClose asChild>
          <Button className="text-black" variant="outline">
            Cancel
          </Button>
        </DialogClose>
        <Button
          className="bg-orange-500 hover:bg-orange-600 text-white"
          onClick={handleSkillItem}
          type="submit"
        >
          add
        </Button>
      </DialogFooter>
    </DialogContent>
  );
}

export default AddSkillDialog;
