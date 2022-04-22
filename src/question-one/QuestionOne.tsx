import React, { useEffect, useState } from "react";
import { IDataService } from "../common/types";
import { Job } from "../common/types";
import { Contact } from "../common/types";
import { SectionGroup } from "../components/section/SectionGroup";
import { SectionPanel } from "../components/section/SectionPanel";
import { DataService } from "../service/DataService";
import { format } from "date-fns";

import "./QuestionOne.css";

export const QuestionOne: React.FC<{ service: IDataService }> = () => {
  const [jobData, setJobData] = useState<
    Pick<Job, "name" | "start" | "end" | "contactId">[]
  >([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [contactData, setContactData] = useState<
    Pick<Contact, "contactName" | "contactId">[]
  >([]);

  const getJobsData = (name: string) => {
    const response = DataService.getJobsWithSearchTerm(name.toLowerCase());
    response.then(function (result) {
      setJobData(result);
    });
  };

  const getContactData = () => {
    const response = DataService.getContacts();
    response.then(function (result) {
      setContactData(result);
    });
  };

  const getContactName = (id: number) => {
    let res = contactData.find((contact) => contact.contactId === id);
    return res?.contactName;
  };

  function handleSearchTermChange(e: React.FormEvent<HTMLInputElement>) {
    const value = e.currentTarget.value;
    setSearchTerm(value);
  }

  useEffect(() => {
    if (searchTerm.length < 3) {
      setJobData([]);
      setContactData([]);
    } else {
      getJobsData(searchTerm);
      getContactData();
    }
  }, [searchTerm]);

  return (
    <SectionGroup>
      <SectionPanel>
        <label className="search_label" id="Search">
          Search
        </label>
        <input
          type="text"
          aria-labelledby="Search"
          className="search_input"
          placeholder="Enter more than 3 characters for results..."
          onChange={handleSearchTermChange}
          value={searchTerm}
        />
      </SectionPanel>
      {jobData?.length > 0 ? (
        <SectionPanel>
          <table className="table table-striped table-hover table-bordered mt-4">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Start</th>
                <th scope="col">End</th>
                <th scope="col">Contact Name</th>
              </tr>
            </thead>
            <tbody>
              {jobData.map((job) => (
                <tr key={job.name}>
                  <td>{job.name}</td>
                  <td>{format(Date.parse(job.start), "dd-MM-yyyy")}</td>
                  <td>{format(Date.parse(job.end), "dd-MM-yyyy")}</td>
                  <td>{getContactName(job.contactId)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </SectionPanel>
      ) : (
        <div className="empty">
          <h4>No jobs found</h4>
        </div>
      )}
    </SectionGroup>
  );
};
