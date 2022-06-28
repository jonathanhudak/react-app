/**
 * This is a sample hook script created by Amplify CLI.
 * To start using this pre-push hook please change the filename:
 * pre-push.js.sample  ->  pre-push.js
 *
 * learn more: https://docs.amplify.aws/cli/usage/command-hooks
 */

/**
 * @param data { { amplify: { environment: { envName: string, projectPath: string, defaultEditor: string }, command: string, subCommand: string, argv: string[] } } }
 * @param error { { message: string, stack: string } }
 */
const fs = require("fs");
const parameters = JSON.parse(fs.readFileSync(0, { encoding: "utf8" }));

// Get the running Amplify CLI major version number
const currentCLIMajorVersion = parameters.data.amplify.version.split(".")[0];
console.log("Amplify CLI major version: ", currentCLIMajorVersion);

const MINIMUM_MAJOR_AMPLIFY_CLI_VERSION = 5;
console.log(
  "Minimum required Amplify CLI major version: ",
  MINIMUM_MAJOR_AMPLIFY_CLI_VERSION
);

if (currentCLIMajorVersion < MINIMUM_MAJOR_AMPLIFY_CLI_VERSION) {
  // Non-zero exit code will stop the Amplify CLI command's execution
  console.log("Minimum CLI version requirement not met.");
  process.exit(1);
} else {
  console.log("Minimum CLI version requirement met.");
  process.exit(0);
}
