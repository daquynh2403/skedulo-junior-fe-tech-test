export interface Job {
  id: number;
  contactId: number;
  start: string;
  end: string;
  location: string;
  name: string;
}

export interface Contact {
  contactId: number;
  contactName: string;
}

export interface IDataService {
  getJobs: () => Promise<Pick<Job, "name" | "start" | "end">[]>;
  getJobsWithSearchTerm: (
    searchTerm: string
  ) => Promise<Pick<Job, "name" | "start" | "end" | "contactId">[]>;

  //Contact Method
  getContactName: (
    contactId: number
  ) => Promise<Pick<Contact, "contactName">[]>;
}
