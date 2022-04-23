# Skedulo Tech Test Submission

## Overview

Hi! This is my submission for technical test.

In this submission, I have installed date-fn library to format the start date and end date. I also use boostrap to style table which showed the list of jobs.

To not show any data and clear result when no more than 3 characters have been entered, i thought about 'debounce technique' but turned out it was as simple as 'searchJob.length < 3' can solve the requirement perfectly.

To show contact name but there is no data of contact name in db.json. So I created contact.json according to contactId provided in db.json. I also added 2 methods, one is in DataSevice, another is in type.ts, both of them support for getting list of contacts. And in QuestionOne.tsx, 'getContactName' returns contactName value base on contactId from jobData;

I have learned a lot of typescript and reactjs knowledge via this test.

Unfortunately this test came along with 2 other tests from my classes at school which will be happened this week. So I couldn't add more testcase.

Thank you for reading my overview about the test. Iam looking forward to your reviews.
