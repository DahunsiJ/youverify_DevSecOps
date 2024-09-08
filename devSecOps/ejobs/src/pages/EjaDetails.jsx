import { Link } from "react-router-dom";
import Header from "../component/Header";
import FooterComponent from "../component/Footer";

function EjaDetails() {
  return (
    <div className="w-full">

    <div className="px-24 my-4">
      <Header darkMode={true} />
      <div className="">
        <h2 className="text-xl my-4 text-slate-400">eJB -essential Job Agent</h2>
        <div className="flex items-start justify-center h-fit gap-10 my-4">
          <div className="w-1/2">
            <p>
              eJB is a platform which helps to reduce the stress in job posting.
              Companies post jobs and let all sort of applicants to apply just
              to find 1 or two prospect. but the process can be really hard,
              rigorous and demanding. But with eJB like is more easy, work is
              more faster. All that is required of you is to make a request for
              a position, defining your qualification and other criteria and
              time needed and relax as essential group brings the right person
              to your company with ease and speed -tested and trained. But with
              eJB like is more easy, work is more faster. All that is required
              of you is to make a request for a position, defining your
              qualification and other criteria.
            </p>
            <button className="px-4 py-1 bg-orange-500 text-slate-50 my-2"><Link to="/jobFromEja/1234">Put through a request</Link></button>
          </div>
          <div className="w-1/2 h-60 bg-gray-600 border-gray-400 border-2"></div>
        </div>
      </div>
      <h3 className="mt-16 text-lg text-slate-400 underline">Charges</h3>
      <p>
        This request is charged in 2 ways, the company is expected to pay the
        sum of #383,730 to essential group as agent fee to do the outsourcing
        and registration then a percentage of 15% of workers first salary would
        be paid to essential group. fIn an era where the well-being of employees
        is gaining increasing importance, businesses are seeking innovative ways
        to provide comprehensive benefits packages. At [Company Name], we
        recognize the significance of employee welfare and are proud to
        introduce a revolutionary approach to membership benefits.
      </p>
      <p>
        We understand that employees are the backbone of any organization, and
        their health, financial security, and overall well-being are paramount.
        Therefore, we are excited to announce our new infrastructural
        implementation of membership benefits, which includes an option for
        employees to contribute 15% to 20% of their salary to cover a wide range
        of essential benefits.
      </p>
      <h3 className="mt-16 text-lg text-slate-400 underline">Comprehensive Coverage:</h3>
      <p>
        Our membership benefits program is designed to cover various aspects of
        an employee&apos;s life, ensuring their peace of mind and security:
      </p>
      <ol>
        <li>
          Health Benefits: Comprehensive health coverage including medical,
          dental, and vision care.
        </li>
        <li>
          Unemployment Benefits: Protection against unexpected job loss,
          ensuring financial stability during challenging times.
        </li>
        <li>
          Housing Benefits: Assistance with housing expenses, helping employees
          secure safe and comfortable living arrangements.
        </li>
        <li>
          Pension Benefits: Building a secure financial future through a robust
          pension plan.
        </li>
        <li>
          Education Benefits: Assistance with educational expenses, empowering
          employees to pursue personal and professional development.{" "}
        </li>
        <li>
          Wellness Benefits: Programs and initiatives aimed at promoting
          physical, mental, and emotional well-being.
        </li>
        <li>
          *Retirement Benefits: Comprehensive retirement plans to ensure
          financial security post-employment.
        </li>
      </ol>
      <h3 className="mt-16 text-lg text-slate-400 underline">Key Features of Our Program: </h3>
      <ol>
        <li>
          Flexible Contribution Options: Employees can choose to contribute
          between 15% to 20% of their salary towards their preferred benefits,
          providing them with flexibility based on their individual needs and
          preferences.
        </li>
        <li>
          Customizable Benefits Packages: Our program allows employees to tailor
          their benefits package according to their unique requirements,
          ensuring that they receive the coverage they need most.
        </li>
        <li>
          Seamless Integration: Our infrastructural implementation ensures a
          seamless and hassle-free experience for both employees and employers.
          We handle all aspects of benefit administration, from enrollment to
          ongoing management, allowing employers to focus on their core business
          activities.
        </li>
        <li>
          Expert Guidance: Our team of benefits experts is dedicated to
          providing personalized guidance and support to employees, ensuring
          that they fully understand their benefits and how to make the most of
          them.
        </li>
      </ol>
      <h3 className="mt-16 text-lg text-slate-400 underline">Benefits for Employers: </h3>
      <ol>
        <li>
          Attract and Retain Top Talent: Offering comprehensive benefits
          demonstrates a commitment to employee well-being, making your company
          more attractive to top talent and helping to retain existing
          employees.
        </li>
        <li>
          Enhanced Productivity and Morale: Employees who feel valued and
          supported are more motivated, engaged, and productive, leading to
          better business outcomes.
        </li>
        <li>
          Reduced Turnover and Absenteeism: By providing essential benefits such
          as health coverage and financial security, you can reduce turnover
          rates and absenteeism, saving time and money on recruiting and
          training new employees.
        </li>
      </ol>
      <h3>Conclusion: </h3>
      <p>
        At [Company Name], we believe that our employees are our most valuable
        asset, and their well-being is our top priority. With our new
        infrastructural implementation of membership benefits, we are redefining
        the employee benefits landscape, providing comprehensive coverage and
        peace of mind to our valued team members.
      </p>
      <p>
        Join us in prioritizing employee welfare and building a brighter, more
        secure future for all.
      </p>
      <p>[Company Name] - Empowering Employees, Enriching Lives.</p>
    </div>
    <FooterComponent/>
    </div>
  );
}

export default EjaDetails;
