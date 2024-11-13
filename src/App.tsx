import { useState } from "react";
import "./App.css";
import "./styletoken.css";
import Logo from "../public/Finch Logo.svg";
import microsoftLogo from "../src/assets/microsoft.svg.png";

function App() {
  const [hover, setHover] = useState(false);

  return (
    <div className="app-layout">
      <div
        className=" h-14 flex justify-between items-center bg-brands-primary-p1-main"
      //  style={{
     //     backgroundColor: "var(--colors-brands-primary-p1-main)",
      //  }}
      >
        <div className="text-white font-medium text-3xl ml-32">
          {" "}
          <img src={Logo} alt="Logo" className="h-10" />
        </div>
      </div>
      <div className="h-full flex">
        <div
          className="w-1/2 flex items-center justify-center shadow"
          style={{
            backgroundColor: "var(--colors-grey-light)",
          }}
        >
          <div
            className="w-8/12 p-4 bg-white  "
            style={{
              borderRadius: "var(--corner-radius-s)",
              color: "var(--colors-miscellaneous-miscellaneous-text-3)",
              boxShadow: `0 4px 6px -1px var(--colors-shadow-shadow-4), 0 2px 4px -1px var(--colors-shadow-shadow-4)`,
              //  boxShadow: `0 0 10px 2px  var(--colors-shadow-shadow-4)`,
              //boxShadow: ` var(--number-6)    var(--number-6)    var(--number-6)   var(--number-6)  var(--colors-shadow-shadow-4)`,
            }}
          >
            <div className="font-mulish font-black text-5xl">
              Finch Design System
            </div>
            <div className="font-medium text-2xl mt-2">
              A Robust & Automated Framework for Scalable Design
            </div>
            <div className="text-sm mt-8 font-normal ">
              Finch Design System is a robust framework designed to streamline
              design and development through reusable components and automated
              workflows. It ensures consistency, accessibility, and scalability
              across platforms while enabling seamless collaboration. Finch
              empowers teams to focus on innovation with efficiency and
              flexibility at its core.
            </div>
          </div>
        </div>
        <div className="  flex items-center justify-center  w-1/2">
          <form className=" space-y-4  px-20 w-10/12 ">
            <div
              className="text-3xl font-semibold 
"
              style={{
                color: "var(--colors-miscellaneous-miscellaneous-text-3)",
              }}
            >
              Log in into your account!
            </div>
            <div
              className="text-sm  pb-4 font-medium cursor-pointer  underline underline-offset-2 
"
              style={{
                color: "var(--colors-miscellaneous-hyperlink)",
              }}
            >
              How to get username and password?
            </div>
            <div>
              <div
                className="mb-2 text-base"
                style={{
                  color: "var(--colors-miscellaneous-miscellaneous-text-3)",
                }}
              >
                Email
              </div>
              <label>
                <input
                  type="email"
                  name="email"
                  required
                  className="border w-full rounded p-2"
                  style={{
                    backgroundColor: "var(--colors-surface-surface)",
                    borderRadius: "var(--corner-radius-xs)",
                    // padding: "var(--spacing-md)",
                    borderColor: "var( --colors-surface-line)",
                    color: "var(--colors-type-secondary)",
                  }}
                />
              </label>
            </div>
            <div>
              <div
                className="mb-2 text-base"
                style={{
                  color: "var(--colors-miscellaneous-miscellaneous-text-3)",
                }}
              >
                Password
              </div>
              <label>
                <input
                  type="password"
                  name="phone"
                  required
                  className="border rounded p-2 w-full"
                  style={{
                    backgroundColor: "var(--colors-surface-surface)",
                    borderRadius: "var(--corner-radius-xs)",
                    // padding: "var(--spacing-md)",
                    borderColor: "var( --colors-surface-line)",
                    color: "var(--colors-type-secondary)",
                  }}
                />
              </label>
            </div>
            <div>
              <button
                type="submit"
                className="font-normal mt-8 w-full"
                style={{
                  borderRadius: "var(--corner-radius-xxl)",
                  padding: "var(--spacing-md)",
                  color: "var(--colors-miscellaneous-miscellaneous-text-2)",
                  backgroundColor: hover
                    ? "var(--colors-interactive-hover)"
                    : "var(--colors-interactive-default)",
                }}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
              >
                LogIn
              </button>
              <div className="w-full flex justify-center text-xs text-slate-500 my-6">
                Or Log In with
              </div>
              <button
                type="submit"
                className="font-base flex justify-between border w-full text-black"
                style={{
                  borderRadius: "var(--corner-radius-xxl)",
                  padding: "var(--spacing-md)",
                  borderColor: "var(--colors-interactive-default)",
                  // color: "var(--button-text)",
                }}
                // onMouseEnter={() => setHover(true)}
                // onMouseLeave={() => setHover(false)}
              >
                <img src={microsoftLogo} alt="Logo" className="h-6 ml-2" />
                <div
                  className="text-sm font-medium -ml-5"
                  style={{
                    color: "var(--colors-interactive-default)",
                  }}
                >
                  LogIn with Microsoft
                </div>
                <div></div>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
