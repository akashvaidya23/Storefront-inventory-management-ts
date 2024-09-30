import {
  type ChangeEvent,
  type FormEvent,
  type KeyboardEvent,
  useState,
  useRef,
  useId,
  useEffect,
} from "react";
import {
  SfButton,
  SfInput,
  useDisclosure,
  useTrapFocus,
  useDropdown,
  InitialFocusType,
} from "@storefront-ui/react";
import { offset } from "@floating-ui/react-dom";
import { Link } from "react-router-dom";

type SelectOption = {
  label: string;
  value: string;
};

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [usernameIsInvalid, setUsernameIsInvalid] = useState(false);
  const [emailIsInvalid, setEmailIsInvalid] = useState(false);

  const { close, toggle, isOpen } = useDisclosure();

  const { refs, style: dropdownStyle } = useDropdown({
    isOpen,
    onClose: close,
  });

  useTrapFocus(refs.floating, {
    arrowKeysUpDown: true,
    activeState: isOpen,
    initialFocus: InitialFocusType.autofocus,
  });

  const sendForm = (event: React.FormEvent) => {
    event.preventDefault();
    if (password === confirmPassword) {
      const userData = {
        password,
        email,
        name,
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
            value={email}
            type="text"
            required
            invalid={emailIsInvalid}
            onInput={() =>
              email ? setEmailIsInvalid(false) : setEmailIsInvalid(true)
            }
            onBlur={() =>
              email ? setEmailIsInvalid(false) : setEmailIsInvalid(true)
            }
            onChange={(event) => setName(event.target.value)}
          />
          {emailIsInvalid && (
            <p className="mt-0.5 text-negative-700 typography-text-sm font-medium">
              The field cannot be empty
            </p>
          )}
        </label>

        <label className="block my-4">
          <span className="typography-label-md font-medium">Email *</span>
          <SfInput
            style={{ width: "300px" }}
            width="200"
            value={email}
            type="email"
            required
            invalid={emailIsInvalid}
            onInput={() =>
              email ? setEmailIsInvalid(false) : setEmailIsInvalid(true)
            }
            onBlur={() =>
              email ? setEmailIsInvalid(false) : setEmailIsInvalid(true)
            }
            onChange={(event) => setEmail(event.target.value)}
          />
          {emailIsInvalid && (
            <p className="mt-0.5 text-negative-700 typography-text-sm font-medium">
              The field cannot be empty
            </p>
          )}
        </label>

        <label className="block my-4">
          <span className="typography-label-sm font-medium">Password *</span>
          <SfInput
            value={password}
            invalid={usernameIsInvalid}
            type="password"
            required
            onInput={() =>
              password
                ? setUsernameIsInvalid(false)
                : setUsernameIsInvalid(true)
            }
            onBlur={() =>
              password
                ? setUsernameIsInvalid(false)
                : setUsernameIsInvalid(true)
            }
            onChange={(event) => setPassword(event.target.value)}
          />
          {usernameIsInvalid && (
            <p className="mt-0.5 text-negative-700 typography-text-sm font-medium">
              The field cannot be empty
            </p>
          )}
        </label>

        <label className="block my-4">
          <span className="typography-label-sm font-medium">
            Confirm Password *
          </span>
          <SfInput
            value={password}
            invalid={usernameIsInvalid}
            type="password"
            required
            onInput={() =>
              password
                ? setUsernameIsInvalid(false)
                : setUsernameIsInvalid(true)
            }
            onBlur={() =>
              password
                ? setUsernameIsInvalid(false)
                : setUsernameIsInvalid(true)
            }
            onChange={(event) => setConfirmPassword(event.target.value)}
          />
          {usernameIsInvalid && (
            <p className="mt-0.5 text-negative-700 typography-text-sm font-medium">
              The field cannot be empty
            </p>
          )}
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
