const flashcards = [
  {
    "term": "Acceptance criteria",
    "definition": "A list of minimum requirements that a service or service component must meet for it to be acceptable to key stakeholders. 2"
  },
  {
    "term": "Agile",
    "definition": "An umbrella term for a collection of frameworks and techniques that together enable teams and individuals to work in a way that is typified by collaboration, prioritization, iterative and incremental delivery, and timeboxing. There are several specific methods (or frameworks) that are classed as Agile, such as Scrum, Lean, and Kanban. 3"
  },
  {
    "term": "Architecture management practice",
    "definition": "The practice of providing an understanding of all the different elements that make up an organization and how those elements relate to one another. 4"
  },
  {
    "term": "Asset register",
    "definition": "A database or list of assets, capturing key attributes such as ownership and financial value. 5"
  },
  {
    "term": "Availability",
    "definition": "The ability of an IT service or other configuration item to perform its agreed function when required. 6"
  },
  {
    "term": "Availability management practice",
    "definition": "The practice of ensuring that services deliver agreed levels of availability to meet the needs of customers and users. 7"
  },
  {
    "term": "Baseline",
    "definition": "A report or metric that serves as a starting point against which progress or change can be assessed. 8"
  },
  {
    "term": "Best practice",
    "definition": "A way of working that has been proven to be successful by multiple organizations. 9"
  },
  {
    "term": "Big data",
    "definition": "The use of very large volumes of structured and unstructured data from a variety of sources to gain new insights. 10"
  },
  {
    "term": "Business analysis practice",
    "definition": "The practice of analysing a business or some element of a business, defining its needs and recommending solutions to address these needs and/or solve a business problem, and create value for stakeholders. 11"
  },
  {
    "term": "Business case",
    "definition": "A justification for expenditure of organizational resources, providing information about costs, benefits, options, risks, and issues. 12"
  },
  {
    "term": "Business impact analysis (BIA)",
    "definition": "A key activity in the practice of service continuity management that identifies vital business functions and their dependencies. 13"
  },
  {
    "term": "Business relationship manager (BRM)",
    "definition": "A role responsible for maintaining good relationships with one or more customers. 14"
  },
  {
    "term": "Call",
    "definition": "An interaction (e.g. a telephone call) with the service desk. A call could result in an incident or a service request being logged. 15"
  },
  {
    "term": "Call/contact centre",
    "definition": "An organization or business unit that handles large numbers of incoming and outgoing calls and other interactions. 16"
  },
  {
    "term": "Capability",
    "definition": "The ability of an organization, person, process, application, configuration item, or IT service to carry out an activity. 17"
  },
  {
    "term": "Capacity and performance management practice",
    "definition": "The practice of ensuring that services achieve agreed and expected performance levels, satisfying current and future demand in a cost-effective way. 18"
  },
  {
    "term": "Capacity planning",
    "definition": "The activity of creating a plan that manages resources to meet demand for services. 19"
  },
  {
    "term": "Change",
    "definition": "The addition, modification, or removal of anything that could have a direct or indirect effect on services. 20"
  },
  {
    "term": "Change authority",
    "definition": "A person or group responsible for authorizing a change. 21"
  },
  {
    "term": "Change control practice",
    "definition": "The practice of ensuring that risks are properly assessed, authorizing changes to proceed and managing a change schedule in order to maximize the number of successful service and product changes. 22"
  },
  {
    "term": "Change model",
    "definition": "A repeatable approach to the management of a particular type of change. 23"
  },
  {
    "term": "Change schedule",
    "definition": "A calendar that shows planned and historical changes. 24"
  },
  {
    "term": "Charging",
    "definition": "The activity that assigns a price for services. 25"
  },
  {
    "term": "Cloud computing",
    "definition": "A model for enabling on-demand network access to a shared pool of configurable computing resources that can be rapidly provided with minimal management effort or provider interaction. 26"
  },
  {
    "term": "Compliance",
    "definition": "The act of ensuring that a standard or set of guidelines is followed, or that proper, consistent accounting or other practices are being employed. 27"
  },
  {
    "term": "Confidentiality",
    "definition": "A security objective that ensures information is not made available or disclosed to unauthorized entities. 28"
  },
  {
    "term": "Configuration",
    "definition": "An arrangement of configuration items (CIs) or other resources that work together to deliver a product or service. Can also be used to describe the parameter settings for one or more CIs. 29"
  },
  {
    "term": "Configuration item (CI)",
    "definition": "Any component that needs to be managed in order to deliver an IT service. 30"
  },
  {
    "term": "Configuration management database (CMDB)",
    "definition": "A database used to store configuration records throughout their lifecycle. The CMDB also maintains the relationships between configuration records. 31"
  },
  {
    "term": "Configuration management system (CMS)",
    "definition": "A set of tools, data, and information that is used to support service configuration management. 32"
  },
  {
    "term": "Configuration record",
    "definition": "A record containing the details of a configuration item (CI). Each configuration record documents the lifecycle of a single CI. Configuration records are stored in a configuration management database. 33"
  },
  {
    "term": "Continual improvement practice",
    "definition": "The practice of aligning an organization's practices and services with changing business needs through the ongoing identification and improvement of all elements involved in the effective management of products and services. 34"
  },
  {
    "term": "Continuous deployment",
    "definition": "An integrated set of practices and tools used to deploy software changes into the production environment. These software changes have already passed pre-defined automated tests. 35"
  },
  {
    "term": "Continuous integration / continuous delivery",
    "definition": "An integrated set of practices and tools used to merge developers' code, build and test the resulting software, and package it so that it is ready for deployment. 36"
  },
  {
    "term": "Control",
    "definition": "The means of managing a risk, ensuring that a business objective is achieved, or that a process is followed. 37"
  },
  {
    "term": "Cost",
    "definition": "The amount of money spent on a specific activity or resource. 38"
  },
  {
    "term": "Cost centre",
    "definition": "A business unit or project to which costs are assigned. 39"
  },
  {
    "term": "Critical success factor (CSF)",
    "definition": "A necessary precondition for the achievement of intended results. 40"
  },
  {
    "term": "Culture",
    "definition": "A set of values that is shared by a group of people, including expectations about how people should behave, ideas, beliefs, and practices. 41"
  },
  {
    "term": "Customer",
    "definition": "A person who defines the requirements for a service and takes responsibility for the outcomes of service consumption. 42"
  },
  {
    "term": "Customer experience (CX)",
    "definition": "The sum of functional and emotional interactions with a service and service provider as perceived by a service consumer. 43"
  },
  {
    "term": "Dashboard",
    "definition": "A real-time graphical representation of data. 44"
  },
  {
    "term": "Deliver and support",
    "definition": "The value chain activity that ensures services are delivered and supported according to agreed specifications and stakeholders' expectations. 45"
  },
  {
    "term": "Demand",
    "definition": "Input to the service value system based on opportunities and needs from internal and external stakeholders. 46"
  },
  {
    "term": "Deployment",
    "definition": "The movement of any service component into any environment. 47"
  },
  {
    "term": "Deployment management practice",
    "definition": "The practice of moving new or changed hardware, software, documentation, processes, or any other service component to live environments. 48"
  },
  {
    "term": "Design and transition",
    "definition": "The value chain activity that ensures products and services continually meet stakeholder expectations for quality, costs, and time to market. 49"
  },
  {
    "term": "Design thinking",
    "definition": "A practical and human-centred approach used by product and service designers to solve complex problems and find practical and creative solutions that meet the needs of an organization and its customers. 50"
  },
  {
    "term": "Development environment",
    "definition": "An environment used to create or modify IT services or applications. 51"
  },
  {
    "term": "DevOps",
    "definition": "An organizational culture that aims to improve the flow of value to customers. DevOps focuses on culture, automation, Lean, measurement, and sharing (CALMS). 52"
  },
  {
    "term": "Digital transformation",
    "definition": "The evolution of traditional business models to meet the needs of highly empowered customers, with technology playing an enabling role. 53"
  },
  {
    "term": "Disaster",
    "definition": "A sudden unplanned event that causes great damage or serious loss to an organization. A disaster results in an organization failing to provide critical business functions for some predetermined minimum period of time. 54"
  },
  {
    "term": "Disaster recovery plans",
    "definition": "A set of clearly defined plans related to how an organization will recover from a disaster as well as return to a pre-disaster condition, considering the four dimensions of service management. 55"
  },
  {
    "term": "Driver",
    "definition": "Something that influences strategy, objectives, or requirements. 56"
  },
  {
    "term": "Effectiveness",
    "definition": "A measure of whether the objectives of a practice, service or activity have been achieved. 57"
  },
  {
    "term": "Efficiency",
    "definition": "A measure of whether the right amount of resources have been used by a practice, service, or activity. 58"
  },
  {
    "term": "Emergency change",
    "definition": "A change that must be introduced as soon as possible. 59"
  },
  {
    "term": "Engage",
    "definition": "The value chain activity that provides a good understanding of stakeholder needs, transparency, continual engagement, and good relationships with all stakeholders. 60"
  },
  {
    "term": "Environment",
    "definition": "A subset of the IT infrastructure that is used for a particular purpose, for example a live environment or test environment. Can also mean the external conditions that influence or affect something. 61"
  },
  {
    "term": "Error",
    "definition": "A flaw or vulnerability that may cause incidents. 62"
  },
  {
    "term": "Error control",
    "definition": "Problem management activities used to manage known errors. 63"
  },
  {
    "term": "Escalation",
    "definition": "The act of sharing awareness or transferring ownership of an issue or work item. 64"
  },
  {
    "term": "Event",
    "definition": "Any change of state that has significance for the management of a service or other configuration item. 65"
  },
  {
    "term": "External customer",
    "definition": "A customer who works for an organization other than the service provider. 66"
  },
  {
    "term": "Failure",
    "definition": "A loss of ability to operate to specification, or to deliver the required output or outcome. 67"
  },
  {
    "term": "Feedback loop",
    "definition": "A technique whereby the outputs of one part of a system are used as inputs to the same part of the system. 68"
  },
  {
    "term": "Four dimensions of service management",
    "definition": "The four perspectives that are critical to the effective and efficient facilitation of value for customers and other stakeholders in the form of products and services. 69"
  },
  {
    "term": "Goods",
    "definition": "Tangible resources that are transferred or available for transfer from a service provider to a service consumer, together with ownership and associated rights and responsibilities. 70"
  },
  {
    "term": "Governance",
    "definition": "The means by which an organization is directed and controlled. 71"
  },
  {
    "term": "Identity",
    "definition": "A unique name that is used to identify and grant system access rights to a user, person, or role. 72"
  },
  {
    "term": "Improve",
    "definition": "The value chain activity that ensures continual improvement of products, services, and practices across all value chain activities and the four dimensions of service management. 73"
  },
  {
    "term": "Incident",
    "definition": "An unplanned interruption to a service or reduction in the quality of a service. 74"
  },
  {
    "term": "Incident management",
    "definition": "The practice of minimizing the negative impact of incidents by restoring normal service operation as quickly as possible. 75"
  },
  {
    "term": "Information and technology",
    "definition": "One of the four dimensions of service management. It includes the information and knowledge used to deliver services, and the information and technologies used to manage all aspects of the service value system. 76"
  },
  {
    "term": "Information security management practice",
    "definition": "The practice of protecting an organization by understanding and managing risks to the confidentiality, integrity, and availability of information. 77"
  },
  {
    "term": "Information security policy",
    "definition": "The policy that governs an organization's approach to information security management. 78"
  },
  {
    "term": "Infrastructure and platform management practice",
    "definition": "The practice of overseeing the infrastructure and platforms used by an organization. This enables the monitoring of technology solutions available, including solutions from third parties. 79"
  },
  {
    "term": "Integrity",
    "definition": "A security objective that ensures information is only modified by authorized personnel and activities. 80"
  },
  {
    "term": "Internal customer",
    "definition": "A customer who works for the same organization as the service provider. 81"
  },
  {
    "term": "Internet of Things",
    "definition": "The interconnection of devices via the internet that were not traditionally thought of as IT assets, but now include embedded computing capability and network connectivity. 82"
  },
  {
    "term": "IT asset",
    "definition": "Any financially valuable component that can contribute to the delivery of an IT product or service. 83"
  },
  {
    "term": "IT asset management practice",
    "definition": "The practice of planning and managing the full lifecycle of all IT assets. 84"
  },
  {
    "term": "IT infrastructure",
    "definition": "All of the hardware, software, networks, and facilities that are required to develop, test, deliver, monitor, manage, and support IT services. 85"
  },
  {
    "term": "IT service",
    "definition": "A service based on the use of information technology. 86"
  },
  {
    "term": "ITIL",
    "definition": "Best-practice guidance for IT service management. 87"
  },
  {
    "term": "ITIL guiding principles",
    "definition": "Recommendations that can guide an organization in all circumstances, regardless of changes in its goals, strategies, type of work, or management structure. 88"
  },
  {
    "term": "ITIL service value chain",
    "definition": "An operating model for service providers that covers all the key activities required to effectively manage products and services. 89"
  },
  {
    "term": "Kanban",
    "definition": "A method for visualizing work, identifying potential blockages and resource conflicts, and managing work in progress. 90"
  },
  {
    "term": "Key performance indicator (KPI)",
    "definition": "An important metric used to evaluate the success in meeting an objective. 91"
  },
  {
    "term": "Knowledge management practice",
    "definition": "The practice of maintaining and improving the effective, efficient, and convenient use of information and knowledge across an organization. 92"
  },
  {
    "term": "Known error",
    "definition": "A problem that has been analysed but has not been resolved. 93"
  },
  {
    "term": "Lean",
    "definition": "An approach that focuses on improving workflows by maximizing value through the elimination of waste. 94"
  },
  {
    "term": "Lifecycle",
    "definition": "The full set of stages, transitions, and associated statuses in the life of a service, product, practice, or other entity. 95"
  },
  {
    "term": "Live",
    "definition": "Refers to a service or other configuration item operating in the live environment. 96"
  },
  {
    "term": "Live environment",
    "definition": "A controlled environment used in the delivery of IT services to service consumers. 97"
  },
  {
    "term": "Maintainability",
    "definition": "The ease with which a service or other entity can be repaired or modified. 98"
  },
  {
    "term": "Major incident",
    "definition": "An incident with significant business impact, requiring an immediate coordinated resolution. 99"
  },
  {
    "term": "Management system",
    "definition": "Interrelated or interacting elements that establish policy and objectives and enable the achievement of those objectives. 100"
  },
  {
    "term": "Maturity",
    "definition": "A measure of the reliability, efficiency and effectiveness of an organization, practice, or process. 101"
  },
  {
    "term": "Mean time between failures (MTBF)",
    "definition": "A metric of how frequently a service or other configuration item fails. 102"
  },
  {
    "term": "Mean time to restore service (MTRS)",
    "definition": "A metric of how quickly a service is restored after a failure. 103"
  },
  {
    "term": "Measurement and reporting",
    "definition": "The practice of supporting good decision-making and continual improvement by decreasing levels of uncertainty. 104"
  },
  {
    "term": "Metric",
    "definition": "A measurement or calculation that is monitored or reported for management and improvement. 105"
  },
  {
    "term": "Minimum viable product (MVP)",
    "definition": "A product with just enough features to satisfy early customers, and to provide feedback for future product development. 106"
  },
  {
    "term": "Mission statement",
    "definition": "A short but complete description of the overall purpose and intentions of an organization. It states what is to be achieved, but not how this should be done. 107"
  },
  {
    "term": "Model",
    "definition": "A representation of a system, practice, process, service, or other entity that is used to understand and predict its behaviour and relationships. 108"
  },
  {
    "term": "Modelling",
    "definition": "The activity of creating, maintaining, and utilizing models. 109"
  },
  {
    "term": "Monitoring",
    "definition": "Repeated observation of a system, practice, process, service, or other entity to detect events and to ensure that the current status is known. 110"
  },
  {
    "term": "Monitoring and event management practice",
    "definition": "The practice of systematically observing services and service components, and recording and reporting selected changes of state identified as events. 111"
  },
  {
    "term": "Obtain/build",
    "definition": "The value chain activity that ensures service components are available when and where they are needed, and that they meet agreed specifications. 112"
  },
  {
    "term": "Operation",
    "definition": "The routine running and management of an activity, product, service, or other configuration item. 113"
  },
  {
    "term": "Operational technology",
    "definition": "The hardware and software solutions that detect or cause changes in physical processes through direct monitoring and/or control of physical devices such as valves, pumps, etc. 114"
  },
  {
    "term": "Organization",
    "definition": "A person or a group of people that has its own functions with responsibilities, authorities, and relationships to achieve its objectives. 115"
  },
  {
    "term": "Organizational change management practice",
    "definition": "The practice of ensuring that changes in an organization are smoothly and successfully implemented and that lasting benefits are achieved by managing the human aspects of the changes. 116"
  },
  {
    "term": "Organizational resilience",
    "definition": "The ability of an organization to anticipate, prepare for, respond to, and adapt to unplanned external influences. 117"
  },
  {
    "term": "Organizational velocity",
    "definition": "The speed, effectiveness, and efficiency with which an organization operates. Organizational velocity influences time to market, quality, safety, costs, and risks. 118"
  },
  {
    "term": "Organizations and people",
    "definition": "One of the four dimensions of service management. It ensures that the way an organization is structured and managed, as well as its roles, responsibilities, and systems of authority and communication, is well defined and supports its overall strategy and operating model. 119"
  },
  {
    "term": "Outcome",
    "definition": "A result for a stakeholder enabled by one or more outputs. 120"
  },
  {
    "term": "Output",
    "definition": "A tangible or intangible deliverable of an activity. 121"
  },
  {
    "term": "Outsourcing",
    "definition": "The process of having external suppliers provide products and services that were previously provided internally. 122"
  },
  {
    "term": "Partners and suppliers",
    "definition": "One of the four dimensions of service management. It encompasses the relationships an organization has with other organizations that are involved in the design, development, deployment, delivery, support, and/or continual improvement of services. 123"
  },
  {
    "term": "Partnership",
    "definition": "A relationship between two organizations that involves working closely together to achieve common goals and objectives. 124"
  },
  {
    "term": "Performance",
    "definition": "A measure of what is achieved or delivered by a system, person, team, practice, or service. 125"
  },
  {
    "term": "Pilot",
    "definition": "A test implementation of a service with a limited scope in a live environment. 126"
  },
  {
    "term": "Plan",
    "definition": "The value chain activity that ensures a shared understanding of the vision, current status, and improvement direction for all four dimensions and all products and services across an organization. 127"
  },
  {
    "term": "Policy",
    "definition": "Formally documented management expectations and intentions, used to direct decisions and activities. 128"
  },
  {
    "term": "Portfolio management practice",
    "definition": "The practice of ensuring that an organization has the right mix of programmes, projects, products, and services to execute its strategy within its funding and resource constraints. 129"
  },
  {
    "term": "Post-implementation review (PIR)",
    "definition": "A review after the implementation of a change, to evaluate success and identify opportunities for improvement. 130"
  },
  {
    "term": "Practice",
    "definition": "A set of organizational resources designed for performing work or accomplishing an objective. 131"
  },
  {
    "term": "Problem",
    "definition": "A cause, or potential cause, of one or more incidents. 132"
  },
  {
    "term": "Problem management practice",
    "definition": "The practice of reducing the likelihood and impact of incidents by identifying actual and potential causes of incidents, and managing workarounds and known errors. 133"
  },
  {
    "term": "Procedure",
    "definition": "A documented way to carry out an activity or a process. 134"
  },
  {
    "term": "Process",
    "definition": "A set of interrelated or interacting activities that transform inputs into outputs. A process takes one or more defined inputs and turns them into defined outputs. Processes define the sequence of actions and their dependencies. 135"
  },
  {
    "term": "Product",
    "definition": "A configuration of an organization's resources designed to offer value for a consumer. 136"
  },
  {
    "term": "Production environment",
    "definition": "See live environment. 137"
  },
  {
    "term": "Programme",
    "definition": "A set of related projects and activities, and an organization structure created to direct and oversee them. 138"
  },
  {
    "term": "Project",
    "definition": "A temporary structure that is created for the purpose of delivering one or more outputs (or products) according to an agreed business case. 139"
  },
  {
    "term": "Project management practice",
    "definition": "The practice of ensuring that all an organization's projects are successfully delivered. 140"
  },
  {
    "term": "Quick win",
    "definition": "An improvement that is expected to provide a return on investment in a short period of time with relatively small cost and effort. 141"
  },
  {
    "term": "Record",
    "definition": "A document stating results achieved and providing evidence of activities performed. 142"
  },
  {
    "term": "Recovery",
    "definition": "The activity of returning a configuration item to normal operation after a failure. 143"
  },
  {
    "term": "Recovery point objective (RPO)",
    "definition": "The point to which information used by an activity must be restored to enable the activity to operate on resumption. 144"
  },
  {
    "term": "Recovery time objective (RTO)",
    "definition": "The maximum acceptable period of time following a service disruption that can elapse before the lack of business functionality severely impacts the organization. 145"
  },
  {
    "term": "Relationship management practice",
    "definition": "The practice of establishing and nurturing links between an organization and its stakeholders at strategic and tactical levels. 146"
  },
  {
    "term": "Release",
    "definition": "A version of a service or other configuration item, or a collection of configuration items, that is made available for use. 147"
  },
  {
    "term": "Release management practice",
    "definition": "The practice of making new and changed services and features available for use. 148"
  },
  {
    "term": "Reliability",
    "definition": "The ability of a product, service, or other configuration item to perform its intended function for a specified period of time or number of cycles. 149"
  },
  {
    "term": "Request catalogue",
    "definition": "A view of the service catalogue, providing details on service requests for existing and new services, which is made available for the user. 150"
  },
  {
    "term": "Request for change (RFC)",
    "definition": "A description of a proposed change used to initiate change control. 151"
  },
  {
    "term": "Resolution",
    "definition": "The action of solving an incident or problem. 152"
  },
  {
    "term": "Resource",
    "definition": "A person, or other entity, that is required for the execution of an activity or the achievement of an objective. Resources used by an organization may be owned by the organization or used according to an agreement with the resource owner. 153"
  },
  {
    "term": "Retire",
    "definition": "The act of permanently withdrawing a product, service, or other configuration item from use. 154"
  },
  {
    "term": "Risk",
    "definition": "A possible event that could cause harm or loss, or make it more difficult to achieve objectives. Can also be defined as uncertainty of outcome, and can be used in the context of measuring the probability of positive outcomes as well as negative outcomes. 155"
  },
  {
    "term": "Risk assessment",
    "definition": "An activity to identify, analyse, and evaluate risks. 156"
  },
  {
    "term": "Risk management practice",
    "definition": "The practice of ensuring that an organization understands and effectively handles risks. 157"
  },
  {
    "term": "Service",
    "definition": "A means of enabling value co-creation by facilitating outcomes that customers want to achieve, without the customer having to manage specific costs and risks. 158"
  },
  {
    "term": "Service action",
    "definition": "Any action required to deliver a service output to a user. Service actions may be performed by a service provider resource, by service users, or jointly. 159"
  },
  {
    "term": "Service architecture",
    "definition": "A view of all the services provided by an organization. It includes interactions between the services, and service models that describe the structure and dynamics of each service. 160"
  },
  {
    "term": "Service catalogue",
    "definition": "Structured information about all the services and service offerings of a service provider, relevant for a specific target audience. 161"
  },
  {
    "term": "Service catalogue management practice",
    "definition": "The practice of providing a single source of consistent information on all services and service offerings, and ensuring that it is available to the relevant audience. 162"
  },
  {
    "term": "Service configuration management practice",
    "definition": "The practice of ensuring that accurate and reliable information about the configuration of services, and the configuration items that support them, is available when and where needed. 163"
  },
  {
    "term": "Service consumption",
    "definition": "Activities performed by an organization to consume services. It includes the management of the consumer's resources needed to use the service, service actions performed by users, and the receiving (acquiring) of goods (if required). 164"
  },
  {
    "term": "Service continuity management practice",
    "definition": "The practice of ensuring that service availability and performance are maintained at a sufficient level in case of a disaster. 165"
  },
  {
    "term": "Service design practice",
    "definition": "The practice of designing products and services that are fit for purpose, fit for use, and that can be delivered by the organization and its ecosystem. 166"
  },
  {
    "term": "Service desk",
    "definition": "The point of communication between the service provider and all its users. 167"
  },
  {
    "term": "Service desk practice",
    "definition": "The practice of capturing demand for incident resolution and service requests. 168"
  },
  {
    "term": "Service financial management practice",
    "definition": "The practice of supporting an organization's strategies and plans for service management by ensuring that the organization's financial resources and investments are being used effectively. 169"
  },
  {
    "term": "Service level",
    "definition": "One or more metrics that define expected or achieved service quality. 170"
  },
  {
    "term": "Service level agreement (SLA)",
    "definition": "A documented agreement between a service provider and a customer that identifies both services required and the expected level of service. 171"
  },
  {
    "term": "Service level management practice",
    "definition": "The practice of setting clear business-based targets for service performance so that the delivery of a service can be properly assessed, monitored, and managed against these targets. 172"
  },
  {
    "term": "Service management",
    "definition": "A set of specialized organizational capabilities for enabling value for customers in the form of services. 173"
  },
  {
    "term": "Service offering",
    "definition": "A formal description of one or more services, designed to address the needs of a target consumer group. A service offering may include goods, access to resources, and service actions. 174"
  },
  {
    "term": "Service owner",
    "definition": "A role that is accountable for the delivery of a specific service. 175"
  },
  {
    "term": "Service portfolio",
    "definition": "A complete set of products and services that are managed throughout their lifecycles by an organization. 176"
  },
  {
    "term": "Service provider",
    "definition": "A role performed by an organization in a service relationship to provide services to consumers. 177"
  },
  {
    "term": "Service provision",
    "definition": "Activities performed by an organization to provide services. It includes management of the provider's resources, configured to deliver the service; ensuring access to these resources for users; fulfilment of the agreed service actions; service level management; and continual improvement. It may also include the supply of goods. 178"
  },
  {
    "term": "Service relationship",
    "definition": "A cooperation between a service provider and service consumer. Service relationships include service provision, service consumption, and service relationship management. 179"
  },
  {
    "term": "Service relationship management",
    "definition": "Joint activities performed by a service provider and a service consumer to ensure continual value co-creation based on agreed and available service offerings. 180"
  },
  {
    "term": "Service request",
    "definition": "A request from a user or a user's authorized representative that initiates a service action which has been agreed as a normal part of service delivery. 181"
  },
  {
    "term": "Service request management practice",
    "definition": "The practice of supporting the agreed quality of a service by handling all predefined-, user-initiated service requests in an effective and user-friendly manner. 182"
  },
  {
    "term": "Service validation and testing practice",
    "definition": "The practice of ensuring that new or changed products and services meet defined requirements. 183"
  },
  {
    "term": "Service value system (SVS)",
    "definition": "A model representing how all the components and activities of an organization work together to facilitate value creation. 184"
  },
  {
    "term": "Software development and management practice",
    "definition": "The practice of ensuring that applications meet stakeholder needs in terms of functionality, reliability, maintainability, compliance, and auditability. 185"
  },
  {
    "term": "Sourcing",
    "definition": "The activity of planning and obtaining resources from a particular source type, which could be internal or external, centralized or distributed, and open or proprietary. 186"
  },
  {
    "term": "Specification",
    "definition": "A documented description of the properties of a product, service, or other configuration item. 187"
  },
  {
    "term": "Sponsor",
    "definition": "A person who authorizes budget for service consumption. Can also be used to describe an organization or individual that provides financial or other support for an initiative. 188"
  },
  {
    "term": "Stakeholder",
    "definition": "A person or organization that has an interest or involvement in an organization, product, service, practice, or other entity. 189"
  },
  {
    "term": "Standard",
    "definition": "A document, established by consensus and approved by a recognized body, that provides for common and repeated use, mandatory requirements, guidelines, or characteristics for its subject. 190"
  },
  {
    "term": "Standard change",
    "definition": "A low-risk, pre-authorized change that is well understood and fully documented, and which can be implemented without needing additional authorization. 191"
  },
  {
    "term": "Status",
    "definition": "A description of the specific states an entity can have at a given time. 192"
  },
  {
    "term": "Strategy management practice",
    "definition": "The practice of formulating the goals of an organization and adopting the courses of action and allocation of resources necessary for achieving those goals. 193"
  },
  {
    "term": "Supplier",
    "definition": "A stakeholder responsible for providing services that are used by an organization. 194"
  },
  {
    "term": "Supplier management practice",
    "definition": "The practice of ensuring that an organization's suppliers and their performance levels are managed appropriately to support the provision of seamless quality products and services. 195"
  },
  {
    "term": "Support team",
    "definition": "A team with the responsibility to maintain normal operations, address users' requests, and resolve incidents and problems related to specified products, services, or other configuration items. 196"
  },
  {
    "term": "System",
    "definition": "A combination of interacting elements organized and maintained to achieve one or more stated purposes. 197"
  },
  {
    "term": "Systems thinking",
    "definition": "A holistic approach to analysis that focuses on the way that a system's constituent parts work, interrelate, and interact over time, and within the context of other systems. 198"
  },
  {
    "term": "Technical debt",
    "definition": "The total rework backlog accumulated by choosing workarounds instead of system solutions that would take longer. 199"
  },
  {
    "term": "Test environment",
    "definition": "A controlled environment established to test products, services, and other configuration items. 200"
  },
  {
    "term": "Third party",
    "definition": "A stakeholder external to an organization. 201"
  },
  {
    "term": "Throughput",
    "definition": "A measure of the amount of work performed by a product, service, or other system over a given period of time. 202"
  },
  {
    "term": "Transaction",
    "definition": "A unit of work consisting of an exchange between two or more participants or systems. 203"
  },
  {
    "term": "Use case",
    "definition": "A technique using realistic practical scenarios to define functional requirements and to design tests. 204"
  },
  {
    "term": "User",
    "definition": "A person who uses services. 205"
  },
  {
    "term": "Utility",
    "definition": "The functionality offered by a product or service to meet a particular need. Utility can be summarized as 'what the service does' and can be used to determine whether a service is 'fit for purpose'. To have utility, a service must either support the performance of the consumer or remove constraints from the consumer. Many services do both. 206"
  },
  {
    "term": "Utility requirements",
    "definition": "Functional requirements which have been defined by the customer and are unique to a specific product. 207"
  },
  {
    "term": "Validation",
    "definition": "Confirmation that the system, product, service, or other entity meets the agreed specification. 208"
  },
  {
    "term": "Value",
    "definition": "The perceived benefits, usefulness, and importance of something. 209"
  },
  {
    "term": "Value stream",
    "definition": "A series of steps an organization undertakes to create and deliver products and services to consumers. 210"
  },
  {
    "term": "Value streams and processes",
    "definition": "One of the four dimensions of service management. It defines the activities, workflows, controls, and procedures needed to achieve the agreed objectives. 211"
  },
  {
    "term": "Vision",
    "definition": "A defined aspiration of what an organization would like to become in the future. 212"
  },
  {
    "term": "Warranty",
    "definition": "Assurance that a product or service will meet agreed requirements. Warranty can be summarized as 'how the service performs' and can be used to determine whether a service is 'fit for use'. Warranty often relates to service levels aligned with the needs of service consumers. This may be based on a formal agreement, or it may be a marketing message or brand image. Warranty typically addresses such areas as the availability of the service, its capacity, levels of security, and continuity. A service may be said to provide acceptable assurance, or 'warranty', if all defined and agreed conditions are met. 213"
  },
  {
    "term": "Warranty requirements",
    "definition": "Typically non-functional requirements captured as inputs from key stakeholders and other practices. 214"
  },
  {
    "term": "Waterfall method",
    "definition": "A development approach that is linear and sequential with distinct objectives for each phase of development. 215"
  },
  {
    "term": "Work instruction",
    "definition": "A detailed description to be followed in order to perform an activity. 216"
  },
  {
    "term": "Workaround",
    "definition": "A solution that reduces or eliminates the impact of an incident or problem for which a full resolution is not yet available. Some workarounds reduce the likelihood of incidents. 217"
  },
  {
    "term": "Workforce and talent management practice",
    "definition": "The practice of ensuring that an organization has the right people with the appropriate skills and knowledge and in the correct roles to support its business objectives. 218"
  }
];