const TABLE_HEAD = ["Name", "Job", "Employed", ""]

const TABLE_ROWS = [
  {
    name: "John Michael",
    job: "Manager",
    date: "23/04/18",
  },
  {
    name: "Alexa Liras",
    job: "Developer",
    date: "23/04/18",
  },
  {
    name: "Laurent Perrier",
    job: "Executive",
    date: "19/09/17",
  },
  {
    name: "Michael Levi",
    job: "Developer",
    date: "24/12/08",
  },
  {
    name: "Richard Gran",
    job: "Manager",
    date: "04/10/21",
  },
]

export default function TableDemo() {
  return (
    <div className="border-border w-full overflow-hidden rounded-lg border">
      <table className="w-full">
        <thead className="border-border bg-muted border-b text-sm font-medium">
          <tr>
            {TABLE_HEAD.map((head) => (
              <th key={head} className="px-2.5 py-2 text-start font-medium">
                {head}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="text-sm">
          {TABLE_ROWS.map(({ name, job, date }, index) => {
            return (
              <tr key={index} className="border-border border-b last:border-0">
                <td className="p-3">{name}</td>
                <td className="p-3">{job}</td>
                <td className="p-3">{date}</td>
                <td className="p-3">
                  <a
                    href="#"
                    className="text-primary text-sm font-medium hover:underline"
                  >
                    Edit
                  </a>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
