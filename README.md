# Contributing

## Updating the Ecosystem Page

If you're a builder who wants to add or update your project on the [Treasure Ecosystem](https://treasure.lol/ecosystem) page, follow these steps:
1. Fork this repository.
2. Create a new branch for your changes.
3. Update the `app/data/ecosystem.ts` with your project information. All fields are required. Each entry should follow this format:

    ```ts
    {
        name: "The Beacon",
        type: "Game",
        description:
          "The Beacon is a fantasy action roguelite RPG. Venture into dungeons, defeat evils, and expand the Beacon's protective light to keep humanity safe!",
        url: "thebeacon.gg",
        gameUrl: "app.treasure.lol/games/the-beacon",
        image: "/img/ecosystem/the-beacon.webp",
    }
    ```

    - name: Your project's name
    - type: Your project's category
    - description: A brief description of your project, must be less than 200 characters
    - url: Your project's website URL
    - gameUrl: Your project's game URL on the Treasure App
    - image: Path to your project's logo image

4. When adding and/or updating a logo, place a 400x400 pixel PNG file in the `public/img/ecosystem`. The file should be named appropriately (e.g., `your-project-name.webp`). The logo should be an App Store or Play Store iconographic version, not a full wordmark.
5. Create a pull request with your changes.

By opening a PR to add your project, you authorize and license TreasureDAO on a non-exclusive, worldwide, irrevocable, sublicensable, and royalty-free basis to reproduce, distribute, transmit, make available, perform, display, or otherwise use the submitted Multimedia Assets for any purpose, including any marketing or promotional activities related to Treasure. Any goodwill associated with use of trademarks submitted in your Multimedia Assets will inure to your benefit. You further acknowledge and represent that you have all IP rights in the Multimedia Assets, that the Multimedia Assets do not infringe the rights of any third party, and that you have the right to grant this license to TreasureDAO.

**Note**: Submissions do not guarantee inclusion and all submissions are subject to review. Your project must be live on Treasure to potentially be included. Ensure all information is accurate and up-to-date.

## How to Deploy

Deploys are made manually, via github actions.

![how to](https://github.com/TreasureProject/treasure-website/assets/15570714/a7ce4cfd-91f5-45fd-97e4-77f7c4168222 "github action")

Selecting anything other than `master` will trigger a deploy to the staging environment (https://treasure-website-staging.fly.dev). Selecting `master` will trigger a deploy to the production environment.

## Managing team members

1. Add the new member's pfp under [here](https://github.com/TreasureProject/treasure-website-team-images/issues/1). Drag-and-drop the image to the comment box.

2. After it uploads, you'll see github generate a link to the image. Copy the link.

3. Go [here](https://github.com/TreasureProject/treasure-website/issues/290) and click on the `edit` button on the top right.

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
