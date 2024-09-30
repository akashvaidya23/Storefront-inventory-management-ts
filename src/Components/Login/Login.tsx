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

export default function Login() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

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
    const userData = {
      password,
      email,
    };
    console.log(userData);
  };

  const clearForm = () => {
    setEmail("");
    setPassword("");
  };

  return (
    <div className="px-4">
      <h1
        style={{ textAlign: "center", fontSize: "20px" }}
        className="typography-headline-4 font-bold"
      >
        Login Here
      </h1>
      <form onSubmit={sendForm}>
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

        <label>
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
        <div className="flex gap-x-4 md:justify-center mt-6">
          <SfButton type="submit" className="flex-grow md:flex-grow-0">
            Login
          </SfButton>
          <Link to="/sign-up">
            <SfButton
              variant="secondary"
              className="flex-grow md:flex-grow-0"
              onClick={clearForm}
            >
              New User
            </SfButton>
          </Link>
        </div>
      </form>
    </div>
  );
}
