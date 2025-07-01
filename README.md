# Reproduce the issue:

- npm install
- in vscode, start wallaby
- wait for green test run
- change anything in example.spec.ts
- wallaby crashes with "Cannot read properties of undefined (reading '2')" (sometimes also reading '3')
