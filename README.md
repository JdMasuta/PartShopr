# PartShopr
Staging Area Management System
Overview
The Staging Area Management System is a web-based application designed for industrial packaging system manufacturers to efficiently manage and organize their staging area. This system is tailored to handle the complexities of tracking various parts associated with different projects, sections, and sequences in a manufacturing setting. It provides a user-friendly interface for managing the flow of parts from the warehouse or in-house production to the assembly team.

Features
Graphical Layout Management: Allows users to visually add and remove carts from a staging area layout. This feature provides a clear and interactive representation of the physical staging area.
Cart Labeling: Users can label carts by section and sequence number, enabling easy identification and organization of parts according to their respective projects.
Part Management: Facilitates the addition and removal of part numbers to a list under each sequence. Each part is tracked with specific details such as part number, sequence number, section number, project number, quantity, and status.
Status Tagging: Parts can be tagged with various statuses like "In Paint," "Supply Shortage," or custom tags. This feature helps in quickly identifying the processing stage or issues associated with specific parts.
Technical Details
Part Class: The application uses a Part class in JavaScript to represent each part. This class includes properties for part number, sequence number, section number, project number, quantity, and status.
Interactive UI: The system is built with HTML and CSS, providing a clean and intuitive user interface. JavaScript is used to add interactivity to the webpage, enabling real-time updates and management.
Usage
Adding a Cart: Users can add a cart to the staging area by clicking the 'Add Cart' button. This action will visually represent a new cart in the graphical layout.
Labeling and Managing Carts: Clicking on a cart allows users to label it and manage the parts associated with it. Users can input section and sequence numbers for each cart.
Managing Parts: Parts can be added to each cart with detailed information. Users can input the part number, quantity, and status for each part.
Future Enhancements
Data Persistence: Integration with a backend database to store and retrieve cart and part information.
Advanced Filtering and Searching: Implementing features for filtering and searching parts based on various criteria like status, project number, etc.
User Authentication and Authorization: Adding user login functionality for secure access and user-specific customization.
Installation
No installation is required. The system is accessible through a web browser.
Must have Node.js installed (V1)

Support
For support, please contact [joshua.meesey@bwpackaging.com].
