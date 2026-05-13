import { Button } from "@/components/ui/button";
import {
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { Field, FieldGroup } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { DateRangePicker } from "../shared/dateRangePicker";
const handleProjectItem = () => {};

function AddProjectDialog() {
  return (
    <DialogContent className="sm:max-w-sm text-white bg-gradient-to-br from-gray-800 to-gray-700 rounded-xl">
      <DialogHeader>
        <DialogTitle>Add Project Item </DialogTitle>
      </DialogHeader>
      <FieldGroup>
        <Field>
          <Label htmlFor="title">Title</Label>
          <Input id="title" name="title" defaultValue="" />
        </Field>
        <Field>
          <Label htmlFor="stack">Tech Stack</Label>
          <Input id="stack" name="stack" defaultValue="" />
        </Field>
        <Field>
          <Label htmlFor="description">Description</Label>
          <Textarea
            id="description"
            name="description"
            className="h-[80px] resize-none overflow-y-auto"
            defaultValue=""
          />
        </Field>
        <Field>
          <DateRangePicker />
        </Field>
        <div className="grid grid-cols-2 gap-4">
          <Field>
            <Label htmlFor="demo">Live Demo URL</Label>
            <Input id="demo" name="Live_demo" defaultValue="" />
          </Field>
          <Field>
            <Label htmlFor="github">GitHub URL</Label>
            <Input id="github" name="github" defaultValue="" />
          </Field>
        </div>
      </FieldGroup>
      <DialogFooter className="bg-gradient-to-br from-gray-800 to-gray-700">
        <DialogClose asChild>
          <Button className="text-black" variant="outline">
            Cancel
          </Button>
        </DialogClose>
        <Button
          className="bg-orange-500 hover:bg-orange-600 text-white"
          onClick={handleProjectItem}
          type="submit"
        >
          Add
        </Button>
      </DialogFooter>
    </DialogContent>
  );
}

export default AddProjectDialog;
