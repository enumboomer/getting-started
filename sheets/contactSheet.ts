
import { Flatfile } from "@flatfile/api";

export const contactSheet: Flatfile.SheetConfig = {
  slug: "contacts",
  name: "Contacts",
  fields: [
    {
      key: "firstName",
      type: "string",
      label: "First Name",
      constraints: [{ "type": "required" }]
    },
    {
      key: "lastName",
      type: "string",
      label: "Last Name",
    },
    {
      key: "fullName",
      type: "string",
      label: "Full Name",
      description: 'If not provided, the system will generate this is from First & Last name.',
    },
    {
      key: "email",
      type: "string",
      label: "Email",
      description: 'Please enter your email',
      constraints: [{ "type": "unique" }]
    },
    {
      key: "phone",
      type: "string",
      label: "Phone Number",
    },
    {
      key: "date",
      type: "string",
      label: "Date",
    },
    {
      key: "country",
      type: "string",
      label: "Country",
    },
    {
      key: "zipCode",
      type: "string",
      label: "Zip Code",
    },
    {
      key: "subscriber",
      label: "Subscriber?",
      type: "boolean",
    },
    {
      key: "type",
      label: "Deal Status",
      type: "enum",
      config: {
        options: [
          { value: "new", label: "New" },
          { value: "interested", label: "Interested" },
          { value: "meeting", label: "Meeting" },
          { value: "opportunity", label: "Opportunity" },
          { value: "unqualified", label: "Not a fit" }
        ]
      },
      constraints: [{ "type": "required" }]
    },
    // {
    //   key: "ccId",
    //   label: "CC ID",
    //   description: "Cost center code that matches related record in cost center sheet.",
    //   type: "string",
    // },
    {
      key: "ccId",
      label: "CC ID",
      description: "Cost center code pulled from reference file",
      type: "reference",
      // readonly: true,
      config: {
        ref: "costcenters",
        key: "code",
        relationship: "has-one"
      }
    },
    // {
    //   key: "ccName",
    //   label: "CC Name",
    //   description: "Cost center name pulled from reference file",
    //   type: "reference",
    //   // readonly: true,
    //   config: {
    //     ref: "costcenters",
    //     key: "name",
    //     relationship: "has-one"
    //   }
    // },
    {
      key: "ccName",
      label: "CC Name",
      description: "Cost center name that matches related record in cost center sheet.",
      type: "string",
    },
  ]
};

