import Button from "../base/Button";
import TextInput from "../base/TextInput";


export default function AdminLoginPage() {
  return (
    <div className="my-16 p-9 space-y-8">

      <TextInput label={"Email*"} placeholder={"Enter admin email"} />

      <TextInput label={"Password*"} placeholder={"Enter a password"} />

      <Button>Submit</Button>
    </div>
  );
}
