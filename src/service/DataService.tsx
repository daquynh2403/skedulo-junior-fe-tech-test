import { IDataService, Job, Contact } from "../common/types";

import data from "./db.json";
import contactData from "./contact.json";
const { jobs } = data as { jobs: Job[] };
const { contacts } = contactData as { contacts: Contact[] };

export const DataService: IDataService = {
  getJobsWithSearchTerm: (searchTerm: string) => {
    const result = jobs.filter((job) =>
      job.name.toLowerCase().includes(searchTerm?.toLowerCase?.())
    );
    return Promise.resolve(result);
  },

  getJobs: () => {
    return Promise.resolve(jobs);
  },

  //Contact Method
  getContactName: (contactId: number) => {
    const result = contacts.filter(
      (contact) => contact.contactId === contactId
    );
    return Promise.resolve(result);
  },
};
