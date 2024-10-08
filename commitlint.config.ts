// export default { extends: ["@commitlint/config-conventional"] };

import type { UserConfig } from "@commitlint/types";

const Configuration: UserConfig = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [
      2,
      "always",
      [
        "add", // Code addition
        "feat", // New features
        "fix", // Bug fixes
        "chore", // Maintenance tasks
        "ci", // CI configuration changes
        "docs", // Documentation updates
        "perf", // Performance improvements
        "refactor", // Code refactoring
        "revert", // Revert to previous commit
        "style", // Code style changes
        "test", // Adding or updating tests
      ],
    ],
  },
};

module.exports = Configuration;
