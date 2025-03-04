import "./App.css";

import Logo from "../public/Finch Logo.svg";
import microsoftLogo from "../src/assets/microsoft.svg.png";

function App() {
  //const [hover, setHover] = useState(false);

  return (
    <div className="app-layout">
      <div
        className=" h-14 flex justify-between items-center bg-brand-primary-p1-main-light-mode"
        // style={{
        //   backgroundColor: "var(--colors-brands-primary-p1-main)",
        // }}
      >
        <div className="text-white font-medium text-3xl ml-32 ">
          {" "}
          <img src={Logo} alt="Logo" className="h-10" />
        </div>
      </div>
      <div className="h-full flex">
        <div
          className="w-1/2 flex items-center justify-center shadow bg-grey-light-light-mode"
          // style={{
          //   backgroundColor: "var(--colors-grey-light)",
          // }}
        >
          <div
            className="w-8/12 p-4 bg-white text-miscellaneous-miscellaneous-text-3-light-mode rounded-small-default"
            style={
              {
                // borderRadius: "var(--corner-radius-s)",
                // color: "var(--colors-miscellaneous-miscellaneous-text-3)",
                //  boxShadow: `0 4px 6px -1px var(--colors-shadow-shadow-4), 0 2px 4px -1px var(--colors-shadow-shadow-4)`,
                //  boxShadow: `0 0 10px 2px  var(--colors-shadow-shadow-4)`,
                //boxShadow: ` var(--number-6)    var(--number-6)    var(--number-6)   var(--number-6)  var(--colors-shadow-shadow-4)`,
              }
            }
          >
            <div className="font-mulish font-black text-5xl">
              Finch Design System
            </div>
            <div className="font-medium text-lg mt-2">
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
              className="text-3xl font-semibold text-miscellaneous-miscellaneous-text-3-light-mode 
"
              // style={{
              //   color: "var(--colors-miscellaneous-miscellaneous-text-3)",
              // }}
            >
              Log in into your account!
            </div>
            <div
              className="text-sm  pb-4 font-medium cursor-pointer  underline underline-offset-2  text-miscellaneous-hyperlink-light-mode
"
              // style={{
              //   color: "var(--colors-miscellaneous-hyperlink)",
              // }}
            >
              How to get username and password?
            </div>
            <div>
              <div
                className="mb-2 text-base text-miscellaneous-miscellaneous-text-3-light-mode"
                // style={{
                //   color: "var(--colors-miscellaneous-miscellaneous-text-3)",
                // }}
              >
                Email
              </div>
              <label>
                <input
                  type="email"
                  name="email"
                  required
                  className="border w-full  p-2 bg-surface-surface border-surface-line ext-type-secondary-light-mode rounded-xsmall-default"
                  style={
                    {
                      // backgroundColor: "var(--colors-surface-surface)",
                      //borderRadius: "var(--corner-radius-xs)",
                      // padding: "var(--spacing-md)",
                      // borderColor: "var( --colors-surface-line)",
                      // color: "var(--colors-type-secondary)",
                    }
                  }
                />
              </label>
            </div>
            <div>
              <div
                className="mb-2 text-base text-miscellaneous-miscellaneous-text-3-light-mode"
                // style={{
                //   color: "var(--colors-miscellaneous-miscellaneous-text-3)",
                // }}
              >
                Password
              </div>
              <label>
                <input
                  type="password"
                  name="phone"
                  required
                  className="border p-2 w-full bg-surface-surface border-surface-line text-type-secondary-light-mode rounded-xsmall-default"
                  style={
                    {
                      //  backgroundColor: "var(--colors-surface-surface)",
                      //   borderRadius: "var(--corner-radius-xs)",
                      // padding: "var(--spacing-md)",
                      // borderColor: "var( --colors-surface-line)",
                      // color: "var(--colors-type-secondary)",
                    }
                  }
                />
              </label>
            </div>
            <div>
              <button
                type="submit"
                className="font-normal mt-8 w-full text-miscellaneous-miscellaneous-text-2-light-mode bg-interactive-default-light-mode hover:bg-interactive-hover-light-mode rounded-xxlarge-default py-xs-cozy"
                // style={{
                //   // borderRadius: "var(--corner-radius-xxl)",
                //   padding: "var(--spacing-md) var(--spacing-lg)",
                //   //  color: "var(--colors-miscellaneous-miscellaneous-text-2)",
                //   // backgroundColor: hover
                //   //   ? "var(--colors-interactive-hover)"
                //   //   : "var(--colors-interactive-default)",
                // }}
                // onMouseEnter={() => setHover(true)}
                // onMouseLeave={() => setHover(false)}
              >
                LogIn
              </button>
              <div className="w-full flex justify-center text-xs text-slate-500 my-6">
                Or Log In with
              </div>
              <button
                type="submit"
                className="font-base flex justify-between border w-full text-black  border-interactive-default-light-mode rounded-xxlarge-default "
                //  className="font-base flex justify-between border w-full text-black border-interactive-default rounded-xxlarge p-md"
                style={{
                  // borderRadius: "var(--corner-radius-xxl)",
                  padding: "var(--spacing-md) ",
                  // padding: "var(--spacing-md) ",
                  //   borderColor: "var(--colors-interactive-default)",
                  // color: "var(--button-text)",
                }}
                // onMouseEnter={() => setHover(true)}
                // onMouseLeave={() => setHover(false)}
              >
                <img src={microsoftLogo} alt="Logo" className="h-6 ml-2" />
                <div
                  className="text-sm font-medium -ml-5  text-interactive-default-light-mode py-xs-cozy"
                  // style={{
                  //   color: "var(--colors-interactive-default)",
                  //   padding: "var(--spacing-sm) var(--spacing-md)",
                  // }}
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
