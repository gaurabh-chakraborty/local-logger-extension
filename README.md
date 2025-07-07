# 🤖 AI Usage Tracker - Team Productivity Analytics

[![VS Code Extension](https://img.shields.io/badge/VS%20Code-Extension-blue)](https://marketplace.visualstudio.com/items?itemName=GaurabhChakraborty.ai-usage-tracker)
[![AI Tools](https://img.shields.io/badge/AI%20Tools-Supported-brightgreen)](#supported-ai-tools)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE.md)

> **Transform your manual AI usage tracking into automated analytics!** 

Stop manually logging AI tool usage in spreadsheets. This extension automatically tracks your AI-powered development sessions and generates detailed productivity analytics in CSV format.

## ✨ Key Features

🎯 **Automated Session Tracking** - Start/stop AI usage sessions with one command  
📊 **Real-time Analytics** - Automatic time calculations and productivity metrics  
🔄 **Team Synchronization** - Export to shared CSV files for team insights  
🤖 **Multi-AI Support** - Works with Copilot, Claude, Devin, Cursor, and more  
📈 **Productivity Insights** - Measure actual vs estimated time savings  
💾 **CSV Export** - Generate data in standard team reporting format  

## 🚀 Quick Start

### 1. Install & Setup
```
1. Install the extension
2. Press Ctrl+Shift+P (Cmd+Shift+P on Mac)
3. Run: "AI Logger: Quick Setup AI Tracking"
4. Configure your name, team, and CSV sync options
```

### 2. Track AI Usage
```
Before using AI tools:
→ Command Palette: "AI Logger: Start AI Session Tracking"

After completing work:
→ Command Palette: "AI Logger: End AI Session"
```

### 3. Export Results
```
→ Command Palette: "AI Logger: Export AI Usage to CSV"
→ Data ready for team spreadsheets!
```

## 📱 Screenshots

### Session Tracking
*Easy session setup with pre-configured defaults*

### Dashboard View  
*Real-time productivity insights and analytics*

### CSV Export
*Team-ready data export in standard format*

## 🤖 Supported AI Tools

- **GitHub Copilot** - Auto-detection of completions
- **Devin Agent** - Session-based tracking  
- **Claude** (Anthropic) - Manual logging integration
- **ChatGPT GPT-4o** - Usage pattern tracking
- **Cursor AI** - Tab completion monitoring
- **MCP Server** - Protocol-based detection
- **Windsurf** - Development assistant tracking
- **Custom Tools** - Manual input support

## 📊 Data Collected

The extension automatically captures:

| Metric | Description | Auto-Calculated |
|--------|-------------|----------------|
| Session Duration | Actual time spent working | ✅ |
| Time Savings | % saved vs manual work | ✅ |
| AI Tool Usage | Which tools were used | ✅ |
| File Changes | Files modified during session | ✅ |
| Test Runs | Testing activity detected | ✅ |
| Outcomes | Success/failure descriptions | Manual |

## 📈 Sample Output

```csv
Individual,Team,Date,JIRA ticket,Experiment Summary,Tools Used,Notable Outcomes,Time without AI,Time with AI,% Time with AI,% Time Saved
John Doe,ST7,2025-07-07,WEB-12345,"Create table component",GitHub Copilot,"Generated 80% correctly",4.0,1.5,38%,62%
```

## ⚡ Advanced Features

### Team Synchronization
- **Shared CSV Files** - Automatic sync to team spreadsheets
- **Real-time Updates** - No manual data entry required
- **Consistent Format** - Standardized across team members

### Smart Detection
- **AI Tool Recognition** - Automatically detects tool usage
- **Session Monitoring** - Tracks file changes and activities  
- **Time Accuracy** - Precise session duration tracking

### Analytics Dashboard
- **Productivity Trends** - Visual insights into AI impact
- **Team Comparisons** - Benchmark against team averages
- **Export Options** - Multiple format support

## 🛠️ Configuration

Access via `File > Preferences > Settings` and search for "AI Usage Tracker":

### Personal Defaults
```json
{
  "productivityTracker.aiTracking.defaultIndividual": "Your Name",
  "productivityTracker.aiTracking.defaultTeam": "ST7",
  "productivityTracker.aiTracking.autoDetectTools": true
}
```

### Team Integration  
```json
{
  "productivityTracker.csvExport.teamSheetPath": "/path/to/team/sheet.csv",
  "productivityTracker.csvExport.autoSync": true
}
```

## 🔧 Commands

| Command | Description | Shortcut |
|---------|-------------|----------|
| `AI Logger: Quick Setup` | Initial configuration | - |
| `AI Logger: Start AI Session` | Begin tracking session | - |
| `AI Logger: End AI Session` | Complete and log session | - |
| `AI Logger: Export to CSV` | Generate team data | - |
| `AI Logger: View Dashboard` | Show analytics | - |

## 💼 Use Cases

### Individual Developers
- Track personal AI productivity gains
- Identify most effective AI tools  
- Optimize development workflows
- Generate performance reports

### Development Teams
- Standardize AI usage tracking
- Compare team member productivity
- Measure ROI of AI tool investments
- Generate management reports

### Engineering Managers
- Monitor team AI adoption
- Quantify productivity improvements
- Make data-driven tool decisions
- Track sprint capacity changes

## 🎯 Why This Extension?

### Before: Manual Tracking Problems
❌ Forgetting to log AI usage  
❌ Inaccurate time estimates  
❌ Inconsistent data formats  
❌ Manual calculation errors  
❌ Team synchronization issues  

### After: Automated Excellence  
✅ Never miss a session  
✅ Precise time tracking  
✅ Standardized team data  
✅ Automatic calculations  
✅ Seamless team sync  

## 📋 Requirements

- **VS Code**: Version 1.74.0 or higher
- **Node.js**: For CSV processing (auto-included)
- **File Access**: For team CSV synchronization (optional)

## 🚀 Installation

### From VS Code Marketplace
1. Open VS Code
2. Go to Extensions (`Ctrl+Shift+X`)
3. Search "AI Usage Tracker"
4. Click Install

### Manual Installation
1. Download `.vsix` file
2. Open Command Palette (`Ctrl+Shift+P`)
3. Run "Extensions: Install from VSIX"
4. Select downloaded file

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

### Development Setup
```bash
git clone https://github.com/gaurabh-chakraborty/ai-usage-tracker
cd ai-usage-tracker
npm install
npm run watch
```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## 🆘 Support

- **Documentation**: [Usage Guide](USAGE_GUIDE.md)
- **Issues**: [GitHub Issues](https://github.com/gaurabh-chakraborty/ai-usage-tracker/issues)
- **Discussions**: [GitHub Discussions](https://github.com/gaurabh-chakraborty/ai-usage-tracker/discussions)

## 🎉 Acknowledgments

Built for development teams who want to measure and optimize their AI-powered productivity. Special thanks to the VS Code team for the excellent extension API.

---

**Ready to automate your AI tracking?** Install now and transform your manual logging into automated analytics! 🚀
