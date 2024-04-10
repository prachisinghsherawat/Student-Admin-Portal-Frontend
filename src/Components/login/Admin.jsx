import Button from "../base/Button";
import TextInput from "../base/TextInput";


export default function AdminLoginPage() {
  return (
    <div className="my-16 p-9 space-y-6 rounded-md shadow-2xl">
      <h1 className="font-semibold text-xl text-center">ADMIN LOG IN</h1>

      <TextInput label={"Email*"} placeholder={"Enter an email"} />

      <TextInput label={"Password*"} placeholder={"Enter a password"} />

      <Button>Submit</Button>
    </div>
  );
}
