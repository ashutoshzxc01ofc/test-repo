import "./App.css";
import "./styletoken.css";
// import Logo from "../public/Finch Logo.svg";
import RACT from "../public/RACT.svg";
import RACT_EFF from "../public/RACT_eff.svg";
import study from "../public/Study.svg";
import portfolio from "../public/Portfolio.svg";
import issueicon from "../public/Issue.svg";
import anaomalyicon from "../public/Anaomaly.svg";
import Card from "./Card";
import frameuser from "../public/Frame_useracc.png";
import logo from "../public/Logo.png";
import pattern from "../public/Pattern.png";


function App() {
  return (
    <div className="app-layout bg-dark-purple-100 h-full">
      <div className=" h-[64px] flex z-10 items-center justify-between bg-dark-purple-100 shadow-[0px_4px_120px_#603fa966]">
        <div className="text-white font-medium text-3xl ">
          <img src={logo} alt="Logo" className="h-10 ml-3 mt-2" />
        </div>
        <div>
          <img src={frameuser} alt="user" className="h-10 mr-12" />
        </div>
      </div>

      <div className="flex w-full h-full">
        <img src={pattern} className="absolute right-2 top-8"/>
        <div className="w-16  bg-dark-purple-100" />
        <div className="w-full pr-28 h-screen overflow-y-auto ml-10 mb-8">
          <div className="text-white text-2xl font-bold ml-6 mt-10">Welcome to RBQM 360</div>
          <div className="text-white text-base font-normal ml-6 mt-2 mb-6">Check out our latest services</div>
          <div className="h-4 w-full"></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card 
            text_content="Identify, assess, and manage risks associated with CtQ factors
                  whose integrity is fundamental to the protection of study
                  participants, the reliability and interpretability of the
                  study results, and the decisions made based on the study
                  results."
            text_heading="RACT"
            icon={RACT} />

            <Card 
            text_content="Study level Risk-based Quality Management (RBQM) solution used
                  to monitor KRI/QTL performance, identify and manage risk
                  signals/issues to ensure that these risks are addressed before
                  they become serious issues."
            text_heading="Study Insights"
            icon={study} />

            <Card 
            text_content=" GCP quality oversight solution that empowers users to oversee
                  health of portfolio, identify portfolio/process/vendor/study
                  risks and communicate quality management activities."
            text_heading="Portfolio Insights"
            icon={portfolio} />
            
          {/* </div>
          <div className="h-4 w-full"></div>
          <div className="flex justify-evenly w-full mb-24"> */}
          <Card 
            text_content="Quality events monitoring solution to review and monitor GCP
                  quality events and issues at portfolio/study level."
            text_heading="Issue Insights" 
            icon={issueicon}/>

          <Card 
            text_content="Provides key insights to the RBQM CoE to measure, track and
                  visualize the adoption and impact of RBQM across the portfolio."
            text_heading="RBQM Effectiveness." 
            icon={RACT_EFF}/>

          <Card 
            text_content="Identify, analyze, review and collaborate to eliminate
                  anomalies in clinical data using Advanced Analytics , AI/ ML
                  with active learning engine to expedite clinical data
                  management and data review."
            text_heading="Anomaly Detection"
            icon={anaomalyicon} />
          </div>
          <div className="h-10 mb-16 w-full"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
