---
title: Groups
---

# Managing Groups

Groups define a set of users with similar properties. Administrators can create new groups and add users to them. They can then assign permissions to an entire group, which will be reflected for each user in that group. This greatly simplifies permission management for similar users since the administrator only needs to assign a permission to the entire group instead of each individual user.

## Creating a Group

To create a new group:

1. Click **Groups** from the left-hand menu, then click **Create** in the right-hand panel.

2. The group fields appear in the right-hand panel. Populate them as follows:

| Field | Description |
|-------|-------------|
| Name         | Descriptive name for your group                            |
| Status       | Status of the application, determines if it is enabled for use or not. The value can be `DISABLED`, `APPROVED`, `PENDING` or `REJECTED`. To enable your group for use, select `APPROVED`. |
| Description  | A more detailed description for your group (optional)       |
| Users        | Use the `+ Add` button to add existing users who will belong to this group. Once you add a user, they will automatically inherit any permissions assigned to the group, but not the applications.Alternatively, to remove a user, click `X` to the right of the user. |
| Applications | Use the `+ Add` button to add existing applications that this group has access to. Alternatively, to remove an application, click `X` to the right of the application. |
| Permissions  | Use the `+ Add` button to add existing policies (permission sets) that should apply to this group. Once you add a policy, you must also specify whether the group is granted the `READ`, `WRITE`, or `DENY` access level for that policy. Alternatively, to remove a policy, click `X` to the right of the user. |

![Entity](../../assets/create-group.png 'Create Group')

3. Click **Save**. The group is created, and the users and groups you have assigned to it will be granted only the particular permissions that you have specified for them.

## Editing a Group

To edit a group:

1. Click **Groups** from the left-hand menu, then click the group you want to edit from the groups table.

2. The group's details pane will display on the right. Click **Edit** and modify the fields as required. The fields are the same as described earlier in <a href="/documentation/ego/user-guide/admin-ui#creating-a-group" target="_blank" rel="noopener noreferrer">Creating a Group</a>.

## Deleting a Group

To delete a group:

1. Click **Groups** from the left-hand menu, then click the group you want to delete from the groups table.

2. The group's details pane will display on the right. Click **Delete**. You will be asked to confirm the deletion.

<Warning>**NOTE:** Before deleting a group, ensure that this is your intended action, as it cannot be reversed. You can manually re-create the group if needed, but the previous details will be lost.</Warning>