import { useState } from "react";
import "./App.css";
import "./styletoken.css";

function App() {
  const [hover, setHover] = useState(false);
  return (
    <div
      className="app-layout px-2"
      style={{
        backgroundColor: "var(--colors-blues-blue-200)",
      }}
    >
      <div
        className="mt-2 h-16 flex justify-between items-center rounded-md px-4"
        style={{
          backgroundColor: "var(--colors-primary-2)",
        }}
      >
        <div className="text-white font-medium text-3xl ">Finch Plugin</div>
      </div>
      <div
        style={{
          backgroundColor: "var(--colors-blues-blue-200)",
        }}
        className="h-full flex"
      >
        <div className="mt-12 w-1/2 ml-4">
          <div className="text-5xl  font-bold italic ">
            Design to Code Automation: Building the Future of Seamless Workflows
          </div>
          <div className="text-xl mt-8 font-normal ">
            In this hackathon, participants will dive into the world of design
            system automation, real-time design-to-code transformations, and
            cross-platform scalability. With Figma as the centerpiece, teams
            will build tools and plugins that streamline everything from
            branding customization to fully responsive design-to-code
            conversion. This hackathon offers a unique opportunity for
            designers, developers, and product teams to work together to solve
            real-world challenges using cutting-edge automation technologies.
          </div>
        </div>
        <div className="mt-12  flex justify-center  w-8/12">
          <form className=" space-y-4  px-20 w-2/3 ">
            <div className="text-3xl font-semibold">For Latest Updates</div>

            <div>
              <div className="mb-2 text-lg"> Name:</div>
              <label>
                <input
                  type="text"
                  name="name"
                  required
                  className="border w-full rounded p-2"
                />
              </label>
            </div>
            <div>
              <div className="mb-2 text-lg"> Email:</div>
              <label>
                <input
                  type="email"
                  name="email"
                  required
                  className="border w-full rounded p-2"
                />
              </label>
            </div>
            <div>
              <div className="mb-2 text-lg"> Phone Number:</div>
              <label>
                <input
                  type="tel"
                  name="phone"
                  required
                  className="border rounded p-2 w-full"
                />
              </label>
            </div>
            <div>
              <div className="mb-2 text-lg">Country:</div>
              <label>
                <input
                  type="text"
                  name="country"
                  required
                  className="border rounded p-2 w-full"
                />
              </label>
            </div>
            <div>
              <button
                type="submit"
                className="font-medium mt-8 w-full"
                style={{
                  borderRadius: "var(--corner-radius-medium)",
                  padding: "var(--spacing-small)",
                  color: "var(--button-text)",
                  backgroundColor: hover
                    ? "var(--interactive-hover)"
                    : "var(--interactive-default)",
                }}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
