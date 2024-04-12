import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function AdminDashboard() {
  const [people, setPeople] = useState([]);
  const [pdfData, setPdfData] = useState({});

  useEffect(() => {
    axios.get(
        "http://localhost:5000/download"
      )
      .then((res) => {
        setPeople(res.data);
      });
  }, []);

  const fetchPdfData = (pdfUrl) => {

    axios.get(pdfUrl, { responseType: "arraybuffer" })
      .then((res) => {
        setPdfData({ ...pdfData, [pdfUrl]: res.data });
      })
  };

  return (
    <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mt-24">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold leading-6 text-gray-900">
            Admin Dashboard
          </h1>
          <p className="mt-2 text-sm text-gray-700">
            A list of all the users in your account including their name, email,
            contact details and resume.
          </p>
        </div>
      </div>
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table className="min-w-full divide-y divide-gray-300">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-3"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Email
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Contact Number
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Resume
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {people.map((person) => (
                  <tr key={person.email} className="even:bg-gray-50">
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-3">
                      {person.name}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      {person.email}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      {person.contact}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      {pdfData[person.pdfUrl] ? (
                        <Link
                          href={`data:application/pdf;base64,${btoa(
                            new Uint8Array(pdfData[person.pdfUrl]).reduce(
                              (data, byte) => data + String.fromCharCode(byte),
                              ""
                            )
                          )}`}
                          download="resume.pdf"
                        >
                          Download PDF
                        </Link>
                      ) : (
                        <button onClick={() => fetchPdfData(person.pdfUrl)}>
                          Fetch PDF
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
