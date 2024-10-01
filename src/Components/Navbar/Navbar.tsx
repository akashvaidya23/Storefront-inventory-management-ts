import {
  SfIconShoppingCart,
  SfIconPerson,
  SfButton,
  SfIconMenu,
  useDropdown,
  useTrapFocus,
  useDisclosure,
  SfIconAdd,
} from "@storefront-ui/react";
import { useRef, useState } from "react";
import { Link, Outlet } from "react-router-dom";

const actionItems = [
  {
    icon: <SfIconAdd />,
    label: "New Product",
    ariaLabel: "New Product",
    role: "login",
    url: "/add-product",
  },
  {
    icon: <SfIconShoppingCart />,
    label: "",
    ariaLabel: "Cart",
    role: "button",
    url: "",
  },
  {
    icon: <SfIconPerson />,
    label: "Log in",
    ariaLabel: "Log in",
    role: "login",
    url: "/login",
  },
];

export default function Navbar() {
  const drawerRef = useRef(null);
  const megaMenuRef = useRef(null);
  const [activeNode, setActiveNode] = useState<string[]>([]);

  const { close, open, isOpen } = useDisclosure();
  const { refs, style } = useDropdown({
    isOpen,
    onClose: (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        refsByKey[activeNode[0]]?.current?.focus();
      }
      close();
    },
    placement: "bottom-start",
    middleware: [],
    onCloseDeps: [activeNode],
  });

  const trapFocusOptions = {
    activeState: isOpen,
    arrowKeysUpDown: true,
    initialFocus: "container",
  } as const;
  useTrapFocus(megaMenuRef, trapFocusOptions);
  useTrapFocus(drawerRef, trapFocusOptions);

  const handleOpenMenu = (menuType: string[]) => () => {
    setActiveNode(menuType);
    open();
  };

  return (
    <div className="w-full h-full">
      <header className="relative" ref={refs.setReference}>
        <div className="flex flex-wrap md:flex-nowrap justify-between items-center px-4 md:px-10 py-1 md:py-5 w-full border-0 bg-primary-700 border-neutral-200 h-full md:z-10">
          <div className="flex items-center">
            <SfButton
              onClick={handleOpenMenu([])}
              variant="tertiary"
              square
              aria-label="Close menu"
              className="block md:hidden mr-5 bg-transparent hover:bg-primary-800 hover:text-white active:bg-primary-900 active:text-white"
            >
              <SfIconMenu className="text-white" />
            </SfButton>
            <Link
              to="/"
              aria-label="SF Homepage"
              className="flex shrink-0 w-8 h-8 lg:w-[12.5rem] lg:h-[1.75rem] items-center text-white focus-visible:outline focus-visible:outline-offset focus-visible:rounded-sm"
            >
              <picture>
                <source
                  srcSet="https://storage.googleapis.com/sfui_docs_artifacts_bucket_public/production/vsf_logo_white.svg"
                  media="(min-width: 1024px)"
                />
                <img
                  src="https://storage.googleapis.com/sfui_docs_artifacts_bucket_public/production/vsf_logo_sign_white.svg"
                  alt="Sf Logo"
                />
              </picture>
            </Link>
          </div>
          <nav className="flex flex-nowrap justify-end items-center md:ml-10 gap-x-1">
            {actionItems.map((actionItem) => (
              <Link to={actionItem.url}>
                <SfButton
                  className="text-white bg-transparent hover:bg-primary-800 hover:text-white active:bg-primary-900 active:text-white"
                  key={actionItem.ariaLabel}
                  aria-label={actionItem.ariaLabel}
                  variant="tertiary"
                  slotPrefix={actionItem.icon}
                  square
                >
                  {actionItem.role === "login" && (
                    <p className="hidden lg:inline-flex whitespace-nowrap mr-2">
                      {actionItem.label}
                    </p>
                  )}
                </SfButton>
              </Link>
            ))}
          </nav>
        </div>
      </header>
      <Outlet />
    </div>
  );
}
