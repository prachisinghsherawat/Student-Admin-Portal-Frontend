import Button from "../base/Button";
import TextInput from "../base/TextInput";

export default function StudentLoginPage() {
  return (
    <div className="my-16 p-9 space-y-8">

      <TextInput label={"Email*"} placeholder={"Enter student email"} />

      <TextInput label={"Password*"} placeholder={"Enter a password"} />

      <Button>Submit</Button>
    </div>
  );
}
