import React from "react";

type TableProps<T> = {
  data: T[];
  columns: {
    key: keyof T;
    label: string;
    render?: (value: any, row: T) => React.ReactNode;
  }[];
};

export const CustomTable = <T extends object>({
  data,
  columns,
}: TableProps<T>) => {
  return (
    <div className="overflow-x-auto border-gray-300 border m-4">
      <table className="min-w-full">
        <thead className="bg-orange-500  border text-white">
          <tr>
            <th>Sl/No</th>
            {columns.map((col) => (
              <th
                key={String(col.key)}
                className={`px-4 py-2 border-b border-gray-300 ${
                  col.key === "isAction" ? "text-center w-fit" : "text-left"
                }`}
              >
                {col.label}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {data.map((row, idx) => (
            <tr
              key={idx}
              className="hover:bg-gray-50 hover:text-orange-500 text-black"
            >
              <td className="px-4 py-2 border-b border-gray-200 text-center">
                {idx + 1}
              </td>

              {columns.map((col) => (
                <td
                  key={String(col.key)}
                  className={`px-4 py-2 border-b border-gray-200 ${
                    col.key === "isAction" ? "flex justify-end gap-2" : ""
                  }`}
                >
                  {col.render
                    ? col.render(row[col.key], row)
                    : String(row[col.key] ?? "")}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
