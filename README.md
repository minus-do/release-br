# GitHub Actions Workflows

## Create Releases Workflow

The [`.github/workflows/create-release.yml`](.github/workflows/create-release.yml) workflow is designed to list all tags from a specified branch (e.g., `release`) and create releases based on those tags.

### Usage

1. Navigate to the "Actions" tab in your GitHub repository.
2. Select the `create-release` workflow.
3. Click on the "Run workflow" button.
4. Provide the branch name from which you want to list tags (default is `release`).
5. Click the "Run workflow" button to start the workflow.

This workflow will:
- List all tags from the specified branch.
- Create releases based on the listed tags.

## Delete Releases Workflow

The [`.github/workflows/delete-releases.yml`](.github/workflows/delete-releases.yml) workflow allows you to list all releases and optionally delete them based on the workflow input.

### Usage

1. Navigate to the "Actions" tab in your GitHub repository.
2. Select the `delete-releases` workflow.
3. Click on the "Run workflow" button.
4. Provide the following inputs:
   - `delete-releases`: Choose `yes` to delete the releases or `no` to only list them.
   - `max-number-of-tags`: Specify the maximum number of tags to list (default is `500`).
5. Click the "Run workflow" button to start the workflow.

This workflow will:
- List all releases up to the specified maximum number of tags.
- Optionally delete the listed releases if `delete-releases` is set to `yes`.

### Example

To list all tags from the `release` branch and create releases based on those tags, run the [`.github/workflows/create-release.yml`](.github/workflows/create-release.yml) workflow with the branch name set to `release`.

To list all releases without deleting them, run the [`.github/workflows/delete-releases.yml`](.github/workflows/delete-releases.yml) workflow with `delete-releases` set to `no`.

To list and delete all releases, run the [`.github/workflows/delete-releases.yml`](.github/workflows/delete-releases.yml) workflow with `delete-releases` set to `yes`.

For more details, refer to the respective workflow files:
- [create-release.yml](.github/workflows/create-release.yml)
- [delete-releases.yml](.github/workflows/delete-releases.yml)
