## How to deploy

Deploys are made manually, via github actions.

![how to](https://github.com/TreasureProject/treasure-website/assets/15570714/a7ce4cfd-91f5-45fd-97e4-77f7c4168222 "github action")

Selecting anything other than `master` will trigger a deploy to the staging environment (https://treasure-website-staging.fly.dev). Selecting `master` will trigger a deploy to the production environment.

## Managing team members

1. Add the new member's pfp under ![here](https://github.com/TreasureProject/treasure-website-team-images/issues/1). Drag-and-drop the image to the comment box.

2. After it uploads, you'll see github generate a link to the image. Copy the link.

3. Go ![here](https://github.com/TreasureProject/treasure-website/issues/290) and click on the `edit` button on the top right.

4. Add the new member's name and the link to their pfp in the following format:
```markdown
### [name]
- **Title**: [title]
- **Image**: [image link copied from step 2]
- **Twitter**: [twitter link if they have one. If not, remove this entire line]
- **Discord**: [discord username if they have one. If not, remove this entire line]
``` 

5. Click on `Update comment` and you're done!

Removing a member is as simple as deleting their entry from the list.