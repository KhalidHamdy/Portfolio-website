import {
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Field, FieldGroup } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { DateRangePicker } from "../shared/dateRangePicker";
import { Button } from "@/components/ui/button";

const handleCertificateItem = () => {};

function AddCertificationDialog() {
  return (
    <DialogContent className="sm:max-w-sm text-white bg-gradient-to-br from-gray-800 to-gray-700 rounded-xl">
      <DialogHeader>
        <DialogTitle>Add Certificate </DialogTitle>
      </DialogHeader>
      <FieldGroup>
        <Field>
          <Label htmlFor="title">Title</Label>
          <Input id="title" name="title" defaultValue="" />
        </Field>
        <Field>
          <Label htmlFor="institute">Institute</Label>
          <Input id="institute" name="institute" defaultValue="" />
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
          <DateRangePicker is_oneDate />
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
          onClick={handleCertificateItem}
          type="submit"
        >
          Add
        </Button>
      </DialogFooter>
    </DialogContent>
  );
}

export default AddCertificationDialog;
