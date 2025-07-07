"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
const vscode = require("vscode");
const fs = require("fs");
const path = require("path");
let outputChannel;
let logFilePath;
function activate(context) {
    const storagePath = context.globalStoragePath;
    if (!fs.existsSync(storagePath))
        fs.mkdirSync(storagePath, { recursive: true });
    logFilePath = path.join(storagePath, 'activity.log');
    outputChannel = vscode.window.createOutputChannel("Local Logger");
    outputChannel.show(true);
    log("Logger activated");
    // Document events
    vscode.workspace.onDidOpenTextDocument(doc => log(`Opened: ${doc.fileName}`), null, context.subscriptions);
    vscode.workspace.onDidCloseTextDocument(doc => log(`Closed: ${doc.fileName}`), null, context.subscriptions);
    vscode.workspace.onDidSaveTextDocument(doc => log(`Saved: ${doc.fileName}`), null, context.subscriptions);
    vscode.workspace.onDidChangeTextDocument((event) => {
        const fileName = event.document.fileName;
        // Prevent recursive logging caused by writing to own output channel
        if (fileName.includes('extension-output-') && fileName.includes('local-logger')) {
            return;
        }
        log(`Changed: ${fileName}`);
    });
    // Editor events
    vscode.window.onDidChangeActiveTextEditor(editor => {
        if (editor)
            log(`Switched editor: ${editor.document.fileName}`);
    }, null, context.subscriptions);
    vscode.window.onDidChangeTextEditorSelection(e => {
        log(`Selection in: ${e.textEditor.document.fileName}`);
    }, null, context.subscriptions);
    // Terminal events
    vscode.window.onDidOpenTerminal(term => log(`Opened terminal: ${term.name}`), null, context.subscriptions);
    vscode.window.onDidCloseTerminal(term => log(`Closed terminal: ${term.name}`), null, context.subscriptions);
    // Command
    context.subscriptions.push(vscode.commands.registerCommand('my-logger.processLogs', () => {
        processDailyLogs();
    }));
}
exports.activate = activate;
function log(message) {
    const timestamp = new Date().toISOString();
    const formatted = `[${timestamp}] ${message}`;
    outputChannel.appendLine(formatted);
    if (logFilePath) {
        fs.appendFileSync(logFilePath, formatted + '\n', 'utf8');
    }
}
function processDailyLogs() {
    if (!logFilePath || !fs.existsSync(logFilePath)) {
        vscode.window.showWarningMessage("No logs to process.");
        return;
    }
    const rawLogs = fs.readFileSync(logFilePath, 'utf8');
    const today = new Date().toISOString().split('T')[0];
    const summaryPath = path.join(path.dirname(logFilePath), `daily-summary-${today}.txt`);
    const formatted = `🗓️ Log Summary for ${today}\n\n${rawLogs}`;
    fs.writeFileSync(summaryPath, formatted, 'utf8');
    vscode.window.showInformationMessage(`Logs saved to: ${summaryPath}`);
    fs.writeFileSync(logFilePath, '', 'utf8'); // Clear log
}
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map