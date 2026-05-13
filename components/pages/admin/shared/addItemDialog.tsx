import AddEducationDialog from "../education/addEducationDialog";
import AddProjectDialog from "../projects/addProjectDiolog";
import AddExperienceDialog from "../experience/addEperienceDialog";
import AddCertificationDialog from "../certification/addCertificationDialog";

interface addItemDialogProps {
  title: string;
}

function AddItemDialog({ title }: addItemDialogProps) {
  return title === "Education" ? (
    <AddEducationDialog />
  ) : title === "Projects" ? (
    <AddProjectDialog />
  ) : title === "Experience" ? (
    <AddExperienceDialog />
  ) : (
    <AddCertificationDialog />
  );
}

export default AddItemDialog;
