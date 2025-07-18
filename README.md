# Sidebar Embedded App - Call Monitor CRM

A comprehensive Webex Embedded App that demonstrates the [Embedded App Sidebar](https://developer.webex.com/docs/embedded-apps-framework-sidebar-api-quick-start) feature. This React-based application serves as a mock customer relationship manager (CRM) tool that utilizes the Embedded App SDK to automatically look up and display customer data for incoming Webex calls.

## 🎯 Features

- **Real-time Call Monitoring**: Automatically detect and display incoming/outgoing Webex calls
- **Customer Lookup**: Generate and display mock customer data for call participants
- **Call State Tracking**: Visual progress indicators showing call states (Started, Connecting, Connected, Hold, Disconnecting, Disconnected, Rejected, Ended)
- **Interactive UI**: Modern Material Design interface with modals and badges
- **Badge Integration**: Dynamic sidebar badge showing active call count
- **Call Simulation**: Test functionality with simulated call events
- **Event Logging**: Comprehensive logging of all call events with timestamps

## 🛠️ Technology Stack

- **React 18**: Modern React with hooks and functional components
- **Webex Embedded App SDK**: For Webex integration and call event handling
- **Materialize CSS**: Material Design UI framework
- **Faker.js**: For generating realistic mock customer data
- **Husky**: Git hooks for code quality
- **Prettier**: Code formatting
- **GitHub Actions**: Automated formatting checks

## 📋 Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Webex Teams account
- Webex Embedded App configuration

## 🚀 Setup

Follow these steps to set up and run this project:

### 1. Clone the Repository

```bash
git clone git@github.com:WebexSamples/CallMonitorApp.git
cd CallMonitorApp
```

### 2. Install Dependencies

Navigate to the project directory and install the necessary dependencies:

```bash
npm install
```

### 3. Start the Development Server

Run the server for the application:

```bash
npm start
```

This will start the development server at `http://localhost:3000`.

### 4. Configure Webex Embedded App

Follow the instructions [here](https://developer.webex.com/docs/embedded-apps-guide) to create a new Webex Embedded App with the Start URL configured as your server's address (e.g., `http://localhost:3000` for local development).

## 📁 Project Structure

```
CallMonitorApp/
├── public/                 # Static assets
│   ├── index.html         # Main HTML template
│   └── manifest.json      # Web app manifest
├── src/                   # Source code
│   ├── App.js            # Main application component
│   ├── App.css           # Main application styles
│   ├── CallStateFlow.js  # Call state progress indicator
│   ├── CallStateFlow.css # Call state styling
│   ├── Calls.js          # Call display component
│   ├── Customer.js       # Customer profile modal
│   ├── Events.js         # Event logging component
│   ├── NavBar.js         # Navigation bar
│   ├── Simulate.js       # Call simulation component
│   └── generateCustomer.js # Fake customer data generator
├── .github/workflows/     # GitHub Actions
├── package.json          # Dependencies and scripts
└── README.md            # This file
```

## 🔧 Key Components

### App.js
The main application component that:
- Initializes the Webex Embedded App SDK
- Handles call event listening and processing
- Manages application state for calls and events
- Updates sidebar badges based on active calls

### CallStateFlow.js
Visual progress indicator showing call states:
- **Started**: Call initiated
- **Connecting**: Attempting connection
- **Connected**: Call established
- **Hold**: Call on hold
- **Disconnecting**: Call ending
- **Disconnected**: Call ended
- **Rejected**: Call rejected
- **Ended**: Call completed

### Customer.js
Customer profile modal displaying:
- Profile picture
- Contact information (name, email, phone)
- Address details
- Customer notes
- Account creation date

### generateCustomer.js
Generates realistic mock customer data using Faker.js:
- Personal information
- Contact details
- Address information
- Profile pictures
- Customer notes

## 🎮 Usage

### Real Call Monitoring

1. **Join a Webex Call**: Start or join a call in Webex Teams
2. **Open Sidebar**: The app automatically appears in the sidebar
3. **View Call Data**: Customer information is automatically generated and displayed
4. **Monitor Progress**: Watch the call state progress indicator
5. **Access Details**: Click the search icon to view detailed customer information

### Call Simulation

For testing without actual calls:

1. **Click Simulate**: Use the simulate button in the navigation bar
2. **Enter Phone Number**: Provide a phone number for the simulated caller
3. **Select Call State**: Choose the desired call state
4. **View Results**: The simulated call appears in the interface

## 🔍 Features Deep Dive

### Badge Integration

The app integrates with Webex sidebar badges:
- **Active Call Count**: Shows number of ongoing calls
- **Real-time Updates**: Badge updates as calls start/end
- **Visual Feedback**: Provides immediate status to users

### Event Logging

Comprehensive logging system tracks:
- All call state changes
- Event timestamps
- Call metadata
- Participant information

### Responsive Design

- **Mobile-friendly**: Works on various screen sizes
- **Material Design**: Modern, intuitive interface
- **Accessibility**: Proper contrast and keyboard navigation

## 🛠️ Development

### Code Formatting

This project uses [Prettier](https://prettier.io/) to maintain code consistency. To format your code, run:

```bash
npm run format
```

### Git Hooks

The project uses Husky for pre-commit hooks:
- **Lint-staged**: Automatically formats staged files
- **Prettier**: Ensures consistent code formatting

### Available Scripts

```bash
npm start          # Start development server
npm run build      # Build for production
npm test           # Run tests
npm run format     # Format code with Prettier
npm run deploy     # Deploy to GitHub Pages
```

## 🔄 GitHub Actions

This project uses a GitHub Actions workflow to check if the code is formatted correctly with Prettier. The workflow runs on every pull request.

### Workflow Steps:

1. **Check out code**: This step checks out your repository's code so the workflow can access it
2. **Use Node.js**: This step sets up Node.js version 20 on the runner
3. **Install dependencies**: This step installs the project's dependencies using `npm ci`
4. **Check formatting**: This step runs `npx prettier --check .` to check if all files are formatted correctly

If any files are not formatted correctly, the workflow will fail, and the PR will be marked as failed.

To see the results of the workflow, navigate to the "Actions" tab in your GitHub repository.

## 🧪 Testing

The application includes comprehensive testing setup:
- **React Testing Library**: For component testing
- **Jest**: Test runner and assertion library
- **User Event**: For simulating user interactions

Run tests with:
```bash
npm test
```

## 📈 Monitoring and Debugging

### Console Logging

The app provides detailed console logging:
- SDK initialization status
- Call event processing
- Badge updates
- Error handling

### Development Tools

- **React DevTools**: For component inspection
- **Webex SDK Logs**: Configurable log levels (INFO, WARN, ERROR, SILENT)
- **Chrome DevTools**: For debugging and performance analysis

## 🔐 Security Considerations

- **No sensitive data**: All customer data is mock/generated
- **Local development**: Suitable for development and demonstration
- **Webex authentication**: Leverages Webex's built-in security

## 🌐 Deployment

### GitHub Pages

The project is configured for GitHub Pages deployment:

```bash
npm run deploy
```

### Custom Deployment

For custom deployment:
1. Build the project: `npm run build`
2. Deploy the `build` folder to your hosting service
3. Update the Webex Embedded App configuration with the new URL

## 📚 API Reference

### Webex Embedded App SDK

Key SDK methods used:
- `app.onReady()`: Initialize the SDK
- `app.listen()`: Start listening for events
- `app.on('sidebar:callStateChanged')`: Handle call events
- `sidebar.showBadge()`: Update sidebar badge

### Call Event Data Structure

```javascript
{
  id: "unique-call-id",
  callType: "Placed|Received",
  state: "Started|Connecting|Connected|Hold|Disconnecting|Disconnected|Rejected|Ended",
  localParticipant: {
    callerID: "user-id",
    name: "Display Name",
    isMuted: boolean
  },
  remoteParticipants: [{
    callerID: "phone-number",
    name: "Participant Name"
  }],
  customer: {
    // Generated customer data
  },
  eventTimeStamp: Date
}
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Make your changes
4. Ensure code is formatted: `npm run format`
5. Run tests: `npm test`
6. Commit your changes: `git commit -am 'Add new feature'`
7. Push to the branch: `git push origin feature/new-feature`
8. Submit a pull request

## 📄 License

This project is licensed under the terms specified in the [LICENSE](LICENSE) file.

## 🌟 Don't be a Stranger

- [Webex Developer Documentation](https://developer.webex.com/docs)
- [Webex Developer Blog](https://developer.webex.com/blog)
- [Webex Developer Support](https://developer.webex.com/support)
- [@WebexDevs on Twitter](https://twitter.com/webexdevs)

## 🆘 Support

- Create an issue in this repository
- Visit [Webex Developer Support](https://developer.webex.com/support)
- Check the [Embedded Apps Framework documentation](https://developer.webex.com/docs/embedded-apps-framework-sidebar-api-quick-start)

---

Made with ❤️ by the Webex Developer Evangelism Team at Cisco

**Repository**: https://github.com/WebexSamples/CallMonitorApp  
**Live Demo**: https://webexsamples.github.io/CallMonitorApp
