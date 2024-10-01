import { useState } from "react";
import { SfButton, SfInput } from "@storefront-ui/react";
import { Link } from "react-router-dom";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const sendForm = async (event: React.FormEvent) => {
    event.preventDefault();

    if (password === confirmPassword) {
      const userData = {
        name,
        email,
        password,
        confirmPassword,
      };
      console.log(userData);
    } else {
      alert("Password and Confirm password must be same");
    }
  };

  const clearForm = () => {
    setEmail("");
    setPassword("");
    setName("");
    setConfirmPassword("");
  };

  return (
    <div className="px-4">
      <h1
        style={{ textAlign: "center", fontSize: "20px" }}
        className="typography-headline-4 font-bold"
      >
        Sign Up
      </h1>
      <form onSubmit={sendForm}>
        <label className="block my-4">
          <span className="typography-label-md font-medium">Name *</span>
          <SfInput
            style={{ width: "300px" }}
            width="200"
            value={name}
            type="text"
            required
            onChange={(event) => setName(event.target.value)}
          />
        </label>

        <label className="block my-4">
          <span className="typography-label-md font-medium">Email *</span>
          <SfInput
            style={{ width: "300px" }}
            width="200"
            value={email}
            type="email"
            required
            onChange={(event) => setEmail(event.target.value)}
          />
        </label>

        <label className="block my-4">
          <span className="typography-label-sm font-medium">Password *</span>
          <SfInput
            value={password}
            type="password"
            required
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>

        <label className="block my-4">
          <span className="typography-label-sm font-medium">
            Confirm Password *
          </span>
          <SfInput
            value={confirmPassword}
            type="password"
            required
            onChange={(event) => setConfirmPassword(event.target.value)}
          />
        </label>
        <div className="flex gap-x-4 md:justify-center mt-6">
          <SfButton type="submit" className="flex-grow md:flex-grow-0">
            Sign Up
          </SfButton>
          <Link to="/login">
            <SfButton
              variant="secondary"
              className="flex-grow md:flex-grow-0"
              onClick={clearForm}
            >
              Aleady signed in! Login
            </SfButton>
          </Link>
        </div>
      </form>
    </div>
  );
}
