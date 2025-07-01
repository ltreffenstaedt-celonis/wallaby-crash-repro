```
{
  editorVersion: '1.101.2',
  pluginVersion: '1.0.450',
  editorType: 'VSCode',
  osVersion: 'linux 6.14.0-1005-oem',
  nodeVersion: 'v20.19.1',
  coreVersion: '1.0.1804',
  pnp: '<not set>',
  pnpEsm: '<not set>',
  checksum: 'NjQwZWU0NzM3YjFkZTc3ZDRjYmQxNWVkNGJmNDFkOGIsMTc2OTA0MDAwMDAwMCww',
  config: {
    diagnostics: {
      jest: {
        config: {
          configs: [
            {
              automock: false,
              cache: true,
              cacheDirectory: '/tmp/jest_rt',
              clearMocks: true,
              collectCoverageFrom: [],
              coverageDirectory: '<homeDir>/Code/example/coverage',
              coveragePathIgnorePatterns: [ '/node_modules/' ],
              cwd: '<homeDir>/Code/example',
              dependencyExtractor: undefined,
              detectLeaks: false,
              detectOpenHandles: false,
              displayName: undefined,
              errorOnDeprecated: false,
              extensionsToTreatAsEsm: [],
              fakeTimers: { enableGlobally: false },
              filter: undefined,
              forceCoverageMatch: [],
              globalSetup: undefined,
              globalTeardown: undefined,
              globals: {},
              haste: { computeSha1: false, enableSymlinks: false, forceNodeFilesystemAPI: true, throwOnModuleCollision: false },
              id: '03f1a17b787e4c6f26cff4042ee5fd66',
              injectGlobals: true,
              moduleDirectories: [ 'node_modules' ],
              moduleFileExtensions: [
                'js',   'mjs',
                'cjs',  'jsx',
                'ts',   'tsx',
                'json', 'node'
              ],
              moduleNameMapper: [],
              modulePathIgnorePatterns: [],
              modulePaths: undefined,
              openHandlesTimeout: 1000,
              prettierPath: 'prettier',
              resetMocks: false,
              resetModules: false,
              resolver: undefined,
              restoreMocks: false,
              rootDir: '<homeDir>/Code/example',
              roots: [ '<homeDir>/Code/example' ],
              runner: '<homeDir>/Code/example/node_modules/jest-runner/build/index.js',
              runtime: undefined,
              sandboxInjectedGlobals: [],
              setupFiles: [],
              setupFilesAfterEnv: [],
              skipFilter: false,
              skipNodeResolution: undefined,
              slowTestThreshold: 5,
              snapshotFormat: { escapeString: false, printBasicPrototype: false },
              snapshotResolver: undefined,
              snapshotSerializers: [],
              testEnvironment: '<homeDir>/Code/example/jest-jsdom-test-environment.cjs',
              testEnvironmentOptions: {},
              testLocationInResults: false,
              testMatch: [ '**/*.spec.ts' ],
              testPathIgnorePatterns: [ '/node_modules/' ],
              testRegex: [],
              testRunner: '<homeDir>/Code/example/node_modules/jest-circus/runner.js',
              transform: [ [ '\\.[jt]sx?$', '<homeDir>/Code/example/node_modules/babel-jest/build/index.js', {} ] ],
              transformIgnorePatterns: [ '/node_modules/', '\\.pnp\\.[^\\/]+$' ],
              unmockedModulePathPatterns: undefined,
              watchPathIgnorePatterns: []
            }
          ],
          globalConfig: {
            bail: 0,
            changedFilesWithAncestor: false,
            changedSince: undefined,
            ci: false,
            collectCoverage: false,
            collectCoverageFrom: [],
            coverageDirectory: '<homeDir>/Code/example/coverage',
            coverageProvider: 'v8',
            coverageReporters: [ 'json', 'text', 'lcov', 'clover' ],
            coverageThreshold: undefined,
            detectLeaks: false,
            detectOpenHandles: false,
            errorOnDeprecated: false,
            expand: false,
            filter: undefined,
            findRelatedTests: false,
            forceExit: false,
            globalSetup: undefined,
            globalTeardown: undefined,
            json: false,
            lastCommit: false,
            listTests: false,
            logHeapUsage: false,
            maxConcurrency: 5,
            maxWorkers: 21,
            noSCM: undefined,
            noStackTrace: false,
            nonFlagArgs: undefined,
            notify: false,
            notifyMode: 'failure-change',
            onlyChanged: false,
            onlyFailures: false,
            openHandlesTimeout: 1000,
            outputFile: undefined,
            passWithNoTests: false,
            projects: [],
            randomize: undefined,
            replname: undefined,
            reporters: undefined,
            rootDir: '<homeDir>/Code/example',
            runInBand: undefined,
            runTestsByPath: false,
            seed: -1647731650,
            shard: undefined,
            showSeed: undefined,
            silent: undefined,
            skipFilter: false,
            snapshotFormat: { escapeString: false, printBasicPrototype: false },
            testFailureExitCode: 1,
            testNamePattern: undefined,
            testPathPattern: '',
            testResultsProcessor: undefined,
            testSequencer: '<homeDir>/Code/example/node_modules/@jest/test-sequencer/build/index.js',
            testTimeout: undefined,
            updateSnapshot: 'new',
            useStderr: false,
            verbose: undefined,
            watch: false,
            watchAll: false,
            watchPlugins: undefined,
            watchman: true,
            workerIdleMemoryLimit: undefined,
            workerThreads: false
          },
          hasDeprecationWarnings: false,
          wallaby: {
            roots: [],
            watchPathIgnorePatterns: [ '/node_modules/', '\\./dist/|\\./build/|\\./coverage/|\\./git/|/\\..+/', '\\.watchman-cookie', '/tmp/jest_rt', '\\./coverage' ],
            testPathIgnorePatterns: [ '/node_modules/', '\\./dist/|\\./build/|\\./coverage/|\\./git/|/\\..+/', '\\.watchman-cookie', '/tmp/jest_rt', '\\./coverage' ],
            testMatch: [ '**/*.spec.ts' ],
            testRegex: []
          }
        }
      }
    },
    testFramework: { version: 'jest@24.8.0', configurator: 'jest@24.8.0', reporter: 'jest@24.8.0', starter: 'jest@24.8.0', autoDetected: true, toolVersion: '29.7.0' },
    filesWithCoverageCalculated: [],
    filesWithNoCoverageCalculated: [],
    globalSetup: false,
    dot: true,
    files: [
      { pattern: '/node_modules/', regexp: /\/node_modules\//, ignore: true, trigger: true, load: true, file: true, test: true },
      {
        pattern: '\\./dist/|\\./build/|\\./coverage/|\\./git/|/\\..+/',
        regexp: /\.\/dist\/|\.\/build\/|\.\/coverage\/|\.\/git\/|\/\..+\//,
        ignore: true,
        trigger: true,
        load: true,
        file: true,
        test: true
      },
      { pattern: '\\.watchman-cookie', regexp: /\.watchman-cookie/, ignore: true, trigger: true, load: true, file: true, test: true },
      { pattern: '/tmp/jest_rt', regexp: /\/tmp\/jest_rt/, ignore: true, trigger: true, load: true, file: true, test: true },
      { pattern: '\\./coverage', regexp: /\.\/coverage/, ignore: true, trigger: true, load: true, file: true, test: true },
      { pattern: '**/**', ignore: false, trigger: true, load: true, order: 1 },
      { pattern: '**/*.spec.ts', ignore: true, trigger: true, load: true, file: true }
    ],
    captureConsoleLog: true,
    tests: [
      { pattern: '/node_modules/', regexp: /\/node_modules\//, ignore: true, trigger: true, load: true, test: true, file: false },
      {
        pattern: '\\./dist/|\\./build/|\\./coverage/|\\./git/|/\\..+/',
        regexp: /\.\/dist\/|\.\/build\/|\.\/coverage\/|\.\/git\/|\/\..+\//,
        ignore: true,
        trigger: true,
        load: true,
        test: true,
        file: false
      },
      { pattern: '\\.watchman-cookie', regexp: /\.watchman-cookie/, ignore: true, trigger: true, load: true, test: true, file: false },
      { pattern: '/tmp/jest_rt', regexp: /\/tmp\/jest_rt/, ignore: true, trigger: true, load: true, test: true, file: false },
      { pattern: '\\./coverage', regexp: /\.\/coverage/, ignore: true, trigger: true, load: true, test: true, file: false },
      { pattern: '**/*.spec.ts', ignore: false, trigger: true, load: true, test: true, order: 2 }
    ],
    runAllTestsInAffectedTestFile: false,
    updateNoMoreThanOneSnapshotPerTestFileRun: false,
    compilers: {},
    logLimits: { inline: { depth: 5, elements: 5000 }, values: { default: { stringLength: 8192 }, autoExpand: { elements: 5000, stringLength: 8192, depth: 10 } } },
    preprocessors: {},
    maxConsoleMessagesPerTest: 100,
    maxTraceSteps: 999999,
    maxTraceStepsForWatchExpressionPrefetch: 10,
    autoConsoleLog: true,
    delays: { run: 0, edit: 100, update: 0 },
    workers: { initial: 0, regular: 0, recycle: false },
    teardown: undefined,
    hints: {
      ignoreCoverage: '__REGEXP /ignore coverage|istanbul ignore|c8 ignore/',
      ignoreCoverageForFile: '__REGEXP /ignore file coverage/',
      commentAutoLog: '?',
      testFileSelection: { include: '__REGEXP /file\\.only/', exclude: '__REGEXP /file\\.skip/' }
    },
    automaticTestFileSelection: true,
    runSelectedTestsOnly: false,
    mapConsoleMessagesStackTrace: false,
    extensions: {},
    env: {
      type: 'node',
      params: {},
      runner: '<homeDir>/.nvm/versions/node/v20.19.1/bin/node',
      viewportSize: { width: 800, height: 600 },
      options: { width: 800, height: 600 },
      bundle: true
    },
    reportUnhandledPromises: true,
    slowTestThreshold: 75,
    lowCoverageThreshold: 80,
    runAllTestsWhenNoAffectedTests: false,
    configCode: 'auto.detect#1492931467'
  },
  packageJSON: { dependencies: { '@types/jest': '^29.5.14', jest: '^29.7.0', 'jest-environment-jsdom': '^29.7.0', 'ts-node': '^10.9.2' }, devDependencies: undefined },
  fs: { numberOfFiles: 8 },
  debug: [
    '2025-07-01T09:57:03.088Z project waiting for initial run signal\n',
    '2025-07-01T09:57:03.091Z model Initialization Completed: 137ms\n',
    '2025-07-01T09:57:03.123Z config Attempting automatic configuration for angular\n',
    '2025-07-01T09:57:03.124Z angular/cli config Angular CLI not found.\n',
    '2025-07-01T09:57:03.124Z config Finished attempting automatic configuration for angular (1ms)\n',
    '2025-07-01T09:57:03.124Z config Attempting automatic configuration for jest\n',
    '2025-07-01T09:57:03.428Z jest/config Detected Jest.\n',
    '2025-07-01T09:57:03.428Z jest/config Configured Jest.\n',
    '2025-07-01T09:57:03.428Z config Finished attempting automatic configuration for jest (304ms)\n',
    '2025-07-01T09:57:03.429Z config Attempting to find preferred Node.js version for the project\n',
    '2025-07-01T09:57:03.442Z ui.service Starting UI service on port: 55001\n',
    '2025-07-01T09:57:03.443Z ui.service UI service started on port: 55001\n',
    '2025-07-01T09:57:03.444Z config No preferred Node.js version found for the project, using default Node.js executable\n',
    '2025-07-01T09:57:03.444Z project Wallaby Node version: v20.19.1\n',
    '2025-07-01T09:57:03.444Z project Wallaby config: <homeDir>/Code/example/auto.detect\n',
    '2025-07-01T09:57:03.470Z fs File system starting\n',
    '2025-07-01T09:57:03.471Z model [WARN] Wallaby.js is using the native file system watcher on Linux, which may not work correctly with some file systems.\n' +
      'If you experience issues:\n' +
      '- You can set the fileScanMethod to "poll" in your wallaby.js configuration file.\n' +
      '- Increase the `fs.inotify.max_user_watches` setting on your system.\n' +
      '\n',
    '2025-07-01T09:57:03.481Z fs File system scan completed\n',
    '2025-07-01T09:57:03.483Z project File cache: <homeDir>/.vscode/extensions/wallabyjs.wallaby-vscode-1.0.450/projects/7f83bf84185e76fb\n',
    '2025-07-01T09:57:03.493Z workers Parallelism for initial run: 20, for regular run: 10\n',
    '2025-07-01T09:57:03.494Z workers Web server is listening at 40239\n',
    '2025-07-01T09:57:03.494Z project File cache requires some updates, waiting required files from IDE\n',
    '2025-07-01T09:57:03.499Z project Stopping process pool\n',
    '2025-07-01T09:57:03.501Z runManager Test run started; run priority: 3\n',
    '2025-07-01T09:57:03.502Z runManager Running all tests\n',
    '2025-07-01T09:57:03.503Z workers Starting test run\n',
    '2025-07-01T09:57:03.503Z workers Starting run worker instance #0\n',
    '2025-07-01T09:57:03.503Z nodeRunner Starting sandbox [worker #0, session #578th]\n',
    '2025-07-01T09:57:03.503Z nodeRunner Preparing sandbox [worker #0, session #578th]\n',
    '2025-07-01T09:57:03.611Z workers Started run worker instance (delayed) #0\n',
    '2025-07-01T09:57:03.611Z nodeRunner Prepared sandbox [worker #0, session #578th]\n',
    '2025-07-01T09:57:03.612Z workers [worker #0, session #578th] Running tests in sandbox\n',
    "2025-07-01T09:57:03.614Z workers 'Configuring Jest (578th)'\n",
    "2025-07-01T09:57:03.968Z workers 'Getting Jest test data (578th)'\n",
    "2025-07-01T09:57:04.060Z workers 'Scheduling Jest Test Run (578th): 2025-07-01T09:57:04.059Z'\n",
    '2025-07-01T09:57:04.466Z workers [578th] Loaded unknown number of test(s)\n',
    '2025-07-01T09:57:04.469Z workers [578th] Test executed: should work\n',
    '2025-07-01T09:57:04.477Z workers [578th] Run 1 test(s), skipped 0 test(s)\n',
    "2025-07-01T09:57:04.477Z workers 'Jest Test Run Complete (578th): 2025-07-01T09:57:04.477Z'\n",
    '2025-07-01T09:57:04.477Z workers [578th] Sandbox is responsive, closing it\n',
    '2025-07-01T09:57:04.478Z runManager Test run finished\n',
    '2025-07-01T09:57:04.478Z project Processed console.log entries\n',
    '2025-07-01T09:57:04.478Z project Processed loading sequences\n',
    '2025-07-01T09:57:04.479Z project Processed executed tests\n',
    '2025-07-01T09:57:04.479Z project Processed code coverage\n',
    '2025-07-01T09:57:04.491Z runManager Test run result processed and sent to IDE\n',
    '2025-07-01T09:57:14.711Z fs File changed in editor: example.spec.ts\n',
    '2025-07-01T09:57:14.719Z runManager Test run started; run priority: 2\n',
    '2025-07-01T09:57:14.719Z testTask Test files from affected: 1, from deleted or manually requested: 0, from recently changed: 0, from loaded by: 0, from failing: 0\n',
    '2025-07-01T09:57:14.721Z workers Starting test run\n',
    '2025-07-01T09:57:14.721Z nodeRunner Starting sandbox [worker #0, session #fin19]\n',
    '2025-07-01T09:57:14.721Z nodeRunner Preparing sandbox [worker #0, session #fin19]\n',
    '2025-07-01T09:57:14.721Z nodeRunner Prepared sandbox [worker #0, session #fin19]\n',
    '2025-07-01T09:57:14.721Z workers [worker #0, session #fin19] Running tests in sandbox\n',
    "2025-07-01T09:57:14.722Z workers 'Configuring Jest (fin19)'\n",
    "2025-07-01T09:57:14.722Z workers 'Getting Jest test data (fin19)'\n",
    "2025-07-01T09:57:14.722Z workers 'Scheduling Jest Test Run (fin19): 2025-07-01T09:57:14.722Z'\n",
    "2025-07-01T09:57:14.740Z workers Sandbox (active) [fin19] error: TypeError: Cannot read properties of undefined (reading '3')\n" +
      '    at new CustomJSDOMEnvironment (<rootDir>/jest-jsdom-test-environment.cjs:8:9)\n' +
      '    at runTestInternal (<rootDir>/node_modules/jest-runner/build/runTest.js:236:23)\n' +
      '    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n' +
      '    at async runTest (<rootDir>/node_modules/jest-runner/build/runTest.js:444:34)\n',
    "2025-07-01T09:57:14.740Z model [ERROR] Runtime error: TypeError: Cannot read properties of undefined (reading '3')\n" +
      '    at new CustomJSDOMEnvironment (<rootDir>/jest-jsdom-test-environment.cjs:8:9)\n' +
      '    at runTestInternal (<rootDir>/node_modules/jest-runner/build/runTest.js:236:23)\n' +
      '    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n' +
      '    at async runTest (<rootDir>/node_modules/jest-runner/build/runTest.js:444:34)\n',
    '2025-07-01T09:57:14.741Z workers [fin19] Run 0 test(s), skipped 0 test(s)\n',
    "2025-07-01T09:57:14.742Z workers 'Jest Test Run Complete (fin19): 2025-07-01T09:57:14.740Z'\n",
    '2025-07-01T09:57:14.742Z workers [fin19] Sandbox is responsive, closing it\n',
    '2025-07-01T09:57:14.743Z runManager Test run finished\n',
    '2025-07-01T09:57:14.743Z project Processed console.log entries\n',
    '2025-07-01T09:57:14.743Z project Processed loading sequences\n',
    '2025-07-01T09:57:14.743Z project Processed executed tests\n',
    '2025-07-01T09:57:14.743Z project Processed code coverage\n',
    '2025-07-01T09:57:14.746Z runManager Test run result processed and sent to IDE\n',
    '2025-07-01T09:57:14.873Z fs File changed in editor: example.spec.ts\n',
    '2025-07-01T09:57:14.877Z runManager Test run started; run priority: 2\n',
    '2025-07-01T09:57:14.877Z testTask Test files from affected: 1, from deleted or manually requested: 0, from recently changed: 0, from loaded by: 0, from failing: 0\n',
    '2025-07-01T09:57:14.878Z workers Starting test run\n',
    '2025-07-01T09:57:14.878Z nodeRunner Starting sandbox [worker #0, session #3bta6]\n',
    '2025-07-01T09:57:14.878Z nodeRunner Preparing sandbox [worker #0, session #3bta6]\n',
    '2025-07-01T09:57:14.878Z nodeRunner Prepared sandbox [worker #0, session #3bta6]\n',
    '2025-07-01T09:57:14.878Z workers [worker #0, session #3bta6] Running tests in sandbox\n',
    "2025-07-01T09:57:14.879Z workers 'Configuring Jest (3bta6)'\n",
    "2025-07-01T09:57:14.879Z workers 'Getting Jest test data (3bta6)'\n",
    "2025-07-01T09:57:14.879Z workers 'Scheduling Jest Test Run (3bta6): 2025-07-01T09:57:14.879Z'\n",
    "2025-07-01T09:57:14.889Z workers Sandbox (active) [3bta6] error: TypeError: Cannot read properties of undefined (reading '3')\n" +
      '    at new CustomJSDOMEnvironment (<rootDir>/jest-jsdom-test-environment.cjs:8:9)\n' +
      '    at runTestInternal (<rootDir>/node_modules/jest-runner/build/runTest.js:236:23)\n' +
      '    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n' +
      '    at async runTest (<rootDir>/node_modules/jest-runner/build/runTest.js:444:34)\n',
    "2025-07-01T09:57:14.889Z model [ERROR] Runtime error: TypeError: Cannot read properties of undefined (reading '3')\n" +
      '    at new CustomJSDOMEnvironment (<rootDir>/jest-jsdom-test-environment.cjs:8:9)\n' +
      '    at runTestInternal (<rootDir>/node_modules/jest-runner/build/runTest.js:236:23)\n' +
      '    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n' +
      '    at async runTest (<rootDir>/node_modules/jest-runner/build/runTest.js:444:34)\n',
    '2025-07-01T09:57:14.889Z workers [3bta6] Run 0 test(s), skipped 0 test(s)\n',
    "2025-07-01T09:57:14.890Z workers 'Jest Test Run Complete (3bta6): 2025-07-01T09:57:14.889Z'\n",
    '2025-07-01T09:57:14.890Z workers [3bta6] Sandbox is responsive, closing it\n',
    '2025-07-01T09:57:14.890Z runManager Test run finished\n',
    '2025-07-01T09:57:14.890Z project Processed console.log entries\n',
    '2025-07-01T09:57:14.890Z project Processed loading sequences\n',
    '2025-07-01T09:57:14.890Z project Processed executed tests\n',
    '2025-07-01T09:57:14.890Z project Processed code coverage\n',
    '2025-07-01T09:57:14.893Z runManager Test run result processed and sent to IDE\n',
    '2025-07-01T09:57:17.665Z fs File changed: example.spec.ts\n',
    '2025-07-01T09:57:17.666Z fs No changes detected for example.spec.ts\n',
    '2025-07-01T09:57:17.666Z extended-core File was not changed, but file markers may need to be synced\n',
    '2025-07-01T09:57:32.103Z runManager Test run started; run priority: 2\n',
    '2025-07-01T09:57:32.103Z testTask Test files from affected: 0, from deleted or manually requested: 0, from recently changed: 0, from loaded by: 0, from failing: 0\n',
    '2025-07-01T09:57:32.104Z runManager Test run finished\n',
    '2025-07-01T09:57:32.104Z runManager Test run data re-queued\n',
    '2025-07-01T09:57:34.504Z fs File changed in editor: .gitignore\n',
    '2025-07-01T09:57:34.505Z runManager Cancelling test run, cancel requester priority: 2, current run priority: 2\n',
    '2025-07-01T09:57:34.509Z runManager Test run started; run priority: 2\n',
    '2025-07-01T09:57:34.509Z testTask Test files from affected: 0, from deleted or manually requested: 0, from recently changed: 1, from loaded by: 0, from failing: 0\n',
    '2025-07-01T09:57:34.510Z workers Starting test run\n',
    '2025-07-01T09:57:34.510Z nodeRunner Starting sandbox [worker #0, session #am98f]\n',
    '2025-07-01T09:57:34.510Z nodeRunner Preparing sandbox [worker #0, session #am98f]\n',
    '2025-07-01T09:57:34.510Z nodeRunner Prepared sandbox [worker #0, session #am98f]\n',
    '2025-07-01T09:57:34.510Z workers [worker #0, session #am98f] Running tests in sandbox\n',
    "2025-07-01T09:57:34.511Z workers 'Configuring Jest (am98f)'\n",
    "2025-07-01T09:57:34.512Z workers 'Getting Jest test data (am98f)'\n",
    "2025-07-01T09:57:34.512Z workers 'Scheduling Jest Test Run (am98f): 2025-07-01T09:57:34.512Z'\n",
    "2025-07-01T09:57:34.538Z workers Sandbox (active) [am98f] error: TypeError: Cannot read properties of undefined (reading '3')\n" +
      '    at new CustomJSDOMEnvironment (<rootDir>/jest-jsdom-test-environment.cjs:8:9)\n' +
      '    at runTestInternal (<rootDir>/node_modules/jest-runner/build/runTest.js:236:23)\n' +
      '    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n' +
      '    at async runTest (<rootDir>/node_modules/jest-runner/build/runTest.js:444:34)\n',
    "2025-07-01T09:57:34.538Z model [ERROR] Runtime error: TypeError: Cannot read properties of undefined (reading '3')\n" +
      '    at new CustomJSDOMEnvironment (<rootDir>/jest-jsdom-test-environment.cjs:8:9)\n' +
      '    at runTestInternal (<rootDir>/node_modules/jest-runner/build/runTest.js:236:23)\n' +
      '    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n' +
      '    at async runTest (<rootDir>/node_modules/jest-runner/build/runTest.js:444:34)\n',
    '2025-07-01T09:57:34.539Z workers [am98f] Run 0 test(s), skipped 0 test(s)\n',
    "2025-07-01T09:57:34.539Z workers 'Jest Test Run Complete (am98f): 2025-07-01T09:57:34.539Z'\n",
    '2025-07-01T09:57:34.539Z workers [am98f] Sandbox is responsive, closing it\n',
    '2025-07-01T09:57:34.540Z runManager Test run finished\n',
    '2025-07-01T09:57:34.540Z project Processed console.log entries\n',
    '2025-07-01T09:57:34.540Z project Processed loading sequences\n',
    '2025-07-01T09:57:34.540Z project Processed executed tests\n',
    '2025-07-01T09:57:34.540Z project Processed code coverage\n',
    '2025-07-01T09:57:34.543Z runManager Test run result processed and sent to IDE\n',
    '2025-07-01T09:57:34.608Z fs File changed in editor: .gitignore\n',
    '2025-07-01T09:57:34.611Z runManager Test run started; run priority: 2\n',
    '2025-07-01T09:57:34.611Z testTask Test files from affected: 0, from deleted or manually requested: 0, from recently changed: 1, from loaded by: 0, from failing: 0\n',
    '2025-07-01T09:57:34.612Z workers Starting test run\n',
    '2025-07-01T09:57:34.612Z nodeRunner Starting sandbox [worker #0, session #2qhu1]\n',
    '2025-07-01T09:57:34.612Z nodeRunner Preparing sandbox [worker #0, session #2qhu1]\n',
    '2025-07-01T09:57:34.612Z nodeRunner Prepared sandbox [worker #0, session #2qhu1]\n',
    '2025-07-01T09:57:34.612Z workers [worker #0, session #2qhu1] Running tests in sandbox\n',
    "2025-07-01T09:57:34.612Z workers 'Configuring Jest (2qhu1)'\n",
    "2025-07-01T09:57:34.613Z workers 'Getting Jest test data (2qhu1)'\n",
    "2025-07-01T09:57:34.613Z workers 'Scheduling Jest Test Run (2qhu1): 2025-07-01T09:57:34.613Z'\n",
    "2025-07-01T09:57:34.627Z workers Sandbox (active) [2qhu1] error: TypeError: Cannot read properties of undefined (reading '3')\n" +
      '    at new CustomJSDOMEnvironment (<rootDir>/jest-jsdom-test-environment.cjs:8:9)\n' +
      '    at runTestInternal (<rootDir>/node_modules/jest-runner/build/runTest.js:236:23)\n' +
      '    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n' +
      '    at async runTest (<rootDir>/node_modules/jest-runner/build/runTest.js:444:34)\n',
    "2025-07-01T09:57:34.627Z model [ERROR] Runtime error: TypeError: Cannot read properties of undefined (reading '3')\n" +
      '    at new CustomJSDOMEnvironment (<rootDir>/jest-jsdom-test-environment.cjs:8:9)\n' +
      '    at runTestInternal (<rootDir>/node_modules/jest-runner/build/runTest.js:236:23)\n' +
      '    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n' +
      '    at async runTest (<rootDir>/node_modules/jest-runner/build/runTest.js:444:34)\n',
    '2025-07-01T09:57:34.628Z workers [2qhu1] Run 0 test(s), skipped 0 test(s)\n',
    "2025-07-01T09:57:34.628Z workers 'Jest Test Run Complete (2qhu1): 2025-07-01T09:57:34.627Z'\n",
    '2025-07-01T09:57:34.628Z workers [2qhu1] Sandbox is responsive, closing it\n',
    '2025-07-01T09:57:34.628Z runManager Test run finished\n',
    '2025-07-01T09:57:34.628Z project Processed console.log entries\n',
    '2025-07-01T09:57:34.628Z project Processed loading sequences\n',
    '2025-07-01T09:57:34.628Z project Processed executed tests\n',
    '2025-07-01T09:57:34.628Z project Processed code coverage\n',
    '2025-07-01T09:57:34.630Z runManager Test run result processed and sent to IDE\n',
    '2025-07-01T09:57:34.766Z fs File changed in editor: .gitignore\n',
    '2025-07-01T09:57:34.770Z runManager Test run started; run priority: 2\n',
    '2025-07-01T09:57:34.770Z testTask Test files from affected: 0, from deleted or manually requested: 0, from recently changed: 1, from loaded by: 0, from failing: 0\n',
    '2025-07-01T09:57:34.771Z workers Starting test run\n',
    '2025-07-01T09:57:34.771Z nodeRunner Starting sandbox [worker #0, session #wjh2i]\n',
    '2025-07-01T09:57:34.771Z nodeRunner Preparing sandbox [worker #0, session #wjh2i]\n',
    '2025-07-01T09:57:34.771Z nodeRunner Prepared sandbox [worker #0, session #wjh2i]\n',
    '2025-07-01T09:57:34.771Z workers [worker #0, session #wjh2i] Running tests in sandbox\n',
    "2025-07-01T09:57:34.771Z workers 'Configuring Jest (wjh2i)'\n",
    "2025-07-01T09:57:34.772Z workers 'Getting Jest test data (wjh2i)'\n",
    "2025-07-01T09:57:34.772Z workers 'Scheduling Jest Test Run (wjh2i): 2025-07-01T09:57:34.772Z'\n",
    "2025-07-01T09:57:34.787Z workers Sandbox (active) [wjh2i] error: TypeError: Cannot read properties of undefined (reading '3')\n" +
      '    at new CustomJSDOMEnvironment (<rootDir>/jest-jsdom-test-environment.cjs:8:9)\n' +
      '    at runTestInternal (<rootDir>/node_modules/jest-runner/build/runTest.js:236:23)\n' +
      '    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n' +
      '    at async runTest (<rootDir>/node_modules/jest-runner/build/runTest.js:444:34)\n',
    "2025-07-01T09:57:34.787Z model [ERROR] Runtime error: TypeError: Cannot read properties of undefined (reading '3')\n" +
      '    at new CustomJSDOMEnvironment (<rootDir>/jest-jsdom-test-environment.cjs:8:9)\n' +
      '    at runTestInternal (<rootDir>/node_modules/jest-runner/build/runTest.js:236:23)\n' +
      '    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n' +
      '    at async runTest (<rootDir>/node_modules/jest-runner/build/runTest.js:444:34)\n',
    '2025-07-01T09:57:34.788Z workers [wjh2i] Run 0 test(s), skipped 0 test(s)\n',
    "2025-07-01T09:57:34.788Z workers 'Jest Test Run Complete (wjh2i): 2025-07-01T09:57:34.787Z'\n",
    '2025-07-01T09:57:34.788Z workers [wjh2i] Sandbox is responsive, closing it\n',
    '2025-07-01T09:57:34.788Z runManager Test run finished\n',
    '2025-07-01T09:57:34.788Z project Processed console.log entries\n',
    '2025-07-01T09:57:34.788Z project Processed loading sequences\n',
    '2025-07-01T09:57:34.788Z project Processed executed tests\n',
    '2025-07-01T09:57:34.788Z project Processed code coverage\n',
    '2025-07-01T09:57:34.791Z runManager Test run result processed and sent to IDE\n',
    '2025-07-01T09:57:34.909Z fs File changed in editor: .gitignore\n',
    '2025-07-01T09:57:34.913Z runManager Test run started; run priority: 2\n',
    '2025-07-01T09:57:34.913Z testTask Test files from affected: 0, from deleted or manually requested: 0, from recently changed: 1, from loaded by: 0, from failing: 0\n',
    '2025-07-01T09:57:34.913Z workers Starting test run\n',
    '2025-07-01T09:57:34.913Z nodeRunner Starting sandbox [worker #0, session #4ytvy]\n',
    '2025-07-01T09:57:34.913Z nodeRunner Preparing sandbox [worker #0, session #4ytvy]\n',
    '2025-07-01T09:57:34.913Z nodeRunner Prepared sandbox [worker #0, session #4ytvy]\n',
    '2025-07-01T09:57:34.913Z workers [worker #0, session #4ytvy] Running tests in sandbox\n',
    "2025-07-01T09:57:34.914Z workers 'Configuring Jest (4ytvy)'\n",
    "2025-07-01T09:57:34.914Z workers 'Getting Jest test data (4ytvy)'\n",
    "2025-07-01T09:57:34.914Z workers 'Scheduling Jest Test Run (4ytvy): 2025-07-01T09:57:34.914Z'\n",
    "2025-07-01T09:57:34.928Z workers Sandbox (active) [4ytvy] error: TypeError: Cannot read properties of undefined (reading '3')\n" +
      '    at new CustomJSDOMEnvironment (<rootDir>/jest-jsdom-test-environment.cjs:8:9)\n' +
      '    at runTestInternal (<rootDir>/node_modules/jest-runner/build/runTest.js:236:23)\n' +
      '    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n' +
      '    at async runTest (<rootDir>/node_modules/jest-runner/build/runTest.js:444:34)\n',
    "2025-07-01T09:57:34.928Z model [ERROR] Runtime error: TypeError: Cannot read properties of undefined (reading '3')\n" +
      '    at new CustomJSDOMEnvironment (<rootDir>/jest-jsdom-test-environment.cjs:8:9)\n' +
      '    at runTestInternal (<rootDir>/node_modules/jest-runner/build/runTest.js:236:23)\n' +
      '    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n' +
      '    at async runTest (<rootDir>/node_modules/jest-runner/build/runTest.js:444:34)\n',
    '2025-07-01T09:57:34.928Z workers [4ytvy] Run 0 test(s), skipped 0 test(s)\n',
    "2025-07-01T09:57:34.928Z workers 'Jest Test Run Complete (4ytvy): 2025-07-01T09:57:34.928Z'\n",
    '2025-07-01T09:57:34.928Z workers [4ytvy] Sandbox is responsive, closing it\n',
    '2025-07-01T09:57:34.929Z runManager Test run finished\n',
    '2025-07-01T09:57:34.929Z project Processed console.log entries\n',
    '2025-07-01T09:57:34.929Z project Processed loading sequences\n',
    '2025-07-01T09:57:34.929Z project Processed executed tests\n',
    '2025-07-01T09:57:34.929Z project Processed code coverage\n',
    '2025-07-01T09:57:34.931Z runManager Test run result processed and sent to IDE\n',
    '2025-07-01T09:57:35.127Z fs File changed in editor: .gitignore\n',
    '2025-07-01T09:57:35.131Z runManager Test run started; run priority: 2\n',
    '2025-07-01T09:57:35.131Z testTask Test files from affected: 0, from deleted or manually requested: 0, from recently changed: 1, from loaded by: 0, from failing: 0\n',
    '2025-07-01T09:57:35.132Z workers Starting test run\n',
    '2025-07-01T09:57:35.132Z nodeRunner Starting sandbox [worker #0, session #cy8em]\n',
    '2025-07-01T09:57:35.132Z nodeRunner Preparing sandbox [worker #0, session #cy8em]\n',
    '2025-07-01T09:57:35.132Z nodeRunner Prepared sandbox [worker #0, session #cy8em]\n',
    '2025-07-01T09:57:35.132Z workers [worker #0, session #cy8em] Running tests in sandbox\n',
    "2025-07-01T09:57:35.132Z workers 'Configuring Jest (cy8em)'\n",
    "2025-07-01T09:57:35.132Z workers 'Getting Jest test data (cy8em)'\n",
    "2025-07-01T09:57:35.132Z workers 'Scheduling Jest Test Run (cy8em): 2025-07-01T09:57:35.132Z'\n",
    "2025-07-01T09:57:35.143Z workers Sandbox (active) [cy8em] error: TypeError: Cannot read properties of undefined (reading '3')\n" +
      '    at new CustomJSDOMEnvironment (<rootDir>/jest-jsdom-test-environment.cjs:8:9)\n' +
      '    at runTestInternal (<rootDir>/node_modules/jest-runner/build/runTest.js:236:23)\n' +
      '    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n' +
      '    at async runTest (<rootDir>/node_modules/jest-runner/build/runTest.js:444:34)\n',
    "2025-07-01T09:57:35.143Z model [ERROR] Runtime error: TypeError: Cannot read properties of undefined (reading '3')\n" +
      '    at new CustomJSDOMEnvironment (<rootDir>/jest-jsdom-test-environment.cjs:8:9)\n' +
      '    at runTestInternal (<rootDir>/node_modules/jest-runner/build/runTest.js:236:23)\n' +
      '    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n' +
      '    at async runTest (<rootDir>/node_modules/jest-runner/build/runTest.js:444:34)\n',
    '2025-07-01T09:57:35.143Z workers [cy8em] Run 0 test(s), skipped 0 test(s)\n',
    "2025-07-01T09:57:35.143Z workers 'Jest Test Run Complete (cy8em): 2025-07-01T09:57:35.143Z'\n",
    '2025-07-01T09:57:35.143Z workers [cy8em] Sandbox is responsive, closing it\n',
    '2025-07-01T09:57:35.143Z runManager Test run finished\n',
    '2025-07-01T09:57:35.143Z project Processed console.log entries\n',
    '2025-07-01T09:57:35.143Z project Processed loading sequences\n',
    '2025-07-01T09:57:35.143Z project Processed executed tests\n',
    '2025-07-01T09:57:35.143Z project Processed code coverage\n',
    '2025-07-01T09:57:35.145Z runManager Test run result processed and sent to IDE\n',
    '2025-07-01T09:57:35.259Z fs File changed in editor: .gitignore\n',
    '2025-07-01T09:57:35.264Z runManager Test run started; run priority: 2\n',
    '2025-07-01T09:57:35.264Z testTask Test files from affected: 0, from deleted or manually requested: 0, from recently changed: 1, from loaded by: 0, from failing: 0\n',
    '2025-07-01T09:57:35.266Z workers Starting test run\n',
    '2025-07-01T09:57:35.266Z nodeRunner Starting sandbox [worker #0, session #kklwy]\n',
    '2025-07-01T09:57:35.266Z nodeRunner Preparing sandbox [worker #0, session #kklwy]\n',
    '2025-07-01T09:57:35.266Z nodeRunner Prepared sandbox [worker #0, session #kklwy]\n',
    '2025-07-01T09:57:35.267Z workers [worker #0, session #kklwy] Running tests in sandbox\n',
    "2025-07-01T09:57:35.267Z workers 'Configuring Jest (kklwy)'\n",
    "2025-07-01T09:57:35.268Z workers 'Getting Jest test data (kklwy)'\n",
    "2025-07-01T09:57:35.268Z workers 'Scheduling Jest Test Run (kklwy): 2025-07-01T09:57:35.268Z'\n",
    "2025-07-01T09:57:35.288Z workers Sandbox (active) [kklwy] error: TypeError: Cannot read properties of undefined (reading '3')\n" +
      '    at new CustomJSDOMEnvironment (<rootDir>/jest-jsdom-test-environment.cjs:8:9)\n' +
      '    at runTestInternal (<rootDir>/node_modules/jest-runner/build/runTest.js:236:23)\n' +
      '    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n' +
      '    at async runTest (<rootDir>/node_modules/jest-runner/build/runTest.js:444:34)\n',
    "2025-07-01T09:57:35.288Z model [ERROR] Runtime error: TypeError: Cannot read properties of undefined (reading '3')\n" +
      '    at new CustomJSDOMEnvironment (<rootDir>/jest-jsdom-test-environment.cjs:8:9)\n' +
      '    at runTestInternal (<rootDir>/node_modules/jest-runner/build/runTest.js:236:23)\n' +
      '    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n' +
      '    at async runTest (<rootDir>/node_modules/jest-runner/build/runTest.js:444:34)\n',
    '2025-07-01T09:57:35.288Z workers [kklwy] Run 0 test(s), skipped 0 test(s)\n',
    "2025-07-01T09:57:35.288Z workers 'Jest Test Run Complete (kklwy): 2025-07-01T09:57:35.288Z'\n",
    '2025-07-01T09:57:35.289Z workers [kklwy] Sandbox is responsive, closing it\n',
    '2025-07-01T09:57:35.290Z runManager Test run finished\n',
    '2025-07-01T09:57:35.290Z project Processed console.log entries\n',
    '2025-07-01T09:57:35.290Z project Processed loading sequences\n',
    '2025-07-01T09:57:35.290Z project Processed executed tests\n',
    '2025-07-01T09:57:35.290Z project Processed code coverage\n',
    '2025-07-01T09:57:35.292Z runManager Test run result processed and sent to IDE\n',
    '2025-07-01T09:57:35.361Z fs File changed in editor: .gitignore\n',
    '2025-07-01T09:57:35.366Z runManager Test run started; run priority: 2\n',
    '2025-07-01T09:57:35.366Z testTask Test files from affected: 0, from deleted or manually requested: 0, from recently changed: 1, from loaded by: 0, from failing: 0\n',
    '2025-07-01T09:57:35.367Z workers Starting test run\n',
    '2025-07-01T09:57:35.367Z nodeRunner Starting sandbox [worker #0, session #5zj3m]\n',
    '2025-07-01T09:57:35.367Z nodeRunner Preparing sandbox [worker #0, session #5zj3m]\n',
    '2025-07-01T09:57:35.367Z nodeRunner Prepared sandbox [worker #0, session #5zj3m]\n',
    '2025-07-01T09:57:35.367Z workers [worker #0, session #5zj3m] Running tests in sandbox\n',
    "2025-07-01T09:57:35.368Z workers 'Configuring Jest (5zj3m)'\n",
    "2025-07-01T09:57:35.368Z workers 'Getting Jest test data (5zj3m)'\n",
    "2025-07-01T09:57:35.368Z workers 'Scheduling Jest Test Run (5zj3m): 2025-07-01T09:57:35.368Z'\n",
    "2025-07-01T09:57:35.378Z workers Sandbox (active) [5zj3m] error: TypeError: Cannot read properties of undefined (reading '3')\n" +
      '    at new CustomJSDOMEnvironment (<rootDir>/jest-jsdom-test-environment.cjs:8:9)\n' +
      '    at runTestInternal (<rootDir>/node_modules/jest-runner/build/runTest.js:236:23)\n' +
      '    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n' +
      '    at async runTest (<rootDir>/node_modules/jest-runner/build/runTest.js:444:34)\n',
    "2025-07-01T09:57:35.378Z model [ERROR] Runtime error: TypeError: Cannot read properties of undefined (reading '3')\n" +
      '    at new CustomJSDOMEnvironment (<rootDir>/jest-jsdom-test-environment.cjs:8:9)\n' +
      '    at runTestInternal (<rootDir>/node_modules/jest-runner/build/runTest.js:236:23)\n' +
      '    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n' +
      '    at async runTest (<rootDir>/node_modules/jest-runner/build/runTest.js:444:34)\n',
    '2025-07-01T09:57:35.379Z workers [5zj3m] Run 0 test(s), skipped 0 test(s)\n',
    "2025-07-01T09:57:35.379Z workers 'Jest Test Run Complete (5zj3m): 2025-07-01T09:57:35.379Z'\n",
    '2025-07-01T09:57:35.379Z workers [5zj3m] Sandbox is responsive, closing it\n',
    '2025-07-01T09:57:35.379Z runManager Test run finished\n',
    '2025-07-01T09:57:35.379Z project Processed console.log entries\n',
    '2025-07-01T09:57:35.379Z project Processed loading sequences\n',
    '2025-07-01T09:57:35.379Z project Processed executed tests\n',
    '2025-07-01T09:57:35.379Z project Processed code coverage\n',
    '2025-07-01T09:57:35.380Z runManager Test run result processed and sent to IDE\n',
    '2025-07-01T09:57:35.494Z fs File changed in editor: .gitignore\n',
    '2025-07-01T09:57:35.500Z runManager Test run started; run priority: 2\n',
    '2025-07-01T09:57:35.500Z testTask Test files from affected: 0, from deleted or manually requested: 0, from recently changed: 1, from loaded by: 0, from failing: 0\n',
    '2025-07-01T09:57:35.500Z workers Starting test run\n',
    '2025-07-01T09:57:35.501Z nodeRunner Starting sandbox [worker #0, session #jwc8x]\n',
    '2025-07-01T09:57:35.501Z nodeRunner Preparing sandbox [worker #0, session #jwc8x]\n',
    '2025-07-01T09:57:35.501Z nodeRunner Prepared sandbox [worker #0, session #jwc8x]\n',
    '2025-07-01T09:57:35.501Z workers [worker #0, session #jwc8x] Running tests in sandbox\n',
    "2025-07-01T09:57:35.501Z workers 'Configuring Jest (jwc8x)'\n",
    "2025-07-01T09:57:35.501Z workers 'Getting Jest test data (jwc8x)'\n",
    "2025-07-01T09:57:35.502Z workers 'Scheduling Jest Test Run (jwc8x): 2025-07-01T09:57:35.501Z'\n",
    "2025-07-01T09:57:35.513Z workers Sandbox (active) [jwc8x] error: TypeError: Cannot read properties of undefined (reading '3')\n" +
      '    at new CustomJSDOMEnvironment (<rootDir>/jest-jsdom-test-environment.cjs:8:9)\n' +
      '    at runTestInternal (<rootDir>/node_modules/jest-runner/build/runTest.js:236:23)\n' +
      '    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n' +
      '    at async runTest (<rootDir>/node_modules/jest-runner/build/runTest.js:444:34)\n',
    "2025-07-01T09:57:35.513Z model [ERROR] Runtime error: TypeError: Cannot read properties of undefined (reading '3')\n" +
      '    at new CustomJSDOMEnvironment (<rootDir>/jest-jsdom-test-environment.cjs:8:9)\n' +
      '    at runTestInternal (<rootDir>/node_modules/jest-runner/build/runTest.js:236:23)\n' +
      '    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n' +
      '    at async runTest (<rootDir>/node_modules/jest-runner/build/runTest.js:444:34)\n',
    '2025-07-01T09:57:35.513Z workers [jwc8x] Run 0 test(s), skipped 0 test(s)\n',
    "2025-07-01T09:57:35.513Z workers 'Jest Test Run Complete (jwc8x): 2025-07-01T09:57:35.513Z'\n",
    '2025-07-01T09:57:35.513Z workers [jwc8x] Sandbox is responsive, closing it\n',
    '2025-07-01T09:57:35.514Z runManager Test run finished\n',
    '2025-07-01T09:57:35.514Z project Processed console.log entries\n',
    '2025-07-01T09:57:35.514Z project Processed loading sequences\n',
    '2025-07-01T09:57:35.514Z project Processed executed tests\n',
    '2025-07-01T09:57:35.514Z project Processed code coverage\n',
    '2025-07-01T09:57:35.515Z runManager Test run result processed and sent to IDE\n',
    '2025-07-01T09:57:35.611Z fs File changed in editor: .gitignore\n',
    '2025-07-01T09:57:35.615Z runManager Test run started; run priority: 2\n',
    '2025-07-01T09:57:35.615Z testTask Test files from affected: 0, from deleted or manually requested: 0, from recently changed: 1, from loaded by: 0, from failing: 0\n',
    '2025-07-01T09:57:35.616Z workers Starting test run\n',
    '2025-07-01T09:57:35.616Z nodeRunner Starting sandbox [worker #0, session #9v91u]\n',
    '2025-07-01T09:57:35.616Z nodeRunner Preparing sandbox [worker #0, session #9v91u]\n',
    '2025-07-01T09:57:35.616Z nodeRunner Prepared sandbox [worker #0, session #9v91u]\n',
    '2025-07-01T09:57:35.616Z workers [worker #0, session #9v91u] Running tests in sandbox\n',
    "2025-07-01T09:57:35.616Z workers 'Configuring Jest (9v91u)'\n",
    "2025-07-01T09:57:35.617Z workers 'Getting Jest test data (9v91u)'\n",
    "2025-07-01T09:57:35.617Z workers 'Scheduling Jest Test Run (9v91u): 2025-07-01T09:57:35.617Z'\n",
    "2025-07-01T09:57:35.627Z workers Sandbox (active) [9v91u] error: TypeError: Cannot read properties of undefined (reading '3')\n" +
      '    at new CustomJSDOMEnvironment (<rootDir>/jest-jsdom-test-environment.cjs:8:9)\n' +
      '    at runTestInternal (<rootDir>/node_modules/jest-runner/build/runTest.js:236:23)\n' +
      '    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n' +
      '    at async runTest (<rootDir>/node_modules/jest-runner/build/runTest.js:444:34)\n',
    "2025-07-01T09:57:35.627Z model [ERROR] Runtime error: TypeError: Cannot read properties of undefined (reading '3')\n" +
      '    at new CustomJSDOMEnvironment (<rootDir>/jest-jsdom-test-environment.cjs:8:9)\n' +
      '    at runTestInternal (<rootDir>/node_modules/jest-runner/build/runTest.js:236:23)\n' +
      '    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n' +
      '    at async runTest (<rootDir>/node_modules/jest-runner/build/runTest.js:444:34)\n',
    '2025-07-01T09:57:35.628Z workers [9v91u] Run 0 test(s), skipped 0 test(s)\n',
    "2025-07-01T09:57:35.629Z workers 'Jest Test Run Complete (9v91u): 2025-07-01T09:57:35.628Z'\n",
    '2025-07-01T09:57:35.629Z workers [9v91u] Sandbox is responsive, closing it\n',
    '2025-07-01T09:57:35.629Z runManager Test run finished\n',
    '2025-07-01T09:57:35.629Z project Processed console.log entries\n',
    '2025-07-01T09:57:35.629Z project Processed loading sequences\n',
    '2025-07-01T09:57:35.629Z project Processed executed tests\n',
    '2025-07-01T09:57:35.629Z project Processed code coverage\n',
    '2025-07-01T09:57:35.631Z runManager Test run result processed and sent to IDE\n',
    '2025-07-01T09:57:35.811Z fs File changed in editor: .gitignore\n',
    '2025-07-01T09:57:35.814Z runManager Test run started; run priority: 2\n',
    '2025-07-01T09:57:35.814Z testTask Test files from affected: 0, from deleted or manually requested: 0, from recently changed: 1, from loaded by: 0, from failing: 0\n',
    '2025-07-01T09:57:35.815Z workers Starting test run\n',
    '2025-07-01T09:57:35.815Z nodeRunner Starting sandbox [worker #0, session #42haa]\n',
    '2025-07-01T09:57:35.815Z nodeRunner Preparing sandbox [worker #0, session #42haa]\n',
    '2025-07-01T09:57:35.815Z nodeRunner Prepared sandbox [worker #0, session #42haa]\n',
    '2025-07-01T09:57:35.815Z workers [worker #0, session #42haa] Running tests in sandbox\n',
    "2025-07-01T09:57:35.816Z workers 'Configuring Jest (42haa)'\n",
    "2025-07-01T09:57:35.816Z workers 'Getting Jest test data (42haa)'\n",
    "2025-07-01T09:57:35.816Z workers 'Scheduling Jest Test Run (42haa): 2025-07-01T09:57:35.816Z'\n",
    "2025-07-01T09:57:35.826Z workers Sandbox (active) [42haa] error: TypeError: Cannot read properties of undefined (reading '3')\n" +
      '    at new CustomJSDOMEnvironment (<rootDir>/jest-jsdom-test-environment.cjs:8:9)\n' +
      '    at runTestInternal (<rootDir>/node_modules/jest-runner/build/runTest.js:236:23)\n' +
      '    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n' +
      '    at async runTest (<rootDir>/node_modules/jest-runner/build/runTest.js:444:34)\n',
    "2025-07-01T09:57:35.827Z model [ERROR] Runtime error: TypeError: Cannot read properties of undefined (reading '3')\n" +
      '    at new CustomJSDOMEnvironment (<rootDir>/jest-jsdom-test-environment.cjs:8:9)\n' +
      '    at runTestInternal (<rootDir>/node_modules/jest-runner/build/runTest.js:236:23)\n' +
      '    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n' +
      '    at async runTest (<rootDir>/node_modules/jest-runner/build/runTest.js:444:34)\n',
    '2025-07-01T09:57:35.827Z workers [42haa] Run 0 test(s), skipped 0 test(s)\n',
    "2025-07-01T09:57:35.827Z workers 'Jest Test Run Complete (42haa): 2025-07-01T09:57:35.826Z'\n",
    '2025-07-01T09:57:35.827Z workers [42haa] Sandbox is responsive, closing it\n',
    '2025-07-01T09:57:35.827Z runManager Test run finished\n',
    '2025-07-01T09:57:35.827Z project Processed console.log entries\n',
    '2025-07-01T09:57:35.827Z project Processed loading sequences\n',
    '2025-07-01T09:57:35.827Z project Processed executed tests\n',
    '2025-07-01T09:57:35.827Z project Processed code coverage\n',
    '2025-07-01T09:57:35.829Z runManager Test run result processed and sent to IDE\n',
    '2025-07-01T09:57:35.945Z fs File changed in editor: .gitignore\n',
    '2025-07-01T09:57:35.949Z runManager Test run started; run priority: 2\n',
    '2025-07-01T09:57:35.949Z testTask Test files from affected: 0, from deleted or manually requested: 0, from recently changed: 1, from loaded by: 0, from failing: 0\n',
    '2025-07-01T09:57:35.950Z workers Starting test run\n',
    '2025-07-01T09:57:35.950Z nodeRunner Starting sandbox [worker #0, session #jqoll]\n',
    '2025-07-01T09:57:35.950Z nodeRunner Preparing sandbox [worker #0, session #jqoll]\n',
    '2025-07-01T09:57:35.950Z nodeRunner Prepared sandbox [worker #0, session #jqoll]\n',
    '2025-07-01T09:57:35.950Z workers [worker #0, session #jqoll] Running tests in sandbox\n',
    "2025-07-01T09:57:35.951Z workers 'Configuring Jest (jqoll)'\n",
    "2025-07-01T09:57:35.951Z workers 'Getting Jest test data (jqoll)'\n",
    "2025-07-01T09:57:35.951Z workers 'Scheduling Jest Test Run (jqoll): 2025-07-01T09:57:35.951Z'\n",
    "2025-07-01T09:57:35.967Z workers Sandbox (active) [jqoll] error: TypeError: Cannot read properties of undefined (reading '3')\n" +
      '    at new CustomJSDOMEnvironment (<rootDir>/jest-jsdom-test-environment.cjs:8:9)\n' +
      '    at runTestInternal (<rootDir>/node_modules/jest-runner/build/runTest.js:236:23)\n' +
      '    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n' +
      '    at async runTest (<rootDir>/node_modules/jest-runner/build/runTest.js:444:34)\n',
    "2025-07-01T09:57:35.967Z model [ERROR] Runtime error: TypeError: Cannot read properties of undefined (reading '3')\n" +
      '    at new CustomJSDOMEnvironment (<rootDir>/jest-jsdom-test-environment.cjs:8:9)\n' +
      '    at runTestInternal (<rootDir>/node_modules/jest-runner/build/runTest.js:236:23)\n' +
      '    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n' +
      '    at async runTest (<rootDir>/node_modules/jest-runner/build/runTest.js:444:34)\n',
    '2025-07-01T09:57:35.967Z workers [jqoll] Run 0 test(s), skipped 0 test(s)\n',
    "2025-07-01T09:57:35.967Z workers 'Jest Test Run Complete (jqoll): 2025-07-01T09:57:35.967Z'\n",
    '2025-07-01T09:57:35.967Z workers [jqoll] Sandbox is responsive, closing it\n',
    '2025-07-01T09:57:35.968Z runManager Test run finished\n',
    '2025-07-01T09:57:35.968Z project Processed console.log entries\n',
    '2025-07-01T09:57:35.968Z project Processed loading sequences\n',
    '2025-07-01T09:57:35.968Z project Processed executed tests\n',
    '2025-07-01T09:57:35.968Z project Processed code coverage\n',
    '2025-07-01T09:57:35.970Z runManager Test run result processed and sent to IDE\n',
    '2025-07-01T09:57:36.486Z fs File changed: .gitignore\n',
    '2025-07-01T09:57:36.488Z fs No changes detected for .gitignore\n',
    '2025-07-01T09:57:36.489Z extended-core File was not changed, but file markers may need to be synced\n',
    '2025-07-01T09:57:51.550Z runManager Test run started; run priority: 2\n',
    '2025-07-01T09:57:51.550Z testTask Test files from affected: 0, from deleted or manually requested: 0, from recently changed: 0, from loaded by: 0, from failing: 0\n',
    '2025-07-01T09:57:51.551Z runManager Test run finished\n',
    '2025-07-01T09:57:51.551Z runManager Test run data re-queued\n',
    '2025-07-01T09:58:05.035Z fs File changed in editor: tsconfig.json\n',
    '2025-07-01T09:58:05.036Z runManager Cancelling test run, cancel requester priority: 2, current run priority: 2\n',
    '2025-07-01T09:58:05.038Z runManager Test run started; run priority: 2\n',
    '2025-07-01T09:58:05.038Z testTask Test files from affected: 0, from deleted or manually requested: 0, from recently changed: 1, from loaded by: 0, from failing: 0\n',
    '2025-07-01T09:58:05.038Z workers Starting test run\n',
    '2025-07-01T09:58:05.038Z nodeRunner Starting sandbox [worker #0, session #uojfl]\n',
    '2025-07-01T09:58:05.038Z nodeRunner Preparing sandbox [worker #0, session #uojfl]\n',
    '2025-07-01T09:58:05.038Z nodeRunner Prepared sandbox [worker #0, session #uojfl]\n',
    '2025-07-01T09:58:05.038Z workers [worker #0, session #uojfl] Running tests in sandbox\n',
    "2025-07-01T09:58:05.039Z workers 'Configuring Jest (uojfl)'\n",
    "2025-07-01T09:58:05.039Z workers 'Getting Jest test data (uojfl)'\n",
    "2025-07-01T09:58:05.039Z workers 'Scheduling Jest Test Run (uojfl): 2025-07-01T09:58:05.039Z'\n",
    "2025-07-01T09:58:05.048Z workers Sandbox (active) [uojfl] error: TypeError: Cannot read properties of undefined (reading '3')\n" +
      '    at new CustomJSDOMEnvironment (<rootDir>/jest-jsdom-test-environment.cjs:8:9)\n' +
      '    at runTestInternal (<rootDir>/node_modules/jest-runner/build/runTest.js:236:23)\n' +
      '    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n' +
      '    at async runTest (<rootDir>/node_modules/jest-runner/build/runTest.js:444:34)\n',
    "2025-07-01T09:58:05.048Z model [ERROR] Runtime error: TypeError: Cannot read properties of undefined (reading '3')\n" +
      '    at new CustomJSDOMEnvironment (<rootDir>/jest-jsdom-test-environment.cjs:8:9)\n' +
      '    at runTestInternal (<rootDir>/node_modules/jest-runner/build/runTest.js:236:23)\n' +
      '    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n' +
      '    at async runTest (<rootDir>/node_modules/jest-runner/build/runTest.js:444:34)\n',
    '2025-07-01T09:58:05.048Z workers [uojfl] Run 0 test(s), skipped 0 test(s)\n',
    "2025-07-01T09:58:05.048Z workers 'Jest Test Run Complete (uojfl): 2025-07-01T09:58:05.048Z'\n",
    '2025-07-01T09:58:05.048Z workers [uojfl] Sandbox is responsive, closing it\n',
    '2025-07-01T09:58:05.049Z runManager Test run finished\n',
    '2025-07-01T09:58:05.049Z project Processed console.log entries\n',
    '2025-07-01T09:58:05.049Z project Processed loading sequences\n',
    '2025-07-01T09:58:05.049Z project Processed executed tests\n',
    '2025-07-01T09:58:05.049Z project Processed code coverage\n',
    '2025-07-01T09:58:05.049Z runManager Test run result processed and sent to IDE\n',
    '2025-07-01T09:58:05.202Z fs File changed in editor: tsconfig.json\n',
    '2025-07-01T09:58:05.207Z runManager Test run started; run priority: 2\n',
    '2025-07-01T09:58:05.207Z testTask Test files from affected: 0, from deleted or manually requested: 0, from recently changed: 1, from loaded by: 0, from failing: 0\n',
    '2025-07-01T09:58:05.208Z workers Starting test run\n',
    '2025-07-01T09:58:05.208Z nodeRunner Starting sandbox [worker #0, session #f1hw6]\n',
    '2025-07-01T09:58:05.208Z nodeRunner Preparing sandbox [worker #0, session #f1hw6]\n',
    '2025-07-01T09:58:05.208Z nodeRunner Prepared sandbox [worker #0, session #f1hw6]\n',
    '2025-07-01T09:58:05.208Z workers [worker #0, session #f1hw6] Running tests in sandbox\n',
    "2025-07-01T09:58:05.209Z workers 'Configuring Jest (f1hw6)'\n",
    "2025-07-01T09:58:05.209Z workers 'Getting Jest test data (f1hw6)'\n",
    "2025-07-01T09:58:05.209Z workers 'Scheduling Jest Test Run (f1hw6): 2025-07-01T09:58:05.209Z'\n",
    "2025-07-01T09:58:05.220Z workers Sandbox (active) [f1hw6] error: TypeError: Cannot read properties of undefined (reading '3')\n" +
      '    at new CustomJSDOMEnvironment (<rootDir>/jest-jsdom-test-environment.cjs:8:9)\n' +
      '    at runTestInternal (<rootDir>/node_modules/jest-runner/build/runTest.js:236:23)\n' +
      '    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n' +
      '    at async runTest (<rootDir>/node_modules/jest-runner/build/runTest.js:444:34)\n',
    "2025-07-01T09:58:05.220Z model [ERROR] Runtime error: TypeError: Cannot read properties of undefined (reading '3')\n" +
      '    at new CustomJSDOMEnvironment (<rootDir>/jest-jsdom-test-environment.cjs:8:9)\n' +
      '    at runTestInternal (<rootDir>/node_modules/jest-runner/build/runTest.js:236:23)\n' +
      '    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n' +
      '    at async runTest (<rootDir>/node_modules/jest-runner/build/runTest.js:444:34)\n',
    '2025-07-01T09:58:05.220Z workers [f1hw6] Run 0 test(s), skipped 0 test(s)\n',
    "2025-07-01T09:58:05.220Z workers 'Jest Test Run Complete (f1hw6): 2025-07-01T09:58:05.220Z'\n",
    '2025-07-01T09:58:05.220Z workers [f1hw6] Sandbox is responsive, closing it\n',
    '2025-07-01T09:58:05.220Z runManager Test run finished\n',
    '2025-07-01T09:58:05.220Z project Processed console.log entries\n',
    '2025-07-01T09:58:05.220Z project Processed loading sequences\n',
    '2025-07-01T09:58:05.220Z project Processed executed tests\n',
    '2025-07-01T09:58:05.221Z project Processed code coverage\n',
    '2025-07-01T09:58:05.222Z runManager Test run result processed and sent to IDE\n',
    '2025-07-01T09:58:05.373Z fs File changed in editor: tsconfig.json\n',
    '2025-07-01T09:58:05.377Z runManager Test run started; run priority: 2\n',
    '2025-07-01T09:58:05.377Z testTask Test files from affected: 0, from deleted or manually requested: 0, from recently changed: 1, from loaded by: 0, from failing: 0\n',
    '2025-07-01T09:58:05.378Z workers Starting test run\n',
    '2025-07-01T09:58:05.378Z nodeRunner Starting sandbox [worker #0, session #48osi]\n',
    '2025-07-01T09:58:05.378Z nodeRunner Preparing sandbox [worker #0, session #48osi]\n',
    '2025-07-01T09:58:05.378Z nodeRunner Prepared sandbox [worker #0, session #48osi]\n',
    '2025-07-01T09:58:05.378Z workers [worker #0, session #48osi] Running tests in sandbox\n',
    "2025-07-01T09:58:05.378Z workers 'Configuring Jest (48osi)'\n",
    "2025-07-01T09:58:05.379Z workers 'Getting Jest test data (48osi)'\n",
    "2025-07-01T09:58:05.379Z workers 'Scheduling Jest Test Run (48osi): 2025-07-01T09:58:05.379Z'\n",
    "2025-07-01T09:58:05.391Z workers Sandbox (active) [48osi] error: TypeError: Cannot read properties of undefined (reading '3')\n" +
      '    at new CustomJSDOMEnvironment (<rootDir>/jest-jsdom-test-environment.cjs:8:9)\n' +
      '    at runTestInternal (<rootDir>/node_modules/jest-runner/build/runTest.js:236:23)\n' +
      '    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n' +
      '    at async runTest (<rootDir>/node_modules/jest-runner/build/runTest.js:444:34)\n',
    "2025-07-01T09:58:05.391Z model [ERROR] Runtime error: TypeError: Cannot read properties of undefined (reading '3')\n" +
      '    at new CustomJSDOMEnvironment (<rootDir>/jest-jsdom-test-environment.cjs:8:9)\n' +
      '    at runTestInternal (<rootDir>/node_modules/jest-runner/build/runTest.js:236:23)\n' +
      '    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n' +
      '    at async runTest (<rootDir>/node_modules/jest-runner/build/runTest.js:444:34)\n',
    '2025-07-01T09:58:05.391Z workers [48osi] Run 0 test(s), skipped 0 test(s)\n',
    "2025-07-01T09:58:05.391Z workers 'Jest Test Run Complete (48osi): 2025-07-01T09:58:05.391Z'\n",
    '2025-07-01T09:58:05.391Z workers [48osi] Sandbox is responsive, closing it\n',
    '2025-07-01T09:58:05.392Z runManager Test run finished\n',
    '2025-07-01T09:58:05.392Z project Processed console.log entries\n',
    '2025-07-01T09:58:05.392Z project Processed loading sequences\n',
    '2025-07-01T09:58:05.392Z project Processed executed tests\n',
    '2025-07-01T09:58:05.392Z project Processed code coverage\n',
    '2025-07-01T09:58:05.393Z runManager Test run result processed and sent to IDE\n',
    '2025-07-01T09:58:06.809Z fs File changed in editor: tsconfig.json\n',
    '2025-07-01T09:58:06.812Z runManager Test run started; run priority: 2\n',
    '2025-07-01T09:58:06.812Z testTask Test files from affected: 0, from deleted or manually requested: 0, from recently changed: 1, from loaded by: 0, from failing: 0\n',
    '2025-07-01T09:58:06.812Z workers Starting test run\n',
    '2025-07-01T09:58:06.812Z nodeRunner Starting sandbox [worker #0, session #uvoiw]\n',
    '2025-07-01T09:58:06.812Z nodeRunner Preparing sandbox [worker #0, session #uvoiw]\n',
    '2025-07-01T09:58:06.812Z nodeRunner Prepared sandbox [worker #0, session #uvoiw]\n',
    '2025-07-01T09:58:06.812Z workers [worker #0, session #uvoiw] Running tests in sandbox\n',
    "2025-07-01T09:58:06.813Z workers 'Configuring Jest (uvoiw)'\n",
    "2025-07-01T09:58:06.813Z workers 'Getting Jest test data (uvoiw)'\n",
    "2025-07-01T09:58:06.813Z workers 'Scheduling Jest Test Run (uvoiw): 2025-07-01T09:58:06.813Z'\n",
    "2025-07-01T09:58:06.823Z workers Sandbox (active) [uvoiw] error: TypeError: Cannot read properties of undefined (reading '3')\n" +
      '    at new CustomJSDOMEnvironment (<rootDir>/jest-jsdom-test-environment.cjs:8:9)\n' +
      '    at runTestInternal (<rootDir>/node_modules/jest-runner/build/runTest.js:236:23)\n' +
      '    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n' +
      '    at async runTest (<rootDir>/node_modules/jest-runner/build/runTest.js:444:34)\n',
    "2025-07-01T09:58:06.823Z model [ERROR] Runtime error: TypeError: Cannot read properties of undefined (reading '3')\n" +
      '    at new CustomJSDOMEnvironment (<rootDir>/jest-jsdom-test-environment.cjs:8:9)\n' +
      '    at runTestInternal (<rootDir>/node_modules/jest-runner/build/runTest.js:236:23)\n' +
      '    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n' +
      '    at async runTest (<rootDir>/node_modules/jest-runner/build/runTest.js:444:34)\n',
    '2025-07-01T09:58:06.823Z workers [uvoiw] Run 0 test(s), skipped 0 test(s)\n',
    "2025-07-01T09:58:06.823Z workers 'Jest Test Run Complete (uvoiw): 2025-07-01T09:58:06.823Z'\n",
    '2025-07-01T09:58:06.823Z workers [uvoiw] Sandbox is responsive, closing it\n',
    '2025-07-01T09:58:06.823Z runManager Test run finished\n',
    '2025-07-01T09:58:06.823Z project Processed console.log entries\n',
    '2025-07-01T09:58:06.823Z project Processed loading sequences\n',
    '2025-07-01T09:58:06.823Z project Processed executed tests\n',
    '2025-07-01T09:58:06.823Z project Processed code coverage\n',
    '2025-07-01T09:58:06.824Z runManager Test run result processed and sent to IDE\n',
    '2025-07-01T09:58:07.024Z fs File changed in editor: tsconfig.json\n',
    '2025-07-01T09:58:07.028Z runManager Test run started; run priority: 2\n',
    '2025-07-01T09:58:07.028Z testTask Test files from affected: 0, from deleted or manually requested: 0, from recently changed: 1, from loaded by: 0, from failing: 0\n',
    '2025-07-01T09:58:07.028Z workers Starting test run\n',
    '2025-07-01T09:58:07.028Z nodeRunner Starting sandbox [worker #0, session #8uzo2]\n',
    '2025-07-01T09:58:07.028Z nodeRunner Preparing sandbox [worker #0, session #8uzo2]\n',
    '2025-07-01T09:58:07.028Z nodeRunner Prepared sandbox [worker #0, session #8uzo2]\n',
    '2025-07-01T09:58:07.028Z workers [worker #0, session #8uzo2] Running tests in sandbox\n',
    "2025-07-01T09:58:07.028Z workers 'Configuring Jest (8uzo2)'\n",
    "2025-07-01T09:58:07.029Z workers 'Getting Jest test data (8uzo2)'\n",
    "2025-07-01T09:58:07.029Z workers 'Scheduling Jest Test Run (8uzo2): 2025-07-01T09:58:07.029Z'\n",
    "2025-07-01T09:58:07.037Z workers Sandbox (active) [8uzo2] error: TypeError: Cannot read properties of undefined (reading '3')\n" +
      '    at new CustomJSDOMEnvironment (<rootDir>/jest-jsdom-test-environment.cjs:8:9)\n' +
      '    at runTestInternal (<rootDir>/node_modules/jest-runner/build/runTest.js:236:23)\n' +
      '    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n' +
      '    at async runTest (<rootDir>/node_modules/jest-runner/build/runTest.js:444:34)\n',
    "2025-07-01T09:58:07.037Z model [ERROR] Runtime error: TypeError: Cannot read properties of undefined (reading '3')\n" +
      '    at new CustomJSDOMEnvironment (<rootDir>/jest-jsdom-test-environment.cjs:8:9)\n' +
      '    at runTestInternal (<rootDir>/node_modules/jest-runner/build/runTest.js:236:23)\n' +
      '    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n' +
      '    at async runTest (<rootDir>/node_modules/jest-runner/build/runTest.js:444:34)\n',
    '2025-07-01T09:58:07.037Z workers [8uzo2] Run 0 test(s), skipped 0 test(s)\n',
    "2025-07-01T09:58:07.037Z workers 'Jest Test Run Complete (8uzo2): 2025-07-01T09:58:07.037Z'\n",
    '2025-07-01T09:58:07.037Z workers [8uzo2] Sandbox is responsive, closing it\n',
    '2025-07-01T09:58:07.037Z runManager Test run finished\n',
    '2025-07-01T09:58:07.037Z project Processed console.log entries\n',
    '2025-07-01T09:58:07.037Z project Processed loading sequences\n',
    '2025-07-01T09:58:07.037Z project Processed executed tests\n',
    '2025-07-01T09:58:07.037Z project Processed code coverage\n',
    '2025-07-01T09:58:07.038Z runManager Test run result processed and sent to IDE\n',
    '2025-07-01T09:58:07.143Z fs File changed in editor: tsconfig.json\n',
    '2025-07-01T09:58:07.147Z runManager Test run started; run priority: 2\n',
    '2025-07-01T09:58:07.147Z testTask Test files from affected: 0, from deleted or manually requested: 0, from recently changed: 1, from loaded by: 0, from failing: 0\n',
    '2025-07-01T09:58:07.148Z workers Starting test run\n',
    '2025-07-01T09:58:07.148Z nodeRunner Starting sandbox [worker #0, session #u0a8x]\n',
    '2025-07-01T09:58:07.148Z nodeRunner Preparing sandbox [worker #0, session #u0a8x]\n',
    '2025-07-01T09:58:07.148Z nodeRunner Prepared sandbox [worker #0, session #u0a8x]\n',
    '2025-07-01T09:58:07.148Z workers [worker #0, session #u0a8x] Running tests in sandbox\n',
    "2025-07-01T09:58:07.149Z workers 'Configuring Jest (u0a8x)'\n",
    "2025-07-01T09:58:07.149Z workers 'Getting Jest test data (u0a8x)'\n",
    "2025-07-01T09:58:07.149Z workers 'Scheduling Jest Test Run (u0a8x): 2025-07-01T09:58:07.149Z'\n",
    "2025-07-01T09:58:07.162Z workers Sandbox (active) [u0a8x] error: TypeError: Cannot read properties of undefined (reading '3')\n" +
      '    at new CustomJSDOMEnvironment (<rootDir>/jest-jsdom-test-environment.cjs:8:9)\n' +
      '    at runTestInternal (<rootDir>/node_modules/jest-runner/build/runTest.js:236:23)\n' +
      '    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n' +
      '    at async runTest (<rootDir>/node_modules/jest-runner/build/runTest.js:444:34)\n',
    "2025-07-01T09:58:07.162Z model [ERROR] Runtime error: TypeError: Cannot read properties of undefined (reading '3')\n" +
      '    at new CustomJSDOMEnvironment (<rootDir>/jest-jsdom-test-environment.cjs:8:9)\n' +
      '    at runTestInternal (<rootDir>/node_modules/jest-runner/build/runTest.js:236:23)\n' +
      '    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n' +
      '    at async runTest (<rootDir>/node_modules/jest-runner/build/runTest.js:444:34)\n',
    '2025-07-01T09:58:07.162Z workers [u0a8x] Run 0 test(s), skipped 0 test(s)\n',
    "2025-07-01T09:58:07.163Z workers 'Jest Test Run Complete (u0a8x): 2025-07-01T09:58:07.162Z'\n",
    '2025-07-01T09:58:07.163Z workers [u0a8x] Sandbox is responsive, closing it\n',
    '2025-07-01T09:58:07.163Z runManager Test run finished\n',
    '2025-07-01T09:58:07.163Z project Processed console.log entries\n',
    '2025-07-01T09:58:07.163Z project Processed loading sequences\n',
    '2025-07-01T09:58:07.163Z project Processed executed tests\n',
    '2025-07-01T09:58:07.163Z project Processed code coverage\n',
    '2025-07-01T09:58:07.165Z runManager Test run result processed and sent to IDE\n',
    '2025-07-01T09:58:07.411Z fs File changed in editor: tsconfig.json\n',
    '2025-07-01T09:58:07.415Z runManager Test run started; run priority: 2\n',
    '2025-07-01T09:58:07.416Z testTask Test files from affected: 0, from deleted or manually requested: 0, from recently changed: 1, from loaded by: 0, from failing: 0\n',
    '2025-07-01T09:58:07.416Z workers Starting test run\n',
    '2025-07-01T09:58:07.416Z nodeRunner Starting sandbox [worker #0, session #mw0uc]\n',
    '2025-07-01T09:58:07.416Z nodeRunner Preparing sandbox [worker #0, session #mw0uc]\n',
    '2025-07-01T09:58:07.417Z nodeRunner Prepared sandbox [worker #0, session #mw0uc]\n',
    '2025-07-01T09:58:07.417Z workers [worker #0, session #mw0uc] Running tests in sandbox\n',
    "2025-07-01T09:58:07.417Z workers 'Configuring Jest (mw0uc)'\n",
    "2025-07-01T09:58:07.417Z workers 'Getting Jest test data (mw0uc)'\n",
    "2025-07-01T09:58:07.417Z workers 'Scheduling Jest Test Run (mw0uc): 2025-07-01T09:58:07.417Z'\n",
    "2025-07-01T09:58:07.431Z workers Sandbox (active) [mw0uc] error: TypeError: Cannot read properties of undefined (reading '3')\n" +
      '    at new CustomJSDOMEnvironment (<rootDir>/jest-jsdom-test-environment.cjs:8:9)\n' +
      '    at runTestInternal (<rootDir>/node_modules/jest-runner/build/runTest.js:236:23)\n' +
      '    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n' +
      '    at async runTest (<rootDir>/node_modules/jest-runner/build/runTest.js:444:34)\n',
    "2025-07-01T09:58:07.431Z model [ERROR] Runtime error: TypeError: Cannot read properties of undefined (reading '3')\n" +
      '    at new CustomJSDOMEnvironment (<rootDir>/jest-jsdom-test-environment.cjs:8:9)\n' +
      '    at runTestInternal (<rootDir>/node_modules/jest-runner/build/runTest.js:236:23)\n' +
      '    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n' +
      '    at async runTest (<rootDir>/node_modules/jest-runner/build/runTest.js:444:34)\n',
    '2025-07-01T09:58:07.431Z workers [mw0uc] Run 0 test(s), skipped 0 test(s)\n',
    "2025-07-01T09:58:07.431Z workers 'Jest Test Run Complete (mw0uc): 2025-07-01T09:58:07.431Z'\n",
    '2025-07-01T09:58:07.431Z workers [mw0uc] Sandbox is responsive, closing it\n',
    '2025-07-01T09:58:07.431Z runManager Test run finished\n',
    '2025-07-01T09:58:07.432Z project Processed console.log entries\n',
    '2025-07-01T09:58:07.432Z project Processed loading sequences\n',
    '2025-07-01T09:58:07.432Z project Processed executed tests\n',
    '2025-07-01T09:58:07.432Z project Processed code coverage\n',
    '2025-07-01T09:58:07.433Z runManager Test run result processed and sent to IDE\n',
    '2025-07-01T09:58:07.976Z fs File changed: tsconfig.json\n',
    '2025-07-01T09:58:07.979Z fs No changes detected for tsconfig.json\n',
    '2025-07-01T09:58:07.979Z extended-core File was not changed, but file markers may need to be synced\n',
    '2025-07-01T09:58:24.875Z fs File changed: package.json\n',
    '2025-07-01T09:58:24.880Z runManager Test run started; run priority: 2\n',
    '2025-07-01T09:58:24.880Z testTask Test files from affected: 0, from deleted or manually requested: 0, from recently changed: 0, from loaded by: 0, from failing: 0\n',
    '2025-07-01T09:58:24.880Z runManager Test run finished\n',
    '2025-07-01T09:58:24.880Z runManager Test run data re-queued\n',
    '2025-07-01T09:58:24.929Z fs File changed: package-lock.json\n',
    '2025-07-01T09:58:24.931Z runManager Cancelling test run, cancel requester priority: 2, current run priority: 2\n',
    '2025-07-01T09:58:24.933Z runManager Test run started; run priority: 2\n',
    '2025-07-01T09:58:24.933Z testTask Test files from affected: 0, from deleted or manually requested: 0, from recently changed: 0, from loaded by: 0, from failing: 0\n',
    '2025-07-01T09:58:24.933Z runManager Test run finished\n',
    '2025-07-01T09:58:24.933Z runManager Test run data re-queued\n',
    '2025-07-01T09:58:37.184Z fs File changed in editor: example.spec.ts\n',
    '2025-07-01T09:58:37.185Z runManager Cancelling test run, cancel requester priority: 2, current run priority: 2\n',
    '2025-07-01T09:58:37.189Z runManager Test run started; run priority: 2\n',
    '2025-07-01T09:58:37.189Z testTask Test files from affected: 1, from deleted or manually requested: 0, from recently changed: 0, from loaded by: 0, from failing: 0\n',
    '2025-07-01T09:58:37.189Z workers Starting test run\n',
    '2025-07-01T09:58:37.189Z nodeRunner Starting sandbox [worker #0, session #pgmh0]\n',
    '2025-07-01T09:58:37.190Z nodeRunner Preparing sandbox [worker #0, session #pgmh0]\n',
    '2025-07-01T09:58:37.190Z nodeRunner Prepared sandbox [worker #0, session #pgmh0]\n',
    '2025-07-01T09:58:37.190Z workers [worker #0, session #pgmh0] Running tests in sandbox\n',
    "2025-07-01T09:58:37.190Z workers 'Configuring Jest (pgmh0)'\n",
    "2025-07-01T09:58:37.191Z workers 'Getting Jest test data (pgmh0)'\n",
    "2025-07-01T09:58:37.191Z workers 'Scheduling Jest Test Run (pgmh0): 2025-07-01T09:58:37.190Z'\n",
    "2025-07-01T09:58:37.203Z workers Sandbox (active) [pgmh0] error: TypeError: Cannot read properties of undefined (reading '3')\n" +
      '    at new CustomJSDOMEnvironment (<rootDir>/jest-jsdom-test-environment.cjs:8:9)\n' +
      '    at runTestInternal (<rootDir>/node_modules/jest-runner/build/runTest.js:236:23)\n' +
      '    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n' +
      '    at async runTest (<rootDir>/node_modules/jest-runner/build/runTest.js:444:34)\n',
    "2025-07-01T09:58:37.203Z model [ERROR] Runtime error: TypeError: Cannot read properties of undefined (reading '3')\n" +
      '    at new CustomJSDOMEnvironment (<rootDir>/jest-jsdom-test-environment.cjs:8:9)\n' +
      '    at runTestInternal (<rootDir>/node_modules/jest-runner/build/runTest.js:236:23)\n' +
      '    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n' +
      '    at async runTest (<rootDir>/node_modules/jest-runner/build/runTest.js:444:34)\n',
    '2025-07-01T09:58:37.203Z workers [pgmh0] Run 0 test(s), skipped 0 test(s)\n',
    "2025-07-01T09:58:37.203Z workers 'Jest Test Run Complete (pgmh0): 2025-07-01T09:58:37.203Z'\n",
    '2025-07-01T09:58:37.203Z workers [pgmh0] Sandbox is responsive, closing it\n',
    '2025-07-01T09:58:37.203Z runManager Test run finished\n',
    '2025-07-01T09:58:37.203Z project Processed console.log entries\n',
    '2025-07-01T09:58:37.203Z project Processed loading sequences\n',
    '2025-07-01T09:58:37.203Z project Processed executed tests\n',
    '2025-07-01T09:58:37.204Z project Processed code coverage\n',
    '2025-07-01T09:58:37.205Z runManager Test run result processed and sent to IDE\n',
    '2025-07-01T09:58:37.851Z fs File changed: example.spec.ts\n',
    '2025-07-01T09:58:37.852Z fs No changes detected for example.spec.ts\n',
    '2025-07-01T09:58:37.852Z extended-core File was not changed, but file markers may need to be synced\n',
    '2025-07-01T09:58:42.769Z runManager Test run started; run priority: 2\n',
    '2025-07-01T09:58:42.769Z testTask Test files from affected: 0, from deleted or manually requested: 0, from recently changed: 0, from loaded by: 0, from failing: 0\n',
    '2025-07-01T09:58:42.769Z runManager Test run finished\n',
    '2025-07-01T09:58:42.769Z runManager Test run data re-queued\n',
    '2025-07-01T09:58:45.934Z fs File changed in editor: README.md\n',
    '2025-07-01T09:58:45.934Z runManager Cancelling test run, cancel requester priority: 2, current run priority: 2\n',
    '2025-07-01T09:58:45.938Z runManager Test run started; run priority: 2\n',
    '2025-07-01T09:58:45.938Z testTask Test files from affected: 0, from deleted or manually requested: 0, from recently changed: 1, from loaded by: 0, from failing: 0\n',
    '2025-07-01T09:58:45.938Z workers Starting test run\n',
    '2025-07-01T09:58:45.938Z nodeRunner Starting sandbox [worker #0, session #yeq0l]\n',
    '2025-07-01T09:58:45.938Z nodeRunner Preparing sandbox [worker #0, session #yeq0l]\n',
    '2025-07-01T09:58:45.938Z nodeRunner Prepared sandbox [worker #0, session #yeq0l]\n',
    '2025-07-01T09:58:45.938Z workers [worker #0, session #yeq0l] Running tests in sandbox\n',
    "2025-07-01T09:58:45.939Z workers 'Configuring Jest (yeq0l)'\n",
    "2025-07-01T09:58:45.939Z workers 'Getting Jest test data (yeq0l)'\n",
    "2025-07-01T09:58:45.939Z workers 'Scheduling Jest Test Run (yeq0l): 2025-07-01T09:58:45.939Z'\n",
    "2025-07-01T09:58:45.950Z workers Sandbox (active) [yeq0l] error: TypeError: Cannot read properties of undefined (reading '3')\n" +
      '    at new CustomJSDOMEnvironment (<rootDir>/jest-jsdom-test-environment.cjs:8:9)\n' +
      '    at runTestInternal (<rootDir>/node_modules/jest-runner/build/runTest.js:236:23)\n' +
      '    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n' +
      '    at async runTest (<rootDir>/node_modules/jest-runner/build/runTest.js:444:34)\n',
    "2025-07-01T09:58:45.950Z model [ERROR] Runtime error: TypeError: Cannot read properties of undefined (reading '3')\n" +
      '    at new CustomJSDOMEnvironment (<rootDir>/jest-jsdom-test-environment.cjs:8:9)\n' +
      '    at runTestInternal (<rootDir>/node_modules/jest-runner/build/runTest.js:236:23)\n' +
      '    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n' +
      '    at async runTest (<rootDir>/node_modules/jest-runner/build/runTest.js:444:34)\n',
    '2025-07-01T09:58:45.950Z workers [yeq0l] Run 0 test(s), skipped 0 test(s)\n',
    "2025-07-01T09:58:45.950Z workers 'Jest Test Run Complete (yeq0l): 2025-07-01T09:58:45.950Z'\n",
    '2025-07-01T09:58:45.950Z workers [yeq0l] Sandbox is responsive, closing it\n',
    '2025-07-01T09:58:45.950Z runManager Test run finished\n',
    '2025-07-01T09:58:45.950Z project Processed console.log entries\n',
    '2025-07-01T09:58:45.950Z project Processed loading sequences\n',
    '2025-07-01T09:58:45.950Z project Processed executed tests\n',
    '2025-07-01T09:58:45.950Z project Processed code coverage\n',
    '2025-07-01T09:58:45.951Z runManager Test run result processed and sent to IDE\n',
    '2025-07-01T09:58:50.348Z fs File changed in editor: README.md\n',
    '2025-07-01T09:58:50.352Z runManager Test run started; run priority: 2\n',
    '2025-07-01T09:58:50.352Z testTask Test files from affected: 0, from deleted or manually requested: 0, from recently changed: 1, from loaded by: 0, from failing: 0\n',
    '2025-07-01T09:58:50.353Z workers Starting test run\n',
    '2025-07-01T09:58:50.353Z nodeRunner Starting sandbox [worker #0, session #sfw5b]\n',
    '2025-07-01T09:58:50.353Z nodeRunner Preparing sandbox [worker #0, session #sfw5b]\n',
    '2025-07-01T09:58:50.353Z nodeRunner Prepared sandbox [worker #0, session #sfw5b]\n',
    '2025-07-01T09:58:50.353Z workers [worker #0, session #sfw5b] Running tests in sandbox\n',
    "2025-07-01T09:58:50.353Z workers 'Configuring Jest (sfw5b)'\n",
    "2025-07-01T09:58:50.354Z workers 'Getting Jest test data (sfw5b)'\n",
    "2025-07-01T09:58:50.354Z workers 'Scheduling Jest Test Run (sfw5b): 2025-07-01T09:58:50.354Z'\n",
    "2025-07-01T09:58:50.368Z workers Sandbox (active) [sfw5b] error: TypeError: Cannot read properties of undefined (reading '3')\n" +
      '    at new CustomJSDOMEnvironment (<rootDir>/jest-jsdom-test-environment.cjs:8:9)\n' +
      '    at runTestInternal (<rootDir>/node_modules/jest-runner/build/runTest.js:236:23)\n' +
      '    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n' +
      '    at async runTest (<rootDir>/node_modules/jest-runner/build/runTest.js:444:34)\n',
    "2025-07-01T09:58:50.368Z model [ERROR] Runtime error: TypeError: Cannot read properties of undefined (reading '3')\n" +
      '    at new CustomJSDOMEnvironment (<rootDir>/jest-jsdom-test-environment.cjs:8:9)\n' +
      '    at runTestInternal (<rootDir>/node_modules/jest-runner/build/runTest.js:236:23)\n' +
      '    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n' +
      '    at async runTest (<rootDir>/node_modules/jest-runner/build/runTest.js:444:34)\n',
    '2025-07-01T09:58:50.368Z workers [sfw5b] Run 0 test(s), skipped 0 test(s)\n',
    "2025-07-01T09:58:50.368Z workers 'Jest Test Run Complete (sfw5b): 2025-07-01T09:58:50.368Z'\n",
    '2025-07-01T09:58:50.368Z workers [sfw5b] Sandbox is responsive, closing it\n',
    '2025-07-01T09:58:50.368Z runManager Test run finished\n',
    '2025-07-01T09:58:50.368Z project Processed console.log entries\n',
    '2025-07-01T09:58:50.368Z project Processed loading sequences\n',
    '2025-07-01T09:58:50.368Z project Processed executed tests\n',
    '2025-07-01T09:58:50.368Z project Processed code coverage\n',
    '2025-07-01T09:58:50.370Z runManager Test run result processed and sent to IDE\n',
    '2025-07-01T09:58:50.627Z fs File changed in editor: README.md\n',
    '2025-07-01T09:58:50.631Z runManager Test run started; run priority: 2\n',
    '2025-07-01T09:58:50.631Z testTask Test files from affected: 0, from deleted or manually requested: 0, from recently changed: 1, from loaded by: 0, from failing: 0\n',
    '2025-07-01T09:58:50.631Z workers Starting test run\n',
    '2025-07-01T09:58:50.631Z nodeRunner Starting sandbox [worker #0, session #34ngh]\n',
    '2025-07-01T09:58:50.632Z nodeRunner Preparing sandbox [worker #0, session #34ngh]\n',
    '2025-07-01T09:58:50.632Z nodeRunner Prepared sandbox [worker #0, session #34ngh]\n',
    '2025-07-01T09:58:50.632Z workers [worker #0, session #34ngh] Running tests in sandbox\n',
    "2025-07-01T09:58:50.632Z workers 'Configuring Jest (34ngh)'\n",
    "2025-07-01T09:58:50.632Z workers 'Getting Jest test data (34ngh)'\n",
    "2025-07-01T09:58:50.632Z workers 'Scheduling Jest Test Run (34ngh): 2025-07-01T09:58:50.632Z'\n",
    "2025-07-01T09:58:50.645Z workers Sandbox (active) [34ngh] error: TypeError: Cannot read properties of undefined (reading '3')\n" +
      '    at new CustomJSDOMEnvironment (<rootDir>/jest-jsdom-test-environment.cjs:8:9)\n' +
      '    at runTestInternal (<rootDir>/node_modules/jest-runner/build/runTest.js:236:23)\n' +
      '    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n' +
      '    at async runTest (<rootDir>/node_modules/jest-runner/build/runTest.js:444:34)\n',
    "2025-07-01T09:58:50.645Z model [ERROR] Runtime error: TypeError: Cannot read properties of undefined (reading '3')\n" +
      '    at new CustomJSDOMEnvironment (<rootDir>/jest-jsdom-test-environment.cjs:8:9)\n' +
      '    at runTestInternal (<rootDir>/node_modules/jest-runner/build/runTest.js:236:23)\n' +
      '    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n' +
      '    at async runTest (<rootDir>/node_modules/jest-runner/build/runTest.js:444:34)\n',
    '2025-07-01T09:58:50.645Z workers [34ngh] Run 0 test(s), skipped 0 test(s)\n',
    "2025-07-01T09:58:50.645Z workers 'Jest Test Run Complete (34ngh): 2025-07-01T09:58:50.645Z'\n",
    '2025-07-01T09:58:50.645Z workers [34ngh] Sandbox is responsive, closing it\n',
    '2025-07-01T09:58:50.645Z runManager Test run finished\n',
    '2025-07-01T09:58:50.646Z project Processed console.log entries\n',
    '2025-07-01T09:58:50.646Z project Processed loading sequences\n',
    '2025-07-01T09:58:50.646Z project Processed executed tests\n',
    '2025-07-01T09:58:50.646Z project Processed code coverage\n',
    '2025-07-01T09:58:50.647Z runManager Test run result processed and sent to IDE\n',
    '2025-07-01T09:58:50.770Z fs File changed in editor: README.md\n',
    '2025-07-01T09:58:50.774Z runManager Test run started; run priority: 2\n',
    '2025-07-01T09:58:50.774Z testTask Test files from affected: 0, from deleted or manually requested: 0, from recently changed: 1, from loaded by: 0, from failing: 0\n',
    '2025-07-01T09:58:50.775Z workers Starting test run\n',
    '2025-07-01T09:58:50.775Z nodeRunner Starting sandbox [worker #0, session #lwip9]\n',
    '2025-07-01T09:58:50.775Z nodeRunner Preparing sandbox [worker #0, session #lwip9]\n',
    '2025-07-01T09:58:50.775Z nodeRunner Prepared sandbox [worker #0, session #lwip9]\n',
    '2025-07-01T09:58:50.775Z workers [worker #0, session #lwip9] Running tests in sandbox\n',
    "2025-07-01T09:58:50.776Z workers 'Configuring Jest (lwip9)'\n",
    "2025-07-01T09:58:50.776Z workers 'Getting Jest test data (lwip9)'\n",
    "2025-07-01T09:58:50.776Z workers 'Scheduling Jest Test Run (lwip9): 2025-07-01T09:58:50.776Z'\n",
    "2025-07-01T09:58:50.785Z workers Sandbox (active) [lwip9] error: TypeError: Cannot read properties of undefined (reading '3')\n" +
      '    at new CustomJSDOMEnvironment (<rootDir>/jest-jsdom-test-environment.cjs:8:9)\n' +
      '    at runTestInternal (<rootDir>/node_modules/jest-runner/build/runTest.js:236:23)\n' +
      '    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n' +
      '    at async runTest (<rootDir>/node_modules/jest-runner/build/runTest.js:444:34)\n',
    "2025-07-01T09:58:50.786Z model [ERROR] Runtime error: TypeError: Cannot read properties of undefined (reading '3')\n" +
      '    at new CustomJSDOMEnvironment (<rootDir>/jest-jsdom-test-environment.cjs:8:9)\n' +
      '    at runTestInternal (<rootDir>/node_modules/jest-runner/build/runTest.js:236:23)\n' +
      '    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n' +
      '    at async runTest (<rootDir>/node_modules/jest-runner/build/runTest.js:444:34)\n',
    '2025-07-01T09:58:50.786Z workers [lwip9] Run 0 test(s), skipped 0 test(s)\n',
    "2025-07-01T09:58:50.786Z workers 'Jest Test Run Complete (lwip9): 2025-07-01T09:58:50.785Z'\n",
    '2025-07-01T09:58:50.786Z workers [lwip9] Sandbox is responsive, closing it\n',
    '2025-07-01T09:58:50.786Z runManager Test run finished\n',
    '2025-07-01T09:58:50.786Z project Processed console.log entries\n',
    '2025-07-01T09:58:50.786Z project Processed loading sequences\n',
    '2025-07-01T09:58:50.786Z project Processed executed tests\n',
    '2025-07-01T09:58:50.786Z project Processed code coverage\n',
    '2025-07-01T09:58:50.787Z runManager Test run result processed and sent to IDE\n',
    '2025-07-01T09:58:50.959Z fs File changed in editor: README.md\n',
    '2025-07-01T09:58:50.963Z runManager Test run started; run priority: 2\n',
    '2025-07-01T09:58:50.963Z testTask Test files from affected: 0, from deleted or manually requested: 0, from recently changed: 1, from loaded by: 0, from failing: 0\n',
    '2025-07-01T09:58:50.964Z workers Starting test run\n',
    '2025-07-01T09:58:50.964Z nodeRunner Starting sandbox [worker #0, session #i7iel]\n',
    '2025-07-01T09:58:50.964Z nodeRunner Preparing sandbox [worker #0, session #i7iel]\n',
    '2025-07-01T09:58:50.964Z nodeRunner Prepared sandbox [worker #0, session #i7iel]\n',
    '2025-07-01T09:58:50.964Z workers [worker #0, session #i7iel] Running tests in sandbox\n',
    "2025-07-01T09:58:50.964Z workers 'Configuring Jest (i7iel)'\n",
    "2025-07-01T09:58:50.965Z workers 'Getting Jest test data (i7iel)'\n",
    "2025-07-01T09:58:50.965Z workers 'Scheduling Jest Test Run (i7iel): 2025-07-01T09:58:50.965Z'\n",
    "2025-07-01T09:58:50.978Z workers Sandbox (active) [i7iel] error: TypeError: Cannot read properties of undefined (reading '3')\n" +
      '    at new CustomJSDOMEnvironment (<rootDir>/jest-jsdom-test-environment.cjs:8:9)\n' +
      '    at runTestInternal (<rootDir>/node_modules/jest-runner/build/runTest.js:236:23)\n' +
      '    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n' +
      '    at async runTest (<rootDir>/node_modules/jest-runner/build/runTest.js:444:34)\n',
    "2025-07-01T09:58:50.979Z model [ERROR] Runtime error: TypeError: Cannot read properties of undefined (reading '3')\n" +
      '    at new CustomJSDOMEnvironment (<rootDir>/jest-jsdom-test-environment.cjs:8:9)\n' +
      '    at runTestInternal (<rootDir>/node_modules/jest-runner/build/runTest.js:236:23)\n' +
      '    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n' +
      '    at async runTest (<rootDir>/node_modules/jest-runner/build/runTest.js:444:34)\n',
    '2025-07-01T09:58:50.979Z workers [i7iel] Run 0 test(s), skipped 0 test(s)\n',
    "2025-07-01T09:58:50.979Z workers 'Jest Test Run Complete (i7iel): 2025-07-01T09:58:50.978Z'\n",
    '2025-07-01T09:58:50.979Z workers [i7iel] Sandbox is responsive, closing it\n',
    '2025-07-01T09:58:50.979Z runManager Test run finished\n',
    '2025-07-01T09:58:50.979Z project Processed console.log entries\n',
    '2025-07-01T09:58:50.979Z project Processed loading sequences\n',
    '2025-07-01T09:58:50.979Z project Processed executed tests\n',
    '2025-07-01T09:58:50.979Z project Processed code coverage\n',
    '2025-07-01T09:58:50.981Z runManager Test run result processed and sent to IDE\n',
    '2025-07-01T09:58:51.248Z fs File changed in editor: README.md\n',
    '2025-07-01T09:58:51.252Z runManager Test run started; run priority: 2\n',
    '2025-07-01T09:58:51.252Z testTask Test files from affected: 0, from deleted or manually requested: 0, from recently changed: 1, from loaded by: 0, from failing: 0\n',
    '2025-07-01T09:58:51.253Z workers Starting test run\n',
    '2025-07-01T09:58:51.253Z nodeRunner Starting sandbox [worker #0, session #xje32]\n',
    '2025-07-01T09:58:51.253Z nodeRunner Preparing sandbox [worker #0, session #xje32]\n',
    '2025-07-01T09:58:51.253Z nodeRunner Prepared sandbox [worker #0, session #xje32]\n',
    '2025-07-01T09:58:51.253Z workers [worker #0, session #xje32] Running tests in sandbox\n',
    "2025-07-01T09:58:51.254Z workers 'Configuring Jest (xje32)'\n",
    "2025-07-01T09:58:51.254Z workers 'Getting Jest test data (xje32)'\n",
    "2025-07-01T09:58:51.254Z workers 'Scheduling Jest Test Run (xje32): 2025-07-01T09:58:51.253Z'\n",
    "2025-07-01T09:58:51.265Z workers Sandbox (active) [xje32] error: TypeError: Cannot read properties of undefined (reading '3')\n" +
      '    at new CustomJSDOMEnvironment (<rootDir>/jest-jsdom-test-environment.cjs:8:9)\n' +
      '    at runTestInternal (<rootDir>/node_modules/jest-runner/build/runTest.js:236:23)\n' +
      '    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n' +
      '    at async runTest (<rootDir>/node_modules/jest-runner/build/runTest.js:444:34)\n',
    "2025-07-01T09:58:51.265Z model [ERROR] Runtime error: TypeError: Cannot read properties of undefined (reading '3')\n" +
      '    at new CustomJSDOMEnvironment (<rootDir>/jest-jsdom-test-environment.cjs:8:9)\n' +
      '    at runTestInternal (<rootDir>/node_modules/jest-runner/build/runTest.js:236:23)\n' +
      '    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n' +
      '    at async runTest (<rootDir>/node_modules/jest-runner/build/runTest.js:444:34)\n',
    '2025-07-01T09:58:51.265Z workers [xje32] Run 0 test(s), skipped 0 test(s)\n',
    "2025-07-01T09:58:51.265Z workers 'Jest Test Run Complete (xje32): 2025-07-01T09:58:51.265Z'\n",
    '2025-07-01T09:58:51.265Z workers [xje32] Sandbox is responsive, closing it\n',
    '2025-07-01T09:58:51.265Z runManager Test run finished\n',
    '2025-07-01T09:58:51.266Z project Processed console.log entries\n',
    '2025-07-01T09:58:51.266Z project Processed loading sequences\n',
    '2025-07-01T09:58:51.266Z project Processed executed tests\n',
    '2025-07-01T09:58:51.266Z project Processed code coverage\n',
    '2025-07-01T09:58:51.268Z runManager Test run result processed and sent to IDE\n',
    '2025-07-01T09:58:51.509Z fs File changed in editor: README.md\n',
    '2025-07-01T09:58:51.514Z runManager Test run started; run priority: 2\n',
    '2025-07-01T09:58:51.514Z testTask Test files from affected: 0, from deleted or manually requested: 0, from recently changed: 1, from loaded by: 0, from failing: 0\n',
    '2025-07-01T09:58:51.514Z workers Starting test run\n',
    '2025-07-01T09:58:51.514Z nodeRunner Starting sandbox [worker #0, session #phlxn]\n',
    '2025-07-01T09:58:51.514Z nodeRunner Preparing sandbox [worker #0, session #phlxn]\n',
    '2025-07-01T09:58:51.514Z nodeRunner Prepared sandbox [worker #0, session #phlxn]\n',
    '2025-07-01T09:58:51.514Z workers [worker #0, session #phlxn] Running tests in sandbox\n',
    "2025-07-01T09:58:51.515Z workers 'Configuring Jest (phlxn)'\n",
    "2025-07-01T09:58:51.515Z workers 'Getting Jest test data (phlxn)'\n",
    "2025-07-01T09:58:51.515Z workers 'Scheduling Jest Test Run (phlxn): 2025-07-01T09:58:51.515Z'\n",
    "2025-07-01T09:58:51.528Z workers Sandbox (active) [phlxn] error: TypeError: Cannot read properties of undefined (reading '3')\n" +
      '    at new CustomJSDOMEnvironment (<rootDir>/jest-jsdom-test-environment.cjs:8:9)\n' +
      '    at runTestInternal (<rootDir>/node_modules/jest-runner/build/runTest.js:236:23)\n' +
      '    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n' +
      '    at async runTest (<rootDir>/node_modules/jest-runner/build/runTest.js:444:34)\n',
    "2025-07-01T09:58:51.528Z model [ERROR] Runtime error: TypeError: Cannot read properties of undefined (reading '3')\n" +
      '    at new CustomJSDOMEnvironment (<rootDir>/jest-jsdom-test-environment.cjs:8:9)\n' +
      '    at runTestInternal (<rootDir>/node_modules/jest-runner/build/runTest.js:236:23)\n' +
      '    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n' +
      '    at async runTest (<rootDir>/node_modules/jest-runner/build/runTest.js:444:34)\n',
    '2025-07-01T09:58:51.528Z workers [phlxn] Run 0 test(s), skipped 0 test(s)\n',
    "2025-07-01T09:58:51.528Z workers 'Jest Test Run Complete (phlxn): 2025-07-01T09:58:51.528Z'\n",
    '2025-07-01T09:58:51.528Z workers [phlxn] Sandbox is responsive, closing it\n',
    '2025-07-01T09:58:51.528Z runManager Test run finished\n',
    '2025-07-01T09:58:51.529Z project Processed console.log entries\n',
    '2025-07-01T09:58:51.529Z project Processed loading sequences\n',
    '2025-07-01T09:58:51.529Z project Processed executed tests\n',
    '2025-07-01T09:58:51.529Z project Processed code coverage\n',
    '2025-07-01T09:58:51.529Z runManager Test run result processed and sent to IDE\n',
    '2025-07-01T09:58:52.299Z fs File changed in editor: README.md\n',
    '2025-07-01T09:58:52.303Z runManager Test run started; run priority: 2\n',
    '2025-07-01T09:58:52.303Z testTask Test files from affected: 0, from deleted or manually requested: 0, from recently changed: 1, from loaded by: 0, from failing: 0\n',
    '2025-07-01T09:58:52.303Z workers Starting test run\n',
    '2025-07-01T09:58:52.304Z nodeRunner Starting sandbox [worker #0, session #jep3g]\n',
    '2025-07-01T09:58:52.304Z nodeRunner Preparing sandbox [worker #0, session #jep3g]\n',
    '2025-07-01T09:58:52.304Z nodeRunner Prepared sandbox [worker #0, session #jep3g]\n',
    '2025-07-01T09:58:52.304Z workers [worker #0, session #jep3g] Running tests in sandbox\n',
    "2025-07-01T09:58:52.304Z workers 'Configuring Jest (jep3g)'\n",
    "2025-07-01T09:58:52.304Z workers 'Getting Jest test data (jep3g)'\n",
    "2025-07-01T09:58:52.305Z workers 'Scheduling Jest Test Run (jep3g): 2025-07-01T09:58:52.304Z'\n",
    "2025-07-01T09:58:52.313Z workers Sandbox (active) [jep3g] error: TypeError: Cannot read properties of undefined (reading '3')\n" +
      '    at new CustomJSDOMEnvironment (<rootDir>/jest-jsdom-test-environment.cjs:8:9)\n' +
      '    at runTestInternal (<rootDir>/node_modules/jest-runner/build/runTest.js:236:23)\n' +
      '    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n' +
      '    at async runTest (<rootDir>/node_modules/jest-runner/build/runTest.js:444:34)\n',
    "2025-07-01T09:58:52.313Z model [ERROR] Runtime error: TypeError: Cannot read properties of undefined (reading '3')\n" +
      '    at new CustomJSDOMEnvironment (<rootDir>/jest-jsdom-test-environment.cjs:8:9)\n' +
      '    at runTestInternal (<rootDir>/node_modules/jest-runner/build/runTest.js:236:23)\n' +
      '    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n' +
      '    at async runTest (<rootDir>/node_modules/jest-runner/build/runTest.js:444:34)\n',
    '2025-07-01T09:58:52.313Z workers [jep3g] Run 0 test(s), skipped 0 test(s)\n',
    "2025-07-01T09:58:52.314Z workers 'Jest Test Run Complete (jep3g): 2025-07-01T09:58:52.313Z'\n",
    '2025-07-01T09:58:52.314Z workers [jep3g] Sandbox is responsive, closing it\n',
    '2025-07-01T09:58:52.314Z runManager Test run finished\n',
    '2025-07-01T09:58:52.314Z project Processed console.log entries\n',
    '2025-07-01T09:58:52.314Z project Processed loading sequences\n',
    '2025-07-01T09:58:52.314Z project Processed executed tests\n',
    '2025-07-01T09:58:52.314Z project Processed code coverage\n',
    '2025-07-01T09:58:52.315Z runManager Test run result processed and sent to IDE\n',
    '2025-07-01T09:58:53.524Z fs File changed in editor: README.md\n',
    '2025-07-01T09:58:53.527Z runManager Test run started; run priority: 2\n',
    '2025-07-01T09:58:53.527Z testTask Test files from affected: 0, from deleted or manually requested: 0, from recently changed: 1, from loaded by: 0, from failing: 0\n',
    '2025-07-01T09:58:53.527Z workers Starting test run\n',
    '2025-07-01T09:58:53.527Z nodeRunner Starting sandbox [worker #0, session #uv6i8]\n',
    '2025-07-01T09:58:53.527Z nodeRunner Preparing sandbox [worker #0, session #uv6i8]\n',
    '2025-07-01T09:58:53.527Z nodeRunner Prepared sandbox [worker #0, session #uv6i8]\n',
    '2025-07-01T09:58:53.527Z workers [worker #0, session #uv6i8] Running tests in sandbox\n',
    "2025-07-01T09:58:53.528Z workers 'Configuring Jest (uv6i8)'\n",
    "2025-07-01T09:58:53.528Z workers 'Getting Jest test data (uv6i8)'\n",
    "2025-07-01T09:58:53.528Z workers 'Scheduling Jest Test Run (uv6i8): 2025-07-01T09:58:53.528Z'\n",
    "2025-07-01T09:58:53.538Z workers Sandbox (active) [uv6i8] error: TypeError: Cannot read properties of undefined (reading '3')\n" +
      '    at new CustomJSDOMEnvironment (<rootDir>/jest-jsdom-test-environment.cjs:8:9)\n' +
      '    at runTestInternal (<rootDir>/node_modules/jest-runner/build/runTest.js:236:23)\n' +
      '    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n' +
      '    at async runTest (<rootDir>/node_modules/jest-runner/build/runTest.js:444:34)\n',
    "2025-07-01T09:58:53.538Z model [ERROR] Runtime error: TypeError: Cannot read properties of undefined (reading '3')\n" +
      '    at new CustomJSDOMEnvironment (<rootDir>/jest-jsdom-test-environment.cjs:8:9)\n' +
      '    at runTestInternal (<rootDir>/node_modules/jest-runner/build/runTest.js:236:23)\n' +
      '    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n' +
      '    at async runTest (<rootDir>/node_modules/jest-runner/build/runTest.js:444:34)\n',
    '2025-07-01T09:58:53.538Z workers [uv6i8] Run 0 test(s), skipped 0 test(s)\n',
    "2025-07-01T09:58:53.539Z workers 'Jest Test Run Complete (uv6i8): 2025-07-01T09:58:53.538Z'\n",
    '2025-07-01T09:58:53.539Z workers [uv6i8] Sandbox is responsive, closing it\n',
    '2025-07-01T09:58:53.539Z runManager Test run finished\n',
    '2025-07-01T09:58:53.539Z project Processed console.log entries\n',
    '2025-07-01T09:58:53.539Z project Processed loading sequences\n',
    '2025-07-01T09:58:53.539Z project Processed executed tests\n',
    '2025-07-01T09:58:53.539Z project Processed code coverage\n',
    '2025-07-01T09:58:53.540Z runManager Test run result processed and sent to IDE\n',
    '2025-07-01T09:58:53.985Z fs File changed in editor: README.md\n',
    '2025-07-01T09:58:53.989Z runManager Test run started; run priority: 2\n',
    '2025-07-01T09:58:53.989Z testTask Test files from affected: 0, from deleted or manually requested: 0, from recently changed: 1, from loaded by: 0, from failing: 0\n',
    '2025-07-01T09:58:53.990Z workers Starting test run\n',
    '2025-07-01T09:58:53.990Z nodeRunner Starting sandbox [worker #0, session #c68vs]\n',
    '2025-07-01T09:58:53.990Z nodeRunner Preparing sandbox [worker #0, session #c68vs]\n',
    '2025-07-01T09:58:53.990Z nodeRunner Prepared sandbox [worker #0, session #c68vs]\n',
    '2025-07-01T09:58:53.990Z workers [worker #0, session #c68vs] Running tests in sandbox\n',
    "2025-07-01T09:58:53.991Z workers 'Configuring Jest (c68vs)'\n",
    "2025-07-01T09:58:53.991Z workers 'Getting Jest test data (c68vs)'\n",
    "2025-07-01T09:58:53.991Z workers 'Scheduling Jest Test Run (c68vs): 2025-07-01T09:58:53.991Z'\n",
    "2025-07-01T09:58:54.000Z workers Sandbox (active) [c68vs] error: TypeError: Cannot read properties of undefined (reading '3')\n" +
      '    at new CustomJSDOMEnvironment (<rootDir>/jest-jsdom-test-environment.cjs:8:9)\n' +
      '    at runTestInternal (<rootDir>/node_modules/jest-runner/build/runTest.js:236:23)\n' +
      '    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n' +
      '    at async runTest (<rootDir>/node_modules/jest-runner/build/runTest.js:444:34)\n',
    "2025-07-01T09:58:54.000Z model [ERROR] Runtime error: TypeError: Cannot read properties of undefined (reading '3')\n" +
      '    at new CustomJSDOMEnvironment (<rootDir>/jest-jsdom-test-environment.cjs:8:9)\n' +
      '    at runTestInternal (<rootDir>/node_modules/jest-runner/build/runTest.js:236:23)\n' +
      '    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n' +
      '    at async runTest (<rootDir>/node_modules/jest-runner/build/runTest.js:444:34)\n',
    '2025-07-01T09:58:54.000Z workers [c68vs] Run 0 test(s), skipped 0 test(s)\n',
    "2025-07-01T09:58:54.001Z workers 'Jest Test Run Complete (c68vs): 2025-07-01T09:58:54.000Z'\n",
    '2025-07-01T09:58:54.001Z workers [c68vs] Sandbox is responsive, closing it\n',
    '2025-07-01T09:58:54.001Z runManager Test run finished\n',
    '2025-07-01T09:58:54.001Z project Processed console.log entries\n',
    '2025-07-01T09:58:54.001Z project Processed loading sequences\n',
    '2025-07-01T09:58:54.001Z project Processed executed tests\n',
    '2025-07-01T09:58:54.001Z project Processed code coverage\n',
    '2025-07-01T09:58:54.002Z runManager Test run result processed and sent to IDE\n',
    '2025-07-01T09:58:54.323Z fs File changed in editor: README.md\n',
    '2025-07-01T09:58:54.328Z runManager Test run started; run priority: 2\n',
    '2025-07-01T09:58:54.328Z testTask Test files from affected: 0, from deleted or manually requested: 0, from recently changed: 1, from loaded by: 0, from failing: 0\n',
    '2025-07-01T09:58:54.328Z workers Starting test run\n',
    '2025-07-01T09:58:54.328Z nodeRunner Starting sandbox [worker #0, session #g0eyk]\n',
    '2025-07-01T09:58:54.328Z nodeRunner Preparing sandbox [worker #0, session #g0eyk]\n',
    '2025-07-01T09:58:54.329Z nodeRunner Prepared sandbox [worker #0, session #g0eyk]\n',
    '2025-07-01T09:58:54.329Z workers [worker #0, session #g0eyk] Running tests in sandbox\n',
    "2025-07-01T09:58:54.329Z workers 'Configuring Jest (g0eyk)'\n",
    "2025-07-01T09:58:54.329Z workers 'Getting Jest test data (g0eyk)'\n",
    "2025-07-01T09:58:54.329Z workers 'Scheduling Jest Test Run (g0eyk): 2025-07-01T09:58:54.329Z'\n",
    "2025-07-01T09:58:54.339Z workers Sandbox (active) [g0eyk] error: TypeError: Cannot read properties of undefined (reading '3')\n" +
      '    at new CustomJSDOMEnvironment (<rootDir>/jest-jsdom-test-environment.cjs:8:9)\n' +
      '    at runTestInternal (<rootDir>/node_modules/jest-runner/build/runTest.js:236:23)\n' +
      '    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n' +
      '    at async runTest (<rootDir>/node_modules/jest-runner/build/runTest.js:444:34)\n',
    "2025-07-01T09:58:54.339Z model [ERROR] Runtime error: TypeError: Cannot read properties of undefined (reading '3')\n" +
      '    at new CustomJSDOMEnvironment (<rootDir>/jest-jsdom-test-environment.cjs:8:9)\n' +
      '    at runTestInternal (<rootDir>/node_modules/jest-runner/build/runTest.js:236:23)\n' +
      '    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n' +
      '    at async runTest (<rootDir>/node_modules/jest-runner/build/runTest.js:444:34)\n',
    '2025-07-01T09:58:54.339Z workers [g0eyk] Run 0 test(s), skipped 0 test(s)\n',
    "2025-07-01T09:58:54.339Z workers 'Jest Test Run Complete (g0eyk): 2025-07-01T09:58:54.339Z'\n",
    '2025-07-01T09:58:54.339Z workers [g0eyk] Sandbox is responsive, closing it\n',
    '2025-07-01T09:58:54.340Z runManager Test run finished\n',
    '2025-07-01T09:58:54.340Z project Processed console.log entries\n',
    '2025-07-01T09:58:54.340Z project Processed loading sequences\n',
    '2025-07-01T09:58:54.340Z project Processed executed tests\n',
    '2025-07-01T09:58:54.340Z project Processed code coverage\n',
    '2025-07-01T09:58:54.341Z runManager Test run result processed and sent to IDE\n',
    '2025-07-01T09:58:54.951Z fs File changed in editor: README.md\n',
    '2025-07-01T09:58:54.955Z runManager Test run started; run priority: 2\n',
    '2025-07-01T09:58:54.955Z testTask Test files from affected: 0, from deleted or manually requested: 0, from recently changed: 1, from loaded by: 0, from failing: 0\n',
    '2025-07-01T09:58:54.956Z workers Starting test run\n',
    '2025-07-01T09:58:54.956Z nodeRunner Starting sandbox [worker #0, session #apy11]\n',
    '2025-07-01T09:58:54.956Z nodeRunner Preparing sandbox [worker #0, session #apy11]\n',
    '2025-07-01T09:58:54.956Z nodeRunner Prepared sandbox [worker #0, session #apy11]\n',
    '2025-07-01T09:58:54.956Z workers [worker #0, session #apy11] Running tests in sandbox\n',
    "2025-07-01T09:58:54.957Z workers 'Configuring Jest (apy11)'\n",
    "2025-07-01T09:58:54.957Z workers 'Getting Jest test data (apy11)'\n",
    "2025-07-01T09:58:54.957Z workers 'Scheduling Jest Test Run (apy11): 2025-07-01T09:58:54.957Z'\n",
    "2025-07-01T09:58:54.968Z workers Sandbox (active) [apy11] error: TypeError: Cannot read properties of undefined (reading '3')\n" +
      '    at new CustomJSDOMEnvironment (<rootDir>/jest-jsdom-test-environment.cjs:8:9)\n' +
      '    at runTestInternal (<rootDir>/node_modules/jest-runner/build/runTest.js:236:23)\n' +
      '    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n' +
      '    at async runTest (<rootDir>/node_modules/jest-runner/build/runTest.js:444:34)\n',
    "2025-07-01T09:58:54.969Z model [ERROR] Runtime error: TypeError: Cannot read properties of undefined (reading '3')\n" +
      '    at new CustomJSDOMEnvironment (<rootDir>/jest-jsdom-test-environment.cjs:8:9)\n' +
      '    at runTestInternal (<rootDir>/node_modules/jest-runner/build/runTest.js:236:23)\n' +
      '    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n' +
      '    at async runTest (<rootDir>/node_modules/jest-runner/build/runTest.js:444:34)\n',
    '2025-07-01T09:58:54.969Z workers [apy11] Run 0 test(s), skipped 0 test(s)\n',
    "2025-07-01T09:58:54.969Z workers 'Jest Test Run Complete (apy11): 2025-07-01T09:58:54.968Z'\n",
    '2025-07-01T09:58:54.969Z workers [apy11] Sandbox is responsive, closing it\n',
    '2025-07-01T09:58:54.969Z runManager Test run finished\n',
    '2025-07-01T09:58:54.969Z project Processed console.log entries\n',
    '2025-07-01T09:58:54.969Z project Processed loading sequences\n',
    '2025-07-01T09:58:54.969Z project Processed executed tests\n',
    '2025-07-01T09:58:54.969Z project Processed code coverage\n',
    '2025-07-01T09:58:54.971Z runManager Test run result processed and sent to IDE\n',
    '2025-07-01T09:58:55.254Z fs File changed in editor: README.md\n',
    '2025-07-01T09:58:55.258Z runManager Test run started; run priority: 2\n',
    '2025-07-01T09:58:55.258Z testTask Test files from affected: 0, from deleted or manually requested: 0, from recently changed: 1, from loaded by: 0, from failing: 0\n',
    '2025-07-01T09:58:55.258Z workers Starting test run\n',
    '2025-07-01T09:58:55.258Z nodeRunner Starting sandbox [worker #0, session #9fntl]\n',
    '2025-07-01T09:58:55.259Z nodeRunner Preparing sandbox [worker #0, session #9fntl]\n',
    '2025-07-01T09:58:55.259Z nodeRunner Prepared sandbox [worker #0, session #9fntl]\n',
    '2025-07-01T09:58:55.259Z workers [worker #0, session #9fntl] Running tests in sandbox\n',
    "2025-07-01T09:58:55.260Z workers 'Configuring Jest (9fntl)'\n",
    "2025-07-01T09:58:55.260Z workers 'Getting Jest test data (9fntl)'\n",
    "2025-07-01T09:58:55.260Z workers 'Scheduling Jest Test Run (9fntl): 2025-07-01T09:58:55.260Z'\n",
    "2025-07-01T09:58:55.270Z workers Sandbox (active) [9fntl] error: TypeError: Cannot read properties of undefined (reading '3')\n" +
      '    at new CustomJSDOMEnvironment (<rootDir>/jest-jsdom-test-environment.cjs:8:9)\n' +
      '    at runTestInternal (<rootDir>/node_modules/jest-runner/build/runTest.js:236:23)\n' +
      '    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n' +
      '    at async runTest (<rootDir>/node_modules/jest-runner/build/runTest.js:444:34)\n',
    "2025-07-01T09:58:55.270Z model [ERROR] Runtime error: TypeError: Cannot read properties of undefined (reading '3')\n" +
      '    at new CustomJSDOMEnvironment (<rootDir>/jest-jsdom-test-environment.cjs:8:9)\n' +
      '    at runTestInternal (<rootDir>/node_modules/jest-runner/build/runTest.js:236:23)\n' +
      '    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n' +
      '    at async runTest (<rootDir>/node_modules/jest-runner/build/runTest.js:444:34)\n',
    '2025-07-01T09:58:55.270Z workers [9fntl] Run 0 test(s), skipped 0 test(s)\n',
    "2025-07-01T09:58:55.270Z workers 'Jest Test Run Complete (9fntl): 2025-07-01T09:58:55.270Z'\n",
    '2025-07-01T09:58:55.270Z workers [9fntl] Sandbox is responsive, closing it\n',
    '2025-07-01T09:58:55.271Z runManager Test run finished\n',
    '2025-07-01T09:58:55.271Z project Processed console.log entries\n',
    '2025-07-01T09:58:55.271Z project Processed loading sequences\n',
    '2025-07-01T09:58:55.271Z project Processed executed tests\n',
    '2025-07-01T09:58:55.271Z project Processed code coverage\n',
    '2025-07-01T09:58:55.272Z runManager Test run result processed and sent to IDE\n',
    '2025-07-01T09:58:55.405Z fs File changed in editor: README.md\n',
    '2025-07-01T09:58:55.409Z runManager Test run started; run priority: 2\n',
    '2025-07-01T09:58:55.409Z testTask Test files from affected: 0, from deleted or manually requested: 0, from recently changed: 1, from loaded by: 0, from failing: 0\n',
    '2025-07-01T09:58:55.409Z workers Starting test run\n',
    '2025-07-01T09:58:55.409Z nodeRunner Starting sandbox [worker #0, session #e1co6]\n',
    '2025-07-01T09:58:55.409Z nodeRunner Preparing sandbox [worker #0, session #e1co6]\n',
    '2025-07-01T09:58:55.409Z nodeRunner Prepared sandbox [worker #0, session #e1co6]\n',
    '2025-07-01T09:58:55.409Z workers [worker #0, session #e1co6] Running tests in sandbox\n',
    "2025-07-01T09:58:55.410Z workers 'Configuring Jest (e1co6)'\n",
    "2025-07-01T09:58:55.410Z workers 'Getting Jest test data (e1co6)'\n",
    "2025-07-01T09:58:55.410Z workers 'Scheduling Jest Test Run (e1co6): 2025-07-01T09:58:55.410Z'\n",
    "2025-07-01T09:58:55.421Z workers Sandbox (active) [e1co6] error: TypeError: Cannot read properties of undefined (reading '3')\n" +
      '    at new CustomJSDOMEnvironment (<rootDir>/jest-jsdom-test-environment.cjs:8:9)\n' +
      '    at runTestInternal (<rootDir>/node_modules/jest-runner/build/runTest.js:236:23)\n' +
      '    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n' +
      '    at async runTest (<rootDir>/node_modules/jest-runner/build/runTest.js:444:34)\n',
    "2025-07-01T09:58:55.422Z model [ERROR] Runtime error: TypeError: Cannot read properties of undefined (reading '3')\n" +
      '    at new CustomJSDOMEnvironment (<rootDir>/jest-jsdom-test-environment.cjs:8:9)\n' +
      '    at runTestInternal (<rootDir>/node_modules/jest-runner/build/runTest.js:236:23)\n' +
      '    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n' +
      '    at async runTest (<rootDir>/node_modules/jest-runner/build/runTest.js:444:34)\n',
    '2025-07-01T09:58:55.422Z workers [e1co6] Run 0 test(s), skipped 0 test(s)\n',
    "2025-07-01T09:58:55.422Z workers 'Jest Test Run Complete (e1co6): 2025-07-01T09:58:55.422Z'\n",
    '2025-07-01T09:58:55.422Z workers [e1co6] Sandbox is responsive, closing it\n',
    '2025-07-01T09:58:55.422Z runManager Test run finished\n',
    '2025-07-01T09:58:55.422Z project Processed console.log entries\n',
    '2025-07-01T09:58:55.422Z project Processed loading sequences\n',
    '2025-07-01T09:58:55.422Z project Processed executed tests\n',
    '2025-07-01T09:58:55.422Z project Processed code coverage\n',
    '2025-07-01T09:58:55.423Z runManager Test run result processed and sent to IDE\n',
    '2025-07-01T09:58:55.548Z fs File changed in editor: README.md\n',
    '2025-07-01T09:58:55.551Z runManager Test run started; run priority: 2\n',
    '2025-07-01T09:58:55.551Z testTask Test files from affected: 0, from deleted or manually requested: 0, from recently changed: 1, from loaded by: 0, from failing: 0\n',
    '2025-07-01T09:58:55.552Z workers Starting test run\n',
    '2025-07-01T09:58:55.552Z nodeRunner Starting sandbox [worker #0, session #jld76]\n',
    '2025-07-01T09:58:55.552Z nodeRunner Preparing sandbox [worker #0, session #jld76]\n',
    '2025-07-01T09:58:55.552Z nodeRunner Prepared sandbox [worker #0, session #jld76]\n',
    '2025-07-01T09:58:55.552Z workers [worker #0, session #jld76] Running tests in sandbox\n',
    "2025-07-01T09:58:55.553Z workers 'Configuring Jest (jld76)'\n",
    "2025-07-01T09:58:55.553Z workers 'Getting Jest test data (jld76)'\n",
    "2025-07-01T09:58:55.553Z workers 'Scheduling Jest Test Run (jld76): 2025-07-01T09:58:55.553Z'\n",
    "2025-07-01T09:58:55.561Z workers Sandbox (active) [jld76] error: TypeError: Cannot read properties of undefined (reading '3')\n" +
      '    at new CustomJSDOMEnvironment (<rootDir>/jest-jsdom-test-environment.cjs:8:9)\n' +
      '    at runTestInternal (<rootDir>/node_modules/jest-runner/build/runTest.js:236:23)\n' +
      '    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n' +
      '    at async runTest (<rootDir>/node_modules/jest-runner/build/runTest.js:444:34)\n',
    "2025-07-01T09:58:55.561Z model [ERROR] Runtime error: TypeError: Cannot read properties of undefined (reading '3')\n" +
      '    at new CustomJSDOMEnvironment (<rootDir>/jest-jsdom-test-environment.cjs:8:9)\n' +
      '    at runTestInternal (<rootDir>/node_modules/jest-runner/build/runTest.js:236:23)\n' +
      '    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n' +
      '    at async runTest (<rootDir>/node_modules/jest-runner/build/runTest.js:444:34)\n',
    '2025-07-01T09:58:55.561Z workers [jld76] Run 0 test(s), skipped 0 test(s)\n',
    "2025-07-01T09:58:55.561Z workers 'Jest Test Run Complete (jld76): 2025-07-01T09:58:55.561Z'\n",
    '2025-07-01T09:58:55.561Z workers [jld76] Sandbox is responsive, closing it\n',
    '2025-07-01T09:58:55.561Z runManager Test run finished\n',
    '2025-07-01T09:58:55.561Z project Processed console.log entries\n',
    '2025-07-01T09:58:55.561Z project Processed loading sequences\n',
    '2025-07-01T09:58:55.561Z project Processed executed tests\n',
    '2025-07-01T09:58:55.561Z project Processed code coverage\n',
    '2025-07-01T09:58:55.562Z runManager Test run result processed and sent to IDE\n',
    '2025-07-01T09:58:55.807Z fs File changed in editor: README.md\n',
    '2025-07-01T09:58:55.811Z runManager Test run started; run priority: 2\n',
    '2025-07-01T09:58:55.811Z testTask Test files from affected: 0, from deleted or manually requested: 0, from recently changed: 1, from loaded by: 0, from failing: 0\n',
    '2025-07-01T09:58:55.811Z workers Starting test run\n',
    '2025-07-01T09:58:55.811Z nodeRunner Starting sandbox [worker #0, session #byj02]\n',
    '2025-07-01T09:58:55.811Z nodeRunner Preparing sandbox [worker #0, session #byj02]\n',
    '2025-07-01T09:58:55.811Z nodeRunner Prepared sandbox [worker #0, session #byj02]\n',
    '2025-07-01T09:58:55.812Z workers [worker #0, session #byj02] Running tests in sandbox\n',
    "2025-07-01T09:58:55.812Z workers 'Configuring Jest (byj02)'\n",
    "2025-07-01T09:58:55.812Z workers 'Getting Jest test data (byj02)'\n",
    "2025-07-01T09:58:55.813Z workers 'Scheduling Jest Test Run (byj02): 2025-07-01T09:58:55.812Z'\n",
    "2025-07-01T09:58:55.825Z workers Sandbox (active) [byj02] error: TypeError: Cannot read properties of undefined (reading '3')\n" +
      '    at new CustomJSDOMEnvironment (<rootDir>/jest-jsdom-test-environment.cjs:8:9)\n' +
      '    at runTestInternal (<rootDir>/node_modules/jest-runner/build/runTest.js:236:23)\n' +
      '    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n' +
      '    at async runTest (<rootDir>/node_modules/jest-runner/build/runTest.js:444:34)\n',
    "2025-07-01T09:58:55.825Z model [ERROR] Runtime error: TypeError: Cannot read properties of undefined (reading '3')\n" +
      '    at new CustomJSDOMEnvironment (<rootDir>/jest-jsdom-test-environment.cjs:8:9)\n' +
      '    at runTestInternal (<rootDir>/node_modules/jest-runner/build/runTest.js:236:23)\n' +
      '    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n' +
      '    at async runTest (<rootDir>/node_modules/jest-runner/build/runTest.js:444:34)\n',
    '2025-07-01T09:58:55.825Z workers [byj02] Run 0 test(s), skipped 0 test(s)\n',
    "2025-07-01T09:58:55.825Z workers 'Jest Test Run Complete (byj02): 2025-07-01T09:58:55.825Z'\n",
    '2025-07-01T09:58:55.825Z workers [byj02] Sandbox is responsive, closing it\n',
    '2025-07-01T09:58:55.825Z runManager Test run finished\n',
    '2025-07-01T09:58:55.825Z project Processed console.log entries\n',
    '2025-07-01T09:58:55.825Z project Processed loading sequences\n',
    '2025-07-01T09:58:55.825Z project Processed executed tests\n',
    '2025-07-01T09:58:55.825Z project Processed code coverage\n',
    '2025-07-01T09:58:55.826Z runManager Test run result processed and sent to IDE\n',
    '2025-07-01T09:58:56.058Z fs File changed in editor: README.md\n',
    '2025-07-01T09:58:56.063Z runManager Test run started; run priority: 2\n',
    '2025-07-01T09:58:56.063Z testTask Test files from affected: 0, from deleted or manually requested: 0, from recently changed: 1, from loaded by: 0, from failing: 0\n',
    '2025-07-01T09:58:56.063Z workers Starting test run\n',
    '2025-07-01T09:58:56.064Z nodeRunner Starting sandbox [worker #0, session #e824m]\n',
    '2025-07-01T09:58:56.064Z nodeRunner Preparing sandbox [worker #0, session #e824m]\n',
    '2025-07-01T09:58:56.064Z nodeRunner Prepared sandbox [worker #0, session #e824m]\n',
    '2025-07-01T09:58:56.064Z workers [worker #0, session #e824m] Running tests in sandbox\n',
    "2025-07-01T09:58:56.064Z workers 'Configuring Jest (e824m)'\n",
    "2025-07-01T09:58:56.064Z workers 'Getting Jest test data (e824m)'\n",
    "2025-07-01T09:58:56.064Z workers 'Scheduling Jest Test Run (e824m): 2025-07-01T09:58:56.064Z'\n",
    "2025-07-01T09:58:56.079Z workers Sandbox (active) [e824m] error: TypeError: Cannot read properties of undefined (reading '3')\n" +
      '    at new CustomJSDOMEnvironment (<rootDir>/jest-jsdom-test-environment.cjs:8:9)\n' +
      '    at runTestInternal (<rootDir>/node_modules/jest-runner/build/runTest.js:236:23)\n' +
      '    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n' +
      '    at async runTest (<rootDir>/node_modules/jest-runner/build/runTest.js:444:34)\n',
    "2025-07-01T09:58:56.080Z model [ERROR] Runtime error: TypeError: Cannot read properties of undefined (reading '3')\n" +
      '    at new CustomJSDOMEnvironment (<rootDir>/jest-jsdom-test-environment.cjs:8:9)\n' +
      '    at runTestInternal (<rootDir>/node_modules/jest-runner/build/runTest.js:236:23)\n' +
      '    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n' +
      '    at async runTest (<rootDir>/node_modules/jest-runner/build/runTest.js:444:34)\n',
    '2025-07-01T09:58:56.080Z workers [e824m] Run 0 test(s), skipped 0 test(s)\n',
    "2025-07-01T09:58:56.080Z workers 'Jest Test Run Complete (e824m): 2025-07-01T09:58:56.080Z'\n",
    '2025-07-01T09:58:56.080Z workers [e824m] Sandbox is responsive, closing it\n',
    '2025-07-01T09:58:56.080Z runManager Test run finished\n',
    '2025-07-01T09:58:56.080Z project Processed console.log entries\n',
    '2025-07-01T09:58:56.080Z project Processed loading sequences\n',
    '2025-07-01T09:58:56.080Z project Processed executed tests\n',
    '2025-07-01T09:58:56.080Z project Processed code coverage\n',
    '2025-07-01T09:58:56.082Z runManager Test run result processed and sent to IDE\n',
    '2025-07-01T09:58:56.941Z fs File changed in editor: README.md\n',
    '2025-07-01T09:58:56.944Z runManager Test run started; run priority: 2\n',
    '2025-07-01T09:58:56.944Z testTask Test files from affected: 0, from deleted or manually requested: 0, from recently changed: 1, from loaded by: 0, from failing: 0\n',
    '2025-07-01T09:58:56.944Z workers Starting test run\n',
    '2025-07-01T09:58:56.944Z nodeRunner Starting sandbox [worker #0, session #8eutp]\n',
    '2025-07-01T09:58:56.944Z nodeRunner Preparing sandbox [worker #0, session #8eutp]\n',
    '2025-07-01T09:58:56.944Z nodeRunner Prepared sandbox [worker #0, session #8eutp]\n',
    '2025-07-01T09:58:56.944Z workers [worker #0, session #8eutp] Running tests in sandbox\n',
    "2025-07-01T09:58:56.945Z workers 'Configuring Jest (8eutp)'\n",
    "2025-07-01T09:58:56.945Z workers 'Getting Jest test data (8eutp)'\n",
    "2025-07-01T09:58:56.945Z workers 'Scheduling Jest Test Run (8eutp): 2025-07-01T09:58:56.945Z'\n",
    "2025-07-01T09:58:56.954Z workers Sandbox (active) [8eutp] error: TypeError: Cannot read properties of undefined (reading '3')\n" +
      '    at new CustomJSDOMEnvironment (<rootDir>/jest-jsdom-test-environment.cjs:8:9)\n' +
      '    at runTestInternal (<rootDir>/node_modules/jest-runner/build/runTest.js:236:23)\n' +
      '    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n' +
      '    at async runTest (<rootDir>/node_modules/jest-runner/build/runTest.js:444:34)\n',
    "2025-07-01T09:58:56.954Z model [ERROR] Runtime error: TypeError: Cannot read properties of undefined (reading '3')\n" +
      '    at new CustomJSDOMEnvironment (<rootDir>/jest-jsdom-test-environment.cjs:8:9)\n' +
      '    at runTestInternal (<rootDir>/node_modules/jest-runner/build/runTest.js:236:23)\n' +
      '    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n' +
      '    at async runTest (<rootDir>/node_modules/jest-runner/build/runTest.js:444:34)\n',
    '2025-07-01T09:58:56.954Z workers [8eutp] Run 0 test(s), skipped 0 test(s)\n',
    "2025-07-01T09:58:56.954Z workers 'Jest Test Run Complete (8eutp): 2025-07-01T09:58:56.954Z'\n",
    '2025-07-01T09:58:56.955Z workers [8eutp] Sandbox is responsive, closing it\n',
    '2025-07-01T09:58:56.955Z runManager Test run finished\n',
    '2025-07-01T09:58:56.955Z project Processed console.log entries\n',
    '2025-07-01T09:58:56.955Z project Processed loading sequences\n',
    '2025-07-01T09:58:56.955Z project Processed executed tests\n',
    '2025-07-01T09:58:56.955Z project Processed code coverage\n',
    '2025-07-01T09:58:56.955Z runManager Test run result processed and sent to IDE\n',
    '2025-07-01T09:58:57.153Z fs File changed in editor: README.md\n',
    '2025-07-01T09:58:57.156Z runManager Test run started; run priority: 2\n',
    '2025-07-01T09:58:57.156Z testTask Test files from affected: 0, from deleted or manually requested: 0, from recently changed: 1, from loaded by: 0, from failing: 0\n',
    '2025-07-01T09:58:57.157Z workers Starting test run\n',
    '2025-07-01T09:58:57.157Z nodeRunner Starting sandbox [worker #0, session #0cozt]\n',
    '2025-07-01T09:58:57.157Z nodeRunner Preparing sandbox [worker #0, session #0cozt]\n',
    '2025-07-01T09:58:57.157Z nodeRunner Prepared sandbox [worker #0, session #0cozt]\n',
    '2025-07-01T09:58:57.157Z workers [worker #0, session #0cozt] Running tests in sandbox\n',
    "2025-07-01T09:58:57.157Z workers 'Configuring Jest (0cozt)'\n",
    "2025-07-01T09:58:57.158Z workers 'Getting Jest test data (0cozt)'\n",
    "2025-07-01T09:58:57.158Z workers 'Scheduling Jest Test Run (0cozt): 2025-07-01T09:58:57.158Z'\n",
    "2025-07-01T09:58:57.167Z workers Sandbox (active) [0cozt] error: TypeError: Cannot read properties of undefined (reading '3')\n" +
      '    at new CustomJSDOMEnvironment (<rootDir>/jest-jsdom-test-environment.cjs:8:9)\n' +
      '    at runTestInternal (<rootDir>/node_modules/jest-runner/build/runTest.js:236:23)\n' +
      '    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n' +
      '    at async runTest (<rootDir>/node_modules/jest-runner/build/runTest.js:444:34)\n',
    "2025-07-01T09:58:57.167Z model [ERROR] Runtime error: TypeError: Cannot read properties of undefined (reading '3')\n" +
      '    at new CustomJSDOMEnvironment (<rootDir>/jest-jsdom-test-environment.cjs:8:9)\n' +
      '    at runTestInternal (<rootDir>/node_modules/jest-runner/build/runTest.js:236:23)\n' +
      '    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n' +
      '    at async runTest (<rootDir>/node_modules/jest-runner/build/runTest.js:444:34)\n',
    '2025-07-01T09:58:57.167Z workers [0cozt] Run 0 test(s), skipped 0 test(s)\n',
    "2025-07-01T09:58:57.167Z workers 'Jest Test Run Complete (0cozt): 2025-07-01T09:58:57.167Z'\n",
    '2025-07-01T09:58:57.167Z workers [0cozt] Sandbox is responsive, closing it\n',
    '2025-07-01T09:58:57.167Z runManager Test run finished\n',
    '2025-07-01T09:58:57.167Z project Processed console.log entries\n',
    '2025-07-01T09:58:57.167Z project Processed loading sequences\n',
    '2025-07-01T09:58:57.167Z project Processed executed tests\n',
    '2025-07-01T09:58:57.167Z project Processed code coverage\n',
    '2025-07-01T09:58:57.168Z runManager Test run result processed and sent to IDE\n',
    '2025-07-01T09:59:00.527Z fs File changed in editor: README.md\n',
    '2025-07-01T09:59:00.532Z runManager Test run started; run priority: 2\n',
    '2025-07-01T09:59:00.532Z testTask Test files from affected: 0, from deleted or manually requested: 0, from recently changed: 1, from loaded by: 0, from failing: 0\n',
    '2025-07-01T09:59:00.532Z workers Starting test run\n',
    '2025-07-01T09:59:00.532Z nodeRunner Starting sandbox [worker #0, session #eqhyw]\n',
    '2025-07-01T09:59:00.532Z nodeRunner Preparing sandbox [worker #0, session #eqhyw]\n',
    '2025-07-01T09:59:00.533Z nodeRunner Prepared sandbox [worker #0, session #eqhyw]\n',
    '2025-07-01T09:59:00.533Z workers [worker #0, session #eqhyw] Running tests in sandbox\n',
    "2025-07-01T09:59:00.533Z workers 'Configuring Jest (eqhyw)'\n",
    "2025-07-01T09:59:00.534Z workers 'Getting Jest test data (eqhyw)'\n",
    "2025-07-01T09:59:00.534Z workers 'Scheduling Jest Test Run (eqhyw): 2025-07-01T09:59:00.533Z'\n",
    "2025-07-01T09:59:00.545Z workers Sandbox (active) [eqhyw] error: TypeError: Cannot read properties of undefined (reading '3')\n" +
      '    at new CustomJSDOMEnvironment (<rootDir>/jest-jsdom-test-environment.cjs:8:9)\n' +
      '    at runTestInternal (<rootDir>/node_modules/jest-runner/build/runTest.js:236:23)\n' +
      '    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n' +
      '    at async runTest (<rootDir>/node_modules/jest-runner/build/runTest.js:444:34)\n',
    "2025-07-01T09:59:00.545Z model [ERROR] Runtime error: TypeError: Cannot read properties of undefined (reading '3')\n" +
      '    at new CustomJSDOMEnvironment (<rootDir>/jest-jsdom-test-environment.cjs:8:9)\n' +
      '    at runTestInternal (<rootDir>/node_modules/jest-runner/build/runTest.js:236:23)\n' +
      '    at processTicksAndRejections (node:internal/process/task_queues:95:5)\n' +
      '    at async runTest (<rootDir>/node_modules/jest-runner/build/runTest.js:444:34)\n',
    '2025-07-01T09:59:00.545Z workers [eqhyw] Run 0 test(s), skipped 0 test(s)\n',
    "2025-07-01T09:59:00.545Z workers 'Jest Test Run Complete (eqhyw): 2025-07-01T09:59:00.545Z'\n",
    '2025-07-01T09:59:00.545Z workers [eqhyw] Sandbox is responsive, closing it\n',
    '2025-07-01T09:59:00.546Z runManager Test run finished\n',
    '2025-07-01T09:59:00.546Z project Processed console.log entries\n',
    '2025-07-01T09:59:00.546Z project Processed loading sequences\n',
    '2025-07-01T09:59:00.546Z project Processed executed tests\n',
    '2025-07-01T09:59:00.546Z project Processed code coverage\n',
    '2025-07-01T09:59:00.548Z runManager Test run result processed and sent to IDE\n',
    '2025-07-01T09:59:01.793Z fs File changed: README.md\n',
    '2025-07-01T09:59:01.797Z runManager Test run started; run priority: 2\n',
    '2025-07-01T09:59:01.797Z testTask Test files from affected: 0, from deleted or manually requested: 0, from recently changed: 0, from loaded by: 0, from failing: 0\n',
    '2025-07-01T09:59:01.797Z runManager Test run finished\n',
    '2025-07-01T09:59:01.797Z runManager Test run data re-queued\n',
    '2025-07-01T09:59:01.897Z fs File changed in editor: README.md\n',
    '2025-07-01T09:59:01.897Z fs No changes detected for README.md\n'
  ]
}
```
