// @ts-nocheck
"use client";

import { useEffect, useRef, useState } from "react";

export default function WebComponentsPage() {
  // Refs for different components
  const buttonRef = useRef<HTMLElement | null>(null);
  const alertRef = useRef<HTMLElement | null>(null);
  const calculatorFormRef = useRef<HTMLFormElement | null>(null);
  const operationRef = useRef<HTMLElement | null>(null);
  const signRef = useRef<HTMLElement | null>(null);
  const paginationRef = useRef<HTMLElement | null>(null);
  const textFieldRef = useRef<HTMLElement | null>(null);
  const autocompleteRef = useRef<HTMLElement | null>(null);
  const filterChipRef = useRef<HTMLElement | null>(null);
  const feedbackRef = useRef<HTMLDivElement | null>(null);
  const modalRef = useRef<HTMLElement | null>(null);
  const modalToggleRef = useRef<HTMLElement | null>(null);
  const modalFormRef = useRef<HTMLFormElement | null>(null);
  const drawerRef = useRef<HTMLElement | null>(null);
  const drawerToggleRef = useRef<HTMLButtonElement | null>(null);

  // States for interactive components
  const [result, setResult] = useState<string>("");
  const [textFieldValue, setTextFieldValue] = useState<string>("");

  // Initial autocomplete items
  const initialItems = [
    { id: "71", name: "Acetaminophen" },
    { id: "72", name: "Advil" },
    { id: "73", name: "Benadryl" },
    { id: "74", name: "Claritin" },
    { id: "75", name: "Detrol" },
    { id: "76", name: "Excedrin" },
  ];
  const [autocompleteItems, setAutocompleteItems] = useState(initialItems);

  // Setup event listeners after component mounts
  useEffect(() => {
    // Alert button click handler
    const handleButtonClick = function () {
      console.log("Button clicked!");
      if (alertRef.current) {
        alertRef.current.setAttribute("variation", "error");
        alertRef.current.innerHTML = "I can't believe you pressed the button.";
      }
    };

    const buttontest = document.getElementById("the-button");
    if (buttontest) {
      buttontest.addEventListener("click", handleButtonClick);
      console.log("Button ref is set", buttontest);
    }

    // Operation dropdown change handler
    if (operationRef.current) {
      operationRef.current.addEventListener("ds-change", function (e: any) {
        const sign = e.detail.target.value === "addition" ? "+" : "-";
        if (signRef.current) {
          signRef.current.innerHTML = sign;
        }
      });
    }

    // Calculator form submit handler
    if (calculatorFormRef.current) {
      calculatorFormRef.current.addEventListener("submit", function (e: Event) {
        e.preventDefault();
        const form = e.currentTarget as HTMLFormElement;
        const a = form.querySelector("#a") as HTMLInputElement;
        const b = form.querySelector("#b") as HTMLInputElement;
        const operation = form.querySelector("#operation") as any;

        const intA = parseInt(a.value);
        const intB = parseInt(b.value);
        const newResult =
          operation.value === "addition" ? intA + intB : intA - intB;
        setResult(newResult.toString());
      });
    }

    // Pagination hash change handler
    function updatePaginationFromHash() {
      const pageMatch = window.location.hash.match(/page=(\d+)/);
      const page = pageMatch ? pageMatch[1] : "1";
      paginationRef.current?.setAttribute("current-page", page);
    }
    window.addEventListener("hashchange", updatePaginationFromHash);
    updatePaginationFromHash();

    // Text field change handler
    if (textFieldRef.current) {
      textFieldRef.current.addEventListener("ds-change", (e: any) => {
        const newValue = e.detail.target.value;
        setTextFieldValue(newValue);
        textFieldRef.current?.setAttribute("value", newValue);
      });
    }

    // Autocomplete event handlers
    if (autocompleteRef.current) {
      autocompleteRef.current.addEventListener(
        "ds-input-value-change",
        (e: any) => {
          const input = e?.detail?.value ?? "";

          // reset items to original value
          if (input.length === 0) {
            setAutocompleteItems(initialItems);
            autocompleteRef.current?.setAttribute(
              "items",
              JSON.stringify(initialItems)
            );
            return;
          }

          if (input.length > 0) {
            const filteredItems = initialItems.filter(
              (item) =>
                !item.name ||
                item.name.toLowerCase().includes(input.toLowerCase())
            );
            setAutocompleteItems(filteredItems);
            autocompleteRef.current?.setAttribute(
              "items",
              JSON.stringify(filteredItems)
            );
          }
        }
      );

      autocompleteRef.current.addEventListener("ds-change", function (e: any) {
        console.log(
          `Autocomplete selection: ${JSON.stringify(e.detail.selectedItem)}`
        );
      });
    }

    // Filter chip delete event handler
    if (filterChipRef.current) {
      filterChipRef.current.addEventListener("ds-delete", (e) =>
        console.log("You fired the custom ds-delete event.", e)
      );
    }

    // Review component links
    const editLink = document.getElementById("edit-link");
    const removeLink = document.getElementById("remove-link");

    editLink?.addEventListener("click", (event) => {
      event.preventDefault();
      console.log("Edit link clicked!", event);
      if (feedbackRef.current) {
        feedbackRef.current.textContent = "Edit action performed.";
      }
    });

    removeLink?.addEventListener("click", (event) => {
      event.preventDefault();
      console.log("Remove link clicked!", event);
      if (feedbackRef.current) {
        feedbackRef.current.textContent = "Remove action performed.";
      }
    });

    // Modal dialog handlers
    const openModal = () => modalRef.current?.setAttribute("is-open", "true");
    const closeModal = () => modalRef.current?.setAttribute("is-open", "false");

    modalRef.current?.addEventListener("ds-exit", closeModal);
    modalToggleRef.current?.addEventListener("click", openModal);
    modalFormRef.current?.addEventListener("submit", closeModal);

    // Drawer handlers
    const openDrawer = () => drawerRef.current?.setAttribute("is-open", "true");
    const closeDrawer = () =>
      drawerRef.current?.setAttribute("is-open", "false");

    drawerRef.current?.addEventListener("ds-close-click", closeDrawer);
    drawerToggleRef.current?.addEventListener("click", openDrawer);

    // Cleanup function to remove event listeners
    return () => {
      buttonRef.current?.removeEventListener("click", handleButtonClick);
      operationRef.current?.removeEventListener("ds-change", function () { });
      calculatorFormRef.current?.removeEventListener("submit", function () { });
      window.removeEventListener("hashchange", updatePaginationFromHash);
      textFieldRef.current?.removeEventListener("ds-change", () => { });
      autocompleteRef.current?.removeEventListener(
        "ds-input-value-change",
        () => { }
      );
      autocompleteRef.current?.removeEventListener("ds-change", function () { });
      filterChipRef.current?.removeEventListener("ds-delete", () => { });
      editLink?.removeEventListener("click", () => { });
      removeLink?.removeEventListener("click", () => { });
      modalRef.current?.removeEventListener("ds-exit", closeModal);
      modalToggleRef.current?.removeEventListener("click", openModal);
      modalFormRef.current?.removeEventListener("submit", closeModal);
      drawerRef.current?.removeEventListener("ds-close-click", closeDrawer);
      drawerToggleRef.current?.removeEventListener("click", openDrawer);
    };
  }, []);

  // Update text field value when state changes
  useEffect(() => {
    if (textFieldRef.current) {
      textFieldRef.current.setAttribute("value", textFieldValue);
    }
  }, [textFieldValue]);

  // Update autocomplete items when items state changes
  useEffect(() => {
    if (autocompleteRef.current) {
      autocompleteRef.current.setAttribute(
        "items",
        JSON.stringify(autocompleteItems)
      );
    }
  }, [autocompleteItems]);

  return (
    <>
      <ds-skip-nav href="#main"></ds-skip-nav>
      <ds-usa-banner></ds-usa-banner>

      <main id="main" className="ds-l-container">
        <h1 className="ds-text-heading--4xl ds-u-margin-top--2">
          Web-component examples
        </h1>

        <div className="ds-u-measure--base ds-u-padding-bottom--4">
          <p>
            This is an example showing how to use our library of interactive web
            components.
          </p>

          <ds-spinner aria-valuetext="aria sets spinner label!">
            children don't set spinner label
          </ds-spinner>

          <ds-alert
            ref={alertRef}
            variation="success"
            heading="You've loaded the web-components example"
            className="ds-u-margin-y--2"
          >
            <p>
              This is an example of a success alert. If you want to see an error
              alert, click the button below.
            </p>
            <ds-button
              ref={buttonRef}
              variation="solid"
              is-alternate="true"
              id="the-button"
              className="ds-u-margin-top--1"
            >
              Break things
            </ds-button>
          </ds-alert>

          <ds-choice
            type="checkbox"
            label="I agree to the terms and conditions"
            name="agree"
          >
            <div slot="checked-children">
              <ds-alert className="ds-u-margin-top--1">
                Cool, we hoped you'd check this box.
              </ds-alert>
            </div>
          </ds-choice>

          <ds-accordion bordered="true" className="ds-u-margin-top--2">
            <ds-accordion-item heading="First Amendment" default-open="true">
              <p>
                We the People of the United States, in Order to form a more
                perfect Union, establish Justice, insure domestic Tranquility,
                provide for the common defence, promote the general Welfare, and
                secure the Blessings of Liberty to ourselves and our Posterity,
                do ordain and establish this Constitution for the United States
                of America.
              </p>
            </ds-accordion-item>
            <ds-accordion-item heading="Second Amendment">
              <p>
                A well regulated Militia, being necessary to the security of a
                free State, the right of the people to keep and bear Arms, shall
                not be infringed.
              </p>
            </ds-accordion-item>
          </ds-accordion>

          <ds-month-picker
            requirement-label="Required."
            hint="Select many."
            name="fooPicker"
            label="Select any months you want!"
          >
            <input type="checkbox" value="10" defaultChecked />
            <input type="checkbox" value="11" defaultChecked disabled />
            <input type="checkbox" value="12" disabled />
          </ds-month-picker>

          <ds-choice-list type="radio" label="Choice list example" name="foo">
            <ds-choice
              label="Choice without associated children"
              value="no children"
            ></ds-choice>

            <ds-choice
              label="Checked children"
              hint="Selecting this checkbox will reveal its associated children."
              value="checked children"
            >
              <div slot="checked-children">
                <div className="ds-c-choice__checkedChild">
                  <ds-alert heading="🫣 Tag! You're it!">
                    You can reveal content by applying{" "}
                    <code>checked-children</code> to the
                    <code>slot</code> attribute of an HTML element. Do not
                    forget to include a<code>div</code> element with the
                    className <code>ds-c-choice__checkedChild</code> to whatever
                    content you want to show/hide so it gets side border showing
                    an association with its choice parent.
                  </ds-alert>
                </div>
              </div>
            </ds-choice>
            <ds-choice
              label="Unchecked children"
              hint="Selecting this checkbox will hide its associated children."
              value="unchecked children"
            >
              <div slot="unchecked-children">
                <div className="ds-c-choice__checkedChild">
                  <ds-alert variation="warn" heading="I banish thee!">
                    You can hide content by applying{" "}
                    <code>unchecked-children</code> to the
                    <code>slot</code> attribute of an HTML element. Do not
                    forget to include a<code>div</code> element with the
                    className <code>ds-c-choice__checkedChild</code> to whatever
                    content you want to show/hide so it gets side border showing
                    an association with its choice parent.
                  </ds-alert>
                </div>
              </div>
            </ds-choice>
          </ds-choice-list>

          <h2 className="ds-text-heading--2xl">Adding machine</h2>
          <form ref={calculatorFormRef}>
            <ds-dropdown ref={operationRef} name="operation" label="Operation">
              <option value="addition">Addition</option>
              <option value="subtraction">Subtraction</option>
            </ds-dropdown>
            <div
              className="ds-u-display--flex ds-u-align-items--center ds-u-margin-y--2"
              style={{ gap: "var(--spacer-2)" }}
            >
              <input
                type="number"
                name="a"
                defaultValue="20"
                className="ds-c-field ds-c-field--small"
              />
              <span ref={signRef}>+</span>
              <input
                type="number"
                name="b"
                defaultValue="30"
                className="ds-c-field ds-c-field--small"
              />
              =
              <output name="result" htmlFor="a b">
                {result}
              </output>
            </div>
            <button className="ds-c-button ds-c-button--solid" type="submit">
              Calculate
            </button>
          </form>

          <hr className="ds-u-margin-y--4" />

          <ds-pagination
            ref={paginationRef}
            total-pages="10"
            className="ds-u-margin-y--4"
          ></ds-pagination>

          <h2 className="ds-text-heading--2xl">
            Controlled text field example
          </h2>
          <ds-text-field
            ref={textFieldRef}
            value={textFieldValue}
            label="Text field example"
          ></ds-text-field>

          <hr className="ds-u-margin-y--4" />

          <h2 className="ds-text-heading--2xl">Autocomplete example</h2>
          <ds-autocomplete
            ref={autocompleteRef}
            items={JSON.stringify(autocompleteItems)}
            label="Enter and select a drug to see its cost under each plan."
            hint="Type a letter to see results, then use ARROW keys to change options, ENTER key to make a selection, ESC to dismiss."
            clear-search-button="true"
            className="ds-u-padding-bottom--7"
          ></ds-autocomplete>

          <hr className="ds-u-margin-y--4" />

          <h2 className="ds-text-heading--2xl">Filter Chip example</h2>
          <ds-filter-chip
            ref={filterChipRef}
            label="Click me and look at the dev console."
          ></ds-filter-chip>
        </div>
        <div className="ds-u-padding-y--3 ds-u-padding-bottom--4">
          <h2 className="ds-text-heading--2xl">Review example</h2>
          <ds-review heading="Heading for the Review Component">
            <p>
              This is the body of a review component example. Click the links to
              see actions.
            </p>
            <div slot="edit-content">
              <div>
                <a href="#">Edit</a>
                <span>|</span>
                <a href="#">Remove</a>
              </div>
            </div>
          </ds-review>
          <div
            ref={feedbackRef}
            className="ds-u-font-style--italic ds-u-margin-top--1"
          ></div>

          <h2>Modal Dialog example</h2>
          <ds-button ref={modalToggleRef}>Open Modal</ds-button>
          <ds-modal-dialog
            ref={modalRef}
            is-open="false"
            alert="false"
            size="wide"
            backdrop-click-exits="true"
          >
            <div slot="heading">
              <h2>This is the modal heading.</h2>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              accumsan diam vitae metus lacinia, eget tempor purus placerat.
            </p>

            <div slot="actions">
              <form ref={modalFormRef} method="dialog">
                <ds-button
                  type="reset"
                  value="rstBtn"
                  className="ds-u-margin-right--1"
                >
                  Reset
                </ds-button>
                <button className="ds-c-button" type="submit" value="sbmBtn">
                  Confirm
                </button>
              </form>
            </div>
          </ds-modal-dialog>

          <h2>Drawer example</h2>
          <ds-button ref={drawerToggleRef}>Open Drawer</ds-button>
          <ds-drawer
            ref={drawerRef}
            heading="Drawer Heading"
            footer-title="Footer Title"
            is-open="false"
            close-button-aria-label="Close Drawer"
            has-focus-trap="true"
          >
            <div>
              <strong>An Explanation</strong>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div slot="footer-body">
              <p className="ds-text-body--md ds-u-margin--0">
                Custom footer content for additional information or actions.
              </p>
            </div>
          </ds-drawer>
        </div>
      </main>
    </>
  );
}
