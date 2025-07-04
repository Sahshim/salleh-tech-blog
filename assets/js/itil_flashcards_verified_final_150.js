const flashcards = [
  {
    "term": "Access Management",
    "definition": "The practice of granting authorized users the right to use a service, while preventing access to unauthorized users."
  },
  {
    "term": "Accountability",
    "definition": "The obligation of an individual or organization to account for its activities, accept responsibility for them, and disclose the results."
  },
  {
    "term": "Agile",
    "definition": "An approach to software development that emphasizes incremental delivery, team collaboration, continual planning, and continual learning."
  },
  {
    "term": "Availability",
    "definition": "The ability of an IT service or other configuration item to perform its agreed function when required."
  },
  {
    "term": "Baseline",
    "definition": "A report or metric that serves as a starting point against which progress or change can be assessed."
  },
  {
    "term": "Business Impact Analysis",
    "definition": "A key activity in the practice of service continuity management that identifies vital business functions and their dependencies."
  },
  {
    "term": "Capacity Management",
    "definition": "The practice of ensuring that services and infrastructure are able to meet agreed capacity and performance requirements."
  },
  {
    "term": "Change",
    "definition": "The addition, modification, or removal of anything that could have a direct or indirect effect on services."
  },
  {
    "term": "Change Enablement",
    "definition": "The practice of maximizing the number of successful service and product changes by ensuring that risks are properly assessed."
  },
  {
    "term": "Configuration Item",
    "definition": "Any component that needs to be managed in order to deliver an IT service."
  },
  {
    "term": "Continual Improvement",
    "definition": "A recurring organizational activity performed at all levels to ensure that an organization's performance continually meets stakeholders\u2019 expectations."
  },
  {
    "term": "Customer",
    "definition": "A person who defines the requirements for a service and takes responsibility for the outcomes of service consumption."
  },
  {
    "term": "Deployment Management",
    "definition": "The practice responsible for moving new or changed hardware, software, documentation, processes, or other components to live environments."
  },
  {
    "term": "Emergency Change",
    "definition": "A change that must be implemented as soon as possible to resolve an incident or implement a security patch."
  },
  {
    "term": "Engagement",
    "definition": "Interactions between a service provider and service consumer."
  },
  {
    "term": "Event",
    "definition": "Any change of state that has significance for the management of a service or other configuration item."
  },
  {
    "term": "Governance",
    "definition": "The means by which an organization is directed and controlled."
  },
  {
    "term": "Incident",
    "definition": "An unplanned interruption to a service or reduction in the quality of a service."
  },
  {
    "term": "Information Security Management",
    "definition": "The practice of protecting information needed by the organization to conduct its business."
  },
  {
    "term": "IT Asset",
    "definition": "Any financially valuable component that can contribute to the delivery of an IT product or service."
  },
  {
    "term": "IT Asset Management",
    "definition": "The practice of planning and managing the full lifecycle of IT assets."
  },
  {
    "term": "Knowledge Management",
    "definition": "The practice of maintaining and improving the effective, efficient, and convenient use of information and knowledge across an organization."
  },
  {
    "term": "Measurement and Reporting",
    "definition": "The practice of supporting good decision-making and continual improvement by decreasing the level of uncertainty."
  },
  {
    "term": "Monitoring and Event Management",
    "definition": "The practice of systematically observing services and service components and recording, reporting selected changes of state."
  },
  {
    "term": "Problem",
    "definition": "A cause, or potential cause, of one or more incidents."
  },
  {
    "term": "Problem Management",
    "definition": "The practice of reducing the likelihood and impact of incidents by identifying actual and potential causes of incidents."
  },
  {
    "term": "Release Management",
    "definition": "The practice of making new and changed services and features available for use."
  },
  {
    "term": "Risk",
    "definition": "A possible event that could cause harm or loss, or affect the ability to achieve objectives."
  },
  {
    "term": "Service",
    "definition": "A means of enabling value co-creation by facilitating outcomes that customers want to achieve."
  },
  {
    "term": "Service Continuity Management",
    "definition": "The practice of ensuring that service availability and performance are maintained at sufficient levels in case of a disaster."
  },
  {
    "term": "Service Desk",
    "definition": "The point of communication between the service provider and all its users."
  },
  {
    "term": "Service Level Agreement (SLA)",
    "definition": "A documented agreement between a service provider and a customer that identifies both services required and the expected level of service."
  },
  {
    "term": "Service Request",
    "definition": "A request from a user or a user\u2019s authorized representative that initiates a service action."
  },
  {
    "term": "Service Value Chain",
    "definition": "A set of interconnected activities that an organization performs to deliver a valuable product or service to its consumers."
  },
  {
    "term": "Service Value System (SVS)",
    "definition": "A model representing how all components and activities of an organization work together to facilitate value creation."
  },
  {
    "term": "Stakeholder",
    "definition": "A person or organization that has an interest in an organization, product, service, practice, or other entity."
  },
  {
    "term": "Supplier",
    "definition": "A stakeholder responsible for providing services or products that are required to deliver services."
  },
  {
    "term": "Technical Management Practice",
    "definition": "A set of specialized organizational capabilities for enabling or supporting services."
  },
  {
    "term": "Utility",
    "definition": "The functionality offered by a product or service to meet a particular need."
  },
  {
    "term": "Value",
    "definition": "The perceived benefits, usefulness, and importance of something."
  },
  {
    "term": "Warranty",
    "definition": "Assurance that a product or service will meet agreed requirements."
  },
  {
    "term": "Availability Management",
    "definition": "The practice of ensuring that services deliver agreed levels of availability to meet the needs of customers and users."
  },
  {
    "term": "Capacity and Performance Management",
    "definition": "The practice of ensuring services achieve agreed and expected performance, satisfying current and future demand cost-effectively."
  },
  {
    "term": "Change Schedule",
    "definition": "A calendar that lists all approved changes and their planned implementation dates."
  },
  {
    "term": "Configuration Management Database (CMDB)",
    "definition": "A database used to store configuration records throughout their lifecycle."
  },
  {
    "term": "Design and Transition",
    "definition": "Value chain activity that ensures products and services continually meet stakeholder expectations."
  },
  {
    "term": "Engage",
    "definition": "Value chain activity that provides a good understanding of stakeholder needs, transparency, and continual engagement."
  },
  {
    "term": "Improve",
    "definition": "Value chain activity that ensures continual improvement of products, services, and practices."
  },
  {
    "term": "Obtain/Build",
    "definition": "Value chain activity that ensures service components are available when and where they are needed."
  },
  {
    "term": "Plan",
    "definition": "Value chain activity that ensures a shared understanding of the vision, status, and improvement direction for all products and services."
  },
  {
    "term": "Deliver and Support",
    "definition": "Value chain activity that ensures services are delivered and supported according to agreed specifications and stakeholders\u2019 expectations."
  },
  {
    "term": "Change Evaluation",
    "definition": "The practice of assessing a new or changed service to verify that it supports business objectives and requirements."
  },
  {
    "term": "Event Management",
    "definition": "The practice of capturing and making sense of events to facilitate effective monitoring and control."
  },
  {
    "term": "Service Catalog Management",
    "definition": "The practice of providing a single source of consistent information on all services and ensuring it is available to those who are authorized to access it."
  },
  {
    "term": "Service Design",
    "definition": "The activity that designs new or changed services for introduction into the live environment."
  },
  {
    "term": "Service Offering",
    "definition": "A formal description of one or more services, designed to meet the needs of a target consumer group."
  },
  {
    "term": "Service Provision",
    "definition": "Activities performed by an organization to provide services to consumers."
  },
  {
    "term": "Service Consumption",
    "definition": "Activities performed by an organization to consume services."
  },
  {
    "term": "ITIL Practices",
    "definition": "Sets of organizational resources designed for performing work or accomplishing an objective."
  },
  {
    "term": "Plan-Do-Check-Act (PDCA)",
    "definition": "An iterative four-stage model for carrying out change and continuous improvement."
  },
  {
    "term": "Service Management",
    "definition": "A set of specialized organizational capabilities for enabling value for customers in the form of services."
  },
  {
    "term": "Warranty",
    "definition": "Assurance that a product or service will meet agreed requirements for availability, capacity, continuity, and security."
  },
  {
    "term": "Supplier Management",
    "definition": "The practice of ensuring that an organization\u2019s suppliers and their performance are managed appropriately."
  },
  {
    "term": "Release and Deployment Management",
    "definition": "The practice of planning, scheduling, and controlling the movement of releases to test and live environments."
  },
  {
    "term": "Problem Control",
    "definition": "The activity of identifying the root cause of incidents and determining resolutions."
  },
  {
    "term": "Workaround",
    "definition": "A solution that reduces or eliminates the impact of an incident or problem for which a full resolution is not yet available."
  },
  {
    "term": "Known Error",
    "definition": "A problem that has been analyzed and has not been resolved."
  },
  {
    "term": "Post-Implementation Review (PIR)",
    "definition": "A review that takes place after a change or project is implemented, to evaluate whether expected outcomes were achieved."
  },
  {
    "term": "Emergency Change Advisory Board (ECAB)",
    "definition": "A subset of the Change Advisory Board responsible for making decisions about high-impact emergency changes."
  },
  {
    "term": "Organizational Change Management",
    "definition": "The practice of ensuring that changes in an organization are implemented smoothly and successfully."
  },
  {
    "term": "Information Model",
    "definition": "A model that describes the structure of the information needed to manage services and assets."
  },
  {
    "term": "Process",
    "definition": "A set of interrelated or interacting activities that transform inputs into outputs."
  },
  {
    "term": "Business Relationship Management",
    "definition": "The practice of establishing and maintaining a positive relationship between the service provider and its customers."
  },
  {
    "term": "Service Performance",
    "definition": "A measure of what is delivered by a service and how well it is delivered."
  },
  {
    "term": "IT Service Continuity Management (ITSCM)",
    "definition": "The practice of ensuring that service availability and performance are maintained during and after a major incident."
  },
  {
    "term": "Configuration Baseline",
    "definition": "A baseline configuration used as a reference point for future builds and changes."
  },
  {
    "term": "Service Provider",
    "definition": "An organization that delivers services to one or more internal or external customers."
  },
  {
    "term": "Organizational Culture",
    "definition": "The values and behaviors that contribute to the unique social and psychological environment of an organization."
  },
  {
    "term": "Escalation Management",
    "definition": "The practice of escalating incidents or service requests to appropriate personnel when needed to resolve issues efficiently."
  },
  {
    "term": "Change Advisory Board (CAB)",
    "definition": "A group of people that advises the change authority in the assessment, prioritization, and scheduling of changes."
  },
  {
    "term": "Backup",
    "definition": "A copy of data used to restore and recover data after a system failure."
  },
  {
    "term": "Compliance",
    "definition": "The act of ensuring that a standard or set of guidelines is followed, or that proper, consistent accounting or other practices are being employed."
  },
  {
    "term": "Demand Management",
    "definition": "The practice of understanding and influencing customer demand for services."
  },
  {
    "term": "IT Policy",
    "definition": "Rules or principles that guide decisions and achieve rational outcomes within IT management."
  },
  {
    "term": "Knowledge Article",
    "definition": "A document in the knowledge base that contains information to help users or service desk staff resolve issues or complete tasks."
  },
  {
    "term": "License Management",
    "definition": "The practice of managing and documenting the acquisition, deployment, maintenance, and use of software licenses."
  },
  {
    "term": "Problem Record",
    "definition": "A record containing the details of a problem, documenting its known errors, workarounds, and root cause if identified."
  },
  {
    "term": "Service Charter",
    "definition": "A document that defines the scope, objectives, and participants in a service initiative or delivery."
  },
  {
    "term": "Agreed Service Time (AST)",
    "definition": "A time when a service is expected to be available to the users."
  },
  {
    "term": "Assessment",
    "definition": "An evaluation of the current state that is used to determine what can be achieved and how best to approach it."
  },
  {
    "term": "Business Case",
    "definition": "A justification for the expenditure of organizational resources, providing information about costs, benefits, options, risks, and issues."
  },
  {
    "term": "Call",
    "definition": "A communication to the service desk initiated by a user for any reason, such as a request for help or reporting an incident."
  },
  {
    "term": "Change Schedule",
    "definition": "A calendar that lists all approved changes and their planned implementation dates."
  },
  {
    "term": "Commercial Off-the-Shelf (COTS)",
    "definition": "Pre-packaged software or hardware products that are available commercially."
  },
  {
    "term": "Configuration Management System (CMS)",
    "definition": "A set of tools, data, and information that is used to support service configuration management."
  },
  {
    "term": "Continual Improvement Register (CIR)",
    "definition": "A structured document or database used to record and manage improvement opportunities throughout their lifecycle."
  },
  {
    "term": "Cost",
    "definition": "The amount of money spent on a specific activity or resource."
  },
  {
    "term": "Customer Experience (CX)",
    "definition": "The sum of functional and emotional interactions with a service and service provider as perceived by the customer."
  },
  {
    "term": "Deliver and Support",
    "definition": "Value chain activity that ensures services are delivered and supported according to agreed specifications and expectations."
  },
  {
    "term": "Detection",
    "definition": "A step in incident or event management where anomalies are identified and flagged for further action."
  },
  {
    "term": "Environment",
    "definition": "A subset of the IT infrastructure that is used for a particular purpose."
  },
  {
    "term": "Error",
    "definition": "A flaw or vulnerability that may cause a failure or incident."
  },
  {
    "term": "Escalation",
    "definition": "The act of involving more senior levels of management or more highly skilled personnel."
  },
  {
    "term": "Governance",
    "definition": "The means by which an organization is directed and controlled."
  },
  {
    "term": "Impact",
    "definition": "The effect that an incident, problem, or change has on business operations."
  },
  {
    "term": "Information Model",
    "definition": "A model that describes the structure of information required to manage services and assets."
  },
  {
    "term": "Infrastructure",
    "definition": "The physical and virtual resources that support the flow, processing, storage, and analysis of data."
  },
  {
    "term": "Known Error Database (KEDB)",
    "definition": "A database containing all known error records."
  },
  {
    "term": "Lead Time",
    "definition": "The time taken to fulfill a customer request or complete a defined process."
  },
  {
    "term": "Lifecycle",
    "definition": "The full set of stages involved in the management of a product or service."
  },
  {
    "term": "Maintainability",
    "definition": "The ease with which a service or component can be restored to normal working condition."
  },
  {
    "term": "Mean Time to Restore Service (MTRS)",
    "definition": "A metric used to measure the average time taken to restore a service after an incident."
  },
  {
    "term": "Metric",
    "definition": "A measurement of something, often used to assess performance or progress."
  },
  {
    "term": "Model",
    "definition": "A representation of a system, process, service, or CI that helps in understanding and predicting behavior."
  },
  {
    "term": "Monitoring",
    "definition": "The practice of systematically observing a service or component to detect conditions of interest."
  },
  {
    "term": "Normal Change",
    "definition": "A change that follows a pre-authorized process for assessment and approval."
  },
  {
    "term": "Operational Technology",
    "definition": "Hardware and software that detects or causes changes through monitoring and control of physical devices."
  },
  {
    "term": "Optimization",
    "definition": "The process of making the best or most effective use of a situation or resource."
  },
  {
    "term": "Outcome",
    "definition": "A result enabled by one or more outputs."
  },
  {
    "term": "Output",
    "definition": "A tangible or intangible deliverable of an activity."
  },
  {
    "term": "Process Owner",
    "definition": "A role accountable for ensuring that a process is fit for purpose and is performed as required."
  },
  {
    "term": "Product",
    "definition": "A configuration of an organization\u2019s resources designed to offer value to a consumer."
  },
  {
    "term": "Release",
    "definition": "A version of a service or other configuration item made available for use."
  },
  {
    "term": "Remediation",
    "definition": "Actions taken to recover from a failed change or incident."
  },
  {
    "term": "Resolution",
    "definition": "The action of solving an issue or restoring service."
  },
  {
    "term": "Responsiveness",
    "definition": "The ability of a service provider to react quickly and effectively to user needs."
  },
  {
    "term": "Roles",
    "definition": "A set of responsibilities granted to a person or team in a defined context."
  },
  {
    "term": "Scope",
    "definition": "The boundaries or extent of what a process, project, or activity will address."
  },
  {
    "term": "Service Request Management",
    "definition": "The practice of handling requests for service delivery or information."
  },
  {
    "term": "Significance",
    "definition": "The importance of an event or situation with respect to its effect on service performance or compliance."
  },
  {
    "term": "Single Point of Contact",
    "definition": "A person or function that acts as the coordination hub for service delivery or support."
  },
  {
    "term": "Skill",
    "definition": "The ability to carry out a task effectively."
  },
  {
    "term": "Stability",
    "definition": "The level of consistency in service delivery."
  },
  {
    "term": "Standard Change",
    "definition": "A change that is low risk, pre-authorized, and well understood."
  },
  {
    "term": "System",
    "definition": "A set of related components working together to accomplish a specific task."
  },
  {
    "term": "Technical Debt",
    "definition": "The implied cost of additional rework caused by choosing an easy solution now instead of using a better approach."
  },
  {
    "term": "Transaction",
    "definition": "A discrete exchange between two or more participants."
  },
  {
    "term": "Trigger",
    "definition": "An event or condition that initiates a process."
  },
  {
    "term": "Urgency",
    "definition": "A measure of how quickly a resolution is required."
  },
  {
    "term": "Usability",
    "definition": "The ease with which a user can use a product or service to achieve a particular goal."
  },
  {
    "term": "User",
    "definition": "A person who uses services."
  },
  {
    "term": "Utilization",
    "definition": "The extent to which a resource is used."
  },
  {
    "term": "Value Chain Activity",
    "definition": "A step that an organization undertakes in the creation of value."
  },
  {
    "term": "Virtualization",
    "definition": "The creation of a virtual version of something, such as a server or network resource."
  },
  {
    "term": "Work Instruction",
    "definition": "Detailed directions for how to carry out a specific task or activity."
  },
  {
    "term": "Workaround",
    "definition": "A solution that reduces or eliminates the impact of an incident or problem for which a full resolution is not yet available."
  },
  {
    "term": "Change Model",
    "definition": "A repeatable approach to managing a specific type of change."
  },
  {
    "term": "Continual Improvement Model",
    "definition": "A model used to structure improvement initiatives."
  },
  {
    "term": "IT Service",
    "definition": "A service based on the use of information technology."
  },
  {
    "term": "Enterprise Architecture",
    "definition": "A practice that defines the structure and operation of an organization using a high-level framework."
  }
];