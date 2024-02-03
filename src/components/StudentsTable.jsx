import { Fragment } from "react";
import { getAllStudents } from "../data/students";
import Search from "./Search";
import StudentData from "./StudentData";
import TableHeader from "./TableHeader";

export default function StudentsTable() {
  const studentClasses = getAllStudents();

  return (
    <section className="py-24 lg:pt-[120px] lg:pb-28">
      <div className="container">
        <div className="mb-16 flex flex-col items-center">
          <h2 className="text-3xl lg:text-[40px] mb-9 font-bold">
            <span className="text-[#00CC8C]">Students</span> of the Year
          </h2>
          <Search />
        </div>
        <div className="max-w-[848px] mx-auto overflow-auto">
          <table className="w-full">
            <TableHeader />
            <tbody>
              {studentClasses.map((classTitle) => (
                <Fragment key={classTitle.classTitle}>
                  <tr className="bg-white/5">
                    <td className="p-5 text-sm md:text-xl" colSpan="4">
                      {classTitle.classTitle}
                    </td>
                  </tr>
                  {classTitle.students.map((student) => (
                    <StudentData key={student.id} {...student} />
                  ))}
                </Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
